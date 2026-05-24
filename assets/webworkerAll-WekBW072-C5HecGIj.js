function _instanceof(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
    return (_is_native_reflect_construct = function _is_native_reflect_construct() {
        return !!result;
    })();
}
import { E as _, v as B, e as w, b as O, B as A, a7 as T, n as b, M as k, R as M, w as E, c as U, dP as z, am as V, x as Y, a9 as P } from "./index-wSLjxAso.js";
import { c as X } from "./canvasUtils-B4DAHqdl-CTb8ifHP.js";
import { F as q } from "./Filter-D2TFakTj-BL2pn75X.js";
import "./react-vendor-Bcb6ewdu.js";
import "./markdown-vendor-CHTmL0iO.js";
import "./utils-vendor-D8_MVJCX.js";
import "./report-vendor-COKl-wDg.js";
var v = new k;
function G(g, e) {
    e.clear();
    var t = e.matrix;
    for(var r = 0; r < g.length; r++){
        var _i_renderGroup;
        var i = g[r];
        if (i.globalDisplayStatus < 7) continue;
        var s = (_i_renderGroup = i.renderGroup) !== null && _i_renderGroup !== void 0 ? _i_renderGroup : i.parentRenderGroup;
        (s === null || s === void 0 ? void 0 : s.isCachedAsTexture) ? e.matrix = v.copyFrom(s.textureOffsetInverseTransform).append(i.worldTransform) : (s === null || s === void 0 ? void 0 : s._parentCacheAsTextureRenderGroup) ? e.matrix = v.copyFrom(s._parentCacheAsTextureRenderGroup.inverseWorldTransform).append(i.groupTransform) : e.matrix = i.worldTransform, e.addBounds(i.bounds);
    }
    return e.matrix = t, e;
}
function y(g) {
    return typeof g.getCanvasFilterString == "function";
}
var L = function L() {
    "use strict";
    _class_call_check(this, L);
    this.skip = !1, this.useClip = !1, this.filters = null, this.container = null, this.bounds = new P, this.cssFilterString = "";
};
var R = /*#__PURE__*/ function() {
    "use strict";
    function R(e) {
        _class_call_check(this, R);
        this._filterStack = [], this._filterStackIndex = 0, this._savedStates = [], this._alphaMultiplier = 1, this._warnedFilterTypes = new Set, this.renderer = e;
    }
    _create_class(R, [
        {
            key: "push",
            value: function push(e) {
                var t = this._pushFilterFrame(), r = e.filterEffect.filters;
                if (t.skip = !1, t.useClip = !1, t.filters = r, t.container = e.container, t.cssFilterString = "", r.every(function(o) {
                    return !o.enabled;
                })) {
                    t.skip = !0;
                    return;
                }
                var i = [], s = 1;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var o = _step.value;
                        if (!o.enabled) continue;
                        if (!y(o)) {
                            this._warnUnsupportedFilter(o);
                            continue;
                        }
                        var l = o.getCanvasFilterString();
                        if (l === null) {
                            this._warnUnsupportedFilter(o);
                            continue;
                        }
                        l && i.push(l);
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
                if (i.length === 0 && s === 1) {
                    t.skip = !0;
                    return;
                }
                t.cssFilterString = i.join(" "), this._calculateFilterArea(e, t.bounds), t.useClip = !!e.filterEffect.filterArea;
                var n = this.renderer.canvasContext.activeContext, a = n.filter || "none";
                if (this._savedStates.push({
                    filter: a,
                    alphaMultiplier: this._alphaMultiplier
                }), t.useClip && Number.isFinite(t.bounds.width) && Number.isFinite(t.bounds.height) && t.bounds.width > 0 && t.bounds.height > 0) {
                    var o1 = this.renderer.canvasContext.activeResolution || 1;
                    n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.rect(t.bounds.x * o1, t.bounds.y * o1, t.bounds.width * o1, t.bounds.height * o1), n.clip();
                } else t.useClip = !1;
                t.cssFilterString && (n.filter = a !== "none" ? "".concat(a, " ").concat(t.cssFilterString) : t.cssFilterString);
            }
        },
        {
            key: "pop",
            value: function pop() {
                var e = this._popFilterFrame();
                if (e.skip) return;
                var t = this._savedStates.pop();
                if (!t) return;
                var r = this.renderer.canvasContext.activeContext;
                e.useClip ? r.restore() : r.filter = t.filter, this._alphaMultiplier = t.alphaMultiplier;
            }
        },
        {
            key: "generateFilteredTexture",
            value: function generateFilteredTexture(param) {
                var e = param.texture, t = param.filters;
                var _ref, _e_source__resolution;
                if (!(t === null || t === void 0 ? void 0 : t.length) || t.every(function(d) {
                    return !d.enabled;
                })) return e;
                var r = [], i = 1;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var d = _step.value;
                        if (!d.enabled) continue;
                        if (!y(d)) {
                            this._warnUnsupportedFilter(d);
                            continue;
                        }
                        var h = d.getCanvasFilterString();
                        if (h === null) {
                            this._warnUnsupportedFilter(d);
                            continue;
                        }
                        h && r.push(h);
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
                if (r.length === 0 && i === 1) return e;
                var s = X.getCanvasSource(e);
                if (!s) return e;
                var n = e.frame, a = (_ref = (_e_source__resolution = e.source._resolution) !== null && _e_source__resolution !== void 0 ? _e_source__resolution : e.source.resolution) !== null && _ref !== void 0 ? _ref : 1, o = n.width, l = n.height, f = U.getOptimalCanvasAndContext(o, l, a), c = f.canvas, u = f.context;
                u.setTransform(1, 0, 0, 1, 0, 0), u.clearRect(0, 0, c.width, c.height), r.length && (u.filter = r.join(" "));
                var p = n.x * a, m = n.y * a, x = o * a, F = l * a;
                return u.drawImage(s, p, m, x, F, 0, 0, x, F), u.filter = "none", u.globalAlpha = 1, z(c, o, l, a);
            }
        },
        {
            key: "_calculateFilterArea",
            value: function _calculateFilterArea(e, t) {
                if (e.renderables ? G(e.renderables, t) : e.filterEffect.filterArea ? (t.clear(), t.addRect(e.filterEffect.filterArea), t.applyMatrix(e.container.worldTransform)) : e.container.getFastGlobalBounds(!0, t), e.container) {
                    var _this;
                    var i = (_this = e.container.renderGroup || e.container.parentRenderGroup) === null || _this === void 0 ? void 0 : _this.cacheToLocalTransform;
                    i && t.applyMatrix(i);
                }
            }
        },
        {
            key: "_warnUnsupportedFilter",
            value: function _warnUnsupportedFilter(e) {
                var _e_constructor;
                var t = (e === null || e === void 0 ? void 0 : (_e_constructor = e.constructor) === null || _e_constructor === void 0 ? void 0 : _e_constructor.name) || "Filter";
                this._warnedFilterTypes.has(t) || (this._warnedFilterTypes.add(t), console.warn('CanvasRenderer: filter "'.concat(t, '" is not supported in Canvas2D and will be skipped.')));
            }
        },
        {
            key: "alphaMultiplier",
            get: function get() {
                return this._alphaMultiplier;
            }
        },
        {
            key: "_pushFilterFrame",
            value: function _pushFilterFrame() {
                var e = this._filterStack[this._filterStackIndex];
                return e || (e = this._filterStack[this._filterStackIndex] = new L), this._filterStackIndex++, e;
            }
        },
        {
            key: "_popFilterFrame",
            value: function _popFilterFrame() {
                return this._filterStackIndex <= 0 ? this._filterStack[0] : (this._filterStackIndex--, this._filterStack[this._filterStackIndex]);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._filterStack = null, this._savedStates = null, this._warnedFilterTypes = null, this._alphaMultiplier = 1;
            }
        }
    ]);
    return R;
}();
R.extension = {
    type: [
        _.CanvasSystem
    ],
    name: "filter"
};
var W = "in vec2 aPosition;\nout vec2 vTextureCoord;\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n    \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n", j = "in vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\nvoid main() {\n    finalColor = texture(uTexture, vTextureCoord);\n}\n", S = "struct GlobalFilterUniforms {\n  uInputSize: vec4<f32>,\n  uInputPixel: vec4<f32>,\n  uInputClamp: vec4<f32>,\n  uOutputFrame: vec4<f32>,\n  uGlobalFrame: vec4<f32>,\n  uOutputTexture: vec4<f32>,\n};\n\n@group(0) @binding(0) var <uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler: sampler;\n\nstruct VSOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) uv: vec2<f32>\n};\n\nfn filterVertexPosition(aPosition: vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0 * gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord(aPosition: vec2<f32>) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition: vec2<f32>,\n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n) -> @location(0) vec4<f32> {\n    return textureSample(uTexture, uSampler, uv);\n}\n";
var N = /*#__PURE__*/ function(q) {
    "use strict";
    _inherits(N, q);
    function N() {
        _class_call_check(this, N);
        var e = V.from({
            vertex: {
                source: S,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: S,
                entryPoint: "mainFragment"
            },
            name: "passthrough-filter"
        }), t = Y.from({
            vertex: W,
            fragment: j,
            name: "passthrough-filter"
        });
        return _call_super(this, N, [
            {
                gpuProgram: e,
                glProgram: t
            }
        ]);
    }
    return N;
}(q);
var C = /*#__PURE__*/ function() {
    "use strict";
    function C(e) {
        _class_call_check(this, C);
        this._renderer = e;
    }
    _create_class(C, [
        {
            key: "push",
            value: function push(e, t, r) {
                this._renderer.renderPipes.batch.break(r), r.add({
                    renderPipeId: "filter",
                    canBundle: !1,
                    action: "pushFilter",
                    container: t,
                    filterEffect: e
                });
            }
        },
        {
            key: "pop",
            value: function pop(e, t, r) {
                this._renderer.renderPipes.batch.break(r), r.add({
                    renderPipeId: "filter",
                    action: "popFilter",
                    canBundle: !1
                });
            }
        },
        {
            key: "execute",
            value: function execute(e) {
                e.action === "pushFilter" ? this._renderer.filter.push(e) : e.action === "popFilter" && this._renderer.filter.pop();
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null;
            }
        }
    ]);
    return C;
}();
C.extension = {
    type: [
        _.WebGLPipes,
        _.WebGPUPipes,
        _.CanvasPipes
    ],
    name: "filter"
};
var $ = new B({
    attributes: {
        aPosition: {
            buffer: new Float32Array([
                0,
                0,
                1,
                0,
                1,
                1,
                0,
                1
            ]),
            format: "float32x2",
            stride: 8,
            offset: 0
        }
    },
    indexBuffer: new Uint32Array([
        0,
        1,
        2,
        0,
        2,
        3
    ])
});
var H = function H() {
    "use strict";
    _class_call_check(this, H);
    this.skip = !1, this.inputTexture = null, this.backTexture = null, this.filters = null, this.bounds = new P, this.container = null, this.blendRequired = !1, this.outputRenderSurface = null, this.globalFrame = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }, this.firstEnabledIndex = -1, this.lastEnabledIndex = -1;
};
var I = /*#__PURE__*/ function() {
    "use strict";
    function I(e) {
        _class_call_check(this, I);
        this._filterStackIndex = 0, this._filterStack = [], this._filterGlobalUniforms = new O({
            uInputSize: {
                value: new Float32Array(4),
                type: "vec4<f32>"
            },
            uInputPixel: {
                value: new Float32Array(4),
                type: "vec4<f32>"
            },
            uInputClamp: {
                value: new Float32Array(4),
                type: "vec4<f32>"
            },
            uOutputFrame: {
                value: new Float32Array(4),
                type: "vec4<f32>"
            },
            uGlobalFrame: {
                value: new Float32Array(4),
                type: "vec4<f32>"
            },
            uOutputTexture: {
                value: new Float32Array(4),
                type: "vec4<f32>"
            }
        }), this._globalFilterBindGroup = new A({}), this.renderer = e;
    }
    _create_class(I, [
        {
            key: "activeBackTexture",
            get: function get() {
                var _this__activeFilterData;
                return (_this__activeFilterData = this._activeFilterData) === null || _this__activeFilterData === void 0 ? void 0 : _this__activeFilterData.backTexture;
            }
        },
        {
            key: "push",
            value: function push(e) {
                var t = this.renderer, r = e.filterEffect.filters, i = this._pushFilterData();
                i.skip = !1, i.filters = r, i.container = e.container, i.outputRenderSurface = t.renderTarget.renderSurface;
                var s = t.renderTarget.renderTarget.colorTexture.source, n = s.resolution, a = s.antialias;
                if (r.every(function(p) {
                    return !p.enabled;
                })) {
                    i.skip = !0;
                    return;
                }
                var o = i.bounds;
                if (this._calculateFilterArea(e, o), this._calculateFilterBounds(i, t.renderTarget.rootViewPort, a, n, 1), i.skip) return;
                var l = this._getPreviousFilterData(), f = this._findFilterResolution(n);
                var c = 0, u = 0;
                l && (c = l.bounds.minX, u = l.bounds.minY), this._calculateGlobalFrame(i, c, u, f, s.width, s.height), this._setupFilterTextures(i, o, t, l);
            }
        },
        {
            key: "generateFilteredTexture",
            value: function generateFilteredTexture(param) {
                var e = param.texture, t = param.filters;
                var r = this._pushFilterData();
                this._activeFilterData = r, r.skip = !1, r.filters = t;
                var i = e.source, s = i.resolution, n = i.antialias;
                if (t.every(function(p) {
                    return !p.enabled;
                })) return r.skip = !0, e;
                var a = r.bounds;
                if (a.addRect(e.frame), this._calculateFilterBounds(r, a.rectangle, n, s, 0), r.skip) return e;
                var o = s;
                this._calculateGlobalFrame(r, 0, 0, o, i.width, i.height), r.outputRenderSurface = T.getOptimalTexture(a.width, a.height, r.resolution, r.antialias), r.backTexture = b.EMPTY, r.inputTexture = e, this.renderer.renderTarget.finishRenderPass(), this._applyFiltersToTexture(r, !0);
                var u = r.outputRenderSurface;
                return u.source.alphaMode = "premultiplied-alpha", u;
            }
        },
        {
            key: "pop",
            value: function pop() {
                var e = this.renderer, t = this._popFilterData();
                t.skip || (e.globalUniforms.pop(), e.renderTarget.finishRenderPass(), this._activeFilterData = t, this._applyFiltersToTexture(t, !1), t.blendRequired && T.returnTexture(t.backTexture), T.returnTexture(t.inputTexture));
            }
        },
        {
            key: "getBackTexture",
            value: function getBackTexture(e, t, r) {
                var i = e.colorTexture.source._resolution, s = T.getOptimalTexture(t.width, t.height, i, !1);
                var n = t.minX, a = t.minY;
                r && (n -= r.minX, a -= r.minY), n = Math.floor(n * i), a = Math.floor(a * i);
                var o = Math.ceil(t.width * i), l = Math.ceil(t.height * i);
                return this.renderer.renderTarget.copyToTexture(e, s, {
                    x: n,
                    y: a
                }, {
                    width: o,
                    height: l
                }, {
                    x: 0,
                    y: 0
                }), s;
            }
        },
        {
            key: "applyFilter",
            value: function applyFilter(e, t, r, i) {
                var s = this.renderer, n = this._activeFilterData, o = n.outputRenderSurface === r, l = s.renderTarget.rootRenderTarget.colorTexture.source._resolution, f = this._findFilterResolution(l);
                var c = 0, u = 0;
                if (o) {
                    var m = this._findPreviousFilterOffset();
                    c = m.x, u = m.y;
                }
                this._updateFilterUniforms(t, r, n, c, u, f, o, i);
                var p = e.enabled ? e : this._getPassthroughFilter();
                this._setupBindGroupsAndRender(p, t, s);
            }
        },
        {
            key: "calculateSpriteMatrix",
            value: function calculateSpriteMatrix(e, t) {
                var r = this._activeFilterData, i = e.set(r.inputTexture._source.width, 0, 0, r.inputTexture._source.height, r.bounds.minX, r.bounds.minY), s = t.worldTransform.copyTo(k.shared), n = t.renderGroup || t.parentRenderGroup;
                return n && n.cacheToLocalTransform && s.prepend(n.cacheToLocalTransform), s.invert(), i.prepend(s), i.scale(1 / t.texture.orig.width, 1 / t.texture.orig.height), i.translate(t.anchor.x, t.anchor.y), i;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this__passthroughFilter;
                (_this__passthroughFilter = this._passthroughFilter) === null || _this__passthroughFilter === void 0 ? void 0 : _this__passthroughFilter.destroy(!0), this._passthroughFilter = null;
            }
        },
        {
            key: "_getPassthroughFilter",
            value: function _getPassthroughFilter() {
                var _this__passthroughFilter;
                return (_this__passthroughFilter = this._passthroughFilter) !== null && _this__passthroughFilter !== void 0 ? _this__passthroughFilter : this._passthroughFilter = new N, this._passthroughFilter;
            }
        },
        {
            key: "_setupBindGroupsAndRender",
            value: function _setupBindGroupsAndRender(e, t, r) {
                if (r.renderPipes.uniformBatch) {
                    var i = r.renderPipes.uniformBatch.getUboResource(this._filterGlobalUniforms);
                    this._globalFilterBindGroup.setResource(i, 0);
                } else this._globalFilterBindGroup.setResource(this._filterGlobalUniforms, 0);
                this._globalFilterBindGroup.setResource(t.source, 1), this._globalFilterBindGroup.setResource(t.source.style, 2), e.groups[0] = this._globalFilterBindGroup, r.encoder.draw({
                    geometry: $,
                    shader: e,
                    state: e._state,
                    topology: "triangle-list"
                }), r.type === M.WEBGL && r.renderTarget.finishRenderPass();
            }
        },
        {
            key: "_setupFilterTextures",
            value: function _setupFilterTextures(e, t, r, i) {
                if (e.backTexture = b.EMPTY, e.inputTexture = T.getOptimalTexture(t.width, t.height, e.resolution, e.antialias), e.blendRequired) {
                    r.renderTarget.finishRenderPass();
                    var s = r.renderTarget.getRenderTarget(e.outputRenderSurface);
                    e.backTexture = this.getBackTexture(s, t, i === null || i === void 0 ? void 0 : i.bounds);
                }
                r.renderTarget.bind(e.inputTexture, !0), r.globalUniforms.push({
                    offset: t
                });
            }
        },
        {
            key: "_calculateGlobalFrame",
            value: function _calculateGlobalFrame(e, t, r, i, s, n) {
                var a = e.globalFrame;
                a.x = t * i, a.y = r * i, a.width = s * i, a.height = n * i;
            }
        },
        {
            key: "_updateFilterUniforms",
            value: function _updateFilterUniforms(e, t, r, i, s, n, a, o) {
                var l = this._filterGlobalUniforms.uniforms, f = l.uOutputFrame, c = l.uInputSize, u = l.uInputPixel, p = l.uInputClamp, m = l.uGlobalFrame, x = l.uOutputTexture;
                a ? (f[0] = r.bounds.minX - i, f[1] = r.bounds.minY - s) : (f[0] = 0, f[1] = 0), f[2] = e.frame.width, f[3] = e.frame.height, c[0] = e.source.width, c[1] = e.source.height, c[2] = 1 / c[0], c[3] = 1 / c[1], u[0] = e.source.pixelWidth, u[1] = e.source.pixelHeight, u[2] = 1 / u[0], u[3] = 1 / u[1], p[0] = .5 * u[2], p[1] = .5 * u[3], p[2] = e.frame.width * c[2] - .5 * u[2], p[3] = e.frame.height * c[3] - .5 * u[3];
                var F = this.renderer.renderTarget.rootRenderTarget.colorTexture;
                m[0] = i * n, m[1] = s * n, m[2] = F.source.width * n, m[3] = F.source.height * n, _instanceof1(t, b) && (t.source.resource = null);
                var d = this.renderer.renderTarget.getRenderTarget(t);
                this.renderer.renderTarget.bind(t, !!o), _instanceof1(t, b) ? (x[0] = t.frame.width, x[1] = t.frame.height) : (x[0] = d.width, x[1] = d.height), x[2] = d.isRoot ? -1 : 1, this._filterGlobalUniforms.update();
            }
        },
        {
            key: "_findFilterResolution",
            value: function _findFilterResolution(e) {
                var t = this._filterStackIndex - 1;
                for(; t > 0 && this._filterStack[t].skip;)--t;
                return t > 0 && this._filterStack[t].inputTexture ? this._filterStack[t].inputTexture.source._resolution : e;
            }
        },
        {
            key: "_findPreviousFilterOffset",
            value: function _findPreviousFilterOffset() {
                var e = 0, t = 0, r = this._filterStackIndex;
                for(; r > 0;){
                    r--;
                    var i = this._filterStack[r];
                    if (!i.skip) {
                        e = i.bounds.minX, t = i.bounds.minY;
                        break;
                    }
                }
                return {
                    x: e,
                    y: t
                };
            }
        },
        {
            key: "_calculateFilterArea",
            value: function _calculateFilterArea(e, t) {
                if (e.renderables ? G(e.renderables, t) : e.filterEffect.filterArea ? (t.clear(), t.addRect(e.filterEffect.filterArea), t.applyMatrix(e.container.worldTransform)) : e.container.getFastGlobalBounds(!0, t), e.container) {
                    var i = (e.container.renderGroup || e.container.parentRenderGroup).cacheToLocalTransform;
                    i && t.applyMatrix(i);
                }
            }
        },
        {
            key: "_applyFiltersToTexture",
            value: function _applyFiltersToTexture(e, t) {
                var r = e.inputTexture, i = e.bounds, s = e.filters, n = e.firstEnabledIndex, a = e.lastEnabledIndex;
                if (this._globalFilterBindGroup.setResource(r.source.style, 2), this._globalFilterBindGroup.setResource(e.backTexture.source, 3), n === a) s[n].apply(this, r, e.outputRenderSurface, t);
                else {
                    var o = e.inputTexture;
                    var l = T.getOptimalTexture(i.width, i.height, o.source._resolution, !1);
                    var f = l;
                    for(var c = n; c < a; c++){
                        var u = s[c];
                        if (!u.enabled) continue;
                        u.apply(this, o, f, !0);
                        var p = o;
                        o = f, f = p;
                    }
                    s[a].apply(this, o, e.outputRenderSurface, t), T.returnTexture(l);
                }
            }
        },
        {
            key: "_calculateFilterBounds",
            value: function _calculateFilterBounds(e, t, r, i, s) {
                var n = this.renderer, a = e.bounds, o = e.filters;
                var l = 1 / 0, f = 0, c = !0, u = !1, p = !1, m = !0, x = -1, F = -1;
                for(var d = 0; d < o.length; d++){
                    var _ref;
                    var _n_backBuffer;
                    var h = o[d];
                    if (!h.enabled) continue;
                    if (x === -1 && (x = d), F = d, l = Math.min(l, h.resolution === "inherit" ? i : h.resolution), f += h.padding, h.antialias === "off" ? c = !1 : h.antialias === "inherit" && c && (c = r), h.clipToViewport || (m = !1), !!!(h.compatibleRenderers & n.type)) {
                        p = !1;
                        break;
                    }
                    if (h.blendRequired && !((_ref = (_n_backBuffer = n.backBuffer) === null || _n_backBuffer === void 0 ? void 0 : _n_backBuffer.useBackBuffer) !== null && _ref !== void 0 ? _ref : !0)) {
                        E("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options."), p = !1;
                        break;
                    }
                    p = !0, u || (u = h.blendRequired);
                }
                if (!p) {
                    e.skip = !0;
                    return;
                }
                if (m && a.fitBounds(0, t.width / i, 0, t.height / i), a.scale(l).ceil().scale(1 / l).pad((f | 0) * s), !a.isPositive) {
                    e.skip = !0;
                    return;
                }
                e.antialias = c, e.resolution = l, e.blendRequired = u, e.firstEnabledIndex = x, e.lastEnabledIndex = F;
            }
        },
        {
            key: "_popFilterData",
            value: function _popFilterData() {
                return this._filterStackIndex--, this._filterStack[this._filterStackIndex];
            }
        },
        {
            key: "_getPreviousFilterData",
            value: function _getPreviousFilterData() {
                var e, t = this._filterStackIndex - 1;
                for(; t > 0 && (t--, e = this._filterStack[t], !!e.skip););
                return e;
            }
        },
        {
            key: "_pushFilterData",
            value: function _pushFilterData() {
                var e = this._filterStack[this._filterStackIndex];
                return e || (e = this._filterStack[this._filterStackIndex] = new H), this._filterStackIndex++, e;
            }
        }
    ]);
    return I;
}();
I.extension = {
    type: [
        _.WebGLSystem,
        _.WebGPUSystem
    ],
    name: "filter"
};
w.add(I, R);
w.add(C);
