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
import { d as c, N as U, i as g, h as m, w as S, a as I, u as p, z as _ } from "./index-wSLjxAso.js";
var x = {
    name: "local-uniform-bit",
    vertex: {
        header: "\n\n            struct LocalUniforms {\n                uTransformMatrix:mat3x3<f32>,\n                uColor:vec4<f32>,\n                uRound:f32,\n            }\n\n            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;\n        ",
        main: "\n            vColor *= localUniforms.uColor;\n            modelMatrix *= localUniforms.uTransformMatrix;\n        ",
        end: "\n            if(localUniforms.uRound == 1)\n            {\n                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);\n            }\n        "
    }
}, C = _object_spread_props(_object_spread({}, x), {
    vertex: _object_spread_props(_object_spread({}, x.vertex), {
        header: x.vertex.header.replace("group(1)", "group(2)")
    })
}), D = {
    name: "local-uniform-bit",
    vertex: {
        header: "\n\n            uniform mat3 uTransformMatrix;\n            uniform vec4 uColor;\n            uniform float uRound;\n        ",
        main: "\n            vColor *= uColor;\n            modelMatrix = uTransformMatrix;\n        ",
        end: "\n            if(uRound == 1.)\n            {\n                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n            }\n        "
    }
}, O = {
    name: "texture-bit",
    vertex: {
        header: "\n\n        struct TextureUniforms {\n            uTextureMatrix:mat3x3<f32>,\n        }\n\n        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;\n        ",
        main: "\n            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;\n        "
    },
    fragment: {
        header: "\n            @group(2) @binding(0) var uTexture: texture_2d<f32>;\n            @group(2) @binding(1) var uSampler: sampler;\n\n\n        ",
        main: "\n            outColor = textureSample(uTexture, uSampler, vUV);\n        "
    }
}, R = {
    name: "texture-bit",
    vertex: {
        header: "\n            uniform mat3 uTextureMatrix;\n        ",
        main: "\n            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;\n        "
    },
    fragment: {
        header: "\n        uniform sampler2D uTexture;\n\n\n        ",
        main: "\n            outColor = texture(uTexture, vUV);\n        "
    }
};
function A(e, t) {
    for(var a in e.attributes){
        var _s_format, _s_offset, _s_instance;
        var s = e.attributes[a], r = t[a];
        r ? ((_s_format = s.format) !== null && _s_format !== void 0 ? _s_format : s.format = r.format, (_s_offset = s.offset) !== null && _s_offset !== void 0 ? _s_offset : s.offset = r.offset, (_s_instance = s.instance) !== null && _s_instance !== void 0 ? _s_instance : s.instance = r.instance) : S("Attribute ".concat(a, " is not present in the shader, but is present in the geometry. Unable to infer attribute details."));
    }
    M(e);
}
function M(e) {
    var t = e.buffers, a = e.attributes, s = {}, r = {};
    for(var n in t){
        var o = t[n];
        s[o.uid] = 0, r[o.uid] = 0;
    }
    for(var n1 in a){
        var o1 = a[n1];
        s[o1.buffer.uid] += _(o1.format).stride;
    }
    for(var n2 in a){
        var _o_stride, _o_start;
        var o2 = a[n2];
        (_o_stride = o2.stride) !== null && _o_stride !== void 0 ? _o_stride : o2.stride = s[o2.buffer.uid], (_o_start = o2.start) !== null && _o_start !== void 0 ? _o_start : o2.start = r[o2.buffer.uid], r[o2.buffer.uid] += _(o2.format).stride;
    }
}
var d = [];
d[c.NONE] = void 0;
d[c.DISABLED] = {
    stencilWriteMask: 0,
    stencilReadMask: 0
};
d[c.RENDERING_MASK_ADD] = {
    stencilFront: {
        compare: "equal",
        passOp: "increment-clamp"
    },
    stencilBack: {
        compare: "equal",
        passOp: "increment-clamp"
    }
};
d[c.RENDERING_MASK_REMOVE] = {
    stencilFront: {
        compare: "equal",
        passOp: "decrement-clamp"
    },
    stencilBack: {
        compare: "equal",
        passOp: "decrement-clamp"
    }
};
d[c.MASK_ACTIVE] = {
    stencilWriteMask: 0,
    stencilFront: {
        compare: "equal",
        passOp: "keep"
    },
    stencilBack: {
        compare: "equal",
        passOp: "keep"
    }
};
d[c.INVERSE_MASK_ACTIVE] = {
    stencilWriteMask: 0,
    stencilFront: {
        compare: "not-equal",
        passOp: "keep"
    },
    stencilBack: {
        compare: "not-equal",
        passOp: "keep"
    }
};
var k = /*#__PURE__*/ function() {
    "use strict";
    function k(t) {
        _class_call_check(this, k);
        this._syncFunctionHash = Object.create(null), this._adaptor = t, this._systemCheck();
    }
    _create_class(k, [
        {
            key: "_systemCheck",
            value: function _systemCheck() {
                if (!U()) throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.");
            }
        },
        {
            key: "ensureUniformGroup",
            value: function ensureUniformGroup(t) {
                var a = this.getUniformGroupData(t);
                t.buffer || (t.buffer = new g({
                    data: new Float32Array(a.layout.size / 4),
                    usage: m.UNIFORM | m.COPY_DST
                }));
            }
        },
        {
            key: "getUniformGroupData",
            value: function getUniformGroupData(t) {
                return this._syncFunctionHash[t._signature] || this._initUniformGroup(t);
            }
        },
        {
            key: "_initUniformGroup",
            value: function _initUniformGroup(t) {
                var a = t._signature;
                var s = this._syncFunctionHash[a];
                if (!s) {
                    var r = Object.keys(t.uniformStructures).map(function(l) {
                        return t.uniformStructures[l];
                    }), n = this._adaptor.createUboElements(r), o = this._generateUboSync(n.uboElements);
                    s = this._syncFunctionHash[a] = {
                        layout: n,
                        syncFunction: o
                    };
                }
                return this._syncFunctionHash[a];
            }
        },
        {
            key: "_generateUboSync",
            value: function _generateUboSync(t) {
                return this._adaptor.generateUboSync(t);
            }
        },
        {
            key: "syncUniformGroup",
            value: function syncUniformGroup(t, a, s) {
                var r = this.getUniformGroupData(t);
                t.buffer || (t.buffer = new g({
                    data: new Float32Array(r.layout.size / 4),
                    usage: m.UNIFORM | m.COPY_DST
                }));
                var n = null;
                return a || (a = t.buffer.data, n = t.buffer.dataInt32), s || (s = 0), r.syncFunction(t.uniforms, a, n, s), !0;
            }
        },
        {
            key: "updateUniformGroup",
            value: function updateUniformGroup(t) {
                if (t.isStatic && !t._dirtyId) return !1;
                t._dirtyId = 0;
                var a = this.syncUniformGroup(t);
                return t.buffer.update(), a;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._syncFunctionHash = null;
            }
        }
    ]);
    return k;
}();
var h = [
    {
        type: "mat3x3<f32>",
        test: function test(e) {
            return e.value.a !== void 0;
        },
        ubo: "\n            var matrix = uv[name].toArray(true);\n            data[offset] = matrix[0];\n            data[offset + 1] = matrix[1];\n            data[offset + 2] = matrix[2];\n            data[offset + 4] = matrix[3];\n            data[offset + 5] = matrix[4];\n            data[offset + 6] = matrix[5];\n            data[offset + 8] = matrix[6];\n            data[offset + 9] = matrix[7];\n            data[offset + 10] = matrix[8];\n        ",
        uniform: "\n            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));\n        "
    },
    {
        type: "vec4<f32>",
        test: function test(e) {
            return e.type === "vec4<f32>" && e.size === 1 && e.value.width !== void 0;
        },
        ubo: "\n            v = uv[name];\n            data[offset] = v.x;\n            data[offset + 1] = v.y;\n            data[offset + 2] = v.width;\n            data[offset + 3] = v.height;\n        ",
        uniform: "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {\n                cv[0] = v.x;\n                cv[1] = v.y;\n                cv[2] = v.width;\n                cv[3] = v.height;\n                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);\n            }\n        "
    },
    {
        type: "vec2<f32>",
        test: function test(e) {
            return e.type === "vec2<f32>" && e.size === 1 && e.value.x !== void 0;
        },
        ubo: "\n            v = uv[name];\n            data[offset] = v.x;\n            data[offset + 1] = v.y;\n        ",
        uniform: "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.x || cv[1] !== v.y) {\n                cv[0] = v.x;\n                cv[1] = v.y;\n                gl.uniform2f(ud[name].location, v.x, v.y);\n            }\n        "
    },
    {
        type: "vec4<f32>",
        test: function test(e) {
            return e.type === "vec4<f32>" && e.size === 1 && e.value.red !== void 0;
        },
        ubo: "\n            v = uv[name];\n            data[offset] = v.red;\n            data[offset + 1] = v.green;\n            data[offset + 2] = v.blue;\n            data[offset + 3] = v.alpha;\n        ",
        uniform: "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {\n                cv[0] = v.red;\n                cv[1] = v.green;\n                cv[2] = v.blue;\n                cv[3] = v.alpha;\n                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);\n            }\n        "
    },
    {
        type: "vec3<f32>",
        test: function test(e) {
            return e.type === "vec3<f32>" && e.size === 1 && e.value.red !== void 0;
        },
        ubo: "\n            v = uv[name];\n            data[offset] = v.red;\n            data[offset + 1] = v.green;\n            data[offset + 2] = v.blue;\n        ",
        uniform: "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {\n                cv[0] = v.red;\n                cv[1] = v.green;\n                cv[2] = v.blue;\n                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);\n            }\n        "
    }
];
function w(e, t, a, s) {
    var r = [
        "\n        var v = null;\n        var v2 = null;\n        var t = 0;\n        var index = 0;\n        var name = null;\n        var arrayOffset = null;\n    "
    ];
    var n = 0;
    for(var l = 0; l < e.length; l++){
        var f = e[l], b = f.data.name;
        var y = !1, i = 0;
        for(var u = 0; u < h.length; u++)if (h[u].test(f.data)) {
            i = f.offset / 4, r.push('name = "'.concat(b, '";'), "offset += ".concat(i - n, ";"), h[u][t] || h[u].ubo), y = !0;
            break;
        }
        if (!y) if (f.data.size > 1) i = f.offset / 4, r.push(a(f, i - n));
        else {
            var u1 = s[f.data.type];
            i = f.offset / 4, r.push("\n                    v = uv.".concat(b, ";\n                    offset += ").concat(i - n, ";\n                    ").concat(u1, ";\n                "));
        }
        n = i;
    }
    var o = r.join("\n");
    return new Function("uv", "data", "dataInt32", "offset", o);
}
function v(e, t) {
    return "\n        for (let i = 0; i < ".concat(e * t, "; i++) {\n            data[offset + (((i / ").concat(e, ")|0) * 4) + (i % ").concat(e, ")] = v[i];\n        }\n    ");
}
var F = {
    f32: "\n        data[offset] = v;",
    i32: "\n        dataInt32[offset] = v;",
    "vec2<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];",
    "vec3<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];",
    "vec4<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];\n        data[offset + 3] = v[3];",
    "vec2<i32>": "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];",
    "vec3<i32>": "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];\n        dataInt32[offset + 2] = v[2];",
    "vec4<i32>": "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];\n        dataInt32[offset + 2] = v[2];\n        dataInt32[offset + 3] = v[3];",
    "mat2x2<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 4] = v[2];\n        data[offset + 5] = v[3];",
    "mat3x3<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];",
    "mat4x4<f32>": "\n        for (let i = 0; i < 16; i++) {\n            data[offset + i] = v[i];\n        }",
    "mat3x2<f32>": v(3, 2),
    "mat4x2<f32>": v(4, 2),
    "mat2x3<f32>": v(2, 3),
    "mat4x3<f32>": v(4, 3),
    "mat2x4<f32>": v(2, 4),
    "mat3x4<f32>": v(3, 4)
}, B = _object_spread_props(_object_spread({}, F), {
    "mat2x2<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];\n        data[offset + 3] = v[3];\n    "
});
var P = /*#__PURE__*/ function(I) {
    "use strict";
    _inherits(P, I);
    function P(param) {
        var t = param.buffer, a = param.offset, s = param.size;
        _class_call_check(this, P);
        var _this;
        _this = _call_super(this, P), _this.uid = p("buffer"), _this._resourceType = "bufferResource", _this._touched = 0, _this._resourceId = p("resource"), _this._bufferResource = !0, _this.destroyed = !1, _this.buffer = t, _this.offset = a | 0, _this.size = s, _this.buffer.on("change", _this.onBufferChange, _this);
        return _this;
    }
    _create_class(P, [
        {
            key: "onBufferChange",
            value: function onBufferChange() {
                this._resourceId = p("resource"), this.emit("change", this);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                this.destroyed = !0, t && this.buffer.destroy(), this.emit("change", this), this.buffer = null, this.removeAllListeners();
            }
        }
    ]);
    return P;
}(I);
export { P as B, d as G, k as U, C as a, D as b, w as c, R as d, A as e, F as f, h as g, x as l, O as t, B as u };
