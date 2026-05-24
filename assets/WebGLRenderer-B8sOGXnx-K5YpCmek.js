function _instanceof(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
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
    if (!_instanceof(instance, Constructor)) {
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
function _instanceof1(left, right) {
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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
    return (_is_native_reflect_construct = function _is_native_reflect_construct() {
        return !!result;
    })();
}
var _A;
import { A as Be, R as ye, E as d, v as Ce, e as A, D as R, w as b, S as F, x as Ne, m as P, n as S, t as z, y as _imp_y as De, G as O, h as B, z as q, d as _imp_g, F as Z, H as J, M as Q, b as M, I as Ie, J as Ge, K as Ue, L as V, s as y, q as C } from "./index-wSLjxAso.js";
import { U as Fe, e as Pe, G as Oe, b as ee, d as Me, c as Le, f as we, B as te, g as N } from "./BufferResource-7e1WzFsr-BM_4gFPH.js";
import { S as He, a as Ve, R as Xe } from "./RenderTargetSystem-D76awkIv-BeDz7X5E.js";
import "./react-vendor-Bcb6ewdu.js";
import "./markdown-vendor-CHTmL0iO.js";
import "./utils-vendor-D8_MVJCX.js";
import "./report-vendor-COKl-wDg.js";
import "./Filter-D2TFakTj-BL2pn75X.js";
let g = _imp_g;
let y = _imp_y;
function ke() {
    var _R_get_getNavigator = R.get().getNavigator(), t = _R_get_getNavigator.userAgent;
    return /^((?!chrome|android).)*safari/i.test(t);
}
var re = /*#__PURE__*/ function() {
    "use strict";
    function re() {
        _class_call_check(this, re);
        this._tempState = F.for2d(), this._didUploadHash = {};
    }
    _create_class(re, [
        {
            key: "init",
            value: function init(e) {
                e.renderer.runners.contextChange.add(this);
            }
        },
        {
            key: "contextChange",
            value: function contextChange() {
                this._didUploadHash = {};
            }
        },
        {
            key: "start",
            value: function start(e, r, n) {
                var s = e.renderer, i = this._didUploadHash[n.uid];
                s.shader.bind(n, i), i || (this._didUploadHash[n.uid] = !0), s.shader.updateUniformGroup(s.globalUniforms.uniformGroup), s.geometry.bind(r, n.glProgram);
            }
        },
        {
            key: "execute",
            value: function execute(e, r) {
                var n = e.renderer;
                this._tempState.blendMode = r.blendMode, n.state.set(this._tempState);
                var s = r.textures.textures;
                for(var i = 0; i < r.textures.count; i++)n.texture.bind(s[i], i);
                n.geometry.draw(r.topology, r.size, r.start);
            }
        }
    ]);
    return re;
}();
re.extension = {
    type: [
        d.WebGLPipesAdaptor
    ],
    name: "batch"
};
var v = function(t) {
    return t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", t;
}(v || {});
var We = /*#__PURE__*/ function() {
    "use strict";
    function We(e, r) {
        _class_call_check(this, We);
        this._lastBindBaseLocation = -1, this._lastBindCallId = -1, this.buffer = e || null, this.updateID = -1, this.byteLength = -1, this.type = r;
    }
    _create_class(We, [
        {
            key: "destroy",
            value: function destroy() {
                this.buffer = null, this.updateID = -1, this.byteLength = -1, this.type = -1, this._lastBindBaseLocation = -1, this._lastBindCallId = -1;
            }
        }
    ]);
    return We;
}();
var ne = /*#__PURE__*/ function() {
    "use strict";
    function ne(e) {
        _class_call_check(this, ne);
        this._boundBufferBases = Object.create(null), this._minBaseLocation = 0, this._nextBindBaseIndex = this._minBaseLocation, this._bindCallId = 0, this._renderer = e, this._managedBuffers = new O({
            renderer: e,
            type: "resource",
            onUnload: this.onBufferUnload.bind(this),
            name: "glBuffer"
        });
    }
    _create_class(ne, [
        {
            key: "destroy",
            value: function destroy() {
                this._managedBuffers.destroy(), this._renderer = null, this._gl = null, this._boundBufferBases = {};
            }
        },
        {
            key: "contextChange",
            value: function contextChange() {
                this._gl = this._renderer.gl, this.destroyAll(!0), this._maxBindings = this._renderer.limits.maxUniformBindings;
            }
        },
        {
            key: "getGlBuffer",
            value: function getGlBuffer(e) {
                return e._gcLastUsed = this._renderer.gc.now, e._gpuData[this._renderer.uid] || this.createGLBuffer(e);
            }
        },
        {
            key: "bind",
            value: function bind(e) {
                var _this = this, r = _this._gl, n = this.getGlBuffer(e);
                r.bindBuffer(n.type, n.buffer);
            }
        },
        {
            key: "bindBufferBase",
            value: function bindBufferBase(e, r) {
                var _this = this, n = _this._gl;
                this._boundBufferBases[r] !== e && (this._boundBufferBases[r] = e, e._lastBindBaseLocation = r, n.bindBufferBase(n.UNIFORM_BUFFER, r, e.buffer));
            }
        },
        {
            key: "nextBindBase",
            value: function nextBindBase(e) {
                this._bindCallId++, this._minBaseLocation = 0, e && (this._boundBufferBases[0] = null, this._minBaseLocation = 1, this._nextBindBaseIndex < 1 && (this._nextBindBaseIndex = 1));
            }
        },
        {
            key: "freeLocationForBufferBase",
            value: function freeLocationForBufferBase(e) {
                var r = this.getLastBindBaseLocation(e);
                if (r >= this._minBaseLocation) return e._lastBindCallId = this._bindCallId, r;
                var n = 0, s = this._nextBindBaseIndex;
                for(; n < 2;){
                    s >= this._maxBindings && (s = this._minBaseLocation, n++);
                    var i = this._boundBufferBases[s];
                    if (i && i._lastBindCallId === this._bindCallId) {
                        s++;
                        continue;
                    }
                    break;
                }
                return r = s, this._nextBindBaseIndex = s + 1, n >= 2 ? -1 : (e._lastBindCallId = this._bindCallId, this._boundBufferBases[r] = null, r);
            }
        },
        {
            key: "getLastBindBaseLocation",
            value: function getLastBindBaseLocation(e) {
                var r = e._lastBindBaseLocation;
                return this._boundBufferBases[r] === e ? r : -1;
            }
        },
        {
            key: "bindBufferRange",
            value: function bindBufferRange(e, r, n, s) {
                var _this = this, i = _this._gl;
                n || (n = 0), r || (r = 0), this._boundBufferBases[r] = null, i.bindBufferRange(i.UNIFORM_BUFFER, r || 0, e.buffer, n * 256, s || 256);
            }
        },
        {
            key: "updateBuffer",
            value: function updateBuffer(e) {
                var _this = this, r = _this._gl, n = this.getGlBuffer(e);
                if (e._updateID === n.updateID) return n;
                n.updateID = e._updateID, r.bindBuffer(n.type, n.buffer);
                var s = e.data, i = e.descriptor.usage & B.STATIC ? r.STATIC_DRAW : r.DYNAMIC_DRAW;
                return s ? n.byteLength >= s.byteLength ? r.bufferSubData(n.type, 0, s, 0, e._updateSize / s.BYTES_PER_ELEMENT) : (n.byteLength = s.byteLength, r.bufferData(n.type, s, i)) : (n.byteLength = e.descriptor.size, r.bufferData(n.type, n.byteLength, i)), n;
            }
        },
        {
            key: "destroyAll",
            value: function destroyAll() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                this._managedBuffers.removeAll(e);
            }
        },
        {
            key: "onBufferUnload",
            value: function onBufferUnload(e) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                var n = e._gpuData[this._renderer.uid];
                n && (r || this._gl.deleteBuffer(n.buffer));
            }
        },
        {
            key: "createGLBuffer",
            value: function createGLBuffer(e) {
                var _this = this, r = _this._gl;
                var n = v.ARRAY_BUFFER;
                e.descriptor.usage & B.INDEX ? n = v.ELEMENT_ARRAY_BUFFER : e.descriptor.usage & B.UNIFORM && (n = v.UNIFORM_BUFFER);
                var s = new We(r.createBuffer(), n);
                return e._gpuData[this._renderer.uid] = s, this._managedBuffers.add(e), s;
            }
        },
        {
            key: "resetState",
            value: function resetState() {
                this._boundBufferBases = Object.create(null);
            }
        }
    ]);
    return ne;
}();
ne.extension = {
    type: [
        d.WebGLSystem
    ],
    name: "buffer"
};
var L = /*#__PURE__*/ function() {
    "use strict";
    function se(e) {
        _class_call_check(this, se);
        this.supports = {
            uint32Indices: !0,
            uniformBufferObject: !0,
            vertexArrayObject: !0,
            srgbTextures: !0,
            nonPowOf2wrapping: !0,
            msaa: !0,
            nonPowOf2mipmaps: !0
        }, this._renderer = e, this.extensions = Object.create(null), this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this);
    }
    _create_class(se, [
        {
            key: "isLost",
            get: function get() {
                return !this.gl || this.gl.isContextLost();
            }
        },
        {
            key: "contextChange",
            value: function contextChange(e) {
                this.gl = e, this._renderer.gl = e;
            }
        },
        {
            key: "init",
            value: function init(e) {
                e = _object_spread({}, se.defaultOptions, e);
                var r = this.multiView = e.multiView;
                if (e.context && r && (b("Renderer created with both a context and multiview enabled. Disabling multiView as both cannot work together."), r = !1), r ? this.canvas = R.get().createCanvas(this._renderer.canvas.width, this._renderer.canvas.height) : this.canvas = this._renderer.view.canvas, e.context) this.initFromContext(e.context);
                else {
                    var _e_premultipliedAlpha, _e_powerPreference;
                    var n = this._renderer.background.alpha < 1, s = (_e_premultipliedAlpha = e.premultipliedAlpha) !== null && _e_premultipliedAlpha !== void 0 ? _e_premultipliedAlpha : !0, i = e.antialias && !this._renderer.backBuffer.useBackBuffer;
                    this.createContext(e.preferWebGLVersion, {
                        alpha: n,
                        premultipliedAlpha: s,
                        antialias: i,
                        stencil: !0,
                        preserveDrawingBuffer: e.preserveDrawingBuffer,
                        powerPreference: (_e_powerPreference = e.powerPreference) !== null && _e_powerPreference !== void 0 ? _e_powerPreference : "default"
                    });
                }
            }
        },
        {
            key: "ensureCanvasSize",
            value: function ensureCanvasSize(e) {
                if (!this.multiView) {
                    e !== this.canvas && b("multiView is disabled, but targetCanvas is not the main canvas");
                    return;
                }
                var _this = this, r = _this.canvas;
                (r.width < e.width || r.height < e.height) && (r.width = Math.max(e.width, e.width), r.height = Math.max(e.height, e.height));
            }
        },
        {
            key: "initFromContext",
            value: function initFromContext(e) {
                this.gl = e, this.webGLVersion = _instanceof1(e, R.get().getWebGLRenderingContext()) ? 1 : 2, this.getExtensions(), this.validateContext(e), this._renderer.runners.contextChange.emit(e);
                var r = this._renderer.view.canvas;
                r.addEventListener("webglcontextlost", this.handleContextLost, !1), r.addEventListener("webglcontextrestored", this.handleContextRestored, !1);
            }
        },
        {
            key: "createContext",
            value: function createContext(e, r) {
                var n;
                var s = this.canvas;
                if (e === 2 && (n = s.getContext("webgl2", r)), !n && (n = s.getContext("webgl", r), !n)) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
                this.gl = n, this.initFromContext(this.gl);
            }
        },
        {
            key: "getExtensions",
            value: function getExtensions() {
                var _this = this, e = _this.gl, r = {
                    anisotropicFiltering: e.getExtension("EXT_texture_filter_anisotropic"),
                    floatTextureLinear: e.getExtension("OES_texture_float_linear"),
                    s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"),
                    s3tc_sRGB: e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                    etc: e.getExtension("WEBGL_compressed_texture_etc"),
                    etc1: e.getExtension("WEBGL_compressed_texture_etc1"),
                    pvrtc: e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                    atc: e.getExtension("WEBGL_compressed_texture_atc"),
                    astc: e.getExtension("WEBGL_compressed_texture_astc"),
                    bptc: e.getExtension("EXT_texture_compression_bptc"),
                    rgtc: e.getExtension("EXT_texture_compression_rgtc"),
                    loseContext: e.getExtension("WEBGL_lose_context")
                };
                if (this.webGLVersion === 1) this.extensions = _object_spread_props(_object_spread({}, r), {
                    drawBuffers: e.getExtension("WEBGL_draw_buffers"),
                    depthTexture: e.getExtension("WEBGL_depth_texture"),
                    vertexArrayObject: e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object"),
                    uint32ElementIndex: e.getExtension("OES_element_index_uint"),
                    floatTexture: e.getExtension("OES_texture_float"),
                    floatTextureLinear: e.getExtension("OES_texture_float_linear"),
                    textureHalfFloat: e.getExtension("OES_texture_half_float"),
                    textureHalfFloatLinear: e.getExtension("OES_texture_half_float_linear"),
                    vertexAttribDivisorANGLE: e.getExtension("ANGLE_instanced_arrays"),
                    srgb: e.getExtension("EXT_sRGB")
                });
                else {
                    this.extensions = _object_spread_props(_object_spread({}, r), {
                        colorBufferFloat: e.getExtension("EXT_color_buffer_float")
                    });
                    var n = e.getExtension("WEBGL_provoking_vertex");
                    n && n.provokingVertexWEBGL(n.FIRST_VERTEX_CONVENTION_WEBGL);
                }
            }
        },
        {
            key: "handleContextLost",
            value: function handleContextLost(e) {
                var _this = this;
                e.preventDefault(), this._contextLossForced && (this._contextLossForced = !1, setTimeout(function() {
                    var _this_extensions_loseContext;
                    _this.gl.isContextLost() && ((_this_extensions_loseContext = _this.extensions.loseContext) === null || _this_extensions_loseContext === void 0 ? void 0 : _this_extensions_loseContext.restoreContext());
                }, 0));
            }
        },
        {
            key: "handleContextRestored",
            value: function handleContextRestored() {
                this.getExtensions(), this._renderer.runners.contextChange.emit(this.gl);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this_extensions_loseContext;
                var e = this._renderer.view.canvas;
                this._renderer = null, e.removeEventListener("webglcontextlost", this.handleContextLost), e.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), (_this_extensions_loseContext = this.extensions.loseContext) === null || _this_extensions_loseContext === void 0 ? void 0 : _this_extensions_loseContext.loseContext();
            }
        },
        {
            key: "forceContextLoss",
            value: function forceContextLoss() {
                var _this_extensions_loseContext;
                (_this_extensions_loseContext = this.extensions.loseContext) === null || _this_extensions_loseContext === void 0 ? void 0 : _this_extensions_loseContext.loseContext(), this._contextLossForced = !0;
            }
        },
        {
            key: "validateContext",
            value: function validateContext(e) {
                var r = e.getContextAttributes();
                r && !r.stencil && b("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
                var n = this.supports, s = this.webGLVersion === 2, i = this.extensions;
                n.uint32Indices = s || !!i.uint32ElementIndex, n.uniformBufferObject = s, n.vertexArrayObject = s || !!i.vertexArrayObject, n.srgbTextures = s || !!i.srgb, n.nonPowOf2wrapping = s, n.nonPowOf2mipmaps = s, n.msaa = s, n.uint32Indices || b("Provided WebGL context does not support 32 index buffer, large scenes may not render correctly");
            }
        }
    ]);
    return se;
}();
L.extension = {
    type: [
        d.WebGLSystem
    ],
    name: "context"
};
L.defaultOptions = {
    context: null,
    premultipliedAlpha: !0,
    preserveDrawingBuffer: !1,
    powerPreference: void 0,
    preferWebGLVersion: 2,
    multiView: !1
};
var je = L;
var G = function(t) {
    return t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", t;
}(G || {}), w = function(t) {
    return t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", t;
}(w || {}), l = function(t) {
    return t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT", t;
}(l || {});
var X = {
    uint8x2: l.UNSIGNED_BYTE,
    uint8x4: l.UNSIGNED_BYTE,
    sint8x2: l.BYTE,
    sint8x4: l.BYTE,
    unorm8x2: l.UNSIGNED_BYTE,
    unorm8x4: l.UNSIGNED_BYTE,
    snorm8x2: l.BYTE,
    snorm8x4: l.BYTE,
    uint16x2: l.UNSIGNED_SHORT,
    uint16x4: l.UNSIGNED_SHORT,
    sint16x2: l.SHORT,
    sint16x4: l.SHORT,
    unorm16x2: l.UNSIGNED_SHORT,
    unorm16x4: l.UNSIGNED_SHORT,
    snorm16x2: l.SHORT,
    snorm16x4: l.SHORT,
    float16x2: l.HALF_FLOAT,
    float16x4: l.HALF_FLOAT,
    float32: l.FLOAT,
    float32x2: l.FLOAT,
    float32x3: l.FLOAT,
    float32x4: l.FLOAT,
    uint32: l.UNSIGNED_INT,
    uint32x2: l.UNSIGNED_INT,
    uint32x3: l.UNSIGNED_INT,
    uint32x4: l.UNSIGNED_INT,
    sint32: l.INT,
    sint32x2: l.INT,
    sint32x3: l.INT,
    sint32x4: l.INT
};
function Ke(t) {
    var _X_t;
    return (_X_t = X[t]) !== null && _X_t !== void 0 ? _X_t : X.float32;
}
var $e = {
    "point-list": 0,
    "line-list": 1,
    "line-strip": 3,
    "triangle-list": 4,
    "triangle-strip": 5
};
var Ye = /*#__PURE__*/ function() {
    "use strict";
    function Ye() {
        _class_call_check(this, Ye);
        this.vaoCache = Object.create(null);
    }
    _create_class(Ye, [
        {
            key: "destroy",
            value: function destroy() {
                this.vaoCache = Object.create(null);
            }
        }
    ]);
    return Ye;
}();
var ie = /*#__PURE__*/ function() {
    "use strict";
    function ie(e) {
        _class_call_check(this, ie);
        this._renderer = e, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this._managedGeometries = new O({
            renderer: e,
            type: "resource",
            onUnload: this.onGeometryUnload.bind(this),
            name: "glGeometry"
        });
    }
    _create_class(ie, [
        {
            key: "contextChange",
            value: function contextChange() {
                var e = this.gl = this._renderer.gl;
                if (!this._renderer.context.supports.vertexArrayObject) throw new Error("[PixiJS] Vertex Array Objects are not supported on this device");
                this.destroyAll(!0);
                var r = this._renderer.context.extensions.vertexArrayObject;
                r && (e.createVertexArray = function() {
                    return r.createVertexArrayOES();
                }, e.bindVertexArray = function(s) {
                    return r.bindVertexArrayOES(s);
                }, e.deleteVertexArray = function(s) {
                    return r.deleteVertexArrayOES(s);
                });
                var n = this._renderer.context.extensions.vertexAttribDivisorANGLE;
                n && (e.drawArraysInstanced = function(s, i, a, o) {
                    n.drawArraysInstancedANGLE(s, i, a, o);
                }, e.drawElementsInstanced = function(s, i, a, o, c) {
                    n.drawElementsInstancedANGLE(s, i, a, o, c);
                }, e.vertexAttribDivisor = function(s, i) {
                    return n.vertexAttribDivisorANGLE(s, i);
                }), this._activeGeometry = null, this._activeVao = null;
            }
        },
        {
            key: "bind",
            value: function bind(e, r) {
                var n = this.gl;
                this._activeGeometry = e;
                var s = this.getVao(e, r);
                this._activeVao !== s && (this._activeVao = s, n.bindVertexArray(s)), this.updateBuffers();
            }
        },
        {
            key: "resetState",
            value: function resetState() {
                this.unbind();
            }
        },
        {
            key: "updateBuffers",
            value: function updateBuffers() {
                var e = this._activeGeometry, r = this._renderer.buffer;
                for(var n = 0; n < e.buffers.length; n++){
                    var s = e.buffers[n];
                    r.updateBuffer(s);
                }
                e._gcLastUsed = this._renderer.gc.now;
            }
        },
        {
            key: "checkCompatibility",
            value: function checkCompatibility(e, r) {
                var n = e.attributes, s = r._attributeData;
                for(var i in s)if (!n[i]) throw new Error('shader and geometry incompatible, geometry missing the "'.concat(i, '" attribute'));
            }
        },
        {
            key: "getSignature",
            value: function getSignature(e, r) {
                var n = e.attributes, s = r._attributeData, i = [
                    "g",
                    e.uid
                ];
                for(var a in n)s[a] && i.push(a, s[a].location);
                return i.join("-");
            }
        },
        {
            key: "getVao",
            value: function getVao(e, r) {
                var _e__gpuData_this__renderer_uid;
                return ((_e__gpuData_this__renderer_uid = e._gpuData[this._renderer.uid]) === null || _e__gpuData_this__renderer_uid === void 0 ? void 0 : _e__gpuData_this__renderer_uid.vaoCache[r._key]) || this.initGeometryVao(e, r);
            }
        },
        {
            key: "initGeometryVao",
            value: function initGeometryVao(e, r) {
                var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
                var s = this._renderer.gl, i = this._renderer.buffer;
                this._renderer.shader._getProgramData(r), this.checkCompatibility(e, r);
                var a = this.getSignature(e, r);
                var o = e._gpuData[this._renderer.uid];
                o || (o = new Ye, e._gpuData[this._renderer.uid] = o, this._managedGeometries.add(e));
                var c = o.vaoCache;
                var u = c[a];
                if (u) return c[r._key] = u, u;
                Pe(e, r._attributeData);
                var _ = e.buffers;
                u = s.createVertexArray(), s.bindVertexArray(u);
                for(var f = 0; f < _.length; f++){
                    var h = _[f];
                    i.bind(h);
                }
                return this.activateVao(e, r), c[r._key] = u, c[a] = u, s.bindVertexArray(null), u;
            }
        },
        {
            key: "onGeometryUnload",
            value: function onGeometryUnload(e) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                var n = e._gpuData[this._renderer.uid];
                if (!n) return;
                var s = n.vaoCache;
                if (!r) for(var i in s)this._activeVao !== s[i] && this.resetState(), this.gl.deleteVertexArray(s[i]);
            }
        },
        {
            key: "destroyAll",
            value: function destroyAll() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                this._managedGeometries.removeAll(e);
            }
        },
        {
            key: "activateVao",
            value: function activateVao(e, r) {
                var n = this._renderer.gl, s = this._renderer.buffer, i = e.attributes;
                e.indexBuffer && s.bind(e.indexBuffer);
                var a = null;
                for(var o in i){
                    var c = i[o], u = c.buffer, _ = s.getGlBuffer(u), f = r._attributeData[o];
                    if (f) {
                        var _f_format;
                        a !== _ && (s.bind(u), a = _);
                        var h = f.location;
                        n.enableVertexAttribArray(h);
                        var m = q(c.format), p = Ke(c.format);
                        if (((_f_format = f.format) === null || _f_format === void 0 ? void 0 : _f_format.substring(1, 4)) === "int" ? n.vertexAttribIPointer(h, m.size, p, c.stride, c.offset) : n.vertexAttribPointer(h, m.size, p, m.normalised, c.stride, c.offset), c.instance) if (this.hasInstance) {
                            var _c_divisor;
                            var E = (_c_divisor = c.divisor) !== null && _c_divisor !== void 0 ? _c_divisor : 1;
                            n.vertexAttribDivisor(h, E);
                        } else throw new Error("geometry error, GPU Instancing is not supported on this device");
                    }
                }
            }
        },
        {
            key: "draw",
            value: function draw(e, r, n, s) {
                var _this__renderer = this._renderer, i = _this__renderer.gl, a = this._activeGeometry, o = $e[e || a.topology];
                if (s !== null && s !== void 0 ? s : s = a.instanceCount, a.indexBuffer) {
                    var c = a.indexBuffer.data.BYTES_PER_ELEMENT, u = c === 2 ? i.UNSIGNED_SHORT : i.UNSIGNED_INT;
                    s !== 1 ? i.drawElementsInstanced(o, r || a.indexBuffer.data.length, u, (n || 0) * c, s) : i.drawElements(o, r || a.indexBuffer.data.length, u, (n || 0) * c);
                } else s !== 1 ? i.drawArraysInstanced(o, n || 0, r || a.getSize(), s) : i.drawArrays(o, n || 0, r || a.getSize());
                return this;
            }
        },
        {
            key: "unbind",
            value: function unbind() {
                this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._managedGeometries.destroy(), this._renderer = null, this.gl = null, this._activeVao = null, this._activeGeometry = null;
            }
        }
    ]);
    return ie;
}();
ie.extension = {
    type: [
        d.WebGLSystem
    ],
    name: "geometry"
};
var ze = new Ce({
    attributes: {
        aPosition: [
            -1,
            -1,
            3,
            -1,
            -1,
            3
        ]
    }
}), H = /*#__PURE__*/ function() {
    "use strict";
    function ae(e) {
        _class_call_check(this, ae);
        this.useBackBuffer = !1, this._useBackBufferThisRender = !1, this._renderer = e;
    }
    _create_class(ae, [
        {
            key: "init",
            value: function init() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _$_object_spread = _object_spread({}, ae.defaultOptions, e), r = _$_object_spread.useBackBuffer, n = _$_object_spread.antialias;
                this.useBackBuffer = r, this._antialias = n, this._renderer.context.supports.msaa || (b("antialiasing, is not supported on when using the back buffer"), this._antialias = !1), this._state = F.for2d();
                var s = new Ne({
                    vertex: "\n                attribute vec2 aPosition;\n                out vec2 vUv;\n\n                void main() {\n                    gl_Position = vec4(aPosition, 0.0, 1.0);\n\n                    vUv = (aPosition + 1.0) / 2.0;\n\n                    // flip dem UVs\n                    vUv.y = 1.0 - vUv.y;\n                }",
                    fragment: "\n                in vec2 vUv;\n                out vec4 finalColor;\n\n                uniform sampler2D uTexture;\n\n                void main() {\n                    finalColor = texture(uTexture, vUv);\n                }",
                    name: "big-triangle"
                });
                this._bigTriangleShader = new P({
                    glProgram: s,
                    resources: {
                        uTexture: S.WHITE.source
                    }
                });
            }
        },
        {
            key: "renderStart",
            value: function renderStart(e) {
                var r = this._renderer.renderTarget.getRenderTarget(e.target);
                if (this._useBackBufferThisRender = this.useBackBuffer && !!r.isRoot, this._useBackBufferThisRender) {
                    var n = this._renderer.renderTarget.getRenderTarget(e.target);
                    this._targetTexture = n.colorTexture, e.target = this._getBackBufferTexture(n.colorTexture);
                }
            }
        },
        {
            key: "renderEnd",
            value: function renderEnd() {
                this._presentBackBuffer();
            }
        },
        {
            key: "_presentBackBuffer",
            value: function _presentBackBuffer() {
                var e = this._renderer;
                e.renderTarget.finishRenderPass(), this._useBackBufferThisRender && (e.renderTarget.bind(this._targetTexture, !1), this._bigTriangleShader.resources.uTexture = this._backBufferTexture.source, e.encoder.draw({
                    geometry: ze,
                    shader: this._bigTriangleShader,
                    state: this._state
                }));
            }
        },
        {
            key: "_getBackBufferTexture",
            value: function _getBackBufferTexture(e) {
                return this._backBufferTexture = this._backBufferTexture || new S({
                    source: new z({
                        width: e.width,
                        height: e.height,
                        resolution: e._resolution,
                        antialias: this._antialias
                    })
                }), this._backBufferTexture.source.resize(e.width, e.height, e._resolution), this._backBufferTexture;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._backBufferTexture && (this._backBufferTexture.destroy(), this._backBufferTexture = null);
            }
        }
    ]);
    return ae;
}();
H.extension = {
    type: [
        d.WebGLSystem
    ],
    name: "backBuffer",
    priority: 1
};
H.defaultOptions = {
    useBackBuffer: !1
};
var qe = H;
var oe = /*#__PURE__*/ function() {
    "use strict";
    function oe(e) {
        _class_call_check(this, oe);
        this._colorMaskCache = 15, this._renderer = e;
    }
    _create_class(oe, [
        {
            key: "setMask",
            value: function setMask(e) {
                this._colorMaskCache !== e && (this._colorMaskCache = e, this._renderer.gl.colorMask(!!(e & 8), !!(e & 4), !!(e & 2), !!(e & 1)));
            }
        }
    ]);
    return oe;
}();
oe.extension = {
    type: [
        d.WebGLSystem
    ],
    name: "colorMask"
};
var ce = /*#__PURE__*/ function() {
    "use strict";
    function ce(e) {
        _class_call_check(this, ce);
        this.commandFinished = Promise.resolve(), this._renderer = e;
    }
    _create_class(ce, [
        {
            key: "setGeometry",
            value: function setGeometry(e, r) {
                this._renderer.geometry.bind(e, r.glProgram);
            }
        },
        {
            key: "finishRenderPass",
            value: function finishRenderPass() {}
        },
        {
            key: "draw",
            value: function draw(e) {
                var r = this._renderer, n = e.geometry, s = e.shader, i = e.state, a = e.skipSync, o = e.topology, c = e.size, u = e.start, _ = e.instanceCount;
                r.shader.bind(s, a), r.geometry.bind(n, r.shader._activeProgram), i && r.state.set(i), r.geometry.draw(o, c, u, _ !== null && _ !== void 0 ? _ : n.instanceCount);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null;
            }
        }
    ]);
    return ce;
}();
ce.extension = {
    type: [
        d.WebGLSystem
    ],
    name: "encoder"
};
var ue = /*#__PURE__*/ function() {
    "use strict";
    function ue(e) {
        _class_call_check(this, ue);
        this._renderer = e;
    }
    _create_class(ue, [
        {
            key: "contextChange",
            value: function contextChange() {
                var e = this._renderer.gl;
                this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), this.maxBatchableTextures = De(this.maxTextures, e);
                var r = this._renderer.context.webGLVersion === 2;
                this.maxUniformBindings = r ? e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
            }
        },
        {
            key: "destroy",
            value: function destroy() {}
        }
    ]);
    return ue;
}();
ue.extension = {
    type: [
        d.WebGLSystem
    ],
    name: "limits"
};
var Ze = function Ze() {
    "use strict";
    _class_call_check(this, Ze);
    this.width = -1, this.height = -1, this.msaa = !1, this._attachedMipLevel = 0, this._attachedLayer = 0, this.msaaRenderBuffer = [];
};
var _e = /*#__PURE__*/ function() {
    "use strict";
    function _e(e) {
        _class_call_check(this, _e);
        this._stencilCache = {
            enabled: !1,
            stencilReference: 0,
            stencilMode: g.NONE
        }, this._renderTargetStencilState = Object.create(null), e.renderTarget.onRenderTargetChange.add(this);
    }
    _create_class(_e, [
        {
            key: "contextChange",
            value: function contextChange(e) {
                this._gl = e, this._comparisonFuncMapping = {
                    always: e.ALWAYS,
                    never: e.NEVER,
                    equal: e.EQUAL,
                    "not-equal": e.NOTEQUAL,
                    less: e.LESS,
                    "less-equal": e.LEQUAL,
                    greater: e.GREATER,
                    "greater-equal": e.GEQUAL
                }, this._stencilOpsMapping = {
                    keep: e.KEEP,
                    zero: e.ZERO,
                    replace: e.REPLACE,
                    invert: e.INVERT,
                    "increment-clamp": e.INCR,
                    "decrement-clamp": e.DECR,
                    "increment-wrap": e.INCR_WRAP,
                    "decrement-wrap": e.DECR_WRAP
                }, this.resetState();
            }
        },
        {
            key: "onRenderTargetChange",
            value: function onRenderTargetChange(e) {
                if (this._activeRenderTarget === e) return;
                this._activeRenderTarget = e;
                var r = this._renderTargetStencilState[e.uid];
                r || (r = this._renderTargetStencilState[e.uid] = {
                    stencilMode: g.DISABLED,
                    stencilReference: 0
                }), this.setStencilMode(r.stencilMode, r.stencilReference);
            }
        },
        {
            key: "resetState",
            value: function resetState() {
                this._stencilCache.enabled = !1, this._stencilCache.stencilMode = g.NONE, this._stencilCache.stencilReference = 0;
            }
        },
        {
            key: "setStencilMode",
            value: function setStencilMode(e, r) {
                var n = this._renderTargetStencilState[this._activeRenderTarget.uid], s = this._gl, i = Oe[e], a = this._stencilCache;
                if (n.stencilMode = e, n.stencilReference = r, e === g.DISABLED) {
                    this._stencilCache.enabled && (this._stencilCache.enabled = !1, s.disable(s.STENCIL_TEST));
                    return;
                }
                this._stencilCache.enabled || (this._stencilCache.enabled = !0, s.enable(s.STENCIL_TEST)), (e !== a.stencilMode || a.stencilReference !== r) && (a.stencilMode = e, a.stencilReference = r, s.stencilFunc(this._comparisonFuncMapping[i.stencilBack.compare], r, 255), s.stencilOp(s.KEEP, s.KEEP, this._stencilOpsMapping[i.stencilBack.passOp]));
            }
        }
    ]);
    return _e;
}();
_e.extension = {
    type: [
        d.WebGLSystem
    ],
    name: "stencil"
};
var fe = {
    f32: 4,
    i32: 4,
    "vec2<f32>": 8,
    "vec3<f32>": 12,
    "vec4<f32>": 16,
    "vec2<i32>": 8,
    "vec3<i32>": 12,
    "vec4<i32>": 16,
    "mat2x2<f32>": 32,
    "mat3x3<f32>": 48,
    "mat4x4<f32>": 64
};
function Je(t) {
    var e = t.map(function(i) {
        return {
            data: i,
            offset: 0,
            size: 0
        };
    }), r = 16;
    var n = 0, s = 0;
    for(var i = 0; i < e.length; i++){
        var a = e[i];
        if (n = fe[a.data.type], !n) throw new Error("Unknown type ".concat(a.data.type));
        a.data.size > 1 && (n = Math.max(n, r) * a.data.size);
        var o = n === 12 ? 16 : n;
        a.size = n;
        var c = s % r;
        c > 0 && r - c < o ? s += (r - c) % 16 : s += (n - c % n) % n, a.offset = s, s += n;
    }
    return s = Math.ceil(s / 16) * 16, {
        uboElements: e,
        size: s
    };
}
function Qe(t, e) {
    var r = Math.max(fe[t.data.type] / 16, 1), n = t.data.value.length / t.data.size, s = (4 - n % 4) % 4, i = t.data.type.indexOf("i32") >= 0 ? "dataInt32" : "data";
    return "\n        v = uv.".concat(t.data.name, ";\n        offset += ").concat(e, ";\n\n        arrayOffset = offset;\n\n        t = 0;\n\n        for(var i=0; i < ").concat(t.data.size * r, "; i++)\n        {\n            for(var j = 0; j < ").concat(n, "; j++)\n            {\n                ").concat(i, "[arrayOffset++] = v[t++];\n            }\n            ").concat(s !== 0 ? "arrayOffset += ".concat(s, ";") : "", "\n        }\n    ");
}
function et(t) {
    return Le(t, "uboStd40", Qe, we);
}
var he = /*#__PURE__*/ function(Fe) {
    "use strict";
    _inherits(he, Fe);
    function he() {
        _class_call_check(this, he);
        return _call_super(this, he, [
            {
                createUboElements: Je,
                generateUboSync: et
            }
        ]);
    }
    return he;
}(Fe);
he.extension = {
    type: [
        d.WebGLSystem
    ],
    name: "ubo"
};
var tt = /*#__PURE__*/ function() {
    "use strict";
    function tt() {
        _class_call_check(this, tt);
        this._clearColorCache = [
            0,
            0,
            0,
            0
        ], this._viewPortCache = new V;
    }
    _create_class(tt, [
        {
            key: "init",
            value: function init(e, r) {
                this._renderer = e, this._renderTargetSystem = r, e.runners.contextChange.add(this);
            }
        },
        {
            key: "contextChange",
            value: function contextChange() {
                this._clearColorCache = [
                    0,
                    0,
                    0,
                    0
                ], this._viewPortCache = new V;
                var e = this._renderer.gl;
                this._drawBuffersCache = [];
                for(var r = 1; r <= 16; r++)this._drawBuffersCache[r] = Array.from({
                    length: r
                }, function(n, s) {
                    return e.COLOR_ATTACHMENT0 + s;
                });
            }
        },
        {
            key: "copyToTexture",
            value: function copyToTexture(e, r, n, s, i) {
                var a = this._renderTargetSystem, o = this._renderer, c = a.getGpuRenderTarget(e), u = o.gl;
                return this.finishRenderPass(e), u.bindFramebuffer(u.FRAMEBUFFER, c.resolveTargetFramebuffer), o.texture.bind(r, 0), u.copyTexSubImage2D(u.TEXTURE_2D, 0, i.x, i.y, n.x, n.y, s.width, s.height), r;
            }
        },
        {
            key: "startRenderPass",
            value: function startRenderPass(e) {
                var _this = this;
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = arguments.length > 2 ? arguments[2] : void 0, s = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
                var o = this._renderTargetSystem, c = e.colorTexture, u = o.getGpuRenderTarget(e);
                if (a !== 0 && this._renderer.context.webGLVersion < 2) throw new Error("[RenderTargetSystem] Rendering to array layers requires WebGL2.");
                if (i > 0) {
                    if (u.msaa) throw new Error("[RenderTargetSystem] Rendering to mip levels is not supported with MSAA render targets.");
                    if (this._renderer.context.webGLVersion < 2) throw new Error("[RenderTargetSystem] Rendering to mip levels requires WebGL2.");
                }
                var _ = s.y;
                e.isRoot && (_ = c.pixelHeight - s.height - s.y), e.colorTextures.forEach(function(m) {
                    _this._renderer.texture.unbind(m);
                });
                var f = this._renderer.gl;
                f.bindFramebuffer(f.FRAMEBUFFER, u.framebuffer), !e.isRoot && (u._attachedMipLevel !== i || u._attachedLayer !== a) && (e.colorTextures.forEach(function(m, p) {
                    var E = _this._renderer.texture.getGlSource(m);
                    if (E.target === f.TEXTURE_2D) {
                        if (a !== 0) throw new Error("[RenderTargetSystem] layer must be 0 when rendering to 2D textures in WebGL.");
                        f.framebufferTexture2D(f.FRAMEBUFFER, f.COLOR_ATTACHMENT0 + p, f.TEXTURE_2D, E.texture, i);
                    } else if (E.target === f.TEXTURE_2D_ARRAY) {
                        if (_this._renderer.context.webGLVersion < 2) throw new Error("[RenderTargetSystem] Rendering to 2D array textures requires WebGL2.");
                        f.framebufferTextureLayer(f.FRAMEBUFFER, f.COLOR_ATTACHMENT0 + p, E.texture, i, a);
                    } else if (E.target === f.TEXTURE_CUBE_MAP) {
                        if (a < 0 || a > 5) throw new Error("[RenderTargetSystem] Cube map layer must be between 0 and 5.");
                        f.framebufferTexture2D(f.FRAMEBUFFER, f.COLOR_ATTACHMENT0 + p, f.TEXTURE_CUBE_MAP_POSITIVE_X + a, E.texture, i);
                    } else throw new Error("[RenderTargetSystem] Unsupported texture target for render-to-layer in WebGL.");
                }), u._attachedMipLevel = i, u._attachedLayer = a), e.colorTextures.length > 1 && this._setDrawBuffers(e, f);
                var h = this._viewPortCache;
                (h.x !== s.x || h.y !== _ || h.width !== s.width || h.height !== s.height) && (h.x = s.x, h.y = _, h.width = s.width, h.height = s.height, f.viewport(s.x, _, s.width, s.height)), !u.depthStencilRenderBuffer && (e.stencil || e.depth) && this._initStencil(u), this.clear(e, r, n);
            }
        },
        {
            key: "finishRenderPass",
            value: function finishRenderPass(e) {
                var n = this._renderTargetSystem.getGpuRenderTarget(e);
                if (!n.msaa) return;
                var s = this._renderer.gl;
                s.bindFramebuffer(s.FRAMEBUFFER, n.resolveTargetFramebuffer), s.bindFramebuffer(s.READ_FRAMEBUFFER, n.framebuffer), s.blitFramebuffer(0, 0, n.width, n.height, 0, 0, n.width, n.height, s.COLOR_BUFFER_BIT, s.NEAREST), s.bindFramebuffer(s.FRAMEBUFFER, n.framebuffer);
            }
        },
        {
            key: "initGpuRenderTarget",
            value: function initGpuRenderTarget(e) {
                var n = this._renderer.gl, s = new Ze;
                return s._attachedMipLevel = 0, s._attachedLayer = 0, _instanceof1(e.colorTexture, y) ? (this._renderer.context.ensureCanvasSize(e.colorTexture.resource), s.framebuffer = null, s) : (this._initColor(e, s), n.bindFramebuffer(n.FRAMEBUFFER, null), s);
            }
        },
        {
            key: "destroyGpuRenderTarget",
            value: function destroyGpuRenderTarget(e) {
                var r = this._renderer.gl;
                e.framebuffer && (r.deleteFramebuffer(e.framebuffer), e.framebuffer = null), e.resolveTargetFramebuffer && (r.deleteFramebuffer(e.resolveTargetFramebuffer), e.resolveTargetFramebuffer = null), e.depthStencilRenderBuffer && (r.deleteRenderbuffer(e.depthStencilRenderBuffer), e.depthStencilRenderBuffer = null), e.msaaRenderBuffer.forEach(function(n) {
                    r.deleteRenderbuffer(n);
                }), e.msaaRenderBuffer = null;
            }
        },
        {
            key: "clear",
            value: function clear(e, r, n, s) {
                var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
                if (!r) return;
                if (a !== 0) throw new Error("[RenderTargetSystem] Clearing array layers is not supported in WebGL renderer.");
                var o = this._renderTargetSystem;
                typeof r == "boolean" && (r = r ? C.ALL : C.NONE);
                var c = this._renderer.gl;
                if (r & C.COLOR) {
                    n !== null && n !== void 0 ? n : n = o.defaultClearColor;
                    var u = this._clearColorCache, _ = n;
                    (u[0] !== _[0] || u[1] !== _[1] || u[2] !== _[2] || u[3] !== _[3]) && (u[0] = _[0], u[1] = _[1], u[2] = _[2], u[3] = _[3], c.clearColor(_[0], _[1], _[2], _[3]));
                }
                c.clear(r);
            }
        },
        {
            key: "resizeGpuRenderTarget",
            value: function resizeGpuRenderTarget(e) {
                if (e.isRoot) return;
                var n = this._renderTargetSystem.getGpuRenderTarget(e);
                this._resizeColor(e, n), (e.stencil || e.depth) && this._resizeStencil(n);
            }
        },
        {
            key: "_initColor",
            value: function _initColor(e, r) {
                var n = this._renderer, s = n.gl, i = s.createFramebuffer();
                if (r.resolveTargetFramebuffer = i, s.bindFramebuffer(s.FRAMEBUFFER, i), r.width = e.colorTexture.source.pixelWidth, r.height = e.colorTexture.source.pixelHeight, e.colorTextures.forEach(function(o, c) {
                    var u = o.source;
                    u.antialias && (n.context.supports.msaa ? r.msaa = !0 : b("[RenderTexture] Antialiasing on textures is not supported in WebGL1")), n.texture.bindSource(u, 0);
                    var _ = n.texture.getGlSource(u), f = _.texture;
                    if (_.target === s.TEXTURE_2D) s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + c, s.TEXTURE_2D, f, 0);
                    else if (_.target === s.TEXTURE_2D_ARRAY) {
                        if (n.context.webGLVersion < 2) throw new Error("[RenderTargetSystem] TEXTURE_2D_ARRAY requires WebGL2.");
                        s.framebufferTextureLayer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + c, f, 0, 0);
                    } else if (_.target === s.TEXTURE_CUBE_MAP) s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + c, s.TEXTURE_CUBE_MAP_POSITIVE_X, f, 0);
                    else throw new Error("[RenderTargetSystem] Unsupported texture target for framebuffer attachment.");
                }), r.msaa) {
                    var o = s.createFramebuffer();
                    r.framebuffer = o, s.bindFramebuffer(s.FRAMEBUFFER, o), e.colorTextures.forEach(function(c, u) {
                        var _ = s.createRenderbuffer();
                        r.msaaRenderBuffer[u] = _;
                    });
                } else r.framebuffer = i;
                this._resizeColor(e, r);
            }
        },
        {
            key: "_resizeColor",
            value: function _resizeColor(e, r) {
                var n = e.colorTexture.source;
                if (r.width = n.pixelWidth, r.height = n.pixelHeight, r._attachedMipLevel = 0, r._attachedLayer = 0, e.colorTextures.forEach(function(s, i) {
                    i !== 0 && s.source.resize(n.width, n.height, n._resolution);
                }), r.msaa) {
                    var s = this._renderer, i = s.gl, a = r.framebuffer;
                    i.bindFramebuffer(i.FRAMEBUFFER, a), e.colorTextures.forEach(function(o, c) {
                        var u = o.source;
                        s.texture.bindSource(u, 0);
                        var f = s.texture.getGlSource(u).internalFormat, h = r.msaaRenderBuffer[c];
                        i.bindRenderbuffer(i.RENDERBUFFER, h), i.renderbufferStorageMultisample(i.RENDERBUFFER, 4, f, u.pixelWidth, u.pixelHeight), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + c, i.RENDERBUFFER, h);
                    });
                }
            }
        },
        {
            key: "_initStencil",
            value: function _initStencil(e) {
                if (e.framebuffer === null) return;
                var r = this._renderer.gl, n = r.createRenderbuffer();
                e.depthStencilRenderBuffer = n, r.bindRenderbuffer(r.RENDERBUFFER, n), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, n), this._resizeStencil(e);
            }
        },
        {
            key: "_resizeStencil",
            value: function _resizeStencil(e) {
                var r = this._renderer.gl;
                r.bindRenderbuffer(r.RENDERBUFFER, e.depthStencilRenderBuffer), e.msaa ? r.renderbufferStorageMultisample(r.RENDERBUFFER, 4, r.DEPTH24_STENCIL8, e.width, e.height) : r.renderbufferStorage(r.RENDERBUFFER, this._renderer.context.webGLVersion === 2 ? r.DEPTH24_STENCIL8 : r.DEPTH_STENCIL, e.width, e.height);
            }
        },
        {
            key: "prerender",
            value: function prerender(e) {
                var r = e.colorTexture.resource;
                this._renderer.context.multiView && y.test(r) && this._renderer.context.ensureCanvasSize(r);
            }
        },
        {
            key: "postrender",
            value: function postrender(e) {
                if (this._renderer.context.multiView && y.test(e.colorTexture.resource)) {
                    var r = this._renderer.context.canvas, n = e.colorTexture;
                    n.context2D.drawImage(r, 0, n.pixelHeight - r.height);
                }
            }
        },
        {
            key: "_setDrawBuffers",
            value: function _setDrawBuffers(e, r) {
                var n = e.colorTextures.length, s = this._drawBuffersCache[n];
                if (this._renderer.context.webGLVersion === 1) {
                    var i = this._renderer.context.extensions.drawBuffers;
                    i ? i.drawBuffersWEBGL(s) : b("[RenderTexture] This WebGL1 context does not support rendering to multiple targets");
                } else r.drawBuffers(s);
            }
        }
    ]);
    return tt;
}();
var le = /*#__PURE__*/ function(Xe) {
    "use strict";
    _inherits(le, Xe);
    function le(e) {
        _class_call_check(this, le);
        var _this;
        _this = _call_super(this, le, [
            e
        ]), _this.adaptor = new tt, _this.adaptor.init(e, _this);
        return _this;
    }
    return le;
}(Xe);
le.extension = {
    type: [
        d.WebGLSystem
    ],
    name: "renderTarget"
};
function rt(t, e) {
    var r = [], n = [
        "\n        var g = s.groups;\n        var sS = r.shader;\n        var p = s.glProgram;\n        var ugS = r.uniformGroup;\n        var resources;\n    "
    ];
    var s = !1, i = 0;
    var a = e._getProgramData(t.glProgram);
    for(var c in t.groups){
        var u = t.groups[c];
        r.push("\n            resources = g[".concat(c, "].resources;\n        "));
        for(var _ in u.resources){
            var f = u.resources[_];
            if (_instanceof1(f, M)) if (f.ubo) {
                var h = t._uniformBindMap[c][Number(_)];
                r.push("\n                        sS.bindUniformBlock(\n                            resources[".concat(_, "],\n                            '").concat(h, "',\n                            ").concat(t.glProgram._uniformBlockData[h].index, "\n                        );\n                    "));
            } else r.push("\n                        ugS.updateUniformGroup(resources[".concat(_, "], p, sD);\n                    "));
            else if (_instanceof1(f, te)) {
                var h1 = t._uniformBindMap[c][Number(_)];
                r.push("\n                    sS.bindUniformBlock(\n                        resources[".concat(_, "],\n                        '").concat(h1, "',\n                        ").concat(t.glProgram._uniformBlockData[h1].index, "\n                    );\n                "));
            } else if (_instanceof1(f, z)) {
                var h2 = t._uniformBindMap[c][_], m = a.uniformData[h2];
                m && (s || (s = !0, n.push("\n                        var tS = r.texture;\n                        ")), e._gl.uniform1i(m.location, i), r.push("\n                        tS.bind(resources[".concat(_, "], ").concat(i, ");\n                    ")), i++);
            }
        }
    }
    var o = _to_consumable_array(n).concat(_to_consumable_array(r)).join("\n");
    return new Function("r", "s", "sD", o);
}
var nt = /*#__PURE__*/ function() {
    "use strict";
    function nt(e, r) {
        _class_call_check(this, nt);
        this.program = e, this.uniformData = r, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBlockBindings = {};
    }
    _create_class(nt, [
        {
            key: "destroy",
            value: function destroy() {
                this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBlockBindings = null, this.program = null;
            }
        }
    ]);
    return nt;
}();
function k(t, e, r) {
    var n = t.createShader(e);
    return t.shaderSource(n, r), t.compileShader(n), n;
}
function D(t) {
    var e = new Array(t);
    for(var r = 0; r < e.length; r++)e[r] = !1;
    return e;
}
function de(t, e) {
    switch(t){
        case "float":
            return 0;
        case "vec2":
            return new Float32Array(2 * e);
        case "vec3":
            return new Float32Array(3 * e);
        case "vec4":
            return new Float32Array(4 * e);
        case "int":
        case "uint":
        case "sampler2D":
        case "sampler2DArray":
            return 0;
        case "ivec2":
            return new Int32Array(2 * e);
        case "ivec3":
            return new Int32Array(3 * e);
        case "ivec4":
            return new Int32Array(4 * e);
        case "uvec2":
            return new Uint32Array(2 * e);
        case "uvec3":
            return new Uint32Array(3 * e);
        case "uvec4":
            return new Uint32Array(4 * e);
        case "bool":
            return !1;
        case "bvec2":
            return D(2 * e);
        case "bvec3":
            return D(3 * e);
        case "bvec4":
            return D(4 * e);
        case "mat2":
            return new Float32Array([
                1,
                0,
                0,
                1
            ]);
        case "mat3":
            return new Float32Array([
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ]);
        case "mat4":
            return new Float32Array([
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            ]);
    }
    return null;
}
var T = null;
var W = {
    FLOAT: "float",
    FLOAT_VEC2: "vec2",
    FLOAT_VEC3: "vec3",
    FLOAT_VEC4: "vec4",
    INT: "int",
    INT_VEC2: "ivec2",
    INT_VEC3: "ivec3",
    INT_VEC4: "ivec4",
    UNSIGNED_INT: "uint",
    UNSIGNED_INT_VEC2: "uvec2",
    UNSIGNED_INT_VEC3: "uvec3",
    UNSIGNED_INT_VEC4: "uvec4",
    BOOL: "bool",
    BOOL_VEC2: "bvec2",
    BOOL_VEC3: "bvec3",
    BOOL_VEC4: "bvec4",
    FLOAT_MAT2: "mat2",
    FLOAT_MAT3: "mat3",
    FLOAT_MAT4: "mat4",
    SAMPLER_2D: "sampler2D",
    INT_SAMPLER_2D: "sampler2D",
    UNSIGNED_INT_SAMPLER_2D: "sampler2D",
    SAMPLER_CUBE: "samplerCube",
    INT_SAMPLER_CUBE: "samplerCube",
    UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
    SAMPLER_2D_ARRAY: "sampler2DArray",
    INT_SAMPLER_2D_ARRAY: "sampler2DArray",
    UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
}, st = {
    float: "float32",
    vec2: "float32x2",
    vec3: "float32x3",
    vec4: "float32x4",
    int: "sint32",
    ivec2: "sint32x2",
    ivec3: "sint32x3",
    ivec4: "sint32x4",
    uint: "uint32",
    uvec2: "uint32x2",
    uvec3: "uint32x3",
    uvec4: "uint32x4",
    bool: "uint32",
    bvec2: "uint32x2",
    bvec3: "uint32x3",
    bvec4: "uint32x4"
};
function me(t, e) {
    if (!T) {
        var r = Object.keys(W);
        T = {};
        for(var n = 0; n < r.length; ++n){
            var s = r[n];
            T[t[s]] = W[s];
        }
    }
    return T[e];
}
function it(t, e) {
    var r = me(t, e);
    return st[r] || "float32";
}
function at(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    var n = {}, s = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
    for(var a = 0; a < s; a++){
        var o = e.getActiveAttrib(t, a);
        if (o.name.startsWith("gl_")) continue;
        var c = it(e, o.type);
        n[o.name] = {
            location: 0,
            format: c,
            stride: q(c).stride,
            offset: 0,
            instance: !1,
            start: 0
        };
    }
    var i = Object.keys(n);
    if (r) {
        i.sort(function(a, o) {
            return a > o ? 1 : -1;
        });
        for(var a1 = 0; a1 < i.length; a1++)n[i[a1]].location = a1, e.bindAttribLocation(t, a1, i[a1]);
        e.linkProgram(t);
    } else for(var a2 = 0; a2 < i.length; a2++)n[i[a2]].location = e.getAttribLocation(t, i[a2]);
    return n;
}
function ot(t, e) {
    if (!e.ACTIVE_UNIFORM_BLOCKS) return {};
    var r = {}, n = e.getProgramParameter(t, e.ACTIVE_UNIFORM_BLOCKS);
    for(var s = 0; s < n; s++){
        var i = e.getActiveUniformBlockName(t, s), a = e.getUniformBlockIndex(t, i), o = e.getActiveUniformBlockParameter(t, s, e.UNIFORM_BLOCK_DATA_SIZE);
        r[i] = {
            name: i,
            index: a,
            size: o
        };
    }
    return r;
}
function ct(t, e) {
    var r = {}, n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for(var s = 0; s < n; s++){
        var i = e.getActiveUniform(t, s), a = i.name.replace(/\[.*?\]$/, ""), o = !!i.name.match(/\[.*?\]$/), c = me(e, i.type);
        r[a] = {
            name: a,
            index: s,
            type: c,
            size: i.size,
            isArray: o,
            value: de(c, i.size)
        };
    }
    return r;
}
function j(t, e) {
    var _console;
    var r = t.getShaderSource(e).split("\n").map(function(u, _) {
        return "".concat(_, ": ").concat(u);
    }), n = t.getShaderInfoLog(e), s = n.split("\n"), i = {}, a = s.map(function(u) {
        return parseFloat(u.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"));
    }).filter(function(u) {
        return u && !i[u] ? (i[u] = !0, !0) : !1;
    }), o = [
        ""
    ];
    a.forEach(function(u) {
        r[u - 1] = "%c".concat(r[u - 1], "%c"), o.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
    });
    var c = r.join("\n");
    o[0] = c, console.error(n), console.groupCollapsed("click to view full shader code"), (_console = console).warn.apply(_console, _to_consumable_array(o)), console.groupEnd();
}
function ut(t, e, r, n) {
    t.getProgramParameter(e, t.LINK_STATUS) || (t.getShaderParameter(r, t.COMPILE_STATUS) || j(t, r), t.getShaderParameter(n, t.COMPILE_STATUS) || j(t, n), console.error("PixiJS Error: Could not initialize shader."), t.getProgramInfoLog(e) !== "" && console.warn("PixiJS Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(e)));
}
function _t(t, e) {
    var r = k(t, t.VERTEX_SHADER, e.vertex), n = k(t, t.FRAGMENT_SHADER, e.fragment), s = t.createProgram();
    t.attachShader(s, r), t.attachShader(s, n);
    var i = e.transformFeedbackVaryings;
    i && (typeof t.transformFeedbackVaryings != "function" ? b("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : t.transformFeedbackVaryings(s, i.names, i.bufferMode === "separate" ? t.SEPARATE_ATTRIBS : t.INTERLEAVED_ATTRIBS)), t.linkProgram(s), t.getProgramParameter(s, t.LINK_STATUS) || ut(t, s, r, n), e._attributeData = at(s, t, !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertex)), e._uniformData = ct(s, t), e._uniformBlockData = ot(s, t), t.deleteShader(r), t.deleteShader(n);
    var a = {};
    for(var c in e._uniformData){
        var u = e._uniformData[c];
        a[c] = {
            location: t.getUniformLocation(s, c),
            value: de(u.type, u.size)
        };
    }
    return new nt(s, a);
}
var x = {
    textureCount: 0,
    blockIndex: 0
};
var Ee = /*#__PURE__*/ function() {
    "use strict";
    function Ee(e) {
        _class_call_check(this, Ee);
        this._activeProgram = null, this._programDataHash = Object.create(null), this._shaderSyncFunctions = Object.create(null), this._renderer = e;
    }
    _create_class(Ee, [
        {
            key: "contextChange",
            value: function contextChange(e) {
                this._gl = e, this._programDataHash = Object.create(null), this._shaderSyncFunctions = Object.create(null), this._activeProgram = null;
            }
        },
        {
            key: "bind",
            value: function bind(e, r) {
                if (this._setProgram(e.glProgram), r) return;
                x.textureCount = 0, x.blockIndex = 0;
                var n = this._shaderSyncFunctions[e.glProgram._key];
                n || (n = this._shaderSyncFunctions[e.glProgram._key] = this._generateShaderSync(e, this)), this._renderer.buffer.nextBindBase(!!e.glProgram.transformFeedbackVaryings), n(this._renderer, e, x);
            }
        },
        {
            key: "updateUniformGroup",
            value: function updateUniformGroup(e) {
                this._renderer.uniformGroup.updateUniformGroup(e, this._activeProgram, x);
            }
        },
        {
            key: "bindUniformBlock",
            value: function bindUniformBlock(e, r) {
                var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
                var s = this._renderer.buffer, i = this._getProgramData(this._activeProgram), a = e._bufferResource;
                a || this._renderer.ubo.updateUniformGroup(e);
                var o = e.buffer, c = s.updateBuffer(o), u = s.freeLocationForBufferBase(c);
                if (a) {
                    var f = e.offset, h = e.size;
                    f === 0 && h === o.data.byteLength ? s.bindBufferBase(c, u) : s.bindBufferRange(c, u, f);
                } else s.getLastBindBaseLocation(c) !== u && s.bindBufferBase(c, u);
                var _ = this._activeProgram._uniformBlockData[r].index;
                i.uniformBlockBindings[n] !== u && (i.uniformBlockBindings[n] = u, this._renderer.gl.uniformBlockBinding(i.program, _, u));
            }
        },
        {
            key: "_setProgram",
            value: function _setProgram(e) {
                if (this._activeProgram === e) return;
                this._activeProgram = e;
                var r = this._getProgramData(e);
                this._gl.useProgram(r.program);
            }
        },
        {
            key: "_getProgramData",
            value: function _getProgramData(e) {
                return this._programDataHash[e._key] || this._createProgramData(e);
            }
        },
        {
            key: "_createProgramData",
            value: function _createProgramData(e) {
                var r = e._key;
                return this._programDataHash[r] = _t(this._gl, e), this._programDataHash[r];
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.keys(this._programDataHash)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var e = _step.value;
                        this._programDataHash[e].destroy();
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
                this._programDataHash = null, this._shaderSyncFunctions = null, this._activeProgram = null, this._renderer = null, this._gl = null;
            }
        },
        {
            key: "_generateShaderSync",
            value: function _generateShaderSync(e, r) {
                return rt(e, r);
            }
        },
        {
            key: "resetState",
            value: function resetState() {
                this._activeProgram = null;
            }
        }
    ]);
    return Ee;
}();
Ee.extension = {
    type: [
        d.WebGLSystem
    ],
    name: "shader"
};
var ft = {
    f32: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1f(location, v);\n        }",
    "vec2<f32>": "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2f(location, v[0], v[1]);\n        }",
    "vec3<f32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3f(location, v[0], v[1], v[2]);\n        }",
    "vec4<f32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4f(location, v[0], v[1], v[2], v[3]);\n        }",
    i32: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1i(location, v);\n        }",
    "vec2<i32>": "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2i(location, v[0], v[1]);\n        }",
    "vec3<i32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3i(location, v[0], v[1], v[2]);\n        }",
    "vec4<i32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n        }",
    u32: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1ui(location, v);\n        }",
    "vec2<u32>": "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2ui(location, v[0], v[1]);\n        }",
    "vec3<u32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3ui(location, v[0], v[1], v[2]);\n        }",
    "vec4<u32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4ui(location, v[0], v[1], v[2], v[3]);\n        }",
    bool: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1i(location, v);\n        }",
    "vec2<bool>": "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2i(location, v[0], v[1]);\n        }",
    "vec3<bool>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3i(location, v[0], v[1], v[2]);\n        }",
    "vec4<bool>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n        }",
    "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);",
    "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);",
    "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);"
}, ht = {
    f32: "gl.uniform1fv(location, v);",
    "vec2<f32>": "gl.uniform2fv(location, v);",
    "vec3<f32>": "gl.uniform3fv(location, v);",
    "vec4<f32>": "gl.uniform4fv(location, v);",
    "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);",
    "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);",
    "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);",
    i32: "gl.uniform1iv(location, v);",
    "vec2<i32>": "gl.uniform2iv(location, v);",
    "vec3<i32>": "gl.uniform3iv(location, v);",
    "vec4<i32>": "gl.uniform4iv(location, v);",
    u32: "gl.uniform1iv(location, v);",
    "vec2<u32>": "gl.uniform2iv(location, v);",
    "vec3<u32>": "gl.uniform3iv(location, v);",
    "vec4<u32>": "gl.uniform4iv(location, v);",
    bool: "gl.uniform1iv(location, v);",
    "vec2<bool>": "gl.uniform2iv(location, v);",
    "vec3<bool>": "gl.uniform3iv(location, v);",
    "vec4<bool>": "gl.uniform4iv(location, v);"
};
function lt(t, e) {
    var r = [
        "\n        var v = null;\n        var cv = null;\n        var cu = null;\n        var t = 0;\n        var gl = renderer.gl;\n        var name = null;\n    "
    ];
    for(var n in t.uniforms){
        if (!e[n]) {
            _instanceof1(t.uniforms[n], M) ? t.uniforms[n].ubo ? r.push("\n                        renderer.shader.bindUniformBlock(uv.".concat(n, ', "').concat(n, '");\n                    ')) : r.push("\n                        renderer.shader.updateUniformGroup(uv.".concat(n, ");\n                    ")) : _instanceof1(t.uniforms[n], te) && r.push("\n                        renderer.shader.bindBufferResource(uv.".concat(n, ', "').concat(n, '");\n                    '));
            continue;
        }
        var s = t.uniformStructures[n];
        var i = !1;
        for(var a = 0; a < N.length; a++){
            var o = N[a];
            if (s.type === o.type && o.test(s)) {
                r.push('name = "'.concat(n, '";'), N[a].uniform), i = !0;
                break;
            }
        }
        if (!i) {
            var o1 = (s.size === 1 ? ft : ht)[s.type].replace("location", 'ud["'.concat(n, '"].location'));
            r.push('\n            cu = ud["'.concat(n, '"];\n            cv = cu.value;\n            v = uv["').concat(n, '"];\n            ').concat(o1, ";"));
        }
    }
    return new Function("ud", "uv", "renderer", "syncData", r.join("\n"));
}
var be = /*#__PURE__*/ function() {
    "use strict";
    function be(e) {
        _class_call_check(this, be);
        this._cache = {}, this._uniformGroupSyncHash = {}, this._renderer = e, this.gl = null, this._cache = {};
    }
    _create_class(be, [
        {
            key: "contextChange",
            value: function contextChange(e) {
                this.gl = e;
            }
        },
        {
            key: "updateUniformGroup",
            value: function updateUniformGroup(e, r, n) {
                var s = this._renderer.shader._getProgramData(r);
                (!e.isStatic || e._dirtyId !== s.uniformDirtyGroups[e.uid]) && (s.uniformDirtyGroups[e.uid] = e._dirtyId, this._getUniformSyncFunction(e, r)(s.uniformData, e.uniforms, this._renderer, n));
            }
        },
        {
            key: "_getUniformSyncFunction",
            value: function _getUniformSyncFunction(e, r) {
                var _this__uniformGroupSyncHash_e__signature;
                return ((_this__uniformGroupSyncHash_e__signature = this._uniformGroupSyncHash[e._signature]) === null || _this__uniformGroupSyncHash_e__signature === void 0 ? void 0 : _this__uniformGroupSyncHash_e__signature[r._key]) || this._createUniformSyncFunction(e, r);
            }
        },
        {
            key: "_createUniformSyncFunction",
            value: function _createUniformSyncFunction(e, r) {
                var n = this._uniformGroupSyncHash[e._signature] || (this._uniformGroupSyncHash[e._signature] = {}), s = this._getSignature(e, r._uniformData, "u");
                return this._cache[s] || (this._cache[s] = this._generateUniformsSync(e, r._uniformData)), n[r._key] = this._cache[s], n[r._key];
            }
        },
        {
            key: "_generateUniformsSync",
            value: function _generateUniformsSync(e, r) {
                return lt(e, r);
            }
        },
        {
            key: "_getSignature",
            value: function _getSignature(e, r, n) {
                var s = e.uniforms, i = [
                    "".concat(n, "-")
                ];
                for(var a in s)i.push(a), r[a] && i.push(r[a].type);
                return i.join("-");
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null, this._cache = null;
            }
        }
    ]);
    return be;
}();
be.extension = {
    type: [
        d.WebGLSystem
    ],
    name: "uniformGroup"
};
function dt(t) {
    var e = {};
    if (e.normal = [
        t.ONE,
        t.ONE_MINUS_SRC_ALPHA
    ], e.add = [
        t.ONE,
        t.ONE
    ], e.multiply = [
        t.DST_COLOR,
        t.ONE_MINUS_SRC_ALPHA,
        t.ONE,
        t.ONE_MINUS_SRC_ALPHA
    ], e.screen = [
        t.ONE,
        t.ONE_MINUS_SRC_COLOR,
        t.ONE,
        t.ONE_MINUS_SRC_ALPHA
    ], e.none = [
        0,
        0
    ], e["normal-npm"] = [
        t.SRC_ALPHA,
        t.ONE_MINUS_SRC_ALPHA,
        t.ONE,
        t.ONE_MINUS_SRC_ALPHA
    ], e["add-npm"] = [
        t.SRC_ALPHA,
        t.ONE,
        t.ONE,
        t.ONE
    ], e["screen-npm"] = [
        t.SRC_ALPHA,
        t.ONE_MINUS_SRC_COLOR,
        t.ONE,
        t.ONE_MINUS_SRC_ALPHA
    ], e.erase = [
        t.ZERO,
        t.ONE_MINUS_SRC_ALPHA
    ], !_instanceof1(t, R.get().getWebGLRenderingContext())) e.min = [
        t.ONE,
        t.ONE,
        t.ONE,
        t.ONE,
        t.MIN,
        t.MIN
    ], e.max = [
        t.ONE,
        t.ONE,
        t.ONE,
        t.ONE,
        t.MAX,
        t.MAX
    ];
    else {
        var n = t.getExtension("EXT_blend_minmax");
        n && (e.min = [
            t.ONE,
            t.ONE,
            t.ONE,
            t.ONE,
            n.MIN_EXT,
            n.MIN_EXT
        ], e.max = [
            t.ONE,
            t.ONE,
            t.ONE,
            t.ONE,
            n.MAX_EXT,
            n.MAX_EXT
        ]);
    }
    return e;
}
var mt = 0, Et = 1, bt = 2, pt = 3, St = 4, Rt = 5, pe = /*#__PURE__*/ function() {
    "use strict";
    function U(e) {
        _class_call_check(this, U);
        this._invertFrontFace = !1, this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = "none", this._blendEq = !1, this.map = [], this.map[mt] = this.setBlend, this.map[Et] = this.setOffset, this.map[bt] = this.setCullFace, this.map[pt] = this.setDepthTest, this.map[St] = this.setFrontFace, this.map[Rt] = this.setDepthMask, this.checks = [], this.defaultState = F.for2d(), e.renderTarget.onRenderTargetChange.add(this);
    }
    _create_class(U, [
        {
            key: "onRenderTargetChange",
            value: function onRenderTargetChange(e) {
                this._invertFrontFace = !e.isRoot, this._cullFace ? this.setFrontFace(this._frontFace) : this._frontFaceDirty = !0;
            }
        },
        {
            key: "contextChange",
            value: function contextChange(e) {
                this.gl = e, this.blendModesMap = dt(e), this.resetState();
            }
        },
        {
            key: "set",
            value: function set(e) {
                if (e || (e = this.defaultState), this.stateId !== e.data) {
                    var r = this.stateId ^ e.data, n = 0;
                    for(; r;)r & 1 && this.map[n].call(this, !!(e.data & 1 << n)), r >>= 1, n++;
                    this.stateId = e.data;
                }
                for(var r1 = 0; r1 < this.checks.length; r1++)this.checks[r1](this, e);
            }
        },
        {
            key: "forceState",
            value: function forceState(e) {
                e || (e = this.defaultState);
                for(var r = 0; r < this.map.length; r++)this.map[r].call(this, !!(e.data & 1 << r));
                for(var r1 = 0; r1 < this.checks.length; r1++)this.checks[r1](this, e);
                this.stateId = e.data;
            }
        },
        {
            key: "setBlend",
            value: function setBlend(e) {
                this._updateCheck(U._checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND);
            }
        },
        {
            key: "setOffset",
            value: function setOffset(e) {
                this._updateCheck(U._checkPolygonOffset, e), this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
            }
        },
        {
            key: "setDepthTest",
            value: function setDepthTest(e) {
                this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST);
            }
        },
        {
            key: "setDepthMask",
            value: function setDepthMask(e) {
                this.gl.depthMask(e);
            }
        },
        {
            key: "setCullFace",
            value: function setCullFace(e) {
                this._cullFace = e, this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE), this._cullFace && this._frontFaceDirty && this.setFrontFace(this._frontFace);
            }
        },
        {
            key: "setFrontFace",
            value: function setFrontFace(e) {
                this._frontFace = e, this._frontFaceDirty = !1;
                var r = this._invertFrontFace ? !e : e;
                this._glFrontFace !== r && (this._glFrontFace = r, this.gl.frontFace(this.gl[r ? "CW" : "CCW"]));
            }
        },
        {
            key: "setBlendMode",
            value: function setBlendMode(e) {
                if (this.blendModesMap[e] || (e = "normal"), e === this.blendMode) return;
                this.blendMode = e;
                var r = this.blendModesMap[e], n = this.gl;
                r.length === 2 ? n.blendFunc(r[0], r[1]) : n.blendFuncSeparate(r[0], r[1], r[2], r[3]), r.length === 6 ? (this._blendEq = !0, n.blendEquationSeparate(r[4], r[5])) : this._blendEq && (this._blendEq = !1, n.blendEquationSeparate(n.FUNC_ADD, n.FUNC_ADD));
            }
        },
        {
            key: "setPolygonOffset",
            value: function setPolygonOffset(e, r) {
                this.gl.polygonOffset(e, r);
            }
        },
        {
            key: "resetState",
            value: function resetState() {
                this._glFrontFace = !1, this._frontFace = !1, this._cullFace = !1, this._frontFaceDirty = !1, this._invertFrontFace = !1, this.gl.frontFace(this.gl.CCW), this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = "", this.setBlendMode("normal");
            }
        },
        {
            key: "_updateCheck",
            value: function _updateCheck(e, r) {
                var n = this.checks.indexOf(e);
                r && n === -1 ? this.checks.push(e) : !r && n !== -1 && this.checks.splice(n, 1);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.gl = null, this.checks.length = 0;
            }
        }
    ], [
        {
            key: "_checkBlendMode",
            value: function _checkBlendMode(e, r) {
                e.setBlendMode(r.blendMode);
            }
        },
        {
            key: "_checkPolygonOffset",
            value: function _checkPolygonOffset(e, r) {
                e.setPolygonOffset(1, r.polygonOffset);
            }
        }
    ]);
    return U;
}();
pe.extension = {
    type: [
        d.WebGLSystem
    ],
    name: "state"
};
var gt = pe;
var Tt = /*#__PURE__*/ function() {
    "use strict";
    function Tt(e) {
        _class_call_check(this, Tt);
        this.target = w.TEXTURE_2D, this._layerInitMask = 0, this.texture = e, this.width = -1, this.height = -1, this.type = l.UNSIGNED_BYTE, this.internalFormat = G.RGBA, this.format = G.RGBA, this.samplerType = 0;
    }
    _create_class(Tt, [
        {
            key: "destroy",
            value: function destroy() {}
        }
    ]);
    return Tt;
}();
var xt = {
    id: "buffer",
    upload: function upload(t, e, r, n, s) {
        var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1;
        var a = s || e.target;
        !i && e.width === t.width && e.height === t.height ? r.texSubImage2D(a, 0, 0, 0, t.width, t.height, e.format, e.type, t.resource) : r.texImage2D(a, 0, e.internalFormat, t.width, t.height, 0, e.format, e.type, t.resource), e.width = t.width, e.height = t.height;
    }
}, vt = {
    "bc1-rgba-unorm": !0,
    "bc1-rgba-unorm-srgb": !0,
    "bc2-rgba-unorm": !0,
    "bc2-rgba-unorm-srgb": !0,
    "bc3-rgba-unorm": !0,
    "bc3-rgba-unorm-srgb": !0,
    "bc4-r-unorm": !0,
    "bc4-r-snorm": !0,
    "bc5-rg-unorm": !0,
    "bc5-rg-snorm": !0,
    "bc6h-rgb-ufloat": !0,
    "bc6h-rgb-float": !0,
    "bc7-rgba-unorm": !0,
    "bc7-rgba-unorm-srgb": !0,
    "etc2-rgb8unorm": !0,
    "etc2-rgb8unorm-srgb": !0,
    "etc2-rgb8a1unorm": !0,
    "etc2-rgb8a1unorm-srgb": !0,
    "etc2-rgba8unorm": !0,
    "etc2-rgba8unorm-srgb": !0,
    "eac-r11unorm": !0,
    "eac-r11snorm": !0,
    "eac-rg11unorm": !0,
    "eac-rg11snorm": !0,
    "astc-4x4-unorm": !0,
    "astc-4x4-unorm-srgb": !0,
    "astc-5x4-unorm": !0,
    "astc-5x4-unorm-srgb": !0,
    "astc-5x5-unorm": !0,
    "astc-5x5-unorm-srgb": !0,
    "astc-6x5-unorm": !0,
    "astc-6x5-unorm-srgb": !0,
    "astc-6x6-unorm": !0,
    "astc-6x6-unorm-srgb": !0,
    "astc-8x5-unorm": !0,
    "astc-8x5-unorm-srgb": !0,
    "astc-8x6-unorm": !0,
    "astc-8x6-unorm-srgb": !0,
    "astc-8x8-unorm": !0,
    "astc-8x8-unorm-srgb": !0,
    "astc-10x5-unorm": !0,
    "astc-10x5-unorm-srgb": !0,
    "astc-10x6-unorm": !0,
    "astc-10x6-unorm-srgb": !0,
    "astc-10x8-unorm": !0,
    "astc-10x8-unorm-srgb": !0,
    "astc-10x10-unorm": !0,
    "astc-10x10-unorm-srgb": !0,
    "astc-12x10-unorm": !0,
    "astc-12x10-unorm-srgb": !0,
    "astc-12x12-unorm": !0,
    "astc-12x12-unorm-srgb": !0
}, At = {
    id: "compressed",
    upload: function upload(t, e, r, n, s, i) {
        var a = s !== null && s !== void 0 ? s : e.target;
        r.pixelStorei(r.UNPACK_ALIGNMENT, 4);
        var o = t.pixelWidth, c = t.pixelHeight;
        var u = !!vt[t.format];
        for(var _ = 0; _ < t.resource.length; _++){
            var f = t.resource[_];
            u ? r.compressedTexImage2D(a, _, e.internalFormat, o, c, 0, f) : r.texImage2D(a, _, e.internalFormat, o, c, 0, e.format, e.type, f), o = Math.max(o >> 1, 1), c = Math.max(c >> 1, 1);
        }
    }
}, K = [
    "right",
    "left",
    "top",
    "bottom",
    "front",
    "back"
];
function Bt(t) {
    return {
        id: "cube",
        upload: function upload(e, r, n, s) {
            var i = e.faces;
            for(var a = 0; a < K.length; a++){
                var o = K[a], c = i[o];
                (t[c.uploadMethodId] || t.image).upload(c, r, n, s, w.TEXTURE_CUBE_MAP_POSITIVE_X + a, (r._layerInitMask & 1 << a) === 0), r._layerInitMask |= 1 << a;
            }
            r.width = e.pixelWidth, r.height = e.pixelHeight;
        }
    };
}
var Se = {
    id: "image",
    upload: function upload(t, e, r, n, s) {
        var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1;
        var a = s || e.target, o = t.pixelWidth, c = t.pixelHeight, u = t.resourceWidth, _ = t.resourceHeight, f = n === 2, h = i || e.width !== o || e.height !== c, m = u >= o && _ >= c, p = t.resource;
        (f ? yt : Ct)(r, a, e, o, c, u, _, p, h, m), e.width = o, e.height = c;
    }
};
function yt(t, e, r, n, s, i, a, o, c, u) {
    if (!u) {
        c && t.texImage2D(e, 0, r.internalFormat, n, s, 0, r.format, r.type, null), t.texSubImage2D(e, 0, 0, 0, i, a, r.format, r.type, o);
        return;
    }
    if (!c) {
        t.texSubImage2D(e, 0, 0, 0, r.format, r.type, o);
        return;
    }
    t.texImage2D(e, 0, r.internalFormat, n, s, 0, r.format, r.type, o);
}
function Ct(t, e, r, n, s, i, a, o, c, u) {
    if (!u) {
        c && t.texImage2D(e, 0, r.internalFormat, n, s, 0, r.format, r.type, null), t.texSubImage2D(e, 0, 0, 0, r.format, r.type, o);
        return;
    }
    if (!c) {
        t.texSubImage2D(e, 0, 0, 0, r.format, r.type, o);
        return;
    }
    t.texImage2D(e, 0, r.internalFormat, r.format, r.type, o);
}
var Nt = ke(), Dt = {
    id: "video",
    upload: function upload(t, e, r, n, s) {
        var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Nt;
        if (!t.isValid) {
            var a = s !== null && s !== void 0 ? s : e.target;
            r.texImage2D(a, 0, e.internalFormat, 1, 1, 0, e.format, e.type, null);
            return;
        }
        Se.upload(t, e, r, n, s, i);
    }
}, $ = {
    linear: 9729,
    nearest: 9728
}, It = {
    linear: {
        linear: 9987,
        nearest: 9985
    },
    nearest: {
        linear: 9986,
        nearest: 9984
    }
}, I = {
    "clamp-to-edge": 33071,
    repeat: 10497,
    "mirror-repeat": 33648
}, Gt = {
    never: 512,
    less: 513,
    equal: 514,
    "less-equal": 515,
    greater: 516,
    "not-equal": 517,
    "greater-equal": 518,
    always: 519
};
function Y(t, e, r, n, s, i, a, o) {
    var c = i;
    if (!o || t.addressModeU !== "repeat" || t.addressModeV !== "repeat" || t.addressModeW !== "repeat") {
        var u = I[a ? "clamp-to-edge" : t.addressModeU], _ = I[a ? "clamp-to-edge" : t.addressModeV], f = I[a ? "clamp-to-edge" : t.addressModeW];
        e[s](c, e.TEXTURE_WRAP_S, u), e[s](c, e.TEXTURE_WRAP_T, _), e.TEXTURE_WRAP_R && e[s](c, e.TEXTURE_WRAP_R, f);
    }
    if ((!o || t.magFilter !== "linear") && e[s](c, e.TEXTURE_MAG_FILTER, $[t.magFilter]), r) {
        if (!o || t.mipmapFilter !== "linear") {
            var u1 = It[t.minFilter][t.mipmapFilter];
            e[s](c, e.TEXTURE_MIN_FILTER, u1);
        }
    } else e[s](c, e.TEXTURE_MIN_FILTER, $[t.minFilter]);
    if (n && t.maxAnisotropy > 1) {
        var u2 = Math.min(t.maxAnisotropy, e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
        e[s](c, n.TEXTURE_MAX_ANISOTROPY_EXT, u2);
    }
    t.compare && e[s](c, e.TEXTURE_COMPARE_FUNC, Gt[t.compare]);
}
function Ut(t) {
    return {
        r8unorm: t.RED,
        r8snorm: t.RED,
        r8uint: t.RED,
        r8sint: t.RED,
        r16uint: t.RED,
        r16sint: t.RED,
        r16float: t.RED,
        rg8unorm: t.RG,
        rg8snorm: t.RG,
        rg8uint: t.RG,
        rg8sint: t.RG,
        r32uint: t.RED,
        r32sint: t.RED,
        r32float: t.RED,
        rg16uint: t.RG,
        rg16sint: t.RG,
        rg16float: t.RG,
        rgba8unorm: t.RGBA,
        "rgba8unorm-srgb": t.RGBA,
        rgba8snorm: t.RGBA,
        rgba8uint: t.RGBA,
        rgba8sint: t.RGBA,
        bgra8unorm: t.RGBA,
        "bgra8unorm-srgb": t.RGBA,
        rgb9e5ufloat: t.RGB,
        rgb10a2unorm: t.RGBA,
        rg11b10ufloat: t.RGB,
        rg32uint: t.RG,
        rg32sint: t.RG,
        rg32float: t.RG,
        rgba16uint: t.RGBA,
        rgba16sint: t.RGBA,
        rgba16float: t.RGBA,
        rgba32uint: t.RGBA,
        rgba32sint: t.RGBA,
        rgba32float: t.RGBA,
        stencil8: t.STENCIL_INDEX8,
        depth16unorm: t.DEPTH_COMPONENT,
        depth24plus: t.DEPTH_COMPONENT,
        "depth24plus-stencil8": t.DEPTH_STENCIL,
        depth32float: t.DEPTH_COMPONENT,
        "depth32float-stencil8": t.DEPTH_STENCIL
    };
}
function Ft(t, e) {
    var r = {}, n = t.RGBA;
    return _instanceof1(t, R.get().getWebGLRenderingContext()) ? e.srgb && (r = {
        "rgba8unorm-srgb": e.srgb.SRGB8_ALPHA8_EXT,
        "bgra8unorm-srgb": e.srgb.SRGB8_ALPHA8_EXT
    }) : (r = {
        "rgba8unorm-srgb": t.SRGB8_ALPHA8,
        "bgra8unorm-srgb": t.SRGB8_ALPHA8
    }, n = t.RGBA8), _object_spread(_object_spread_props(_object_spread({
        r8unorm: t.R8,
        r8snorm: t.R8_SNORM,
        r8uint: t.R8UI,
        r8sint: t.R8I,
        r16uint: t.R16UI,
        r16sint: t.R16I,
        r16float: t.R16F,
        rg8unorm: t.RG8,
        rg8snorm: t.RG8_SNORM,
        rg8uint: t.RG8UI,
        rg8sint: t.RG8I,
        r32uint: t.R32UI,
        r32sint: t.R32I,
        r32float: t.R32F,
        rg16uint: t.RG16UI,
        rg16sint: t.RG16I,
        rg16float: t.RG16F,
        rgba8unorm: t.RGBA
    }, r), {
        rgba8snorm: t.RGBA8_SNORM,
        rgba8uint: t.RGBA8UI,
        rgba8sint: t.RGBA8I,
        bgra8unorm: n,
        rgb9e5ufloat: t.RGB9_E5,
        rgb10a2unorm: t.RGB10_A2,
        rg11b10ufloat: t.R11F_G11F_B10F,
        rg32uint: t.RG32UI,
        rg32sint: t.RG32I,
        rg32float: t.RG32F,
        rgba16uint: t.RGBA16UI,
        rgba16sint: t.RGBA16I,
        rgba16float: t.RGBA16F,
        rgba32uint: t.RGBA32UI,
        rgba32sint: t.RGBA32I,
        rgba32float: t.RGBA32F,
        stencil8: t.STENCIL_INDEX8,
        depth16unorm: t.DEPTH_COMPONENT16,
        depth24plus: t.DEPTH_COMPONENT24,
        "depth24plus-stencil8": t.DEPTH24_STENCIL8,
        depth32float: t.DEPTH_COMPONENT32F,
        "depth32float-stencil8": t.DEPTH32F_STENCIL8
    }), e.s3tc ? {
        "bc1-rgba-unorm": e.s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        "bc2-rgba-unorm": e.s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        "bc3-rgba-unorm": e.s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT
    } : {}, e.s3tc_sRGB ? {
        "bc1-rgba-unorm-srgb": e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
        "bc2-rgba-unorm-srgb": e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
        "bc3-rgba-unorm-srgb": e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
    } : {}, e.rgtc ? {
        "bc4-r-unorm": e.rgtc.COMPRESSED_RED_RGTC1_EXT,
        "bc4-r-snorm": e.rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT,
        "bc5-rg-unorm": e.rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT,
        "bc5-rg-snorm": e.rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
    } : {}, e.bptc ? {
        "bc6h-rgb-float": e.bptc.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,
        "bc6h-rgb-ufloat": e.bptc.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,
        "bc7-rgba-unorm": e.bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT,
        "bc7-rgba-unorm-srgb": e.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
    } : {}, e.etc ? {
        "etc2-rgb8unorm": e.etc.COMPRESSED_RGB8_ETC2,
        "etc2-rgb8unorm-srgb": e.etc.COMPRESSED_SRGB8_ETC2,
        "etc2-rgb8a1unorm": e.etc.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,
        "etc2-rgb8a1unorm-srgb": e.etc.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,
        "etc2-rgba8unorm": e.etc.COMPRESSED_RGBA8_ETC2_EAC,
        "etc2-rgba8unorm-srgb": e.etc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,
        "eac-r11unorm": e.etc.COMPRESSED_R11_EAC,
        "eac-rg11unorm": e.etc.COMPRESSED_SIGNED_RG11_EAC
    } : {}, e.astc ? {
        "astc-4x4-unorm": e.astc.COMPRESSED_RGBA_ASTC_4x4_KHR,
        "astc-4x4-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR,
        "astc-5x4-unorm": e.astc.COMPRESSED_RGBA_ASTC_5x4_KHR,
        "astc-5x4-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR,
        "astc-5x5-unorm": e.astc.COMPRESSED_RGBA_ASTC_5x5_KHR,
        "astc-5x5-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR,
        "astc-6x5-unorm": e.astc.COMPRESSED_RGBA_ASTC_6x5_KHR,
        "astc-6x5-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR,
        "astc-6x6-unorm": e.astc.COMPRESSED_RGBA_ASTC_6x6_KHR,
        "astc-6x6-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR,
        "astc-8x5-unorm": e.astc.COMPRESSED_RGBA_ASTC_8x5_KHR,
        "astc-8x5-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR,
        "astc-8x6-unorm": e.astc.COMPRESSED_RGBA_ASTC_8x6_KHR,
        "astc-8x6-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR,
        "astc-8x8-unorm": e.astc.COMPRESSED_RGBA_ASTC_8x8_KHR,
        "astc-8x8-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR,
        "astc-10x5-unorm": e.astc.COMPRESSED_RGBA_ASTC_10x5_KHR,
        "astc-10x5-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR,
        "astc-10x6-unorm": e.astc.COMPRESSED_RGBA_ASTC_10x6_KHR,
        "astc-10x6-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR,
        "astc-10x8-unorm": e.astc.COMPRESSED_RGBA_ASTC_10x8_KHR,
        "astc-10x8-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR,
        "astc-10x10-unorm": e.astc.COMPRESSED_RGBA_ASTC_10x10_KHR,
        "astc-10x10-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR,
        "astc-12x10-unorm": e.astc.COMPRESSED_RGBA_ASTC_12x10_KHR,
        "astc-12x10-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR,
        "astc-12x12-unorm": e.astc.COMPRESSED_RGBA_ASTC_12x12_KHR,
        "astc-12x12-unorm-srgb": e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
    } : {});
}
function Pt(t) {
    return {
        r8unorm: t.UNSIGNED_BYTE,
        r8snorm: t.BYTE,
        r8uint: t.UNSIGNED_BYTE,
        r8sint: t.BYTE,
        r16uint: t.UNSIGNED_SHORT,
        r16sint: t.SHORT,
        r16float: t.HALF_FLOAT,
        rg8unorm: t.UNSIGNED_BYTE,
        rg8snorm: t.BYTE,
        rg8uint: t.UNSIGNED_BYTE,
        rg8sint: t.BYTE,
        r32uint: t.UNSIGNED_INT,
        r32sint: t.INT,
        r32float: t.FLOAT,
        rg16uint: t.UNSIGNED_SHORT,
        rg16sint: t.SHORT,
        rg16float: t.HALF_FLOAT,
        rgba8unorm: t.UNSIGNED_BYTE,
        "rgba8unorm-srgb": t.UNSIGNED_BYTE,
        rgba8snorm: t.BYTE,
        rgba8uint: t.UNSIGNED_BYTE,
        rgba8sint: t.BYTE,
        bgra8unorm: t.UNSIGNED_BYTE,
        "bgra8unorm-srgb": t.UNSIGNED_BYTE,
        rgb9e5ufloat: t.UNSIGNED_INT_5_9_9_9_REV,
        rgb10a2unorm: t.UNSIGNED_INT_2_10_10_10_REV,
        rg11b10ufloat: t.UNSIGNED_INT_10F_11F_11F_REV,
        rg32uint: t.UNSIGNED_INT,
        rg32sint: t.INT,
        rg32float: t.FLOAT,
        rgba16uint: t.UNSIGNED_SHORT,
        rgba16sint: t.SHORT,
        rgba16float: t.HALF_FLOAT,
        rgba32uint: t.UNSIGNED_INT,
        rgba32sint: t.INT,
        rgba32float: t.FLOAT,
        stencil8: t.UNSIGNED_BYTE,
        depth16unorm: t.UNSIGNED_SHORT,
        depth24plus: t.UNSIGNED_INT,
        "depth24plus-stencil8": t.UNSIGNED_INT_24_8,
        depth32float: t.FLOAT,
        "depth32float-stencil8": t.FLOAT_32_UNSIGNED_INT_24_8_REV
    };
}
function Ot(t) {
    return {
        "2d": t.TEXTURE_2D,
        cube: t.TEXTURE_CUBE_MAP,
        "1d": null,
        "3d": (t === null || t === void 0 ? void 0 : t.TEXTURE_3D) || null,
        "2d-array": (t === null || t === void 0 ? void 0 : t.TEXTURE_2D_ARRAY) || null,
        "cube-array": (t === null || t === void 0 ? void 0 : t.TEXTURE_CUBE_MAP_ARRAY) || null
    };
}
var Mt = 4;
var Re = /*#__PURE__*/ function() {
    "use strict";
    function Re(e) {
        _class_call_check(this, Re);
        this._glSamplers = Object.create(null), this._boundTextures = [], this._activeTextureLocation = -1, this._boundSamplers = Object.create(null), this._premultiplyAlpha = !1, this._useSeparateSamplers = !1, this._renderer = e, this._managedTextures = new O({
            renderer: e,
            type: "resource",
            onUnload: this.onSourceUnload.bind(this),
            name: "glTexture"
        });
        var r = {
            image: Se,
            buffer: xt,
            video: Dt,
            compressed: At
        };
        this._uploads = _object_spread_props(_object_spread({}, r), {
            cube: Bt(r)
        });
    }
    _create_class(Re, [
        {
            key: "managedTextures",
            get: function get() {
                return Object.values(this._managedTextures.items);
            }
        },
        {
            key: "contextChange",
            value: function contextChange(e) {
                this._gl = e, this._mapFormatToInternalFormat || (this._mapFormatToInternalFormat = Ft(e, this._renderer.context.extensions), this._mapFormatToType = Pt(e), this._mapFormatToFormat = Ut(e), this._mapViewDimensionToGlTarget = Ot(e)), this._managedTextures.removeAll(!0), this._glSamplers = Object.create(null), this._boundSamplers = Object.create(null), this._premultiplyAlpha = !1;
                for(var r = 0; r < 16; r++)this.bind(S.EMPTY, r);
            }
        },
        {
            key: "initSource",
            value: function initSource(e) {
                this.bind(e);
            }
        },
        {
            key: "bind",
            value: function bind(e) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                var n = e.source;
                e ? (this.bindSource(n, r), this._useSeparateSamplers && this._bindSampler(n.style, r)) : (this.bindSource(null, r), this._useSeparateSamplers && this._bindSampler(null, r));
            }
        },
        {
            key: "bindSource",
            value: function bindSource(e) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                var n = this._gl;
                if (e._gcLastUsed = this._renderer.gc.now, this._boundTextures[r] !== e) {
                    this._boundTextures[r] = e, this._activateLocation(r), e || (e = S.EMPTY.source);
                    var s = this.getGlSource(e);
                    n.bindTexture(s.target, s.texture);
                }
            }
        },
        {
            key: "_bindSampler",
            value: function _bindSampler(e) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                var n = this._gl;
                if (!e) {
                    this._boundSamplers[r] = null, n.bindSampler(r, null);
                    return;
                }
                var s = this._getGlSampler(e);
                this._boundSamplers[r] !== s && (this._boundSamplers[r] = s, n.bindSampler(r, s));
            }
        },
        {
            key: "unbind",
            value: function unbind(e) {
                var r = e.source, n = this._boundTextures, s = this._gl;
                for(var i = 0; i < n.length; i++)if (n[i] === r) {
                    this._activateLocation(i);
                    var a = this.getGlSource(r);
                    s.bindTexture(a.target, null), n[i] = null;
                }
            }
        },
        {
            key: "_activateLocation",
            value: function _activateLocation(e) {
                this._activeTextureLocation !== e && (this._activeTextureLocation = e, this._gl.activeTexture(this._gl.TEXTURE0 + e));
            }
        },
        {
            key: "_initSource",
            value: function _initSource(e) {
                var r = this._gl, n = new Tt(r.createTexture());
                if (n.type = this._mapFormatToType[e.format], n.internalFormat = this._mapFormatToInternalFormat[e.format], n.format = this._mapFormatToFormat[e.format], n.target = this._mapViewDimensionToGlTarget[e.viewDimension], n.target === null) throw new Error("Unsupported view dimension: ".concat(e.viewDimension, " with this webgl version: ").concat(this._renderer.context.webGLVersion));
                if (e.uploadMethodId === "cube" && (n.target = r.TEXTURE_CUBE_MAP), e.autoGenerateMipmaps && (this._renderer.context.supports.nonPowOf2mipmaps || e.isPowerOfTwo)) {
                    var i = Math.max(e.width, e.height);
                    e.mipLevelCount = Math.floor(Math.log2(i)) + 1;
                }
                return e._gpuData[this._renderer.uid] = n, this._managedTextures.add(e) && (e.on("update", this.onSourceUpdate, this), e.on("resize", this.onSourceUpdate, this), e.on("styleChange", this.onStyleChange, this), e.on("updateMipmaps", this.onUpdateMipmaps, this)), this.onSourceUpdate(e), this.updateStyle(e, !1), n;
            }
        },
        {
            key: "onStyleChange",
            value: function onStyleChange(e) {
                this.updateStyle(e, !1);
            }
        },
        {
            key: "updateStyle",
            value: function updateStyle(e, r) {
                var n = this._gl, s = this.getGlSource(e);
                n.bindTexture(s.target, s.texture), this._boundTextures[this._activeTextureLocation] = e, Y(e.style, n, e.mipLevelCount > 1, this._renderer.context.extensions.anisotropicFiltering, "texParameteri", s.target, !this._renderer.context.supports.nonPowOf2wrapping && !e.isPowerOfTwo, r);
            }
        },
        {
            key: "onSourceUnload",
            value: function onSourceUnload(e) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                var n = e._gpuData[this._renderer.uid];
                n && (r || (this.unbind(e), this._gl.deleteTexture(n.texture)), e.off("update", this.onSourceUpdate, this), e.off("resize", this.onSourceUpdate, this), e.off("styleChange", this.onStyleChange, this), e.off("updateMipmaps", this.onUpdateMipmaps, this));
            }
        },
        {
            key: "onSourceUpdate",
            value: function onSourceUpdate(e) {
                var r = this._gl, n = this.getGlSource(e);
                r.bindTexture(n.target, n.texture), this._boundTextures[this._activeTextureLocation] = e;
                var s = e.alphaMode === "premultiply-alpha-on-upload";
                if (this._premultiplyAlpha !== s && (this._premultiplyAlpha = s, r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s)), this._uploads[e.uploadMethodId]) this._uploads[e.uploadMethodId].upload(e, n, r, this._renderer.context.webGLVersion);
                else if (n.target === r.TEXTURE_2D) this._initEmptyTexture2D(n, e);
                else if (n.target === r.TEXTURE_2D_ARRAY) this._initEmptyTexture2DArray(n, e);
                else if (n.target === r.TEXTURE_CUBE_MAP) this._initEmptyTextureCube(n, e);
                else throw new Error("[GlTextureSystem] Unsupported texture target for empty allocation.");
                this._applyMipRange(n, e), e.autoGenerateMipmaps && e.mipLevelCount > 1 && this.onUpdateMipmaps(e, !1);
            }
        },
        {
            key: "onUpdateMipmaps",
            value: function onUpdateMipmaps(e) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
                r && this.bindSource(e, 0);
                var n = this.getGlSource(e);
                this._gl.generateMipmap(n.target);
            }
        },
        {
            key: "_initEmptyTexture2D",
            value: function _initEmptyTexture2D(e, r) {
                var n = this._gl;
                n.texImage2D(n.TEXTURE_2D, 0, e.internalFormat, r.pixelWidth, r.pixelHeight, 0, e.format, e.type, null);
                var s = Math.max(r.pixelWidth >> 1, 1), i = Math.max(r.pixelHeight >> 1, 1);
                for(var a = 1; a < r.mipLevelCount; a++)n.texImage2D(n.TEXTURE_2D, a, e.internalFormat, s, i, 0, e.format, e.type, null), s = Math.max(s >> 1, 1), i = Math.max(i >> 1, 1);
            }
        },
        {
            key: "_initEmptyTexture2DArray",
            value: function _initEmptyTexture2DArray(e, r) {
                if (this._renderer.context.webGLVersion !== 2) throw new Error("[GlTextureSystem] TEXTURE_2D_ARRAY requires WebGL2.");
                var n = this._gl, s = Math.max(r.arrayLayerCount | 0, 1);
                n.texImage3D(n.TEXTURE_2D_ARRAY, 0, e.internalFormat, r.pixelWidth, r.pixelHeight, s, 0, e.format, e.type, null);
                var i = Math.max(r.pixelWidth >> 1, 1), a = Math.max(r.pixelHeight >> 1, 1);
                for(var o = 1; o < r.mipLevelCount; o++)n.texImage3D(n.TEXTURE_2D_ARRAY, o, e.internalFormat, i, a, s, 0, e.format, e.type, null), i = Math.max(i >> 1, 1), a = Math.max(a >> 1, 1);
            }
        },
        {
            key: "_initEmptyTextureCube",
            value: function _initEmptyTextureCube(e, r) {
                var n = this._gl, s = 6;
                for(var o = 0; o < s; o++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + o, 0, e.internalFormat, r.pixelWidth, r.pixelHeight, 0, e.format, e.type, null);
                var i = Math.max(r.pixelWidth >> 1, 1), a = Math.max(r.pixelHeight >> 1, 1);
                for(var o1 = 1; o1 < r.mipLevelCount; o1++){
                    for(var c = 0; c < s; c++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + c, o1, e.internalFormat, i, a, 0, e.format, e.type, null);
                    i = Math.max(i >> 1, 1), a = Math.max(a >> 1, 1);
                }
            }
        },
        {
            key: "_applyMipRange",
            value: function _applyMipRange(e, r) {
                if (this._renderer.context.webGLVersion !== 2 || r.mipLevelCount <= 1) return;
                var n = this._gl, s = Math.max((r.mipLevelCount | 0) - 1, 0);
                n.texParameteri(e.target, n.TEXTURE_BASE_LEVEL, 0), n.texParameteri(e.target, n.TEXTURE_MAX_LEVEL, s);
            }
        },
        {
            key: "_initSampler",
            value: function _initSampler(e) {
                var r = this._gl, n = this._gl.createSampler();
                return this._glSamplers[e._resourceId] = n, Y(e, r, this._boundTextures[this._activeTextureLocation].mipLevelCount > 1, this._renderer.context.extensions.anisotropicFiltering, "samplerParameteri", n, !1, !0), this._glSamplers[e._resourceId];
            }
        },
        {
            key: "_getGlSampler",
            value: function _getGlSampler(e) {
                return this._glSamplers[e._resourceId] || this._initSampler(e);
            }
        },
        {
            key: "getGlSource",
            value: function getGlSource(e) {
                return e._gcLastUsed = this._renderer.gc.now, e._gpuData[this._renderer.uid] || this._initSource(e);
            }
        },
        {
            key: "generateCanvas",
            value: function generateCanvas(e) {
                var _this_getPixels = this.getPixels(e), r = _this_getPixels.pixels, n = _this_getPixels.width, s = _this_getPixels.height, i = R.get().createCanvas();
                i.width = n, i.height = s;
                var a = i.getContext("2d");
                if (a) {
                    var o = a.createImageData(n, s);
                    o.data.set(r), a.putImageData(o, 0, 0);
                }
                return i;
            }
        },
        {
            key: "getPixels",
            value: function getPixels(e) {
                var r = e.source.resolution, n = e.frame, s = Math.max(Math.round(n.width * r), 1), i = Math.max(Math.round(n.height * r), 1), a = new Uint8Array(Mt * s * i), o = this._renderer, c = o.renderTarget.getRenderTarget(e), u = o.renderTarget.getGpuRenderTarget(c), _ = o.gl;
                return _.bindFramebuffer(_.FRAMEBUFFER, u.resolveTargetFramebuffer), _.readPixels(Math.round(n.x * r), Math.round(n.y * r), s, i, _.RGBA, _.UNSIGNED_BYTE, a), {
                    pixels: new Uint8ClampedArray(a.buffer),
                    width: s,
                    height: i
                };
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._managedTextures.destroy(), this._glSamplers = null, this._boundTextures = null, this._boundSamplers = null, this._mapFormatToInternalFormat = null, this._mapFormatToType = null, this._mapFormatToFormat = null, this._uploads = null, this._renderer = null;
            }
        },
        {
            key: "resetState",
            value: function resetState() {
                this._activeTextureLocation = -1, this._boundTextures.fill(S.EMPTY.source), this._boundSamplers = Object.create(null);
                var e = this._gl;
                this._premultiplyAlpha = !1, e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiplyAlpha);
            }
        }
    ]);
    return Re;
}();
Re.extension = {
    type: [
        d.WebGLSystem
    ],
    name: "texture"
};
var ge = /*#__PURE__*/ function() {
    "use strict";
    function ge() {
        _class_call_check(this, ge);
    }
    _create_class(ge, [
        {
            key: "contextChange",
            value: function contextChange(e) {
                var r = new M({
                    uColor: {
                        value: new Float32Array([
                            1,
                            1,
                            1,
                            1
                        ]),
                        type: "vec4<f32>"
                    },
                    uTransformMatrix: {
                        value: new Q,
                        type: "mat3x3<f32>"
                    },
                    uRound: {
                        value: 0,
                        type: "f32"
                    }
                }), n = e.limits.maxBatchableTextures, s = Z({
                    name: "graphics",
                    bits: [
                        Ie,
                        Ge(n),
                        ee,
                        J
                    ]
                });
                this.shader = new P({
                    glProgram: s,
                    resources: {
                        localUniforms: r,
                        batchSamplers: Ue(n)
                    }
                });
            }
        },
        {
            key: "execute",
            value: function execute(e, r) {
                var n = r.context, s = n.customShader || this.shader, i = e.renderer, a = i.graphicsContext, _a_getContextRenderData = a.getContextRenderData(n), o = _a_getContextRenderData.batcher, c = _a_getContextRenderData.instructions;
                s.groups[0] = i.globalUniforms.bindGroup, i.state.set(e.state), i.shader.bind(s), i.geometry.bind(o.geometry, s.glProgram);
                var u = c.instructions;
                for(var _ = 0; _ < c.instructionSize; _++){
                    var f = u[_];
                    if (f.size) {
                        for(var h = 0; h < f.textures.count; h++)i.texture.bind(f.textures.textures[h], h);
                        i.geometry.draw(f.topology, f.size, f.start);
                    }
                }
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.shader.destroy(!0), this.shader = null;
            }
        }
    ]);
    return ge;
}();
ge.extension = {
    type: [
        d.WebGLPipesAdaptor
    ],
    name: "graphics"
};
var Te = /*#__PURE__*/ function() {
    "use strict";
    function Te() {
        _class_call_check(this, Te);
    }
    _create_class(Te, [
        {
            key: "init",
            value: function init() {
                var e = Z({
                    name: "mesh",
                    bits: [
                        ee,
                        Me,
                        J
                    ]
                });
                this._shader = new P({
                    glProgram: e,
                    resources: {
                        uTexture: S.EMPTY.source,
                        textureUniforms: {
                            uTextureMatrix: {
                                type: "mat3x3<f32>",
                                value: new Q
                            }
                        }
                    }
                });
            }
        },
        {
            key: "execute",
            value: function execute(e, r) {
                var n = e.renderer;
                var s = r._shader;
                if (s) {
                    if (!s.glProgram) {
                        b("Mesh shader has no glProgram", r.shader);
                        return;
                    }
                } else {
                    s = this._shader;
                    var i = r.texture, a = i.source;
                    s.resources.uTexture = a, s.resources.uSampler = a.style, s.resources.textureUniforms.uniforms.uTextureMatrix = i.textureMatrix.mapCoord;
                }
                s.groups[100] = n.globalUniforms.bindGroup, s.groups[101] = e.localUniformsBindGroup, n.encoder.draw({
                    geometry: r._geometry,
                    shader: s,
                    state: r.state
                });
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._shader.destroy(!0), this._shader = null;
            }
        }
    ]);
    return Te;
}();
Te.extension = {
    type: [
        d.WebGLPipesAdaptor
    ],
    name: "mesh"
};
var Lt = _to_consumable_array(He).concat([
    he,
    qe,
    je,
    ue,
    ne,
    Re,
    le,
    ie,
    be,
    Ee,
    ce,
    gt,
    _e,
    oe
]), wt = _to_consumable_array(Ve), Ht = [
    re,
    Te,
    ge
], xe = [], ve = [], Ae = [];
A.handleByNamedList(d.WebGLSystem, xe);
A.handleByNamedList(d.WebGLPipes, ve);
A.handleByNamedList(d.WebGLPipesAdaptor, Ae);
(_A = A).add.apply(_A, _to_consumable_array(Lt).concat(_to_consumable_array(wt), _to_consumable_array(Ht)));
var zt = /*#__PURE__*/ function(Be) {
    "use strict";
    _inherits(zt, Be);
    function zt() {
        _class_call_check(this, zt);
        var e = {
            name: "webgl",
            type: ye.WEBGL,
            systems: xe,
            renderPipes: ve,
            renderPipeAdaptors: Ae
        };
        return _call_super(this, zt, [
            e
        ]);
    }
    return zt;
}(Be);
export { zt as WebGLRenderer };
