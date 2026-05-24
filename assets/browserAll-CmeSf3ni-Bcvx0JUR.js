function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _G_default;
import { E as _imp_y, e as P, C as Z, r as te, T as M, U as V, P as m, a as ie, w as g } from "./index-wSLjxAso.js";
import "./webworkerAll-WekBW072-C5HecGIj.js";
import "./react-vendor-Bcb6ewdu.js";
import "./markdown-vendor-CHTmL0iO.js";
import "./utils-vendor-D8_MVJCX.js";
import "./report-vendor-COKl-wDg.js";
import "./canvasUtils-B4DAHqdl-CTb8ifHP.js";
import "./Filter-D2TFakTj-BL2pn75X.js";
let y = _imp_y;
var q = /*#__PURE__*/ function() {
    "use strict";
    function q(e) {
        var _this = this;
        _class_call_check(this, q);
        this._lastTransform = "", this._observer = null, this._tickerAttached = !1, this.updateTranslation = function() {
            if (!_this._canvas) return;
            var t = _this._canvas.getBoundingClientRect(), i = _this._canvas.width, n = _this._canvas.height, s = t.width / i * _this._renderer.resolution, o = t.height / n * _this._renderer.resolution, r = t.left, l = t.top, d = "translate(".concat(r, "px, ").concat(l, "px) scale(").concat(s, ", ").concat(o, ")");
            d !== _this._lastTransform && (_this._domElement.style.transform = d, _this._lastTransform = d);
        }, this._domElement = e.domElement, this._renderer = e.renderer, !(globalThis.OffscreenCanvas && _instanceof(this._renderer.canvas, OffscreenCanvas)) && (this._canvas = this._renderer.canvas, this._attachObserver());
    }
    _create_class(q, [
        {
            key: "canvas",
            get: function get() {
                return this._canvas;
            }
        },
        {
            key: "ensureAttached",
            value: function ensureAttached() {
                !this._domElement.parentNode && this._canvas.parentNode && (this._canvas.parentNode.appendChild(this._domElement), this.updateTranslation());
            }
        },
        {
            key: "_attachObserver",
            value: function _attachObserver() {
                var _this = this;
                "ResizeObserver" in globalThis ? (this._observer && (this._observer.disconnect(), this._observer = null), this._observer = new ResizeObserver(function(e) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var t = _step.value;
                            if (t.target !== _this._canvas) continue;
                            var i = _this.canvas.width, n = _this.canvas.height, s = t.contentRect.width / i * _this._renderer.resolution, o = t.contentRect.height / n * _this._renderer.resolution;
                            (_this._lastScaleX !== s || _this._lastScaleY !== o) && (_this.updateTranslation(), _this._lastScaleX = s, _this._lastScaleY = o);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }), this._observer.observe(this._canvas)) : this._tickerAttached || M.shared.add(this.updateTranslation, this, V.HIGH);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._observer ? (this._observer.disconnect(), this._observer = null) : this._tickerAttached && M.shared.remove(this.updateTranslation), this._domElement = null, this._renderer = null, this._canvas = null, this._tickerAttached = !1, this._lastTransform = "", this._lastScaleX = null, this._lastScaleY = null;
            }
        }
    ]);
    return q;
}();
var w = /*#__PURE__*/ function() {
    "use strict";
    function w(e) {
        _class_call_check(this, w);
        this.bubbles = !0, this.cancelBubble = !0, this.cancelable = !1, this.composed = !1, this.defaultPrevented = !1, this.eventPhase = w.prototype.NONE, this.propagationStopped = !1, this.propagationImmediatelyStopped = !1, this.layer = new m, this.page = new m, this.NONE = 0, this.CAPTURING_PHASE = 1, this.AT_TARGET = 2, this.BUBBLING_PHASE = 3, this.manager = e;
    }
    _create_class(w, [
        {
            key: "layerX",
            get: function get() {
                return this.layer.x;
            }
        },
        {
            key: "layerY",
            get: function get() {
                return this.layer.y;
            }
        },
        {
            key: "pageX",
            get: function get() {
                return this.page.x;
            }
        },
        {
            key: "pageY",
            get: function get() {
                return this.page.y;
            }
        },
        {
            key: "data",
            get: function get() {
                return this;
            }
        },
        {
            key: "composedPath",
            value: function composedPath() {
                return this.manager && (!this.path || this.path[this.path.length - 1] !== this.target) && (this.path = this.target ? this.manager.propagationPath(this.target) : []), this.path;
            }
        },
        {
            key: "initEvent",
            value: function initEvent(e, t, i) {
                throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
            }
        },
        {
            key: "initUIEvent",
            value: function initUIEvent(e, t, i, n, s) {
                throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
            }
        },
        {
            key: "preventDefault",
            value: function preventDefault() {
                _instanceof(this.nativeEvent, Event) && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(), this.defaultPrevented = !0;
            }
        },
        {
            key: "stopImmediatePropagation",
            value: function stopImmediatePropagation() {
                this.propagationImmediatelyStopped = !0;
            }
        },
        {
            key: "stopPropagation",
            value: function stopPropagation() {
                this.propagationStopped = !0;
            }
        }
    ]);
    return w;
}();
var I = /iPhone/i, B = /iPod/i, C = /iPad/i, U = /\biOS-universal(?:.+)Mac\b/i, k = /\bAndroid(?:.+)Mobile\b/i, R = /Android/i, b = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, O = /Silk/i, v = /Windows Phone/i, X = /\bWindows(?:.+)ARM\b/i, K = /BlackBerry/i, Y = /BB10/i, H = /Opera Mini/i, F = /\b(CriOS|Chrome)(?:.+)Mobile/i, N = /Mobile(?:.+)Firefox\b/i, $ = function $(a1) {
    return (typeof a1 === "undefined" ? "undefined" : _type_of(a1)) < "u" && a1.platform === "MacIntel" && typeof a1.maxTouchPoints == "number" && a1.maxTouchPoints > 1 && (typeof MSStream === "undefined" ? "undefined" : _type_of(MSStream)) > "u";
};
function ne(a1) {
    return function(e) {
        return e.test(a1);
    };
}
function G(a1) {
    var e = {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
    };
    !a1 && (typeof navigator === "undefined" ? "undefined" : _type_of(navigator)) < "u" ? e = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0
    } : typeof a1 == "string" ? e.userAgent = a1 : a1 && a1.userAgent && (e = {
        userAgent: a1.userAgent,
        platform: a1.platform,
        maxTouchPoints: a1.maxTouchPoints || 0
    });
    var t = e.userAgent, i = t.split("[FBAN");
    _type_of(i[1]) < "u" && (t = i[0]), i = t.split("Twitter"), _type_of(i[1]) < "u" && (t = i[0]);
    var n = ne(t), s = {
        apple: {
            phone: n(I) && !n(v),
            ipod: n(B),
            tablet: !n(I) && (n(C) || $(e)) && !n(v),
            universal: n(U),
            device: (n(I) || n(B) || n(C) || n(U) || $(e)) && !n(v)
        },
        amazon: {
            phone: n(b),
            tablet: !n(b) && n(O),
            device: n(b) || n(O)
        },
        android: {
            phone: !n(v) && n(b) || !n(v) && n(k),
            tablet: !n(v) && !n(b) && !n(k) && (n(O) || n(R)),
            device: !n(v) && (n(b) || n(O) || n(k) || n(R)) || n(/\bokhttp\b/i)
        },
        windows: {
            phone: n(v),
            tablet: n(X),
            device: n(v) || n(X)
        },
        other: {
            blackberry: n(K),
            blackberry10: n(Y),
            opera: n(H),
            firefox: n(N),
            chrome: n(F),
            device: n(K) || n(Y) || n(H) || n(N) || n(F)
        },
        any: !1,
        phone: !1,
        tablet: !1
    };
    return s.any = s.apple.device || s.android.device || s.windows.device || s.other.device, s.phone = s.apple.phone || s.android.phone || s.windows.phone, s.tablet = s.apple.tablet || s.android.tablet || s.windows.tablet, s;
}
var se = (_G_default = G.default) !== null && _G_default !== void 0 ? _G_default : G, oe = se(globalThis.navigator), re = 9, W = 100, ae = 0, le = 0, j = 2, z = 1, he = -1e3, ce = -1e3, de = 2, L = /*#__PURE__*/ function() {
    "use strict";
    function J(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : oe;
        _class_call_check(this, J);
        this._mobileInfo = t, this.debug = !1, this._activateOnTab = !0, this._deactivateOnMouseMove = !0, this._isActive = !1, this._isMobileAccessibility = !1, this._div = null, this._pools = {}, this._renderId = 0, this._children = [], this._androidUpdateCount = 0, this._androidUpdateFrequency = 500, this._isRunningTests = !1, this._boundOnKeyDown = this._onKeyDown.bind(this), this._boundOnMouseMove = this._onMouseMove.bind(this), this._hookDiv = null, (t.tablet || t.phone) && this._createTouchHook(), this._renderer = e;
    }
    _create_class(J, [
        {
            key: "isActive",
            get: function get() {
                return this._isActive;
            }
        },
        {
            key: "isMobileAccessibility",
            get: function get() {
                return this._isMobileAccessibility;
            }
        },
        {
            key: "hookDiv",
            get: function get() {
                return this._hookDiv;
            }
        },
        {
            key: "div",
            get: function get() {
                return this._div;
            }
        },
        {
            key: "_createTouchHook",
            value: function _createTouchHook() {
                var _this = this;
                var e = document.createElement("button");
                e.style.width = "".concat(z, "px"), e.style.height = "".concat(z, "px"), e.style.position = "absolute", e.style.top = "".concat(he, "px"), e.style.left = "".concat(ce, "px"), e.style.zIndex = de.toString(), e.style.backgroundColor = "#FF0000", e.title = "select to enable accessibility for this content", e.addEventListener("focus", function() {
                    _this._isMobileAccessibility = !0, _this._activate(), _this._destroyTouchHook();
                }), document.body.appendChild(e), this._hookDiv = e;
            }
        },
        {
            key: "_destroyTouchHook",
            value: function _destroyTouchHook() {
                this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null);
            }
        },
        {
            key: "_activate",
            value: function _activate() {
                var _this = this;
                if (this._isActive) return;
                this._isActive = !0, this._div || (this._div = document.createElement("div"), this._div.style.position = "absolute", this._div.style.top = "".concat(ae, "px"), this._div.style.left = "".concat(le, "px"), this._div.style.pointerEvents = "none", this._div.style.zIndex = j.toString(), this._canvasObserver = new q({
                    domElement: this._div,
                    renderer: this._renderer
                })), this._activateOnTab && globalThis.addEventListener("keydown", this._boundOnKeyDown, !1), this._deactivateOnMouseMove && globalThis.document.addEventListener("mousemove", this._boundOnMouseMove, !0);
                var e = this._renderer.view.canvas;
                if (e.parentNode) this._canvasObserver.ensureAttached(), this._initAccessibilitySetup();
                else {
                    var t = new MutationObserver(function() {
                        e.parentNode && (t.disconnect(), _this._canvasObserver.ensureAttached(), _this._initAccessibilitySetup());
                    });
                    t.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    });
                }
            }
        },
        {
            key: "_initAccessibilitySetup",
            value: function _initAccessibilitySetup() {
                this._renderer.runners.postrender.add(this), this._renderer.lastObjectRendered && this._updateAccessibleObjects(this._renderer.lastObjectRendered);
            }
        },
        {
            key: "_deactivate",
            value: function _deactivate() {
                if (!(!this._isActive || this._isMobileAccessibility)) {
                    var _e__accessibleDiv, _this__div;
                    this._isActive = !1, globalThis.document.removeEventListener("mousemove", this._boundOnMouseMove, !0), this._activateOnTab && globalThis.addEventListener("keydown", this._boundOnKeyDown, !1), this._renderer.runners.postrender.remove(this);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this._children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var e = _step.value;
                            ((_e__accessibleDiv = e._accessibleDiv) === null || _e__accessibleDiv === void 0 ? void 0 : _e__accessibleDiv.parentNode) && (e._accessibleDiv.parentNode.removeChild(e._accessibleDiv), e._accessibleDiv = null), e._accessibleActive = !1;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    for(var e1 in this._pools)this._pools[e1].forEach(function(i) {
                        i.parentNode && i.parentNode.removeChild(i);
                    }), delete this._pools[e1];
                    ((_this__div = this._div) === null || _this__div === void 0 ? void 0 : _this__div.parentNode) && this._div.parentNode.removeChild(this._div), this._pools = {}, this._children = [];
                }
            }
        },
        {
            key: "_updateAccessibleObjects",
            value: function _updateAccessibleObjects(e) {
                if (!e.visible || !e.accessibleChildren) return;
                e.accessible && (e._accessibleActive || this._addChild(e), e._renderId = this._renderId);
                var t = e.children;
                if (t) for(var i = 0; i < t.length; i++)this._updateAccessibleObjects(t[i]);
            }
        },
        {
            key: "init",
            value: function init(e) {
                var i = {
                    accessibilityOptions: _object_spread({}, J.defaultOptions, (e === null || e === void 0 ? void 0 : e.accessibilityOptions) || {})
                };
                this.debug = i.accessibilityOptions.debug, this._activateOnTab = i.accessibilityOptions.activateOnTab, this._deactivateOnMouseMove = i.accessibilityOptions.deactivateOnMouseMove, i.accessibilityOptions.enabledByDefault && this._activate(), this._renderer.runners.postrender.remove(this);
            }
        },
        {
            key: "postrender",
            value: function postrender() {
                var e = performance.now();
                if (this._mobileInfo.android.device && e < this._androidUpdateCount || (this._androidUpdateCount = e + this._androidUpdateFrequency, (!this._renderer.renderingToScreen || !this._renderer.view.canvas) && !this._isRunningTests)) return;
                var t = new Set;
                if (this._renderer.lastObjectRendered) {
                    this._updateAccessibleObjects(this._renderer.lastObjectRendered);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this._children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var i = _step.value;
                            i._renderId === this._renderId && t.add(this._children.indexOf(i));
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                for(var i1 = this._children.length - 1; i1 >= 0; i1--){
                    var n = this._children[i1];
                    t.has(i1) || (n._accessibleDiv && n._accessibleDiv.parentNode && (n._accessibleDiv.parentNode.removeChild(n._accessibleDiv), this._getPool(n.accessibleType).push(n._accessibleDiv), n._accessibleDiv = null), n._accessibleActive = !1, te(this._children, i1, 1));
                }
                this._renderer.renderingToScreen && this._canvasObserver.ensureAttached();
                for(var i2 = 0; i2 < this._children.length; i2++){
                    var n1 = this._children[i2];
                    if (!n1._accessibleActive || !n1._accessibleDiv) continue;
                    var s = n1._accessibleDiv, o = n1.hitArea || n1.getBounds().rectangle;
                    if (n1.hitArea) {
                        var r = n1.worldTransform;
                        s.style.left = "".concat(r.tx + o.x * r.a, "px"), s.style.top = "".concat(r.ty + o.y * r.d, "px"), s.style.width = "".concat(o.width * r.a, "px"), s.style.height = "".concat(o.height * r.d, "px");
                    } else this._capHitArea(o), s.style.left = "".concat(o.x, "px"), s.style.top = "".concat(o.y, "px"), s.style.width = "".concat(o.width, "px"), s.style.height = "".concat(o.height, "px");
                }
                this._renderId++;
            }
        },
        {
            key: "_updateDebugHTML",
            value: function _updateDebugHTML(e) {
                e.innerHTML = "type: ".concat(e.type, "</br> title : ").concat(e.title, "</br> tabIndex: ").concat(e.tabIndex);
            }
        },
        {
            key: "_capHitArea",
            value: function _capHitArea(e) {
                e.x < 0 && (e.width += e.x, e.x = 0), e.y < 0 && (e.height += e.y, e.y = 0);
                var _this__renderer = this._renderer, t = _this__renderer.width, i = _this__renderer.height;
                e.x + e.width > t && (e.width = t - e.x), e.y + e.height > i && (e.height = i - e.y);
            }
        },
        {
            key: "_addChild",
            value: function _addChild(e) {
                var i = this._getPool(e.accessibleType).pop();
                i ? (i.innerHTML = "", i.removeAttribute("title"), i.removeAttribute("aria-label"), i.tabIndex = 0) : (e.accessibleType === "button" ? i = document.createElement("button") : (i = document.createElement(e.accessibleType), i.style.cssText = "\n                        color: transparent;\n                        pointer-events: none;\n                        padding: 0;\n                        margin: 0;\n                        border: 0;\n                        outline: 0;\n                        background: transparent;\n                        box-sizing: border-box;\n                        user-select: none;\n                        -webkit-user-select: none;\n                        -moz-user-select: none;\n                        -ms-user-select: none;\n                    ", e.accessibleText && (i.innerText = e.accessibleText)), i.style.width = "".concat(W, "px"), i.style.height = "".concat(W, "px"), i.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", i.style.position = "absolute", i.style.zIndex = j.toString(), i.style.borderStyle = "none", navigator.userAgent.toLowerCase().includes("chrome") ? i.setAttribute("aria-live", "off") : i.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? i.setAttribute("aria-relevant", "additions") : i.setAttribute("aria-relevant", "text"), i.addEventListener("click", this._onClick.bind(this)), i.addEventListener("focus", this._onFocus.bind(this)), i.addEventListener("focusout", this._onFocusOut.bind(this))), i.style.pointerEvents = e.accessiblePointerEvents, i.type = e.accessibleType, e.accessibleTitle && e.accessibleTitle !== null ? i.title = e.accessibleTitle : (!e.accessibleHint || e.accessibleHint === null) && (i.title = "container ".concat(e.tabIndex)), e.accessibleHint && e.accessibleHint !== null && i.setAttribute("aria-label", e.accessibleHint), e.interactive ? i.tabIndex = e.tabIndex : i.tabIndex = 0, this.debug && this._updateDebugHTML(i), e._accessibleActive = !0, e._accessibleDiv = i, i.container = e, this._children.push(e), this._div.appendChild(e._accessibleDiv);
            }
        },
        {
            key: "_dispatchEvent",
            value: function _dispatchEvent(e, t) {
                var _e_target = e.target, i = _e_target.container, n = this._renderer.events.rootBoundary, s = Object.assign(new w(n), {
                    target: i
                });
                n.rootTarget = this._renderer.lastObjectRendered, t.forEach(function(o) {
                    return n.dispatchEvent(s, o);
                });
            }
        },
        {
            key: "_onClick",
            value: function _onClick(e) {
                this._dispatchEvent(e, [
                    "click",
                    "pointertap",
                    "tap"
                ]);
            }
        },
        {
            key: "_onFocus",
            value: function _onFocus(e) {
                e.target.getAttribute("aria-live") || e.target.setAttribute("aria-live", "assertive"), this._dispatchEvent(e, [
                    "mouseover"
                ]);
            }
        },
        {
            key: "_onFocusOut",
            value: function _onFocusOut(e) {
                e.target.getAttribute("aria-live") || e.target.setAttribute("aria-live", "polite"), this._dispatchEvent(e, [
                    "mouseout"
                ]);
            }
        },
        {
            key: "_onKeyDown",
            value: function _onKeyDown(e) {
                e.keyCode !== re || !this._activateOnTab || this._activate();
            }
        },
        {
            key: "_onMouseMove",
            value: function _onMouseMove(e) {
                e.movementX === 0 && e.movementY === 0 || this._deactivate();
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this__canvasObserver;
                this._deactivate(), this._destroyTouchHook(), (_this__canvasObserver = this._canvasObserver) === null || _this__canvasObserver === void 0 ? void 0 : _this__canvasObserver.destroy(), this._canvasObserver = null, this._div = null, this._pools = null, this._children = null, this._renderer = null, this._hookDiv = null, globalThis.removeEventListener("keydown", this._boundOnKeyDown), this._boundOnKeyDown = null, globalThis.document.removeEventListener("mousemove", this._boundOnMouseMove, !0), this._boundOnMouseMove = null;
            }
        },
        {
            key: "setAccessibilityEnabled",
            value: function setAccessibilityEnabled(e) {
                e ? this._activate() : this._deactivate();
            }
        },
        {
            key: "_getPool",
            value: function _getPool(e) {
                return this._pools[e] || (this._pools[e] = []), this._pools[e];
            }
        }
    ]);
    return J;
}();
L.extension = {
    type: [
        y.WebGLSystem,
        y.WebGPUSystem
    ],
    name: "accessibility"
};
L.defaultOptions = {
    enabledByDefault: !1,
    debug: !1,
    activateOnTab: !0,
    deactivateOnMouseMove: !0
};
var ue = L;
var pe = {
    accessible: !1,
    accessibleTitle: null,
    accessibleHint: null,
    tabIndex: 0,
    accessibleType: "button",
    accessibleText: null,
    accessiblePointerEvents: "auto",
    accessibleChildren: !0,
    _accessibleActive: !1,
    _accessibleDiv: null,
    _renderId: -1
};
var Q = /*#__PURE__*/ function() {
    "use strict";
    function Q(e) {
        _class_call_check(this, Q);
        this._attachedDomElements = [], this._renderer = e, this._renderer.runners.postrender.add(this), this._renderer.runners.init.add(this), this._domElement = document.createElement("div"), this._domElement.style.position = "absolute", this._domElement.style.top = "0", this._domElement.style.left = "0", this._domElement.style.pointerEvents = "none", this._domElement.style.zIndex = "1000";
    }
    _create_class(Q, [
        {
            key: "init",
            value: function init() {
                this._canvasObserver = new q({
                    domElement: this._domElement,
                    renderer: this._renderer
                });
            }
        },
        {
            key: "addRenderable",
            value: function addRenderable(e, t) {
                this._attachedDomElements.includes(e) || this._attachedDomElements.push(e);
            }
        },
        {
            key: "updateRenderable",
            value: function updateRenderable(e) {}
        },
        {
            key: "validateRenderable",
            value: function validateRenderable(e) {
                return !0;
            }
        },
        {
            key: "postrender",
            value: function postrender() {
                var e = this._attachedDomElements;
                if (e.length === 0) {
                    this._domElement.remove();
                    return;
                }
                this._canvasObserver.ensureAttached();
                for(var t = 0; t < e.length; t++){
                    var i = e[t], n = i.element;
                    if (!i.parent || i.globalDisplayStatus < 7) n === null || n === void 0 ? void 0 : n.remove(), e.splice(t, 1), t--;
                    else {
                        this._domElement.contains(n) || (n.style.position = "absolute", n.style.pointerEvents = "auto", this._domElement.appendChild(n));
                        var s = i.worldTransform, o = i._anchor, r = i.width * o.x, l = i.height * o.y;
                        n.style.transformOrigin = "".concat(r, "px ").concat(l, "px"), n.style.transform = "matrix(".concat(s.a, ", ").concat(s.b, ", ").concat(s.c, ", ").concat(s.d, ", ").concat(s.tx - r, ", ").concat(s.ty - l, ")"), n.style.opacity = i.groupAlpha.toString();
                    }
                }
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this__attachedDomElements_e_element;
                this._renderer.runners.postrender.remove(this);
                for(var e = 0; e < this._attachedDomElements.length; e++)(_this__attachedDomElements_e_element = this._attachedDomElements[e].element) === null || _this__attachedDomElements_e_element === void 0 ? void 0 : _this__attachedDomElements_e_element.remove();
                this._attachedDomElements.length = 0, this._domElement.remove(), this._canvasObserver.destroy(), this._renderer = null;
            }
        }
    ]);
    return Q;
}();
Q.extension = {
    type: [
        y.WebGLPipes,
        y.WebGPUPipes,
        y.CanvasPipes
    ],
    name: "dom"
};
var ve = /*#__PURE__*/ function() {
    "use strict";
    function ve() {
        _class_call_check(this, ve);
        this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this._tickerAdded = !1, this._pauseUpdate = !0;
    }
    _create_class(ve, [
        {
            key: "init",
            value: function init(e) {
                this.removeTickerListener(), this.events = e, this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this._tickerAdded = !1, this._pauseUpdate = !0;
            }
        },
        {
            key: "pauseUpdate",
            get: function get() {
                return this._pauseUpdate;
            },
            set: function set(e) {
                this._pauseUpdate = e;
            }
        },
        {
            key: "addTickerListener",
            value: function addTickerListener() {
                this._tickerAdded || !this.domElement || (M.system.add(this._tickerUpdate, this, V.INTERACTION), this._tickerAdded = !0);
            }
        },
        {
            key: "removeTickerListener",
            value: function removeTickerListener() {
                this._tickerAdded && (M.system.remove(this._tickerUpdate, this), this._tickerAdded = !1);
            }
        },
        {
            key: "pointerMoved",
            value: function pointerMoved() {
                this._didMove = !0;
            }
        },
        {
            key: "_update",
            value: function _update() {
                if (!this.domElement || this._pauseUpdate) return;
                if (this._didMove) {
                    this._didMove = !1;
                    return;
                }
                var e = this.events._rootPointerEvent;
                this.events.supportsTouchEvents && e.pointerType === "touch" || globalThis.document.dispatchEvent(this.events.supportsPointerEvents ? new PointerEvent("pointermove", {
                    clientX: e.clientX,
                    clientY: e.clientY,
                    pointerType: e.pointerType,
                    pointerId: e.pointerId
                }) : new MouseEvent("mousemove", {
                    clientX: e.clientX,
                    clientY: e.clientY
                }));
            }
        },
        {
            key: "_tickerUpdate",
            value: function _tickerUpdate(e) {
                this._deltaTime += e.deltaTime, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this._update());
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.removeTickerListener(), this.events = null, this.domElement = null, this._deltaTime = 0, this._didMove = !1, this._tickerAdded = !1, this._pauseUpdate = !0;
            }
        }
    ]);
    return ve;
}();
var f = new ve;
var A = /*#__PURE__*/ function(w) {
    "use strict";
    _inherits(A, w);
    function A() {
        _class_call_check(this, A);
        var _this;
        _this = _call_super(this, A, arguments), _this.client = new m, _this.movement = new m, _this.offset = new m, _this.global = new m, _this.screen = new m;
        return _this;
    }
    _create_class(A, [
        {
            key: "clientX",
            get: function get() {
                return this.client.x;
            }
        },
        {
            key: "clientY",
            get: function get() {
                return this.client.y;
            }
        },
        {
            key: "x",
            get: function get() {
                return this.clientX;
            }
        },
        {
            key: "y",
            get: function get() {
                return this.clientY;
            }
        },
        {
            key: "movementX",
            get: function get() {
                return this.movement.x;
            }
        },
        {
            key: "movementY",
            get: function get() {
                return this.movement.y;
            }
        },
        {
            key: "offsetX",
            get: function get() {
                return this.offset.x;
            }
        },
        {
            key: "offsetY",
            get: function get() {
                return this.offset.y;
            }
        },
        {
            key: "globalX",
            get: function get() {
                return this.global.x;
            }
        },
        {
            key: "globalY",
            get: function get() {
                return this.global.y;
            }
        },
        {
            key: "screenX",
            get: function get() {
                return this.screen.x;
            }
        },
        {
            key: "screenY",
            get: function get() {
                return this.screen.y;
            }
        },
        {
            key: "getLocalPosition",
            value: function getLocalPosition(e, t, i) {
                return e.worldTransform.applyInverse(i || this.global, t);
            }
        },
        {
            key: "getModifierState",
            value: function getModifierState(e) {
                return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(e);
            }
        },
        {
            key: "initMouseEvent",
            value: function initMouseEvent(e, t, i, n, s, o, r, l, d, h, _, c, p, D, Ee) {
                throw new Error("Method not implemented.");
            }
        }
    ]);
    return A;
}(w);
var u = /*#__PURE__*/ function(A) {
    "use strict";
    _inherits(u, A);
    function u() {
        _class_call_check(this, u);
        var _this;
        _this = _call_super(this, u, arguments), _this.width = 0, _this.height = 0, _this.isPrimary = !1;
        return _this;
    }
    _create_class(u, [
        {
            key: "getCoalescedEvents",
            value: function getCoalescedEvents() {
                return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove" ? [
                    this
                ] : [];
            }
        },
        {
            key: "getPredictedEvents",
            value: function getPredictedEvents() {
                throw new Error("getPredictedEvents is not supported!");
            }
        }
    ]);
    return u;
}(A);
var E = /*#__PURE__*/ function(A) {
    "use strict";
    _inherits(E, A);
    function E() {
        _class_call_check(this, E);
        var _this;
        _this = _call_super(this, E, arguments), _this.DOM_DELTA_PIXEL = 0, _this.DOM_DELTA_LINE = 1, _this.DOM_DELTA_PAGE = 2;
        return _this;
    }
    return E;
}(A);
E.DOM_DELTA_PIXEL = 0;
E.DOM_DELTA_LINE = 1;
E.DOM_DELTA_PAGE = 2;
var fe = 2048, me = new m, T = new m;
var _e = /*#__PURE__*/ function() {
    "use strict";
    function _e(e) {
        _class_call_check(this, _e);
        this.dispatch = new ie, this.moveOnAll = !1, this.enableGlobalMoveEvents = !0, this.mappingState = {
            trackingData: {}
        }, this.eventPool = new Map, this._allInteractiveElements = [], this._hitElements = [], this._isPointerMoveEvent = !1, this.rootTarget = e, this.hitPruneFn = this.hitPruneFn.bind(this), this.hitTestFn = this.hitTestFn.bind(this), this.mapPointerDown = this.mapPointerDown.bind(this), this.mapPointerMove = this.mapPointerMove.bind(this), this.mapPointerOut = this.mapPointerOut.bind(this), this.mapPointerOver = this.mapPointerOver.bind(this), this.mapPointerUp = this.mapPointerUp.bind(this), this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this), this.mapWheel = this.mapWheel.bind(this), this.mappingTable = {}, this.addEventMapping("pointerdown", this.mapPointerDown), this.addEventMapping("pointermove", this.mapPointerMove), this.addEventMapping("pointerout", this.mapPointerOut), this.addEventMapping("pointerleave", this.mapPointerOut), this.addEventMapping("pointerover", this.mapPointerOver), this.addEventMapping("pointerup", this.mapPointerUp), this.addEventMapping("pointerupoutside", this.mapPointerUpOutside), this.addEventMapping("wheel", this.mapWheel);
    }
    _create_class(_e, [
        {
            key: "addEventMapping",
            value: function addEventMapping(e, t) {
                this.mappingTable[e] || (this.mappingTable[e] = []), this.mappingTable[e].push({
                    fn: t,
                    priority: 0
                }), this.mappingTable[e].sort(function(i, n) {
                    return i.priority - n.priority;
                });
            }
        },
        {
            key: "dispatchEvent",
            value: function dispatchEvent(e, t) {
                e.propagationStopped = !1, e.propagationImmediatelyStopped = !1, this.propagate(e, t), this.dispatch.emit(t || e.type, e);
            }
        },
        {
            key: "mapEvent",
            value: function mapEvent(e) {
                if (!this.rootTarget) return;
                var t = this.mappingTable[e.type];
                if (t) for(var i = 0, n = t.length; i < n; i++)t[i].fn(e);
                else g("[EventBoundary]: Event mapping not defined for ".concat(e.type));
            }
        },
        {
            key: "hitTest",
            value: function hitTest(e, t) {
                f.pauseUpdate = !0;
                var n = this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive", s = this[n](this.rootTarget, this.rootTarget.eventMode, me.set(e, t), this.hitTestFn, this.hitPruneFn);
                return s && s[0];
            }
        },
        {
            key: "propagate",
            value: function propagate(e, t) {
                if (!e.target) return;
                var i = e.composedPath();
                e.eventPhase = e.CAPTURING_PHASE;
                for(var n = 0, s = i.length - 1; n < s; n++)if (e.currentTarget = i[n], this.notifyTarget(e, t), e.propagationStopped || e.propagationImmediatelyStopped) return;
                if (e.eventPhase = e.AT_TARGET, e.currentTarget = e.target, this.notifyTarget(e, t), !(e.propagationStopped || e.propagationImmediatelyStopped)) {
                    e.eventPhase = e.BUBBLING_PHASE;
                    for(var n1 = i.length - 2; n1 >= 0; n1--)if (e.currentTarget = i[n1], this.notifyTarget(e, t), e.propagationStopped || e.propagationImmediatelyStopped) return;
                }
            }
        },
        {
            key: "all",
            value: function all(e, t) {
                var _loop = function(s) {
                    n.forEach(function(o) {
                        e.currentTarget = i[s], _this.notifyTarget(e, o);
                    });
                };
                var _this = this;
                var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this._allInteractiveElements;
                if (i.length === 0) return;
                e.eventPhase = e.BUBBLING_PHASE;
                var n = Array.isArray(t) ? t : [
                    t
                ];
                for(var s = i.length - 1; s >= 0; s--)_loop(s);
            }
        },
        {
            key: "propagationPath",
            value: function propagationPath(e) {
                var t = [
                    e
                ];
                for(var i = 0; i < fe && e !== this.rootTarget && e.parent; i++){
                    if (!e.parent) throw new Error("Cannot find propagation path to disconnected target");
                    t.push(e.parent), e = e.parent;
                }
                return t.reverse(), t;
            }
        },
        {
            key: "hitTestMoveRecursive",
            value: function hitTestMoveRecursive(e, t, i, n, s) {
                var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1;
                var r = !1;
                if (this._interactivePrune(e)) return null;
                if ((e.eventMode === "dynamic" || t === "dynamic") && (f.pauseUpdate = !1), e.interactiveChildren && e.children) {
                    var h = e.children;
                    for(var _ = h.length - 1; _ >= 0; _--){
                        var c = h[_], p = this.hitTestMoveRecursive(c, this._isInteractive(t) ? t : c.eventMode, i, n, s, o || s(e, i));
                        if (p) {
                            if (p.length > 0 && !p[p.length - 1].parent) continue;
                            var D = e.isInteractive();
                            (p.length > 0 || D) && (D && this._allInteractiveElements.push(e), p.push(e)), this._hitElements.length === 0 && (this._hitElements = p), r = !0;
                        }
                    }
                }
                var l = this._isInteractive(t), d = e.isInteractive();
                return d && d && this._allInteractiveElements.push(e), o || this._hitElements.length > 0 ? null : r ? this._hitElements : l && !s(e, i) && n(e, i) ? d ? [
                    e
                ] : [] : null;
            }
        },
        {
            key: "hitTestRecursive",
            value: function hitTestRecursive(e, t, i, n, s) {
                if (this._interactivePrune(e) || s(e, i)) return null;
                if ((e.eventMode === "dynamic" || t === "dynamic") && (f.pauseUpdate = !1), e.interactiveChildren && e.children) {
                    var l = e.children, d = i;
                    for(var h = l.length - 1; h >= 0; h--){
                        var _ = l[h], c = this.hitTestRecursive(_, this._isInteractive(t) ? t : _.eventMode, d, n, s);
                        if (c) {
                            if (c.length > 0 && !c[c.length - 1].parent) continue;
                            var p = e.isInteractive();
                            return (c.length > 0 || p) && c.push(e), c;
                        }
                    }
                }
                var o = this._isInteractive(t), r = e.isInteractive();
                return o && n(e, i) ? r ? [
                    e
                ] : [] : null;
            }
        },
        {
            key: "_isInteractive",
            value: function _isInteractive(e) {
                return e === "static" || e === "dynamic";
            }
        },
        {
            key: "_interactivePrune",
            value: function _interactivePrune(e) {
                return !e || !e.visible || !e.renderable || !e.measurable || e.eventMode === "none" || e.eventMode === "passive" && !e.interactiveChildren;
            }
        },
        {
            key: "hitPruneFn",
            value: function hitPruneFn(e, t) {
                if (e.hitArea && (e.worldTransform.applyInverse(t, T), !e.hitArea.contains(T.x, T.y))) return !0;
                if (e.effects && e.effects.length) for(var i = 0; i < e.effects.length; i++){
                    var n = e.effects[i];
                    if (n.containsPoint && !n.containsPoint(t, this.hitTestFn)) return !0;
                }
                return !1;
            }
        },
        {
            key: "hitTestFn",
            value: function hitTestFn(e, t) {
                return e.hitArea ? !0 : (e === null || e === void 0 ? void 0 : e.containsPoint) ? (e.worldTransform.applyInverse(t, T), e.containsPoint(T)) : !1;
            }
        },
        {
            key: "notifyTarget",
            value: function notifyTarget(e, t) {
                var _e_currentTarget_i, _e_currentTarget;
                if (!e.currentTarget.isInteractive()) return;
                t !== null && t !== void 0 ? t : t = e.type;
                var i = "on".concat(t);
                (_e_currentTarget_i = (_e_currentTarget = e.currentTarget)[i]) === null || _e_currentTarget_i === void 0 ? void 0 : _e_currentTarget_i.call(_e_currentTarget, e);
                var n = e.eventPhase === e.CAPTURING_PHASE || e.eventPhase === e.AT_TARGET ? "".concat(t, "capture") : t;
                this._notifyListeners(e, n), e.eventPhase === e.AT_TARGET && this._notifyListeners(e, t);
            }
        },
        {
            key: "mapPointerDown",
            value: function mapPointerDown(e) {
                if (!_instanceof(e, u)) {
                    g("EventBoundary cannot map a non-pointer event as a pointer event");
                    return;
                }
                var t = this.createPointerEvent(e);
                if (this.dispatchEvent(t, "pointerdown"), t.pointerType === "touch") this.dispatchEvent(t, "touchstart");
                else if (t.pointerType === "mouse" || t.pointerType === "pen") {
                    var n = t.button === 2;
                    this.dispatchEvent(t, n ? "rightdown" : "mousedown");
                }
                var i = this.trackingData(e.pointerId);
                i.pressTargetsByButton[e.button] = t.composedPath(), this.freeEvent(t);
            }
        },
        {
            key: "mapPointerMove",
            value: function mapPointerMove(e) {
                var _this_enableGlobalMoveEvents;
                var _n_overTargets, _t_target;
                if (!_instanceof(e, u)) {
                    g("EventBoundary cannot map a non-pointer event as a pointer event");
                    return;
                }
                this._allInteractiveElements.length = 0, this._hitElements.length = 0, this._isPointerMoveEvent = !0;
                var t = this.createPointerEvent(e);
                this._isPointerMoveEvent = !1;
                var i = t.pointerType === "mouse" || t.pointerType === "pen", n = this.trackingData(e.pointerId), s = this.findMountedTarget(n.overTargets);
                if (((_n_overTargets = n.overTargets) === null || _n_overTargets === void 0 ? void 0 : _n_overTargets.length) > 0 && s !== t.target) {
                    var l = e.type === "mousemove" ? "mouseout" : "pointerout", d = this.createPointerEvent(e, l, s);
                    if (this.dispatchEvent(d, "pointerout"), i && this.dispatchEvent(d, "mouseout"), !t.composedPath().includes(s)) {
                        var h = this.createPointerEvent(e, "pointerleave", s);
                        for(h.eventPhase = h.AT_TARGET; h.target && !t.composedPath().includes(h.target);)h.currentTarget = h.target, this.notifyTarget(h), i && this.notifyTarget(h, "mouseleave"), h.target = h.target.parent;
                        this.freeEvent(h);
                    }
                    this.freeEvent(d);
                }
                if (s !== t.target) {
                    var l1 = e.type === "mousemove" ? "mouseover" : "pointerover", d1 = this.clonePointerEvent(t, l1);
                    this.dispatchEvent(d1, "pointerover"), i && this.dispatchEvent(d1, "mouseover");
                    var h1 = s === null || s === void 0 ? void 0 : s.parent;
                    for(; h1 && h1 !== this.rootTarget.parent && h1 !== t.target;)h1 = h1.parent;
                    if (!h1 || h1 === this.rootTarget.parent) {
                        var c = this.clonePointerEvent(t, "pointerenter");
                        for(c.eventPhase = c.AT_TARGET; c.target && c.target !== s && c.target !== this.rootTarget.parent;)c.currentTarget = c.target, this.notifyTarget(c), i && this.notifyTarget(c, "mouseenter"), c.target = c.target.parent;
                        this.freeEvent(c);
                    }
                    this.freeEvent(d1);
                }
                var o = [], r = (_this_enableGlobalMoveEvents = this.enableGlobalMoveEvents) !== null && _this_enableGlobalMoveEvents !== void 0 ? _this_enableGlobalMoveEvents : !0;
                this.moveOnAll ? o.push("pointermove") : this.dispatchEvent(t, "pointermove"), r && o.push("globalpointermove"), t.pointerType === "touch" && (this.moveOnAll ? o.splice(1, 0, "touchmove") : this.dispatchEvent(t, "touchmove"), r && o.push("globaltouchmove")), i && (this.moveOnAll ? o.splice(1, 0, "mousemove") : this.dispatchEvent(t, "mousemove"), r && o.push("globalmousemove"), this.cursor = (_t_target = t.target) === null || _t_target === void 0 ? void 0 : _t_target.cursor), o.length > 0 && this.all(t, o), this._allInteractiveElements.length = 0, this._hitElements.length = 0, n.overTargets = t.composedPath(), this.freeEvent(t);
            }
        },
        {
            key: "mapPointerOver",
            value: function mapPointerOver(e) {
                var _i_target;
                if (!_instanceof(e, u)) {
                    g("EventBoundary cannot map a non-pointer event as a pointer event");
                    return;
                }
                var t = this.trackingData(e.pointerId), i = this.createPointerEvent(e), n = i.pointerType === "mouse" || i.pointerType === "pen";
                this.dispatchEvent(i, "pointerover"), n && this.dispatchEvent(i, "mouseover"), i.pointerType === "mouse" && (this.cursor = (_i_target = i.target) === null || _i_target === void 0 ? void 0 : _i_target.cursor);
                var s = this.clonePointerEvent(i, "pointerenter");
                for(s.eventPhase = s.AT_TARGET; s.target && s.target !== this.rootTarget.parent;)s.currentTarget = s.target, this.notifyTarget(s), n && this.notifyTarget(s, "mouseenter"), s.target = s.target.parent;
                t.overTargets = i.composedPath(), this.freeEvent(i), this.freeEvent(s);
            }
        },
        {
            key: "mapPointerOut",
            value: function mapPointerOut(e) {
                if (!_instanceof(e, u)) {
                    g("EventBoundary cannot map a non-pointer event as a pointer event");
                    return;
                }
                var t = this.trackingData(e.pointerId);
                if (t.overTargets) {
                    var i = e.pointerType === "mouse" || e.pointerType === "pen", n = this.findMountedTarget(t.overTargets), s = this.createPointerEvent(e, "pointerout", n);
                    this.dispatchEvent(s), i && this.dispatchEvent(s, "mouseout");
                    var o = this.createPointerEvent(e, "pointerleave", n);
                    for(o.eventPhase = o.AT_TARGET; o.target && o.target !== this.rootTarget.parent;)o.currentTarget = o.target, this.notifyTarget(o), i && this.notifyTarget(o, "mouseleave"), o.target = o.target.parent;
                    t.overTargets = null, this.freeEvent(s), this.freeEvent(o);
                }
                this.cursor = null;
            }
        },
        {
            key: "mapPointerUp",
            value: function mapPointerUp(e) {
                if (!_instanceof(e, u)) {
                    g("EventBoundary cannot map a non-pointer event as a pointer event");
                    return;
                }
                var t = performance.now(), i = this.createPointerEvent(e);
                if (this.dispatchEvent(i, "pointerup"), i.pointerType === "touch") this.dispatchEvent(i, "touchend");
                else if (i.pointerType === "mouse" || i.pointerType === "pen") {
                    var r = i.button === 2;
                    this.dispatchEvent(i, r ? "rightup" : "mouseup");
                }
                var n = this.trackingData(e.pointerId), s = this.findMountedTarget(n.pressTargetsByButton[e.button]);
                var o = s;
                if (s && !i.composedPath().includes(s)) {
                    var r1 = s;
                    for(; r1 && !i.composedPath().includes(r1);){
                        if (i.currentTarget = r1, this.notifyTarget(i, "pointerupoutside"), i.pointerType === "touch") this.notifyTarget(i, "touchendoutside");
                        else if (i.pointerType === "mouse" || i.pointerType === "pen") {
                            var l = i.button === 2;
                            this.notifyTarget(i, l ? "rightupoutside" : "mouseupoutside");
                        }
                        r1 = r1.parent;
                    }
                    delete n.pressTargetsByButton[e.button], o = r1;
                }
                if (o) {
                    var r2 = this.clonePointerEvent(i, "click");
                    r2.target = o, r2.path = null, n.clicksByButton[e.button] || (n.clicksByButton[e.button] = {
                        clickCount: 0,
                        target: r2.target,
                        timeStamp: t
                    });
                    var l1 = n.clicksByButton[e.button];
                    if (l1.target === r2.target && t - l1.timeStamp < 200 ? ++l1.clickCount : l1.clickCount = 1, l1.target = r2.target, l1.timeStamp = t, r2.detail = l1.clickCount, r2.pointerType === "mouse") {
                        var d = r2.button === 2;
                        this.dispatchEvent(r2, d ? "rightclick" : "click");
                    } else r2.pointerType === "touch" && this.dispatchEvent(r2, "tap");
                    this.dispatchEvent(r2, "pointertap"), this.freeEvent(r2);
                }
                this.freeEvent(i);
            }
        },
        {
            key: "mapPointerUpOutside",
            value: function mapPointerUpOutside(e) {
                if (!_instanceof(e, u)) {
                    g("EventBoundary cannot map a non-pointer event as a pointer event");
                    return;
                }
                var t = this.trackingData(e.pointerId), i = this.findMountedTarget(t.pressTargetsByButton[e.button]), n = this.createPointerEvent(e);
                if (i) {
                    var s = i;
                    for(; s;)n.currentTarget = s, this.notifyTarget(n, "pointerupoutside"), n.pointerType === "touch" ? this.notifyTarget(n, "touchendoutside") : (n.pointerType === "mouse" || n.pointerType === "pen") && this.notifyTarget(n, n.button === 2 ? "rightupoutside" : "mouseupoutside"), s = s.parent;
                    delete t.pressTargetsByButton[e.button];
                }
                this.freeEvent(n);
            }
        },
        {
            key: "mapWheel",
            value: function mapWheel(e) {
                if (!_instanceof(e, E)) {
                    g("EventBoundary cannot map a non-wheel event as a wheel event");
                    return;
                }
                var t = this.createWheelEvent(e);
                this.dispatchEvent(t), this.freeEvent(t);
            }
        },
        {
            key: "findMountedTarget",
            value: function findMountedTarget(e) {
                if (!e) return null;
                var t = e[0];
                for(var i = 1; i < e.length && e[i].parent === t; i++)t = e[i];
                return t;
            }
        },
        {
            key: "createPointerEvent",
            value: function createPointerEvent(e, t, i) {
                var _ref;
                var n = this.allocateEvent(u);
                return this.copyPointerData(e, n), this.copyMouseData(e, n), this.copyData(e, n), n.nativeEvent = e.nativeEvent, n.originalEvent = e, n.target = (_ref = i !== null && i !== void 0 ? i : this.hitTest(n.global.x, n.global.y)) !== null && _ref !== void 0 ? _ref : this._hitElements[0], typeof t == "string" && (n.type = t), n;
            }
        },
        {
            key: "createWheelEvent",
            value: function createWheelEvent(e) {
                var t = this.allocateEvent(E);
                return this.copyWheelData(e, t), this.copyMouseData(e, t), this.copyData(e, t), t.nativeEvent = e.nativeEvent, t.originalEvent = e, t.target = this.hitTest(t.global.x, t.global.y), t;
            }
        },
        {
            key: "clonePointerEvent",
            value: function clonePointerEvent(e, t) {
                var i = this.allocateEvent(u);
                return i.nativeEvent = e.nativeEvent, i.originalEvent = e.originalEvent, this.copyPointerData(e, i), this.copyMouseData(e, i), this.copyData(e, i), i.target = e.target, i.path = e.composedPath().slice(), i.type = t !== null && t !== void 0 ? t : i.type, i;
            }
        },
        {
            key: "copyWheelData",
            value: function copyWheelData(e, t) {
                t.deltaMode = e.deltaMode, t.deltaX = e.deltaX, t.deltaY = e.deltaY, t.deltaZ = e.deltaZ;
            }
        },
        {
            key: "copyPointerData",
            value: function copyPointerData(e, t) {
                _instanceof(e, u) && _instanceof(t, u) && (t.pointerId = e.pointerId, t.width = e.width, t.height = e.height, t.isPrimary = e.isPrimary, t.pointerType = e.pointerType, t.pressure = e.pressure, t.tangentialPressure = e.tangentialPressure, t.tiltX = e.tiltX, t.tiltY = e.tiltY, t.twist = e.twist);
            }
        },
        {
            key: "copyMouseData",
            value: function copyMouseData(e, t) {
                _instanceof(e, A) && _instanceof(t, A) && (t.altKey = e.altKey, t.button = e.button, t.buttons = e.buttons, t.client.copyFrom(e.client), t.ctrlKey = e.ctrlKey, t.metaKey = e.metaKey, t.movement.copyFrom(e.movement), t.screen.copyFrom(e.screen), t.shiftKey = e.shiftKey, t.global.copyFrom(e.global));
            }
        },
        {
            key: "copyData",
            value: function copyData(e, t) {
                t.isTrusted = e.isTrusted, t.srcElement = e.srcElement, t.timeStamp = performance.now(), t.type = e.type, t.detail = e.detail, t.view = e.view, t.which = e.which, t.layer.copyFrom(e.layer), t.page.copyFrom(e.page);
            }
        },
        {
            key: "trackingData",
            value: function trackingData(e) {
                return this.mappingState.trackingData[e] || (this.mappingState.trackingData[e] = {
                    pressTargetsByButton: {},
                    clicksByButton: {},
                    overTarget: null
                }), this.mappingState.trackingData[e];
            }
        },
        {
            key: "allocateEvent",
            value: function allocateEvent(e) {
                this.eventPool.has(e) || this.eventPool.set(e, []);
                var t = this.eventPool.get(e).pop() || new e(this);
                return t.eventPhase = t.NONE, t.currentTarget = null, t.defaultPrevented = !1, t.path = null, t.target = null, t;
            }
        },
        {
            key: "freeEvent",
            value: function freeEvent(e) {
                if (e.manager !== this) throw new Error("It is illegal to free an event not managed by this EventBoundary!");
                var t = e.constructor;
                this.eventPool.has(t) || this.eventPool.set(t, []), this.eventPool.get(t).push(e);
            }
        },
        {
            key: "_notifyListeners",
            value: function _notifyListeners(e, t) {
                var i = e.currentTarget._events[t];
                if (i) if ("fn" in i) i.once && e.currentTarget.removeListener(t, i.fn, void 0, !0), i.fn.call(i.context, e);
                else for(var n = 0, s = i.length; n < s && !e.propagationImmediatelyStopped; n++)i[n].once && e.currentTarget.removeListener(t, i[n].fn, void 0, !0), i[n].fn.call(i[n].context, e);
            }
        }
    ]);
    return _e;
}();
var ge = 1, ye = {
    touchstart: "pointerdown",
    touchend: "pointerup",
    touchendoutside: "pointerupoutside",
    touchmove: "pointermove",
    touchcancel: "pointercancel"
}, S = /*#__PURE__*/ function() {
    "use strict";
    function x(e) {
        var _this = this;
        _class_call_check(this, x);
        this.supportsTouchEvents = "ontouchstart" in globalThis, this.supportsPointerEvents = !!globalThis.PointerEvent, this.domElement = null, this.resolution = 1, this.renderer = e, this.rootBoundary = new _e(null), f.init(this), this.autoPreventDefault = !0, this._eventsAdded = !1, this._rootPointerEvent = new u(null), this._rootWheelEvent = new E(null), this.cursorStyles = {
            default: "inherit",
            pointer: "pointer"
        }, this.features = new Proxy(_object_spread({}, x.defaultEventFeatures), {
            set: function set(t, i, n) {
                return i === "globalMove" && (_this.rootBoundary.enableGlobalMoveEvents = n), t[i] = n, !0;
            }
        }), this._onPointerDown = this._onPointerDown.bind(this), this._onPointerMove = this._onPointerMove.bind(this), this._onPointerUp = this._onPointerUp.bind(this), this._onPointerOverOut = this._onPointerOverOut.bind(this), this.onWheel = this.onWheel.bind(this);
    }
    _create_class(x, [
        {
            key: "init",
            value: function init(e) {
                var _e_eventMode, _e_eventFeatures;
                var _this_renderer = this.renderer, t = _this_renderer.canvas, i = _this_renderer.resolution;
                this.setTargetElement(t), this.resolution = i, x._defaultEventMode = (_e_eventMode = e.eventMode) !== null && _e_eventMode !== void 0 ? _e_eventMode : "passive", Object.assign(this.features, (_e_eventFeatures = e.eventFeatures) !== null && _e_eventFeatures !== void 0 ? _e_eventFeatures : {}), this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove;
            }
        },
        {
            key: "resolutionChange",
            value: function resolutionChange(e) {
                this.resolution = e;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                f.destroy(), this.setTargetElement(null), this.renderer = null, this._currentCursor = null;
            }
        },
        {
            key: "setCursor",
            value: function setCursor(e) {
                e || (e = "default");
                var t = !0;
                if (globalThis.OffscreenCanvas && _instanceof(this.domElement, OffscreenCanvas) && (t = !1), this._currentCursor === e) return;
                this._currentCursor = e;
                var i = this.cursorStyles[e];
                if (i) switch(typeof i === "undefined" ? "undefined" : _type_of(i)){
                    case "string":
                        t && (this.domElement.style.cursor = i);
                        break;
                    case "function":
                        i(e);
                        break;
                    case "object":
                        t && Object.assign(this.domElement.style, i);
                        break;
                }
                else t && typeof e == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, e) && (this.domElement.style.cursor = e);
            }
        },
        {
            key: "pointer",
            get: function get() {
                return this._rootPointerEvent;
            }
        },
        {
            key: "_onPointerDown",
            value: function _onPointerDown(e) {
                if (!this.features.click) return;
                this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
                var t = this._normalizeToPointerData(e);
                this.autoPreventDefault && t[0].isNormalized && (e.cancelable || !("cancelable" in e)) && e.preventDefault();
                for(var i = 0, n = t.length; i < n; i++){
                    var s = t[i], o = this._bootstrapEvent(this._rootPointerEvent, s);
                    this.rootBoundary.mapEvent(o);
                }
                this.setCursor(this.rootBoundary.cursor);
            }
        },
        {
            key: "_onPointerMove",
            value: function _onPointerMove(e) {
                if (!this.features.move) return;
                this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, f.pointerMoved();
                var t = this._normalizeToPointerData(e);
                for(var i = 0, n = t.length; i < n; i++){
                    var s = this._bootstrapEvent(this._rootPointerEvent, t[i]);
                    this.rootBoundary.mapEvent(s);
                }
                this.setCursor(this.rootBoundary.cursor);
            }
        },
        {
            key: "_onPointerUp",
            value: function _onPointerUp(e) {
                if (!this.features.click) return;
                this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
                var t = e.target;
                e.composedPath && e.composedPath().length > 0 && (t = e.composedPath()[0]);
                var i = t !== this.domElement ? "outside" : "", n = this._normalizeToPointerData(e);
                for(var s = 0, o = n.length; s < o; s++){
                    var r = this._bootstrapEvent(this._rootPointerEvent, n[s]);
                    r.type += i, this.rootBoundary.mapEvent(r);
                }
                this.setCursor(this.rootBoundary.cursor);
            }
        },
        {
            key: "_onPointerOverOut",
            value: function _onPointerOverOut(e) {
                if (!this.features.click) return;
                this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
                var t = this._normalizeToPointerData(e);
                for(var i = 0, n = t.length; i < n; i++){
                    var s = this._bootstrapEvent(this._rootPointerEvent, t[i]);
                    this.rootBoundary.mapEvent(s);
                }
                this.setCursor(this.rootBoundary.cursor);
            }
        },
        {
            key: "onWheel",
            value: function onWheel(e) {
                if (!this.features.wheel) return;
                var t = this.normalizeWheelEvent(e);
                this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.rootBoundary.mapEvent(t);
            }
        },
        {
            key: "setTargetElement",
            value: function setTargetElement(e) {
                this._removeEvents(), this.domElement = e, f.domElement = e, this._addEvents();
            }
        },
        {
            key: "_addEvents",
            value: function _addEvents() {
                if (this._eventsAdded || !this.domElement) return;
                f.addTickerListener();
                var e = this.domElement.style;
                e && (globalThis.navigator.msPointerEnabled ? (e.msContentZooming = "none", e.msTouchAction = "none") : this.supportsPointerEvents && (e.touchAction = "none")), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this._onPointerMove, !0), this.domElement.addEventListener("pointerdown", this._onPointerDown, !0), this.domElement.addEventListener("pointerleave", this._onPointerOverOut, !0), this.domElement.addEventListener("pointerover", this._onPointerOverOut, !0), globalThis.addEventListener("pointerup", this._onPointerUp, !0)) : (globalThis.document.addEventListener("mousemove", this._onPointerMove, !0), this.domElement.addEventListener("mousedown", this._onPointerDown, !0), this.domElement.addEventListener("mouseout", this._onPointerOverOut, !0), this.domElement.addEventListener("mouseover", this._onPointerOverOut, !0), globalThis.addEventListener("mouseup", this._onPointerUp, !0), this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this._onPointerDown, !0), this.domElement.addEventListener("touchend", this._onPointerUp, !0), this.domElement.addEventListener("touchmove", this._onPointerMove, !0))), this.domElement.addEventListener("wheel", this.onWheel, {
                    passive: !0,
                    capture: !0
                }), this._eventsAdded = !0;
            }
        },
        {
            key: "_removeEvents",
            value: function _removeEvents() {
                if (!this._eventsAdded || !this.domElement) return;
                f.removeTickerListener();
                var e = this.domElement.style;
                e && (globalThis.navigator.msPointerEnabled ? (e.msContentZooming = "", e.msTouchAction = "") : this.supportsPointerEvents && (e.touchAction = "")), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this._onPointerMove, !0), this.domElement.removeEventListener("pointerdown", this._onPointerDown, !0), this.domElement.removeEventListener("pointerleave", this._onPointerOverOut, !0), this.domElement.removeEventListener("pointerover", this._onPointerOverOut, !0), globalThis.removeEventListener("pointerup", this._onPointerUp, !0)) : (globalThis.document.removeEventListener("mousemove", this._onPointerMove, !0), this.domElement.removeEventListener("mousedown", this._onPointerDown, !0), this.domElement.removeEventListener("mouseout", this._onPointerOverOut, !0), this.domElement.removeEventListener("mouseover", this._onPointerOverOut, !0), globalThis.removeEventListener("mouseup", this._onPointerUp, !0), this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this._onPointerDown, !0), this.domElement.removeEventListener("touchend", this._onPointerUp, !0), this.domElement.removeEventListener("touchmove", this._onPointerMove, !0))), this.domElement.removeEventListener("wheel", this.onWheel, !0), this.domElement = null, this._eventsAdded = !1;
            }
        },
        {
            key: "mapPositionToPoint",
            value: function mapPositionToPoint(e, t, i) {
                var n = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : {
                    width: this.domElement.width,
                    height: this.domElement.height,
                    left: 0,
                    top: 0
                }, s = 1 / this.resolution;
                e.x = (t - n.left) * (this.domElement.width / n.width) * s, e.y = (i - n.top) * (this.domElement.height / n.height) * s;
            }
        },
        {
            key: "_normalizeToPointerData",
            value: function _normalizeToPointerData(e) {
                var t = [];
                if (this.supportsTouchEvents && _instanceof(e, TouchEvent)) for(var i = 0, n = e.changedTouches.length; i < n; i++){
                    var _s_altKey, _s_ctrlKey, _s_metaKey, _s_shiftKey;
                    var s = e.changedTouches[i];
                    _type_of(s.button) > "u" && (s.button = 0), _type_of(s.buttons) > "u" && (s.buttons = 1), _type_of(s.isPrimary) > "u" && (s.isPrimary = e.touches.length === 1 && e.type === "touchstart"), _type_of(s.width) > "u" && (s.width = s.radiusX || 1), _type_of(s.height) > "u" && (s.height = s.radiusY || 1), _type_of(s.tiltX) > "u" && (s.tiltX = 0), _type_of(s.tiltY) > "u" && (s.tiltY = 0), _type_of(s.pointerType) > "u" && (s.pointerType = "touch"), _type_of(s.pointerId) > "u" && (s.pointerId = s.identifier || 0), _type_of(s.pressure) > "u" && (s.pressure = s.force || .5), _type_of(s.twist) > "u" && (s.twist = 0), _type_of(s.tangentialPressure) > "u" && (s.tangentialPressure = 0), _type_of(s.layerX) > "u" && (s.layerX = s.offsetX = s.clientX), _type_of(s.layerY) > "u" && (s.layerY = s.offsetY = s.clientY), s.isNormalized = !0, s.type = e.type, (_s_altKey = s.altKey) !== null && _s_altKey !== void 0 ? _s_altKey : s.altKey = e.altKey, (_s_ctrlKey = s.ctrlKey) !== null && _s_ctrlKey !== void 0 ? _s_ctrlKey : s.ctrlKey = e.ctrlKey, (_s_metaKey = s.metaKey) !== null && _s_metaKey !== void 0 ? _s_metaKey : s.metaKey = e.metaKey, (_s_shiftKey = s.shiftKey) !== null && _s_shiftKey !== void 0 ? _s_shiftKey : s.shiftKey = e.shiftKey, t.push(s);
                }
                else if (!globalThis.MouseEvent || _instanceof(e, MouseEvent) && (!this.supportsPointerEvents || !_instanceof(e, globalThis.PointerEvent))) {
                    var i1 = e;
                    _type_of(i1.isPrimary) > "u" && (i1.isPrimary = !0), _type_of(i1.width) > "u" && (i1.width = 1), _type_of(i1.height) > "u" && (i1.height = 1), _type_of(i1.tiltX) > "u" && (i1.tiltX = 0), _type_of(i1.tiltY) > "u" && (i1.tiltY = 0), _type_of(i1.pointerType) > "u" && (i1.pointerType = "mouse"), _type_of(i1.pointerId) > "u" && (i1.pointerId = ge), _type_of(i1.pressure) > "u" && (i1.pressure = .5), _type_of(i1.twist) > "u" && (i1.twist = 0), _type_of(i1.tangentialPressure) > "u" && (i1.tangentialPressure = 0), i1.isNormalized = !0, t.push(i1);
                } else t.push(e);
                return t;
            }
        },
        {
            key: "normalizeWheelEvent",
            value: function normalizeWheelEvent(e) {
                var t = this._rootWheelEvent;
                return this._transferMouseData(t, e), t.deltaX = e.deltaX, t.deltaY = e.deltaY, t.deltaZ = e.deltaZ, t.deltaMode = e.deltaMode, this.mapPositionToPoint(t.screen, e.clientX, e.clientY), t.global.copyFrom(t.screen), t.offset.copyFrom(t.screen), t.nativeEvent = e, t.type = e.type, t;
            }
        },
        {
            key: "_bootstrapEvent",
            value: function _bootstrapEvent(e, t) {
                return e.originalEvent = null, e.nativeEvent = t, e.pointerId = t.pointerId, e.width = t.width, e.height = t.height, e.isPrimary = t.isPrimary, e.pointerType = t.pointerType, e.pressure = t.pressure, e.tangentialPressure = t.tangentialPressure, e.tiltX = t.tiltX, e.tiltY = t.tiltY, e.twist = t.twist, this._transferMouseData(e, t), this.mapPositionToPoint(e.screen, t.clientX, t.clientY), e.global.copyFrom(e.screen), e.offset.copyFrom(e.screen), e.isTrusted = t.isTrusted, e.type === "pointerleave" && (e.type = "pointerout"), e.type.startsWith("mouse") && (e.type = e.type.replace("mouse", "pointer")), e.type.startsWith("touch") && (e.type = ye[e.type] || e.type), e;
            }
        },
        {
            key: "_transferMouseData",
            value: function _transferMouseData(e, t) {
                e.isTrusted = t.isTrusted, e.srcElement = t.srcElement, e.timeStamp = performance.now(), e.type = t.type, e.altKey = t.altKey, e.button = t.button, e.buttons = t.buttons, e.client.x = t.clientX, e.client.y = t.clientY, e.ctrlKey = t.ctrlKey, e.metaKey = t.metaKey, e.movement.x = t.movementX, e.movement.y = t.movementY, e.page.x = t.pageX, e.page.y = t.pageY, e.relatedTarget = null, e.shiftKey = t.shiftKey;
            }
        }
    ], [
        {
            key: "defaultEventMode",
            get: function get() {
                return this._defaultEventMode;
            }
        }
    ]);
    return x;
}();
S.extension = {
    name: "events",
    type: [
        y.WebGLSystem,
        y.CanvasSystem,
        y.WebGPUSystem
    ],
    priority: -1
};
S.defaultEventFeatures = {
    move: !0,
    globalMove: !0,
    click: !0,
    wheel: !0
};
var ee = S;
var be = {
    onclick: null,
    onmousedown: null,
    onmouseenter: null,
    onmouseleave: null,
    onmousemove: null,
    onglobalmousemove: null,
    onmouseout: null,
    onmouseover: null,
    onmouseup: null,
    onmouseupoutside: null,
    onpointercancel: null,
    onpointerdown: null,
    onpointerenter: null,
    onpointerleave: null,
    onpointermove: null,
    onglobalpointermove: null,
    onpointerout: null,
    onpointerover: null,
    onpointertap: null,
    onpointerup: null,
    onpointerupoutside: null,
    onrightclick: null,
    onrightdown: null,
    onrightup: null,
    onrightupoutside: null,
    ontap: null,
    ontouchcancel: null,
    ontouchend: null,
    ontouchendoutside: null,
    ontouchmove: null,
    onglobaltouchmove: null,
    ontouchstart: null,
    onwheel: null,
    get interactive () {
        return this.eventMode === "dynamic" || this.eventMode === "static";
    },
    set interactive (a){
        this.eventMode = a ? "static" : "passive";
    },
    _internalEventMode: void 0,
    get eventMode () {
        var _this__internalEventMode;
        return (_this__internalEventMode = this._internalEventMode) !== null && _this__internalEventMode !== void 0 ? _this__internalEventMode : ee.defaultEventMode;
    },
    set eventMode (a){
        this._internalEventMode = a;
    },
    isInteractive: function isInteractive() {
        return this.eventMode === "static" || this.eventMode === "dynamic";
    },
    interactiveChildren: !0,
    hitArea: null,
    addEventListener: function addEventListener(a1, e, t) {
        var i = typeof t == "boolean" && t || (typeof t === "undefined" ? "undefined" : _type_of(t)) == "object" && t.capture, n = (typeof t === "undefined" ? "undefined" : _type_of(t)) == "object" ? t.signal : void 0, s = (typeof t === "undefined" ? "undefined" : _type_of(t)) == "object" ? t.once === !0 : !1, o = typeof e == "function" ? void 0 : e;
        a1 = i ? "".concat(a1, "capture") : a1;
        var r = typeof e == "function" ? e : e.handleEvent, l = this;
        n && n.addEventListener("abort", function() {
            l.off(a1, r, o);
        }), s ? l.once(a1, r, o) : l.on(a1, r, o);
    },
    removeEventListener: function removeEventListener(a1, e, t) {
        var i = typeof t == "boolean" && t || (typeof t === "undefined" ? "undefined" : _type_of(t)) == "object" && t.capture, n = typeof e == "function" ? void 0 : e;
        a1 = i ? "".concat(a1, "capture") : a1, e = typeof e == "function" ? e : e.handleEvent, this.off(a1, e, n);
    },
    dispatchEvent: function dispatchEvent(a1) {
        if (!_instanceof(a1, w)) throw new Error("Container cannot propagate events outside of the Federated Events API");
        return a1.defaultPrevented = !1, a1.path = null, a1.target = this, a1.manager.dispatchEvent(a1), !a1.defaultPrevented;
    }
};
P.add(ue);
P.mixin(Z, pe);
P.add(Q);
P.add(ee);
P.mixin(Z, be);
