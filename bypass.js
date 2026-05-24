/**
 * Bypass script: mocks native bridge APIs and login state
 * so the app can render the officeDashboard without auth.
 */
(function () {
  'use strict';

  // 0. Stub globals that the main bundle expects
  window.__XIAOBAO_AGENT_CSS__ = '';
  window.jsRunningPerformanceNowResult = Date.now();

  // 0b. Suppress non-critical errors and warnings
  window.addEventListener('unhandledrejection', function(e) {
    var msg = String(e.reason);
    if (msg.includes('toJSON') || msg.includes('usePreview') || msg.includes('removeChild')) {
      e.preventDefault();
    }
  });
  var origWarn = console.warn;
  var origError = console.error;
  var suppressPatterns = ['toJSON', 'usePreview', 'privilege', 'getReminderNotice', 'usePrivilegeRequest', 'ScheduledTask', 'connection 不可用', 'TokenAdapter', 'WeixinStore', 'refreshApps', 'image load error', 'useReminderNotice'];
  function isSuppressed(args) {
    var s = Array.prototype.join.call(args, ' ');
    for (var i = 0; i < suppressPatterns.length; i++) {
      if (s.includes(suppressPatterns[i])) return true;
    }
    return false;
  }
  console.warn = function () { if (!isSuppressed(arguments)) origWarn.apply(console, arguments); };
  console.error = function () { if (!isSuppressed(arguments)) origError.apply(console, arguments); };

  // 1. Mock login cookies — the app reads logintype/openid/accesstoken from cookies
  document.cookie = 'logintype=mock; path=/';
  document.cookie = 'openid=mock_user_001; path=/';
  document.cookie = 'accesstoken=mock_token_abc; path=/';
  document.cookie = 'refreshtoken=mock_refresh; path=/';
  document.cookie = 'nickname=MockUser; path=/';
  document.cookie = 'scope=all; path=/';
  document.cookie = 'access_token_expire_time=' + (Math.floor(Date.now() / 1000) + 86400) + '; path=/';

  // 2. Mock envInfo in localStorage (used by multiple components)
  localStorage.setItem('envInfo', JSON.stringify({
    guid: 'mock-guid-12345',
    physical_memory: 32,
    os: 'macOS',
    os_version: '14.0',
    app_version: '4.0.0',
  }));

  function logBypass(msg) {
    console.log('[bypass] ' + msg);
  }

  // 2a. Hide sidebar, top bar, right panel — office-only layout
  var cssText =
    '[class*="_sidebar_3vz2u"] { display: none !important; }' +
    '[class*="_operationBar_3kjbu"] { display: none !important; }' +
    '[class*="_rightPanel_xk3qg"] { display: none !important; }' +
    '[class*="_mainContent_xk3qg"] { flex: 1 !important; }' +
    '[class*="_errorBoundary_114qa"] { display: none !important; }' +
    '[class*="_loadingContent_1wtsy"] { display: none !important; }';
  function injectStyle() {
    var style = document.createElement('style');
    style.textContent = cssText;
    (document.head || document.documentElement).appendChild(style);
  }
  injectStyle();
  document.addEventListener('DOMContentLoaded', injectStyle);

  // 2b. Skip cold-start checker (it verifies gateway/agent/kb connections)
  sessionStorage.setItem('ai-launcher_startCheckerPassed', JSON.stringify({ expiredTime: 0, val: true }));

  // 2c. Override IntersectionObserver to always report visible
  // The workbench uses this to detect when its canvas enters viewport
  var OriginalIntersectionObserver = window.IntersectionObserver;
  window.IntersectionObserver = function (callback, options) {
    var observer = {
      root: (options && options.root) || null,
      rootMargin: (options && options.rootMargin) || '0px',
      thresholds: (options && options.threshold) ? [].concat(options.threshold) : [0],
      observe: function (target) {
        // Immediately report as fully visible
        setTimeout(function () {
          callback([{
            target: target,
            isIntersecting: true,
            intersectionRatio: 1.0,
            boundingClientRect: target.getBoundingClientRect ? target.getBoundingClientRect() : {},
            intersectionRect: target.getBoundingClientRect ? target.getBoundingClientRect() : {},
            rootBounds: null,
            time: performance.now()
          }], observer);
        }, 50);
      },
      unobserve: function () { },
      disconnect: function () { },
      takeRecords: function () { return []; }
    };
    return observer;
  };
  window.IntersectionObserver.prototype = OriginalIntersectionObserver ? OriginalIntersectionObserver.prototype : {};

  // 3. Mock native bridge (Jsbridge / handler pattern)
  // The app calls En.checkHasApi which checks window.Jsbridge.handler
  var noopAsync = function () {
    return Promise.resolve({ code: 0, data: '{}' });
  };
  var noopHandler = new Proxy({}, {
    get: function () {
      return noopAsync;
    }
  });

  window.Jsbridge = new Proxy({}, {
    get: function (target, prop) {
      if (prop === 'handler') return noopHandler;
      if (prop === 'invoke') return noopAsync;
      if (prop === 'on') return function () { };
      if (prop === 'off') return function () { };
      return noopHandler;
    }
  });

  // Also mock the module-style bridge check
  window.__NATIVE_BRIDGE_READY__ = true;

  // 4. After app renders, navigate to officeDashboard
  var navigated = false;
  var attemptNavigate = function () {
    if (navigated) return;
    // The app exposes __STORE_STATE__ and __TAB_ROUTERS__ on window
    if (window.__TAB_ROUTERS__ && window.__STORE_STATE__) {
      try {
        var state = window.__STORE_STATE__();
        var activeTabId = state.tab.activeTabId;
        var router = window.__TAB_ROUTERS__.get(activeTabId);
        if (router && router.navigate) {
          router.navigate('/officeDashboard');
          navigated = true;
          console.log('[bypass] Navigated to /officeDashboard');
          return;
        }
      } catch (e) {
        console.warn('[bypass] Navigate attempt failed:', e);
      }
    }
  };

  // Poll until the store is ready (app init is async)
  var pollCount = 0;
  var pollInterval = setInterval(function () {
    attemptNavigate();
    pollCount++;
    if (navigated || pollCount > 100) {
      clearInterval(pollInterval);
    }
  }, 100);

  // 5. Mock fetch for API calls that would fail without server
  var originalFetch = window.fetch;
  window.fetch = function (url, options) {
    var urlStr = typeof url === 'string' ? url : (url && url.url ? url.url : '');

    function mockJsonResponse(body) {
      var json = typeof body === 'string' ? body : JSON.stringify(body);
      var resp = new Response(json, { status: 200, headers: { 'Content-Type': 'application/json' } });
      if (!resp.headers.toJSON) {
        resp.headers.toJSON = function () {
          var obj = {};
          resp.headers.forEach(function (v, k) { obj[k] = v; });
          return obj;
        };
      }
      return Promise.resolve(resp);
    }

    // Block external URLs that cause CORS errors
    if (urlStr.includes('qq.com') || urlStr.includes('ailauncher') || urlStr.includes('beacon')) {
      return mockJsonResponse({});
    }

    // Mock session list API
    if (urlStr.includes('/api/') || urlStr.includes('/v3/')) {
      return mockJsonResponse({ code: 0, data: { list: [], total: 0, hasMore: false }, ok: true });
    }

    // Mock websocket/engine.io polling
    if (urlStr.includes('/engine.io') || urlStr.includes('/socket.io')) {
      return mockJsonResponse({});
    }

    // Force no-cache for workbench assets to prevent stale cache responses
    if (urlStr.includes('/workbench/')) {
      var newOpts = Object.assign({}, options || {}, { cache: 'no-store' });
      return originalFetch.call(this, url, newOpts);
    }

    return originalFetch.apply(this, arguments);
  };

  // 5b. Mock XMLHttpRequest for backend calls
  // Aegis SDK overwrites XMLHttpRequest.prototype.send after us,
  // so we must freeze blocked XHRs in open() — not wait for send().
  var OriginalXHR = window.XMLHttpRequest;
  function shouldBlockXHR(url) {
    var s = String(url);
    if ((s.includes('localhost') || s.includes('127.0.0.1')) && !s.includes('localhost:5175')) return true;
    if (s.includes('ailauncher') || s.includes('beacon') || s.includes('qq.com')) return true;
    return false;
  }
  window.XMLHttpRequest = function () {
    var xhr = new OriginalXHR();
    var origOpen = xhr.open;
    xhr.open = function (method, url) {
      if (shouldBlockXHR(url)) {
        xhr._blocked = true;
        var mockBody = '{"code":0,"data":{}}';
        Object.defineProperty(xhr, 'status', { configurable: true, get: function () { return 200; } });
        Object.defineProperty(xhr, 'readyState', { configurable: true, get: function () { return 4; } });
        Object.defineProperty(xhr, 'responseText', { configurable: true, get: function () { return mockBody; } });
        Object.defineProperty(xhr, 'response', { configurable: true, get: function () { return mockBody; } });
        xhr.getAllResponseHeaders = function () { return 'content-type: application/json\r\n'; };
        xhr.getResponseHeader = function (h) { return h.toLowerCase() === 'content-type' ? 'application/json' : null; };
        xhr.send = function () {
          var self = this;
          setTimeout(function () {
            if (self.onreadystatechange) self.onreadystatechange();
            if (self.onload) self.onload();
          }, 0);
        };
        xhr.abort = function () {};
        return;
      }
      return origOpen.apply(xhr, arguments);
    };
    return xhr;
  };
  window.XMLHttpRequest.prototype = OriginalXHR.prototype;

  // 6. Mock WebSocket to prevent connection errors
  var OriginalWebSocket = window.WebSocket;
  window.WebSocket = function (url, protocols) {
    console.log('[bypass] WebSocket blocked:', url);
    var ws = {
      url: url,
      readyState: 1,
      send: function () { },
      close: function () { this.readyState = 3; },
      addEventListener: function () { },
      removeEventListener: function () { },
      onopen: null,
      onclose: null,
      onmessage: null,
      onerror: null
    };
    // Simulate open event
    setTimeout(function () {
      if (ws.onopen) ws.onopen({ type: 'open' });
    }, 0);
    return ws;
  };
  window.WebSocket.CONNECTING = 0;
  window.WebSocket.OPEN = 1;
  window.WebSocket.CLOSING = 2;
  window.WebSocket.CLOSED = 3;

  // 7. Mock gateway connection manager so fetchSessionList completes
  var patched = false;
  var patchInterval = setInterval(function () {
    if (patched) { clearInterval(patchInterval); return; }
    var store = window.__STORE__;
    if (!store || !store.getState) return;
    var state = store.getState();
    if (!state || !state.sessionList || !state.sessionList.setConnectionManager) return;

    patched = true;
    clearInterval(patchInterval);

    var mockConnection = {
      action: function (params) {
        if (params.action === 'conversations.list') {
          return Promise.resolve({ ok: true, data: { conversations: [], has_more: false, total: 0 } });
        }
        return Promise.resolve({ ok: true, data: {} });
      },
      on: function () { },
      off: function () { },
      send: function () { return Promise.resolve(); },
      getConnectionState: function () { return 'connected'; }
    };

    state.sessionList.setConnectionManager({ connection: mockConnection });
    setTimeout(function () {
      var s = store.getState();
      if (s.sessionList.fetchSessionList) {
        s.sessionList.fetchSessionList().catch(function () {});
      }
    }, 100);
  }, 200);

  // 8. Office Control API — exposes window.__office once game is ready
  var officeReady = false;
  var officeInterval = setInterval(function () {
    if (officeReady) { clearInterval(officeInterval); return; }
    var game = window.__game;
    if (!game || !game.scene || !game.scene.agents || game.scene.agents.length === 0) return;

    officeReady = true;
    clearInterval(officeInterval);

    var scene = game.scene;
    var idleDecisionOriginal = null;

    function findAgent(name) {
      var a = scene.agents.find(function (a) { return a.agentName === name; });
      if (!a) throw new Error('[__office] Agent not found: ' + name);
      return a;
    }

    var taskCounter = 0;

    window.__office = {
      // --- Query ---
      agents: function () {
        return scene.agents.map(function (a) {
          return {
            name: a.agentName,
            type: a.agentType,
            slot: a.slotIndex,
            state: a._stateCategory,
            subState: a._subState,
            x: a._x, y: a._y,
            gridCol: a._gridCol, gridRow: a._gridRow,
            seatX: a.seatX, seatY: a.seatY,
            isInWorkstation: a.isInWorkstation,
            isMoving: typeof a.isMoving === 'function' ? a.isMoving() : !!a.path,
            currentTask: a.currentTask ? true : false,
            taskQueueLen: a.taskQueue ? a.taskQueue.length : 0,
          };
        });
      },

      getAgent: function (name) { return findAgent(name); },

      // --- Movement ---
      moveTo: function (name, x, y) {
        var agent = findAgent(name);
        var from = { x: agent._x, y: agent._y };
        var to = { x: x, y: y };
        var path = scene.pathfinding.findPath(from, to, agent.agentType);
        if (!path || path.length === 0) {
          console.warn('[__office] No path found from', from, 'to', to);
          return false;
        }
        agent.setPath(path);
        agent.followPath();
        return true;
      },

      teleport: function (name, x, y) {
        var agent = findAgent(name);
        agent.teleportTo(x, y);
      },

      // --- Animation / State ---
      setState: function (name, subState) {
        var agent = findAgent(name);
        if (agent._stateCategory === 'OFFSTAGE') {
          agent.teleportTo(agent.seatX, agent.seatY);
          agent.displayContainer.visible = true;
          agent.isInWorkstation = true;
          scene.pathfinding.setOccupant(agent.agentType, agent._x, agent._y);
        }
        agent.setStateCategory('IDLE', subState);
        agent.playSubStateAnim(subState.toLowerCase(), true);
      },

      playAnim: function (name, anim, loop) {
        var agent = findAgent(name);
        agent.playSubStateAnim(anim, loop !== false);
      },

      stopAnim: function (name) {
        var agent = findAgent(name);
        agent.stopSubStateAnim();
      },

      // --- Bubble ---
      speak: function (name, text, durationMs) {
        scene.bubbleSystem.speak(name, text, durationMs || 5000);
      },

      stopSpeak: function (name) {
        scene.bubbleSystem.stopSpeak(name);
      },

      // --- Task lifecycle ---
      dispatch: function (sender, receiver, taskId, message) {
        var id = taskId || 'task-' + (++taskCounter);
        var convId = 'conv-' + Date.now();
        game.execute({
          id: id,
          conversationId: convId,
          sender: sender,
          receiver: receiver,
          action: 'DISPATCH',
          message: { role: 'system', content: message || '派发任务给 ' + receiver }
        });
        return { id: id, conversationId: convId };
      },

      start: function (agentName, taskId, message) {
        var convId = 'conv-' + Date.now();
        game.execute({
          id: taskId || 'task-' + (++taskCounter),
          conversationId: convId,
          sender: agentName,
          action: 'START',
          message: { role: 'system', content: message || agentName + ' 开始执行' }
        });
      },

      complete: function (taskId) {
        game.execute({
          id: taskId,
          action: 'COMPLETE'
        });
      },

      // --- Idle behavior control ---
      pauseIdle: function () {
        var idle = scene.taskSystem.idleDecision;
        if (!idleDecisionOriginal) {
          idleDecisionOriginal = idle.canRunDecision.bind(idle);
        }
        idle.canRunDecision = function () { return false; };
        logBypass('idle decisions paused');
      },

      resumeIdle: function () {
        if (idleDecisionOriginal) {
          scene.taskSystem.idleDecision.canRunDecision = idleDecisionOriginal;
          idleDecisionOriginal = null;
          logBypass('idle decisions resumed');
        }
      },

      // --- Raw references ---
      get scene() { return scene; },
      get game() { return game; },
    };

    logBypass('__office API ready (' + scene.agents.length + ' agents)');
  }, 300);

  logBypass('ok');
})();
