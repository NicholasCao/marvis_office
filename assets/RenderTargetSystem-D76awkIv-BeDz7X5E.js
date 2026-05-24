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
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = {}, sourceKeys, key, i;
    if (typeof Reflect !== "undefined" && Reflect.ownKeys) {
        sourceKeys = Reflect.ownKeys(Object(source));
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
        return target;
    }
    target = _object_without_properties_loose(source, excluded);
    if (Object.getOwnPropertySymbols) {
        sourceKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {}, sourceKeys = Object.getOwnPropertyNames(source), key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
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
import { E as l, e as W, a1 as ie, C as w, a2 as ze, S as Ve, a3 as Ne, O as D, w as oe, P as je, M as m, a4 as $e, B as qe, R as z, b as le, a5 as p, a6 as Ke, L as P, D as V, a7 as T, a8 as Ye, a9 as N, aa as Je, ab as Xe, n as _imp_f, T as Z, ac as de, ad as ue, ae as B, af as Qe, d as _imp_g, q as E, ag as ee, s as O, u as Ze, t as R, ah as et, ai as te, aj as tt, ak as ce, al as rt, am as st, x as nt, an as he, ao as pe, ap as fe } from "./index-wSLjxAso.js";
import { F as at } from "./Filter-D2TFakTj-BL2pn75X.js";
let f = _imp_f;
let g = _imp_g;
var it = "in vec2 vMaskCoord;\nin vec2 vTextureCoord;\n\nuniform sampler2D uTexture;\nuniform sampler2D uMaskTexture;\n\nuniform float uAlpha;\nuniform vec4 uMaskClamp;\nuniform float uInverse;\nuniform float uChannel;\n\nout vec4 finalColor;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(uMaskClamp.x, vMaskCoord.x) +\n        step(uMaskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, uMaskClamp.z) +\n        step(vMaskCoord.y, uMaskClamp.w));\n\n    // TODO look into why this is needed\n    float npmAlpha = uAlpha;\n    vec4 original = texture(uTexture, vTextureCoord);\n    vec4 masky = texture(uMaskTexture, vMaskCoord);\n\n    float a;\n    if (uChannel == 1.0) {\n        a = masky.a * npmAlpha * clip;\n    } else {\n        float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n        a = alphaMul * masky.r * npmAlpha * clip;\n    }\n\n    if (uInverse == 1.0) {\n        a = 1.0 - a;\n    }\n\n    finalColor = original * a;\n}\n", ot = "in vec2 aPosition;\n\nout vec2 vTextureCoord;\nout vec2 vMaskCoord;\n\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\nuniform mat3 uFilterMatrix;\n\nvec4 filterVertexPosition(  vec2 aPosition )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n       \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord(  vec2 aPosition )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvec2 getFilterCoord( vec2 aPosition )\n{\n    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}   \n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition(aPosition);\n    vTextureCoord = filterTextureCoord(aPosition);\n    vMaskCoord = getFilterCoord(aPosition);\n}\n", re = "struct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct MaskUniforms {\n  uFilterMatrix:mat3x3<f32>,\n  uMaskClamp:vec4<f32>,\n  uAlpha:f32,\n  uInverse:f32,\n  uChannel:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;\n@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) filterUv : vec2<f32>,\n};\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);\n}\n\nfn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>,\n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition),\n   getFilterCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) filterUv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n\n    var maskClamp = filterUniforms.uMaskClamp;\n    var uAlpha = filterUniforms.uAlpha;\n\n    var clip = step(3.5,\n      step(maskClamp.x, filterUv.x) +\n      step(maskClamp.y, filterUv.y) +\n      step(filterUv.x, maskClamp.z) +\n      step(filterUv.y, maskClamp.w));\n\n    var mask = textureSample(uMaskTexture, uSampler, filterUv);\n    var source = textureSample(uTexture, uSampler, uv);\n\n    var a: f32;\n    if (filterUniforms.uChannel == 1.0) {\n        a = mask.a * uAlpha * clip;\n    } else {\n        var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);\n        a = alphaMul * mask.r * uAlpha * clip;\n    }\n\n    if (filterUniforms.uInverse == 1.0) {\n        a = 1.0 - a;\n    }\n\n    return source * a;\n}\n";
var lt = /*#__PURE__*/ function(at) {
    "use strict";
    _inherits(lt, at);
    function lt(e) {
        _class_call_check(this, lt);
        var _this;
        var t = e.sprite, r = _object_without_properties(e, [
            "sprite"
        ]), s = new rt(t.texture), n = new le({
            uFilterMatrix: {
                value: new m,
                type: "mat3x3<f32>"
            },
            uMaskClamp: {
                value: s.uClampFrame,
                type: "vec4<f32>"
            },
            uAlpha: {
                value: 1,
                type: "f32"
            },
            uInverse: {
                value: e.inverse ? 1 : 0,
                type: "f32"
            },
            uChannel: {
                value: e.channel === "alpha" ? 1 : 0,
                type: "f32"
            }
        }), i = st.from({
            vertex: {
                source: re,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: re,
                entryPoint: "mainFragment"
            }
        }), o = nt.from({
            vertex: ot,
            fragment: it,
            name: "mask-filter"
        });
        _this = _call_super(this, lt, [
            _object_spread_props(_object_spread({}, r), {
                gpuProgram: i,
                glProgram: o,
                clipToViewport: !1,
                resources: {
                    filterUniforms: n,
                    uMaskTexture: t.texture.source
                }
            })
        ]), _this.sprite = t, _this._textureMatrix = s;
        return _this;
    }
    _create_class(lt, [
        {
            key: "inverse",
            get: function get() {
                return this.resources.filterUniforms.uniforms.uInverse === 1;
            },
            set: function set(e) {
                this.resources.filterUniforms.uniforms.uInverse = e ? 1 : 0;
            }
        },
        {
            key: "channel",
            get: function get() {
                return this.resources.filterUniforms.uniforms.uChannel === 1 ? "alpha" : "red";
            },
            set: function set(e) {
                this.resources.filterUniforms.uniforms.uChannel = e === "alpha" ? 1 : 0;
            }
        },
        {
            key: "apply",
            value: function apply(e, t, r, s) {
                this._textureMatrix.texture = this.sprite.texture, e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix, this.sprite).prepend(this._textureMatrix.mapCoord), this.resources.uMaskTexture = this.sprite.texture.source, e.applyFilter(this, t, r, s);
            }
        }
    ]);
    return lt;
}(at);
var j = /*#__PURE__*/ function() {
    "use strict";
    function me(e, t) {
        _class_call_check(this, me);
        var _this__adaptor_init, _this__adaptor;
        this.state = Ve.for2d(), this._batchersByInstructionSet = Object.create(null), this._activeBatches = Object.create(null), this.renderer = e, this._adaptor = t, (_this__adaptor_init = (_this__adaptor = this._adaptor).init) === null || _this__adaptor_init === void 0 ? void 0 : _this__adaptor_init.call(_this__adaptor, this);
    }
    _create_class(me, [
        {
            key: "buildStart",
            value: function buildStart(e) {
                var t = this._batchersByInstructionSet[e.uid];
                t || (t = this._batchersByInstructionSet[e.uid] = Object.create(null), t.default || (t.default = new ie({
                    maxTextures: this.renderer.limits.maxBatchableTextures
                }))), this._activeBatches = t, this._activeBatch = this._activeBatches.default;
                for(var r in this._activeBatches)this._activeBatches[r].begin();
            }
        },
        {
            key: "addToBatch",
            value: function addToBatch(e, t) {
                if (this._activeBatch.name !== e.batcherName) {
                    this._activeBatch.break(t);
                    var r = this._activeBatches[e.batcherName];
                    r || (r = this._activeBatches[e.batcherName] = me.getBatcher(e.batcherName), r.begin()), this._activeBatch = r;
                }
                this._activeBatch.add(e);
            }
        },
        {
            key: "break",
            value: function _break(e) {
                this._activeBatch.break(e);
            }
        },
        {
            key: "buildEnd",
            value: function buildEnd(e) {
                this._activeBatch.break(e);
                var t = this._activeBatches;
                for(var r in t){
                    var s = t[r], n = s.geometry;
                    n.indexBuffer.setDataWithSize(s.indexBuffer, s.indexSize, !0), n.buffers[0].setDataWithSize(s.attributeBuffer.float32View, s.attributeSize, !1);
                }
            }
        },
        {
            key: "upload",
            value: function upload(e) {
                var t = this._batchersByInstructionSet[e.uid];
                for(var r in t){
                    var s = t[r], n = s.geometry;
                    s.dirty && (s.dirty = !1, n.buffers[0].update(s.attributeSize * 4));
                }
            }
        },
        {
            key: "execute",
            value: function execute(e) {
                if (e.action === "startBatch") {
                    var t = e.batcher, r = t.geometry, s = t.shader;
                    this._adaptor.start(this, r, s);
                }
                this._adaptor.execute(this, e);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.state = null, this.renderer = null, this._adaptor = null;
                for(var e in this._activeBatches)this._activeBatches[e].destroy();
                this._activeBatches = null;
            }
        }
    ], [
        {
            key: "getBatcher",
            value: function getBatcher(e) {
                return new this._availableBatchers[e];
            }
        }
    ]);
    return me;
}();
j.extension = {
    type: [
        l.WebGLPipes,
        l.WebGPUPipes,
        l.CanvasPipes
    ],
    name: "batch"
};
j._availableBatchers = Object.create(null);
var ge = j;
W.handleByMap(l.Batcher, ge._availableBatchers);
W.add(ie);
var dt = new N;
var ut = /*#__PURE__*/ function(de) {
    "use strict";
    _inherits(ut, de);
    function ut() {
        _class_call_check(this, ut);
        var _this;
        _this = _call_super(this, ut), _this.filters = [
            new lt({
                sprite: new tt(f.EMPTY),
                inverse: !1,
                resolution: "inherit",
                antialias: "inherit"
            })
        ];
        return _this;
    }
    _create_class(ut, [
        {
            key: "sprite",
            get: function get() {
                return this.filters[0].sprite;
            },
            set: function set(e) {
                this.filters[0].sprite = e;
            }
        },
        {
            key: "inverse",
            get: function get() {
                return this.filters[0].inverse;
            },
            set: function set(e) {
                this.filters[0].inverse = e;
            }
        },
        {
            key: "channel",
            get: function get() {
                return this.filters[0].channel;
            },
            set: function set(e) {
                this.filters[0].channel = e;
            }
        }
    ]);
    return ut;
}(de);
var _e = /*#__PURE__*/ function() {
    "use strict";
    function _e(e) {
        _class_call_check(this, _e);
        this._activeMaskStage = [], this._renderer = e;
    }
    _create_class(_e, [
        {
            key: "push",
            value: function push(e, t, r) {
                var _t__maskOptions_channel;
                var s = this._renderer;
                if (s.renderPipes.batch.break(r), r.add({
                    renderPipeId: "alphaMask",
                    action: "pushMaskBegin",
                    mask: e,
                    inverse: t._maskOptions.inverse,
                    canBundle: !1,
                    maskedContainer: t
                }), e.inverse = t._maskOptions.inverse, e.channel = (_t__maskOptions_channel = t._maskOptions.channel) !== null && _t__maskOptions_channel !== void 0 ? _t__maskOptions_channel : "red", e.renderMaskToTexture) {
                    var n = e.mask;
                    n.includeInBuild = !0, n.collectRenderables(r, s, null), n.includeInBuild = !1;
                }
                s.renderPipes.batch.break(r), r.add({
                    renderPipeId: "alphaMask",
                    action: "pushMaskEnd",
                    mask: e,
                    maskedContainer: t,
                    inverse: t._maskOptions.inverse,
                    canBundle: !1
                });
            }
        },
        {
            key: "pop",
            value: function pop(e, t, r) {
                this._renderer.renderPipes.batch.break(r), r.add({
                    renderPipeId: "alphaMask",
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
                var t = this._renderer, r = e.mask.renderMaskToTexture;
                if (e.action === "pushMaskBegin") {
                    var s = B.get(ut);
                    if (s.inverse = e.inverse, s.channel = e.mask.channel, r) {
                        e.mask.mask.measurable = !0;
                        var n = Qe(e.mask.mask, !0, dt);
                        e.mask.mask.measurable = !1, n.ceil();
                        var i = t.renderTarget.renderTarget.colorTexture.source, o = T.getOptimalTexture(n.width, n.height, i._resolution, i.antialias);
                        t.renderTarget.push(o, !0), t.globalUniforms.push({
                            offset: n,
                            worldColor: 4294967295
                        });
                        var d = s.sprite;
                        d.texture = o, d.worldTransform.tx = n.minX, d.worldTransform.ty = n.minY, this._activeMaskStage.push({
                            filterEffect: s,
                            maskedContainer: e.maskedContainer,
                            filterTexture: o
                        });
                    } else s.sprite = e.mask.mask, this._activeMaskStage.push({
                        filterEffect: s,
                        maskedContainer: e.maskedContainer
                    });
                } else if (e.action === "pushMaskEnd") {
                    var s1 = this._activeMaskStage[this._activeMaskStage.length - 1];
                    r && (t.type === z.WEBGL && t.renderTarget.finishRenderPass(), t.renderTarget.pop(), t.globalUniforms.pop()), t.filter.push({
                        renderPipeId: "filter",
                        action: "pushFilter",
                        container: s1.maskedContainer,
                        filterEffect: s1.filterEffect,
                        canBundle: !1
                    });
                } else if (e.action === "popMaskEnd") {
                    t.filter.pop();
                    var s2 = this._activeMaskStage.pop();
                    r && T.returnTexture(s2.filterTexture), B.return(s2.filterEffect);
                }
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null, this._activeMaskStage = null;
            }
        }
    ]);
    return _e;
}();
_e.extension = {
    type: [
        l.WebGLPipes,
        l.WebGPUPipes,
        l.CanvasPipes
    ],
    name: "alphaMask"
};
var xe = /*#__PURE__*/ function() {
    "use strict";
    function xe(e) {
        _class_call_check(this, xe);
        this._colorStack = [], this._colorStackIndex = 0, this._currentColor = 0, this._renderer = e;
    }
    _create_class(xe, [
        {
            key: "buildStart",
            value: function buildStart() {
                this._colorStack[0] = 15, this._colorStackIndex = 1, this._currentColor = 15;
            }
        },
        {
            key: "push",
            value: function push(e, t, r) {
                this._renderer.renderPipes.batch.break(r);
                var n = this._colorStack;
                n[this._colorStackIndex] = n[this._colorStackIndex - 1] & e.mask;
                var i = this._colorStack[this._colorStackIndex];
                i !== this._currentColor && (this._currentColor = i, r.add({
                    renderPipeId: "colorMask",
                    colorMask: i,
                    canBundle: !1
                })), this._colorStackIndex++;
            }
        },
        {
            key: "pop",
            value: function pop(e, t, r) {
                this._renderer.renderPipes.batch.break(r);
                var n = this._colorStack;
                this._colorStackIndex--;
                var i = n[this._colorStackIndex - 1];
                i !== this._currentColor && (this._currentColor = i, r.add({
                    renderPipeId: "colorMask",
                    colorMask: i,
                    canBundle: !1
                }));
            }
        },
        {
            key: "execute",
            value: function execute(e) {
                this._renderer.colorMask.setMask(e.colorMask);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null, this._colorStack = null;
            }
        }
    ]);
    return xe;
}();
xe.extension = {
    type: [
        l.WebGLPipes,
        l.WebGPUPipes
    ],
    name: "colorMask"
};
var be = /*#__PURE__*/ function() {
    "use strict";
    function be(e) {
        _class_call_check(this, be);
        this._maskStackHash = {}, this._maskHash = new WeakMap, this._renderer = e;
    }
    _create_class(be, [
        {
            key: "push",
            value: function push(e, t, r) {
                var _u;
                var s;
                var n = e, i = this._renderer;
                i.renderPipes.batch.break(r), i.renderPipes.blendMode.setBlendMode(n.mask, "none", r), r.add({
                    renderPipeId: "stencilMask",
                    action: "pushMaskBegin",
                    mask: e,
                    inverse: t._maskOptions.inverse,
                    canBundle: !1
                });
                var o = n.mask;
                o.includeInBuild = !0, this._maskHash.has(n) || this._maskHash.set(n, {
                    instructionsStart: 0,
                    instructionsLength: 0
                });
                var d = this._maskHash.get(n);
                d.instructionsStart = r.instructionSize, o.collectRenderables(r, i, null), o.includeInBuild = !1, i.renderPipes.batch.break(r), r.add({
                    renderPipeId: "stencilMask",
                    action: "pushMaskEnd",
                    mask: e,
                    inverse: t._maskOptions.inverse,
                    canBundle: !1
                });
                var c = r.instructionSize - d.instructionsStart - 1;
                d.instructionsLength = c;
                var u = i.renderTarget.renderTarget.uid;
                (_u = (s = this._maskStackHash)[u]) !== null && _u !== void 0 ? _u : s[u] = 0;
            }
        },
        {
            key: "pop",
            value: function pop(e, t, r) {
                var s = e, n = this._renderer;
                n.renderPipes.batch.break(r), n.renderPipes.blendMode.setBlendMode(s.mask, "none", r), r.add({
                    renderPipeId: "stencilMask",
                    action: "popMaskBegin",
                    inverse: t._maskOptions.inverse,
                    canBundle: !1
                });
                var i = this._maskHash.get(e);
                for(var o = 0; o < i.instructionsLength; o++)r.instructions[r.instructionSize++] = r.instructions[i.instructionsStart++];
                r.add({
                    renderPipeId: "stencilMask",
                    action: "popMaskEnd",
                    canBundle: !1
                });
            }
        },
        {
            key: "execute",
            value: function execute(e) {
                var _n;
                var t;
                var r = this._renderer, s = r, n = r.renderTarget.renderTarget.uid;
                var i = (_n = (t = this._maskStackHash)[n]) !== null && _n !== void 0 ? _n : t[n] = 0;
                e.action === "pushMaskBegin" ? (s.renderTarget.ensureDepthStencil(), s.stencil.setStencilMode(g.RENDERING_MASK_ADD, i), i++, s.colorMask.setMask(0)) : e.action === "pushMaskEnd" ? (e.inverse ? s.stencil.setStencilMode(g.INVERSE_MASK_ACTIVE, i) : s.stencil.setStencilMode(g.MASK_ACTIVE, i), s.colorMask.setMask(15)) : e.action === "popMaskBegin" ? (s.colorMask.setMask(0), i !== 0 ? s.stencil.setStencilMode(g.RENDERING_MASK_REMOVE, i) : (s.renderTarget.clear(null, E.STENCIL), s.stencil.setStencilMode(g.DISABLED, i)), i--) : e.action === "popMaskEnd" && (e.inverse ? s.stencil.setStencilMode(g.INVERSE_MASK_ACTIVE, i) : s.stencil.setStencilMode(g.MASK_ACTIVE, i), s.colorMask.setMask(15)), this._maskStackHash[n] = i;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null, this._maskStackHash = null, this._maskHash = null;
            }
        }
    ]);
    return be;
}();
be.extension = {
    type: [
        l.WebGLPipes,
        l.WebGPUPipes
    ],
    name: "stencilMask"
};
var Te = /*#__PURE__*/ function() {
    "use strict";
    function Te(e) {
        _class_call_check(this, Te);
        this._renderer = e;
    }
    _create_class(Te, [
        {
            key: "updateRenderable",
            value: function updateRenderable() {}
        },
        {
            key: "destroyRenderable",
            value: function destroyRenderable() {}
        },
        {
            key: "validateRenderable",
            value: function validateRenderable() {
                return !1;
            }
        },
        {
            key: "addRenderable",
            value: function addRenderable(e, t) {
                this._renderer.renderPipes.batch.break(t), t.add(e);
            }
        },
        {
            key: "execute",
            value: function execute(e) {
                e.isRenderable && e.render(this._renderer);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null;
            }
        }
    ]);
    return Te;
}();
Te.extension = {
    type: [
        l.WebGLPipes,
        l.WebGPUPipes,
        l.CanvasPipes
    ],
    name: "customRender"
};
function L(a, e) {
    var t = a.instructionSet, r = t.instructions;
    for(var s = 0; s < t.instructionSize; s++){
        var n = r[s];
        e[n.renderPipeId].execute(n);
    }
}
var ve = /*#__PURE__*/ function() {
    "use strict";
    function ve(e) {
        _class_call_check(this, ve);
        this._renderer = e;
    }
    _create_class(ve, [
        {
            key: "addRenderGroup",
            value: function addRenderGroup(e, t) {
                e.isCachedAsTexture ? this._addRenderableCacheAsTexture(e, t) : this._addRenderableDirect(e, t);
            }
        },
        {
            key: "execute",
            value: function execute(e) {
                e.isRenderable && (e.isCachedAsTexture ? this._executeCacheAsTexture(e) : this._executeDirect(e));
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null;
            }
        },
        {
            key: "_addRenderableDirect",
            value: function _addRenderableDirect(e, t) {
                this._renderer.renderPipes.batch.break(t), e._batchableRenderGroup && (B.return(e._batchableRenderGroup), e._batchableRenderGroup = null), t.add(e);
            }
        },
        {
            key: "_addRenderableCacheAsTexture",
            value: function _addRenderableCacheAsTexture(e, t) {
                var _e__batchableRenderGroup;
                var r = (_e__batchableRenderGroup = e._batchableRenderGroup) !== null && _e__batchableRenderGroup !== void 0 ? _e__batchableRenderGroup : e._batchableRenderGroup = B.get(ue);
                r.renderable = e.root, r.transform = e.root.relativeGroupTransform, r.texture = e.texture, r.bounds = e._textureBounds, t.add(e), this._renderer.renderPipes.blendMode.pushBlendMode(e, e.root.groupBlendMode, t), this._renderer.renderPipes.batch.addToBatch(r, t), this._renderer.renderPipes.blendMode.popBlendMode(t);
            }
        },
        {
            key: "_executeCacheAsTexture",
            value: function _executeCacheAsTexture(e) {
                if (e.textureNeedsUpdate) {
                    e.textureNeedsUpdate = !1;
                    var t = new m().translate(-e._textureBounds.x, -e._textureBounds.y);
                    this._renderer.renderTarget.push(e.texture, !0, null, e.texture.frame), this._renderer.globalUniforms.push({
                        worldTransformMatrix: t,
                        worldColor: 4294967295,
                        offset: {
                            x: 0,
                            y: 0
                        }
                    }), L(e, this._renderer.renderPipes), this._renderer.renderTarget.finishRenderPass(), this._renderer.renderTarget.pop(), this._renderer.globalUniforms.pop();
                }
                e._batchableRenderGroup._batcher.updateElement(e._batchableRenderGroup), e._batchableRenderGroup._batcher.geometry.buffers[0].update();
            }
        },
        {
            key: "_executeDirect",
            value: function _executeDirect(e) {
                this._renderer.globalUniforms.push({
                    worldTransformMatrix: e.inverseParentTextureTransform,
                    worldColor: e.worldColorAlpha
                }), L(e, this._renderer.renderPipes), this._renderer.globalUniforms.pop();
            }
        }
    ]);
    return ve;
}();
ve.extension = {
    type: [
        l.WebGLPipes,
        l.WebGPUPipes,
        l.CanvasPipes
    ],
    name: "renderGroup"
};
var ye = /*#__PURE__*/ function() {
    "use strict";
    function ye(e) {
        _class_call_check(this, ye);
        this._renderer = e;
    }
    _create_class(ye, [
        {
            key: "addRenderable",
            value: function addRenderable(e, t) {
                var r = this._getGpuSprite(e);
                e.didViewUpdate && this._updateBatchableSprite(e, r), this._renderer.renderPipes.batch.addToBatch(r, t);
            }
        },
        {
            key: "updateRenderable",
            value: function updateRenderable(e) {
                var t = this._getGpuSprite(e);
                e.didViewUpdate && this._updateBatchableSprite(e, t), t._batcher.updateElement(t);
            }
        },
        {
            key: "validateRenderable",
            value: function validateRenderable(e) {
                var t = this._getGpuSprite(e);
                return !t._batcher.checkAndUpdateTexture(t, e._texture);
            }
        },
        {
            key: "_updateBatchableSprite",
            value: function _updateBatchableSprite(e, t) {
                t.bounds = e.visualBounds, t.texture = e._texture;
            }
        },
        {
            key: "_getGpuSprite",
            value: function _getGpuSprite(e) {
                return e._gpuData[this._renderer.uid] || this._initGPUSprite(e);
            }
        },
        {
            key: "_initGPUSprite",
            value: function _initGPUSprite(e) {
                var t = new ue;
                return t.renderable = e, t.transform = e.groupTransform, t.texture = e._texture, t.bounds = e.visualBounds, t.roundPixels = this._renderer._roundPixels | e._roundPixels, e._gpuData[this._renderer.uid] = t, t;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null;
            }
        }
    ]);
    return ye;
}();
ye.extension = {
    type: [
        l.WebGLPipes,
        l.WebGPUPipes,
        l.CanvasPipes
    ],
    name: "sprite"
};
var v = {};
W.handle(l.BlendMode, function(a) {
    if (!a.name) throw new Error("BlendMode extension must have a name property");
    v[a.name] = a.ref;
}, function(a) {
    delete v[a.name];
});
var Ce = /*#__PURE__*/ function() {
    "use strict";
    function Ce(e) {
        _class_call_check(this, Ce);
        this._blendModeStack = [], this._isAdvanced = !1, this._filterHash = Object.create(null), this._renderer = e, this._renderer.runners.prerender.add(this);
    }
    _create_class(Ce, [
        {
            key: "prerender",
            value: function prerender() {
                this._activeBlendMode = "normal", this._isAdvanced = !1;
            }
        },
        {
            key: "pushBlendMode",
            value: function pushBlendMode(e, t, r) {
                this._blendModeStack.push(t), this.setBlendMode(e, t, r);
            }
        },
        {
            key: "popBlendMode",
            value: function popBlendMode(e) {
                var _this__blendModeStack_;
                this._blendModeStack.pop();
                var t = (_this__blendModeStack_ = this._blendModeStack[this._activeBlendMode.length - 1]) !== null && _this__blendModeStack_ !== void 0 ? _this__blendModeStack_ : "normal";
                this.setBlendMode(null, t, e);
            }
        },
        {
            key: "setBlendMode",
            value: function setBlendMode(e, t, r) {
                var s = _instanceof1(e, te);
                if (this._activeBlendMode === t) {
                    var _this__renderableList;
                    this._isAdvanced && e && !s && ((_this__renderableList = this._renderableList) === null || _this__renderableList === void 0 ? void 0 : _this__renderableList.push(e));
                    return;
                }
                this._isAdvanced && this._endAdvancedBlendMode(r), this._activeBlendMode = t, e && (this._isAdvanced = !!v[t], this._isAdvanced && this._beginAdvancedBlendMode(e, r));
            }
        },
        {
            key: "_beginAdvancedBlendMode",
            value: function _beginAdvancedBlendMode(e, t) {
                this._renderer.renderPipes.batch.break(t);
                var r = this._activeBlendMode;
                if (!v[r]) {
                    oe("Unable to assign BlendMode: '".concat(r, "'. You may want to include: import 'pixi.js/advanced-blend-modes'"));
                    return;
                }
                var s = this._ensureFilterEffect(r), n = _instanceof1(e, te), i = {
                    renderPipeId: "filter",
                    action: "pushFilter",
                    filterEffect: s,
                    renderables: n ? null : [
                        e
                    ],
                    container: n ? e.root : null,
                    canBundle: !1
                };
                this._renderableList = i.renderables, t.add(i);
            }
        },
        {
            key: "_ensureFilterEffect",
            value: function _ensureFilterEffect(e) {
                var t = this._filterHash[e];
                return t || (t = this._filterHash[e] = new de, t.filters = [
                    new v[e]
                ]), t;
            }
        },
        {
            key: "_endAdvancedBlendMode",
            value: function _endAdvancedBlendMode(e) {
                this._isAdvanced = !1, this._renderableList = null, this._renderer.renderPipes.batch.break(e), e.add({
                    renderPipeId: "filter",
                    action: "popFilter",
                    canBundle: !1
                });
            }
        },
        {
            key: "buildStart",
            value: function buildStart() {
                this._isAdvanced = !1;
            }
        },
        {
            key: "buildEnd",
            value: function buildEnd(e) {
                this._isAdvanced && this._endAdvancedBlendMode(e);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null, this._renderableList = null;
                for(var e in this._filterHash)this._filterHash[e].destroy();
                this._filterHash = null;
            }
        }
    ]);
    return Ce;
}();
Ce.extension = {
    type: [
        l.WebGLPipes,
        l.WebGPUPipes,
        l.CanvasPipes
    ],
    name: "blendMode"
};
function F(a, e) {
    e || (e = 0);
    for(var t = e; t < a.length && a[t]; t++)a[t] = null;
}
var ct = new w, se = he | pe | fe;
function ke(a) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    ht(a);
    var t = a.childrenToUpdate, r = a.updateTick++;
    for(var s in t){
        var n = Number(s), i = t[s], o = i.list, d = i.index;
        for(var c = 0; c < d; c++){
            var u = o[c];
            u.parentRenderGroup === a && u.relativeRenderGroupDepth === n && Me(u, r, 0);
        }
        F(o, d), i.index = 0;
    }
    if (e) for(var s1 = 0; s1 < a.renderGroupChildren.length; s1++)ke(a.renderGroupChildren[s1], e);
}
function ht(a) {
    var e = a.root;
    var t;
    if (a.renderGroupParent) {
        var r = a.renderGroupParent;
        a.worldTransform.appendFrom(e.relativeGroupTransform, r.worldTransform), a.worldColor = ce(e.groupColor, r.worldColor), t = e.groupAlpha * r.worldAlpha;
    } else a.worldTransform.copyFrom(e.localTransform), a.worldColor = e.localColor, t = e.localAlpha;
    t = t < 0 ? 0 : t > 1 ? 1 : t, a.worldAlpha = t, a.worldColorAlpha = a.worldColor + ((t * 255 | 0) << 24);
}
function Me(a, e, t) {
    if (e === a.updateTick) return;
    a.updateTick = e, a.didChange = !1;
    var r = a.localTransform;
    a.updateLocalTransform();
    var s = a.parent;
    if (s && !s.renderGroup ? (t |= a._updateFlags, a.relativeGroupTransform.appendFrom(r, s.relativeGroupTransform), t & se && ne(a, s, t)) : (t = a._updateFlags, a.relativeGroupTransform.copyFrom(r), t & se && ne(a, ct, t)), !a.renderGroup) {
        var n = a.children, i = n.length;
        for(var c = 0; c < i; c++)Me(n[c], e, t);
        var o = a.parentRenderGroup, d = a;
        d.renderPipeId && !o.structureDidChange && o.updateRenderable(d);
    }
}
function ne(a, e, t) {
    if (t & pe) {
        a.groupColor = ce(a.localColor, e.groupColor);
        var r = a.localAlpha * e.groupAlpha;
        r = r < 0 ? 0 : r > 1 ? 1 : r, a.groupAlpha = r, a.groupColorAlpha = a.groupColor + ((r * 255 | 0) << 24);
    }
    t & fe && (a.groupBlendMode = a.localBlendMode === "inherit" ? e.groupBlendMode : a.localBlendMode), t & he && (a.globalDisplayStatus = a.localDisplayStatus & e.globalDisplayStatus), a._updateFlags = 0;
}
function pt(a, e) {
    var _a_childrenRenderablesToUpdate = a.childrenRenderablesToUpdate, t = _a_childrenRenderablesToUpdate.list;
    var r = !1;
    for(var s = 0; s < a.childrenRenderablesToUpdate.index; s++){
        var n = t[s];
        if (r = e[n.renderPipeId].validateRenderable(n), r) break;
    }
    return a.structureDidChange = r, r;
}
var ft = new m;
var Re = /*#__PURE__*/ function() {
    "use strict";
    function Re(e) {
        _class_call_check(this, Re);
        this._renderer = e;
    }
    _create_class(Re, [
        {
            key: "render",
            value: function render(param) {
                var e = param.container, t = param.transform;
                var r = e.parent, s = e.renderGroup.renderGroupParent;
                e.parent = null, e.renderGroup.renderGroupParent = null;
                var n = this._renderer, i = ft;
                t && (i.copyFrom(e.renderGroup.localTransform), e.renderGroup.localTransform.copyFrom(t));
                var o = n.renderPipes;
                this._updateCachedRenderGroups(e.renderGroup, null), this._updateRenderGroups(e.renderGroup), n.globalUniforms.start({
                    worldTransformMatrix: t ? e.renderGroup.localTransform : e.renderGroup.worldTransform,
                    worldColor: e.renderGroup.worldColorAlpha
                }), L(e.renderGroup, o), o.uniformBatch && o.uniformBatch.renderEnd(), t && e.renderGroup.localTransform.copyFrom(i), e.parent = r, e.renderGroup.renderGroupParent = s;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null;
            }
        },
        {
            key: "_updateCachedRenderGroups",
            value: function _updateCachedRenderGroups(e, t) {
                if (e._parentCacheAsTextureRenderGroup = t, e.isCachedAsTexture) {
                    if (!e.textureNeedsUpdate) return;
                    t = e;
                }
                for(var r = e.renderGroupChildren.length - 1; r >= 0; r--)this._updateCachedRenderGroups(e.renderGroupChildren[r], t);
                if (e.invalidateMatrices(), e.isCachedAsTexture) {
                    if (e.textureNeedsUpdate) {
                        var _e_textureOptions_antialias, _e_textureOptions_scaleMode;
                        var r1 = e.root.getLocalBounds(), s = this._renderer, n = e.textureOptions.resolution || s.view.resolution, i = (_e_textureOptions_antialias = e.textureOptions.antialias) !== null && _e_textureOptions_antialias !== void 0 ? _e_textureOptions_antialias : s.view.antialias, o = (_e_textureOptions_scaleMode = e.textureOptions.scaleMode) !== null && _e_textureOptions_scaleMode !== void 0 ? _e_textureOptions_scaleMode : "linear", d = e.texture;
                        r1.ceil(), e.texture && T.returnTexture(e.texture, !0);
                        var c = T.getOptimalTexture(r1.width, r1.height, n, i);
                        c._source.style = new Ye({
                            scaleMode: o
                        }), e.texture = c, e._textureBounds || (e._textureBounds = new N), e._textureBounds.copyFrom(r1), d !== e.texture && e.renderGroupParent && (e.renderGroupParent.structureDidChange = !0);
                    }
                } else e.texture && (T.returnTexture(e.texture, !0), e.texture = null);
            }
        },
        {
            key: "_updateRenderGroups",
            value: function _updateRenderGroups(e) {
                var t = this._renderer, r = t.renderPipes;
                if (e.runOnRender(t), e.instructionSet.renderPipes = r, e.structureDidChange ? F(e.childrenRenderablesToUpdate.list, 0) : pt(e, r), ke(e), e.structureDidChange ? (e.structureDidChange = !1, this._buildInstructions(e, t)) : this._updateRenderables(e), e.childrenRenderablesToUpdate.index = 0, t.renderPipes.batch.upload(e.instructionSet), !(e.isCachedAsTexture && !e.textureNeedsUpdate)) for(var s = 0; s < e.renderGroupChildren.length; s++)this._updateRenderGroups(e.renderGroupChildren[s]);
            }
        },
        {
            key: "_updateRenderables",
            value: function _updateRenderables(e) {
                var _e_childrenRenderablesToUpdate = e.childrenRenderablesToUpdate, t = _e_childrenRenderablesToUpdate.list, r = _e_childrenRenderablesToUpdate.index;
                for(var s = 0; s < r; s++){
                    var n = t[s];
                    n.didViewUpdate && e.updateRenderable(n);
                }
                F(t, r);
            }
        },
        {
            key: "_buildInstructions",
            value: function _buildInstructions(e, t) {
                var r = e.root, s = e.instructionSet;
                s.reset();
                var n = t.renderPipes ? t : t.batch.renderer, i = n.renderPipes;
                i.batch.buildStart(s), i.blendMode.buildStart(), i.colorMask.buildStart(), r.sortableChildren && r.sortChildren(), r.collectRenderablesWithEffects(s, n, null), i.batch.buildEnd(s), i.blendMode.buildEnd(s);
            }
        }
    ]);
    return Re;
}();
Re.extension = {
    type: [
        l.WebGLSystem,
        l.WebGPUSystem,
        l.CanvasSystem
    ],
    name: "renderGroup"
};
var $ = /*#__PURE__*/ function() {
    "use strict";
    function Se() {
        _class_call_check(this, Se);
        this.clearBeforeRender = !0, this._backgroundColor = new D(0), this.color = this._backgroundColor, this.alpha = 1;
    }
    _create_class(Se, [
        {
            key: "init",
            value: function init(e) {
                e = _object_spread({}, Se.defaultOptions, e), this.clearBeforeRender = e.clearBeforeRender, this.color = e.background || e.backgroundColor || this._backgroundColor, this.alpha = e.backgroundAlpha, this._backgroundColor.setAlpha(e.backgroundAlpha);
            }
        },
        {
            key: "color",
            get: function get() {
                return this._backgroundColor;
            },
            set: function set(e) {
                D.shared.setValue(e).alpha < 1 && this._backgroundColor.alpha === 1 && oe("Cannot set a transparent background on an opaque canvas. To enable transparency, set backgroundAlpha < 1 when initializing your Application."), this._backgroundColor.setValue(e);
            }
        },
        {
            key: "alpha",
            get: function get() {
                return this._backgroundColor.alpha;
            },
            set: function set(e) {
                this._backgroundColor.setAlpha(e);
            }
        },
        {
            key: "colorRgba",
            get: function get() {
                return this._backgroundColor.toArray();
            }
        },
        {
            key: "destroy",
            value: function destroy() {}
        }
    ]);
    return Se;
}();
$.extension = {
    type: [
        l.WebGLSystem,
        l.WebGPUSystem,
        l.CanvasSystem
    ],
    name: "background",
    priority: 0
};
$.defaultOptions = {
    backgroundAlpha: 1,
    backgroundColor: 0,
    clearBeforeRender: !0
};
var mt = $;
var I = {
    png: "image/png",
    jpg: "image/jpeg",
    webp: "image/webp"
}, q = /*#__PURE__*/ function() {
    "use strict";
    function we(e) {
        _class_call_check(this, we);
        this._renderer = e;
    }
    _create_class(we, [
        {
            key: "_normalizeOptions",
            value: function _normalizeOptions(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return _instanceof1(e, w) || _instanceof1(e, f) ? _object_spread({
                    target: e
                }, t) : _object_spread({}, t, e);
            }
        },
        {
            key: "image",
            value: function image(e) {
                return _async_to_generator(function() {
                    var t;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                t = V.get().createImage();
                                return [
                                    4,
                                    this.base64(e)
                                ];
                            case 1:
                                return [
                                    2,
                                    (t.src = _state.sent(), t)
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "base64",
            value: function base64(e) {
                return _async_to_generator(function() {
                    var t, r, s, n;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                e = this._normalizeOptions(e, we.defaultImageOptions);
                                t = e.format, r = e.quality, s = this.canvas(e);
                                if (s.toBlob !== void 0) return [
                                    2,
                                    new Promise(function(n, i) {
                                        s.toBlob(function(o) {
                                            if (!o) {
                                                i(new Error("ICanvas.toBlob failed!"));
                                                return;
                                            }
                                            var d = new FileReader;
                                            d.onload = function() {
                                                return n(d.result);
                                            }, d.onerror = i, d.readAsDataURL(o);
                                        }, I[t], r);
                                    })
                                ];
                                if (s.toDataURL !== void 0) return [
                                    2,
                                    s.toDataURL(I[t], r)
                                ];
                                if (!(s.convertToBlob !== void 0)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    s.convertToBlob({
                                        type: I[t],
                                        quality: r
                                    })
                                ];
                            case 1:
                                n = _state.sent();
                                return [
                                    2,
                                    new Promise(function(i, o) {
                                        var d = new FileReader;
                                        d.onload = function() {
                                            return i(d.result);
                                        }, d.onerror = o, d.readAsDataURL(n);
                                    })
                                ];
                            case 2:
                                throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented");
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "canvas",
            value: function canvas(e) {
                e = this._normalizeOptions(e);
                var t = e.target, r = this._renderer;
                if (_instanceof1(t, f)) return r.texture.generateCanvas(t);
                var s = r.textureGenerator.generateTexture(e), n = r.texture.generateCanvas(s);
                return s.destroy(!0), n;
            }
        },
        {
            key: "pixels",
            value: function pixels(e) {
                e = this._normalizeOptions(e);
                var t = e.target, r = this._renderer, s = _instanceof1(t, f) ? t : r.textureGenerator.generateTexture(e), n = r.texture.getPixels(s);
                return _instanceof1(t, w) && s.destroy(!0), n;
            }
        },
        {
            key: "texture",
            value: function texture(e) {
                return e = this._normalizeOptions(e), _instanceof1(e.target, f) ? e.target : this._renderer.textureGenerator.generateTexture(e);
            }
        },
        {
            key: "download",
            value: function download(e) {
                var _e_filename;
                e = this._normalizeOptions(e);
                var t = this.canvas(e), r = document.createElement("a");
                r.download = (_e_filename = e.filename) !== null && _e_filename !== void 0 ? _e_filename : "image.png", r.href = t.toDataURL("image/png"), document.body.appendChild(r), r.click(), document.body.removeChild(r);
            }
        },
        {
            key: "log",
            value: function log(e) {
                var _e_width;
                var t = (_e_width = e.width) !== null && _e_width !== void 0 ? _e_width : 200;
                e = this._normalizeOptions(e);
                var r = this.canvas(e), s = r.toDataURL();
                console.log("[Pixi Texture] ".concat(r.width, "px ").concat(r.height, "px"));
                var n = [
                    "font-size: 1px;",
                    "padding: ".concat(t, "px 300px;"),
                    "background: url(".concat(s, ") no-repeat;"),
                    "background-size: contain;"
                ].join(" ");
                console.log("%c ", n);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null;
            }
        }
    ]);
    return we;
}();
q.extension = {
    type: [
        l.WebGLSystem,
        l.WebGPUSystem,
        l.CanvasSystem
    ],
    name: "extract"
};
q.defaultImageOptions = {
    format: "png",
    quality: 1
};
var gt = q;
var _t = new P, xt = new N, bt = [
    0,
    0,
    0,
    0
];
var Pe = /*#__PURE__*/ function() {
    "use strict";
    function Pe(e) {
        _class_call_check(this, Pe);
        this._renderer = e;
    }
    _create_class(Pe, [
        {
            key: "generateTexture",
            value: function generateTexture(e) {
                var _e_frame;
                _instanceof1(e, w) && (e = {
                    target: e,
                    frame: void 0,
                    textureSourceOptions: {},
                    resolution: void 0
                });
                var t = e.resolution || this._renderer.resolution, r = e.antialias || this._renderer.view.antialias, s = e.target;
                var n = e.clearColor;
                n ? n = Array.isArray(n) && n.length === 4 ? n : D.shared.setValue(n).toArray() : n = bt;
                var i = ((_e_frame = e.frame) === null || _e_frame === void 0 ? void 0 : _e_frame.copyTo(_t)) || Je(s, xt).rectangle, o = e.defaultAnchor && {
                    defaultAnchor: e.defaultAnchor
                };
                i.width = Math.max(i.width, 1 / t) | 0, i.height = Math.max(i.height, 1 / t) | 0;
                var d = Xe.create(_object_spread_props(_object_spread({}, e.textureSourceOptions), {
                    width: i.width,
                    height: i.height,
                    resolution: t,
                    antialias: r,
                    textureOptions: o
                })), c = m.shared.translate(-i.x, -i.y);
                return this._renderer.render({
                    container: s,
                    transform: c,
                    target: d,
                    clearColor: n
                }), d.source.updateMipmaps(), d;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null;
            }
        }
    ]);
    return Pe;
}();
Pe.extension = {
    type: [
        l.WebGLSystem,
        l.WebGPUSystem,
        l.CanvasSystem
    ],
    name: "textureGenerator"
};
function Tt(a) {
    var e = !1;
    for(var r in a)if (a[r] == null) {
        e = !0;
        break;
    }
    if (!e) return a;
    var t = Object.create(null);
    for(var r1 in a){
        var s = a[r1];
        s && (t[r1] = s);
    }
    return t;
}
function vt(a) {
    var e = 0;
    for(var t = 0; t < a.length; t++)a[t] == null ? e++ : a[t - e] = a[t];
    return a.length -= e, a;
}
var K = /*#__PURE__*/ function() {
    "use strict";
    function Be(e) {
        _class_call_check(this, Be);
        this._managedResources = [], this._managedResourceHashes = [], this._managedCollections = [], this._ready = !1, this._renderer = e;
    }
    _create_class(Be, [
        {
            key: "init",
            value: function init(e) {
                e = _object_spread({}, Be.defaultOptions, e), this.maxUnusedTime = e.gcMaxUnusedTime, this._frequency = e.gcFrequency, this.enabled = e.gcActive, this.now = performance.now();
            }
        },
        {
            key: "enabled",
            get: function get() {
                return !!this._handler;
            },
            set: function set(e) {
                var _this = this;
                this.enabled !== e && (e ? (this._handler = this._renderer.scheduler.repeat(function() {
                    _this._ready = !0;
                }, this._frequency, !1), this._collectionsHandler = this._renderer.scheduler.repeat(function() {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = _this._managedCollections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var t = _step.value;
                            var r = t.context, s = t.collection, n = t.type;
                            n === "hash" ? r[s] = Tt(r[s]) : r[s] = vt(r[s]);
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
                }, this._frequency)) : (this._renderer.scheduler.cancel(this._handler), this._renderer.scheduler.cancel(this._collectionsHandler), this._handler = 0, this._collectionsHandler = 0));
            }
        },
        {
            key: "prerender",
            value: function prerender(param) {
                var e = param.container;
                this.now = performance.now(), e.renderGroup.gcTick = this._renderer.tick++, this._updateInstructionGCTick(e.renderGroup, e.renderGroup.gcTick);
            }
        },
        {
            key: "postrender",
            value: function postrender() {
                !this._ready || !this.enabled || (this.run(), this._ready = !1);
            }
        },
        {
            key: "_updateInstructionGCTick",
            value: function _updateInstructionGCTick(e, t) {
                e.instructionSet.gcTick = t, e.gcTick = t;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = e.renderGroupChildren[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var r = _step.value;
                        this._updateInstructionGCTick(r, t);
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
        },
        {
            key: "addCollection",
            value: function addCollection(e, t, r) {
                this._managedCollections.push({
                    context: e,
                    collection: t,
                    type: r
                });
            }
        },
        {
            key: "addResource",
            value: function addResource(e, t) {
                var _e__onTouch;
                if (e._gcLastUsed !== -1) {
                    var _e__onTouch1;
                    e._gcLastUsed = this.now, (_e__onTouch1 = e._onTouch) === null || _e__onTouch1 === void 0 ? void 0 : _e__onTouch1.call(e, this.now);
                    return;
                }
                var r = this._managedResources.length;
                e._gcData = {
                    index: r,
                    type: t
                }, e._gcLastUsed = this.now, (_e__onTouch = e._onTouch) === null || _e__onTouch === void 0 ? void 0 : _e__onTouch.call(e, this.now), e.once("unload", this.removeResource, this), this._managedResources.push(e);
            }
        },
        {
            key: "removeResource",
            value: function removeResource(e) {
                var t = e._gcData;
                if (!t) return;
                var r = t.index, s = this._managedResources.length - 1;
                if (r !== s) {
                    var n = this._managedResources[s];
                    this._managedResources[r] = n, n._gcData.index = r;
                }
                this._managedResources.length--, e._gcData = null, e._gcLastUsed = -1;
            }
        },
        {
            key: "addResourceHash",
            value: function addResourceHash(e, t, r) {
                var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
                this._managedResourceHashes.push({
                    context: e,
                    hash: t,
                    type: r,
                    priority: s
                }), this._managedResourceHashes.sort(function(n, i) {
                    return n.priority - i.priority;
                });
            }
        },
        {
            key: "run",
            value: function run() {
                var e = performance.now(), t = this._managedResourceHashes;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var s = _step.value;
                        this.runOnHash(s, e);
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
                var r = 0;
                for(var s1 = 0; s1 < this._managedResources.length; s1++){
                    var n = this._managedResources[s1];
                    r = this.runOnResource(n, e, r);
                }
                this._managedResources.length = r;
            }
        },
        {
            key: "updateRenderableGCTick",
            value: function updateRenderableGCTick(e, t) {
                var _e_renderGroup, _ref, _ref1;
                var _r_instructionSet, _e__onTouch;
                var r = (_e_renderGroup = e.renderGroup) !== null && _e_renderGroup !== void 0 ? _e_renderGroup : e.parentRenderGroup, s = (_ref = r === null || r === void 0 ? void 0 : (_r_instructionSet = r.instructionSet) === null || _r_instructionSet === void 0 ? void 0 : _r_instructionSet.gcTick) !== null && _ref !== void 0 ? _ref : -1;
                ((_ref1 = r === null || r === void 0 ? void 0 : r.gcTick) !== null && _ref1 !== void 0 ? _ref1 : 0) === s && (e._gcLastUsed = t, (_e__onTouch = e._onTouch) === null || _e__onTouch === void 0 ? void 0 : _e__onTouch.call(e, t));
            }
        },
        {
            key: "runOnResource",
            value: function runOnResource(e, t, r) {
                var s = e._gcData;
                return s.type === "renderable" && this.updateRenderableGCTick(e, t), t - e._gcLastUsed < this.maxUnusedTime || !e.autoGarbageCollect ? (this._managedResources[r] = e, s.index = r, r++) : (e.unload(), e._gcData = null, e._gcLastUsed = -1, e.off("unload", this.removeResource, this)), r;
            }
        },
        {
            key: "_createHashClone",
            value: function _createHashClone(e, t) {
                var r = Object.create(null);
                for(var s in e){
                    if (s === t) break;
                    e[s] !== null && (r[s] = e[s]);
                }
                return r;
            }
        },
        {
            key: "runOnHash",
            value: function runOnHash(e, t) {
                var r = e.context, s = e.hash, n = e.type, i = r[s];
                var o = null, d = 0;
                for(var c in i){
                    var u = i[c];
                    if (u === null) {
                        d++, d === 1e4 && !o && (o = this._createHashClone(i, c));
                        continue;
                    }
                    if (u._gcLastUsed === -1) {
                        var _u__onTouch;
                        u._gcLastUsed = t, (_u__onTouch = u._onTouch) === null || _u__onTouch === void 0 ? void 0 : _u__onTouch.call(u, t), o && (o[c] = u);
                        continue;
                    }
                    if (n === "renderable" && this.updateRenderableGCTick(u, t), !(t - u._gcLastUsed < this.maxUnusedTime) && u.autoGarbageCollect) {
                        if (o || (d + 1 !== 1e4 ? (i[c] = null, d++) : o = this._createHashClone(i, c)), n === "renderable") {
                            var _b_renderGroup;
                            var b = u, _ = (_b_renderGroup = b.renderGroup) !== null && _b_renderGroup !== void 0 ? _b_renderGroup : b.parentRenderGroup;
                            _ && (_.structureDidChange = !0);
                        }
                        u.unload(), u._gcData = null, u._gcLastUsed = -1;
                    } else o && (o[c] = u);
                }
                o && (r[s] = o);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this = this;
                this.enabled = !1, this._managedResources.forEach(function(e) {
                    e.off("unload", _this.removeResource, _this);
                }), this._managedResources.length = 0, this._managedResourceHashes.length = 0, this._managedCollections.length = 0, this._renderer = null;
            }
        }
    ]);
    return Be;
}();
K.extension = {
    type: [
        l.WebGLSystem,
        l.WebGPUSystem,
        l.CanvasSystem
    ],
    name: "gc",
    priority: 0
};
K.defaultOptions = {
    gcActive: !0,
    gcMaxUnusedTime: 6e4,
    gcFrequency: 3e4
};
var yt = K;
var Ge = /*#__PURE__*/ function() {
    "use strict";
    function Ge(e) {
        _class_call_check(this, Ge);
        this._stackIndex = 0, this._globalUniformDataStack = [], this._uniformsPool = [], this._activeUniforms = [], this._bindGroupPool = [], this._activeBindGroups = [], this._renderer = e;
    }
    _create_class(Ge, [
        {
            key: "reset",
            value: function reset() {
                this._stackIndex = 0;
                for(var e = 0; e < this._activeUniforms.length; e++)this._uniformsPool.push(this._activeUniforms[e]);
                for(var e1 = 0; e1 < this._activeBindGroups.length; e1++)this._bindGroupPool.push(this._activeBindGroups[e1]);
                this._activeUniforms.length = 0, this._activeBindGroups.length = 0;
            }
        },
        {
            key: "start",
            value: function start(e) {
                this.reset(), this.push(e);
            }
        },
        {
            key: "bind",
            value: function bind(param) {
                var e = param.size, t = param.projectionMatrix, r = param.worldTransformMatrix, s = param.worldColor, n = param.offset;
                var i = this._renderer.renderTarget.renderTarget, o = this._stackIndex ? this._globalUniformDataStack[this._stackIndex - 1] : {
                    worldTransformMatrix: new m,
                    worldColor: 4294967295,
                    offset: new je
                }, d = {
                    projectionMatrix: t || this._renderer.renderTarget.projectionMatrix,
                    resolution: e || i.size,
                    worldTransformMatrix: r || o.worldTransformMatrix,
                    worldColor: s || o.worldColor,
                    offset: n || o.offset,
                    bindGroup: null
                }, c = this._uniformsPool.pop() || this._createUniforms();
                this._activeUniforms.push(c);
                var u = c.uniforms;
                u.uProjectionMatrix = d.projectionMatrix, u.uResolution = d.resolution, u.uWorldTransformMatrix.copyFrom(d.worldTransformMatrix), u.uWorldTransformMatrix.tx -= d.offset.x, u.uWorldTransformMatrix.ty -= d.offset.y, $e(d.worldColor, u.uWorldColorAlpha, 0), c.update();
                var h;
                this._renderer.renderPipes.uniformBatch ? h = this._renderer.renderPipes.uniformBatch.getUniformBindGroup(c, !1) : (h = this._bindGroupPool.pop() || new qe, this._activeBindGroups.push(h), h.setResource(c, 0)), d.bindGroup = h, this._currentGlobalUniformData = d;
            }
        },
        {
            key: "push",
            value: function push(e) {
                this.bind(e), this._globalUniformDataStack[this._stackIndex++] = this._currentGlobalUniformData;
            }
        },
        {
            key: "pop",
            value: function pop() {
                this._currentGlobalUniformData = this._globalUniformDataStack[--this._stackIndex - 1], this._renderer.type === z.WEBGL && this._currentGlobalUniformData.bindGroup.resources[0].update();
            }
        },
        {
            key: "bindGroup",
            get: function get() {
                return this._currentGlobalUniformData.bindGroup;
            }
        },
        {
            key: "globalUniformData",
            get: function get() {
                return this._currentGlobalUniformData;
            }
        },
        {
            key: "uniformGroup",
            get: function get() {
                return this._currentGlobalUniformData.bindGroup.resources[0];
            }
        },
        {
            key: "_createUniforms",
            value: function _createUniforms() {
                return new le({
                    uProjectionMatrix: {
                        value: new m,
                        type: "mat3x3<f32>"
                    },
                    uWorldTransformMatrix: {
                        value: new m,
                        type: "mat3x3<f32>"
                    },
                    uWorldColorAlpha: {
                        value: new Float32Array(4),
                        type: "vec4<f32>"
                    },
                    uResolution: {
                        value: [
                            0,
                            0
                        ],
                        type: "vec2<f32>"
                    }
                }, {
                    isStatic: !0
                });
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null, this._globalUniformDataStack.length = 0, this._uniformsPool.length = 0, this._activeUniforms.length = 0, this._bindGroupPool.length = 0, this._activeBindGroups.length = 0, this._currentGlobalUniformData = null;
            }
        }
    ]);
    return Ge;
}();
Ge.extension = {
    type: [
        l.WebGLSystem,
        l.WebGPUSystem,
        l.CanvasSystem
    ],
    name: "globalUniforms"
};
var Ct = 1;
var Ue = /*#__PURE__*/ function() {
    "use strict";
    function Ue() {
        _class_call_check(this, Ue);
        this._tasks = [], this._offset = 0;
    }
    _create_class(Ue, [
        {
            key: "init",
            value: function init() {
                Z.system.add(this._update, this);
            }
        },
        {
            key: "repeat",
            value: function repeat(e, t) {
                var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
                var s = Ct++;
                var n = 0;
                return r && (this._offset += 1e3, n = this._offset), this._tasks.push({
                    func: e,
                    duration: t,
                    start: performance.now(),
                    offset: n,
                    last: performance.now(),
                    repeat: !0,
                    id: s
                }), s;
            }
        },
        {
            key: "cancel",
            value: function cancel(e) {
                for(var t = 0; t < this._tasks.length; t++)if (this._tasks[t].id === e) {
                    this._tasks.splice(t, 1);
                    return;
                }
            }
        },
        {
            key: "_update",
            value: function _update() {
                var e = performance.now();
                for(var t = 0; t < this._tasks.length; t++){
                    var r = this._tasks[t];
                    if (e - r.offset - r.last >= r.duration) {
                        var s = e - r.start;
                        r.func(s), r.last = e;
                    }
                }
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                Z.system.remove(this._update, this), this._tasks.length = 0;
            }
        }
    ]);
    return Ue;
}();
Ue.extension = {
    type: [
        l.WebGLSystem,
        l.WebGPUSystem,
        l.CanvasSystem
    ],
    name: "scheduler",
    priority: 0
};
var ae = !1;
function kt(a) {
    if (!ae) {
        if (V.get().getNavigator().userAgent.toLowerCase().indexOf("chrome") > -1) {
            var _globalThis_console;
            var e = [
                "%c  %c  %c  %c  %c PixiJS %c v".concat(ee, " (").concat(a, ") http://www.pixijs.com/\n\n"),
                "background: #E72264; padding:5px 0;",
                "background: #6CA2EA; padding:5px 0;",
                "background: #B5D33D; padding:5px 0;",
                "background: #FED23F; padding:5px 0;",
                "color: #FFFFFF; background: #E72264; padding:5px 0;",
                "color: #E72264; background: #FFFFFF; padding:5px 0;"
            ];
            (_globalThis_console = globalThis.console).log.apply(_globalThis_console, _to_consumable_array(e));
        } else globalThis.console && globalThis.console.log("PixiJS ".concat(ee, " - ").concat(a, " - http://www.pixijs.com/"));
        ae = !0;
    }
}
var Y = /*#__PURE__*/ function() {
    "use strict";
    function Y(e) {
        _class_call_check(this, Y);
        this._renderer = e;
    }
    _create_class(Y, [
        {
            key: "init",
            value: function init(e) {
                if (e.hello) {
                    var t = this._renderer.name;
                    this._renderer.type === z.WEBGL && (t += " ".concat(this._renderer.context.webGLVersion)), kt(t);
                }
            }
        }
    ]);
    return Y;
}();
Y.extension = {
    type: [
        l.WebGLSystem,
        l.WebGPUSystem,
        l.CanvasSystem
    ],
    name: "hello",
    priority: -2
};
Y.defaultOptions = {
    hello: !1
};
var J = /*#__PURE__*/ function() {
    "use strict";
    function Ae(e) {
        _class_call_check(this, Ae);
        this._renderer = e;
    }
    _create_class(Ae, [
        {
            key: "init",
            value: function init(e) {
                e = _object_spread({}, Ae.defaultOptions, e), this.maxUnusedTime = e.renderableGCMaxUnusedTime;
            }
        },
        {
            key: "enabled",
            get: function get() {
                return p("8.15.0", "RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead."), this._renderer.gc.enabled;
            },
            set: function set(e) {
                p("8.15.0", "RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead."), this._renderer.gc.enabled = e;
            }
        },
        {
            key: "addManagedHash",
            value: function addManagedHash(e, t) {
                p("8.15.0", "RenderableGCSystem.addManagedHash is deprecated, please use the GCSystem.addCollection instead."), this._renderer.gc.addCollection(e, t, "hash");
            }
        },
        {
            key: "addManagedArray",
            value: function addManagedArray(e, t) {
                p("8.15.0", "RenderableGCSystem.addManagedArray is deprecated, please use the GCSystem.addCollection instead."), this._renderer.gc.addCollection(e, t, "array");
            }
        },
        {
            key: "addRenderable",
            value: function addRenderable(e) {
                p("8.15.0", "RenderableGCSystem.addRenderable is deprecated, please use the GCSystem instead."), this._renderer.gc.addResource(e, "renderable");
            }
        },
        {
            key: "run",
            value: function run() {
                p("8.15.0", "RenderableGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.run();
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null;
            }
        }
    ]);
    return Ae;
}();
J.extension = {
    type: [
        l.WebGLSystem,
        l.WebGPUSystem,
        l.CanvasSystem
    ],
    name: "renderableGC",
    priority: 0
};
J.defaultOptions = {
    renderableGCActive: !0,
    renderableGCMaxUnusedTime: 6e4,
    renderableGCFrequency: 3e4
};
var Mt = J;
var X = /*#__PURE__*/ function() {
    "use strict";
    function S(e) {
        _class_call_check(this, S);
        this._renderer = e, this._checkCount = 0;
    }
    _create_class(S, [
        {
            key: "count",
            get: function get() {
                return this._renderer.tick;
            }
        },
        {
            key: "checkCount",
            get: function get() {
                return this._checkCount;
            },
            set: function set(e) {
                p("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._checkCount = e;
            }
        },
        {
            key: "maxIdle",
            get: function get() {
                return this._renderer.gc.maxUnusedTime / 1e3 * 60;
            },
            set: function set(e) {
                p("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.maxUnusedTime = e / 60 * 1e3;
            }
        },
        {
            key: "checkCountMax",
            get: function get() {
                return Math.floor(this._renderer.gc._frequency / 1e3);
            },
            set: function set(e) {
                p("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead.");
            }
        },
        {
            key: "active",
            get: function get() {
                return this._renderer.gc.enabled;
            },
            set: function set(e) {
                p("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.enabled = e;
            }
        },
        {
            key: "init",
            value: function init(e) {
                e.textureGCActive !== S.defaultOptions.textureGCActive && (this.active = e.textureGCActive), e.textureGCMaxIdle !== S.defaultOptions.textureGCMaxIdle && (this.maxIdle = e.textureGCMaxIdle), e.textureGCCheckCountMax !== S.defaultOptions.textureGCCheckCountMax && (this.checkCountMax = e.textureGCCheckCountMax);
            }
        },
        {
            key: "run",
            value: function run() {
                p("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.run();
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null;
            }
        }
    ]);
    return S;
}();
X.extension = {
    type: [
        l.WebGLSystem,
        l.WebGPUSystem
    ],
    name: "textureGC"
};
X.defaultOptions = {
    textureGCActive: !0,
    textureGCAMaxIdle: null,
    textureGCMaxIdle: 3600,
    textureGCCheckCountMax: 600
};
var Rt = X;
var Ie = /*#__PURE__*/ function() {
    "use strict";
    function De() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _class_call_check(this, De);
        if (this.uid = Ze("renderTarget"), this.colorTextures = [], this.dirtyId = 0, this.isRoot = !1, this._size = new Float32Array(2), this._managedColorTextures = !1, e = _object_spread({}, De.defaultOptions, e), this.stencil = e.stencil, this.depth = e.depth, this.isRoot = e.isRoot, typeof e.colorTextures == "number") {
            this._managedColorTextures = !0;
            for(var t = 0; t < e.colorTextures; t++)this.colorTextures.push(new R({
                width: e.width,
                height: e.height,
                resolution: e.resolution,
                antialias: e.antialias
            }));
        } else {
            this.colorTextures = _to_consumable_array(e.colorTextures.map(function(r) {
                return r.source;
            }));
            var t1 = this.colorTexture.source;
            this.resize(t1.width, t1.height, t1._resolution);
        }
        this.colorTexture.source.on("resize", this.onSourceResize, this), (e.depthStencilTexture || this.stencil) && (_instanceof1(e.depthStencilTexture, f) || _instanceof1(e.depthStencilTexture, R) ? this.depthStencilTexture = e.depthStencilTexture.source : this.ensureDepthStencilTexture());
    }
    _create_class(De, [
        {
            key: "size",
            get: function get() {
                var e = this._size;
                return e[0] = this.pixelWidth, e[1] = this.pixelHeight, e;
            }
        },
        {
            key: "width",
            get: function get() {
                return this.colorTexture.source.width;
            }
        },
        {
            key: "height",
            get: function get() {
                return this.colorTexture.source.height;
            }
        },
        {
            key: "pixelWidth",
            get: function get() {
                return this.colorTexture.source.pixelWidth;
            }
        },
        {
            key: "pixelHeight",
            get: function get() {
                return this.colorTexture.source.pixelHeight;
            }
        },
        {
            key: "resolution",
            get: function get() {
                return this.colorTexture.source._resolution;
            }
        },
        {
            key: "colorTexture",
            get: function get() {
                return this.colorTextures[0];
            }
        },
        {
            key: "onSourceResize",
            value: function onSourceResize(e) {
                this.resize(e.width, e.height, e._resolution, !0);
            }
        },
        {
            key: "ensureDepthStencilTexture",
            value: function ensureDepthStencilTexture() {
                this.depthStencilTexture || (this.depthStencilTexture = new R({
                    width: this.width,
                    height: this.height,
                    resolution: this.resolution,
                    format: "depth24plus-stencil8",
                    autoGenerateMipmaps: !1,
                    antialias: !1,
                    mipLevelCount: 1
                }));
            }
        },
        {
            key: "resize",
            value: function resize(e, t) {
                var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.resolution, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
                this.dirtyId++, this.colorTextures.forEach(function(n, i) {
                    s && i === 0 || n.source.resize(e, t, r);
                }), this.depthStencilTexture && this.depthStencilTexture.source.resize(e, t, r);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.colorTexture.source.off("resize", this.onSourceResize, this), this._managedColorTextures && this.colorTextures.forEach(function(e) {
                    e.destroy();
                }), this.depthStencilTexture && (this.depthStencilTexture.destroy(), delete this.depthStencilTexture);
            }
        }
    ]);
    return De;
}();
Ie.defaultOptions = {
    width: 0,
    height: 0,
    resolution: 1,
    colorTextures: 1,
    stencil: !1,
    depth: !1,
    antialias: !1,
    isRoot: !1
};
var H = Ie;
var x = new Map;
ze.register(x);
function Ee(a, e) {
    if (!x.has(a)) {
        var t = new f({
            source: new O(_object_spread({
                resource: a
            }, e))
        }), r = function r() {
            x.get(a) === t && x.delete(a);
        };
        t.once("destroy", r), t.source.once("destroy", r), x.set(a, t);
    }
    return x.get(a);
}
var Q = /*#__PURE__*/ function() {
    "use strict";
    function Oe() {
        _class_call_check(this, Oe);
    }
    _create_class(Oe, [
        {
            key: "autoDensity",
            get: function get() {
                return this.texture.source.autoDensity;
            },
            set: function set(e) {
                this.texture.source.autoDensity = e;
            }
        },
        {
            key: "resolution",
            get: function get() {
                return this.texture.source._resolution;
            },
            set: function set(e) {
                this.texture.source.resize(this.texture.source.width, this.texture.source.height, e);
            }
        },
        {
            key: "init",
            value: function init(e) {
                e = _object_spread({}, Oe.defaultOptions, e), e.view && (p(Ke, "ViewSystem.view has been renamed to ViewSystem.canvas"), e.canvas = e.view), this.screen = new P(0, 0, e.width, e.height), this.canvas = e.canvas || V.get().createCanvas(), this.antialias = !!e.antialias, this.texture = Ee(this.canvas, e), this.renderTarget = new H({
                    colorTextures: [
                        this.texture
                    ],
                    depth: !!e.depth,
                    isRoot: !0
                }), this.texture.source.transparent = e.backgroundAlpha < 1, this.resolution = e.resolution;
            }
        },
        {
            key: "resize",
            value: function resize(e, t, r) {
                this.texture.source.resize(e, t, r), this.screen.width = this.texture.frame.width, this.screen.height = this.texture.frame.height;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                (typeof e == "boolean" ? e : e === null || e === void 0 ? void 0 : e.removeView) && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this.texture.destroy();
            }
        }
    ]);
    return Oe;
}();
Q.extension = {
    type: [
        l.WebGLSystem,
        l.WebGPUSystem,
        l.CanvasSystem
    ],
    name: "view",
    priority: 0
};
Q.defaultOptions = {
    width: 800,
    height: 600,
    autoDensity: !1,
    antialias: !1
};
var St = Q;
var Ut = [
    mt,
    Ge,
    Y,
    St,
    Re,
    yt,
    Rt,
    Pe,
    gt,
    Ne,
    Mt,
    Ue
], At = [
    Ce,
    ge,
    ye,
    ve,
    _e,
    be,
    xe,
    Te
];
function wt(a, e, t, r, s, n) {
    var i = n ? 1 : -1;
    return a.identity(), a.a = 1 / r * 2, a.d = i * (1 / s * 2), a.tx = -1 - e * a.a, a.ty = -i - t * a.d, a;
}
function Pt(a) {
    var e = a.colorTexture.source.resource;
    return globalThis.HTMLCanvasElement && _instanceof1(e, HTMLCanvasElement) && document.body.contains(e);
}
var It = /*#__PURE__*/ function() {
    "use strict";
    function It(e) {
        _class_call_check(this, It);
        this.rootViewPort = new P, this.viewport = new P, this.mipLevel = 0, this.layer = 0, this.onRenderTargetChange = new et("onRenderTargetChange"), this.projectionMatrix = new m, this.defaultClearColor = [
            0,
            0,
            0,
            0
        ], this._renderSurfaceToRenderTargetHash = new Map, this._gpuRenderTargetHash = Object.create(null), this._renderTargetStack = [], this._renderer = e, e.gc.addCollection(this, "_gpuRenderTargetHash", "hash");
    }
    _create_class(It, [
        {
            key: "finishRenderPass",
            value: function finishRenderPass() {
                this.adaptor.finishRenderPass(this.renderTarget);
            }
        },
        {
            key: "renderStart",
            value: function renderStart(param) {
                var e = param.target, t = param.clear, r = param.clearColor, s = param.frame, n = param.mipLevel, i = param.layer;
                var _this_adaptor_prerender, _this_adaptor;
                this._renderTargetStack.length = 0, this.push(e, t, r, s, n !== null && n !== void 0 ? n : 0, i !== null && i !== void 0 ? i : 0), this.rootViewPort.copyFrom(this.viewport), this.rootRenderTarget = this.renderTarget, this.renderingToScreen = Pt(this.rootRenderTarget), (_this_adaptor_prerender = (_this_adaptor = this.adaptor).prerender) === null || _this_adaptor_prerender === void 0 ? void 0 : _this_adaptor_prerender.call(_this_adaptor, this.rootRenderTarget);
            }
        },
        {
            key: "postrender",
            value: function postrender() {
                var _this_adaptor_postrender, _this_adaptor;
                (_this_adaptor_postrender = (_this_adaptor = this.adaptor).postrender) === null || _this_adaptor_postrender === void 0 ? void 0 : _this_adaptor_postrender.call(_this_adaptor, this.rootRenderTarget);
            }
        },
        {
            key: "bind",
            value: function bind(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = arguments.length > 2 ? arguments[2] : void 0, s = arguments.length > 3 ? arguments[3] : void 0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
                var o = this.getRenderTarget(e), d = this.renderTarget !== o;
                this.renderTarget = o, this.renderSurface = e;
                var c = this.getGpuRenderTarget(o);
                (o.pixelWidth !== c.width || o.pixelHeight !== c.height) && (this.adaptor.resizeGpuRenderTarget(o), c.width = o.pixelWidth, c.height = o.pixelHeight);
                var u = o.colorTexture, h = this.viewport, b = u.arrayLayerCount || 1;
                if ((i | 0) !== i && (i |= 0), i < 0 || i >= b) throw new Error("[RenderTargetSystem] layer ".concat(i, " is out of bounds (arrayLayerCount=").concat(b, ")."));
                this.mipLevel = n | 0, this.layer = i | 0;
                var _ = Math.max(u.pixelWidth >> n, 1), G = Math.max(u.pixelHeight >> n, 1);
                if (!s && _instanceof1(e, f) && (s = e.frame), s) {
                    var y = u._resolution, C = 1 << Math.max(n | 0, 0), Le = s.x * y + .5 | 0, Fe = s.y * y + .5 | 0, He = s.width * y + .5 | 0, We = s.height * y + .5 | 0;
                    var k = Math.floor(Le / C), M = Math.floor(Fe / C), U = Math.ceil(He / C), A = Math.ceil(We / C);
                    k = Math.min(Math.max(k, 0), _ - 1), M = Math.min(Math.max(M, 0), G - 1), U = Math.min(Math.max(U, 1), _ - k), A = Math.min(Math.max(A, 1), G - M), h.x = k, h.y = M, h.width = U, h.height = A;
                } else h.x = 0, h.y = 0, h.width = _, h.height = G;
                return wt(this.projectionMatrix, 0, 0, h.width / u.resolution, h.height / u.resolution, !o.isRoot), this.adaptor.startRenderPass(o, t, r, h, n, i), d && this.onRenderTargetChange.emit(o), o;
            }
        },
        {
            key: "clear",
            value: function clear(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E.ALL, r = arguments.length > 2 ? arguments[2] : void 0, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : this.mipLevel, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.layer;
                t && (e && (e = this.getRenderTarget(e)), this.adaptor.clear(e || this.renderTarget, t, r, this.viewport, s, n));
            }
        },
        {
            key: "contextChange",
            value: function contextChange() {
                this._gpuRenderTargetHash = Object.create(null);
            }
        },
        {
            key: "push",
            value: function push(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E.ALL, r = arguments.length > 2 ? arguments[2] : void 0, s = arguments.length > 3 ? arguments[3] : void 0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
                var o = this.bind(e, t, r, s, n, i);
                return this._renderTargetStack.push({
                    renderTarget: o,
                    frame: s,
                    mipLevel: n,
                    layer: i
                }), o;
            }
        },
        {
            key: "pop",
            value: function pop() {
                this._renderTargetStack.pop();
                var e = this._renderTargetStack[this._renderTargetStack.length - 1];
                this.bind(e.renderTarget, !1, null, e.frame, e.mipLevel, e.layer);
            }
        },
        {
            key: "getRenderTarget",
            value: function getRenderTarget(e) {
                var _this__renderSurfaceToRenderTargetHash_get;
                return e.isTexture && (e = e.source), (_this__renderSurfaceToRenderTargetHash_get = this._renderSurfaceToRenderTargetHash.get(e)) !== null && _this__renderSurfaceToRenderTargetHash_get !== void 0 ? _this__renderSurfaceToRenderTargetHash_get : this._initRenderTarget(e);
            }
        },
        {
            key: "copyToTexture",
            value: function copyToTexture(e, t, r, s, n) {
                r.x < 0 && (s.width += r.x, n.x -= r.x, r.x = 0), r.y < 0 && (s.height += r.y, n.y -= r.y, r.y = 0);
                var i = e.pixelWidth, o = e.pixelHeight;
                return s.width = Math.min(s.width, i - r.x), s.height = Math.min(s.height, o - r.y), this.adaptor.copyToTexture(e, t, r, s, n);
            }
        },
        {
            key: "ensureDepthStencil",
            value: function ensureDepthStencil() {
                this.renderTarget.stencil || (this.renderTarget.stencil = !0, this.adaptor.startRenderPass(this.renderTarget, !1, null, this.viewport, 0, this.layer));
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._renderer = null, this._renderSurfaceToRenderTargetHash.forEach(function(e, t) {
                    e !== t && e.destroy();
                }), this._renderSurfaceToRenderTargetHash.clear(), this._gpuRenderTargetHash = Object.create(null);
            }
        },
        {
            key: "_initRenderTarget",
            value: function _initRenderTarget(e) {
                var _this = this;
                var t = null;
                return O.test(e) && (e = Ee(e).source), _instanceof1(e, H) ? t = e : _instanceof1(e, R) && (t = new H({
                    colorTextures: [
                        e
                    ]
                }), _instanceof1(e.source, O) && (t.isRoot = !0), e.once("destroy", function() {
                    t.destroy(), _this._renderSurfaceToRenderTargetHash.delete(e);
                    var r = _this._gpuRenderTargetHash[t.uid];
                    r && (_this._gpuRenderTargetHash[t.uid] = null, _this.adaptor.destroyGpuRenderTarget(r));
                })), this._renderSurfaceToRenderTargetHash.set(e, t), t;
            }
        },
        {
            key: "getGpuRenderTarget",
            value: function getGpuRenderTarget(e) {
                return this._gpuRenderTargetHash[e.uid] || (this._gpuRenderTargetHash[e.uid] = this.adaptor.initGpuRenderTarget(e));
            }
        },
        {
            key: "resetState",
            value: function resetState() {
                this.renderTarget = null, this.renderSurface = null;
            }
        }
    ]);
    return It;
}();
export { _e as A, Ce as B, Te as C, It as R, Ut as S, At as a, ge as b, ye as c, ve as d };
