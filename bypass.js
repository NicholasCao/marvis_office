(function () {
  'use strict';

  // Track all setInterval IDs for cleanup after scene loads
  var _intervals = [];
  var _origSetInterval = window.setInterval;
  window.setInterval = function () {
    var id = _origSetInterval.apply(window, arguments);
    _intervals.push(id);
    return id;
  };

  // Stub globals expected by main bundle
  window.__XIAOBAO_AGENT_CSS__ = '';
  window.jsRunningPerformanceNowResult = Date.now();

  // Suppress noisy console messages from mocked subsystems
  var suppressRe = /toJSON|usePreview|privilege|getReminderNotice|usePrivilegeRequest|ScheduledTask|connection 不可用|TokenAdapter|WeixinStore|refreshApps|image load error|useReminderNotice/;
  var origWarn = console.warn, origError = console.error;
  console.warn = function () { if (!suppressRe.test(Array.prototype.join.call(arguments, ' '))) origWarn.apply(console, arguments); };
  console.error = function () { if (!suppressRe.test(Array.prototype.join.call(arguments, ' '))) origError.apply(console, arguments); };
  window.addEventListener('unhandledrejection', function (e) {
    if (/toJSON|usePreview|removeChild/.test(String(e.reason))) e.preventDefault();
  });

  // Mock login cookies
  ['logintype=mock', 'openid=mock_user_001', 'accesstoken=mock_token_abc',
   'refreshtoken=mock_refresh', 'nickname=MockUser', 'scope=all',
   'access_token_expire_time=' + (Math.floor(Date.now() / 1000) + 86400)
  ].forEach(function (c) { document.cookie = c + '; path=/'; });

  // Mock localStorage envInfo
  localStorage.setItem('envInfo', JSON.stringify({
    guid: 'mock-guid-12345', physical_memory: 32, os: 'macOS', os_version: '14.0', app_version: '4.0.0'
  }));

  // Skip cold-start checker
  sessionStorage.setItem('ai-launcher_startCheckerPassed', JSON.stringify({ expiredTime: 0, val: true }));

  // CSS: hide sidebar/topbar/rightPanel, keep only office canvas
  var style = document.createElement('style');
  style.textContent =
    '[class*="_sidebar_3vz2u"]{display:none!important}' +
    '[class*="_operationBar_3kjbu"]{display:none!important}' +
    '[class*="_rightPanel_xk3qg"]{display:none!important}' +
    '[class*="_mainContent_xk3qg"]{flex:1!important}' +
    '[class*="_errorBoundary_114qa"]{display:none!important}' +
    '[class*="_loadingContent_1wtsy"]{display:none!important}';
  (document.head || document.documentElement).appendChild(style);

  // IntersectionObserver override — always report visible so canvas initializes
  window.IntersectionObserver = function (callback) {
    var obs = {
      observe: function (target) {
        setTimeout(function () {
          callback([{ target: target, isIntersecting: true, intersectionRatio: 1.0,
            boundingClientRect: target.getBoundingClientRect(), intersectionRect: target.getBoundingClientRect(),
            rootBounds: null, time: performance.now() }], obs);
        }, 50);
      },
      unobserve: function () {},
      disconnect: function () {},
      takeRecords: function () { return []; }
    };
    return obs;
  };

  // Mock native bridge (Jsbridge)
  var noop = function () { return Promise.resolve({ code: 0, data: '{}' }); };
  var proxyHandler = { get: function () { return noop; } };
  window.Jsbridge = new Proxy({}, {
    get: function (_, prop) {
      if (prop === 'handler' || prop === 'invoke') return prop === 'invoke' ? noop : new Proxy({}, proxyHandler);
      if (prop === 'on' || prop === 'off') return function () {};
      return new Proxy({}, proxyHandler);
    }
  });
  window.__NATIVE_BRIDGE_READY__ = true;

  // Route to /officeDashboard once store is ready
  var navigated = false;
  var bootPoll = setInterval(function () {
    if (navigated) { clearInterval(bootPoll); return; }
    if (!window.__TAB_ROUTERS__ || !window.__STORE_STATE__) return;
    try {
      var state = window.__STORE_STATE__();
      var router = window.__TAB_ROUTERS__.get(state.tab.activeTabId);
      if (router && router.navigate) {
        router.navigate('/officeDashboard');
        navigated = true;
        clearInterval(bootPoll);
      }
    } catch (e) {}
  }, 100);
  // Safety: stop polling after 10s
  setTimeout(function () { clearInterval(bootPoll); }, 10000);

  // Mock fetch — block external APIs, mock internal APIs
  var originalFetch = window.fetch;
  window.fetch = function (url, options) {
    var s = typeof url === 'string' ? url : (url && url.url || '');
    if (/qq\.com|ailauncher|beacon/.test(s)) return Promise.resolve(new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } }));
    if (/\/api\/|\/v3\//.test(s)) return Promise.resolve(new Response(JSON.stringify({ code: 0, data: { list: [], total: 0, hasMore: false }, ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } }));
    if (/engine\.io|socket\.io/.test(s)) return Promise.resolve(new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } }));
    if (s.includes('/workbench/')) return originalFetch.call(this, url, Object.assign({}, options || {}, { cache: 'no-store' }));
    return originalFetch.apply(this, arguments);
  };

  // Mock XMLHttpRequest — block external/backend calls
  var OrigXHR = window.XMLHttpRequest;
  window.XMLHttpRequest = function () {
    var xhr = new OrigXHR();
    var origOpen = xhr.open;
    xhr.open = function (method, url) {
      var s = String(url);
      if ((/localhost|127\.0\.0\.1/.test(s) && !s.includes('localhost:5175')) || /ailauncher|beacon|qq\.com/.test(s)) {
        xhr._blocked = true;
        Object.defineProperty(xhr, 'status', { configurable: true, get: function () { return 200; } });
        Object.defineProperty(xhr, 'readyState', { configurable: true, get: function () { return 4; } });
        Object.defineProperty(xhr, 'responseText', { configurable: true, get: function () { return '{"code":0,"data":{}}'; } });
        Object.defineProperty(xhr, 'response', { configurable: true, get: function () { return '{"code":0,"data":{}}'; } });
        xhr.getAllResponseHeaders = function () { return 'content-type: application/json\r\n'; };
        xhr.getResponseHeader = function (h) { return h.toLowerCase() === 'content-type' ? 'application/json' : null; };
        xhr.send = function () { var self = this; setTimeout(function () { if (self.onreadystatechange) self.onreadystatechange(); if (self.onload) self.onload(); }, 0); };
        xhr.abort = function () {};
        return;
      }
      return origOpen.apply(xhr, arguments);
    };
    return xhr;
  };
  window.XMLHttpRequest.prototype = OrigXHR.prototype;

  // Mock WebSocket
  window.WebSocket = function (url) {
    var ws = { url: url, readyState: 1, send: function () {}, close: function () { this.readyState = 3; },
      addEventListener: function () {}, removeEventListener: function () {}, onopen: null, onclose: null, onmessage: null, onerror: null };
    setTimeout(function () { if (ws.onopen) ws.onopen({ type: 'open' }); }, 0);
    return ws;
  };
  window.WebSocket.CONNECTING = 0; window.WebSocket.OPEN = 1; window.WebSocket.CLOSING = 2; window.WebSocket.CLOSED = 3;

  // Mock gateway connection manager
  var patchPoll = setInterval(function () {
    var store = window.__STORE__;
    if (!store || !store.getState) return;
    var state = store.getState();
    if (!state || !state.sessionList || !state.sessionList.setConnectionManager) return;
    clearInterval(patchPoll);
    state.sessionList.setConnectionManager({ connection: {
      action: function (p) { return Promise.resolve(p.action === 'conversations.list' ? { ok: true, data: { conversations: [], has_more: false, total: 0 } } : { ok: true, data: {} }); },
      on: function () {}, off: function () {}, send: function () { return Promise.resolve(); }, getConnectionState: function () { return 'connected'; }
    }});
    setTimeout(function () { var s = store.getState(); if (s.sessionList.fetchSessionList) s.sessionList.fetchSessionList().catch(function () {}); }, 100);
  }, 200);
  setTimeout(function () { clearInterval(patchPoll); }, 10000);

  // __office API — mounted once game scene is ready
  var officePoll = setInterval(function () {
    var game = window.__game;
    if (!game || !game.scene || !game.scene.agents || game.scene.agents.length === 0) return;
    clearInterval(officePoll);

    var scene = game.scene;
    var idleDecisionOriginal = null;
    var taskCounter = 0;

    function findAgent(name) {
      var a = scene.agents.find(function (a) { return a.agentName === name || a.agentType === name; });
      if (!a) throw new Error('Agent not found: ' + name);
      return a;
    }

    window.__office = {
      agents: function () {
        return scene.agents.map(function (a) {
          return { name: a.agentName, type: a.agentType, slot: a.slotIndex,
            state: a._stateCategory, subState: a._subState, x: a._x, y: a._y,
            gridCol: a._gridCol, gridRow: a._gridRow, seatX: a.seatX, seatY: a.seatY,
            isInWorkstation: a.isInWorkstation, isMoving: !a._arrived && a.path && a.path.length > 0,
            currentTask: !!a.currentTask, taskQueueLen: a.taskQueue ? a.taskQueue.length : 0 };
        });
      },
      getAgent: function (name) { return findAgent(name); },

      moveTo: function (name, x, y) {
        var agent = findAgent(name);
        var path = scene.pathfinding.findPath({ x: agent._x, y: agent._y }, { x: x, y: y }, agent.agentType);
        if (!path || !path.length) return false;
        agent.setStateCategory('IDLE', 'STANDBY');
        agent.isInWorkstation = false;
        agent.setPath(path);
        return true;
      },
      teleport: function (name, x, y) { findAgent(name).teleportTo(x, y); },

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
      playAnim: function (name, anim, loop) { findAgent(name).playSubStateAnim(anim, loop !== false); },
      stopAnim: function (name) { findAgent(name).stopSubStateAnim(); },

      speak: function (name, text, durationMs) {
        var agent = findAgent(name);
        scene.bubbleSystem.speak(agent.agentType, text, durationMs || 5000);
      },
      stopSpeak: function (name) {
        var agent = findAgent(name);
        scene.bubbleSystem.stopSpeak(agent.agentType);
      },

      dispatch: function (sender, receiver, taskId, message) {
        var id = taskId || 'task-' + (++taskCounter);
        var convId = 'conv-' + Date.now();
        game.execute({ id: id, conversationId: convId, sender: sender, receiver: receiver, action: 'DISPATCH', message: { role: 'system', content: message || '派发任务给 ' + receiver } });
        return { id: id, conversationId: convId };
      },
      start: function (agentName, taskId, message) {
        game.execute({ id: taskId || 'task-' + (++taskCounter), conversationId: 'conv-' + Date.now(), sender: agentName, action: 'START', message: { role: 'system', content: message || agentName + ' 开始执行' } });
      },
      complete: function (taskId) { game.execute({ id: taskId, action: 'COMPLETE' }); },

      pauseIdle: function () {
        var idle = scene.taskSystem.idleDecision;
        if (!idleDecisionOriginal) idleDecisionOriginal = idle.canRunDecision.bind(idle);
        idle.canRunDecision = function () { return false; };
      },
      resumeIdle: function () {
        if (idleDecisionOriginal) { scene.taskSystem.idleDecision.canRunDecision = idleDecisionOriginal; idleDecisionOriginal = null; }
      },

      // Behavior actions
      action: function (name, behavior, opts) {
        var agent = findAgent(name);
        var idle = scene.taskSystem.idleDecision;
        var ctx = idle.contexts.get(agent);
        var prev = ctx ? ctx.currentAction : null;
        if (prev) idle.exitAction(agent, prev);
        idle.contexts.delete(agent);
        idle.pendingInitialDecisions && idle.pendingInitialDecisions.delete(agent);
        idle.pendingDelayedDecisions && idle.pendingDelayedDecisions.delete(agent);

        switch (behavior) {
          case 'sleep': idle.enterSleep(agent); break;
          case 'slacking': idle.enterSlacking(agent); break;
          case 'treadmill': idle.enterTreadmill(agent); break;
          case 'toilet': idle.enterToilet(agent); break;
          case 'leave': idle.startLeaving(agent); break;
          case 'talk':
            var targetName = opts && opts.target;
            if (targetName) {
              var target = findAgent(targetName);
              var origFind = idle.findTalkTargets.bind(idle);
              idle.findTalkTargets = function () { return [target]; };
              idle.enterTalk(agent);
              idle.findTalkTargets = origFind;
            } else {
              idle.enterTalk(agent);
            }
            break;
          case 'enter':
            if (agent._stateCategory === 'OFFSTAGE' || !agent.displayContainer.visible) {
              agent.teleportTo(agent.seatX, agent.seatY);
              agent.displayContainer.visible = true;
              agent.isInWorkstation = true;
              scene.pathfinding.setOccupant(agent.agentType, agent._x, agent._y);
              agent.setStateCategory('IDLE', 'ENTERING');
              agent.playSubStateAnim('fall_down', false);
            }
            break;
          case 'cheer':
            idle.highPriorityHandler.playCheerAnim(agent);
            break;
          default: throw new Error('Unknown behavior: ' + behavior);
        }
      },
      sleep: function (name) { this.action(name, 'sleep'); },
      slacking: function (name) { this.action(name, 'slacking'); },
      treadmill: function (name) { this.action(name, 'treadmill'); },
      toilet: function (name) { this.action(name, 'toilet'); },
      leave: function (name) { this.action(name, 'leave'); },
      enter: function (name) { this.action(name, 'enter'); },
      cheer: function (name) { this.action(name, 'cheer'); },
      talk: function (name, target) { this.action(name, 'talk', { target: target }); },

      // Name label control
      hideNames: function () {
        var nls = scene.nameLabelSystem;
        nls.labels.forEach(function (label) { label.root.visible = false; });
        if (!nls._origSync) nls._origSync = nls.sync.bind(nls);
        nls.sync = function (e, n, r, i) {
          nls._origSync(e, n, r, i);
          var lbl = nls.labels.get(e.agentType);
          if (lbl) lbl.root.visible = false;
        };
        nls._namesHidden = true;
      },
      showNames: function () {
        var nls = scene.nameLabelSystem;
        if (nls._origSync) { nls.sync = nls._origSync; nls._origSync = null; }
        nls._namesHidden = false;
        nls.labels.forEach(function (label) { label.root.visible = true; });
      },
      setName: function (name, newText, opts) {
        var agent = findAgent(name);
        var nls = scene.nameLabelSystem;
        var label = nls.labels.get(agent.agentType);
        if (label) label.nameSprite.visible = false;

        opts = opts || {};
        var fontSize = opts.fontSize || '12px';
        var color = opts.color || '#FFFFFF';
        var host = game.app.canvas.parentElement;
        if (!host) return;

        var existingEl = host.querySelector('[data-name-label="' + agent.agentType + '"]');
        if (existingEl) existingEl.remove();

        var el = document.createElement('div');
        el.dataset.nameLabel = agent.agentType;
        el.textContent = newText;
        el.style.cssText = 'position:absolute;left:0;top:0;pointer-events:none;z-index:90;' +
          'font-size:' + fontSize + ';color:' + color + ';font-weight:bold;' +
          'text-shadow:0 1px 2px rgba(0,0,0,0.8);white-space:nowrap;transform-origin:bottom center';
        host.appendChild(el);

        if (!nls._customLabels) nls._customLabels = {};
        nls._customLabels[agent.agentType] = el;

        if (!nls._customSync) {
          var baseSyncFn = nls._origSync || nls.sync.bind(nls);
          nls._origSync = baseSyncFn;
          nls.sync = function (e, n, r, i) {
            baseSyncFn(e, n, r, i);
            var custom = nls._customLabels && nls._customLabels[e.agentType];
            if (custom) {
              var lbl = nls.labels.get(e.agentType);
              if (lbl) lbl.nameSprite.visible = false;
              var visible = e.displayContainer.visible && e.subState !== 'ENTERING';
              if (nls._namesHidden && lbl) lbl.root.visible = false;
              custom.style.display = visible ? '' : 'none';
              if (visible) {
                var canvas = game.app.canvas;
                var host = canvas.parentElement;
                var canvasRect = canvas.getBoundingClientRect();
                var hostRect = host.getBoundingClientRect();
                var cam = { x: -40, y: 20 };
                var worldX = r ? r.x : e._x;
                var worldY = (r ? r.y : e._y) - 64;
                var cx = worldX - cam.x;
                var cy = worldY - cam.y;
                var sx = canvasRect.width / game.canvasWidth;
                var sy = canvasRect.height / game.canvasHeight;
                var fx = (canvasRect.left - hostRect.left) + cx * sx;
                var fy = (canvasRect.top - hostRect.top) + cy * sy;
                custom.style.transform = 'translate(' + fx + 'px,' + fy + 'px) translate(-50%,-100%)';
              }
            }
          };
          nls._customSync = true;
        }
      },
      clearName: function (name) {
        var agent = findAgent(name);
        var nls = scene.nameLabelSystem;
        var label = nls.labels.get(agent.agentType);
        if (label) label.nameSprite.visible = true;
        if (nls._customLabels && nls._customLabels[agent.agentType]) {
          nls._customLabels[agent.agentType].remove();
          delete nls._customLabels[agent.agentType];
        }
      },

      // Diagnostics: list active interval count or force-clear stale timers
      clearTimers: function () {
        var count = _intervals.length;
        _intervals.forEach(function (id) { clearInterval(id); });
        _intervals = [];
        return count;
      },

      get scene() { return scene; },
      get game() { return game; }
    };

    // Cleanup: clear all non-essential intervals (analytics, heartbeats, beacon, etc.)
    // PixiJS render loop uses requestAnimationFrame, not setInterval
    setTimeout(function () {
      var count = _intervals.length;
      _intervals.forEach(function (id) { clearInterval(id); });
      _intervals = [];
      window.setInterval = _origSetInterval;
      console.log('[bypass] cleared ' + count + ' stale intervals');
    }, 2000);

    console.log('[bypass] __office API ready (' + scene.agents.length + ' agents)');
  }, 300);
  setTimeout(function () { clearInterval(officePoll); }, 30000);

  // __chat API — token consumption & conversation access via Zustand store
  var chatPoll = setInterval(function () {
    var store = window.__STORE__;
    if (!store || !store.getState) return;
    var state = store.getState();
    if (!state || !state.sessionList) return;
    clearInterval(chatPoll);

    window.__chat = {
      // Token consumption
      tokens: function () {
        var sl = store.getState().sessionList;
        return { tokenMap: sl.tokenMap, tokenSavedMap: sl.tokenSavedMap, wallet: sl.wallet };
      },
      tokenFor: function (conversationId) {
        var sl = store.getState().sessionList;
        return { total: sl.tokenMap[conversationId] || 0, saved: sl.tokenSavedMap[conversationId] || 0 };
      },
      wallet: function () { return store.getState().sessionList.wallet; },

      // Session list
      sessions: function () { return store.getState().sessionList.sessions; },
      sessionPagination: function () { return store.getState().sessionList.pagination; },

      // Conversations (active, with messages)
      conversation: function (id) {
        var conv = store.getState().conversations.conversations[id];
        if (!conv) return null;
        return { messages: conv.messages, isRunning: conv.isRunning, isHistoryLoaded: conv.isHistoryLoaded, hasMoreHistory: conv.hasMoreHistory };
      },
      conversationIds: function () { return Object.keys(store.getState().conversations.conversations); },

      // Actions
      fetchAllTokenUsage: function () { return store.getState().sessionList.fetchAllTokenUsage(); },
      fetchTokenUsage: function (id) { return store.getState().sessionList.fetchTokenUsageForConversation(id); },
      fetchWallet: function () { return store.getState().sessionList.fetchWallet(); },
      fetchSessionList: function (updatedAfter) { return store.getState().sessionList.fetchSessionList(updatedAfter); },
      ensureConversation: function (id) { store.getState().conversations.ensureConversation(id); },
      loadHistory: function (id, limit) { return store.getState().conversations.loadHistory(id, limit || 50); },

      // Store subscribe (returns unsubscribe function)
      subscribe: function (fn) { return store.subscribe(fn); },

      // Raw store reference
      get store() { return store; }
    };

    console.log('[bypass] __chat API ready');
  }, 300);
  setTimeout(function () { clearInterval(chatPoll); }, 30000);

  console.log('[bypass] initialized');
})();
