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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function value() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var _S;
import { A as ce, R as de, S as L, E as l, e as S, D as B, G as A, u as he, f as pe, B as D, b as k, c as w, d as C, g as M, w as _imp_v, h as T, i as le, j as z, k as F, l as O, m as I, M as W, n as R, o as fe, p as ge, q as _imp_y, s as me, t as _e } from "./index-wSLjxAso.js";
import { U as be, G as ye, e as xe, B as Ge, l as Pe, t as Be, a as Se, c as Te, u as Ce } from "./BufferResource-7e1WzFsr-BM_4gFPH.js";
import { S as ve, a as Ue, R as we } from "./RenderTargetSystem-D76awkIv-BeDz7X5E.js";
import "./react-vendor-Bcb6ewdu.js";
import "./markdown-vendor-CHTmL0iO.js";
import "./utils-vendor-D8_MVJCX.js";
import "./report-vendor-COKl-wDg.js";
import "./Filter-D2TFakTj-BL2pn75X.js";
let v = _imp_v;
let y = _imp_y;
var G = L.for2d();
var H = /*#__PURE__*/ function() {
    "use strict";
    function H() {
        _class_call_check(this, H);
    }
    _create_class(H, [
        {
            key: "start",
            value: function start(e, t, r) {
                var s = e.renderer, i = s.encoder, n = r.gpuProgram;
                this._shader = r, this._geometry = t, i.setGeometry(t, n), G.blendMode = "normal", s.pipeline.getPipeline(t, n, G);
                var o = s.globalUniforms.bindGroup;
                i.resetBindGroup(1), i.setBindGroup(0, o, n);
            }
        },
        {
            key: "execute",
            value: function execute(e, t) {
                var r = this._shader.gpuProgram, s = e.renderer, i = s.encoder;
                if (!t.bindGroup) {
                    var u = t.textures;
                    t.bindGroup = z(u.textures, u.count, s.limits.maxBatchableTextures);
                }
                G.blendMode = t.blendMode;
                var n = s.bindGroup.getBindGroup(t.bindGroup, r, 1), o = s.pipeline.getPipeline(this._geometry, r, G, t.topology);
                t.bindGroup._touch(s.gc.now, s.tick), i.setPipeline(o), i.renderPassEncoder.setBindGroup(1, n), i.renderPassEncoder.drawIndexed(t.size, 1, t.start);
            }
        }
    ]);
    return H;
}();
H.extension = {
    type: [
        l.WebGPUPipesAdaptor
    ],
    name: "batch"
};
var V = /*#__PURE__*/ function() {
    "use strict";
    function V(e) {
        _class_call_check(this, V);
        this._hash = Object.create(null), this._renderer = e;
    }
    _create_class(V, [
        {
            key: "contextChange",
            value: function contextChange(e) {
                this._gpu = e;
            }
        },
        {
            key: "getBindGroup",
            value: function getBindGroup(e, t, r) {
                return e._updateKey(), this._hash[e._key] || this._createBindGroup(e, t, r);
            }
        },
        {
            key: "_createBindGroup",
            value: function _createBindGroup(e, t, r) {
                var s = this._gpu.device, i = t.layout[r], n = [], o = this._renderer;
                for(var g in i){
                    var _e_resources_g;
                    var h = (_e_resources_g = e.resources[g]) !== null && _e_resources_g !== void 0 ? _e_resources_g : e.resources[i[g]];
                    var p = void 0;
                    if (h._resourceType === "uniformGroup") {
                        var d = h;
                        o.ubo.updateUniformGroup(d);
                        var f = d.buffer;
                        p = {
                            buffer: o.buffer.getGPUBuffer(f),
                            offset: 0,
                            size: f.descriptor.size
                        };
                    } else if (h._resourceType === "buffer") {
                        var d1 = h;
                        p = {
                            buffer: o.buffer.getGPUBuffer(d1),
                            offset: 0,
                            size: d1.descriptor.size
                        };
                    } else if (h._resourceType === "bufferResource") {
                        var d2 = h;
                        p = {
                            buffer: o.buffer.getGPUBuffer(d2.buffer),
                            offset: d2.offset,
                            size: d2.size
                        };
                    } else if (h._resourceType === "textureSampler") {
                        var d3 = h;
                        p = o.texture.getGpuSampler(d3);
                    } else if (h._resourceType === "textureSource") {
                        var d4 = h;
                        p = o.texture.getTextureView(d4);
                    }
                    n.push({
                        binding: i[g],
                        resource: p
                    });
                }
                var u = o.shader.getProgramData(t).bindGroups[r], c = s.createBindGroup({
                    layout: u,
                    entries: n
                });
                return this._hash[e._key] = c, c;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._hash = null, this._renderer = null;
            }
        }
    ]);
    return V;
}();
V.extension = {
    type: [
        l.WebGPUSystem
    ],
    name: "bindGroup"
};
var Me = /*#__PURE__*/ function() {
    "use strict";
    function Me(e) {
        _class_call_check(this, Me);
        this.gpuBuffer = e;
    }
    _create_class(Me, [
        {
            key: "destroy",
            value: function destroy() {
                this.gpuBuffer.destroy(), this.gpuBuffer = null;
            }
        }
    ]);
    return Me;
}();
var N = /*#__PURE__*/ function() {
    "use strict";
    function N(e) {
        _class_call_check(this, N);
        this._renderer = e, this._managedBuffers = new A({
            renderer: e,
            type: "resource",
            onUnload: this.onBufferUnload.bind(this),
            name: "gpuBuffer"
        });
    }
    _create_class(N, [
        {
            key: "contextChange",
            value: function contextChange(e) {
                this._gpu = e;
            }
        },
        {
            key: "getGPUBuffer",
            value: function getGPUBuffer(e) {
                var _e__gpuData_this__renderer_uid;
                return e._gcLastUsed = this._renderer.gc.now, ((_e__gpuData_this__renderer_uid = e._gpuData[this._renderer.uid]) === null || _e__gpuData_this__renderer_uid === void 0 ? void 0 : _e__gpuData_this__renderer_uid.gpuBuffer) || this.createGPUBuffer(e);
            }
        },
        {
            key: "updateBuffer",
            value: function updateBuffer(e) {
                var t = this.getGPUBuffer(e), r = e.data;
                return e._updateID && r && (e._updateID = 0, this._gpu.device.queue.writeBuffer(t, 0, r.buffer, 0, (e._updateSize || r.byteLength) + 3 & -4)), t;
            }
        },
        {
            key: "destroyAll",
            value: function destroyAll() {
                this._managedBuffers.removeAll();
            }
        },
        {
            key: "onBufferUnload",
            value: function onBufferUnload(e) {
                e.off("update", this.updateBuffer, this), e.off("change", this.onBufferChange, this);
            }
        },
        {
            key: "createGPUBuffer",
            value: function createGPUBuffer(e) {
                var t = this._gpu.device.createBuffer(e.descriptor);
                return e._updateID = 0, e._resourceId = he("resource"), e.data && (pe(e.data.buffer, t.getMappedRange(), e.data.byteOffset, e.data.byteLength), t.unmap()), e._gpuData[this._renderer.uid] = new Me(t), this._managedBuffers.add(e) && (e.on("update", this.updateBuffer, this), e.on("change", this.onBufferChange, this)), t;
            }
        },
        {
            key: "onBufferChange",
            value: function onBufferChange(e) {
                this._managedBuffers.remove(e), e._updateID = 0, this.createGPUBuffer(e);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._managedBuffers.destroy(), this._renderer = null, this._gpu = null;
            }
        }
    ]);
    return N;
}();
N.extension = {
    type: [
        l.WebGPUSystem
    ],
    name: "buffer"
};
var Re = /*#__PURE__*/ function() {
    "use strict";
    function Re(param) {
        var e = param.minUniformOffsetAlignment;
        _class_call_check(this, Re);
        this._minUniformOffsetAlignment = 256, this.byteIndex = 0, this._minUniformOffsetAlignment = e, this.data = new Float32Array(65535);
    }
    _create_class(Re, [
        {
            key: "clear",
            value: function clear() {
                this.byteIndex = 0;
            }
        },
        {
            key: "addEmptyGroup",
            value: function addEmptyGroup(e) {
                if (e > this._minUniformOffsetAlignment / 4) throw new Error("UniformBufferBatch: array is too large: ".concat(e * 4));
                var t = this.byteIndex;
                var r = t + e * 4;
                if (r = Math.ceil(r / this._minUniformOffsetAlignment) * this._minUniformOffsetAlignment, r > this.data.length * 4) throw new Error("UniformBufferBatch: ubo batch got too big");
                return this.byteIndex = r, t;
            }
        },
        {
            key: "addGroup",
            value: function addGroup(e) {
                var t = this.addEmptyGroup(e.length);
                for(var r = 0; r < e.length; r++)this.data[t / 4 + r] = e[r];
                return t;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.data = null;
            }
        }
    ]);
    return Re;
}();
var j = /*#__PURE__*/ function() {
    "use strict";
    function j(e) {
        _class_call_check(this, j);
        this._colorMaskCache = 15, this._renderer = e;
    }
    _create_class(j, [
        {
            key: "setMask",
            value: function setMask(e) {
                this._colorMaskCache !== e && (this._colorMaskCache = e, this._renderer.pipeline.setColorMask(e));
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null, this._colorMaskCache = null;
            }
        }
    ]);
    return j;
}();
j.extension = {
    type: [
        l.WebGPUSystem
    ],
    name: "colorMask"
};
var U = /*#__PURE__*/ function() {
    "use strict";
    function U(e) {
        _class_call_check(this, U);
        this._renderer = e;
    }
    _create_class(U, [
        {
            key: "init",
            value: function init(e) {
                return _async_to_generator(function() {
                    var _this;
                    return _ts_generator(this, function(_state) {
                        _this = this;
                        return [
                            2,
                            this._initPromise ? this._initPromise : (this._initPromise = (e.gpu ? Promise.resolve(e.gpu) : this._createDeviceAndAdaptor(e)).then(function(t) {
                                _this.gpu = t, _this._renderer.runners.contextChange.emit(_this.gpu);
                            }), this._initPromise)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "contextChange",
            value: function contextChange(e) {
                this._renderer.gpu = e;
            }
        },
        {
            key: "_createDeviceAndAdaptor",
            value: function _createDeviceAndAdaptor(e) {
                return _async_to_generator(function() {
                    var t, r, s;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    B.get().getNavigator().gpu.requestAdapter({
                                        powerPreference: e.powerPreference,
                                        forceFallbackAdapter: e.forceFallbackAdapter
                                    })
                                ];
                            case 1:
                                t = _state.sent(), r = [
                                    "texture-compression-bc",
                                    "texture-compression-astc",
                                    "texture-compression-etc2"
                                ].filter(function(i) {
                                    return t.features.has(i);
                                });
                                return [
                                    4,
                                    t.requestDevice({
                                        requiredFeatures: r
                                    })
                                ];
                            case 2:
                                s = _state.sent();
                                return [
                                    2,
                                    {
                                        adapter: t,
                                        device: s
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.gpu = null, this._renderer = null;
            }
        }
    ]);
    return U;
}();
U.extension = {
    type: [
        l.WebGPUSystem
    ],
    name: "device"
};
U.defaultOptions = {
    powerPreference: void 0,
    forceFallbackAdapter: !1
};
var K = /*#__PURE__*/ function() {
    "use strict";
    function K(e) {
        _class_call_check(this, K);
        this._boundBindGroup = Object.create(null), this._boundVertexBuffer = Object.create(null), this._renderer = e;
    }
    _create_class(K, [
        {
            key: "renderStart",
            value: function renderStart() {
                var _this = this;
                this.commandFinished = new Promise(function(e) {
                    _this._resolveCommandFinished = e;
                }), this.commandEncoder = this._renderer.gpu.device.createCommandEncoder();
            }
        },
        {
            key: "beginRenderPass",
            value: function beginRenderPass(e) {
                this.endRenderPass(), this._clearCache(), this.renderPassEncoder = this.commandEncoder.beginRenderPass(e.descriptor);
            }
        },
        {
            key: "endRenderPass",
            value: function endRenderPass() {
                this.renderPassEncoder && this.renderPassEncoder.end(), this.renderPassEncoder = null;
            }
        },
        {
            key: "setViewport",
            value: function setViewport(e) {
                this.renderPassEncoder.setViewport(e.x, e.y, e.width, e.height, 0, 1);
            }
        },
        {
            key: "setPipelineFromGeometryProgramAndState",
            value: function setPipelineFromGeometryProgramAndState(e, t, r, s) {
                var i = this._renderer.pipeline.getPipeline(e, t, r, s);
                this.setPipeline(i);
            }
        },
        {
            key: "setPipeline",
            value: function setPipeline(e) {
                this._boundPipeline !== e && (this._boundPipeline = e, this.renderPassEncoder.setPipeline(e));
            }
        },
        {
            key: "_setVertexBuffer",
            value: function _setVertexBuffer(e, t) {
                this._boundVertexBuffer[e] !== t && (this._boundVertexBuffer[e] = t, this.renderPassEncoder.setVertexBuffer(e, this._renderer.buffer.updateBuffer(t)));
            }
        },
        {
            key: "_setIndexBuffer",
            value: function _setIndexBuffer(e) {
                if (this._boundIndexBuffer === e) return;
                this._boundIndexBuffer = e;
                var t = e.data.BYTES_PER_ELEMENT === 2 ? "uint16" : "uint32";
                this.renderPassEncoder.setIndexBuffer(this._renderer.buffer.updateBuffer(e), t);
            }
        },
        {
            key: "resetBindGroup",
            value: function resetBindGroup(e) {
                this._boundBindGroup[e] = null;
            }
        },
        {
            key: "setBindGroup",
            value: function setBindGroup(e, t, r) {
                if (this._boundBindGroup[e] === t) return;
                this._boundBindGroup[e] = t, t._touch(this._renderer.gc.now, this._renderer.tick);
                var s = this._renderer.bindGroup.getBindGroup(t, r, e);
                this.renderPassEncoder.setBindGroup(e, s);
            }
        },
        {
            key: "setGeometry",
            value: function setGeometry(e, t) {
                var r = this._renderer.pipeline.getBufferNamesToBind(e, t);
                for(var s in r)this._setVertexBuffer(parseInt(s, 10), e.attributes[r[s]].buffer);
                e.indexBuffer && this._setIndexBuffer(e.indexBuffer);
            }
        },
        {
            key: "_setShaderBindGroups",
            value: function _setShaderBindGroups(e, t) {
                for(var r in e.groups){
                    var s = e.groups[r];
                    t || this._syncBindGroup(s), this.setBindGroup(r, s, e.gpuProgram);
                }
            }
        },
        {
            key: "_syncBindGroup",
            value: function _syncBindGroup(e) {
                for(var t in e.resources){
                    var r = e.resources[t];
                    r.isUniformGroup && this._renderer.ubo.updateUniformGroup(r);
                }
            }
        },
        {
            key: "draw",
            value: function draw(e) {
                var t = e.geometry, r = e.shader, s = e.state, i = e.topology, n = e.size, o = e.start, u = e.instanceCount, c = e.skipSync;
                this.setPipelineFromGeometryProgramAndState(t, r.gpuProgram, s, i), this.setGeometry(t, r.gpuProgram), this._setShaderBindGroups(r, c), t.indexBuffer ? this.renderPassEncoder.drawIndexed(n || t.indexBuffer.data.length, u !== null && u !== void 0 ? u : t.instanceCount, o || 0) : this.renderPassEncoder.draw(n || t.getSize(), u !== null && u !== void 0 ? u : t.instanceCount, o || 0);
            }
        },
        {
            key: "finishRenderPass",
            value: function finishRenderPass() {
                this.renderPassEncoder && (this.renderPassEncoder.end(), this.renderPassEncoder = null);
            }
        },
        {
            key: "postrender",
            value: function postrender() {
                this.finishRenderPass(), this._gpu.device.queue.submit([
                    this.commandEncoder.finish()
                ]), this._resolveCommandFinished(), this.commandEncoder = null;
            }
        },
        {
            key: "restoreRenderPass",
            value: function restoreRenderPass() {
                var e = this._renderer.renderTarget.adaptor.getDescriptor(this._renderer.renderTarget.renderTarget, !1, [
                    0,
                    0,
                    0,
                    1
                ], this._renderer.renderTarget.mipLevel, this._renderer.renderTarget.layer);
                this.renderPassEncoder = this.commandEncoder.beginRenderPass(e);
                var t = this._boundPipeline, r = _object_spread({}, this._boundVertexBuffer), s = this._boundIndexBuffer, i = _object_spread({}, this._boundBindGroup);
                this._clearCache();
                var n = this._renderer.renderTarget.viewport;
                this.renderPassEncoder.setViewport(n.x, n.y, n.width, n.height, 0, 1), this.setPipeline(t);
                for(var o in r)this._setVertexBuffer(o, r[o]);
                for(var o1 in i)this.setBindGroup(o1, i[o1], null);
                this._setIndexBuffer(s);
            }
        },
        {
            key: "_clearCache",
            value: function _clearCache() {
                for(var e = 0; e < 16; e++)this._boundBindGroup[e] = null, this._boundVertexBuffer[e] = null;
                this._boundIndexBuffer = null, this._boundPipeline = null;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null, this._gpu = null, this._boundBindGroup = null, this._boundVertexBuffer = null, this._boundIndexBuffer = null, this._boundPipeline = null;
            }
        },
        {
            key: "contextChange",
            value: function contextChange(e) {
                this._gpu = e;
            }
        }
    ]);
    return K;
}();
K.extension = {
    type: [
        l.WebGPUSystem
    ],
    name: "encoder",
    priority: 1
};
var q = /*#__PURE__*/ function() {
    "use strict";
    function q(e) {
        _class_call_check(this, q);
        this._renderer = e;
    }
    _create_class(q, [
        {
            key: "contextChange",
            value: function contextChange() {
                this.maxTextures = this._renderer.device.gpu.device.limits.maxSampledTexturesPerShaderStage, this.maxBatchableTextures = this.maxTextures;
            }
        },
        {
            key: "destroy",
            value: function destroy() {}
        }
    ]);
    return q;
}();
q.extension = {
    type: [
        l.WebGPUSystem
    ],
    name: "limits"
};
var Y = /*#__PURE__*/ function() {
    "use strict";
    function Y(e) {
        _class_call_check(this, Y);
        this._renderTargetStencilState = Object.create(null), this._renderer = e, e.renderTarget.onRenderTargetChange.add(this);
    }
    _create_class(Y, [
        {
            key: "onRenderTargetChange",
            value: function onRenderTargetChange(e) {
                var t = this._renderTargetStencilState[e.uid];
                t || (t = this._renderTargetStencilState[e.uid] = {
                    stencilMode: C.DISABLED,
                    stencilReference: 0
                }), this._activeRenderTarget = e, this.setStencilMode(t.stencilMode, t.stencilReference);
            }
        },
        {
            key: "setStencilMode",
            value: function setStencilMode(e, t) {
                var r = this._renderTargetStencilState[this._activeRenderTarget.uid];
                r.stencilMode = e, r.stencilReference = t;
                var s = this._renderer;
                s.pipeline.setStencilMode(e), s.encoder.renderPassEncoder.setStencilReference(t);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer.renderTarget.onRenderTargetChange.remove(this), this._renderer = null, this._activeRenderTarget = null, this._renderTargetStencilState = null;
            }
        }
    ]);
    return Y;
}();
Y.extension = {
    type: [
        l.WebGPUSystem
    ],
    name: "stencil"
};
var P = {
    i32: {
        align: 4,
        size: 4
    },
    u32: {
        align: 4,
        size: 4
    },
    f32: {
        align: 4,
        size: 4
    },
    f16: {
        align: 2,
        size: 2
    },
    "vec2<i32>": {
        align: 8,
        size: 8
    },
    "vec2<u32>": {
        align: 8,
        size: 8
    },
    "vec2<f32>": {
        align: 8,
        size: 8
    },
    "vec2<f16>": {
        align: 4,
        size: 4
    },
    "vec3<i32>": {
        align: 16,
        size: 12
    },
    "vec3<u32>": {
        align: 16,
        size: 12
    },
    "vec3<f32>": {
        align: 16,
        size: 12
    },
    "vec3<f16>": {
        align: 8,
        size: 6
    },
    "vec4<i32>": {
        align: 16,
        size: 16
    },
    "vec4<u32>": {
        align: 16,
        size: 16
    },
    "vec4<f32>": {
        align: 16,
        size: 16
    },
    "vec4<f16>": {
        align: 8,
        size: 8
    },
    "mat2x2<f32>": {
        align: 8,
        size: 16
    },
    "mat2x2<f16>": {
        align: 4,
        size: 8
    },
    "mat3x2<f32>": {
        align: 8,
        size: 24
    },
    "mat3x2<f16>": {
        align: 4,
        size: 12
    },
    "mat4x2<f32>": {
        align: 8,
        size: 32
    },
    "mat4x2<f16>": {
        align: 4,
        size: 16
    },
    "mat2x3<f32>": {
        align: 16,
        size: 32
    },
    "mat2x3<f16>": {
        align: 8,
        size: 16
    },
    "mat3x3<f32>": {
        align: 16,
        size: 48
    },
    "mat3x3<f16>": {
        align: 8,
        size: 24
    },
    "mat4x3<f32>": {
        align: 16,
        size: 64
    },
    "mat4x3<f16>": {
        align: 8,
        size: 32
    },
    "mat2x4<f32>": {
        align: 16,
        size: 32
    },
    "mat2x4<f16>": {
        align: 8,
        size: 16
    },
    "mat3x4<f32>": {
        align: 16,
        size: 48
    },
    "mat3x4<f16>": {
        align: 8,
        size: 24
    },
    "mat4x4<f32>": {
        align: 16,
        size: 64
    },
    "mat4x4<f16>": {
        align: 8,
        size: 32
    }
};
function Ee(a) {
    var e = a.map(function(r) {
        return {
            data: r,
            offset: 0,
            size: 0
        };
    });
    var t = 0;
    for(var r = 0; r < e.length; r++){
        var s = e[r];
        var i = P[s.data.type].size;
        var n = P[s.data.type].align;
        if (!P[s.data.type]) throw new Error("[Pixi.js] WebGPU UniformBuffer: Unknown type ".concat(s.data.type));
        s.data.size > 1 && (i = Math.max(i, n) * s.data.size), t = Math.ceil(t / n) * n, s.size = i, s.offset = t, t += i;
    }
    return t = Math.ceil(t / 16) * 16, {
        uboElements: e,
        size: t
    };
}
function Le(a, e) {
    var _P_a_data_type = P[a.data.type], t = _P_a_data_type.size, r = _P_a_data_type.align, s = (r - t) / 4, i = a.data.type.indexOf("i32") >= 0 ? "dataInt32" : "data";
    return "\n         v = uv.".concat(a.data.name, ";\n         ").concat(e !== 0 ? "offset += ".concat(e, ";") : "", "\n\n         arrayOffset = offset;\n\n         t = 0;\n\n         for(var i=0; i < ").concat(a.data.size * (t / 4), "; i++)\n         {\n             for(var j = 0; j < ").concat(t / 4, "; j++)\n             {\n                 ").concat(i, "[arrayOffset++] = v[t++];\n             }\n             ").concat(s !== 0 ? "arrayOffset += ".concat(s, ";") : "", "\n         }\n     ");
}
function Ae(a) {
    return Te(a, "uboWgsl", Le, Ce);
}
var $ = /*#__PURE__*/ function(be) {
    "use strict";
    _inherits($, be);
    function $() {
        _class_call_check(this, $);
        return _call_super(this, $, [
            {
                createUboElements: Ee,
                generateUboSync: Ae
            }
        ]);
    }
    return $;
}(be);
$.extension = {
    type: [
        l.WebGPUSystem
    ],
    name: "ubo"
};
var b = 128;
var X = /*#__PURE__*/ function() {
    "use strict";
    function X(e) {
        _class_call_check(this, X);
        this._bindGroupHash = Object.create(null), this._buffers = [], this._bindGroups = [], this._bufferResources = [], this._renderer = e, this._batchBuffer = new Re({
            minUniformOffsetAlignment: b
        });
        var t = 256 / b;
        for(var r = 0; r < t; r++){
            var s = T.UNIFORM | T.COPY_DST;
            r === 0 && (s |= T.COPY_SRC), this._buffers.push(new le({
                data: this._batchBuffer.data,
                usage: s
            }));
        }
    }
    _create_class(X, [
        {
            key: "renderEnd",
            value: function renderEnd() {
                this._uploadBindGroups(), this._resetBindGroups();
            }
        },
        {
            key: "_resetBindGroups",
            value: function _resetBindGroups() {
                this._bindGroupHash = Object.create(null), this._batchBuffer.clear();
            }
        },
        {
            key: "getUniformBindGroup",
            value: function getUniformBindGroup(e, t) {
                if (!t && this._bindGroupHash[e.uid]) return this._bindGroupHash[e.uid];
                this._renderer.ubo.ensureUniformGroup(e);
                var r = e.buffer.data, s = this._batchBuffer.addEmptyGroup(r.length);
                return this._renderer.ubo.syncUniformGroup(e, this._batchBuffer.data, s / 4), this._bindGroupHash[e.uid] = this._getBindGroup(s / b), this._bindGroupHash[e.uid];
            }
        },
        {
            key: "getUboResource",
            value: function getUboResource(e) {
                this._renderer.ubo.updateUniformGroup(e);
                var t = e.buffer.data, r = this._batchBuffer.addGroup(t);
                return this._getBufferResource(r / b);
            }
        },
        {
            key: "getArrayBindGroup",
            value: function getArrayBindGroup(e) {
                var t = this._batchBuffer.addGroup(e);
                return this._getBindGroup(t / b);
            }
        },
        {
            key: "getArrayBufferResource",
            value: function getArrayBufferResource(e) {
                var r = this._batchBuffer.addGroup(e) / b;
                return this._getBufferResource(r);
            }
        },
        {
            key: "_getBufferResource",
            value: function _getBufferResource(e) {
                if (!this._bufferResources[e]) {
                    var t = this._buffers[e % 2];
                    this._bufferResources[e] = new Ge({
                        buffer: t,
                        offset: (e / 2 | 0) * 256,
                        size: b
                    });
                }
                return this._bufferResources[e];
            }
        },
        {
            key: "_getBindGroup",
            value: function _getBindGroup(e) {
                if (!this._bindGroups[e]) {
                    var t = new D({
                        0: this._getBufferResource(e)
                    });
                    this._bindGroups[e] = t;
                }
                return this._bindGroups[e];
            }
        },
        {
            key: "_uploadBindGroups",
            value: function _uploadBindGroups() {
                var e = this._renderer.buffer, t = this._buffers[0];
                t.update(this._batchBuffer.byteIndex), e.updateBuffer(t);
                var r = this._renderer.gpu.device.createCommandEncoder();
                for(var s = 1; s < this._buffers.length; s++){
                    var i = this._buffers[s];
                    r.copyBufferToBuffer(e.getGPUBuffer(t), b, e.getGPUBuffer(i), 0, this._batchBuffer.byteIndex);
                }
                this._renderer.gpu.device.queue.submit([
                    r.finish()
                ]);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this__bindGroups_e;
                for(var e = 0; e < this._bindGroups.length; e++)(_this__bindGroups_e = this._bindGroups[e]) === null || _this__bindGroups_e === void 0 ? void 0 : _this__bindGroups_e.destroy();
                this._bindGroups = null, this._bindGroupHash = null;
                for(var e1 = 0; e1 < this._buffers.length; e1++)this._buffers[e1].destroy();
                this._buffers = null;
                for(var e2 = 0; e2 < this._bufferResources.length; e2++)this._bufferResources[e2].destroy();
                this._bufferResources = null, this._batchBuffer.destroy(), this._renderer = null;
            }
        }
    ]);
    return X;
}();
X.extension = {
    type: [
        l.WebGPUPipes
    ],
    name: "uniformBatch"
};
var De = {
    "point-list": 0,
    "line-list": 1,
    "line-strip": 2,
    "triangle-list": 3,
    "triangle-strip": 4
};
function ke(a, e, t, r, s) {
    return a << 24 | e << 16 | t << 10 | r << 5 | s;
}
function ze(a, e, t, r, s) {
    return t << 8 | a << 5 | r << 3 | s << 1 | e;
}
var Z = /*#__PURE__*/ function() {
    "use strict";
    function Z(e) {
        _class_call_check(this, Z);
        this._moduleCache = Object.create(null), this._bufferLayoutsCache = Object.create(null), this._bindingNamesCache = Object.create(null), this._pipeCache = Object.create(null), this._pipeStateCaches = Object.create(null), this._colorMask = 15, this._multisampleCount = 1, this._colorTargetCount = 1, this._renderer = e;
    }
    _create_class(Z, [
        {
            key: "contextChange",
            value: function contextChange(e) {
                this._gpu = e, this.setStencilMode(C.DISABLED), this._updatePipeHash();
            }
        },
        {
            key: "setMultisampleCount",
            value: function setMultisampleCount(e) {
                this._multisampleCount !== e && (this._multisampleCount = e, this._updatePipeHash());
            }
        },
        {
            key: "setRenderTarget",
            value: function setRenderTarget(e) {
                this._multisampleCount = e.msaaSamples, this._depthStencilAttachment = e.descriptor.depthStencilAttachment ? 1 : 0, this._colorTargetCount = e.colorTargetCount, this._updatePipeHash();
            }
        },
        {
            key: "setColorMask",
            value: function setColorMask(e) {
                this._colorMask !== e && (this._colorMask = e, this._updatePipeHash());
            }
        },
        {
            key: "setStencilMode",
            value: function setStencilMode(e) {
                this._stencilMode !== e && (this._stencilMode = e, this._stencilState = ye[e], this._updatePipeHash());
            }
        },
        {
            key: "setPipeline",
            value: function setPipeline(e, t, r, s) {
                var i = this.getPipeline(e, t, r);
                s.setPipeline(i);
            }
        },
        {
            key: "getPipeline",
            value: function getPipeline(e, t, r, s) {
                e._layoutKey || (xe(e, t.attributeData), this._generateBufferKey(e)), s || (s = e.topology);
                var i = ke(e._layoutKey, t._layoutKey, r.data, r._blendModeId, De[s]);
                return this._pipeCache[i] ? this._pipeCache[i] : (this._pipeCache[i] = this._createPipeline(e, t, r, s), this._pipeCache[i]);
            }
        },
        {
            key: "_createPipeline",
            value: function _createPipeline(e, t, r, s) {
                var i = this._gpu.device, n = this._createVertexBufferLayouts(e, t), o = this._renderer.state.getColorTargets(r, this._colorTargetCount), u = this._stencilMode === C.RENDERING_MASK_ADD ? 0 : this._colorMask;
                for(var p = 0; p < o.length; p++)o[p].writeMask = u;
                var c = this._renderer.shader.getProgramData(t).pipeline, g = {
                    vertex: {
                        module: this._getModule(t.vertex.source),
                        entryPoint: t.vertex.entryPoint,
                        buffers: n
                    },
                    fragment: {
                        module: this._getModule(t.fragment.source),
                        entryPoint: t.fragment.entryPoint,
                        targets: o
                    },
                    primitive: {
                        topology: s,
                        cullMode: r.cullMode
                    },
                    layout: c,
                    multisample: {
                        count: this._multisampleCount
                    },
                    label: "PIXI Pipeline"
                };
                return this._depthStencilAttachment && (g.depthStencil = _object_spread_props(_object_spread({}, this._stencilState), {
                    format: "depth24plus-stencil8",
                    depthWriteEnabled: r.depthTest,
                    depthCompare: r.depthTest ? "less" : "always"
                })), i.createRenderPipeline(g);
            }
        },
        {
            key: "_getModule",
            value: function _getModule(e) {
                return this._moduleCache[e] || this._createModule(e);
            }
        },
        {
            key: "_createModule",
            value: function _createModule(e) {
                var t = this._gpu.device;
                return this._moduleCache[e] = t.createShaderModule({
                    code: e
                }), this._moduleCache[e];
            }
        },
        {
            key: "_generateBufferKey",
            value: function _generateBufferKey(e) {
                var t = [];
                var r = 0;
                var s = Object.keys(e.attributes).sort();
                for(var n = 0; n < s.length; n++){
                    var o = e.attributes[s[n]];
                    t[r++] = o.offset, t[r++] = o.format, t[r++] = o.stride, t[r++] = o.instance;
                }
                var i = t.join("|");
                return e._layoutKey = M(i, "geometry"), e._layoutKey;
            }
        },
        {
            key: "_generateAttributeLocationsKey",
            value: function _generateAttributeLocationsKey(e) {
                var t = [];
                var r = 0;
                var s = Object.keys(e.attributeData).sort();
                for(var n = 0; n < s.length; n++){
                    var o = e.attributeData[s[n]];
                    t[r++] = o.location;
                }
                var i = t.join("|");
                return e._attributeLocationsKey = M(i, "programAttributes"), e._attributeLocationsKey;
            }
        },
        {
            key: "getBufferNamesToBind",
            value: function getBufferNamesToBind(e, t) {
                var r = e._layoutKey << 16 | t._attributeLocationsKey;
                if (this._bindingNamesCache[r]) return this._bindingNamesCache[r];
                var s = this._createVertexBufferLayouts(e, t), i = Object.create(null), n = t.attributeData;
                for(var o = 0; o < s.length; o++){
                    var c = Object.values(s[o].attributes)[0].shaderLocation;
                    for(var g in n)if (n[g].location === c) {
                        i[o] = g;
                        break;
                    }
                }
                return this._bindingNamesCache[r] = i, i;
            }
        },
        {
            key: "_createVertexBufferLayouts",
            value: function _createVertexBufferLayouts(e, t) {
                t._attributeLocationsKey || this._generateAttributeLocationsKey(t);
                var r = e._layoutKey << 16 | t._attributeLocationsKey;
                if (this._bufferLayoutsCache[r]) return this._bufferLayoutsCache[r];
                var s = [];
                return e.buffers.forEach(function(i) {
                    var n = {
                        arrayStride: 0,
                        stepMode: "vertex",
                        attributes: []
                    }, o = n.attributes;
                    for(var u in t.attributeData){
                        var _c_divisor;
                        var c = e.attributes[u];
                        ((_c_divisor = c.divisor) !== null && _c_divisor !== void 0 ? _c_divisor : 1) !== 1 && v("Attribute ".concat(u, " has an invalid divisor value of '").concat(c.divisor, "'. WebGPU only supports a divisor value of 1")), c.buffer === i && (n.arrayStride = c.stride, n.stepMode = c.instance ? "instance" : "vertex", o.push({
                            shaderLocation: t.attributeData[u].location,
                            offset: c.offset,
                            format: c.format
                        }));
                    }
                    o.length && s.push(n);
                }), this._bufferLayoutsCache[r] = s, s;
            }
        },
        {
            key: "_updatePipeHash",
            value: function _updatePipeHash() {
                var e = ze(this._stencilMode, this._multisampleCount, this._colorMask, this._depthStencilAttachment, this._colorTargetCount);
                this._pipeStateCaches[e] || (this._pipeStateCaches[e] = Object.create(null)), this._pipeCache = this._pipeStateCaches[e];
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null, this._bufferLayoutsCache = null;
            }
        }
    ]);
    return Z;
}();
Z.extension = {
    type: [
        l.WebGPUSystem
    ],
    name: "pipeline"
};
var Fe = function Fe() {
    "use strict";
    _class_call_check(this, Fe);
    this.contexts = [], this.msaaTextures = [], this.msaaSamples = 1;
};
var Oe = /*#__PURE__*/ function() {
    "use strict";
    function Oe() {
        _class_call_check(this, Oe);
    }
    _create_class(Oe, [
        {
            key: "init",
            value: function init(e, t) {
                this._renderer = e, this._renderTargetSystem = t;
            }
        },
        {
            key: "copyToTexture",
            value: function copyToTexture(e, t, r, s, i) {
                var n = this._renderer, o = this._getGpuColorTexture(e), u = n.texture.getGpuSource(t.source);
                return n.encoder.commandEncoder.copyTextureToTexture({
                    texture: o,
                    origin: r
                }, {
                    texture: u,
                    origin: i
                }, s), t;
            }
        },
        {
            key: "startRenderPass",
            value: function startRenderPass(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = arguments.length > 2 ? arguments[2] : void 0, s = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, n = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
                var _u_msaaTextures, _u_msaaTextures1;
                var u = this._renderTargetSystem.getGpuRenderTarget(e);
                if (n !== 0 && ((_u_msaaTextures = u.msaaTextures) === null || _u_msaaTextures === void 0 ? void 0 : _u_msaaTextures.length)) throw new Error("[RenderTargetSystem] Rendering to array layers is not supported with MSAA render targets.");
                if (i > 0 && ((_u_msaaTextures1 = u.msaaTextures) === null || _u_msaaTextures1 === void 0 ? void 0 : _u_msaaTextures1.length)) throw new Error("[RenderTargetSystem] Rendering to mip levels is not supported with MSAA render targets.");
                var c = this.getDescriptor(e, t, r, i, n);
                u.descriptor = c, this._renderer.pipeline.setRenderTarget(u), this._renderer.encoder.beginRenderPass(u), this._renderer.encoder.setViewport(s);
            }
        },
        {
            key: "finishRenderPass",
            value: function finishRenderPass() {
                this._renderer.encoder.endRenderPass();
            }
        },
        {
            key: "_getGpuColorTexture",
            value: function _getGpuColorTexture(e) {
                var t = this._renderTargetSystem.getGpuRenderTarget(e);
                return t.contexts[0] ? t.contexts[0].getCurrentTexture() : this._renderer.texture.getGpuSource(e.colorTextures[0].source);
            }
        },
        {
            key: "getDescriptor",
            value: function getDescriptor(e, t, r) {
                var _this = this;
                var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
                typeof t == "boolean" && (t = t ? y.ALL : y.NONE);
                var n = this._renderTargetSystem, o = n.getGpuRenderTarget(e), u = e.colorTextures.map(function(h, p) {
                    var d = o.contexts[p];
                    var f, m;
                    if (d) {
                        if (i !== 0) throw new Error("[RenderTargetSystem] Rendering to array layers is not supported for canvas targets.");
                        f = d.getCurrentTexture().createView();
                    } else f = _this._renderer.texture.getGpuSource(h).createView({
                        dimension: "2d",
                        baseMipLevel: s,
                        mipLevelCount: 1,
                        baseArrayLayer: i,
                        arrayLayerCount: 1
                    });
                    o.msaaTextures[p] && (m = f, f = _this._renderer.texture.getTextureView(o.msaaTextures[p]));
                    var x = t & y.COLOR ? "clear" : "load";
                    return r !== null && r !== void 0 ? r : r = n.defaultClearColor, {
                        view: f,
                        resolveTarget: m,
                        clearValue: r,
                        storeOp: "store",
                        loadOp: x
                    };
                });
                var c;
                if ((e.stencil || e.depth) && !e.depthStencilTexture && (e.ensureDepthStencilTexture(), e.depthStencilTexture.source.sampleCount = o.msaa ? 4 : 1), e.depthStencilTexture) {
                    var h = t & y.STENCIL ? "clear" : "load", p = t & y.DEPTH ? "clear" : "load";
                    c = {
                        view: this._renderer.texture.getGpuSource(e.depthStencilTexture.source).createView({
                            dimension: "2d",
                            baseMipLevel: s,
                            mipLevelCount: 1,
                            baseArrayLayer: i,
                            arrayLayerCount: 1
                        }),
                        stencilStoreOp: "store",
                        stencilLoadOp: h,
                        depthClearValue: 1,
                        depthLoadOp: p,
                        depthStoreOp: "store"
                    };
                }
                return {
                    colorAttachments: u,
                    depthStencilAttachment: c
                };
            }
        },
        {
            key: "clear",
            value: function clear(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = arguments.length > 2 ? arguments[2] : void 0, s = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, n = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
                if (!t) return;
                var _this__renderer = this._renderer, o = _this__renderer.gpu, u = _this__renderer.encoder, c = o.device;
                if (u.commandEncoder === null) {
                    var h = c.createCommandEncoder(), p = this.getDescriptor(e, t, r, i, n), d = h.beginRenderPass(p);
                    d.setViewport(s.x, s.y, s.width, s.height, 0, 1), d.end();
                    var f = h.finish();
                    c.queue.submit([
                        f
                    ]);
                } else this.startRenderPass(e, t, r, s, i, n);
            }
        },
        {
            key: "initGpuRenderTarget",
            value: function initGpuRenderTarget(e) {
                var _this = this;
                e.isRoot = !0;
                var t = new Fe;
                return t.colorTargetCount = e.colorTextures.length, e.colorTextures.forEach(function(r, s) {
                    if (_instanceof1(r, me)) {
                        var i = r.resource.getContext("webgpu"), n = r.transparent ? "premultiplied" : "opaque";
                        try {
                            i.configure({
                                device: _this._renderer.gpu.device,
                                usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
                                format: "bgra8unorm",
                                alphaMode: n
                            });
                        } catch (o) {
                            console.error(o);
                        }
                        t.contexts[s] = i;
                    }
                    if (t.msaa = r.source.antialias, r.source.antialias) {
                        var i1 = new _e({
                            width: 0,
                            height: 0,
                            sampleCount: 4,
                            arrayLayerCount: r.source.arrayLayerCount
                        });
                        t.msaaTextures[s] = i1;
                    }
                }), t.msaa && (t.msaaSamples = 4, e.depthStencilTexture && (e.depthStencilTexture.source.sampleCount = 4)), t;
            }
        },
        {
            key: "destroyGpuRenderTarget",
            value: function destroyGpuRenderTarget(e) {
                e.contexts.forEach(function(t) {
                    t.unconfigure();
                }), e.msaaTextures.forEach(function(t) {
                    t.destroy();
                }), e.msaaTextures.length = 0, e.contexts.length = 0;
            }
        },
        {
            key: "ensureDepthStencilTexture",
            value: function ensureDepthStencilTexture(e) {
                var t = this._renderTargetSystem.getGpuRenderTarget(e);
                e.depthStencilTexture && t.msaa && (e.depthStencilTexture.source.sampleCount = 4);
            }
        },
        {
            key: "resizeGpuRenderTarget",
            value: function resizeGpuRenderTarget(e) {
                var t = this._renderTargetSystem.getGpuRenderTarget(e);
                t.width = e.width, t.height = e.height, t.msaa && e.colorTextures.forEach(function(r, s) {
                    var _t_msaaTextures_s;
                    (_t_msaaTextures_s = t.msaaTextures[s]) === null || _t_msaaTextures_s === void 0 ? void 0 : _t_msaaTextures_s.resize(r.source.width, r.source.height, r.source._resolution);
                });
            }
        }
    ]);
    return Oe;
}();
var J = /*#__PURE__*/ function(we) {
    "use strict";
    _inherits(J, we);
    function J(e) {
        _class_call_check(this, J);
        var _this;
        _this = _call_super(this, J, [
            e
        ]), _this.adaptor = new Oe, _this.adaptor.init(e, _this);
        return _this;
    }
    return J;
}(we);
J.extension = {
    type: [
        l.WebGPUSystem
    ],
    name: "renderTarget"
};
var Q = /*#__PURE__*/ function() {
    "use strict";
    function Q() {
        _class_call_check(this, Q);
        this._gpuProgramData = Object.create(null);
    }
    _create_class(Q, [
        {
            key: "contextChange",
            value: function contextChange(e) {
                this._gpu = e;
            }
        },
        {
            key: "getProgramData",
            value: function getProgramData(e) {
                return this._gpuProgramData[e._layoutKey] || this._createGPUProgramData(e);
            }
        },
        {
            key: "_createGPUProgramData",
            value: function _createGPUProgramData(e) {
                var t = this._gpu.device, r = e.gpuLayout.map(function(i) {
                    return t.createBindGroupLayout({
                        entries: i
                    });
                }), s = {
                    bindGroupLayouts: r
                };
                return this._gpuProgramData[e._layoutKey] = {
                    bindGroups: r,
                    pipeline: t.createPipelineLayout(s)
                }, this._gpuProgramData[e._layoutKey];
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._gpu = null, this._gpuProgramData = null;
            }
        }
    ]);
    return Q;
}();
Q.extension = {
    type: [
        l.WebGPUSystem
    ],
    name: "shader"
};
var _ = {};
_.normal = {
    alpha: {
        srcFactor: "one",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
    },
    color: {
        srcFactor: "one",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
    }
};
_.add = {
    alpha: {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
    },
    color: {
        srcFactor: "one",
        dstFactor: "one",
        operation: "add"
    }
};
_.multiply = {
    alpha: {
        srcFactor: "one",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
    },
    color: {
        srcFactor: "dst",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
    }
};
_.screen = {
    alpha: {
        srcFactor: "one",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
    },
    color: {
        srcFactor: "one",
        dstFactor: "one-minus-src",
        operation: "add"
    }
};
_.overlay = {
    alpha: {
        srcFactor: "one",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
    },
    color: {
        srcFactor: "one",
        dstFactor: "one-minus-src",
        operation: "add"
    }
};
_.none = {
    alpha: {
        srcFactor: "one",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
    },
    color: {
        srcFactor: "zero",
        dstFactor: "zero",
        operation: "add"
    }
};
_["normal-npm"] = {
    alpha: {
        srcFactor: "one",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
    },
    color: {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
    }
};
_["add-npm"] = {
    alpha: {
        srcFactor: "one",
        dstFactor: "one",
        operation: "add"
    },
    color: {
        srcFactor: "src-alpha",
        dstFactor: "one",
        operation: "add"
    }
};
_["screen-npm"] = {
    alpha: {
        srcFactor: "one",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
    },
    color: {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src",
        operation: "add"
    }
};
_.erase = {
    alpha: {
        srcFactor: "zero",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
    },
    color: {
        srcFactor: "zero",
        dstFactor: "one-minus-src",
        operation: "add"
    }
};
_.min = {
    alpha: {
        srcFactor: "one",
        dstFactor: "one",
        operation: "min"
    },
    color: {
        srcFactor: "one",
        dstFactor: "one",
        operation: "min"
    }
};
_.max = {
    alpha: {
        srcFactor: "one",
        dstFactor: "one",
        operation: "max"
    },
    color: {
        srcFactor: "one",
        dstFactor: "one",
        operation: "max"
    }
};
var ee = /*#__PURE__*/ function() {
    "use strict";
    function ee() {
        _class_call_check(this, ee);
        this.defaultState = new L, this.defaultState.blend = !0;
    }
    _create_class(ee, [
        {
            key: "contextChange",
            value: function contextChange(e) {
                this.gpu = e;
            }
        },
        {
            key: "getColorTargets",
            value: function getColorTargets(e, t) {
                var r = _[e.blendMode] || _.normal, s = [], i = {
                    format: "bgra8unorm",
                    writeMask: 0,
                    blend: r
                };
                for(var n = 0; n < t; n++)s[n] = i;
                return s;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.gpu = null;
            }
        }
    ]);
    return ee;
}();
ee.extension = {
    type: [
        l.WebGPUSystem
    ],
    name: "state"
};
var Ie = {
    type: "image",
    upload: function upload(a, e, t) {
        var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        var s = a.resource, i = (a.pixelWidth | 0) * (a.pixelHeight | 0), n = s.byteLength / i;
        t.device.queue.writeTexture({
            texture: e,
            origin: {
                x: 0,
                y: 0,
                z: r
            }
        }, s, {
            offset: 0,
            rowsPerImage: a.pixelHeight,
            bytesPerRow: a.pixelWidth * n
        }, {
            width: a.pixelWidth,
            height: a.pixelHeight,
            depthOrArrayLayers: 1
        });
    }
}, te = {
    "bc1-rgba-unorm": {
        blockBytes: 8,
        blockWidth: 4,
        blockHeight: 4
    },
    "bc2-rgba-unorm": {
        blockBytes: 16,
        blockWidth: 4,
        blockHeight: 4
    },
    "bc3-rgba-unorm": {
        blockBytes: 16,
        blockWidth: 4,
        blockHeight: 4
    },
    "bc7-rgba-unorm": {
        blockBytes: 16,
        blockWidth: 4,
        blockHeight: 4
    },
    "etc1-rgb-unorm": {
        blockBytes: 8,
        blockWidth: 4,
        blockHeight: 4
    },
    "etc2-rgba8unorm": {
        blockBytes: 16,
        blockWidth: 4,
        blockHeight: 4
    },
    "astc-4x4-unorm": {
        blockBytes: 16,
        blockWidth: 4,
        blockHeight: 4
    }
}, We = {
    blockBytes: 4,
    blockWidth: 1,
    blockHeight: 1
}, He = {
    type: "compressed",
    upload: function upload(a, e, t) {
        var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        var s = a.pixelWidth, i = a.pixelHeight;
        var n = te[a.format] || We;
        for(var o = 0; o < a.resource.length; o++){
            var u = a.resource[o], c = Math.ceil(s / n.blockWidth) * n.blockBytes;
            t.device.queue.writeTexture({
                texture: e,
                mipLevel: o,
                origin: {
                    x: 0,
                    y: 0,
                    z: r
                }
            }, u, {
                offset: 0,
                bytesPerRow: c
            }, {
                width: Math.ceil(s / n.blockWidth) * n.blockWidth,
                height: Math.ceil(i / n.blockHeight) * n.blockHeight,
                depthOrArrayLayers: 1
            }), s = Math.max(s >> 1, 1), i = Math.max(i >> 1, 1);
        }
    }
}, E = [
    "right",
    "left",
    "top",
    "bottom",
    "front",
    "back"
];
function Ve(a) {
    return {
        type: "cube",
        upload: function upload(e, t, r) {
            var s = e.faces;
            for(var i = 0; i < E.length; i++){
                var n = E[i], o = s[n];
                (a[o.uploadMethodId] || a.image).upload(o, t, r, i);
            }
        }
    };
}
var re = {
    type: "image",
    upload: function upload(a, e, t) {
        var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        var s = a.resource;
        if (!s) return;
        if (globalThis.HTMLImageElement && _instanceof1(s, HTMLImageElement)) {
            var u = B.get().createCanvas(s.width, s.height);
            u.getContext("2d").drawImage(s, 0, 0, s.width, s.height), a.resource = u, v("ImageSource: Image element passed, converting to canvas and replacing resource.");
        }
        var i = Math.min(e.width, a.resourceWidth || a.pixelWidth), n = Math.min(e.height, a.resourceHeight || a.pixelHeight), o = a.alphaMode === "premultiply-alpha-on-upload";
        t.device.queue.copyExternalImageToTexture({
            source: s
        }, {
            texture: e,
            origin: {
                x: 0,
                y: 0,
                z: r
            },
            premultipliedAlpha: o
        }, {
            width: i,
            height: n
        });
    }
}, Ne = {
    type: "video",
    upload: function upload(a, e, t, r) {
        re.upload(a, e, t, r);
    }
};
var je = /*#__PURE__*/ function() {
    "use strict";
    function je(e) {
        _class_call_check(this, je);
        this.device = e, this.sampler = e.createSampler({
            minFilter: "linear"
        }), this.pipelines = {};
    }
    _create_class(je, [
        {
            key: "_getMipmapPipeline",
            value: function _getMipmapPipeline(e) {
                var t = this.pipelines[e];
                return t || (this.mipmapShaderModule || (this.mipmapShaderModule = this.device.createShaderModule({
                    code: "\n                        var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(\n                        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));\n\n                        struct VertexOutput {\n                        @builtin(position) position : vec4<f32>,\n                        @location(0) texCoord : vec2<f32>,\n                        };\n\n                        @vertex\n                        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {\n                        var output : VertexOutput;\n                        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);\n                        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);\n                        return output;\n                        }\n\n                        @group(0) @binding(0) var imgSampler : sampler;\n                        @group(0) @binding(1) var img : texture_2d<f32>;\n\n                        @fragment\n                        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {\n                        return textureSample(img, imgSampler, texCoord);\n                        }\n                    "
                })), t = this.device.createRenderPipeline({
                    layout: "auto",
                    vertex: {
                        module: this.mipmapShaderModule,
                        entryPoint: "vertexMain"
                    },
                    fragment: {
                        module: this.mipmapShaderModule,
                        entryPoint: "fragmentMain",
                        targets: [
                            {
                                format: e
                            }
                        ]
                    }
                }), this.pipelines[e] = t), t;
            }
        },
        {
            key: "generateMipmap",
            value: function generateMipmap(e) {
                var t = this._getMipmapPipeline(e.format);
                if (e.dimension === "3d" || e.dimension === "1d") throw new Error("Generating mipmaps for non-2d textures is currently unsupported!");
                var r = e;
                var s = e.depthOrArrayLayers || 1, i = e.usage & GPUTextureUsage.RENDER_ATTACHMENT;
                if (!i) {
                    var u = {
                        size: {
                            width: Math.ceil(e.width / 2),
                            height: Math.ceil(e.height / 2),
                            depthOrArrayLayers: s
                        },
                        format: e.format,
                        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT,
                        mipLevelCount: e.mipLevelCount - 1
                    };
                    r = this.device.createTexture(u);
                }
                var n = this.device.createCommandEncoder({}), o = t.getBindGroupLayout(0);
                for(var u1 = 0; u1 < s; ++u1){
                    var c = e.createView({
                        baseMipLevel: 0,
                        mipLevelCount: 1,
                        dimension: "2d",
                        baseArrayLayer: u1,
                        arrayLayerCount: 1
                    }), g = i ? 1 : 0;
                    for(var h = 1; h < e.mipLevelCount; ++h){
                        var p = r.createView({
                            baseMipLevel: g++,
                            mipLevelCount: 1,
                            dimension: "2d",
                            baseArrayLayer: u1,
                            arrayLayerCount: 1
                        }), d = n.beginRenderPass({
                            colorAttachments: [
                                {
                                    view: p,
                                    storeOp: "store",
                                    loadOp: "clear",
                                    clearValue: {
                                        r: 0,
                                        g: 0,
                                        b: 0,
                                        a: 0
                                    }
                                }
                            ]
                        }), f = this.device.createBindGroup({
                            layout: o,
                            entries: [
                                {
                                    binding: 0,
                                    resource: this.sampler
                                },
                                {
                                    binding: 1,
                                    resource: c
                                }
                            ]
                        });
                        d.setPipeline(t), d.setBindGroup(0, f), d.draw(3, 1, 0, 0), d.end(), c = p;
                    }
                }
                if (!i) {
                    var u2 = {
                        width: Math.ceil(e.width / 2),
                        height: Math.ceil(e.height / 2),
                        depthOrArrayLayers: s
                    };
                    for(var c1 = 1; c1 < e.mipLevelCount; ++c1)n.copyTextureToTexture({
                        texture: r,
                        mipLevel: c1 - 1
                    }, {
                        texture: e,
                        mipLevel: c1
                    }, u2), u2.width = Math.ceil(u2.width / 2), u2.height = Math.ceil(u2.height / 2);
                }
                return this.device.queue.submit([
                    n.finish()
                ]), i || r.destroy(), e;
            }
        }
    ]);
    return je;
}();
var Ke = /*#__PURE__*/ function() {
    "use strict";
    function Ke(e) {
        _class_call_check(this, Ke);
        this.textureView = null, this.gpuTexture = e;
    }
    _create_class(Ke, [
        {
            key: "destroy",
            value: function destroy() {
                this.gpuTexture.destroy(), this.textureView = null, this.gpuTexture = null;
            }
        }
    ]);
    return Ke;
}();
var se = /*#__PURE__*/ function() {
    "use strict";
    function se(e) {
        _class_call_check(this, se);
        this._gpuSamplers = Object.create(null), this._bindGroupHash = Object.create(null), this._renderer = e, e.gc.addCollection(this, "_bindGroupHash", "hash"), this._managedTextures = new A({
            renderer: e,
            type: "resource",
            onUnload: this.onSourceUnload.bind(this),
            name: "gpuTextureSource"
        });
        var t = {
            image: re,
            buffer: Ie,
            video: Ne,
            compressed: He
        };
        this._uploads = _object_spread_props(_object_spread({}, t), {
            cube: Ve(t)
        });
    }
    _create_class(se, [
        {
            key: "managedTextures",
            get: function get() {
                return Object.values(this._managedTextures.items);
            }
        },
        {
            key: "contextChange",
            value: function contextChange(e) {
                this._gpu = e;
            }
        },
        {
            key: "initSource",
            value: function initSource(e) {
                var _e__gpuData_this__renderer_uid;
                return ((_e__gpuData_this__renderer_uid = e._gpuData[this._renderer.uid]) === null || _e__gpuData_this__renderer_uid === void 0 ? void 0 : _e__gpuData_this__renderer_uid.gpuTexture) || this._initSource(e);
            }
        },
        {
            key: "_initSource",
            value: function _initSource(e) {
                if (e.autoGenerateMipmaps) {
                    var c = Math.max(e.pixelWidth, e.pixelHeight);
                    e.mipLevelCount = Math.floor(Math.log2(c)) + 1;
                }
                var t = GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST;
                e.uploadMethodId !== "compressed" && (t |= GPUTextureUsage.RENDER_ATTACHMENT, t |= GPUTextureUsage.COPY_SRC);
                var r = te[e.format] || {
                    blockWidth: 1,
                    blockHeight: 1
                }, s = Math.ceil(e.pixelWidth / r.blockWidth) * r.blockWidth, i = Math.ceil(e.pixelHeight / r.blockHeight) * r.blockHeight, n = {
                    label: e.label,
                    size: {
                        width: s,
                        height: i,
                        depthOrArrayLayers: e.arrayLayerCount
                    },
                    format: e.format,
                    sampleCount: e.sampleCount,
                    mipLevelCount: e.mipLevelCount,
                    dimension: e.dimension,
                    usage: t
                }, o = this._gpu.device.createTexture(n);
                return e._gpuData[this._renderer.uid] = new Ke(o), this._managedTextures.add(e) && (e.on("update", this.onSourceUpdate, this), e.on("resize", this.onSourceResize, this), e.on("updateMipmaps", this.onUpdateMipmaps, this)), this.onSourceUpdate(e), o;
            }
        },
        {
            key: "onSourceUpdate",
            value: function onSourceUpdate(e) {
                var t = this.getGpuSource(e);
                t && (this._uploads[e.uploadMethodId] && this._uploads[e.uploadMethodId].upload(e, t, this._gpu), e.autoGenerateMipmaps && e.mipLevelCount > 1 && this.onUpdateMipmaps(e));
            }
        },
        {
            key: "onUpdateMipmaps",
            value: function onUpdateMipmaps(e) {
                this._mipmapGenerator || (this._mipmapGenerator = new je(this._gpu.device));
                var t = this.getGpuSource(e);
                this._mipmapGenerator.generateMipmap(t);
            }
        },
        {
            key: "onSourceUnload",
            value: function onSourceUnload(e) {
                e.off("update", this.onSourceUpdate, this), e.off("resize", this.onSourceResize, this), e.off("updateMipmaps", this.onUpdateMipmaps, this);
            }
        },
        {
            key: "onSourceResize",
            value: function onSourceResize(e) {
                e._gcLastUsed = this._renderer.gc.now;
                var t = e._gpuData[this._renderer.uid], r = t === null || t === void 0 ? void 0 : t.gpuTexture;
                r ? (r.width !== e.pixelWidth || r.height !== e.pixelHeight) && (t.destroy(), this._bindGroupHash[e.uid] = null, e._gpuData[this._renderer.uid] = null, this.initSource(e)) : this.initSource(e);
            }
        },
        {
            key: "_initSampler",
            value: function _initSampler(e) {
                return this._gpuSamplers[e._resourceId] = this._gpu.device.createSampler(e), this._gpuSamplers[e._resourceId];
            }
        },
        {
            key: "getGpuSampler",
            value: function getGpuSampler(e) {
                return this._gpuSamplers[e._resourceId] || this._initSampler(e);
            }
        },
        {
            key: "getGpuSource",
            value: function getGpuSource(e) {
                var _e__gpuData_this__renderer_uid;
                return e._gcLastUsed = this._renderer.gc.now, ((_e__gpuData_this__renderer_uid = e._gpuData[this._renderer.uid]) === null || _e__gpuData_this__renderer_uid === void 0 ? void 0 : _e__gpuData_this__renderer_uid.gpuTexture) || this.initSource(e);
            }
        },
        {
            key: "getTextureBindGroup",
            value: function getTextureBindGroup(e) {
                return this._bindGroupHash[e.uid] || this._createTextureBindGroup(e);
            }
        },
        {
            key: "_createTextureBindGroup",
            value: function _createTextureBindGroup(e) {
                var t = e.source;
                return this._bindGroupHash[e.uid] = new D({
                    0: t,
                    1: t.style,
                    2: new k({
                        uTextureMatrix: {
                            type: "mat3x3<f32>",
                            value: e.textureMatrix.mapCoord
                        }
                    })
                }), this._bindGroupHash[e.uid];
            }
        },
        {
            key: "getTextureView",
            value: function getTextureView(e) {
                var t = e.source;
                t._gcLastUsed = this._renderer.gc.now;
                var r = t._gpuData[this._renderer.uid];
                return r || (this.initSource(t), r = t._gpuData[this._renderer.uid]), r.textureView || (r.textureView = r.gpuTexture.createView({
                    dimension: t.viewDimension
                })), r.textureView;
            }
        },
        {
            key: "generateCanvas",
            value: function generateCanvas(e) {
                var t = this._renderer, r = t.gpu.device.createCommandEncoder(), s = B.get().createCanvas();
                s.width = e.source.pixelWidth, s.height = e.source.pixelHeight;
                var i = s.getContext("webgpu");
                return i.configure({
                    device: t.gpu.device,
                    usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC,
                    format: B.get().getNavigator().gpu.getPreferredCanvasFormat(),
                    alphaMode: "premultiplied"
                }), r.copyTextureToTexture({
                    texture: t.texture.getGpuSource(e.source),
                    origin: {
                        x: 0,
                        y: 0
                    }
                }, {
                    texture: i.getCurrentTexture()
                }, {
                    width: s.width,
                    height: s.height
                }), t.gpu.device.queue.submit([
                    r.finish()
                ]), s;
            }
        },
        {
            key: "getPixels",
            value: function getPixels(e) {
                var t = this.generateCanvas(e), r = w.getOptimalCanvasAndContext(t.width, t.height), s = r.context;
                s.drawImage(t, 0, 0);
                var i = t.width, n = t.height, o = s.getImageData(0, 0, i, n), u = new Uint8ClampedArray(o.data.buffer);
                return w.returnCanvasAndContext(r), {
                    pixels: u,
                    width: i,
                    height: n
                };
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._managedTextures.destroy();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.keys(this._bindGroupHash)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var e = _step.value;
                        var _this__bindGroupHash_t;
                        var t = Number(e);
                        (_this__bindGroupHash_t = this._bindGroupHash[t]) === null || _this__bindGroupHash_t === void 0 ? void 0 : _this__bindGroupHash_t.destroy();
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
                this._renderer = null, this._gpu = null, this._mipmapGenerator = null, this._gpuSamplers = null, this._bindGroupHash = null;
            }
        }
    ]);
    return se;
}();
se.extension = {
    type: [
        l.WebGPUSystem
    ],
    name: "texture"
};
var ie = /*#__PURE__*/ function() {
    "use strict";
    function ie() {
        _class_call_check(this, ie);
        this._maxTextures = 0;
    }
    _create_class(ie, [
        {
            key: "contextChange",
            value: function contextChange(e) {
                var t = new k({
                    uTransformMatrix: {
                        value: new W,
                        type: "mat3x3<f32>"
                    },
                    uColor: {
                        value: new Float32Array([
                            1,
                            1,
                            1,
                            1
                        ]),
                        type: "vec4<f32>"
                    },
                    uRound: {
                        value: 0,
                        type: "f32"
                    }
                });
                this._maxTextures = e.limits.maxBatchableTextures;
                var r = F({
                    name: "graphics",
                    bits: [
                        fe,
                        ge(this._maxTextures),
                        Se,
                        O
                    ]
                });
                this.shader = new I({
                    gpuProgram: r,
                    resources: {
                        localUniforms: t
                    }
                });
            }
        },
        {
            key: "execute",
            value: function execute(e, t) {
                var r = t.context, s = r.customShader || this.shader, i = e.renderer, n = i.graphicsContext, _n_getContextRenderData = n.getContextRenderData(r), o = _n_getContextRenderData.batcher, u = _n_getContextRenderData.instructions, c = i.encoder;
                c.setGeometry(o.geometry, s.gpuProgram);
                var g = i.globalUniforms.bindGroup;
                c.setBindGroup(0, g, s.gpuProgram);
                var h = i.renderPipes.uniformBatch.getUniformBindGroup(s.resources.localUniforms, !0);
                c.setBindGroup(2, h, s.gpuProgram);
                var p = u.instructions;
                var d = null;
                for(var f = 0; f < u.instructionSize; f++){
                    var m = p[f];
                    if (m.topology !== d && (d = m.topology, c.setPipelineFromGeometryProgramAndState(o.geometry, s.gpuProgram, e.state, m.topology)), s.groups[1] = m.bindGroup, !m.gpuBindGroup) {
                        var x = m.textures;
                        m.bindGroup = z(x.textures, x.count, this._maxTextures), m.gpuBindGroup = i.bindGroup.getBindGroup(m.bindGroup, s.gpuProgram, 1);
                    }
                    c.setBindGroup(1, m.bindGroup, s.gpuProgram), c.renderPassEncoder.drawIndexed(m.size, 1, m.start);
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
    return ie;
}();
ie.extension = {
    type: [
        l.WebGPUPipesAdaptor
    ],
    name: "graphics"
};
var ne = /*#__PURE__*/ function() {
    "use strict";
    function ne() {
        _class_call_check(this, ne);
    }
    _create_class(ne, [
        {
            key: "init",
            value: function init() {
                var e = F({
                    name: "mesh",
                    bits: [
                        Pe,
                        Be,
                        O
                    ]
                });
                this._shader = new I({
                    gpuProgram: e,
                    resources: {
                        uTexture: R.EMPTY._source,
                        uSampler: R.EMPTY._source.style,
                        textureUniforms: {
                            uTextureMatrix: {
                                type: "mat3x3<f32>",
                                value: new W
                            }
                        }
                    }
                });
            }
        },
        {
            key: "execute",
            value: function execute(e, t) {
                var r = e.renderer;
                var s = t._shader;
                if (!s) s = this._shader, s.groups[2] = r.texture.getTextureBindGroup(t.texture);
                else if (!s.gpuProgram) {
                    v("Mesh shader has no gpuProgram", t.shader);
                    return;
                }
                var i = s.gpuProgram;
                if (i.autoAssignGlobalUniforms && (s.groups[0] = r.globalUniforms.bindGroup), i.autoAssignLocalUniforms) {
                    var n = e.localUniforms;
                    s.groups[1] = r.renderPipes.uniformBatch.getUniformBindGroup(n, !0);
                }
                r.encoder.draw({
                    geometry: t._geometry,
                    shader: s,
                    state: t.state
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
    return ne;
}();
ne.extension = {
    type: [
        l.WebGPUPipesAdaptor
    ],
    name: "mesh"
};
var qe = _to_consumable_array(ve).concat([
    $,
    K,
    U,
    q,
    N,
    se,
    J,
    Q,
    ee,
    Z,
    j,
    Y,
    V
]), Ye = _to_consumable_array(Ue).concat([
    X
]), $e = [
    H,
    ne,
    ie
], oe = [], ae = [], ue = [];
S.handleByNamedList(l.WebGPUSystem, oe);
S.handleByNamedList(l.WebGPUPipes, ae);
S.handleByNamedList(l.WebGPUPipesAdaptor, ue);
(_S = S).add.apply(_S, _to_consumable_array(qe).concat(_to_consumable_array(Ye), _to_consumable_array($e)));
var ot = /*#__PURE__*/ function(ce) {
    "use strict";
    _inherits(ot, ce);
    function ot() {
        _class_call_check(this, ot);
        var e = {
            name: "webgpu",
            type: de.WEBGPU,
            systems: oe,
            renderPipes: ae,
            renderPipeAdaptors: ue
        };
        return _call_super(this, ot, [
            e
        ]);
    }
    return ot;
}(ce);
export { ot as WebGPURenderer };
