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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
import { V as U, L as P, n as A, a as G, a5 as k, a6 as b, aq as q, ar as _, w as V, as as M, at as I, au as L, a8 as R, c as j, av as J, aw as E, O as Z, ax as Q, ay as ee, az as te, aA as $, aB as se } from "./index-wSLjxAso.js";
import "./react-vendor-Bcb6ewdu.js";
import "./markdown-vendor-CHTmL0iO.js";
import "./utils-vendor-D8_MVJCX.js";
import "./report-vendor-COKl-wDg.js";
var N = /*#__PURE__*/ function(G) {
    "use strict";
    _inherits(N, G);
    function N() {
        _class_call_check(this, N);
        var _this;
        _this = _call_super(this, N, arguments), _this.chars = Object.create(null), _this.lineHeight = 0, _this.fontFamily = "", _this.fontMetrics = {
            fontSize: 0,
            ascent: 0,
            descent: 0
        }, _this.baseLineOffset = 0, _this.distanceField = {
            type: "none",
            range: 0
        }, _this.pages = [], _this.applyFillAsTint = !0, _this.baseMeasurementFontSize = 100, _this.baseRenderedFontSize = 100;
        return _this;
    }
    _create_class(N, [
        {
            key: "font",
            get: function get() {
                return k(b, "BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."), this.fontFamily;
            }
        },
        {
            key: "pageTextures",
            get: function get() {
                return k(b, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."), this.pages;
            }
        },
        {
            key: "size",
            get: function get() {
                return k(b, "BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."), this.fontMetrics.fontSize;
            }
        },
        {
            key: "distanceFieldRange",
            get: function get() {
                return k(b, "BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."), this.distanceField.range;
            }
        },
        {
            key: "distanceFieldType",
            get: function get() {
                return k(b, "BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."), this.distanceField.type;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                var _this_chars_t_texture;
                this.emit("destroy", this), this.removeAllListeners();
                for(var t in this.chars)(_this_chars_t_texture = this.chars[t].texture) === null || _this_chars_t_texture === void 0 ? void 0 : _this_chars_t_texture.destroy();
                this.chars = null, e && (this.pages.forEach(function(t) {
                    return t.texture.destroy(!0);
                }), this.pages = null);
            }
        }
    ]);
    return N;
}(G);
var X = /*#__PURE__*/ function(N) {
    "use strict";
    _inherits(D, N);
    function D(e) {
        _class_call_check(this, D);
        var _this;
        var _t_skipKerning, _t_resolution, _t_padding;
        _this = _call_super(this, D), _this.resolution = 1, _this.pages = [], _this._padding = 0, _this._measureCache = Object.create(null), _this._currentChars = [], _this._currentX = 0, _this._currentY = 0, _this._currentMaxCharHeight = 0, _this._currentPageIndex = -1, _this._skipKerning = !1;
        var t = _object_spread({}, D.defaultOptions, e);
        _this._textureSize = t.textureSize, _this._mipmap = t.mipmap;
        var i = t.style.clone();
        t.overrideFill && (i._fill.color = 16777215, i._fill.alpha = 1, i._fill.texture = A.WHITE, i._fill.fill = null), _this.applyFillAsTint = t.overrideFill;
        var s = i.fontSize;
        i.fontSize = _this.baseMeasurementFontSize;
        var n = L(i);
        t.overrideSize ? (i._stroke && (i._stroke.width *= _this.baseRenderedFontSize / s), i.dropShadow && (i.dropShadow.blur *= _this.baseRenderedFontSize / s, i.dropShadow.distance *= _this.baseRenderedFontSize / s)) : i.fontSize = _this.baseRenderedFontSize = s, _this._style = i, _this._skipKerning = (_t_skipKerning = t.skipKerning) !== null && _t_skipKerning !== void 0 ? _t_skipKerning : !1, _this.resolution = (_t_resolution = t.resolution) !== null && _t_resolution !== void 0 ? _t_resolution : 1, _this._padding = (_t_padding = t.padding) !== null && _t_padding !== void 0 ? _t_padding : 4, t.textureStyle && (_this._textureStyle = _instanceof(t.textureStyle, R) ? t.textureStyle : new R(t.textureStyle)), _this.fontMetrics = M.measureFont(n), _this.lineHeight = i.lineHeight || _this.fontMetrics.fontSize || i.fontSize;
        return _this;
    }
    _create_class(D, [
        {
            key: "ensureCharacters",
            value: function ensureCharacters(e) {
                var _this = this;
                var _ref, _ref1;
                var _o_dropShadow, _o__stroke;
                var t = M.graphemeSegmenter(e).filter(function(w) {
                    return !_this._currentChars.includes(w);
                }).filter(function(w, m, c) {
                    return c.indexOf(w) === m;
                });
                if (!t.length) return;
                this._currentChars = _to_consumable_array(this._currentChars).concat(_to_consumable_array(t));
                var i;
                this._currentPageIndex === -1 ? i = this._nextPage() : i = this.pages[this._currentPageIndex];
                var _i_canvasAndContext = i.canvasAndContext, s = _i_canvasAndContext.canvas, n = _i_canvasAndContext.context, a = i.texture.source;
                var o = this._style;
                var r = this._currentX, p = this._currentY, l = this._currentMaxCharHeight;
                var u = this.baseRenderedFontSize / this.baseMeasurementFontSize, x = ((_ref = (_o_dropShadow = o.dropShadow) === null || _o_dropShadow === void 0 ? void 0 : _o_dropShadow.distance) !== null && _ref !== void 0 ? _ref : 0) + ((_ref1 = (_o__stroke = o._stroke) === null || _o__stroke === void 0 ? void 0 : _o__stroke.width) !== null && _ref1 !== void 0 ? _ref1 : 0), y = this._padding + x;
                var S = !1;
                var C = s.width / this.resolution, z = s.height / this.resolution;
                for(var w = 0; w < t.length; w++){
                    var m = t[w], c = M.measureText(m, o, s, !1);
                    c.lineHeight = c.height;
                    var d = c.width * u, g = Math.ceil((o.fontStyle === "italic" ? 2 : 1) * d), f = c.height * u, v = g + y * 2, W = f + y * 2;
                    if (S = !1, m !== "\n" && m !== "\r" && m !== "	" && m !== " " && (S = !0, l = Math.ceil(Math.max(W, l))), r + v > C && (p += l, l = W, r = 0, p + l > z)) {
                        a.update();
                        var F = this._nextPage();
                        s = F.canvasAndContext.canvas, n = F.canvasAndContext.context, a = F.texture.source, r = 0, p = 0, l = 0;
                    }
                    var B = n.measureText(m).width / u;
                    if (this.chars[m] = {
                        id: m.codePointAt(0),
                        xOffset: -(y / u),
                        yOffset: -(y / u),
                        xAdvance: B,
                        kerning: {}
                    }, S) {
                        this._drawGlyph(n, c, r + y, p + y, u, o);
                        var F1 = a.width * u, O = a.height * u, H = new P(r / F1 * a.width, p / O * a.height, v / F1 * a.width, W / O * a.height);
                        this.chars[m].texture = new A({
                            source: a,
                            frame: H
                        }), r += Math.ceil(v);
                    }
                }
                a.update(), this._currentX = r, this._currentY = p, this._currentMaxCharHeight = l, this._skipKerning || this._applyKerning(t, n, u);
            }
        },
        {
            key: "pageTextures",
            get: function get() {
                return k(b, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."), this.pages;
            }
        },
        {
            key: "_applyKerning",
            value: function _applyKerning(e, t, i) {
                var s = this._measureCache;
                for(var n = 0; n < e.length; n++){
                    var a = e[n];
                    for(var o = 0; o < this._currentChars.length; o++){
                        var r = this._currentChars[o];
                        var p = s[a];
                        p || (p = s[a] = t.measureText(a).width);
                        var l = s[r];
                        l || (l = s[r] = t.measureText(r).width);
                        var u = t.measureText(a + r).width, x = u - (p + l);
                        x && this.chars[a] && (this.chars[a].kerning[r] = x / i), u = t.measureText(a + r).width, x = u - (p + l), x && this.chars[r] && (this.chars[r].kerning[a] = x / i);
                    }
                }
            }
        },
        {
            key: "_nextPage",
            value: function _nextPage() {
                this._currentPageIndex++;
                var e = this.resolution, t = j.getOptimalCanvasAndContext(this._textureSize, this._textureSize, e);
                this._setupContext(t.context, this._style, e);
                var i = e * (this.baseRenderedFontSize / this.baseMeasurementFontSize), s = new A({
                    source: new J({
                        resource: t.canvas,
                        resolution: i,
                        alphaMode: "premultiply-alpha-on-upload",
                        autoGenerateMipmaps: this._mipmap
                    })
                });
                this._textureStyle && (s.source.style = this._textureStyle);
                var n = {
                    canvasAndContext: t,
                    texture: s
                };
                return this.pages[this._currentPageIndex] = n, n;
            }
        },
        {
            key: "_setupContext",
            value: function _setupContext(e, t, i) {
                var _ref;
                t.fontSize = this.baseRenderedFontSize, e.scale(i, i), e.font = L(t), t.fontSize = this.baseMeasurementFontSize, e.textBaseline = t.textBaseline;
                var s = t._stroke, n = (_ref = s === null || s === void 0 ? void 0 : s.width) !== null && _ref !== void 0 ? _ref : 0;
                if (s && (e.lineWidth = n, e.lineJoin = s.join, e.miterLimit = s.miterLimit, e.strokeStyle = E(s, e)), t._fill && (e.fillStyle = E(t._fill, e)), t.dropShadow) {
                    var a = t.dropShadow, o = Z.shared.setValue(a.color).toArray(), r = a.blur * i, p = a.distance * i;
                    e.shadowColor = "rgba(".concat(o[0] * 255, ",").concat(o[1] * 255, ",").concat(o[2] * 255, ",").concat(a.alpha, ")"), e.shadowBlur = r, e.shadowOffsetX = Math.cos(a.angle) * p, e.shadowOffsetY = Math.sin(a.angle) * p;
                } else e.shadowColor = "black", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0;
            }
        },
        {
            key: "_drawGlyph",
            value: function _drawGlyph(e, t, i, s, n, a) {
                var _ref;
                var _a__stroke;
                var o = t.text, r = t.fontProperties, l = ((_ref = (_a__stroke = a._stroke) === null || _a__stroke === void 0 ? void 0 : _a__stroke.width) !== null && _ref !== void 0 ? _ref : 0) * n, u = i + l / 2, x = s - l / 2, y = r.descent * n, S = t.lineHeight * n;
                var C = !1;
                a.stroke && l && (C = !0, e.strokeText(o, u, x + S - y));
                var z = e.shadowBlur, w = e.shadowOffsetX, m = e.shadowOffsetY;
                a._fill && (C && (e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0), e.fillText(o, u, x + S - y)), C && (e.shadowBlur = z, e.shadowOffsetX = w, e.shadowOffsetY = m);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                _get(_get_prototype_of(D.prototype), "destroy", this).call(this);
                for(var e = 0; e < this.pages.length; e++){
                    var _this_pages_e = this.pages[e], t = _this_pages_e.canvasAndContext, i = _this_pages_e.texture;
                    j.returnCanvasAndContext(t), i.destroy(!0);
                }
                this.pages = null;
            }
        }
    ]);
    return D;
}(N);
X.defaultOptions = {
    textureSize: 512,
    style: new I,
    mipmap: !0
};
var K = X;
function ie(h, e, t, i) {
    var s = {
        width: 0,
        height: 0,
        offsetY: 0,
        scale: e.fontSize / t.baseMeasurementFontSize,
        lines: [
            {
                width: 0,
                charPositions: [],
                spaceWidth: 0,
                spacesIndex: [],
                chars: []
            }
        ]
    };
    s.offsetY = t.baseLineOffset;
    var n = s.lines[0], a = null, o = !0;
    var r = {
        width: 0,
        start: 0,
        index: 0,
        positions: [],
        chars: []
    }, p = t.baseMeasurementFontSize / e.fontSize, l = e.letterSpacing * p, u = e.wordWrapWidth * p, x = e.lineHeight ? e.lineHeight * p : t.lineHeight, y = e.wordWrap && e.breakWords, S = Q(e.whiteSpace), C = ee(e.whiteSpace);
    if (S || C) {
        var c = [];
        var d = S;
        for(var g = 0; g < h.length; g++){
            var f = h[g];
            if (f === "\r" || f === "\n") if (C) f === "\r" && h[g + 1] === "\n" && g++, f = " ";
            else {
                S && (d = !0), c.push(f);
                continue;
            }
            if (te(f)) if (S && $(f)) {
                if (d) continue;
                d = !0, c.push(" ");
            } else d = !1, c.push(f);
            else d = !1, c.push(f);
        }
        h = c;
    }
    var z = function z(c) {
        var d = n.width;
        for(var g = 0; g < r.index; g++){
            var f = c.positions[g];
            n.chars.push(c.chars[g]), n.charPositions.push(f + d);
        }
        n.width += c.width, (r.index > 0 || !S) && (o = !1), r.width = 0, r.index = 0, r.chars.length = 0;
    }, w = function w() {
        var c = n.chars.length - 1;
        if (i) {
            var d = n.chars[c];
            for(; $(d);)n.width -= t.chars[d].xAdvance, n.spacesIndex.pop(), d = n.chars[--c];
        }
        s.width = Math.max(s.width, n.width), n = {
            width: 0,
            charPositions: [],
            chars: [],
            spaceWidth: 0,
            spacesIndex: []
        }, o = !0, s.lines.push(n), s.height += x;
    }, m = function m(c) {
        return c - l > u;
    };
    for(var c1 = 0; c1 < h.length + 1; c1++){
        var d1 = void 0;
        var g1 = c1 === h.length;
        g1 || (d1 = h[c1]);
        var f1 = t.chars[d1];
        if (/(?:\s)/.test(d1) || d1 === "\r" || d1 === "\n" || g1) {
            if (!o && e.wordWrap && m(n.width + r.width) ? (w(), z(r), g1 || n.charPositions.push(0)) : (r.start = n.width, z(r), g1 || n.charPositions.push(0)), d1 === "\r" || d1 === "\n") w();
            else if (!g1 && f1) {
                var _f_kerning;
                var F = f1.xAdvance + (((_f_kerning = f1.kerning) === null || _f_kerning === void 0 ? void 0 : _f_kerning[a]) || 0) + l;
                n.width += F, n.spaceWidth = F, n.spacesIndex.push(n.charPositions.length), n.chars.push(d1);
            }
        } else if (f1) {
            var _f_kerning1;
            var B = ((_f_kerning1 = f1.kerning) === null || _f_kerning1 === void 0 ? void 0 : _f_kerning1[a]) || 0, F1 = f1.xAdvance + B + l;
            y && m(r.width + F1) && (o || w(), z(r), w()), r.positions[r.index++] = r.width + B, r.chars.push(d1), r.width += F1, se(d1) && (!o && e.wordWrap && m(n.width + r.width) && w(), z(r));
        }
        a = d1;
    }
    return w(), e.align === "center" ? ne(s) : e.align === "right" ? ae(s) : e.align === "justify" && re(s), s;
}
function ne(h) {
    for(var e = 0; e < h.lines.length; e++){
        var t = h.lines[e], i = h.width / 2 - t.width / 2;
        for(var s = 0; s < t.charPositions.length; s++)t.charPositions[s] += i;
    }
}
function ae(h) {
    for(var e = 0; e < h.lines.length; e++){
        var t = h.lines[e], i = h.width - t.width;
        for(var s = 0; s < t.charPositions.length; s++)t.charPositions[s] += i;
    }
}
function re(h) {
    var e = h.width;
    for(var t = 0; t < h.lines.length - 2; t++){
        var i = h.lines[t];
        var s = 0, n = i.spacesIndex[s++], a = 0;
        var o = i.spacesIndex.length, p = (e - i.width) / o;
        for(var l = 0; l < i.charPositions.length; l++)l === n && (n = i.spacesIndex[s++], a += p), i.charPositions[l] += a;
    }
}
function oe(h) {
    if (h === "") return [];
    typeof h == "string" && (h = [
        h
    ]);
    var e = [];
    for(var t = 0, i = h.length; t < i; t++){
        var _e;
        var s = h[t];
        if (Array.isArray(s)) {
            if (s.length !== 2) throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got ".concat(s.length, "."));
            if (s[0].length === 0 || s[1].length === 0) throw new Error("[BitmapFont]: Invalid character delimiter.");
            var n = s[0].charCodeAt(0), a = s[1].charCodeAt(0);
            if (a < n) throw new Error("[BitmapFont]: Invalid character range.");
            for(var o = n, r = a; o <= r; o++)e.push(String.fromCharCode(o));
        } else (_e = e).push.apply(_e, _to_consumable_array(Array.from(s)));
    }
    if (e.length === 0) throw new Error("[BitmapFont]: Empty set when resolving characters.");
    return e;
}
var T = 0;
var he = /*#__PURE__*/ function() {
    "use strict";
    function he() {
        _class_call_check(this, he);
        this.ALPHA = [
            [
                "a",
                "z"
            ],
            [
                "A",
                "Z"
            ],
            " "
        ], this.NUMERIC = [
            [
                "0",
                "9"
            ]
        ], this.ALPHANUMERIC = [
            [
                "a",
                "z"
            ],
            [
                "A",
                "Z"
            ],
            [
                "0",
                "9"
            ],
            " "
        ], this.ASCII = [
            [
                " ",
                "~"
            ]
        ], this.defaultOptions = {
            chars: this.ALPHANUMERIC,
            resolution: 1,
            padding: 4,
            skipKerning: !1,
            textureStyle: null
        }, this.measureCache = q(1e3);
    }
    _create_class(he, [
        {
            key: "getFont",
            value: function getFont(e, t) {
                var _n_ensureCharacters;
                var i = "".concat(t.fontFamily, "-bitmap"), s = !0;
                if (_.has(i)) {
                    var _a_ensureCharacters;
                    var a = _.get(i);
                    return (_a_ensureCharacters = a.ensureCharacters) === null || _a_ensureCharacters === void 0 ? void 0 : _a_ensureCharacters.call(a, e), a;
                }
                if (t._fill.fill && !t._stroke ? (i += t._fill.fill.styleKey, s = !1) : (t._stroke || t.dropShadow) && (i = "".concat(t.styleKey, "-bitmap"), s = !1), i += "-".concat(t.fontStyle), i += "-".concat(t.fontVariant), i += "-".concat(t.fontWeight), !_.has(i)) {
                    var a1 = Object.create(t);
                    a1._lineHeight = 0;
                    var o = new K(_object_spread({
                        style: a1,
                        overrideFill: s,
                        overrideSize: !0
                    }, this.defaultOptions));
                    T++, T > 50 && V("BitmapText", "You have dynamically created ".concat(T, ' bitmap fonts, this can be inefficient. Try pre installing your font styles using `BitmapFont.install({name:"style1", style})`')), o.once("destroy", function() {
                        T--, _.remove(i);
                    }), _.set(i, o);
                }
                var n = _.get(i);
                return (_n_ensureCharacters = n.ensureCharacters) === null || _n_ensureCharacters === void 0 ? void 0 : _n_ensureCharacters.call(n, e), n;
            }
        },
        {
            key: "getLayout",
            value: function getLayout(e, t) {
                var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
                var s = this.getFont(e, t), n = "".concat(e, "-").concat(t.styleKey, "-").concat(i);
                if (this.measureCache.has(n)) return this.measureCache.get(n);
                var a = M.graphemeSegmenter(e), o = ie(a, t, s, i);
                return this.measureCache.set(n, o), o;
            }
        },
        {
            key: "measureText",
            value: function measureText(e, t) {
                var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
                return this.getLayout(e, t, i);
            }
        },
        {
            key: "install",
            value: function install() {
                for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
                    e[_key] = arguments[_key];
                }
                var _t_dynamicFill;
                var _e_, _e_1, _e_2, _e_3;
                var t = e[0];
                typeof t == "string" && (t = {
                    name: t,
                    style: e[1],
                    chars: (_e_ = e[2]) === null || _e_ === void 0 ? void 0 : _e_.chars,
                    resolution: (_e_1 = e[2]) === null || _e_1 === void 0 ? void 0 : _e_1.resolution,
                    padding: (_e_2 = e[2]) === null || _e_2 === void 0 ? void 0 : _e_2.padding,
                    skipKerning: (_e_3 = e[2]) === null || _e_3 === void 0 ? void 0 : _e_3.skipKerning
                }, k(b, "BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));
                var i = t === null || t === void 0 ? void 0 : t.name;
                if (!i) throw new Error("[BitmapFontManager] Property `name` is required.");
                t = _object_spread({}, this.defaultOptions, t);
                var s = t.style, n = _instanceof(s, I) ? s : new I(s), a = (_t_dynamicFill = t.dynamicFill) !== null && _t_dynamicFill !== void 0 ? _t_dynamicFill : this._canUseTintForStyle(n), o = new K({
                    style: n,
                    overrideFill: a,
                    skipKerning: t.skipKerning,
                    padding: t.padding,
                    resolution: t.resolution,
                    overrideSize: !1,
                    textureStyle: t.textureStyle
                }), r = oe(t.chars);
                return o.ensureCharacters(r.join("")), _.set("".concat(i, "-bitmap"), o), o.once("destroy", function() {
                    return _.remove("".concat(i, "-bitmap"));
                }), o;
            }
        },
        {
            key: "uninstall",
            value: function uninstall(e) {
                var t = "".concat(e, "-bitmap"), i = _.get(t);
                i && i.destroy();
            }
        },
        {
            key: "_canUseTintForStyle",
            value: function _canUseTintForStyle(e) {
                return !e._stroke && (!e.dropShadow || e.dropShadow.color === 0) && !e._fill.fill && e._fill.color === 16777215;
            }
        }
    ]);
    return he;
}();
var Y = new he;
var fe = /*#__PURE__*/ function(N) {
    "use strict";
    _inherits(fe, N);
    function fe(e, t) {
        _class_call_check(this, fe);
        var _this;
        var _s_distanceField;
        _this = _call_super(this, fe);
        var i = e.textures, s = e.data;
        Object.keys(s.pages).forEach(function(n) {
            var a = s.pages[parseInt(n, 10)], o = i[a.id];
            _this.pages.push({
                texture: o
            });
        }), Object.keys(s.chars).forEach(function(n) {
            var _a_kerning;
            var a = s.chars[n], _i_a_page = i[a.page], o = _i_a_page.frame, r = _i_a_page.source, p = _i_a_page.rotate, l = U.transformRectCoords(a, o, p, new P), u = new A({
                frame: l,
                orig: new P(0, 0, a.width, a.height),
                source: r,
                rotate: p
            });
            _this.chars[n] = {
                id: n.codePointAt(0),
                xOffset: a.xOffset,
                yOffset: a.yOffset,
                xAdvance: a.xAdvance,
                kerning: (_a_kerning = a.kerning) !== null && _a_kerning !== void 0 ? _a_kerning : {},
                texture: u
            };
        }), _this.baseRenderedFontSize = s.fontSize, _this.baseMeasurementFontSize = s.fontSize, _this.fontMetrics = {
            ascent: 0,
            descent: 0,
            fontSize: s.fontSize
        }, _this.baseLineOffset = s.baseLineOffset, _this.lineHeight = s.lineHeight, _this.fontFamily = s.fontFamily, _this.distanceField = (_s_distanceField = s.distanceField) !== null && _s_distanceField !== void 0 ? _s_distanceField : {
            type: "none",
            range: 0
        }, _this.url = t;
        return _this;
    }
    _create_class(fe, [
        {
            key: "destroy",
            value: function destroy() {
                _get(_get_prototype_of(fe.prototype), "destroy", this).call(this);
                for(var e = 0; e < this.pages.length; e++){
                    var _this_pages_e = this.pages[e], t = _this_pages_e.texture;
                    t.destroy(!0);
                }
                this.pages = null;
            }
        }
    ], [
        {
            key: "install",
            value: function install(e) {
                Y.install(e);
            }
        },
        {
            key: "uninstall",
            value: function uninstall(e) {
                Y.uninstall(e);
            }
        }
    ]);
    return fe;
}(N);
export { fe as BitmapFont };
