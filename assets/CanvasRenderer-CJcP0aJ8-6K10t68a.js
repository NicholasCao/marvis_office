function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _ee;
import { A as Le, R as Oe, E as _, e as ee, M as A, O as Ce, D as Te, Q as Ne, w as Ye, V as Pe, W as Z, n as ke, X as je, Y as be, Z as _e, s as Ve, _ as Se, $ as $e, a0 as Xe } from "./index-wSLjxAso.js";
import { S as Qe, B as Je, b as Ke, c as Ze, d as ze, A as et, C as tt, R as st } from "./RenderTargetSystem-D76awkIv-BeDz7X5E.js";
import { c as C, a as nt } from "./canvasUtils-B4DAHqdl-CTb8ifHP.js";
import "./react-vendor-Bcb6ewdu.js";
import "./markdown-vendor-CHTmL0iO.js";
import "./utils-vendor-D8_MVJCX.js";
import "./report-vendor-COKl-wDg.js";
import "./Filter-D2TFakTj-BL2pn75X.js";
var he = /*#__PURE__*/ function() {
    "use strict";
    function L() {
        _class_call_check(this, L);
    }
    _create_class(L, [
        {
            key: "start",
            value: function start(e, t, a) {}
        },
        {
            key: "execute",
            value: function execute(e, t) {
                var a = t.elements;
                if (!a || !a.length) return;
                var s = e.renderer, o = s.canvasContext, r = o.activeContext;
                for(var l = 0; l < a.length; l++){
                    var _ref, _ref1, _y_addressModeU, _y_addressModeV, _ref2, _h_source__resolution;
                    var _s_globalUniforms_globalUniformData, _s_filter, _d_renderable_renderGroup, _d_renderable;
                    var i = a[l];
                    if (!i.packAsQuad) continue;
                    var d = i, h = d.texture, v = h ? C.getCanvasSource(h) : null;
                    if (!v) continue;
                    var y = h.source.style, H = o.smoothProperty, W = y.scaleMode !== "nearest";
                    r[H] !== W && (r[H] = W), o.setBlendMode(t.blendMode);
                    var F = (_ref = (_s_globalUniforms_globalUniformData = s.globalUniforms.globalUniformData) === null || _s_globalUniforms_globalUniformData === void 0 ? void 0 : _s_globalUniforms_globalUniformData.worldColor) !== null && _ref !== void 0 ? _ref : 4294967295, S = d.color, G = (F >>> 24 & 255) / 255, P = (S >>> 24 & 255) / 255, g = (_ref1 = (_s_filter = s.filter) === null || _s_filter === void 0 ? void 0 : _s_filter.alphaMultiplier) !== null && _ref1 !== void 0 ? _ref1 : 1, M = G * P * g;
                    if (M <= 0) continue;
                    r.globalAlpha = M;
                    var X = F & 16777215, k = S & 16777215, U = Se(Z(k, X)), I = h.frame, V = (_y_addressModeU = y.addressModeU) !== null && _y_addressModeU !== void 0 ? _y_addressModeU : y.addressMode, O = (_y_addressModeV = y.addressModeV) !== null && _y_addressModeV !== void 0 ? _y_addressModeV : y.addressMode, u = L._getPatternRepeat(V, O), m = (_ref2 = (_h_source__resolution = h.source._resolution) !== null && _h_source__resolution !== void 0 ? _h_source__resolution : h.source.resolution) !== null && _ref2 !== void 0 ? _ref2 : 1, f = (_d_renderable = d.renderable) === null || _d_renderable === void 0 ? void 0 : (_d_renderable_renderGroup = _d_renderable.renderGroup) === null || _d_renderable_renderGroup === void 0 ? void 0 : _d_renderable_renderGroup.isCachedAsTexture, D = I.x * m, N = I.y * m, b = I.width * m, E = I.height * m, x = d.bounds, w = s.renderTarget.renderTarget.isRoot, R = x.minX, $ = x.minY, q = x.maxX - x.minX, B = x.maxY - x.minY, T = h.rotate, c = h.uvs, te = Math.min(c.x0, c.x1, c.x2, c.x3, c.y0, c.y1, c.y2, c.y3), Fe = Math.max(c.x0, c.x1, c.x2, c.x3, c.y0, c.y1, c.y2, c.y3), de = u !== "no-repeat" && (te < 0 || Fe > 1), se = T && !(!de && (U !== 16777215 || T));
                    se ? (L._tempPatternMatrix.copyFrom(d.transform), Pe.matrixAppendRotationInv(L._tempPatternMatrix, T, R, $, q, B), o.setContextTransform(L._tempPatternMatrix, d.roundPixels === 1, void 0, f && w)) : o.setContextTransform(d.transform, d.roundPixels === 1, void 0, f && w);
                    var Q = se ? 0 : R, J = se ? 0 : $, ne = q, ae = B;
                    if (de) {
                        var oe = v;
                        var Y = U !== 16777215 && !T, j = I.width <= h.source.width && I.height <= h.source.height;
                        Y && j && (oe = C.getTintedCanvas({
                            texture: h
                        }, U));
                        var re = r.createPattern(oe, u);
                        if (!re) continue;
                        var pe = ne, ue = ae;
                        if (pe === 0 || ue === 0) continue;
                        var me = 1 / pe, fe = 1 / ue, ge = (c.x1 - c.x0) * me, ve = (c.y1 - c.y0) * me, ye = (c.x3 - c.x0) * fe, xe = (c.y3 - c.y0) * fe, Ue = c.x0 - ge * Q - ye * J, qe = c.y0 - ve * Q - xe * J, ie = h.source.pixelWidth, ce = h.source.pixelHeight;
                        L._tempPatternMatrix.set(ge * ie, ve * ce, ye * ie, xe * ce, Ue * ie, qe * ce), C.applyPatternTransform(re, L._tempPatternMatrix), r.fillStyle = re, r.fillRect(Q, J, ne, ae);
                    } else {
                        var Y1 = U !== 16777215 || T ? C.getTintedCanvas({
                            texture: h
                        }, U) : v, j1 = Y1 !== v;
                        r.drawImage(Y1, j1 ? 0 : D, j1 ? 0 : N, j1 ? Y1.width : b, j1 ? Y1.height : E, Q, J, ne, ae);
                    }
                }
            }
        }
    ], [
        {
            key: "_getPatternRepeat",
            value: function _getPatternRepeat(e, t) {
                var a = e && e !== "clamp-to-edge", s = t && t !== "clamp-to-edge";
                return a && s ? "repeat" : a ? "repeat-x" : s ? "repeat-y" : "no-repeat";
            }
        }
    ]);
    return L;
}();
he._tempPatternMatrix = new A;
he.extension = {
    type: [
        _.CanvasPipesAdaptor
    ],
    name: "batch"
};
var at = he;
var Me = /*#__PURE__*/ function() {
    "use strict";
    function Me(e) {
        _class_call_check(this, Me);
        this._colorStack = [], this._colorStackIndex = 0, this._currentColor = 0, this._renderer = e;
    }
    _create_class(Me, [
        {
            key: "buildStart",
            value: function buildStart() {
                this._colorStack[0] = 15, this._colorStackIndex = 1, this._currentColor = 15;
            }
        },
        {
            key: "push",
            value: function push(e, t, a) {
                this._renderer.renderPipes.batch.break(a);
                var s = this._colorStack;
                s[this._colorStackIndex] = s[this._colorStackIndex - 1] & e.mask;
                var o = this._colorStack[this._colorStackIndex];
                o !== this._currentColor && (this._currentColor = o, a.add({
                    renderPipeId: "colorMask",
                    colorMask: o,
                    canBundle: !1
                })), this._colorStackIndex++;
            }
        },
        {
            key: "pop",
            value: function pop(e, t, a) {
                this._renderer.renderPipes.batch.break(a);
                var s = this._colorStack;
                this._colorStackIndex--;
                var o = s[this._colorStackIndex - 1];
                o !== this._currentColor && (this._currentColor = o, a.add({
                    renderPipeId: "colorMask",
                    colorMask: o,
                    canBundle: !1
                }));
            }
        },
        {
            key: "execute",
            value: function execute(e) {}
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null, this._colorStack = null;
            }
        }
    ]);
    return Me;
}();
Me.extension = {
    type: [
        _.CanvasPipes
    ],
    name: "colorMask"
};
function ot(n, e, t, a, s, o) {
    o = Math.max(0, Math.min(o, Math.min(a, s) / 2)), n.moveTo(e + o, t), n.lineTo(e + a - o, t), n.quadraticCurveTo(e + a, t, e + a, t + o), n.lineTo(e + a, t + s - o), n.quadraticCurveTo(e + a, t + s, e + a - o, t + s), n.lineTo(e + o, t + s), n.quadraticCurveTo(e, t + s, e, t + s - o), n.lineTo(e, t + o), n.quadraticCurveTo(e, t, e + o, t);
}
function we(n, e) {
    switch(e.type){
        case "rectangle":
            {
                var t = e;
                n.rect(t.x, t.y, t.width, t.height);
                break;
            }
        case "roundedRectangle":
            {
                var t1 = e;
                ot(n, t1.x, t1.y, t1.width, t1.height, t1.radius);
                break;
            }
        case "circle":
            {
                var t2 = e;
                n.moveTo(t2.x + t2.radius, t2.y), n.arc(t2.x, t2.y, t2.radius, 0, Math.PI * 2);
                break;
            }
        case "ellipse":
            {
                var t3 = e;
                n.ellipse ? (n.moveTo(t3.x + t3.halfWidth, t3.y), n.ellipse(t3.x, t3.y, t3.halfWidth, t3.halfHeight, 0, 0, Math.PI * 2)) : (n.save(), n.translate(t3.x, t3.y), n.scale(t3.halfWidth, t3.halfHeight), n.moveTo(1, 0), n.arc(0, 0, 1, 0, Math.PI * 2), n.restore());
                break;
            }
        case "triangle":
            {
                var t4 = e;
                n.moveTo(t4.x, t4.y), n.lineTo(t4.x2, t4.y2), n.lineTo(t4.x3, t4.y3), n.closePath();
                break;
            }
        default:
            {
                var t5 = e, a = t5.points;
                if (!(a === null || a === void 0 ? void 0 : a.length)) break;
                n.moveTo(a[0], a[1]);
                for(var s = 2; s < a.length; s += 2)n.lineTo(a[s], a[s + 1]);
                t5.closePath && n.closePath();
                break;
            }
    }
}
function rt(n, e, t) {
    var _e_closePath;
    var _be_e_type;
    var a = [], s = [], o = [];
    if (!((_be_e_type = be[e.type]) === null || _be_e_type === void 0 ? void 0 : _be_e_type.build(e, a))) return !1;
    var l = (_e_closePath = e.closePath) !== null && _e_closePath !== void 0 ? _e_closePath : !0;
    _e(a, t, !1, l, s, o);
    for(var i = 0; i < o.length; i += 3){
        var d = o[i] * 2, h = o[i + 1] * 2, v = o[i + 2] * 2;
        n.moveTo(s[d], s[d + 1]), n.lineTo(s[h], s[h + 1]), n.lineTo(s[v], s[v + 1]), n.closePath();
    }
    return !0;
}
function it(n, e) {
    if (!(e === null || e === void 0 ? void 0 : e.length)) return !1;
    for(var t = 0; t < e.length; t++){
        var a = e[t];
        if (!(a === null || a === void 0 ? void 0 : a.shape)) continue;
        var s = a.transform, o = s && !s.isIdentity();
        o && (n.save(), n.transform(s.a, s.b, s.c, s.d, s.tx, s.ty)), we(n, a.shape), o && n.restore();
    }
    return !0;
}
var Re = /*#__PURE__*/ function() {
    "use strict";
    function Re(e) {
        _class_call_check(this, Re);
        this._warnedMaskTypes = new Set, this._canvasMaskStack = [], this._renderer = e;
    }
    _create_class(Re, [
        {
            key: "push",
            value: function push(e, t, a) {
                this._renderer.renderPipes.batch.break(a), a.add({
                    renderPipeId: "stencilMask",
                    action: "pushMaskBegin",
                    mask: e,
                    inverse: t._maskOptions.inverse,
                    canBundle: !1
                });
            }
        },
        {
            key: "pop",
            value: function pop(e, t, a) {
                this._renderer.renderPipes.batch.break(a), a.add({
                    renderPipeId: "stencilMask",
                    action: "popMaskEnd",
                    mask: e,
                    inverse: t._maskOptions.inverse,
                    canBundle: !1
                });
            }
        },
        {
            key: "execute",
            value: function execute(e) {
                var _r_context;
                if (e.action !== "pushMaskBegin" && e.action !== "popMaskEnd") return;
                var t = this._renderer, a = t.canvasContext, s = a === null || a === void 0 ? void 0 : a.activeContext;
                if (!s) return;
                if (e.action === "popMaskEnd") {
                    this._canvasMaskStack.pop() && s.restore();
                    return;
                }
                e.inverse && this._warnOnce("inverse", "CanvasRenderer: inverse masks are not supported on Canvas2D; ignoring inverse flag.");
                var o = e.mask.mask;
                if (!_instanceof(o, Ne)) {
                    this._warnOnce("nonGraphics", "CanvasRenderer: only Graphics masks are supported in Canvas2D; skipping mask."), this._canvasMaskStack.push(!1);
                    return;
                }
                var r = o, l = (_r_context = r.context) === null || _r_context === void 0 ? void 0 : _r_context.instructions;
                if (!(l === null || l === void 0 ? void 0 : l.length)) {
                    this._canvasMaskStack.push(!1);
                    return;
                }
                s.save(), a.setContextTransform(r.groupTransform, (t._roundPixels | r._roundPixels) === 1), s.beginPath();
                var i = !1, d = !1;
                for(var h = 0; h < l.length; h++){
                    var _H_path, _W_shapePrimitives;
                    var v = l[h], y = v.action;
                    if (y !== "fill" && y !== "stroke") continue;
                    var H = v.data, W = H === null || H === void 0 ? void 0 : (_H_path = H.path) === null || _H_path === void 0 ? void 0 : _H_path.shapePath;
                    if (!(W === null || W === void 0 ? void 0 : (_W_shapePrimitives = W.shapePrimitives) === null || _W_shapePrimitives === void 0 ? void 0 : _W_shapePrimitives.length)) continue;
                    var F = y === "stroke", S = W.shapePrimitives;
                    for(var G = 0; G < S.length; G++){
                        var P = S[G];
                        if (!(P === null || P === void 0 ? void 0 : P.shape)) continue;
                        var g = P.transform, M = g && !g.isIdentity();
                        M && (s.save(), s.transform(g.a, g.b, g.c, g.d, g.tx, g.ty)), F && H.style ? i = rt(s, P.shape, H.style) || i : (we(s, P.shape), d = it(s, P.holes) || d, i = !0), M && s.restore();
                    }
                }
                if (!i) {
                    s.restore(), this._canvasMaskStack.push(!1);
                    return;
                }
                d ? s.clip("evenodd") : s.clip(), this._canvasMaskStack.push(!0);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null, this._warnedMaskTypes = null, this._canvasMaskStack = null;
            }
        },
        {
            key: "_warnOnce",
            value: function _warnOnce(e, t) {
                this._warnedMaskTypes.has(e) || (this._warnedMaskTypes.add(e), Ye(t));
            }
        }
    ]);
    return Re;
}();
Re.extension = {
    type: [
        _.CanvasPipes
    ],
    name: "stencilMask"
};
var p = "source-over";
function ct() {
    var n = nt(), e = Object.create(null);
    return e.inherit = p, e.none = p, e.normal = "source-over", e.add = "lighter", e.multiply = n ? "multiply" : p, e.screen = n ? "screen" : p, e.overlay = n ? "overlay" : p, e.darken = n ? "darken" : p, e.lighten = n ? "lighten" : p, e["color-dodge"] = n ? "color-dodge" : p, e["color-burn"] = n ? "color-burn" : p, e["hard-light"] = n ? "hard-light" : p, e["soft-light"] = n ? "soft-light" : p, e.difference = n ? "difference" : p, e.exclusion = n ? "exclusion" : p, e.saturation = n ? "saturation" : p, e.color = n ? "color" : p, e.luminosity = n ? "luminosity" : p, e["linear-burn"] = n ? "color-burn" : p, e["linear-dodge"] = n ? "color-dodge" : p, e["linear-light"] = n ? "hard-light" : p, e["pin-light"] = n ? "hard-light" : p, e["vivid-light"] = n ? "hard-light" : p, e["hard-mix"] = p, e.negation = n ? "difference" : p, e["normal-npm"] = e.normal, e["add-npm"] = e.add, e["screen-npm"] = e.screen, e.erase = "destination-out", e.subtract = p, e.divide = p, e.min = p, e.max = p, e;
}
var lt = new A;
var Ie = /*#__PURE__*/ function() {
    "use strict";
    function Ie(e) {
        _class_call_check(this, Ie);
        this.activeResolution = 1, this.smoothProperty = "imageSmoothingEnabled", this.blendModes = ct(), this._activeBlendMode = "normal", this._projTransform = null, this._outerBlend = !1, this._warnedBlendModes = new Set, this._renderer = e;
    }
    _create_class(Ie, [
        {
            key: "resolutionChange",
            value: function resolutionChange(e) {
                this.activeResolution = e;
            }
        },
        {
            key: "init",
            value: function init() {
                var e = this._renderer.background.alpha < 1;
                if (this.rootContext = this._renderer.canvas.getContext("2d", {
                    alpha: e
                }), this.activeContext = this.rootContext, this.activeResolution = this._renderer.resolution, !this.rootContext.imageSmoothingEnabled) {
                    var t = this.rootContext;
                    t.webkitImageSmoothingEnabled ? this.smoothProperty = "webkitImageSmoothingEnabled" : t.mozImageSmoothingEnabled ? this.smoothProperty = "mozImageSmoothingEnabled" : t.oImageSmoothingEnabled ? this.smoothProperty = "oImageSmoothingEnabled" : t.msImageSmoothingEnabled && (this.smoothProperty = "msImageSmoothingEnabled");
                }
            }
        },
        {
            key: "setContextTransform",
            value: function setContextTransform(e, t, a, s) {
                var _this__renderer_globalUniforms_globalUniformData;
                var o = s ? A.IDENTITY : ((_this__renderer_globalUniforms_globalUniformData = this._renderer.globalUniforms.globalUniformData) === null || _this__renderer_globalUniforms_globalUniformData === void 0 ? void 0 : _this__renderer_globalUniforms_globalUniformData.worldTransformMatrix) || A.IDENTITY;
                var r = lt;
                r.copyFrom(o), r.append(e);
                var l = this._projTransform, i = this.activeResolution;
                if (a = a || i, l) {
                    var d = A.shared;
                    d.copyFrom(r), d.prepend(l), r = d;
                }
                t ? this.activeContext.setTransform(r.a * a, r.b * a, r.c * a, r.d * a, r.tx * i | 0, r.ty * i | 0) : this.activeContext.setTransform(r.a * a, r.b * a, r.c * a, r.d * a, r.tx * i, r.ty * i);
            }
        },
        {
            key: "clear",
            value: function clear(e, t) {
                var a = this.activeContext, s = this._renderer;
                if (a.clearRect(0, 0, s.width, s.height), e) {
                    var o = Ce.shared.setValue(e);
                    a.globalAlpha = t !== null && t !== void 0 ? t : o.alpha, a.fillStyle = o.toHex(), a.fillRect(0, 0, s.width, s.height), a.globalAlpha = 1;
                }
            }
        },
        {
            key: "setBlendMode",
            value: function setBlendMode(e) {
                if (this._activeBlendMode === e) return;
                this._activeBlendMode = e, this._outerBlend = !1;
                var t = this.blendModes[e];
                if (!t) {
                    this._warnedBlendModes.has(e) || (console.warn('CanvasRenderer: blend mode "'.concat(e, '" is not supported in Canvas2D; falling back to "source-over".')), this._warnedBlendModes.add(e)), this.activeContext.globalCompositeOperation = "source-over";
                    return;
                }
                this.activeContext.globalCompositeOperation = t;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.rootContext = null, this.activeContext = null, this._warnedBlendModes.clear();
            }
        }
    ]);
    return Ie;
}();
Ie.extension = {
    type: [
        _.CanvasSystem
    ],
    name: "canvasContext"
};
var Be = /*#__PURE__*/ function() {
    "use strict";
    function Be() {
        _class_call_check(this, Be);
        this.maxTextures = 16, this.maxBatchableTextures = 16, this.maxUniformBindings = 0;
    }
    _create_class(Be, [
        {
            key: "init",
            value: function init() {}
        }
    ]);
    return Be;
}();
Be.extension = {
    type: [
        _.CanvasSystem
    ],
    name: "limits"
};
var ht = "#808080", K = new A, dt = new A, pt = new A, le = new A;
function ut(n, e, t) {
    n.beginPath();
    for(var a = 0; a < t.length; a += 3){
        var s = t[a] * 2, o = t[a + 1] * 2, r = t[a + 2] * 2;
        n.moveTo(e[s], e[s + 1]), n.lineTo(e[o], e[o + 1]), n.lineTo(e[r], e[r + 1]), n.closePath();
    }
    n.fill();
}
function mt(n) {
    return "#".concat((n & 16777215).toString(16).padStart(6, "0"));
}
function ft(n, e, t, a, s, o) {
    o = Math.max(0, Math.min(o, Math.min(a, s) / 2)), n.moveTo(e + o, t), n.lineTo(e + a - o, t), n.quadraticCurveTo(e + a, t, e + a, t + o), n.lineTo(e + a, t + s - o), n.quadraticCurveTo(e + a, t + s, e + a - o, t + s), n.lineTo(e + o, t + s), n.quadraticCurveTo(e, t + s, e, t + s - o), n.lineTo(e, t + o), n.quadraticCurveTo(e, t, e + o, t);
}
function z(n, e) {
    switch(e.type){
        case "rectangle":
            {
                var t = e;
                n.rect(t.x, t.y, t.width, t.height);
                break;
            }
        case "roundedRectangle":
            {
                var t1 = e;
                ft(n, t1.x, t1.y, t1.width, t1.height, t1.radius);
                break;
            }
        case "circle":
            {
                var t2 = e;
                n.arc(t2.x, t2.y, t2.radius, 0, Math.PI * 2);
                break;
            }
        case "ellipse":
            {
                var t3 = e;
                n.ellipse ? n.ellipse(t3.x, t3.y, t3.halfWidth, t3.halfHeight, 0, 0, Math.PI * 2) : (n.save(), n.translate(t3.x, t3.y), n.scale(t3.halfWidth, t3.halfHeight), n.arc(0, 0, 1, 0, Math.PI * 2), n.restore());
                break;
            }
        case "triangle":
            {
                var t4 = e;
                n.moveTo(t4.x, t4.y), n.lineTo(t4.x2, t4.y2), n.lineTo(t4.x3, t4.y3), n.closePath();
                break;
            }
        default:
            {
                var t5 = e, a = t5.points;
                if (!(a === null || a === void 0 ? void 0 : a.length)) break;
                n.moveTo(a[0], a[1]);
                for(var s = 2; s < a.length; s += 2)n.lineTo(a[s], a[s + 1]);
                t5.closePath && n.closePath();
                break;
            }
    }
}
function gt(n, e) {
    if (!(e === null || e === void 0 ? void 0 : e.length)) return !1;
    for(var t = 0; t < e.length; t++){
        var a = e[t];
        if (!(a === null || a === void 0 ? void 0 : a.shape)) continue;
        var s = a.transform, o = s && !s.isIdentity();
        o && (n.save(), n.transform(s.a, s.b, s.c, s.d, s.tx, s.ty)), z(n, a.shape), o && n.restore();
    }
    return !0;
}
function vt(n, e, t, a) {
    var s = n.fill;
    if (_instanceof(s, $e)) {
        s.buildGradient();
        var r = s.texture;
        if (r) {
            var l = C.getTintedPattern(r, e), i = t ? le.copyFrom(t).scale(r.source.pixelWidth, r.source.pixelHeight) : le.copyFrom(s.transform);
            return a && !n.textureSpace && i.append(a), C.applyPatternTransform(l, i), l;
        }
    }
    if (_instanceof(s, Xe)) {
        var r1 = C.getTintedPattern(s.texture, e);
        return C.applyPatternTransform(r1, s.transform), r1;
    }
    var o = n.texture;
    if (o && o !== ke.WHITE) {
        if (!o.source.resource) return ht;
        var r2 = C.getTintedPattern(o, e), l1 = t ? le.copyFrom(t).scale(o.source.pixelWidth, o.source.pixelHeight) : n.matrix;
        return C.applyPatternTransform(r2, l1), r2;
    }
    return mt(e);
}
var Ae = /*#__PURE__*/ function() {
    "use strict";
    function Ae() {
        _class_call_check(this, Ae);
        this.shader = null;
    }
    _create_class(Ae, [
        {
            key: "contextChange",
            value: function contextChange(e) {}
        },
        {
            key: "execute",
            value: function execute(e, t) {
                var _ref, _ref1;
                var _a_globalUniforms_globalUniformData, _a_filter;
                var a = e.renderer, s = a.canvasContext, o = s.activeContext, r = t.groupTransform, l = (_ref = (_a_globalUniforms_globalUniformData = a.globalUniforms.globalUniformData) === null || _a_globalUniforms_globalUniformData === void 0 ? void 0 : _a_globalUniforms_globalUniformData.worldColor) !== null && _ref !== void 0 ? _ref : 4294967295, i = t.groupColorAlpha, d = (l >>> 24 & 255) / 255, h = (i >>> 24 & 255) / 255, v = (_ref1 = (_a_filter = a.filter) === null || _a_filter === void 0 ? void 0 : _a_filter.alphaMultiplier) !== null && _ref1 !== void 0 ? _ref1 : 1, y = d * h * v;
                if (y <= 0) return;
                var H = l & 16777215, W = i & 16777215, F = Se(Z(W, H)), S = a._roundPixels | t._roundPixels;
                o.save(), s.setContextTransform(r, S === 1), s.setBlendMode(t.groupBlendMode);
                var G = t.context.instructions;
                for(var P = 0; P < G.length; P++){
                    var _M_path, _X_shapePrimitives, _M_hole_shapePath_shapePrimitives, _M_hole_shapePath, _M_hole;
                    var g = G[P];
                    if (g.action === "texture") {
                        var _ref2, _m_source__resolution;
                        var u = g.data, m = u.image, f = m ? C.getCanvasSource(m) : null;
                        if (!f) continue;
                        var D = u.alpha * y;
                        if (D <= 0) continue;
                        var N = Z(u.style, F);
                        o.globalAlpha = D;
                        var b = f;
                        N !== 16777215 && (b = C.getTintedCanvas({
                            texture: m
                        }, N));
                        var E = m.frame, x = (_ref2 = (_m_source__resolution = m.source._resolution) !== null && _m_source__resolution !== void 0 ? _m_source__resolution : m.source.resolution) !== null && _ref2 !== void 0 ? _ref2 : 1;
                        var w = E.x * x, R = E.y * x;
                        var $ = E.width * x, q = E.height * x;
                        b !== f && (w = 0, R = 0);
                        var B = u.transform, T = B && !B.isIdentity(), c = m.rotate;
                        T || c ? (K.copyFrom(r), T && K.append(B), c && Pe.matrixAppendRotationInv(K, c, u.dx, u.dy, u.dw, u.dh), s.setContextTransform(K, S === 1)) : s.setContextTransform(r, S === 1), o.drawImage(b, w, R, b === f ? $ : b.width, b === f ? q : b.height, c ? 0 : u.dx, c ? 0 : u.dy, u.dw, u.dh), (T || c) && s.setContextTransform(r, S === 1);
                        continue;
                    }
                    var M = g.data, X = M === null || M === void 0 ? void 0 : (_M_path = M.path) === null || _M_path === void 0 ? void 0 : _M_path.shapePath;
                    if (!(X === null || X === void 0 ? void 0 : (_X_shapePrimitives = X.shapePrimitives) === null || _X_shapePrimitives === void 0 ? void 0 : _X_shapePrimitives.length)) continue;
                    var k = M.style, U = Z(k.color, F), I = k.alpha * y;
                    if (I <= 0) continue;
                    var V = g.action === "stroke";
                    if (o.globalAlpha = I, V) {
                        var u1 = k;
                        o.lineWidth = u1.width, o.lineCap = u1.cap, o.lineJoin = u1.join, o.miterLimit = u1.miterLimit;
                    }
                    var O = X.shapePrimitives;
                    if (!V && ((_M_hole = M.hole) === null || _M_hole === void 0 ? void 0 : (_M_hole_shapePath = _M_hole.shapePath) === null || _M_hole_shapePath === void 0 ? void 0 : (_M_hole_shapePath_shapePrimitives = _M_hole_shapePath.shapePrimitives) === null || _M_hole_shapePath_shapePrimitives === void 0 ? void 0 : _M_hole_shapePath_shapePrimitives.length)) {
                        var u2 = O[O.length - 1];
                        u2.holes = M.hole.shapePath.shapePrimitives;
                    }
                    for(var u3 = 0; u3 < O.length; u3++){
                        var m1 = O[u3];
                        if (!(m1 === null || m1 === void 0 ? void 0 : m1.shape)) continue;
                        var f1 = m1.transform, D1 = f1 && !f1.isIdentity(), N1 = k.texture && k.texture !== ke.WHITE, b1 = k.textureSpace === "global" ? f1 : null, E1 = N1 ? je(dt, k, m1.shape, b1) : null, x1 = D1 ? pt.copyFrom(r).append(f1) : r, w1 = vt(k, U, E1, x1);
                        if (D1 && (o.save(), o.transform(f1.a, f1.b, f1.c, f1.d, f1.tx, f1.ty)), V) {
                            var R1 = k;
                            if (R1.alignment !== .5 && !R1.pixelLine) {
                                var _be_m_shape_type;
                                var q1 = [], B1 = [], T1 = [];
                                if ((_be_m_shape_type = be[m1.shape.type]) === null || _be_m_shape_type === void 0 ? void 0 : _be_m_shape_type.build(m1.shape, q1)) {
                                    var _m_shape_closePath;
                                    var te = (_m_shape_closePath = m1.shape.closePath) !== null && _m_shape_closePath !== void 0 ? _m_shape_closePath : !0;
                                    _e(q1, R1, !1, te, B1, T1), o.fillStyle = w1, ut(o, B1, T1);
                                } else o.strokeStyle = w1, o.beginPath(), z(o, m1.shape), o.stroke();
                            } else o.strokeStyle = w1, o.beginPath(), z(o, m1.shape), o.stroke();
                        } else o.fillStyle = w1, o.beginPath(), z(o, m1.shape), gt(o, m1.holes) ? o.fill("evenodd") : o.fill();
                        D1 && o.restore();
                    }
                }
                o.restore();
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.shader = null;
            }
        }
    ]);
    return Ae;
}();
Ae.extension = {
    type: [
        _.CanvasPipesAdaptor
    ],
    name: "graphics"
};
var yt = /*#__PURE__*/ function() {
    "use strict";
    function yt() {
        _class_call_check(this, yt);
    }
    _create_class(yt, [
        {
            key: "init",
            value: function init(e, t) {
                this._renderer = e, this._renderTargetSystem = t;
            }
        },
        {
            key: "initGpuRenderTarget",
            value: function initGpuRenderTarget(e) {
                var t = e.colorTexture, _this__ensureCanvas = this._ensureCanvas(t), a = _this__ensureCanvas.canvas, s = _this__ensureCanvas.context;
                return {
                    canvas: a,
                    context: s,
                    width: a.width,
                    height: a.height
                };
            }
        },
        {
            key: "resizeGpuRenderTarget",
            value: function resizeGpuRenderTarget(e) {
                var t = e.colorTexture, _this__ensureCanvas = this._ensureCanvas(t), a = _this__ensureCanvas.canvas;
                a.width = e.pixelWidth, a.height = e.pixelHeight;
            }
        },
        {
            key: "startRenderPass",
            value: function startRenderPass(e, t, a, s) {
                var o = this._renderTargetSystem.getGpuRenderTarget(e);
                this._renderer.canvasContext.activeContext = o.context, this._renderer.canvasContext.activeResolution = e.resolution, t && this.clear(e, t, a, s);
            }
        },
        {
            key: "clear",
            value: function clear(e, t, a, s) {
                var r = this._renderTargetSystem.getGpuRenderTarget(e).context, l = s || {
                    x: 0,
                    y: 0,
                    width: e.pixelWidth,
                    height: e.pixelHeight
                };
                if (r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(l.x, l.y, l.width, l.height), a) {
                    var i = Ce.shared.setValue(a);
                    i.alpha > 0 && (r.globalAlpha = i.alpha, r.fillStyle = i.toHex(), r.fillRect(l.x, l.y, l.width, l.height), r.globalAlpha = 1);
                }
            }
        },
        {
            key: "finishRenderPass",
            value: function finishRenderPass() {}
        },
        {
            key: "copyToTexture",
            value: function copyToTexture(e, t, a, s, o) {
                var _ref, _ref1;
                var l = this._renderTargetSystem.getGpuRenderTarget(e).canvas, i = t.source, _this__ensureCanvas = this._ensureCanvas(i), d = _this__ensureCanvas.context, h = (_ref = o === null || o === void 0 ? void 0 : o.x) !== null && _ref !== void 0 ? _ref : 0, v = (_ref1 = o === null || o === void 0 ? void 0 : o.y) !== null && _ref1 !== void 0 ? _ref1 : 0;
                return d.drawImage(l, a.x, a.y, s.width, s.height, h, v, s.width, s.height), i.update(), t;
            }
        },
        {
            key: "destroyGpuRenderTarget",
            value: function destroyGpuRenderTarget(e) {}
        },
        {
            key: "_ensureCanvas",
            value: function _ensureCanvas(e) {
                var t = e.resource;
                (!t || !Ve.test(t)) && (t = Te.get().createCanvas(e.pixelWidth, e.pixelHeight), e.resource = t), (t.width !== e.pixelWidth || t.height !== e.pixelHeight) && (t.width = e.pixelWidth, t.height = e.pixelHeight);
                var a = t.getContext("2d");
                return {
                    canvas: t,
                    context: a
                };
            }
        }
    ]);
    return yt;
}();
var He = /*#__PURE__*/ function(st) {
    "use strict";
    _inherits(He, st);
    function He(e) {
        _class_call_check(this, He);
        var _this;
        _this = _call_super(this, He, [
            e
        ]), _this.adaptor = new yt, _this.adaptor.init(e, _this);
        return _this;
    }
    return He;
}(st);
He.extension = {
    type: [
        _.CanvasSystem
    ],
    name: "renderTarget"
};
var Ge = /*#__PURE__*/ function() {
    "use strict";
    function Ge(e) {
        _class_call_check(this, Ge);
    }
    _create_class(Ge, [
        {
            key: "init",
            value: function init() {}
        },
        {
            key: "initSource",
            value: function initSource(e) {}
        },
        {
            key: "generateCanvas",
            value: function generateCanvas(e) {
                var _ref, _e_source__resolution;
                var t = Te.get().createCanvas(), a = t.getContext("2d"), s = C.getCanvasSource(e);
                if (!s) return t;
                var o = e.frame, r = (_ref = (_e_source__resolution = e.source._resolution) !== null && _e_source__resolution !== void 0 ? _e_source__resolution : e.source.resolution) !== null && _ref !== void 0 ? _ref : 1, l = o.x * r, i = o.y * r, d = o.width * r, h = o.height * r;
                return t.width = Math.ceil(d), t.height = Math.ceil(h), a.drawImage(s, l, i, d, h, 0, 0, d, h), t;
            }
        },
        {
            key: "getPixels",
            value: function getPixels(e) {
                var t = this.generateCanvas(e);
                return {
                    pixels: t.getContext("2d", {
                        willReadFrequently: !0
                    }).getImageData(0, 0, t.width, t.height).data,
                    width: t.width,
                    height: t.height
                };
            }
        },
        {
            key: "destroy",
            value: function destroy() {}
        }
    ]);
    return Ge;
}();
Ge.extension = {
    type: [
        _.CanvasSystem
    ],
    name: "texture"
};
var xt = _to_consumable_array(Qe).concat([
    Ie,
    Be,
    Ge,
    He
]), Ct = [
    Je,
    Ke,
    Ze,
    ze,
    et,
    Re,
    Me,
    tt
], Tt = [
    at,
    Ae
], De = [], Ee = [], We = [];
ee.handleByNamedList(_.CanvasSystem, De);
ee.handleByNamedList(_.CanvasPipes, Ee);
ee.handleByNamedList(_.CanvasPipesAdaptor, We);
(_ee = ee).add.apply(_ee, _to_consumable_array(xt).concat(_to_consumable_array(Ct), _to_consumable_array(Tt)));
var Bt = /*#__PURE__*/ function(Le) {
    "use strict";
    _inherits(Bt, Le);
    function Bt() {
        _class_call_check(this, Bt);
        var e = {
            name: "canvas",
            type: Oe.CANVAS,
            systems: De,
            renderPipes: Ee,
            renderPipeAdaptors: We
        };
        return _call_super(this, Bt, [
            e
        ]);
    }
    return Bt;
}(Le);
export { Bt as CanvasRenderer };
