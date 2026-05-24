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
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _possible_constructor_return(self1, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self1);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_array(arr) {
    return _array_with_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_rest();
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
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Jc(u, r) {
    var _loop = function _loop() {
        var f = r[o];
        if (typeof f != "string" && !Array.isArray(f)) {
            var _loop = function _loop(s) {
                if (s !== "default" && !(s in u)) {
                    var d = Object.getOwnPropertyDescriptor(f, s);
                    d && Object.defineProperty(u, s, d.get ? d : {
                        enumerable: !0,
                        get: function get() {
                            return f[s];
                        }
                    });
                }
            };
            for(var s in f)_loop(s);
        }
    };
    for(var o = 0; o < r.length; o++)_loop();
    return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, {
        value: "Module"
    }));
}
var $p = (typeof globalThis === "undefined" ? "undefined" : _type_of(globalThis)) < "u" ? globalThis : (typeof window === "undefined" ? "undefined" : _type_of(window)) < "u" ? window : (typeof global === "undefined" ? "undefined" : _type_of(global)) < "u" ? global : (typeof self === "undefined" ? "undefined" : _type_of(self)) < "u" ? self : {};
function Fc(u) {
    return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
function Wp(u) {
    if (Object.prototype.hasOwnProperty.call(u, "__esModule")) return u;
    var r = u.default;
    if (typeof r == "function") {
        var o = function f() {
            var s = !1;
            try {
                s = _instanceof1(this, f);
            } catch (unused) {}
            return s ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
        };
        o.prototype = r.prototype;
    } else o = {};
    return Object.defineProperty(o, "__esModule", {
        value: !0
    }), Object.keys(u).forEach(function(f) {
        var s = Object.getOwnPropertyDescriptor(u, f);
        Object.defineProperty(o, f, s.get ? s : {
            enumerable: !0,
            get: function get() {
                return u[f];
            }
        });
    }), o;
}
var Cc = {
    exports: {}
}, _u = {};
var Zh;
function v0() {
    if (Zh) return _u;
    Zh = 1;
    var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
    function o(f, s, d) {
        var y = null;
        if (d !== void 0 && (y = "" + d), s.key !== void 0 && (y = "" + s.key), "key" in s) {
            d = {};
            for(var v in s)v !== "key" && (d[v] = s[v]);
        } else d = s;
        return s = d.ref, {
            $$typeof: u,
            type: f,
            key: y,
            ref: s !== void 0 ? s : null,
            props: d
        };
    }
    return _u.Fragment = r, _u.jsx = o, _u.jsxs = o, _u;
}
var Kh;
function g0() {
    return Kh || (Kh = 1, Cc.exports = v0()), Cc.exports;
}
var _m = g0();
var p0 = Fc(_m), kp = Jc({
    __proto__: null,
    default: p0
}, [
    _m
]);
var Uc = {
    exports: {}
}, ye = {};
var Jh;
function S0() {
    if (Jh) return ye;
    Jh = 1;
    var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), y = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), L = Symbol.iterator;
    function A(b) {
        return b === null || (typeof b === "undefined" ? "undefined" : _type_of(b)) != "object" ? null : (b = L && b[L] || b["@@iterator"], typeof b == "function" ? b : null);
    }
    var Y = {
        isMounted: function isMounted() {
            return !1;
        },
        enqueueForceUpdate: function enqueueForceUpdate() {},
        enqueueReplaceState: function enqueueReplaceState() {},
        enqueueSetState: function enqueueSetState() {}
    }, X = Object.assign, K = {};
    function ie(b, B, V) {
        this.props = b, this.context = B, this.refs = K, this.updater = V || Y;
    }
    ie.prototype.isReactComponent = {}, ie.prototype.setState = function(b, B) {
        if ((typeof b === "undefined" ? "undefined" : _type_of(b)) != "object" && typeof b != "function" && b != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, b, B, "setState");
    }, ie.prototype.forceUpdate = function(b) {
        this.updater.enqueueForceUpdate(this, b, "forceUpdate");
    };
    function I() {}
    I.prototype = ie.prototype;
    function k(b, B, V) {
        this.props = b, this.context = B, this.refs = K, this.updater = V || Y;
    }
    var xe = k.prototype = new I;
    xe.constructor = k, X(xe, ie.prototype), xe.isPureReactComponent = !0;
    var ve = Array.isArray;
    function pe() {}
    var re = {
        H: null,
        A: null,
        T: null,
        S: null
    }, D = Object.prototype.hasOwnProperty;
    function Ee(b, B, V) {
        var J = V.ref;
        return {
            $$typeof: u,
            type: b,
            key: B,
            ref: J !== void 0 ? J : null,
            props: V
        };
    }
    function Ce(b, B) {
        return Ee(b.type, B, b.props);
    }
    function Ve(b) {
        return (typeof b === "undefined" ? "undefined" : _type_of(b)) == "object" && b !== null && b.$$typeof === u;
    }
    function me(b) {
        var B = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + b.replace(/[=:]/g, function(V) {
            return B[V];
        });
    }
    var tt = /\/+/g;
    function Ue(b, B) {
        return (typeof b === "undefined" ? "undefined" : _type_of(b)) == "object" && b !== null && b.key != null ? me("" + b.key) : B.toString(36);
    }
    function de(b) {
        switch(b.status){
            case "fulfilled":
                return b.value;
            case "rejected":
                throw b.reason;
            default:
                switch(typeof b.status == "string" ? b.then(pe, pe) : (b.status = "pending", b.then(function(B) {
                    b.status === "pending" && (b.status = "fulfilled", b.value = B);
                }, function(B) {
                    b.status === "pending" && (b.status = "rejected", b.reason = B);
                })), b.status){
                    case "fulfilled":
                        return b.value;
                    case "rejected":
                        throw b.reason;
                }
        }
        throw b;
    }
    function x(b, B, V, J, oe) {
        var he = typeof b === "undefined" ? "undefined" : _type_of(b);
        (he === "undefined" || he === "boolean") && (b = null);
        var ze = !1;
        if (b === null) ze = !0;
        else switch(he){
            case "bigint":
            case "string":
            case "number":
                ze = !0;
                break;
            case "object":
                switch(b.$$typeof){
                    case u:
                    case r:
                        ze = !0;
                        break;
                    case M:
                        return ze = b._init, x(ze(b._payload), B, V, J, oe);
                }
        }
        if (ze) return oe = oe(b), ze = J === "" ? "." + Ue(b, 0) : J, ve(oe) ? (V = "", ze != null && (V = ze.replace(tt, "$&/") + "/"), x(oe, B, V, "", function(Ra) {
            return Ra;
        })) : oe != null && (Ve(oe) && (oe = Ce(oe, V + (oe.key == null || b && b.key === oe.key ? "" : ("" + oe.key).replace(tt, "$&/") + "/") + ze)), B.push(oe)), 1;
        ze = 0;
        var ft = J === "" ? "." : J + ":";
        if (ve(b)) for(var Ze = 0; Ze < b.length; Ze++)J = b[Ze], he = ft + Ue(J, Ze), ze += x(J, B, V, he, oe);
        else if (Ze = A(b), typeof Ze == "function") for(b = Ze.call(b), Ze = 0; !(J = b.next()).done;)J = J.value, he = ft + Ue(J, Ze++), ze += x(J, B, V, he, oe);
        else if (he === "object") {
            if (typeof b.then == "function") return x(de(b), B, V, J, oe);
            throw B = String(b), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
        }
        return ze;
    }
    function Q(b, B, V) {
        if (b == null) return b;
        var J = [], oe = 0;
        return x(b, J, "", "", function(he) {
            return B.call(V, he, oe++);
        }), J;
    }
    function ee(b) {
        if (b._status === -1) {
            var B = b._result;
            B = B(), B.then(function(V) {
                (b._status === 0 || b._status === -1) && (b._status = 1, b._result = V);
            }, function(V) {
                (b._status === 0 || b._status === -1) && (b._status = 2, b._result = V);
            }), b._status === -1 && (b._status = 0, b._result = B);
        }
        if (b._status === 1) return b._result.default;
        throw b._result;
    }
    var ae = typeof reportError == "function" ? reportError : function(b) {
        if ((typeof window === "undefined" ? "undefined" : _type_of(window)) == "object" && typeof window.ErrorEvent == "function") {
            var B = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: (typeof b === "undefined" ? "undefined" : _type_of(b)) == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
                error: b
            });
            if (!window.dispatchEvent(B)) return;
        } else if ((typeof process === "undefined" ? "undefined" : _type_of(process)) == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", b);
            return;
        }
        console.error(b);
    }, Se = {
        map: Q,
        forEach: function forEach(b, B, V) {
            Q(b, function() {
                B.apply(this, arguments);
            }, V);
        },
        count: function count(b) {
            var B = 0;
            return Q(b, function() {
                B++;
            }), B;
        },
        toArray: function toArray(b) {
            return Q(b, function(B) {
                return B;
            }) || [];
        },
        only: function only(b) {
            if (!Ve(b)) throw Error("React.Children.only expected to receive a single React element child.");
            return b;
        }
    };
    return ye.Activity = E, ye.Children = Se, ye.Component = ie, ye.Fragment = o, ye.Profiler = s, ye.PureComponent = k, ye.StrictMode = f, ye.Suspense = g, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = re, ye.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function c(b) {
            return re.H.useMemoCache(b);
        }
    }, ye.cache = function(b) {
        return function() {
            return b.apply(null, arguments);
        };
    }, ye.cacheSignal = function() {
        return null;
    }, ye.cloneElement = function(b, B, V) {
        if (b == null) throw Error("The argument must be a React element, but you passed " + b + ".");
        var J = X({}, b.props), oe = b.key;
        if (B != null) for(he in B.key !== void 0 && (oe = "" + B.key), B)!D.call(B, he) || he === "key" || he === "__self" || he === "__source" || he === "ref" && B.ref === void 0 || (J[he] = B[he]);
        var he = arguments.length - 2;
        if (he === 1) J.children = V;
        else if (1 < he) {
            for(var ze = Array(he), ft = 0; ft < he; ft++)ze[ft] = arguments[ft + 2];
            J.children = ze;
        }
        return Ee(b.type, oe, J);
    }, ye.createContext = function(b) {
        return b = {
            $$typeof: y,
            _currentValue: b,
            _currentValue2: b,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, b.Provider = b, b.Consumer = {
            $$typeof: d,
            _context: b
        }, b;
    }, ye.createElement = function(b, B, V) {
        var J, oe = {}, he = null;
        if (B != null) for(J in B.key !== void 0 && (he = "" + B.key), B)D.call(B, J) && J !== "key" && J !== "__self" && J !== "__source" && (oe[J] = B[J]);
        var ze = arguments.length - 2;
        if (ze === 1) oe.children = V;
        else if (1 < ze) {
            for(var ft = Array(ze), Ze = 0; Ze < ze; Ze++)ft[Ze] = arguments[Ze + 2];
            oe.children = ft;
        }
        if (b && b.defaultProps) for(J in ze = b.defaultProps, ze)oe[J] === void 0 && (oe[J] = ze[J]);
        return Ee(b, he, oe);
    }, ye.createRef = function() {
        return {
            current: null
        };
    }, ye.forwardRef = function(b) {
        return {
            $$typeof: v,
            render: b
        };
    }, ye.isValidElement = Ve, ye.lazy = function(b) {
        return {
            $$typeof: M,
            _payload: {
                _status: -1,
                _result: b
            },
            _init: ee
        };
    }, ye.memo = function(b, B) {
        return {
            $$typeof: m,
            type: b,
            compare: B === void 0 ? null : B
        };
    }, ye.startTransition = function(b) {
        var B = re.T, V = {};
        re.T = V;
        try {
            var J = b(), oe = re.S;
            oe !== null && oe(V, J), (typeof J === "undefined" ? "undefined" : _type_of(J)) == "object" && J !== null && typeof J.then == "function" && J.then(pe, ae);
        } catch (he) {
            ae(he);
        } finally{
            B !== null && V.types !== null && (B.types = V.types), re.T = B;
        }
    }, ye.unstable_useCacheRefresh = function() {
        return re.H.useCacheRefresh();
    }, ye.use = function(b) {
        return re.H.use(b);
    }, ye.useActionState = function(b, B, V) {
        return re.H.useActionState(b, B, V);
    }, ye.useCallback = function(b, B) {
        return re.H.useCallback(b, B);
    }, ye.useContext = function(b) {
        return re.H.useContext(b);
    }, ye.useDebugValue = function() {}, ye.useDeferredValue = function(b, B) {
        return re.H.useDeferredValue(b, B);
    }, ye.useEffect = function(b, B) {
        return re.H.useEffect(b, B);
    }, ye.useEffectEvent = function(b) {
        return re.H.useEffectEvent(b);
    }, ye.useId = function() {
        return re.H.useId();
    }, ye.useImperativeHandle = function(b, B, V) {
        return re.H.useImperativeHandle(b, B, V);
    }, ye.useInsertionEffect = function(b, B) {
        return re.H.useInsertionEffect(b, B);
    }, ye.useLayoutEffect = function(b, B) {
        return re.H.useLayoutEffect(b, B);
    }, ye.useMemo = function(b, B) {
        return re.H.useMemo(b, B);
    }, ye.useOptimistic = function(b, B) {
        return re.H.useOptimistic(b, B);
    }, ye.useReducer = function(b, B, V) {
        return re.H.useReducer(b, B, V);
    }, ye.useRef = function(b) {
        return re.H.useRef(b);
    }, ye.useState = function(b) {
        return re.H.useState(b);
    }, ye.useSyncExternalStore = function(b, B, V) {
        return re.H.useSyncExternalStore(b, B, V);
    }, ye.useTransition = function() {
        return re.H.useTransition();
    }, ye.version = "19.2.4", ye;
}
var Fh;
function $c() {
    return Fh || (Fh = 1, Uc.exports = S0()), Uc.exports;
}
var N = $c();
var b0 = Fc(N), E0 = Jc({
    __proto__: null,
    default: b0
}, [
    N
]);
var Nc = {
    exports: {}
}, Cu = {}, xc = {
    exports: {}
}, Hc = {};
var $h;
function R0() {
    return $h || ($h = 1, function(u) {
        function r(x, Q) {
            var ee = x.length;
            x.push(Q);
            e: for(; 0 < ee;){
                var ae = ee - 1 >>> 1, Se = x[ae];
                if (0 < s(Se, Q)) x[ae] = Q, x[ee] = Se, ee = ae;
                else break e;
            }
        }
        function o(x) {
            return x.length === 0 ? null : x[0];
        }
        function f(x) {
            if (x.length === 0) return null;
            var Q = x[0], ee = x.pop();
            if (ee !== Q) {
                x[0] = ee;
                e: for(var ae = 0, Se = x.length, b = Se >>> 1; ae < b;){
                    var B = 2 * (ae + 1) - 1, V = x[B], J = B + 1, oe = x[J];
                    if (0 > s(V, ee)) J < Se && 0 > s(oe, V) ? (x[ae] = oe, x[J] = ee, ae = J) : (x[ae] = V, x[B] = ee, ae = B);
                    else if (J < Se && 0 > s(oe, ee)) x[ae] = oe, x[J] = ee, ae = J;
                    else break e;
                }
            }
            return Q;
        }
        function s(x, Q) {
            var ee = x.sortIndex - Q.sortIndex;
            return ee !== 0 ? ee : x.id - Q.id;
        }
        if (u.unstable_now = void 0, (typeof performance === "undefined" ? "undefined" : _type_of(performance)) == "object" && typeof performance.now == "function") {
            var d = performance;
            u.unstable_now = function() {
                return d.now();
            };
        } else {
            var y = Date, v = y.now();
            u.unstable_now = function() {
                return y.now() - v;
            };
        }
        var g = [], m = [], M = 1, E = null, L = 3, A = !1, Y = !1, X = !1, K = !1, ie = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, k = (typeof setImmediate === "undefined" ? "undefined" : _type_of(setImmediate)) < "u" ? setImmediate : null;
        function xe(x) {
            for(var Q = o(m); Q !== null;){
                if (Q.callback === null) f(m);
                else if (Q.startTime <= x) f(m), Q.sortIndex = Q.expirationTime, r(g, Q);
                else break;
                Q = o(m);
            }
        }
        function ve(x) {
            if (X = !1, xe(x), !Y) if (o(g) !== null) Y = !0, pe || (pe = !0, me());
            else {
                var Q = o(m);
                Q !== null && de(ve, Q.startTime - x);
            }
        }
        var pe = !1, re = -1, D = 5, Ee = -1;
        function Ce() {
            return K ? !0 : !(u.unstable_now() - Ee < D);
        }
        function Ve() {
            if (K = !1, pe) {
                var x = u.unstable_now();
                Ee = x;
                var Q = !0;
                try {
                    e: {
                        Y = !1, X && (X = !1, I(re), re = -1), A = !0;
                        var ee = L;
                        try {
                            t: {
                                for(xe(x), E = o(g); E !== null && !(E.expirationTime > x && Ce());){
                                    var ae = E.callback;
                                    if (typeof ae == "function") {
                                        E.callback = null, L = E.priorityLevel;
                                        var Se = ae(E.expirationTime <= x);
                                        if (x = u.unstable_now(), typeof Se == "function") {
                                            E.callback = Se, xe(x), Q = !0;
                                            break t;
                                        }
                                        E === o(g) && f(g), xe(x);
                                    } else f(g);
                                    E = o(g);
                                }
                                if (E !== null) Q = !0;
                                else {
                                    var b = o(m);
                                    b !== null && de(ve, b.startTime - x), Q = !1;
                                }
                            }
                            break e;
                        } finally{
                            E = null, L = ee, A = !1;
                        }
                        Q = void 0;
                    }
                } finally{
                    Q ? me() : pe = !1;
                }
            }
        }
        var me;
        if (typeof k == "function") me = function me() {
            k(Ve);
        };
        else if ((typeof MessageChannel === "undefined" ? "undefined" : _type_of(MessageChannel)) < "u") {
            var tt = new MessageChannel, Ue = tt.port2;
            tt.port1.onmessage = Ve, me = function me() {
                Ue.postMessage(null);
            };
        } else me = function me() {
            ie(Ve, 0);
        };
        function de(x, Q) {
            re = ie(function() {
                x(u.unstable_now());
            }, Q);
        }
        u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(x) {
            x.callback = null;
        }, u.unstable_forceFrameRate = function(x) {
            0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < x ? Math.floor(1e3 / x) : 5;
        }, u.unstable_getCurrentPriorityLevel = function() {
            return L;
        }, u.unstable_next = function(x) {
            switch(L){
                case 1:
                case 2:
                case 3:
                    var Q = 3;
                    break;
                default:
                    Q = L;
            }
            var ee = L;
            L = Q;
            try {
                return x();
            } finally{
                L = ee;
            }
        }, u.unstable_requestPaint = function() {
            K = !0;
        }, u.unstable_runWithPriority = function(x, Q) {
            switch(x){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    x = 3;
            }
            var ee = L;
            L = x;
            try {
                return Q();
            } finally{
                L = ee;
            }
        }, u.unstable_scheduleCallback = function(x, Q, ee) {
            var ae = u.unstable_now();
            switch((typeof ee === "undefined" ? "undefined" : _type_of(ee)) == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? ae + ee : ae) : ee = ae, x){
                case 1:
                    var Se = -1;
                    break;
                case 2:
                    Se = 250;
                    break;
                case 5:
                    Se = 1073741823;
                    break;
                case 4:
                    Se = 1e4;
                    break;
                default:
                    Se = 5e3;
            }
            return Se = ee + Se, x = {
                id: M++,
                callback: Q,
                priorityLevel: x,
                startTime: ee,
                expirationTime: Se,
                sortIndex: -1
            }, ee > ae ? (x.sortIndex = ee, r(m, x), o(g) === null && x === o(m) && (X ? (I(re), re = -1) : X = !0, de(ve, ee - ae))) : (x.sortIndex = Se, r(g, x), Y || A || (Y = !0, pe || (pe = !0, me()))), x;
        }, u.unstable_shouldYield = Ce, u.unstable_wrapCallback = function(x) {
            var Q = L;
            return function() {
                var ee = L;
                L = Q;
                try {
                    return x.apply(this, arguments);
                } finally{
                    L = ee;
                }
            };
        };
    }(Hc)), Hc;
}
var Wh;
function z0() {
    return Wh || (Wh = 1, xc.exports = R0()), xc.exports;
}
var Lc = {
    exports: {}
}, Dt = {};
var kh;
function T0() {
    if (kh) return Dt;
    kh = 1;
    var u = $c();
    function r(g) {
        var m = "https://react.dev/errors/" + g;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for(var M = 2; M < arguments.length; M++)m += "&args[]=" + encodeURIComponent(arguments[M]);
        }
        return "Minified React error #" + g + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function o() {}
    var f = {
        d: {
            f: o,
            r: function r1() {
                throw Error(r(522));
            },
            D: o,
            C: o,
            L: o,
            m: o,
            X: o,
            S: o,
            M: o
        },
        p: 0,
        findDOMNode: null
    }, s = Symbol.for("react.portal");
    function d(g, m, M) {
        var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: s,
            key: E == null ? null : "" + E,
            children: g,
            containerInfo: m,
            implementation: M
        };
    }
    var y = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function v(g, m) {
        if (g === "font") return "";
        if (typeof m == "string") return m === "use-credentials" ? m : "";
    }
    return Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, Dt.createPortal = function(g, m) {
        var M = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(r(299));
        return d(g, m, null, M);
    }, Dt.flushSync = function(g) {
        var m = y.T, M = f.p;
        try {
            if (y.T = null, f.p = 2, g) return g();
        } finally{
            y.T = m, f.p = M, f.d.f();
        }
    }, Dt.preconnect = function(g, m) {
        typeof g == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, f.d.C(g, m));
    }, Dt.prefetchDNS = function(g) {
        typeof g == "string" && f.d.D(g);
    }, Dt.preinit = function(g, m) {
        if (typeof g == "string" && m && typeof m.as == "string") {
            var M = m.as, E = v(M, m.crossOrigin), L = typeof m.integrity == "string" ? m.integrity : void 0, A = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            M === "style" ? f.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: E,
                integrity: L,
                fetchPriority: A
            }) : M === "script" && f.d.X(g, {
                crossOrigin: E,
                integrity: L,
                fetchPriority: A,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            });
        }
    }, Dt.preinitModule = function(g, m) {
        if (typeof g == "string") if ((typeof m === "undefined" ? "undefined" : _type_of(m)) == "object" && m !== null) {
            if (m.as == null || m.as === "script") {
                var M = v(m.as, m.crossOrigin);
                f.d.M(g, {
                    crossOrigin: M,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                    nonce: typeof m.nonce == "string" ? m.nonce : void 0
                });
            }
        } else m == null && f.d.M(g);
    }, Dt.preload = function(g, m) {
        if (typeof g == "string" && (typeof m === "undefined" ? "undefined" : _type_of(m)) == "object" && m !== null && typeof m.as == "string") {
            var M = m.as, E = v(M, m.crossOrigin);
            f.d.L(g, M, {
                crossOrigin: E,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            });
        }
    }, Dt.preloadModule = function(g, m) {
        if (typeof g == "string") if (m) {
            var M = v(m.as, m.crossOrigin);
            f.d.m(g, {
                as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                crossOrigin: M,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0
            });
        } else f.d.m(g);
    }, Dt.requestFormReset = function(g) {
        f.d.r(g);
    }, Dt.unstable_batchedUpdates = function(g, m) {
        return g(m);
    }, Dt.useFormState = function(g, m, M) {
        return y.H.useFormState(g, m, M);
    }, Dt.useFormStatus = function() {
        return y.H.useHostTransitionStatus();
    }, Dt.version = "19.2.4", Dt;
}
var Ph;
function Cm() {
    if (Ph) return Lc.exports;
    Ph = 1;
    function u() {
        if (!((typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _type_of(__REACT_DEVTOOLS_GLOBAL_HOOK__)) > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
        } catch (r) {
            console.error(r);
        }
    }
    return u(), Lc.exports = T0(), Lc.exports;
}
var Ih;
function M0() {
    if (Ih) return Cu;
    Ih = 1;
    var u = z0(), r = $c(), o = Cm();
    function f(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for(var l = 2; l < arguments.length; l++)t += "&args[]=" + encodeURIComponent(arguments[l]);
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function s(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function d(e) {
        var t = e, l = e;
        if (e.alternate) for(; t.return;)t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
            while (e);
        }
        return t.tag === 3 ? l : null;
    }
    function y(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function v(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function g(e) {
        if (d(e) !== e) throw Error(f(188));
    }
    function m(e) {
        var t = e.alternate;
        if (!t) {
            if (t = d(e), t === null) throw Error(f(188));
            return t !== e ? null : e;
        }
        for(var l = e, a = t;;){
            var n = l.return;
            if (n === null) break;
            var i = n.alternate;
            if (i === null) {
                if (a = n.return, a !== null) {
                    l = a;
                    continue;
                }
                break;
            }
            if (n.child === i.child) {
                for(i = n.child; i;){
                    if (i === l) return g(n), e;
                    if (i === a) return g(n), t;
                    i = i.sibling;
                }
                throw Error(f(188));
            }
            if (l.return !== a.return) l = n, a = i;
            else {
                for(var c = !1, h = n.child; h;){
                    if (h === l) {
                        c = !0, l = n, a = i;
                        break;
                    }
                    if (h === a) {
                        c = !0, a = n, l = i;
                        break;
                    }
                    h = h.sibling;
                }
                if (!c) {
                    for(h = i.child; h;){
                        if (h === l) {
                            c = !0, l = i, a = n;
                            break;
                        }
                        if (h === a) {
                            c = !0, a = i, l = n;
                            break;
                        }
                        h = h.sibling;
                    }
                    if (!c) throw Error(f(189));
                }
            }
            if (l.alternate !== a) throw Error(f(190));
        }
        if (l.tag !== 3) throw Error(f(188));
        return l.stateNode.current === l ? e : t;
    }
    function M(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for(e = e.child; e !== null;){
            if (t = M(e), t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var E = Object.assign, L = Symbol.for("react.element"), A = Symbol.for("react.transitional.element"), Y = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), k = Symbol.for("react.context"), xe = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), Ee = Symbol.for("react.activity"), Ce = Symbol.for("react.memo_cache_sentinel"), Ve = Symbol.iterator;
    function me(e) {
        return e === null || (typeof e === "undefined" ? "undefined" : _type_of(e)) != "object" ? null : (e = Ve && e[Ve] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var tt = Symbol.for("react.client.reference");
    function Ue(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === tt ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case X:
                return "Fragment";
            case ie:
                return "Profiler";
            case K:
                return "StrictMode";
            case ve:
                return "Suspense";
            case pe:
                return "SuspenseList";
            case Ee:
                return "Activity";
        }
        if ((typeof e === "undefined" ? "undefined" : _type_of(e)) == "object") switch(e.$$typeof){
            case Y:
                return "Portal";
            case k:
                return e.displayName || "Context";
            case I:
                return (e._context.displayName || "Context") + ".Consumer";
            case xe:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case re:
                return t = e.displayName || null, t !== null ? t : Ue(e.type) || "Memo";
            case D:
                t = e._payload, e = e._init;
                try {
                    return Ue(e(t));
                } catch (unused) {}
        }
        return null;
    }
    var de = Array.isArray, x = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }, ae = [], Se = -1;
    function b(e) {
        return {
            current: e
        };
    }
    function B(e) {
        0 > Se || (e.current = ae[Se], ae[Se] = null, Se--);
    }
    function V(e, t) {
        Se++, ae[Se] = e.current, e.current = t;
    }
    var J = b(null), oe = b(null), he = b(null), ze = b(null);
    function ft(e, t) {
        switch(V(he, t), V(oe, e), V(J, null), t.nodeType){
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? mh(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI) t = mh(t), e = yh(t, e);
                else switch(e){
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0;
                }
        }
        B(J), V(J, e);
    }
    function Ze() {
        B(J), B(oe), B(he);
    }
    function Ra(e) {
        e.memoizedState !== null && V(ze, e);
        var t = J.current, l = yh(t, e.type);
        t !== l && (V(oe, e), V(J, l));
    }
    function Za(e) {
        oe.current === e && (B(J), B(oe)), ze.current === e && (B(ze), Mu._currentValue = ee);
    }
    var wn, yt;
    function Ut(e) {
        if (wn === void 0) try {
            throw Error();
        } catch (l) {
            var t = l.stack.trim().match(/\n( *(at )?)/);
            wn = t && t[1] || "", yt = -1 < l.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + wn + e + yt;
    }
    var Ka = !1;
    function Bn(e, t) {
        if (!e || Ka) return "";
        Ka = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function DetermineComponentFrameRoot() {
                    try {
                        if (t) {
                            var q = function q() {
                                throw Error();
                            };
                            if (Object.defineProperty(q.prototype, "props", {
                                set: function set() {
                                    throw Error();
                                }
                            }), (typeof Reflect === "undefined" ? "undefined" : _type_of(Reflect)) == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(q, []);
                                } catch (H) {
                                    var U = H;
                                }
                                Reflect.construct(e, [], q);
                            } else {
                                try {
                                    q.call();
                                } catch (H) {
                                    U = H;
                                }
                                e.call(q.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (H) {
                                U = H;
                            }
                            (q = e()) && typeof q.catch == "function" && q.catch(function() {});
                        }
                    } catch (H) {
                        if (H && U && typeof H.stack == "string") return [
                            H.stack,
                            U.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var i = a.DetermineComponentFrameRoot(), c = i[0], h = i[1];
            if (c && h) {
                var p = c.split("\n"), _ = h.split("\n");
                for(n = a = 0; a < p.length && !p[a].includes("DetermineComponentFrameRoot");)a++;
                for(; n < _.length && !_[n].includes("DetermineComponentFrameRoot");)n++;
                if (a === p.length || n === _.length) for(a = p.length - 1, n = _.length - 1; 1 <= a && 0 <= n && p[a] !== _[n];)n--;
                for(; 1 <= a && 0 <= n; a--, n--)if (p[a] !== _[n]) {
                    if (a !== 1 || n !== 1) do if (a--, n--, 0 > n || p[a] !== _[n]) {
                        var w = "\n" + p[a].replace(" at new ", " at ");
                        return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
                    }
                    while (1 <= a && 0 <= n);
                    break;
                }
            }
        } finally{
            Ka = !1, Error.prepareStackTrace = l;
        }
        return (l = e ? e.displayName || e.name : "") ? Ut(l) : "";
    }
    function zl(e, t) {
        switch(e.tag){
            case 26:
            case 27:
            case 5:
                return Ut(e.type);
            case 16:
                return Ut("Lazy");
            case 13:
                return e.child !== t && t !== null ? Ut("Suspense Fallback") : Ut("Suspense");
            case 19:
                return Ut("SuspenseList");
            case 0:
            case 15:
                return Bn(e.type, !1);
            case 11:
                return Bn(e.type.render, !1);
            case 1:
                return Bn(e.type, !0);
            case 31:
                return Ut("Activity");
            default:
                return "";
        }
    }
    function Qu(e) {
        try {
            var t = "", l = null;
            do t += zl(e, l), l = e, e = e.return;
            while (e);
            return t;
        } catch (a) {
            return "\nError generating stack: " + a.message + "\n" + a.stack;
        }
    }
    var jn = Object.prototype.hasOwnProperty, Ja = u.unstable_scheduleCallback, Yn = u.unstable_cancelCallback, pr = u.unstable_shouldYield, Sr = u.unstable_requestPaint, Ot = u.unstable_now, Tl = u.unstable_getCurrentPriorityLevel, Zl = u.unstable_ImmediatePriority, qn = u.unstable_UserBlockingPriority, Kl = u.unstable_NormalPriority, il = u.unstable_LowPriority, Jt = u.unstable_IdlePriority, Vu = u.log, br = u.unstable_setDisableYieldValue, Ml = null, _t = null;
    function gt(e) {
        if (typeof Vu == "function" && br(e), _t && typeof _t.setStrictMode == "function") try {
            _t.setStrictMode(Ml, e);
        } catch (unused) {}
    }
    var Tt = Math.clz32 ? Math.clz32 : Er, Zu = Math.log, Ku = Math.LN2;
    function Er(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Zu(e) / Ku | 0) | 0;
    }
    var za = 256, Dl = 262144, Ta = 4194304;
    function rl(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch(e & -e){
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return e & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e;
        }
    }
    function Fa(e, t, l) {
        var a = e.pendingLanes;
        if (a === 0) return 0;
        var n = 0, i = e.suspendedLanes, c = e.pingedLanes;
        e = e.warmLanes;
        var h = a & 134217727;
        return h !== 0 ? (a = h & ~i, a !== 0 ? n = rl(a) : (c &= h, c !== 0 ? n = rl(c) : l || (l = h & ~e, l !== 0 && (n = rl(l))))) : (h = a & ~i, h !== 0 ? n = rl(h) : c !== 0 ? n = rl(c) : l || (l = a & ~e, l !== 0 && (n = rl(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : n;
    }
    function Jl(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Rr(e, t) {
        switch(e){
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function Gn() {
        var e = Ta;
        return Ta <<= 1, (Ta & 62914560) === 0 && (Ta = 4194304), e;
    }
    function Fl(e) {
        for(var t = [], l = 0; 31 > l; l++)t.push(e);
        return t;
    }
    function ml(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Ju(e, t, l, a, n, i) {
        var c = e.pendingLanes;
        e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
        var h = e.entanglements, p = e.expirationTimes, _ = e.hiddenUpdates;
        for(l = c & ~l; 0 < l;){
            var w = 31 - Tt(l), q = 1 << w;
            h[w] = 0, p[w] = -1;
            var U = _[w];
            if (U !== null) for(_[w] = null, w = 0; w < U.length; w++){
                var H = U[w];
                H !== null && (H.lane &= -536870913);
            }
            l &= ~q;
        }
        a !== 0 && Fu(e, a, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t));
    }
    function Fu(e, t, l) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var a = 31 - Tt(t);
        e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
    }
    function $u(e, t) {
        var l = e.entangledLanes |= t;
        for(e = e.entanglements; l;){
            var a = 31 - Tt(l), n = 1 << a;
            n & t | e[a] & t && (e[a] |= t), l &= ~n;
        }
    }
    function S(e, t) {
        var l = t & -t;
        return l = (l & 42) !== 0 ? 1 : z(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
    }
    function z(e) {
        switch(e){
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0;
        }
        return e;
    }
    function C(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function G() {
        var e = Q.p;
        return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : jh(e.type));
    }
    function Z(e, t) {
        var l = Q.p;
        try {
            return Q.p = e, t();
        } finally{
            Q.p = l;
        }
    }
    var te = Math.random().toString(36).slice(2), F = "__reactFiber$" + te, $ = "__reactProps$" + te, le = "__reactContainer$" + te, W = "__reactEvents$" + te, ce = "__reactListeners$" + te, ue = "__reactHandles$" + te, Le = "__reactResources$" + te, Te = "__reactMarker$" + te;
    function Ke(e) {
        delete e[F], delete e[$], delete e[W], delete e[ce], delete e[ue];
    }
    function $e(e) {
        var t = e[F];
        if (t) return t;
        for(var l = e.parentNode; l;){
            if (t = l[le] || l[F]) {
                if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for(e = Rh(e); e !== null;){
                    if (l = e[F]) return l;
                    e = Rh(e);
                }
                return t;
            }
            e = l, l = e.parentNode;
        }
        return null;
    }
    function lt(e) {
        if (e = e[F] || e[le]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
        }
        return null;
    }
    function He(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(f(33));
    }
    function ct(e) {
        var t = e[Le];
        return t || (t = e[Le] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t;
    }
    function Fe(e) {
        e[Te] = !0;
    }
    var $l = new Set, fl = {};
    function pt(e, t) {
        yl(e, t), yl(e + "Capture", t);
    }
    function yl(e, t) {
        for(fl[e] = t, e = 0; e < t.length; e++)$l.add(t[e]);
    }
    var Ma = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), vl = {}, Da = {};
    function $a(e) {
        return jn.call(Da, e) ? !0 : jn.call(vl, e) ? !1 : Ma.test(e) ? Da[e] = !0 : (vl[e] = !0, !1);
    }
    function Me(e, t, l) {
        if ($a(t)) if (l === null) e.removeAttribute(t);
        else {
            switch(typeof l === "undefined" ? "undefined" : _type_of(l)){
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        e.removeAttribute(t);
                        return;
                    }
            }
            e.setAttribute(t, "" + l);
        }
    }
    function ut(e, t, l) {
        if (l === null) e.removeAttribute(t);
        else {
            switch(typeof l === "undefined" ? "undefined" : _type_of(l)){
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return;
            }
            e.setAttribute(t, "" + l);
        }
    }
    function Mt(e, t, l, a) {
        if (a === null) e.removeAttribute(l);
        else {
            switch(typeof a === "undefined" ? "undefined" : _type_of(a)){
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(l);
                    return;
            }
            e.setAttributeNS(t, l, "" + a);
        }
    }
    function ot(e) {
        switch(typeof e === "undefined" ? "undefined" : _type_of(e)){
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return "";
        }
    }
    function We(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Wa(e, t, l) {
        var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && (typeof a === "undefined" ? "undefined" : _type_of(a)) < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var n = a.get, i = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function get() {
                    return n.call(this);
                },
                set: function set(c) {
                    l = "" + c, i.call(this, c);
                }
            }), Object.defineProperty(e, t, {
                enumerable: a.enumerable
            }), {
                getValue: function getValue() {
                    return l;
                },
                setValue: function setValue(c) {
                    l = "" + c;
                },
                stopTracking: function stopTracking() {
                    e._valueTracker = null, delete e[t];
                }
            };
        }
    }
    function ka(e) {
        if (!e._valueTracker) {
            var t = We(e) ? "checked" : "value";
            e._valueTracker = Wa(e, t, "" + e[t]);
        }
    }
    function Wu(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var l = t.getValue(), a = "";
        return e && (a = We(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
    }
    function ku(e) {
        if (e = e || ((typeof document === "undefined" ? "undefined" : _type_of(document)) < "u" ? document : void 0), (typeof e === "undefined" ? "undefined" : _type_of(e)) > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch (unused) {
            return e.body;
        }
    }
    var oy = /[\n"\\]/g;
    function Ft(e) {
        return e.replace(oy, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " ";
        });
    }
    function zr(e, t, l, a, n, i, c, h) {
        e.name = "", c != null && typeof c != "function" && (typeof c === "undefined" ? "undefined" : _type_of(c)) != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ot(t)) : e.value !== "" + ot(t) && (e.value = "" + ot(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? Tr(e, c, ot(t)) : l != null ? Tr(e, c, ot(l)) : a != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && (typeof n === "undefined" ? "undefined" : _type_of(n)) != "symbol"), h != null && typeof h != "function" && (typeof h === "undefined" ? "undefined" : _type_of(h)) != "symbol" && typeof h != "boolean" ? e.name = "" + ot(h) : e.removeAttribute("name");
    }
    function ro(e, t, l, a, n, i, c, h) {
        if (i != null && typeof i != "function" && (typeof i === "undefined" ? "undefined" : _type_of(i)) != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
            if (!(i !== "submit" && i !== "reset" || t != null)) {
                ka(e);
                return;
            }
            l = l != null ? "" + ot(l) : "", t = t != null ? "" + ot(t) : l, h || t === e.value || (e.value = t), e.defaultValue = t;
        }
        a = a !== null && a !== void 0 ? a : n, a = typeof a != "function" && (typeof a === "undefined" ? "undefined" : _type_of(a)) != "symbol" && !!a, e.checked = h ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && (typeof c === "undefined" ? "undefined" : _type_of(c)) != "symbol" && typeof c != "boolean" && (e.name = c), ka(e);
    }
    function Tr(e, t, l) {
        t === "number" && ku(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
    }
    function Pa(e, t, l, a) {
        if (e = e.options, t) {
            t = {};
            for(var n = 0; n < l.length; n++)t["$" + l[n]] = !0;
            for(l = 0; l < e.length; l++)n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0);
        } else {
            for(l = "" + ot(l), t = null, n = 0; n < e.length; n++){
                if (e[n].value === l) {
                    e[n].selected = !0, a && (e[n].defaultSelected = !0);
                    return;
                }
                t !== null || e[n].disabled || (t = e[n]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function fo(e, t, l) {
        if (t != null && (t = "" + ot(t), t !== e.value && (e.value = t), l == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return;
        }
        e.defaultValue = l != null ? "" + ot(l) : "";
    }
    function co(e, t, l, a) {
        if (t == null) {
            if (a != null) {
                if (l != null) throw Error(f(92));
                if (de(a)) {
                    if (1 < a.length) throw Error(f(93));
                    a = a[0];
                }
                l = a;
            }
            l == null && (l = ""), t = l;
        }
        l = ot(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), ka(e);
    }
    function Ia(e, t) {
        if (t) {
            var l = e.firstChild;
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var sy = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function oo(e, t, l) {
        var a = t.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || sy.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
    }
    function so(e, t, l) {
        if (t != null && (typeof t === "undefined" ? "undefined" : _type_of(t)) != "object") throw Error(f(62));
        if (e = e.style, l != null) {
            for(var a in l)!l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
            for(var n in t)a = t[n], t.hasOwnProperty(n) && l[n] !== a && oo(e, n, a);
        } else for(var i in t)t.hasOwnProperty(i) && oo(e, i, t[i]);
    }
    function Mr(e) {
        if (e.indexOf("-") === -1) return !1;
        switch(e){
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }
    var dy = new Map([
        [
            "acceptCharset",
            "accept-charset"
        ],
        [
            "htmlFor",
            "for"
        ],
        [
            "httpEquiv",
            "http-equiv"
        ],
        [
            "crossOrigin",
            "crossorigin"
        ],
        [
            "accentHeight",
            "accent-height"
        ],
        [
            "alignmentBaseline",
            "alignment-baseline"
        ],
        [
            "arabicForm",
            "arabic-form"
        ],
        [
            "baselineShift",
            "baseline-shift"
        ],
        [
            "capHeight",
            "cap-height"
        ],
        [
            "clipPath",
            "clip-path"
        ],
        [
            "clipRule",
            "clip-rule"
        ],
        [
            "colorInterpolation",
            "color-interpolation"
        ],
        [
            "colorInterpolationFilters",
            "color-interpolation-filters"
        ],
        [
            "colorProfile",
            "color-profile"
        ],
        [
            "colorRendering",
            "color-rendering"
        ],
        [
            "dominantBaseline",
            "dominant-baseline"
        ],
        [
            "enableBackground",
            "enable-background"
        ],
        [
            "fillOpacity",
            "fill-opacity"
        ],
        [
            "fillRule",
            "fill-rule"
        ],
        [
            "floodColor",
            "flood-color"
        ],
        [
            "floodOpacity",
            "flood-opacity"
        ],
        [
            "fontFamily",
            "font-family"
        ],
        [
            "fontSize",
            "font-size"
        ],
        [
            "fontSizeAdjust",
            "font-size-adjust"
        ],
        [
            "fontStretch",
            "font-stretch"
        ],
        [
            "fontStyle",
            "font-style"
        ],
        [
            "fontVariant",
            "font-variant"
        ],
        [
            "fontWeight",
            "font-weight"
        ],
        [
            "glyphName",
            "glyph-name"
        ],
        [
            "glyphOrientationHorizontal",
            "glyph-orientation-horizontal"
        ],
        [
            "glyphOrientationVertical",
            "glyph-orientation-vertical"
        ],
        [
            "horizAdvX",
            "horiz-adv-x"
        ],
        [
            "horizOriginX",
            "horiz-origin-x"
        ],
        [
            "imageRendering",
            "image-rendering"
        ],
        [
            "letterSpacing",
            "letter-spacing"
        ],
        [
            "lightingColor",
            "lighting-color"
        ],
        [
            "markerEnd",
            "marker-end"
        ],
        [
            "markerMid",
            "marker-mid"
        ],
        [
            "markerStart",
            "marker-start"
        ],
        [
            "overlinePosition",
            "overline-position"
        ],
        [
            "overlineThickness",
            "overline-thickness"
        ],
        [
            "paintOrder",
            "paint-order"
        ],
        [
            "panose-1",
            "panose-1"
        ],
        [
            "pointerEvents",
            "pointer-events"
        ],
        [
            "renderingIntent",
            "rendering-intent"
        ],
        [
            "shapeRendering",
            "shape-rendering"
        ],
        [
            "stopColor",
            "stop-color"
        ],
        [
            "stopOpacity",
            "stop-opacity"
        ],
        [
            "strikethroughPosition",
            "strikethrough-position"
        ],
        [
            "strikethroughThickness",
            "strikethrough-thickness"
        ],
        [
            "strokeDasharray",
            "stroke-dasharray"
        ],
        [
            "strokeDashoffset",
            "stroke-dashoffset"
        ],
        [
            "strokeLinecap",
            "stroke-linecap"
        ],
        [
            "strokeLinejoin",
            "stroke-linejoin"
        ],
        [
            "strokeMiterlimit",
            "stroke-miterlimit"
        ],
        [
            "strokeOpacity",
            "stroke-opacity"
        ],
        [
            "strokeWidth",
            "stroke-width"
        ],
        [
            "textAnchor",
            "text-anchor"
        ],
        [
            "textDecoration",
            "text-decoration"
        ],
        [
            "textRendering",
            "text-rendering"
        ],
        [
            "transformOrigin",
            "transform-origin"
        ],
        [
            "underlinePosition",
            "underline-position"
        ],
        [
            "underlineThickness",
            "underline-thickness"
        ],
        [
            "unicodeBidi",
            "unicode-bidi"
        ],
        [
            "unicodeRange",
            "unicode-range"
        ],
        [
            "unitsPerEm",
            "units-per-em"
        ],
        [
            "vAlphabetic",
            "v-alphabetic"
        ],
        [
            "vHanging",
            "v-hanging"
        ],
        [
            "vIdeographic",
            "v-ideographic"
        ],
        [
            "vMathematical",
            "v-mathematical"
        ],
        [
            "vectorEffect",
            "vector-effect"
        ],
        [
            "vertAdvY",
            "vert-adv-y"
        ],
        [
            "vertOriginX",
            "vert-origin-x"
        ],
        [
            "vertOriginY",
            "vert-origin-y"
        ],
        [
            "wordSpacing",
            "word-spacing"
        ],
        [
            "writingMode",
            "writing-mode"
        ],
        [
            "xmlnsXlink",
            "xmlns:xlink"
        ],
        [
            "xHeight",
            "x-height"
        ]
    ]), hy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Pu(e) {
        return hy.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Al() {}
    var Dr = null;
    function Ar(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var en = null, tn = null;
    function ho(e) {
        var t = lt(e);
        if (t && (e = t.stateNode)) {
            var l = e[$] || null;
            e: switch(e = t.stateNode, t.type){
                case "input":
                    if (zr(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
                        for(l = e; l.parentNode;)l = l.parentNode;
                        for(l = l.querySelectorAll('input[name="' + Ft("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++){
                            var a = l[t];
                            if (a !== e && a.form === e.form) {
                                var n = a[$] || null;
                                if (!n) throw Error(f(90));
                                zr(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
                            }
                        }
                        for(t = 0; t < l.length; t++)a = l[t], a.form === e.form && Wu(a);
                    }
                    break e;
                case "textarea":
                    fo(e, l.value, l.defaultValue);
                    break e;
                case "select":
                    t = l.value, t != null && Pa(e, !!l.multiple, t, !1);
            }
        }
    }
    var Or = !1;
    function mo(e, t, l) {
        if (Or) return e(t, l);
        Or = !0;
        try {
            var a = e(t);
            return a;
        } finally{
            if (Or = !1, (en !== null || tn !== null) && (Yi(), en && (t = en, e = tn, tn = en = null, ho(t), e))) for(t = 0; t < e.length; t++)ho(e[t]);
        }
    }
    function Xn(e, t) {
        var l = e.stateNode;
        if (l === null) return null;
        var a = l[$] || null;
        if (a === null) return null;
        l = a[t];
        e: switch(t){
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (l && typeof l != "function") throw Error(f(231, t, typeof l === "undefined" ? "undefined" : _type_of(l)));
        return l;
    }
    var Ol = !((typeof window === "undefined" ? "undefined" : _type_of(window)) > "u" || _type_of(window.document) > "u" || _type_of(window.document.createElement) > "u"), _r = !1;
    if (Ol) try {
        var Qn = {};
        Object.defineProperty(Qn, "passive", {
            get: function get() {
                _r = !0;
            }
        }), window.addEventListener("test", Qn, Qn), window.removeEventListener("test", Qn, Qn);
    } catch (unused) {
        _r = !1;
    }
    var Wl = null, Cr = null, Iu = null;
    function yo() {
        if (Iu) return Iu;
        var e, t = Cr, l = t.length, a, n = "value" in Wl ? Wl.value : Wl.textContent, i = n.length;
        for(e = 0; e < l && t[e] === n[e]; e++);
        var c = l - e;
        for(a = 1; a <= c && t[l - a] === n[i - a]; a++);
        return Iu = n.slice(e, 1 < a ? 1 - a : void 0);
    }
    function ei(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function ti() {
        return !0;
    }
    function vo() {
        return !1;
    }
    function Nt(e) {
        function t(l, a, n, i, c) {
            this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = c, this.currentTarget = null;
            for(var h in e)e.hasOwnProperty(h) && (l = e[h], this[h] = l ? l(i) : i[h]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ti : vo, this.isPropagationStopped = vo, this;
        }
        return E(t.prototype, {
            preventDefault: function preventDefault() {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : _type_of(l.returnValue) != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ti);
            },
            stopPropagation: function stopPropagation() {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : _type_of(l.cancelBubble) != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ti);
            },
            persist: function persist() {},
            isPersistent: ti
        }), t;
    }
    var Aa = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function timeStamp(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, li = Nt(Aa), Vn = E({}, Aa, {
        view: 0,
        detail: 0
    }), my = Nt(Vn), Ur, Nr, Zn, ai = E({}, Vn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Hr,
        button: 0,
        buttons: 0,
        relatedTarget: function relatedTarget(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function movementX(e) {
            return "movementX" in e ? e.movementX : (e !== Zn && (Zn && e.type === "mousemove" ? (Ur = e.screenX - Zn.screenX, Nr = e.screenY - Zn.screenY) : Nr = Ur = 0, Zn = e), Ur);
        },
        movementY: function movementY(e) {
            return "movementY" in e ? e.movementY : Nr;
        }
    }), go = Nt(ai), yy = E({}, ai, {
        dataTransfer: 0
    }), vy = Nt(yy), gy = E({}, Vn, {
        relatedTarget: 0
    }), xr = Nt(gy), py = E({}, Aa, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Sy = Nt(py), by = E({}, Aa, {
        clipboardData: function clipboardData(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), Ey = Nt(by), Ry = E({}, Aa, {
        data: 0
    }), po = Nt(Ry), zy = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Ty = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, My = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Dy(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = My[e]) ? !!t[e] : !1;
    }
    function Hr() {
        return Dy;
    }
    var Ay = E({}, Vn, {
        key: function key(e) {
            if (e.key) {
                var t = zy[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = ei(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ty[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Hr,
        charCode: function charCode(e) {
            return e.type === "keypress" ? ei(e) : 0;
        },
        keyCode: function keyCode(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function which(e) {
            return e.type === "keypress" ? ei(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), Oy = Nt(Ay), _y = E({}, ai, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }), So = Nt(_y), Cy = E({}, Vn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Hr
    }), Uy = Nt(Cy), Ny = E({}, Aa, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), xy = Nt(Ny), Hy = E({}, ai, {
        deltaX: function deltaX(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function deltaY(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), Ly = Nt(Hy), wy = E({}, Aa, {
        newState: 0,
        oldState: 0
    }), By = Nt(wy), jy = [
        9,
        13,
        27,
        32
    ], Lr = Ol && "CompositionEvent" in window, Kn = null;
    Ol && "documentMode" in document && (Kn = document.documentMode);
    var Yy = Ol && "TextEvent" in window && !Kn, bo = Ol && (!Lr || Kn && 8 < Kn && 11 >= Kn), Eo = " ", Ro = !1;
    function zo(e, t) {
        switch(e){
            case "keyup":
                return jy.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function To(e) {
        return e = e.detail, (typeof e === "undefined" ? "undefined" : _type_of(e)) == "object" && "data" in e ? e.data : null;
    }
    var ln = !1;
    function qy(e, t) {
        switch(e){
            case "compositionend":
                return To(t);
            case "keypress":
                return t.which !== 32 ? null : (Ro = !0, Eo);
            case "textInput":
                return e = t.data, e === Eo && Ro ? null : e;
            default:
                return null;
        }
    }
    function Gy(e, t) {
        if (ln) return e === "compositionend" || !Lr && zo(e, t) ? (e = yo(), Iu = Cr = Wl = null, ln = !1, e) : null;
        switch(e){
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case "compositionend":
                return bo && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var Xy = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Mo(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Xy[e.type] : t === "textarea";
    }
    function Do(e, t, l, a) {
        en ? tn ? tn.push(a) : tn = [
            a
        ] : en = a, t = Ki(t, "onChange"), 0 < t.length && (l = new li("onChange", "change", null, l, a), e.push({
            event: l,
            listeners: t
        }));
    }
    var Jn = null, Fn = null;
    function Qy(e) {
        fh(e, 0);
    }
    function ni(e) {
        var t = He(e);
        if (Wu(t)) return e;
    }
    function Ao(e, t) {
        if (e === "change") return t;
    }
    var Oo = !1;
    if (Ol) {
        var wr;
        if (Ol) {
            var Br = "oninput" in document;
            if (!Br) {
                var _o = document.createElement("div");
                _o.setAttribute("oninput", "return;"), Br = typeof _o.oninput == "function";
            }
            wr = Br;
        } else wr = !1;
        Oo = wr && (!document.documentMode || 9 < document.documentMode);
    }
    function Co() {
        Jn && (Jn.detachEvent("onpropertychange", Uo), Fn = Jn = null);
    }
    function Uo(e) {
        if (e.propertyName === "value" && ni(Fn)) {
            var t = [];
            Do(t, Fn, e, Ar(e)), mo(Qy, t);
        }
    }
    function Vy(e, t, l) {
        e === "focusin" ? (Co(), Jn = t, Fn = l, Jn.attachEvent("onpropertychange", Uo)) : e === "focusout" && Co();
    }
    function Zy(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return ni(Fn);
    }
    function Ky(e, t) {
        if (e === "click") return ni(t);
    }
    function Jy(e, t) {
        if (e === "input" || e === "change") return ni(t);
    }
    function Fy(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var jt = typeof Object.is == "function" ? Object.is : Fy;
    function $n(e, t) {
        if (jt(e, t)) return !0;
        if ((typeof e === "undefined" ? "undefined" : _type_of(e)) != "object" || e === null || (typeof t === "undefined" ? "undefined" : _type_of(t)) != "object" || t === null) return !1;
        var l = Object.keys(e), a = Object.keys(t);
        if (l.length !== a.length) return !1;
        for(a = 0; a < l.length; a++){
            var n = l[a];
            if (!jn.call(t, n) || !jt(e[n], t[n])) return !1;
        }
        return !0;
    }
    function No(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function xo(e, t) {
        var l = No(e);
        e = 0;
        for(var a; l;){
            if (l.nodeType === 3) {
                if (a = e + l.textContent.length, e <= t && a >= t) return {
                    node: l,
                    offset: t - e
                };
                e = a;
            }
            e: {
                for(; l;){
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break e;
                    }
                    l = l.parentNode;
                }
                l = void 0;
            }
            l = No(l);
        }
    }
    function Ho(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ho(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Lo(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for(var t = ku(e.document); _instanceof1(t, e.HTMLIFrameElement);){
            try {
                var l = typeof t.contentWindow.location.href == "string";
            } catch (unused) {
                l = !1;
            }
            if (l) e = t.contentWindow;
            else break;
            t = ku(e.document);
        }
        return t;
    }
    function jr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    var $y = Ol && "documentMode" in document && 11 >= document.documentMode, an = null, Yr = null, Wn = null, qr = !1;
    function wo(e, t, l) {
        var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        qr || an == null || an !== ku(a) || (a = an, "selectionStart" in a && jr(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }), Wn && $n(Wn, a) || (Wn = a, a = Ki(Yr, "onSelect"), 0 < a.length && (t = new li("onSelect", "select", null, t, l), e.push({
            event: t,
            listeners: a
        }), t.target = an)));
    }
    function Oa(e, t) {
        var l = {};
        return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
    }
    var nn = {
        animationend: Oa("Animation", "AnimationEnd"),
        animationiteration: Oa("Animation", "AnimationIteration"),
        animationstart: Oa("Animation", "AnimationStart"),
        transitionrun: Oa("Transition", "TransitionRun"),
        transitionstart: Oa("Transition", "TransitionStart"),
        transitioncancel: Oa("Transition", "TransitionCancel"),
        transitionend: Oa("Transition", "TransitionEnd")
    }, Gr = {}, Bo = {};
    Ol && (Bo = document.createElement("div").style, "AnimationEvent" in window || (delete nn.animationend.animation, delete nn.animationiteration.animation, delete nn.animationstart.animation), "TransitionEvent" in window || delete nn.transitionend.transition);
    function _a(e) {
        if (Gr[e]) return Gr[e];
        if (!nn[e]) return e;
        var t = nn[e], l;
        for(l in t)if (t.hasOwnProperty(l) && l in Bo) return Gr[e] = t[l];
        return e;
    }
    var jo = _a("animationend"), Yo = _a("animationiteration"), qo = _a("animationstart"), Wy = _a("transitionrun"), ky = _a("transitionstart"), Py = _a("transitioncancel"), Go = _a("transitionend"), Xo = new Map, Xr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Xr.push("scrollEnd");
    function cl(e, t) {
        Xo.set(e, t), pt(t, [
            e
        ]);
    }
    var ui = typeof reportError == "function" ? reportError : function(e) {
        if ((typeof window === "undefined" ? "undefined" : _type_of(window)) == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: (typeof e === "undefined" ? "undefined" : _type_of(e)) == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return;
        } else if ((typeof process === "undefined" ? "undefined" : _type_of(process)) == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return;
        }
        console.error(e);
    }, $t = [], un = 0, Qr = 0;
    function ii() {
        for(var e = un, t = Qr = un = 0; t < e;){
            var l = $t[t];
            $t[t++] = null;
            var a = $t[t];
            $t[t++] = null;
            var n = $t[t];
            $t[t++] = null;
            var i = $t[t];
            if ($t[t++] = null, a !== null && n !== null) {
                var c = a.pending;
                c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n;
            }
            i !== 0 && Qo(l, n, i);
        }
    }
    function ri(e, t, l, a) {
        $t[un++] = e, $t[un++] = t, $t[un++] = l, $t[un++] = a, Qr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
    }
    function Vr(e, t, l, a) {
        return ri(e, t, l, a), fi(e);
    }
    function Ca(e, t) {
        return ri(e, null, null, t), fi(e);
    }
    function Qo(e, t, l) {
        e.lanes |= l;
        var a = e.alternate;
        a !== null && (a.lanes |= l);
        for(var n = !1, i = e.return; i !== null;)i.childLanes |= l, a = i.alternate, a !== null && (a.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = !0)), e = i, i = i.return;
        return e.tag === 3 ? (i = e.stateNode, n && t !== null && (n = 31 - Tt(l), e = i.hiddenUpdates, a = e[n], a === null ? e[n] = [
            t
        ] : a.push(t), t.lane = l | 536870912), i) : null;
    }
    function fi(e) {
        if (50 < pu) throw pu = 0, ec = null, Error(f(185));
        for(var t = e.return; t !== null;)e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null;
    }
    var rn = {};
    function Iy(e, t, l, a) {
        this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Yt(e, t, l, a) {
        return new Iy(e, t, l, a);
    }
    function Zr(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function _l(e, t) {
        var l = e.alternate;
        return l === null ? (l = Yt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
    }
    function Vo(e, t) {
        e.flags &= 65011714;
        var l = e.alternate;
        return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e;
    }
    function ci(e, t, l, a, n, i) {
        var c = 0;
        if (a = e, typeof e == "function") Zr(e) && (c = 1);
        else if (typeof e == "string") c = n0(e, l, J.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else e: switch(e){
            case Ee:
                return e = Yt(31, l, t, n), e.elementType = Ee, e.lanes = i, e;
            case X:
                return Ua(l.children, n, i, t);
            case K:
                c = 8, n |= 24;
                break;
            case ie:
                return e = Yt(12, l, t, n | 2), e.elementType = ie, e.lanes = i, e;
            case ve:
                return e = Yt(13, l, t, n), e.elementType = ve, e.lanes = i, e;
            case pe:
                return e = Yt(19, l, t, n), e.elementType = pe, e.lanes = i, e;
            default:
                if ((typeof e === "undefined" ? "undefined" : _type_of(e)) == "object" && e !== null) switch(e.$$typeof){
                    case k:
                        c = 10;
                        break e;
                    case I:
                        c = 9;
                        break e;
                    case xe:
                        c = 11;
                        break e;
                    case re:
                        c = 14;
                        break e;
                    case D:
                        c = 16, a = null;
                        break e;
                }
                c = 29, l = Error(f(130, e === null ? "null" : typeof e === "undefined" ? "undefined" : _type_of(e), "")), a = null;
        }
        return t = Yt(c, l, t, n), t.elementType = e, t.type = a, t.lanes = i, t;
    }
    function Ua(e, t, l, a) {
        return e = Yt(7, e, a, t), e.lanes = l, e;
    }
    function Kr(e, t, l) {
        return e = Yt(6, e, null, t), e.lanes = l, e;
    }
    function Zo(e) {
        var t = Yt(18, null, null, 0);
        return t.stateNode = e, t;
    }
    function Jr(e, t, l) {
        return t = Yt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    var Ko = new WeakMap;
    function Wt(e, t) {
        if ((typeof e === "undefined" ? "undefined" : _type_of(e)) == "object" && e !== null) {
            var l = Ko.get(e);
            return l !== void 0 ? l : (t = {
                value: e,
                source: t,
                stack: Qu(t)
            }, Ko.set(e, t), t);
        }
        return {
            value: e,
            source: t,
            stack: Qu(t)
        };
    }
    var fn = [], cn = 0, oi = null, kn = 0, kt = [], Pt = 0, kl = null, gl = 1, pl = "";
    function Cl(e, t) {
        fn[cn++] = kn, fn[cn++] = oi, oi = e, kn = t;
    }
    function Jo(e, t, l) {
        kt[Pt++] = gl, kt[Pt++] = pl, kt[Pt++] = kl, kl = e;
        var a = gl;
        e = pl;
        var n = 32 - Tt(a) - 1;
        a &= ~(1 << n), l += 1;
        var i = 32 - Tt(t) + n;
        if (30 < i) {
            var c = n - n % 5;
            i = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, gl = 1 << 32 - Tt(t) + n | l << n | a, pl = i + e;
        } else gl = 1 << i | l << n | a, pl = e;
    }
    function Fr(e) {
        e.return !== null && (Cl(e, 1), Jo(e, 1, 0));
    }
    function $r(e) {
        for(; e === oi;)oi = fn[--cn], fn[cn] = null, kn = fn[--cn], fn[cn] = null;
        for(; e === kl;)kl = kt[--Pt], kt[Pt] = null, pl = kt[--Pt], kt[Pt] = null, gl = kt[--Pt], kt[Pt] = null;
    }
    function Fo(e, t) {
        kt[Pt++] = gl, kt[Pt++] = pl, kt[Pt++] = kl, gl = t.id, pl = t.overflow, kl = e;
    }
    var bt = null, ke = null, Ne = !1, Pl = null, It = !1, Wr = Error(f(519));
    function Il(e) {
        var t = Error(f(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Pn(Wt(t, e)), Wr;
    }
    function $o(e) {
        var t = e.stateNode, l = e.type, a = e.memoizedProps;
        switch(t[F] = e, t[$] = a, l){
            case "dialog":
                Ae("cancel", t), Ae("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                Ae("load", t);
                break;
            case "video":
            case "audio":
                for(l = 0; l < bu.length; l++)Ae(bu[l], t);
                break;
            case "source":
                Ae("error", t);
                break;
            case "img":
            case "image":
            case "link":
                Ae("error", t), Ae("load", t);
                break;
            case "details":
                Ae("toggle", t);
                break;
            case "input":
                Ae("invalid", t), ro(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
                break;
            case "select":
                Ae("invalid", t);
                break;
            case "textarea":
                Ae("invalid", t), co(t, a.value, a.defaultValue, a.children);
        }
        l = a.children, typeof l != "string" && typeof l != "number" && (typeof l === "undefined" ? "undefined" : _type_of(l)) != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || dh(t.textContent, l) ? (a.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)), a.onScroll != null && Ae("scroll", t), a.onScrollEnd != null && Ae("scrollend", t), a.onClick != null && (t.onclick = Al), t = !0) : t = !1, t || Il(e, !0);
    }
    function Wo(e) {
        for(bt = e.return; bt;)switch(bt.tag){
            case 5:
            case 31:
            case 13:
                It = !1;
                return;
            case 27:
            case 3:
                It = !0;
                return;
            default:
                bt = bt.return;
        }
    }
    function on(e) {
        if (e !== bt) return !1;
        if (!Ne) return Wo(e), Ne = !0, !1;
        var t = e.tag, l;
        if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || yc(e.type, e.memoizedProps)), l = !l), l && ke && Il(e), Wo(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
            ke = Eh(e);
        } else if (t === 31) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
            ke = Eh(e);
        } else t === 27 ? (t = ke, ha(e.type) ? (e = bc, bc = null, ke = e) : ke = t) : ke = bt ? tl(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Na() {
        ke = bt = null, Ne = !1;
    }
    function kr() {
        var e = Pl;
        return e !== null && (wt === null ? wt = e : wt.push.apply(wt, e), Pl = null), e;
    }
    function Pn(e) {
        Pl === null ? Pl = [
            e
        ] : Pl.push(e);
    }
    var Pr = b(null), xa = null, Ul = null;
    function ea(e, t, l) {
        V(Pr, t._currentValue), t._currentValue = l;
    }
    function Nl(e) {
        e._currentValue = Pr.current, B(Pr);
    }
    function Ir(e, t, l) {
        for(; e !== null;){
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
            e = e.return;
        }
    }
    function ef(e, t, l, a) {
        var n = e.child;
        for(n !== null && (n.return = e); n !== null;){
            var i = n.dependencies;
            if (i !== null) {
                var c = n.child;
                i = i.firstContext;
                e: for(; i !== null;){
                    var h = i;
                    i = n;
                    for(var p = 0; p < t.length; p++)if (h.context === t[p]) {
                        i.lanes |= l, h = i.alternate, h !== null && (h.lanes |= l), Ir(i.return, l, e), a || (c = null);
                        break e;
                    }
                    i = h.next;
                }
            } else if (n.tag === 18) {
                if (c = n.return, c === null) throw Error(f(341));
                c.lanes |= l, i = c.alternate, i !== null && (i.lanes |= l), Ir(c, l, e), c = null;
            } else c = n.child;
            if (c !== null) c.return = n;
            else for(c = n; c !== null;){
                if (c === e) {
                    c = null;
                    break;
                }
                if (n = c.sibling, n !== null) {
                    n.return = c.return, c = n;
                    break;
                }
                c = c.return;
            }
            n = c;
        }
    }
    function sn(e, t, l, a) {
        e = null;
        for(var n = t, i = !1; n !== null;){
            if (!i) {
                if ((n.flags & 524288) !== 0) i = !0;
                else if ((n.flags & 262144) !== 0) break;
            }
            if (n.tag === 10) {
                var c = n.alternate;
                if (c === null) throw Error(f(387));
                if (c = c.memoizedProps, c !== null) {
                    var h = n.type;
                    jt(n.pendingProps.value, c.value) || (e !== null ? e.push(h) : e = [
                        h
                    ]);
                }
            } else if (n === ze.current) {
                if (c = n.alternate, c === null) throw Error(f(387));
                c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Mu) : e = [
                    Mu
                ]);
            }
            n = n.return;
        }
        e !== null && ef(t, e, l, a), t.flags |= 262144;
    }
    function si(e) {
        for(e = e.firstContext; e !== null;){
            if (!jt(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
        }
        return !1;
    }
    function Ha(e) {
        xa = e, Ul = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Et(e) {
        return ko(xa, e);
    }
    function di(e, t) {
        return xa === null && Ha(e), ko(e, t);
    }
    function ko(e, t) {
        var l = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: l,
            next: null
        }, Ul === null) {
            if (e === null) throw Error(f(308));
            Ul = t, e.dependencies = {
                lanes: 0,
                firstContext: t
            }, e.flags |= 524288;
        } else Ul = Ul.next = t;
        return l;
    }
    var ev = (typeof AbortController === "undefined" ? "undefined" : _type_of(AbortController)) < "u" ? AbortController : function() {
        var e = [], t = this.signal = {
            aborted: !1,
            addEventListener: function addEventListener(l, a) {
                e.push(a);
            }
        };
        this.abort = function() {
            t.aborted = !0, e.forEach(function(l) {
                return l();
            });
        };
    }, tv = u.unstable_scheduleCallback, lv = u.unstable_NormalPriority, st = {
        $$typeof: k,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function tf() {
        return {
            controller: new ev,
            data: new Map,
            refCount: 0
        };
    }
    function In(e) {
        e.refCount--, e.refCount === 0 && tv(lv, function() {
            e.controller.abort();
        });
    }
    var eu = null, lf = 0, dn = 0, hn = null;
    function av(e, t) {
        if (eu === null) {
            var l = eu = [];
            lf = 0, dn = ic(), hn = {
                status: "pending",
                value: void 0,
                then: function then(a) {
                    l.push(a);
                }
            };
        }
        return lf++, t.then(Po, Po), t;
    }
    function Po() {
        if (--lf === 0 && eu !== null) {
            hn !== null && (hn.status = "fulfilled");
            var e = eu;
            eu = null, dn = 0, hn = null;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
    }
    function nv(e, t) {
        var l = [], a = {
            status: "pending",
            value: null,
            reason: null,
            then: function then(n) {
                l.push(n);
            }
        };
        return e.then(function() {
            a.status = "fulfilled", a.value = t;
            for(var n = 0; n < l.length; n++)(0, l[n])(t);
        }, function(n) {
            for(a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)(0, l[n])(void 0);
        }), a;
    }
    var Io = x.S;
    x.S = function(e, t) {
        wd = Ot(), (typeof t === "undefined" ? "undefined" : _type_of(t)) == "object" && t !== null && typeof t.then == "function" && av(e, t), Io !== null && Io(e, t);
    };
    var La = b(null);
    function af() {
        var e = La.current;
        return e !== null ? e : Je.pooledCache;
    }
    function hi(e, t) {
        t === null ? V(La, La.current) : V(La, t.pool);
    }
    function es() {
        var e = af();
        return e === null ? null : {
            parent: st._currentValue,
            pool: e
        };
    }
    var mn = Error(f(460)), nf = Error(f(474)), mi = Error(f(542)), yi = {
        then: function then() {}
    };
    function ts(e) {
        return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function ls(e, t, l) {
        switch(l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Al, Al), t = l), t.status){
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason, ns(e), e;
            default:
                if (typeof t.status == "string") t.then(Al, Al);
                else {
                    if (e = Je, e !== null && 100 < e.shellSuspendCounter) throw Error(f(482));
                    e = t, e.status = "pending", e.then(function(a) {
                        if (t.status === "pending") {
                            var n = t;
                            n.status = "fulfilled", n.value = a;
                        }
                    }, function(a) {
                        if (t.status === "pending") {
                            var n = t;
                            n.status = "rejected", n.reason = a;
                        }
                    });
                }
                switch(t.status){
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw e = t.reason, ns(e), e;
                }
                throw Ba = t, mn;
        }
    }
    function wa(e) {
        try {
            var t = e._init;
            return t(e._payload);
        } catch (l) {
            throw l !== null && (typeof l === "undefined" ? "undefined" : _type_of(l)) == "object" && typeof l.then == "function" ? (Ba = l, mn) : l;
        }
    }
    var Ba = null;
    function as() {
        if (Ba === null) throw Error(f(459));
        var e = Ba;
        return Ba = null, e;
    }
    function ns(e) {
        if (e === mn || e === mi) throw Error(f(483));
    }
    var yn = null, tu = 0;
    function vi(e) {
        var t = tu;
        return tu += 1, yn === null && (yn = []), ls(yn, e, t);
    }
    function lu(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function gi(e, t) {
        throw t.$$typeof === L ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
    }
    function us(e) {
        function t(T, R) {
            if (e) {
                var O = T.deletions;
                O === null ? (T.deletions = [
                    R
                ], T.flags |= 16) : O.push(R);
            }
        }
        function l(T, R) {
            if (!e) return null;
            for(; R !== null;)t(T, R), R = R.sibling;
            return null;
        }
        function a(T) {
            for(var R = new Map; T !== null;)T.key !== null ? R.set(T.key, T) : R.set(T.index, T), T = T.sibling;
            return R;
        }
        function n(T, R) {
            return T = _l(T, R), T.index = 0, T.sibling = null, T;
        }
        function i(T, R, O) {
            return T.index = O, e ? (O = T.alternate, O !== null ? (O = O.index, O < R ? (T.flags |= 67108866, R) : O) : (T.flags |= 67108866, R)) : (T.flags |= 1048576, R);
        }
        function c(T) {
            return e && T.alternate === null && (T.flags |= 67108866), T;
        }
        function h(T, R, O, j) {
            return R === null || R.tag !== 6 ? (R = Kr(O, T.mode, j), R.return = T, R) : (R = n(R, O), R.return = T, R);
        }
        function p(T, R, O, j) {
            var fe = O.type;
            return fe === X ? w(T, R, O.props.children, j, O.key) : R !== null && (R.elementType === fe || (typeof fe === "undefined" ? "undefined" : _type_of(fe)) == "object" && fe !== null && fe.$$typeof === D && wa(fe) === R.type) ? (R = n(R, O.props), lu(R, O), R.return = T, R) : (R = ci(O.type, O.key, O.props, null, T.mode, j), lu(R, O), R.return = T, R);
        }
        function _(T, R, O, j) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== O.containerInfo || R.stateNode.implementation !== O.implementation ? (R = Jr(O, T.mode, j), R.return = T, R) : (R = n(R, O.children || []), R.return = T, R);
        }
        function w(T, R, O, j, fe) {
            return R === null || R.tag !== 7 ? (R = Ua(O, T.mode, j, fe), R.return = T, R) : (R = n(R, O), R.return = T, R);
        }
        function q(T, R, O) {
            if (typeof R == "string" && R !== "" || typeof R == "number" || (typeof R === "undefined" ? "undefined" : _type_of(R)) == "bigint") return R = Kr("" + R, T.mode, O), R.return = T, R;
            if ((typeof R === "undefined" ? "undefined" : _type_of(R)) == "object" && R !== null) {
                switch(R.$$typeof){
                    case A:
                        return O = ci(R.type, R.key, R.props, null, T.mode, O), lu(O, R), O.return = T, O;
                    case Y:
                        return R = Jr(R, T.mode, O), R.return = T, R;
                    case D:
                        return R = wa(R), q(T, R, O);
                }
                if (de(R) || me(R)) return R = Ua(R, T.mode, O, null), R.return = T, R;
                if (typeof R.then == "function") return q(T, vi(R), O);
                if (R.$$typeof === k) return q(T, di(T, R), O);
                gi(T, R);
            }
            return null;
        }
        function U(T, R, O, j) {
            var fe = R !== null ? R.key : null;
            if (typeof O == "string" && O !== "" || typeof O == "number" || (typeof O === "undefined" ? "undefined" : _type_of(O)) == "bigint") return fe !== null ? null : h(T, R, "" + O, j);
            if ((typeof O === "undefined" ? "undefined" : _type_of(O)) == "object" && O !== null) {
                switch(O.$$typeof){
                    case A:
                        return O.key === fe ? p(T, R, O, j) : null;
                    case Y:
                        return O.key === fe ? _(T, R, O, j) : null;
                    case D:
                        return O = wa(O), U(T, R, O, j);
                }
                if (de(O) || me(O)) return fe !== null ? null : w(T, R, O, j, null);
                if (typeof O.then == "function") return U(T, R, vi(O), j);
                if (O.$$typeof === k) return U(T, R, di(T, O), j);
                gi(T, O);
            }
            return null;
        }
        function H(T, R, O, j, fe) {
            if (typeof j == "string" && j !== "" || typeof j == "number" || (typeof j === "undefined" ? "undefined" : _type_of(j)) == "bigint") return T = T.get(O) || null, h(R, T, "" + j, fe);
            if ((typeof j === "undefined" ? "undefined" : _type_of(j)) == "object" && j !== null) {
                switch(j.$$typeof){
                    case A:
                        return T = T.get(j.key === null ? O : j.key) || null, p(R, T, j, fe);
                    case Y:
                        return T = T.get(j.key === null ? O : j.key) || null, _(R, T, j, fe);
                    case D:
                        return j = wa(j), H(T, R, O, j, fe);
                }
                if (de(j) || me(j)) return T = T.get(O) || null, w(R, T, j, fe, null);
                if (typeof j.then == "function") return H(T, R, O, vi(j), fe);
                if (j.$$typeof === k) return H(T, R, O, di(R, j), fe);
                gi(R, j);
            }
            return null;
        }
        function P(T, R, O, j) {
            for(var fe = null, we = null, ne = R, be = R = 0, _e = null; ne !== null && be < O.length; be++){
                ne.index > be ? (_e = ne, ne = null) : _e = ne.sibling;
                var Be = U(T, ne, O[be], j);
                if (Be === null) {
                    ne === null && (ne = _e);
                    break;
                }
                e && ne && Be.alternate === null && t(T, ne), R = i(Be, R, be), we === null ? fe = Be : we.sibling = Be, we = Be, ne = _e;
            }
            if (be === O.length) return l(T, ne), Ne && Cl(T, be), fe;
            if (ne === null) {
                for(; be < O.length; be++)ne = q(T, O[be], j), ne !== null && (R = i(ne, R, be), we === null ? fe = ne : we.sibling = ne, we = ne);
                return Ne && Cl(T, be), fe;
            }
            for(ne = a(ne); be < O.length; be++)_e = H(ne, T, be, O[be], j), _e !== null && (e && _e.alternate !== null && ne.delete(_e.key === null ? be : _e.key), R = i(_e, R, be), we === null ? fe = _e : we.sibling = _e, we = _e);
            return e && ne.forEach(function(pa) {
                return t(T, pa);
            }), Ne && Cl(T, be), fe;
        }
        function se(T, R, O, j) {
            if (O == null) throw Error(f(151));
            for(var fe = null, we = null, ne = R, be = R = 0, _e = null, Be = O.next(); ne !== null && !Be.done; be++, Be = O.next()){
                ne.index > be ? (_e = ne, ne = null) : _e = ne.sibling;
                var pa = U(T, ne, Be.value, j);
                if (pa === null) {
                    ne === null && (ne = _e);
                    break;
                }
                e && ne && pa.alternate === null && t(T, ne), R = i(pa, R, be), we === null ? fe = pa : we.sibling = pa, we = pa, ne = _e;
            }
            if (Be.done) return l(T, ne), Ne && Cl(T, be), fe;
            if (ne === null) {
                for(; !Be.done; be++, Be = O.next())Be = q(T, Be.value, j), Be !== null && (R = i(Be, R, be), we === null ? fe = Be : we.sibling = Be, we = Be);
                return Ne && Cl(T, be), fe;
            }
            for(ne = a(ne); !Be.done; be++, Be = O.next())Be = H(ne, T, be, Be.value, j), Be !== null && (e && Be.alternate !== null && ne.delete(Be.key === null ? be : Be.key), R = i(Be, R, be), we === null ? fe = Be : we.sibling = Be, we = Be);
            return e && ne.forEach(function(y0) {
                return t(T, y0);
            }), Ne && Cl(T, be), fe;
        }
        function Qe(T, R, O, j) {
            if ((typeof O === "undefined" ? "undefined" : _type_of(O)) == "object" && O !== null && O.type === X && O.key === null && (O = O.props.children), (typeof O === "undefined" ? "undefined" : _type_of(O)) == "object" && O !== null) {
                switch(O.$$typeof){
                    case A:
                        e: {
                            for(var fe = O.key; R !== null;){
                                if (R.key === fe) {
                                    if (fe = O.type, fe === X) {
                                        if (R.tag === 7) {
                                            l(T, R.sibling), j = n(R, O.props.children), j.return = T, T = j;
                                            break e;
                                        }
                                    } else if (R.elementType === fe || (typeof fe === "undefined" ? "undefined" : _type_of(fe)) == "object" && fe !== null && fe.$$typeof === D && wa(fe) === R.type) {
                                        l(T, R.sibling), j = n(R, O.props), lu(j, O), j.return = T, T = j;
                                        break e;
                                    }
                                    l(T, R);
                                    break;
                                } else t(T, R);
                                R = R.sibling;
                            }
                            O.type === X ? (j = Ua(O.props.children, T.mode, j, O.key), j.return = T, T = j) : (j = ci(O.type, O.key, O.props, null, T.mode, j), lu(j, O), j.return = T, T = j);
                        }
                        return c(T);
                    case Y:
                        e: {
                            for(fe = O.key; R !== null;){
                                if (R.key === fe) if (R.tag === 4 && R.stateNode.containerInfo === O.containerInfo && R.stateNode.implementation === O.implementation) {
                                    l(T, R.sibling), j = n(R, O.children || []), j.return = T, T = j;
                                    break e;
                                } else {
                                    l(T, R);
                                    break;
                                }
                                else t(T, R);
                                R = R.sibling;
                            }
                            j = Jr(O, T.mode, j), j.return = T, T = j;
                        }
                        return c(T);
                    case D:
                        return O = wa(O), Qe(T, R, O, j);
                }
                if (de(O)) return P(T, R, O, j);
                if (me(O)) {
                    if (fe = me(O), typeof fe != "function") throw Error(f(150));
                    return O = fe.call(O), se(T, R, O, j);
                }
                if (typeof O.then == "function") return Qe(T, R, vi(O), j);
                if (O.$$typeof === k) return Qe(T, R, di(T, O), j);
                gi(T, O);
            }
            return typeof O == "string" && O !== "" || typeof O == "number" || (typeof O === "undefined" ? "undefined" : _type_of(O)) == "bigint" ? (O = "" + O, R !== null && R.tag === 6 ? (l(T, R.sibling), j = n(R, O), j.return = T, T = j) : (l(T, R), j = Kr(O, T.mode, j), j.return = T, T = j), c(T)) : l(T, R);
        }
        return function(T, R, O, j) {
            try {
                tu = 0;
                var fe = Qe(T, R, O, j);
                return yn = null, fe;
            } catch (ne) {
                if (ne === mn || ne === mi) throw ne;
                var we = Yt(29, ne, null, T.mode);
                return we.lanes = j, we.return = T, we;
            }
        };
    }
    var ja = us(!0), is = us(!1), ta = !1;
    function uf(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        };
    }
    function rf(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        });
    }
    function la(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        };
    }
    function aa(e, t, l) {
        var a = e.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (je & 2) !== 0) {
            var n = a.pending;
            return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = fi(e), Qo(e, null, l), t;
        }
        return ri(e, a, t, l), fi(e);
    }
    function au(e, t, l) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes, l |= a, t.lanes = l, $u(e, l);
        }
    }
    function ff(e, t) {
        var l = e.updateQueue, a = e.alternate;
        if (a !== null && (a = a.updateQueue, l === a)) {
            var n = null, i = null;
            if (l = l.firstBaseUpdate, l !== null) {
                do {
                    var c = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    i === null ? n = i = c : i = i.next = c, l = l.next;
                }while (l !== null);
                i === null ? n = i = t : i = i.next = t;
            } else n = i = t;
            l = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: i,
                shared: a.shared,
                callbacks: a.callbacks
            }, e.updateQueue = l;
            return;
        }
        e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
    }
    var cf = !1;
    function nu() {
        if (cf) {
            var e = hn;
            if (e !== null) throw e;
        }
    }
    function uu(e, t, l, a) {
        cf = !1;
        var n = e.updateQueue;
        ta = !1;
        var i = n.firstBaseUpdate, c = n.lastBaseUpdate, h = n.shared.pending;
        if (h !== null) {
            n.shared.pending = null;
            var p = h, _ = p.next;
            p.next = null, c === null ? i = _ : c.next = _, c = p;
            var w = e.alternate;
            w !== null && (w = w.updateQueue, h = w.lastBaseUpdate, h !== c && (h === null ? w.firstBaseUpdate = _ : h.next = _, w.lastBaseUpdate = p));
        }
        if (i !== null) {
            var q = n.baseState;
            c = 0, w = _ = p = null, h = i;
            do {
                var U = h.lane & -536870913, H = U !== h.lane;
                if (H ? (Oe & U) === U : (a & U) === U) {
                    U !== 0 && U === dn && (cf = !0), w !== null && (w = w.next = {
                        lane: 0,
                        tag: h.tag,
                        payload: h.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var P = e, se = h;
                        U = t;
                        var Qe = l;
                        switch(se.tag){
                            case 1:
                                if (P = se.payload, typeof P == "function") {
                                    q = P.call(Qe, q, U);
                                    break e;
                                }
                                q = P;
                                break e;
                            case 3:
                                P.flags = P.flags & -65537 | 128;
                            case 0:
                                if (P = se.payload, U = typeof P == "function" ? P.call(Qe, q, U) : P, U == null) break e;
                                q = E({}, q, U);
                                break e;
                            case 2:
                                ta = !0;
                        }
                    }
                    U = h.callback, U !== null && (e.flags |= 64, H && (e.flags |= 8192), H = n.callbacks, H === null ? n.callbacks = [
                        U
                    ] : H.push(U));
                } else H = {
                    lane: U,
                    tag: h.tag,
                    payload: h.payload,
                    callback: h.callback,
                    next: null
                }, w === null ? (_ = w = H, p = q) : w = w.next = H, c |= U;
                if (h = h.next, h === null) {
                    if (h = n.shared.pending, h === null) break;
                    H = h, h = H.next, H.next = null, n.lastBaseUpdate = H, n.shared.pending = null;
                }
            }while (!0);
            w === null && (p = q), n.baseState = p, n.firstBaseUpdate = _, n.lastBaseUpdate = w, i === null && (n.shared.lanes = 0), fa |= c, e.lanes = c, e.memoizedState = q;
        }
    }
    function rs(e, t) {
        if (typeof e != "function") throw Error(f(191, e));
        e.call(t);
    }
    function fs(e, t) {
        var l = e.callbacks;
        if (l !== null) for(e.callbacks = null, e = 0; e < l.length; e++)rs(l[e], t);
    }
    var vn = b(null), pi = b(0);
    function cs(e, t) {
        e = Gl, V(pi, e), V(vn, t), Gl = e | t.baseLanes;
    }
    function of() {
        V(pi, Gl), V(vn, vn.current);
    }
    function sf() {
        Gl = pi.current, B(vn), B(pi);
    }
    var qt = b(null), el = null;
    function na(e) {
        var t = e.alternate;
        V(it, it.current & 1), V(qt, e), el === null && (t === null || vn.current !== null || t.memoizedState !== null) && (el = e);
    }
    function df(e) {
        V(it, it.current), V(qt, e), el === null && (el = e);
    }
    function os(e) {
        e.tag === 22 ? (V(it, it.current), V(qt, e), el === null && (el = e)) : ua();
    }
    function ua() {
        V(it, it.current), V(qt, qt.current);
    }
    function Gt(e) {
        B(qt), el === e && (el = null), B(it);
    }
    var it = b(0);
    function Si(e) {
        for(var t = e; t !== null;){
            if (t.tag === 13) {
                var l = t.memoizedState;
                if (l !== null && (l = l.dehydrated, l === null || pc(l) || Sc(l))) return t;
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0) return t;
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === e) return null;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
        return null;
    }
    var xl = 0, ge = null, Ge = null, dt = null, bi = !1, gn = !1, Ya = !1, Ei = 0, iu = 0, pn = null, uv = 0;
    function at() {
        throw Error(f(321));
    }
    function hf(e, t) {
        if (t === null) return !1;
        for(var l = 0; l < t.length && l < e.length; l++)if (!jt(e[l], t[l])) return !1;
        return !0;
    }
    function mf(e, t, l, a, n, i) {
        return xl = i, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, x.H = e === null || e.memoizedState === null ? Js : _f, Ya = !1, i = l(a, n), Ya = !1, gn && (i = ds(t, l, a, n)), ss(e), i;
    }
    function ss(e) {
        x.H = cu;
        var t = Ge !== null && Ge.next !== null;
        if (xl = 0, dt = Ge = ge = null, bi = !1, iu = 0, pn = null, t) throw Error(f(300));
        e === null || ht || (e = e.dependencies, e !== null && si(e) && (ht = !0));
    }
    function ds(e, t, l, a) {
        ge = e;
        var n = 0;
        do {
            if (gn && (pn = null), iu = 0, gn = !1, 25 <= n) throw Error(f(301));
            if (n += 1, dt = Ge = null, e.updateQueue != null) {
                var i = e.updateQueue;
                i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
            }
            x.H = Fs, i = t(l, a);
        }while (gn);
        return i;
    }
    function iv() {
        var e = x.H, t = e.useState()[0];
        return t = typeof t.then == "function" ? ru(t) : t, e = e.useState()[0], (Ge !== null ? Ge.memoizedState : null) !== e && (ge.flags |= 1024), t;
    }
    function yf() {
        var e = Ei !== 0;
        return Ei = 0, e;
    }
    function vf(e, t, l) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
    }
    function gf(e) {
        if (bi) {
            for(e = e.memoizedState; e !== null;){
                var t = e.queue;
                t !== null && (t.pending = null), e = e.next;
            }
            bi = !1;
        }
        xl = 0, dt = Ge = ge = null, gn = !1, iu = Ei = 0, pn = null;
    }
    function Ct() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return dt === null ? ge.memoizedState = dt = e : dt = dt.next = e, dt;
    }
    function rt() {
        if (Ge === null) {
            var e = ge.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = Ge.next;
        var t = dt === null ? ge.memoizedState : dt.next;
        if (t !== null) dt = t, Ge = e;
        else {
            if (e === null) throw ge.alternate === null ? Error(f(467)) : Error(f(310));
            Ge = e, e = {
                memoizedState: Ge.memoizedState,
                baseState: Ge.baseState,
                baseQueue: Ge.baseQueue,
                queue: Ge.queue,
                next: null
            }, dt === null ? ge.memoizedState = dt = e : dt = dt.next = e;
        }
        return dt;
    }
    function Ri() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        };
    }
    function ru(e) {
        var t = iu;
        return iu += 1, pn === null && (pn = []), e = ls(pn, e, t), t = ge, (dt === null ? t.memoizedState : dt.next) === null && (t = t.alternate, x.H = t === null || t.memoizedState === null ? Js : _f), e;
    }
    function zi(e) {
        if (e !== null && (typeof e === "undefined" ? "undefined" : _type_of(e)) == "object") {
            if (typeof e.then == "function") return ru(e);
            if (e.$$typeof === k) return Et(e);
        }
        throw Error(f(438, String(e)));
    }
    function pf(e) {
        var t = null, l = ge.updateQueue;
        if (l !== null && (t = l.memoCache), t == null) {
            var a = ge.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
                data: a.data.map(function(n) {
                    return n.slice();
                }),
                index: 0
            })));
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }), l === null && (l = Ri(), ge.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for(l = t.data[t.index] = Array(e), a = 0; a < e; a++)l[a] = Ce;
        return t.index++, l;
    }
    function Hl(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Ti(e) {
        var t = rt();
        return Sf(t, Ge, e);
    }
    function Sf(e, t, l) {
        var a = e.queue;
        if (a === null) throw Error(f(311));
        a.lastRenderedReducer = l;
        var n = e.baseQueue, i = a.pending;
        if (i !== null) {
            if (n !== null) {
                var c = n.next;
                n.next = i.next, i.next = c;
            }
            t.baseQueue = n = i, a.pending = null;
        }
        if (i = e.baseState, n === null) e.memoizedState = i;
        else {
            t = n.next;
            var h = c = null, p = null, _ = t, w = !1;
            do {
                var q = _.lane & -536870913;
                if (q !== _.lane ? (Oe & q) === q : (xl & q) === q) {
                    var U = _.revertLane;
                    if (U === 0) p !== null && (p = p.next = {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: _.action,
                        hasEagerState: _.hasEagerState,
                        eagerState: _.eagerState,
                        next: null
                    }), q === dn && (w = !0);
                    else if ((xl & U) === U) {
                        _ = _.next, U === dn && (w = !0);
                        continue;
                    } else q = {
                        lane: 0,
                        revertLane: _.revertLane,
                        gesture: null,
                        action: _.action,
                        hasEagerState: _.hasEagerState,
                        eagerState: _.eagerState,
                        next: null
                    }, p === null ? (h = p = q, c = i) : p = p.next = q, ge.lanes |= U, fa |= U;
                    q = _.action, Ya && l(i, q), i = _.hasEagerState ? _.eagerState : l(i, q);
                } else U = {
                    lane: q,
                    revertLane: _.revertLane,
                    gesture: _.gesture,
                    action: _.action,
                    hasEagerState: _.hasEagerState,
                    eagerState: _.eagerState,
                    next: null
                }, p === null ? (h = p = U, c = i) : p = p.next = U, ge.lanes |= q, fa |= q;
                _ = _.next;
            }while (_ !== null && _ !== t);
            if (p === null ? c = i : p.next = h, !jt(i, e.memoizedState) && (ht = !0, w && (l = hn, l !== null))) throw l;
            e.memoizedState = i, e.baseState = c, e.baseQueue = p, a.lastRenderedState = i;
        }
        return n === null && (a.lanes = 0), [
            e.memoizedState,
            a.dispatch
        ];
    }
    function bf(e) {
        var t = rt(), l = t.queue;
        if (l === null) throw Error(f(311));
        l.lastRenderedReducer = e;
        var a = l.dispatch, n = l.pending, i = t.memoizedState;
        if (n !== null) {
            l.pending = null;
            var c = n = n.next;
            do i = e(i, c.action), c = c.next;
            while (c !== n);
            jt(i, t.memoizedState) || (ht = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
        }
        return [
            i,
            a
        ];
    }
    function hs(e, t, l) {
        var a = ge, n = rt(), i = Ne;
        if (i) {
            if (l === void 0) throw Error(f(407));
            l = l();
        } else l = t();
        var c = !jt((Ge || n).memoizedState, l);
        if (c && (n.memoizedState = l, ht = !0), n = n.queue, zf(vs.bind(null, a, n, e), [
            e
        ]), n.getSnapshot !== t || c || dt !== null && dt.memoizedState.tag & 1) {
            if (a.flags |= 2048, Sn(9, {
                destroy: void 0
            }, ys.bind(null, a, n, l, t), null), Je === null) throw Error(f(349));
            i || (xl & 127) !== 0 || ms(a, t, l);
        }
        return l;
    }
    function ms(e, t, l) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: l
        }, t = ge.updateQueue, t === null ? (t = Ri(), ge.updateQueue = t, t.stores = [
            e
        ]) : (l = t.stores, l === null ? t.stores = [
            e
        ] : l.push(e));
    }
    function ys(e, t, l, a) {
        t.value = l, t.getSnapshot = a, gs(t) && ps(e);
    }
    function vs(e, t, l) {
        return l(function() {
            gs(t) && ps(e);
        });
    }
    function gs(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var l = t();
            return !jt(e, l);
        } catch (unused) {
            return !0;
        }
    }
    function ps(e) {
        var t = Ca(e, 2);
        t !== null && Bt(t, e, 2);
    }
    function Ef(e) {
        var t = Ct();
        if (typeof e == "function") {
            var l = e;
            if (e = l(), Ya) {
                gt(!0);
                try {
                    l();
                } finally{
                    gt(!1);
                }
            }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Hl,
            lastRenderedState: e
        }, t;
    }
    function Ss(e, t, l, a) {
        return e.baseState = l, Sf(e, Ge, typeof a == "function" ? a : Hl);
    }
    function rv(e, t, l, a, n) {
        if (Ai(e)) throw Error(f(485));
        if (e = t.action, e !== null) {
            var i = {
                payload: n,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function then(c) {
                    i.listeners.push(c);
                }
            };
            x.T !== null ? l(!0) : i.isTransition = !1, a(i), l = t.pending, l === null ? (i.next = t.pending = i, bs(t, i)) : (i.next = l.next, t.pending = l.next = i);
        }
    }
    function bs(e, t) {
        var l = t.action, a = t.payload, n = e.state;
        if (t.isTransition) {
            var i = x.T, c = {};
            x.T = c;
            try {
                var h = l(n, a), p = x.S;
                p !== null && p(c, h), Es(e, t, h);
            } catch (_) {
                Rf(e, t, _);
            } finally{
                i !== null && c.types !== null && (i.types = c.types), x.T = i;
            }
        } else try {
            i = l(n, a), Es(e, t, i);
        } catch (_) {
            Rf(e, t, _);
        }
    }
    function Es(e, t, l) {
        l !== null && (typeof l === "undefined" ? "undefined" : _type_of(l)) == "object" && typeof l.then == "function" ? l.then(function(a) {
            Rs(e, t, a);
        }, function(a) {
            return Rf(e, t, a);
        }) : Rs(e, t, l);
    }
    function Rs(e, t, l) {
        t.status = "fulfilled", t.value = l, zs(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, bs(e, l)));
    }
    function Rf(e, t, l) {
        var a = e.pending;
        if (e.pending = null, a !== null) {
            a = a.next;
            do t.status = "rejected", t.reason = l, zs(t), t = t.next;
            while (t !== a);
        }
        e.action = null;
    }
    function zs(e) {
        e = e.listeners;
        for(var t = 0; t < e.length; t++)(0, e[t])();
    }
    function Ts(e, t) {
        return t;
    }
    function Ms(e, t) {
        if (Ne) {
            var l = Je.formState;
            if (l !== null) {
                e: {
                    var a = ge;
                    if (Ne) {
                        if (ke) {
                            t: {
                                for(var n = ke, i = It; n.nodeType !== 8;){
                                    if (!i) {
                                        n = null;
                                        break t;
                                    }
                                    if (n = tl(n.nextSibling), n === null) {
                                        n = null;
                                        break t;
                                    }
                                }
                                i = n.data, n = i === "F!" || i === "F" ? n : null;
                            }
                            if (n) {
                                ke = tl(n.nextSibling), a = n.data === "F!";
                                break e;
                            }
                        }
                        Il(a);
                    }
                    a = !1;
                }
                a && (t = l[0]);
            }
        }
        return l = Ct(), l.memoizedState = l.baseState = t, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ts,
            lastRenderedState: t
        }, l.queue = a, l = Vs.bind(null, ge, a), a.dispatch = l, a = Ef(!1), i = Of.bind(null, ge, !1, a.queue), a = Ct(), n = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, a.queue = n, l = rv.bind(null, ge, n, i, l), n.dispatch = l, a.memoizedState = e, [
            t,
            l,
            !1
        ];
    }
    function Ds(e) {
        var t = rt();
        return As(t, Ge, e);
    }
    function As(e, t, l) {
        if (t = Sf(e, t, Ts)[0], e = Ti(Hl)[0], (typeof t === "undefined" ? "undefined" : _type_of(t)) == "object" && t !== null && typeof t.then == "function") try {
            var a = ru(t);
        } catch (c) {
            throw c === mn ? mi : c;
        }
        else a = t;
        t = rt();
        var n = t.queue, i = n.dispatch;
        return l !== t.memoizedState && (ge.flags |= 2048, Sn(9, {
            destroy: void 0
        }, fv.bind(null, n, l), null)), [
            a,
            i,
            e
        ];
    }
    function fv(e, t) {
        e.action = t;
    }
    function Os(e) {
        var t = rt(), l = Ge;
        if (l !== null) return As(t, l, e);
        rt(), t = t.memoizedState, l = rt();
        var a = l.queue.dispatch;
        return l.memoizedState = e, [
            t,
            a,
            !1
        ];
    }
    function Sn(e, t, l, a) {
        return e = {
            tag: e,
            create: l,
            deps: a,
            inst: t,
            next: null
        }, t = ge.updateQueue, t === null && (t = Ri(), ge.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
    }
    function _s() {
        return rt().memoizedState;
    }
    function Mi(e, t, l, a) {
        var n = Ct();
        ge.flags |= e, n.memoizedState = Sn(1 | t, {
            destroy: void 0
        }, l, a === void 0 ? null : a);
    }
    function Di(e, t, l, a) {
        var n = rt();
        a = a === void 0 ? null : a;
        var i = n.memoizedState.inst;
        Ge !== null && a !== null && hf(a, Ge.memoizedState.deps) ? n.memoizedState = Sn(t, i, l, a) : (ge.flags |= e, n.memoizedState = Sn(1 | t, i, l, a));
    }
    function Cs(e, t) {
        Mi(8390656, 8, e, t);
    }
    function zf(e, t) {
        Di(2048, 8, e, t);
    }
    function cv(e) {
        ge.flags |= 4;
        var t = ge.updateQueue;
        if (t === null) t = Ri(), ge.updateQueue = t, t.events = [
            e
        ];
        else {
            var l = t.events;
            l === null ? t.events = [
                e
            ] : l.push(e);
        }
    }
    function Us(e) {
        var t = rt().memoizedState;
        return cv({
            ref: t,
            nextImpl: e
        }), function() {
            if ((je & 2) !== 0) throw Error(f(440));
            return t.impl.apply(void 0, arguments);
        };
    }
    function Ns(e, t) {
        return Di(4, 2, e, t);
    }
    function xs(e, t) {
        return Di(4, 4, e, t);
    }
    function Hs(e, t) {
        if (typeof t == "function") {
            e = e();
            var l = t(e);
            return function() {
                typeof l == "function" ? l() : t(null);
            };
        }
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function Ls(e, t, l) {
        l = l != null ? l.concat([
            e
        ]) : null, Di(4, 4, Hs.bind(null, t, e), l);
    }
    function Tf() {}
    function ws(e, t) {
        var l = rt();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        return t !== null && hf(t, a[1]) ? a[0] : (l.memoizedState = [
            e,
            t
        ], e);
    }
    function Bs(e, t) {
        var l = rt();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        if (t !== null && hf(t, a[1])) return a[0];
        if (a = e(), Ya) {
            gt(!0);
            try {
                e();
            } finally{
                gt(!1);
            }
        }
        return l.memoizedState = [
            a,
            t
        ], a;
    }
    function Mf(e, t, l) {
        return l === void 0 || (xl & 1073741824) !== 0 && (Oe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = jd(), ge.lanes |= e, fa |= e, l);
    }
    function js(e, t, l, a) {
        return jt(l, t) ? l : vn.current !== null ? (e = Mf(e, l, a), jt(e, t) || (ht = !0), e) : (xl & 42) === 0 || (xl & 1073741824) !== 0 && (Oe & 261930) === 0 ? (ht = !0, e.memoizedState = l) : (e = jd(), ge.lanes |= e, fa |= e, t);
    }
    function Ys(e, t, l, a, n) {
        var i = Q.p;
        Q.p = i !== 0 && 8 > i ? i : 8;
        var c = x.T, h = {};
        x.T = h, Of(e, !1, t, l);
        try {
            var p = n(), _ = x.S;
            if (_ !== null && _(h, p), p !== null && (typeof p === "undefined" ? "undefined" : _type_of(p)) == "object" && typeof p.then == "function") {
                var w = nv(p, a);
                fu(e, t, w, Vt(e));
            } else fu(e, t, a, Vt(e));
        } catch (q) {
            fu(e, t, {
                then: function then() {},
                status: "rejected",
                reason: q
            }, Vt());
        } finally{
            Q.p = i, c !== null && h.types !== null && (c.types = h.types), x.T = c;
        }
    }
    function ov() {}
    function Df(e, t, l, a) {
        if (e.tag !== 5) throw Error(f(476));
        var n = qs(e).queue;
        Ys(e, n, t, ee, l === null ? ov : function() {
            return Gs(e), l(a);
        });
    }
    function qs(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: ee,
            baseState: ee,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Hl,
                lastRenderedState: ee
            },
            next: null
        };
        var l = {};
        return t.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Hl,
                lastRenderedState: l
            },
            next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function Gs(e) {
        var t = qs(e);
        t.next === null && (t = e.alternate.memoizedState), fu(e, t.next.queue, {}, Vt());
    }
    function Af() {
        return Et(Mu);
    }
    function Xs() {
        return rt().memoizedState;
    }
    function Qs() {
        return rt().memoizedState;
    }
    function sv(e) {
        for(var t = e.return; t !== null;){
            switch(t.tag){
                case 24:
                case 3:
                    var l = Vt();
                    e = la(l);
                    var a = aa(t, e, l);
                    a !== null && (Bt(a, t, l), au(a, t, l)), t = {
                        cache: tf()
                    }, e.payload = t;
                    return;
            }
            t = t.return;
        }
    }
    function dv(e, t, l) {
        var a = Vt();
        l = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ai(e) ? Zs(t, l) : (l = Vr(e, t, l, a), l !== null && (Bt(l, e, a), Ks(l, t, a)));
    }
    function Vs(e, t, l) {
        var a = Vt();
        fu(e, t, l, a);
    }
    function fu(e, t, l, a) {
        var n = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ai(e)) Zs(t, n);
        else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
                var c = t.lastRenderedState, h = i(c, l);
                if (n.hasEagerState = !0, n.eagerState = h, jt(h, c)) return ri(e, t, n, 0), Je === null && ii(), !1;
            } catch (unused) {}
            if (l = Vr(e, t, n, a), l !== null) return Bt(l, e, a), Ks(l, t, a), !0;
        }
        return !1;
    }
    function Of(e, t, l, a) {
        if (a = {
            lane: 2,
            revertLane: ic(),
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ai(e)) {
            if (t) throw Error(f(479));
        } else t = Vr(e, l, a, 2), t !== null && Bt(t, e, 2);
    }
    function Ai(e) {
        var t = e.alternate;
        return e === ge || t !== null && t === ge;
    }
    function Zs(e, t) {
        gn = bi = !0;
        var l = e.pending;
        l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
    }
    function Ks(e, t, l) {
        if ((l & 4194048) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes, l |= a, t.lanes = l, $u(e, l);
        }
    }
    var cu = {
        readContext: Et,
        use: zi,
        useCallback: at,
        useContext: at,
        useEffect: at,
        useImperativeHandle: at,
        useLayoutEffect: at,
        useInsertionEffect: at,
        useMemo: at,
        useReducer: at,
        useRef: at,
        useState: at,
        useDebugValue: at,
        useDeferredValue: at,
        useTransition: at,
        useSyncExternalStore: at,
        useId: at,
        useHostTransitionStatus: at,
        useFormState: at,
        useActionState: at,
        useOptimistic: at,
        useMemoCache: at,
        useCacheRefresh: at
    };
    cu.useEffectEvent = at;
    var Js = {
        readContext: Et,
        use: zi,
        useCallback: function useCallback(e, t) {
            return Ct().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: Et,
        useEffect: Cs,
        useImperativeHandle: function useImperativeHandle(e, t, l) {
            l = l != null ? l.concat([
                e
            ]) : null, Mi(4194308, 4, Hs.bind(null, t, e), l);
        },
        useLayoutEffect: function useLayoutEffect(e, t) {
            return Mi(4194308, 4, e, t);
        },
        useInsertionEffect: function useInsertionEffect(e, t) {
            Mi(4, 2, e, t);
        },
        useMemo: function useMemo(e, t) {
            var l = Ct();
            t = t === void 0 ? null : t;
            var a = e();
            if (Ya) {
                gt(!0);
                try {
                    e();
                } finally{
                    gt(!1);
                }
            }
            return l.memoizedState = [
                a,
                t
            ], a;
        },
        useReducer: function useReducer(e, t, l) {
            var a = Ct();
            if (l !== void 0) {
                var n = l(t);
                if (Ya) {
                    gt(!0);
                    try {
                        l(t);
                    } finally{
                        gt(!1);
                    }
                }
            } else n = t;
            return a.memoizedState = a.baseState = n, e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: n
            }, a.queue = e, e = e.dispatch = dv.bind(null, ge, e), [
                a.memoizedState,
                e
            ];
        },
        useRef: function useRef(e) {
            var t = Ct();
            return e = {
                current: e
            }, t.memoizedState = e;
        },
        useState: function useState(e) {
            e = Ef(e);
            var t = e.queue, l = Vs.bind(null, ge, t);
            return t.dispatch = l, [
                e.memoizedState,
                l
            ];
        },
        useDebugValue: Tf,
        useDeferredValue: function useDeferredValue(e, t) {
            var l = Ct();
            return Mf(l, e, t);
        },
        useTransition: function useTransition() {
            var e = Ef(!1);
            return e = Ys.bind(null, ge, e.queue, !0, !1), Ct().memoizedState = e, [
                !1,
                e
            ];
        },
        useSyncExternalStore: function useSyncExternalStore(e, t, l) {
            var a = ge, n = Ct();
            if (Ne) {
                if (l === void 0) throw Error(f(407));
                l = l();
            } else {
                if (l = t(), Je === null) throw Error(f(349));
                (Oe & 127) !== 0 || ms(a, t, l);
            }
            n.memoizedState = l;
            var i = {
                value: l,
                getSnapshot: t
            };
            return n.queue = i, Cs(vs.bind(null, a, i, e), [
                e
            ]), a.flags |= 2048, Sn(9, {
                destroy: void 0
            }, ys.bind(null, a, i, l, t), null), l;
        },
        useId: function useId() {
            var e = Ct(), t = Je.identifierPrefix;
            if (Ne) {
                var l = pl, a = gl;
                l = (a & ~(1 << 32 - Tt(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Ei++, 0 < l && (t += "H" + l.toString(32)), t += "_";
            } else l = uv++, t = "_" + t + "r_" + l.toString(32) + "_";
            return e.memoizedState = t;
        },
        useHostTransitionStatus: Af,
        useFormState: Ms,
        useActionState: Ms,
        useOptimistic: function useOptimistic(e) {
            var t = Ct();
            t.memoizedState = t.baseState = e;
            var l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = l, t = Of.bind(null, ge, !0, l), l.dispatch = t, [
                e,
                t
            ];
        },
        useMemoCache: pf,
        useCacheRefresh: function useCacheRefresh() {
            return Ct().memoizedState = sv.bind(null, ge);
        },
        useEffectEvent: function useEffectEvent(e) {
            var t = Ct(), l = {
                impl: e
            };
            return t.memoizedState = l, function() {
                if ((je & 2) !== 0) throw Error(f(440));
                return l.impl.apply(void 0, arguments);
            };
        }
    }, _f = {
        readContext: Et,
        use: zi,
        useCallback: ws,
        useContext: Et,
        useEffect: zf,
        useImperativeHandle: Ls,
        useInsertionEffect: Ns,
        useLayoutEffect: xs,
        useMemo: Bs,
        useReducer: Ti,
        useRef: _s,
        useState: function useState() {
            return Ti(Hl);
        },
        useDebugValue: Tf,
        useDeferredValue: function useDeferredValue(e, t) {
            var l = rt();
            return js(l, Ge.memoizedState, e, t);
        },
        useTransition: function useTransition() {
            var e = Ti(Hl)[0], t = rt().memoizedState;
            return [
                typeof e == "boolean" ? e : ru(e),
                t
            ];
        },
        useSyncExternalStore: hs,
        useId: Xs,
        useHostTransitionStatus: Af,
        useFormState: Ds,
        useActionState: Ds,
        useOptimistic: function useOptimistic(e, t) {
            var l = rt();
            return Ss(l, Ge, e, t);
        },
        useMemoCache: pf,
        useCacheRefresh: Qs
    };
    _f.useEffectEvent = Us;
    var Fs = {
        readContext: Et,
        use: zi,
        useCallback: ws,
        useContext: Et,
        useEffect: zf,
        useImperativeHandle: Ls,
        useInsertionEffect: Ns,
        useLayoutEffect: xs,
        useMemo: Bs,
        useReducer: bf,
        useRef: _s,
        useState: function useState() {
            return bf(Hl);
        },
        useDebugValue: Tf,
        useDeferredValue: function useDeferredValue(e, t) {
            var l = rt();
            return Ge === null ? Mf(l, e, t) : js(l, Ge.memoizedState, e, t);
        },
        useTransition: function useTransition() {
            var e = bf(Hl)[0], t = rt().memoizedState;
            return [
                typeof e == "boolean" ? e : ru(e),
                t
            ];
        },
        useSyncExternalStore: hs,
        useId: Xs,
        useHostTransitionStatus: Af,
        useFormState: Os,
        useActionState: Os,
        useOptimistic: function useOptimistic(e, t) {
            var l = rt();
            return Ge !== null ? Ss(l, Ge, e, t) : (l.baseState = e, [
                e,
                l.queue.dispatch
            ]);
        },
        useMemoCache: pf,
        useCacheRefresh: Qs
    };
    Fs.useEffectEvent = Us;
    function Cf(e, t, l, a) {
        t = e.memoizedState, l = l(a, t), l = l == null ? t : E({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
    }
    var Uf = {
        enqueueSetState: function enqueueSetState(e, t, l) {
            e = e._reactInternals;
            var a = Vt(), n = la(a);
            n.payload = t, l != null && (n.callback = l), t = aa(e, n, a), t !== null && (Bt(t, e, a), au(t, e, a));
        },
        enqueueReplaceState: function enqueueReplaceState(e, t, l) {
            e = e._reactInternals;
            var a = Vt(), n = la(a);
            n.tag = 1, n.payload = t, l != null && (n.callback = l), t = aa(e, n, a), t !== null && (Bt(t, e, a), au(t, e, a));
        },
        enqueueForceUpdate: function enqueueForceUpdate(e, t) {
            e = e._reactInternals;
            var l = Vt(), a = la(l);
            a.tag = 2, t != null && (a.callback = t), t = aa(e, a, l), t !== null && (Bt(t, e, l), au(t, e, l));
        }
    };
    function $s(e, t, l, a, n, i, c) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, c) : t.prototype && t.prototype.isPureReactComponent ? !$n(l, a) || !$n(n, i) : !0;
    }
    function Ws(e, t, l, a) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Uf.enqueueReplaceState(t, t.state, null);
    }
    function qa(e, t) {
        var l = t;
        if ("ref" in t) {
            l = {};
            for(var a in t)a !== "ref" && (l[a] = t[a]);
        }
        if (e = e.defaultProps) {
            l === t && (l = E({}, l));
            for(var n in e)l[n] === void 0 && (l[n] = e[n]);
        }
        return l;
    }
    function ks(e) {
        ui(e);
    }
    function Ps(e) {
        console.error(e);
    }
    function Is(e) {
        ui(e);
    }
    function Oi(e, t) {
        try {
            var l = e.onUncaughtError;
            l(t.value, {
                componentStack: t.stack
            });
        } catch (a) {
            setTimeout(function() {
                throw a;
            });
        }
    }
    function ed(e, t, l) {
        try {
            var a = e.onCaughtError;
            a(l.value, {
                componentStack: l.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            });
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    function Nf(e, t, l) {
        return l = la(l), l.tag = 3, l.payload = {
            element: null
        }, l.callback = function() {
            Oi(e, t);
        }, l;
    }
    function td(e) {
        return e = la(e), e.tag = 3, e;
    }
    function ld(e, t, l, a) {
        var n = l.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var i = a.value;
            e.payload = function() {
                return n(i);
            }, e.callback = function() {
                ed(t, l, a);
            };
        }
        var c = l.stateNode;
        c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
            ed(t, l, a), typeof n != "function" && (ca === null ? ca = new Set([
                this
            ]) : ca.add(this));
            var h = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: h !== null ? h : ""
            });
        });
    }
    function hv(e, t, l, a, n) {
        if (l.flags |= 32768, a !== null && (typeof a === "undefined" ? "undefined" : _type_of(a)) == "object" && typeof a.then == "function") {
            if (t = l.alternate, t !== null && sn(t, l, n, !0), l = qt.current, l !== null) {
                switch(l.tag){
                    case 31:
                    case 13:
                        return el === null ? qi() : l.alternate === null && nt === 0 && (nt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === yi ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([
                            a
                        ]) : t.add(a), ac(e, a, n)), !1;
                    case 22:
                        return l.flags |= 65536, a === yi ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([
                                a
                            ])
                        }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([
                            a
                        ]) : l.add(a)), ac(e, a, n)), !1;
                }
                throw Error(f(435, l.tag));
            }
            return ac(e, a, n), qi(), !1;
        }
        if (Ne) return t = qt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Wr && (e = Error(f(422), {
            cause: a
        }), Pn(Wt(e, l)))) : (a !== Wr && (t = Error(f(423), {
            cause: a
        }), Pn(Wt(t, l))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Wt(a, l), n = Nf(e.stateNode, a, n), ff(e, n), nt !== 4 && (nt = 2)), !1;
        var i = Error(f(520), {
            cause: a
        });
        if (i = Wt(i, l), gu === null ? gu = [
            i
        ] : gu.push(i), nt !== 4 && (nt = 2), t === null) return !0;
        a = Wt(a, l), l = t;
        do {
            switch(l.tag){
                case 3:
                    return l.flags |= 65536, e = n & -n, l.lanes |= e, e = Nf(l.stateNode, a, e), ff(l, e), !1;
                case 1:
                    if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (ca === null || !ca.has(i)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = td(n), ld(n, e, l, a), ff(l, n), !1;
            }
            l = l.return;
        }while (l !== null);
        return !1;
    }
    var xf = Error(f(461)), ht = !1;
    function Rt(e, t, l, a) {
        t.child = e === null ? is(t, null, l, a) : ja(t, e.child, l, a);
    }
    function ad(e, t, l, a, n) {
        l = l.render;
        var i = t.ref;
        if ("ref" in a) {
            var c = {};
            for(var h in a)h !== "ref" && (c[h] = a[h]);
        } else c = a;
        return Ha(t), a = mf(e, t, l, c, i, n), h = yf(), e !== null && !ht ? (vf(e, t, n), Ll(e, t, n)) : (Ne && h && Fr(t), t.flags |= 1, Rt(e, t, a, n), t.child);
    }
    function nd(e, t, l, a, n) {
        if (e === null) {
            var i = l.type;
            return typeof i == "function" && !Zr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, ud(e, t, i, a, n)) : (e = ci(l.type, null, a, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (i = e.child, !Gf(e, n)) {
            var c = i.memoizedProps;
            if (l = l.compare, l = l !== null ? l : $n, l(c, a) && e.ref === t.ref) return Ll(e, t, n);
        }
        return t.flags |= 1, e = _l(i, a), e.ref = t.ref, e.return = t, t.child = e;
    }
    function ud(e, t, l, a, n) {
        if (e !== null) {
            var i = e.memoizedProps;
            if ($n(i, a) && e.ref === t.ref) if (ht = !1, t.pendingProps = a = i, Gf(e, n)) (e.flags & 131072) !== 0 && (ht = !0);
            else return t.lanes = e.lanes, Ll(e, t, n);
        }
        return Hf(e, t, l, a, n);
    }
    function id(e, t, l, a) {
        var n = a.children, i = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }), a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (i = i !== null ? i.baseLanes | l : l, e !== null) {
                    for(a = t.child = e.child, n = 0; a !== null;)n = n | a.lanes | a.childLanes, a = a.sibling;
                    a = n & ~i;
                } else a = 0, t.child = null;
                return rd(e, t, i, l, a);
            }
            if ((l & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, e !== null && hi(t, i !== null ? i.cachePool : null), i !== null ? cs(t, i) : of(), os(t);
            else return a = t.lanes = 536870912, rd(e, t, i !== null ? i.baseLanes | l : l, l, a);
        } else i !== null ? (hi(t, i.cachePool), cs(t, i), ua(), t.memoizedState = null) : (e !== null && hi(t, null), of(), ua());
        return Rt(e, t, n, l), t.child;
    }
    function ou(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }), t.sibling;
    }
    function rd(e, t, l, a, n) {
        var i = af();
        return i = i === null ? null : {
            parent: st._currentValue,
            pool: i
        }, t.memoizedState = {
            baseLanes: l,
            cachePool: i
        }, e !== null && hi(t, null), of(), os(t), e !== null && sn(e, t, a, !0), t.childLanes = n, null;
    }
    function _i(e, t) {
        return t = Ui({
            mode: t.mode,
            children: t.children
        }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function fd(e, t, l) {
        return ja(t, e.child, null, l), e = _i(t, t.pendingProps), e.flags |= 2, Gt(t), t.memoizedState = null, e;
    }
    function mv(e, t, l) {
        var a = t.pendingProps, n = (t.flags & 128) !== 0;
        if (t.flags &= -129, e === null) {
            if (Ne) {
                if (a.mode === "hidden") return e = _i(t, a), t.lanes = 536870912, ou(null, e);
                if (df(t), (e = ke) ? (e = bh(e, It), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: kl !== null ? {
                        id: gl,
                        overflow: pl
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                }, l = Zo(e), l.return = t, t.child = l, bt = t, ke = null)) : e = null, e === null) throw Il(t);
                return t.lanes = 536870912, null;
            }
            return _i(t, a);
        }
        var i = e.memoizedState;
        if (i !== null) {
            var c = i.dehydrated;
            if (df(t), n) if (t.flags & 256) t.flags &= -257, t = fd(e, t, l);
            else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
            else throw Error(f(558));
            else if (ht || sn(e, t, l, !1), n = (l & e.childLanes) !== 0, ht || n) {
                if (a = Je, a !== null && (c = S(a, l), c !== 0 && c !== i.retryLane)) throw i.retryLane = c, Ca(e, c), Bt(a, e, c), xf;
                qi(), t = fd(e, t, l);
            } else e = i.treeContext, ke = tl(c.nextSibling), bt = t, Ne = !0, Pl = null, It = !1, e !== null && Fo(t, e), t = _i(t, a), t.flags |= 4096;
            return t;
        }
        return e = _l(e.child, {
            mode: a.mode,
            children: a.children
        }), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Ci(e, t) {
        var l = t.ref;
        if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof l != "function" && (typeof l === "undefined" ? "undefined" : _type_of(l)) != "object") throw Error(f(284));
            (e === null || e.ref !== l) && (t.flags |= 4194816);
        }
    }
    function Hf(e, t, l, a, n) {
        return Ha(t), l = mf(e, t, l, a, void 0, n), a = yf(), e !== null && !ht ? (vf(e, t, n), Ll(e, t, n)) : (Ne && a && Fr(t), t.flags |= 1, Rt(e, t, l, n), t.child);
    }
    function cd(e, t, l, a, n, i) {
        return Ha(t), t.updateQueue = null, l = ds(t, a, l, n), ss(e), a = yf(), e !== null && !ht ? (vf(e, t, i), Ll(e, t, i)) : (Ne && a && Fr(t), t.flags |= 1, Rt(e, t, l, i), t.child);
    }
    function od(e, t, l, a, n) {
        if (Ha(t), t.stateNode === null) {
            var i = rn, c = l.contextType;
            (typeof c === "undefined" ? "undefined" : _type_of(c)) == "object" && c !== null && (i = Et(c)), i = new l(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Uf, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, uf(t), c = l.contextType, i.context = (typeof c === "undefined" ? "undefined" : _type_of(c)) == "object" && c !== null ? Et(c) : rn, i.state = t.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (Cf(t, l, c, a), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && Uf.enqueueReplaceState(i, i.state, null), uu(t, a, i, n), nu(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
        } else if (e === null) {
            i = t.stateNode;
            var h = t.memoizedProps, p = qa(l, h);
            i.props = p;
            var _ = i.context, w = l.contextType;
            c = rn, (typeof w === "undefined" ? "undefined" : _type_of(w)) == "object" && w !== null && (c = Et(w));
            var q = l.getDerivedStateFromProps;
            w = typeof q == "function" || typeof i.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (h || _ !== c) && Ws(t, i, a, c), ta = !1;
            var U = t.memoizedState;
            i.state = U, uu(t, a, i, n), nu(), _ = t.memoizedState, h || U !== _ || ta ? (typeof q == "function" && (Cf(t, l, q, a), _ = t.memoizedState), (p = ta || $s(t, l, p, a, U, _, c)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), i.props = a, i.state = _, i.context = c, a = p) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
        } else {
            i = t.stateNode, rf(e, t), c = t.memoizedProps, w = qa(l, c), i.props = w, q = t.pendingProps, U = i.context, _ = l.contextType, p = rn, (typeof _ === "undefined" ? "undefined" : _type_of(_)) == "object" && _ !== null && (p = Et(_)), h = l.getDerivedStateFromProps, (_ = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== q || U !== p) && Ws(t, i, a, p), ta = !1, U = t.memoizedState, i.state = U, uu(t, a, i, n), nu();
            var H = t.memoizedState;
            c !== q || U !== H || ta || e !== null && e.dependencies !== null && si(e.dependencies) ? (typeof h == "function" && (Cf(t, l, h, a), H = t.memoizedState), (w = ta || $s(t, l, w, a, U, H, p) || e !== null && e.dependencies !== null && si(e.dependencies)) ? (_ || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, H, p), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, H, p)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = H), i.props = a, i.state = H, i.context = p, a = w) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), a = !1);
        }
        return i = a, Ci(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = ja(t, e.child, null, n), t.child = ja(t, null, l, n)) : Rt(e, t, l, n), t.memoizedState = i.state, e = t.child) : e = Ll(e, t, n), e;
    }
    function sd(e, t, l, a) {
        return Na(), t.flags |= 256, Rt(e, t, l, a), t.child;
    }
    var Lf = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function wf(e) {
        return {
            baseLanes: e,
            cachePool: es()
        };
    }
    function Bf(e, t, l) {
        return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Qt), e;
    }
    function dd(e, t, l) {
        var a = t.pendingProps, n = !1, i = (t.flags & 128) !== 0, c;
        if ((c = i) || (c = e !== null && e.memoizedState === null ? !1 : (it.current & 2) !== 0), c && (n = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (Ne) {
                if (n ? na(t) : ua(), (e = ke) ? (e = bh(e, It), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: kl !== null ? {
                        id: gl,
                        overflow: pl
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                }, l = Zo(e), l.return = t, t.child = l, bt = t, ke = null)) : e = null, e === null) throw Il(t);
                return Sc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
            }
            var h = a.children;
            return a = a.fallback, n ? (ua(), n = t.mode, h = Ui({
                mode: "hidden",
                children: h
            }, n), a = Ua(a, n, l, null), h.return = t, a.return = t, h.sibling = a, t.child = h, a = t.child, a.memoizedState = wf(l), a.childLanes = Bf(e, c, l), t.memoizedState = Lf, ou(null, a)) : (na(t), jf(t, h));
        }
        var p = e.memoizedState;
        if (p !== null && (h = p.dehydrated, h !== null)) {
            if (i) t.flags & 256 ? (na(t), t.flags &= -257, t = Yf(e, t, l)) : t.memoizedState !== null ? (ua(), t.child = e.child, t.flags |= 128, t = null) : (ua(), h = a.fallback, n = t.mode, a = Ui({
                mode: "visible",
                children: a.children
            }, n), h = Ua(h, n, l, null), h.flags |= 2, a.return = t, h.return = t, a.sibling = h, t.child = a, ja(t, e.child, null, l), a = t.child, a.memoizedState = wf(l), a.childLanes = Bf(e, c, l), t.memoizedState = Lf, t = ou(null, a));
            else if (na(t), Sc(h)) {
                if (c = h.nextSibling && h.nextSibling.dataset, c) var _ = c.dgst;
                c = _, a = Error(f(419)), a.stack = "", a.digest = c, Pn({
                    value: a,
                    source: null,
                    stack: null
                }), t = Yf(e, t, l);
            } else if (ht || sn(e, t, l, !1), c = (l & e.childLanes) !== 0, ht || c) {
                if (c = Je, c !== null && (a = S(c, l), a !== 0 && a !== p.retryLane)) throw p.retryLane = a, Ca(e, a), Bt(c, e, a), xf;
                pc(h) || qi(), t = Yf(e, t, l);
            } else pc(h) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, ke = tl(h.nextSibling), bt = t, Ne = !0, Pl = null, It = !1, e !== null && Fo(t, e), t = jf(t, a.children), t.flags |= 4096);
            return t;
        }
        return n ? (ua(), h = a.fallback, n = t.mode, p = e.child, _ = p.sibling, a = _l(p, {
            mode: "hidden",
            children: a.children
        }), a.subtreeFlags = p.subtreeFlags & 65011712, _ !== null ? h = _l(_, h) : (h = Ua(h, n, l, null), h.flags |= 2), h.return = t, a.return = t, a.sibling = h, t.child = a, ou(null, a), a = t.child, h = e.child.memoizedState, h === null ? h = wf(l) : (n = h.cachePool, n !== null ? (p = st._currentValue, n = n.parent !== p ? {
            parent: p,
            pool: p
        } : n) : n = es(), h = {
            baseLanes: h.baseLanes | l,
            cachePool: n
        }), a.memoizedState = h, a.childLanes = Bf(e, c, l), t.memoizedState = Lf, ou(e.child, a)) : (na(t), l = e.child, e = l.sibling, l = _l(l, {
            mode: "visible",
            children: a.children
        }), l.return = t, l.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [
            e
        ], t.flags |= 16) : c.push(e)), t.child = l, t.memoizedState = null, l);
    }
    function jf(e, t) {
        return t = Ui({
            mode: "visible",
            children: t
        }, e.mode), t.return = e, e.child = t;
    }
    function Ui(e, t) {
        return e = Yt(22, e, null, t), e.lanes = 0, e;
    }
    function Yf(e, t, l) {
        return ja(t, e.child, null, l), e = jf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function hd(e, t, l) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t), Ir(e.return, t, l);
    }
    function qf(e, t, l, a, n, i) {
        var c = e.memoizedState;
        c === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: l,
            tailMode: n,
            treeForkCount: i
        } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = l, c.tailMode = n, c.treeForkCount = i);
    }
    function md(e, t, l) {
        var a = t.pendingProps, n = a.revealOrder, i = a.tail;
        a = a.children;
        var c = it.current, h = (c & 2) !== 0;
        if (h ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, V(it, c), Rt(e, t, a, l), a = Ne ? kn : 0, !h && e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
            if (e.tag === 13) e.memoizedState !== null && hd(e, l, t);
            else if (e.tag === 19) hd(e, l, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === t) break e;
            for(; e.sibling === null;){
                if (e.return === null || e.return === t) break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        }
        switch(n){
            case "forwards":
                for(l = t.child, n = null; l !== null;)e = l.alternate, e !== null && Si(e) === null && (n = l), l = l.sibling;
                l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), qf(t, !1, n, l, i, a);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for(l = null, n = t.child, t.child = null; n !== null;){
                    if (e = n.alternate, e !== null && Si(e) === null) {
                        t.child = n;
                        break;
                    }
                    e = n.sibling, n.sibling = l, l = n, n = e;
                }
                qf(t, !0, l, null, i, a);
                break;
            case "together":
                qf(t, !1, null, null, void 0, a);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function Ll(e, t, l) {
        if (e !== null && (t.dependencies = e.dependencies), fa |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
            if (sn(e, t, l, !1), (l & t.childLanes) === 0) return null;
        } else return null;
        if (e !== null && t.child !== e.child) throw Error(f(153));
        if (t.child !== null) {
            for(e = t.child, l = _l(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;)e = e.sibling, l = l.sibling = _l(e, e.pendingProps), l.return = t;
            l.sibling = null;
        }
        return t.child;
    }
    function Gf(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && si(e)));
    }
    function yv(e, t, l) {
        switch(t.tag){
            case 3:
                ft(t, t.stateNode.containerInfo), ea(t, st, e.memoizedState.cache), Na();
                break;
            case 27:
            case 5:
                Ra(t);
                break;
            case 4:
                ft(t, t.stateNode.containerInfo);
                break;
            case 10:
                ea(t, t.type, t.memoizedProps.value);
                break;
            case 31:
                if (t.memoizedState !== null) return t.flags |= 128, df(t), null;
                break;
            case 13:
                var a = t.memoizedState;
                if (a !== null) return a.dehydrated !== null ? (na(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? dd(e, t, l) : (na(t), e = Ll(e, t, l), e !== null ? e.sibling : null);
                na(t);
                break;
            case 19:
                var n = (e.flags & 128) !== 0;
                if (a = (l & t.childLanes) !== 0, a || (sn(e, t, l, !1), a = (l & t.childLanes) !== 0), n) {
                    if (a) return md(e, t, l);
                    t.flags |= 128;
                }
                if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), V(it, it.current), a) break;
                return null;
            case 22:
                return t.lanes = 0, id(e, t, l, t.pendingProps);
            case 24:
                ea(t, st, e.memoizedState.cache);
        }
        return Ll(e, t, l);
    }
    function yd(e, t, l) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps) ht = !0;
        else {
            if (!Gf(e, l) && (t.flags & 128) === 0) return ht = !1, yv(e, t, l);
            ht = (e.flags & 131072) !== 0;
        }
        else ht = !1, Ne && (t.flags & 1048576) !== 0 && Jo(t, kn, t.index);
        switch(t.lanes = 0, t.tag){
            case 16:
                e: {
                    var a = t.pendingProps;
                    if (e = wa(t.elementType), t.type = e, typeof e == "function") Zr(e) ? (a = qa(e, a), t.tag = 1, t = od(null, t, e, a, l)) : (t.tag = 0, t = Hf(null, t, e, a, l));
                    else {
                        if (e != null) {
                            var n = e.$$typeof;
                            if (n === xe) {
                                t.tag = 11, t = ad(null, t, e, a, l);
                                break e;
                            } else if (n === re) {
                                t.tag = 14, t = nd(null, t, e, a, l);
                                break e;
                            }
                        }
                        throw t = Ue(e) || e, Error(f(306, t, ""));
                    }
                }
                return t;
            case 0:
                return Hf(e, t, t.type, t.pendingProps, l);
            case 1:
                return a = t.type, n = qa(a, t.pendingProps), od(e, t, a, n, l);
            case 3:
                e: {
                    if (ft(t, t.stateNode.containerInfo), e === null) throw Error(f(387));
                    a = t.pendingProps;
                    var i = t.memoizedState;
                    n = i.element, rf(e, t), uu(t, a, null, l);
                    var c = t.memoizedState;
                    if (a = c.cache, ea(t, st, a), a !== i.cache && ef(t, [
                        st
                    ], l, !0), nu(), a = c.element, i.isDehydrated) if (i = {
                        element: a,
                        isDehydrated: !1,
                        cache: c.cache
                    }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        t = sd(e, t, a, l);
                        break e;
                    } else if (a !== n) {
                        n = Wt(Error(f(424)), t), Pn(n), t = sd(e, t, a, l);
                        break e;
                    } else for(e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ke = tl(e.firstChild), bt = t, Ne = !0, Pl = null, It = !0, l = is(t, null, a, l), t.child = l; l;)l.flags = l.flags & -3 | 4096, l = l.sibling;
                    else {
                        if (Na(), a === n) {
                            t = Ll(e, t, l);
                            break e;
                        }
                        Rt(e, t, a, l);
                    }
                    t = t.child;
                }
                return t;
            case 26:
                return Ci(e, t), e === null ? (l = Dh(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : Ne || (l = t.type, e = t.pendingProps, a = Ji(he.current).createElement(l), a[F] = t, a[$] = e, zt(a, l, e), Fe(a), t.stateNode = a) : t.memoizedState = Dh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return Ra(t), e === null && Ne && (a = t.stateNode = zh(t.type, t.pendingProps, he.current), bt = t, It = !0, n = ke, ha(t.type) ? (bc = n, ke = tl(a.firstChild)) : ke = n), Rt(e, t, t.pendingProps.children, l), Ci(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
                return e === null && Ne && ((n = a = ke) && (a = Zv(a, t.type, t.pendingProps, It), a !== null ? (t.stateNode = a, bt = t, ke = tl(a.firstChild), It = !1, n = !0) : n = !1), n || Il(t)), Ra(t), n = t.type, i = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = i.children, yc(n, i) ? a = null : c !== null && yc(n, c) && (t.flags |= 32), t.memoizedState !== null && (n = mf(e, t, iv, null, null, l), Mu._currentValue = n), Ci(e, t), Rt(e, t, a, l), t.child;
            case 6:
                return e === null && Ne && ((e = l = ke) && (l = Kv(l, t.pendingProps, It), l !== null ? (t.stateNode = l, bt = t, ke = null, e = !0) : e = !1), e || Il(t)), null;
            case 13:
                return dd(e, t, l);
            case 4:
                return ft(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = ja(t, null, a, l) : Rt(e, t, a, l), t.child;
            case 11:
                return ad(e, t, t.type, t.pendingProps, l);
            case 7:
                return Rt(e, t, t.pendingProps, l), t.child;
            case 8:
                return Rt(e, t, t.pendingProps.children, l), t.child;
            case 12:
                return Rt(e, t, t.pendingProps.children, l), t.child;
            case 10:
                return a = t.pendingProps, ea(t, t.type, a.value), Rt(e, t, a.children, l), t.child;
            case 9:
                return n = t.type._context, a = t.pendingProps.children, Ha(t), n = Et(n), a = a(n), t.flags |= 1, Rt(e, t, a, l), t.child;
            case 14:
                return nd(e, t, t.type, t.pendingProps, l);
            case 15:
                return ud(e, t, t.type, t.pendingProps, l);
            case 19:
                return md(e, t, l);
            case 31:
                return mv(e, t, l);
            case 22:
                return id(e, t, l, t.pendingProps);
            case 24:
                return Ha(t), a = Et(st), e === null ? (n = af(), n === null && (n = Je, i = tf(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= l), n = i), t.memoizedState = {
                    parent: a,
                    cache: n
                }, uf(t), ea(t, st, n)) : ((e.lanes & l) !== 0 && (rf(e, t), uu(t, null, null, l), nu()), n = e.memoizedState, i = t.memoizedState, n.parent !== a ? (n = {
                    parent: a,
                    cache: a
                }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ea(t, st, a)) : (a = i.cache, ea(t, st, a), a !== n.cache && ef(t, [
                    st
                ], l, !0))), Rt(e, t, t.pendingProps.children, l), t.child;
            case 29:
                throw t.pendingProps;
        }
        throw Error(f(156, t.tag));
    }
    function wl(e) {
        e.flags |= 4;
    }
    function Xf(e, t, l, a, n) {
        if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
            if (e.flags |= 16777216, (n & 335544128) === n) if (e.stateNode.complete) e.flags |= 8192;
            else if (Xd()) e.flags |= 8192;
            else throw Ba = yi, nf;
        } else e.flags &= -16777217;
    }
    function vd(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (e.flags |= 16777216, !Uh(t)) if (Xd()) e.flags |= 8192;
        else throw Ba = yi, nf;
    }
    function Ni(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Gn() : 536870912, e.lanes |= t, zn |= t);
    }
    function su(e, t) {
        if (!Ne) switch(e.tailMode){
            case "hidden":
                t = e.tail;
                for(var l = null; t !== null;)t.alternate !== null && (l = t), t = t.sibling;
                l === null ? e.tail = null : l.sibling = null;
                break;
            case "collapsed":
                l = e.tail;
                for(var a = null; l !== null;)l.alternate !== null && (a = l), l = l.sibling;
                a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
        }
    }
    function Pe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
        if (t) for(var n = e.child; n !== null;)l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
        else for(n = e.child; n !== null;)l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
        return e.subtreeFlags |= a, e.childLanes = l, t;
    }
    function vv(e, t, l) {
        var a = t.pendingProps;
        switch($r(t), t.tag){
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Pe(t), null;
            case 1:
                return Pe(t), null;
            case 3:
                return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Nl(st), Ze(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (on(t) ? wl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, kr())), Pe(t), null;
            case 26:
                var n = t.type, i = t.memoizedState;
                return e === null ? (wl(t), i !== null ? (Pe(t), vd(t, i)) : (Pe(t), Xf(t, n, null, a, l))) : i ? i !== e.memoizedState ? (wl(t), Pe(t), vd(t, i)) : (Pe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && wl(t), Pe(t), Xf(t, n, e, a, l)), null;
            case 27:
                if (Za(t), l = he.current, n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && wl(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(f(166));
                        return Pe(t), null;
                    }
                    e = J.current, on(t) ? $o(t) : (e = zh(n, a, l), t.stateNode = e, wl(t));
                }
                return Pe(t), null;
            case 5:
                if (Za(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && wl(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(f(166));
                        return Pe(t), null;
                    }
                    if (i = J.current, on(t)) $o(t);
                    else {
                        var c = Ji(he.current);
                        switch(i){
                            case 1:
                                i = c.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                i = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default:
                                switch(n){
                                    case "svg":
                                        i = c.createElementNS("http://www.w3.org/2000/svg", n);
                                        break;
                                    case "math":
                                        i = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                        break;
                                    case "script":
                                        i = c.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(i.firstChild);
                                        break;
                                    case "select":
                                        i = typeof a.is == "string" ? c.createElement("select", {
                                            is: a.is
                                        }) : c.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                                        break;
                                    default:
                                        i = typeof a.is == "string" ? c.createElement(n, {
                                            is: a.is
                                        }) : c.createElement(n);
                                }
                        }
                        i[F] = t, i[$] = a;
                        e: for(c = t.child; c !== null;){
                            if (c.tag === 5 || c.tag === 6) i.appendChild(c.stateNode);
                            else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                                c.child.return = c, c = c.child;
                                continue;
                            }
                            if (c === t) break e;
                            for(; c.sibling === null;){
                                if (c.return === null || c.return === t) break e;
                                c = c.return;
                            }
                            c.sibling.return = c.return, c = c.sibling;
                        }
                        t.stateNode = i;
                        e: switch(zt(i, n, a), n){
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a = !!a.autoFocus;
                                break e;
                            case "img":
                                a = !0;
                                break e;
                            default:
                                a = !1;
                        }
                        a && wl(t);
                    }
                }
                return Pe(t), Xf(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null;
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== a && wl(t);
                else {
                    if (typeof a != "string" && t.stateNode === null) throw Error(f(166));
                    if (e = he.current, on(t)) {
                        if (e = t.stateNode, l = t.memoizedProps, a = null, n = bt, n !== null) switch(n.tag){
                            case 27:
                            case 5:
                                a = n.memoizedProps;
                        }
                        e[F] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || dh(e.nodeValue, l)), e || Il(t, !0);
                    } else e = Ji(e).createTextNode(a), e[F] = t, t.stateNode = e;
                }
                return Pe(t), null;
            case 31:
                if (l = t.memoizedState, e === null || e.memoizedState !== null) {
                    if (a = on(t), l !== null) {
                        if (e === null) {
                            if (!a) throw Error(f(318));
                            if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(557));
                            e[F] = t;
                        } else Na(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        Pe(t), e = !1;
                    } else l = kr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
                    if (!e) return t.flags & 256 ? (Gt(t), t) : (Gt(t), null);
                    if ((t.flags & 128) !== 0) throw Error(f(558));
                }
                return Pe(t), null;
            case 13:
                if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (n = on(t), a !== null && a.dehydrated !== null) {
                        if (e === null) {
                            if (!n) throw Error(f(318));
                            if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
                            n[F] = t;
                        } else Na(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        Pe(t), n = !1;
                    } else n = kr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
                    if (!n) return t.flags & 256 ? (Gt(t), t) : (Gt(t), null);
                }
                return Gt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Ni(t, t.updateQueue), Pe(t), null);
            case 4:
                return Ze(), e === null && oc(t.stateNode.containerInfo), Pe(t), null;
            case 10:
                return Nl(t.type), Pe(t), null;
            case 19:
                if (B(it), a = t.memoizedState, a === null) return Pe(t), null;
                if (n = (t.flags & 128) !== 0, i = a.rendering, i === null) if (n) su(a, !1);
                else {
                    if (nt !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                        if (i = Si(e), i !== null) {
                            for(t.flags |= 128, su(a, !1), e = i.updateQueue, t.updateQueue = e, Ni(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;)Vo(l, e), l = l.sibling;
                            return V(it, it.current & 1 | 2), Ne && Cl(t, a.treeForkCount), t.child;
                        }
                        e = e.sibling;
                    }
                    a.tail !== null && Ot() > Bi && (t.flags |= 128, n = !0, su(a, !1), t.lanes = 4194304);
                }
                else {
                    if (!n) if (e = Si(i), e !== null) {
                        if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Ni(t, e), su(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !Ne) return Pe(t), null;
                    } else 2 * Ot() - a.renderingStartTime > Bi && l !== 536870912 && (t.flags |= 128, n = !0, su(a, !1), t.lanes = 4194304);
                    a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
                }
                return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Ot(), e.sibling = null, l = it.current, V(it, n ? l & 1 | 2 : l & 1), Ne && Cl(t, a.treeForkCount), e) : (Pe(t), null);
            case 22:
            case 23:
                return Gt(t), sf(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t), l = t.updateQueue, l !== null && Ni(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && B(La), null;
            case 24:
                return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Nl(st), Pe(t), null;
            case 25:
                return null;
            case 30:
                return null;
        }
        throw Error(f(156, t.tag));
    }
    function gv(e, t) {
        switch($r(t), t.tag){
            case 1:
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return Nl(st), Ze(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return Za(t), null;
            case 31:
                if (t.memoizedState !== null) {
                    if (Gt(t), t.alternate === null) throw Error(f(340));
                    Na();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 13:
                if (Gt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(f(340));
                    Na();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return B(it), null;
            case 4:
                return Ze(), null;
            case 10:
                return Nl(t.type), null;
            case 22:
            case 23:
                return Gt(t), sf(), e !== null && B(La), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
                return Nl(st), null;
            case 25:
                return null;
            default:
                return null;
        }
    }
    function gd(e, t) {
        switch($r(t), t.tag){
            case 3:
                Nl(st), Ze();
                break;
            case 26:
            case 27:
            case 5:
                Za(t);
                break;
            case 4:
                Ze();
                break;
            case 31:
                t.memoizedState !== null && Gt(t);
                break;
            case 13:
                Gt(t);
                break;
            case 19:
                B(it);
                break;
            case 10:
                Nl(t.type);
                break;
            case 22:
            case 23:
                Gt(t), sf(), e !== null && B(La);
                break;
            case 24:
                Nl(st);
        }
    }
    function du(e, t) {
        try {
            var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                l = n;
                do {
                    if ((l.tag & e) === e) {
                        a = void 0;
                        var i = l.create, c = l.inst;
                        a = i(), c.destroy = a;
                    }
                    l = l.next;
                }while (l !== n);
            }
        } catch (h) {
            qe(t, t.return, h);
        }
    }
    function ia(e, t, l) {
        try {
            var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var i = n.next;
                a = i;
                do {
                    if ((a.tag & e) === e) {
                        var c = a.inst, h = c.destroy;
                        if (h !== void 0) {
                            c.destroy = void 0, n = t;
                            var p = l, _ = h;
                            try {
                                _();
                            } catch (w) {
                                qe(n, p, w);
                            }
                        }
                    }
                    a = a.next;
                }while (a !== i);
            }
        } catch (w) {
            qe(t, t.return, w);
        }
    }
    function pd(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var l = e.stateNode;
            try {
                fs(t, l);
            } catch (a) {
                qe(e, e.return, a);
            }
        }
    }
    function Sd(e, t, l) {
        l.props = qa(e.type, e.memoizedProps), l.state = e.memoizedState;
        try {
            l.componentWillUnmount();
        } catch (a) {
            qe(e, t, a);
        }
    }
    function hu(e, t) {
        try {
            var l = e.ref;
            if (l !== null) {
                switch(e.tag){
                    case 26:
                    case 27:
                    case 5:
                        var a = e.stateNode;
                        break;
                    case 30:
                        a = e.stateNode;
                        break;
                    default:
                        a = e.stateNode;
                }
                typeof l == "function" ? e.refCleanup = l(a) : l.current = a;
            }
        } catch (n) {
            qe(e, t, n);
        }
    }
    function Sl(e, t) {
        var l = e.ref, a = e.refCleanup;
        if (l !== null) if (typeof a == "function") try {
            a();
        } catch (n) {
            qe(e, t, n);
        } finally{
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
        else if (typeof l == "function") try {
            l(null);
        } catch (n) {
            qe(e, t, n);
        }
        else l.current = null;
    }
    function bd(e) {
        var t = e.type, l = e.memoizedProps, a = e.stateNode;
        try {
            e: switch(t){
                case "button":
                case "input":
                case "select":
                case "textarea":
                    l.autoFocus && a.focus();
                    break e;
                case "img":
                    l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
            }
        } catch (n) {
            qe(e, e.return, n);
        }
    }
    function Qf(e, t, l) {
        try {
            var a = e.stateNode;
            Yv(a, e.type, l, t), a[$] = t;
        } catch (n) {
            qe(e, e.return, n);
        }
    }
    function Ed(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ha(e.type) || e.tag === 4;
    }
    function Vf(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || Ed(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.tag === 27 && ha(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Zf(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Al));
        else if (a !== 4 && (a === 27 && ha(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for(Zf(e, t, l), e = e.sibling; e !== null;)Zf(e, t, l), e = e.sibling;
    }
    function xi(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
        else if (a !== 4 && (a === 27 && ha(e.type) && (l = e.stateNode), e = e.child, e !== null)) for(xi(e, t, l), e = e.sibling; e !== null;)xi(e, t, l), e = e.sibling;
    }
    function Rd(e) {
        var t = e.stateNode, l = e.memoizedProps;
        try {
            for(var a = e.type, n = t.attributes; n.length;)t.removeAttributeNode(n[0]);
            zt(t, a, l), t[F] = e, t[$] = l;
        } catch (i) {
            qe(e, e.return, i);
        }
    }
    var Bl = !1, mt = !1, Kf = !1, zd = typeof WeakSet == "function" ? WeakSet : Set, St = null;
    function pv(e, t) {
        if (e = e.containerInfo, hc = er, e = Lo(e), jr(e)) {
            if ("selectionStart" in e) var l = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                l = (l = e.ownerDocument) && l.defaultView || window;
                var a = l.getSelection && l.getSelection();
                if (a && a.rangeCount !== 0) {
                    l = a.anchorNode;
                    var n = a.anchorOffset, i = a.focusNode;
                    a = a.focusOffset;
                    try {
                        l.nodeType, i.nodeType;
                    } catch (unused) {
                        l = null;
                        break e;
                    }
                    var c = 0, h = -1, p = -1, _ = 0, w = 0, q = e, U = null;
                    t: for(;;){
                        for(var H; q !== l || n !== 0 && q.nodeType !== 3 || (h = c + n), q !== i || a !== 0 && q.nodeType !== 3 || (p = c + a), q.nodeType === 3 && (c += q.nodeValue.length), (H = q.firstChild) !== null;)U = q, q = H;
                        for(;;){
                            if (q === e) break t;
                            if (U === l && ++_ === n && (h = c), U === i && ++w === a && (p = c), (H = q.nextSibling) !== null) break;
                            q = U, U = q.parentNode;
                        }
                        q = H;
                    }
                    l = h === -1 || p === -1 ? null : {
                        start: h,
                        end: p
                    };
                } else l = null;
            }
            l = l || {
                start: 0,
                end: 0
            };
        } else l = null;
        for(mc = {
            focusedElem: e,
            selectionRange: l
        }, er = !1, St = t; St !== null;)if (t = St, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, St = e;
        else for(; St !== null;){
            switch(t = St, i = t.alternate, e = t.flags, t.tag){
                case 0:
                    if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for(l = 0; l < e.length; l++)n = e[l], n.ref.impl = n.nextImpl;
                    break;
                case 11:
                case 15:
                    break;
                case 1:
                    if ((e & 1024) !== 0 && i !== null) {
                        e = void 0, l = t, n = i.memoizedProps, i = i.memoizedState, a = l.stateNode;
                        try {
                            var P = qa(l.type, n);
                            e = a.getSnapshotBeforeUpdate(P, i), a.__reactInternalSnapshotBeforeUpdate = e;
                        } catch (se) {
                            qe(l, l.return, se);
                        }
                    }
                    break;
                case 3:
                    if ((e & 1024) !== 0) {
                        if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) gc(e);
                        else if (l === 1) switch(e.nodeName){
                            case "HEAD":
                            case "HTML":
                            case "BODY":
                                gc(e);
                                break;
                            default:
                                e.textContent = "";
                        }
                    }
                    break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    if ((e & 1024) !== 0) throw Error(f(163));
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, St = e;
                break;
            }
            St = t.return;
        }
    }
    function Td(e, t, l) {
        var a = l.flags;
        switch(l.tag){
            case 0:
            case 11:
            case 15:
                Yl(e, l), a & 4 && du(5, l);
                break;
            case 1:
                if (Yl(e, l), a & 4) if (e = l.stateNode, t === null) try {
                    e.componentDidMount();
                } catch (c) {
                    qe(l, l.return, c);
                }
                else {
                    var n = qa(l.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
                    } catch (c) {
                        qe(l, l.return, c);
                    }
                }
                a & 64 && pd(l), a & 512 && hu(l, l.return);
                break;
            case 3:
                if (Yl(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
                    if (t = null, l.child !== null) switch(l.child.tag){
                        case 27:
                        case 5:
                            t = l.child.stateNode;
                            break;
                        case 1:
                            t = l.child.stateNode;
                    }
                    try {
                        fs(e, t);
                    } catch (c) {
                        qe(l, l.return, c);
                    }
                }
                break;
            case 27:
                t === null && a & 4 && Rd(l);
            case 26:
            case 5:
                Yl(e, l), t === null && a & 4 && bd(l), a & 512 && hu(l, l.return);
                break;
            case 12:
                Yl(e, l);
                break;
            case 31:
                Yl(e, l), a & 4 && Ad(e, l);
                break;
            case 13:
                Yl(e, l), a & 4 && Od(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Av.bind(null, l), Jv(e, l))));
                break;
            case 22:
                if (a = l.memoizedState !== null || Bl, !a) {
                    t = t !== null && t.memoizedState !== null || mt, n = Bl;
                    var i = mt;
                    Bl = a, (mt = t) && !i ? ql(e, l, (l.subtreeFlags & 8772) !== 0) : Yl(e, l), Bl = n, mt = i;
                }
                break;
            case 30:
                break;
            default:
                Yl(e, l);
        }
    }
    function Md(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, Md(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ke(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    var Ie = null, xt = !1;
    function jl(e, t, l) {
        for(l = l.child; l !== null;)Dd(e, t, l), l = l.sibling;
    }
    function Dd(e, t, l) {
        if (_t && typeof _t.onCommitFiberUnmount == "function") try {
            _t.onCommitFiberUnmount(Ml, l);
        } catch (unused) {}
        switch(l.tag){
            case 26:
                mt || Sl(l, t), jl(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                break;
            case 27:
                mt || Sl(l, t);
                var a = Ie, n = xt;
                ha(l.type) && (Ie = l.stateNode, xt = !1), jl(e, t, l), Ru(l.stateNode), Ie = a, xt = n;
                break;
            case 5:
                mt || Sl(l, t);
            case 6:
                if (a = Ie, n = xt, Ie = null, jl(e, t, l), Ie = a, xt = n, Ie !== null) if (xt) try {
                    (Ie.nodeType === 9 ? Ie.body : Ie.nodeName === "HTML" ? Ie.ownerDocument.body : Ie).removeChild(l.stateNode);
                } catch (i) {
                    qe(l, t, i);
                }
                else try {
                    Ie.removeChild(l.stateNode);
                } catch (i) {
                    qe(l, t, i);
                }
                break;
            case 18:
                Ie !== null && (xt ? (e = Ie, ph(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Un(e)) : ph(Ie, l.stateNode));
                break;
            case 4:
                a = Ie, n = xt, Ie = l.stateNode.containerInfo, xt = !0, jl(e, t, l), Ie = a, xt = n;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                ia(2, l, t), mt || ia(4, l, t), jl(e, t, l);
                break;
            case 1:
                mt || (Sl(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Sd(l, t, a)), jl(e, t, l);
                break;
            case 21:
                jl(e, t, l);
                break;
            case 22:
                mt = (a = mt) || l.memoizedState !== null, jl(e, t, l), mt = a;
                break;
            default:
                jl(e, t, l);
        }
    }
    function Ad(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
            e = e.dehydrated;
            try {
                Un(e);
            } catch (l) {
                qe(t, t.return, l);
            }
        }
    }
    function Od(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
            Un(e);
        } catch (l) {
            qe(t, t.return, l);
        }
    }
    function Sv(e) {
        switch(e.tag){
            case 31:
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new zd), t;
            case 22:
                return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new zd), t;
            default:
                throw Error(f(435, e.tag));
        }
    }
    function Hi(e, t) {
        var l = Sv(e);
        t.forEach(function(a) {
            if (!l.has(a)) {
                l.add(a);
                var n = Ov.bind(null, e, a);
                a.then(n, n);
            }
        });
    }
    function Ht(e, t) {
        var l = t.deletions;
        if (l !== null) for(var a = 0; a < l.length; a++){
            var n = l[a], i = e, c = t, h = c;
            e: for(; h !== null;){
                switch(h.tag){
                    case 27:
                        if (ha(h.type)) {
                            Ie = h.stateNode, xt = !1;
                            break e;
                        }
                        break;
                    case 5:
                        Ie = h.stateNode, xt = !1;
                        break e;
                    case 3:
                    case 4:
                        Ie = h.stateNode.containerInfo, xt = !0;
                        break e;
                }
                h = h.return;
            }
            if (Ie === null) throw Error(f(160));
            Dd(i, c, n), Ie = null, xt = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
        }
        if (t.subtreeFlags & 13886) for(t = t.child; t !== null;)_d(t, e), t = t.sibling;
    }
    var ol = null;
    function _d(e, t) {
        var l = e.alternate, a = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                Ht(t, e), Lt(e), a & 4 && (ia(3, e, e.return), du(3, e), ia(5, e, e.return));
                break;
            case 1:
                Ht(t, e), Lt(e), a & 512 && (mt || l === null || Sl(l, l.return)), a & 64 && Bl && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
                break;
            case 26:
                var n = ol;
                if (Ht(t, e), Lt(e), a & 512 && (mt || l === null || Sl(l, l.return)), a & 4) {
                    var i = l !== null ? l.memoizedState : null;
                    if (a = e.memoizedState, l === null) if (a === null) if (e.stateNode === null) {
                        e: {
                            a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                            t: switch(a){
                                case "title":
                                    i = n.getElementsByTagName("title")[0], (!i || i[Te] || i[F] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(i, n.querySelector("head > title"))), zt(i, a, l), i[F] = e, Fe(i), a = i;
                                    break e;
                                case "link":
                                    var c = _h("link", "href", n).get(a + (l.href || ""));
                                    if (c) {
                                        for(var h = 0; h < c.length; h++)if (i = c[h], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                            c.splice(h, 1);
                                            break t;
                                        }
                                    }
                                    i = n.createElement(a), zt(i, a, l), n.head.appendChild(i);
                                    break;
                                case "meta":
                                    if (c = _h("meta", "content", n).get(a + (l.content || ""))) {
                                        for(h = 0; h < c.length; h++)if (i = c[h], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                            c.splice(h, 1);
                                            break t;
                                        }
                                    }
                                    i = n.createElement(a), zt(i, a, l), n.head.appendChild(i);
                                    break;
                                default:
                                    throw Error(f(468, a));
                            }
                            i[F] = e, Fe(i), a = i;
                        }
                        e.stateNode = a;
                    } else Ch(n, e.type, e.stateNode);
                    else e.stateNode = Oh(n, a, e.memoizedProps);
                    else i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, a === null ? Ch(n, e.type, e.stateNode) : Oh(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && Qf(e, e.memoizedProps, l.memoizedProps);
                }
                break;
            case 27:
                Ht(t, e), Lt(e), a & 512 && (mt || l === null || Sl(l, l.return)), l !== null && a & 4 && Qf(e, e.memoizedProps, l.memoizedProps);
                break;
            case 5:
                if (Ht(t, e), Lt(e), a & 512 && (mt || l === null || Sl(l, l.return)), e.flags & 32) {
                    n = e.stateNode;
                    try {
                        Ia(n, "");
                    } catch (P) {
                        qe(e, e.return, P);
                    }
                }
                a & 4 && e.stateNode != null && (n = e.memoizedProps, Qf(e, n, l !== null ? l.memoizedProps : n)), a & 1024 && (Kf = !0);
                break;
            case 6:
                if (Ht(t, e), Lt(e), a & 4) {
                    if (e.stateNode === null) throw Error(f(162));
                    a = e.memoizedProps, l = e.stateNode;
                    try {
                        l.nodeValue = a;
                    } catch (P) {
                        qe(e, e.return, P);
                    }
                }
                break;
            case 3:
                if (Wi = null, n = ol, ol = Fi(t.containerInfo), Ht(t, e), ol = n, Lt(e), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
                    Un(t.containerInfo);
                } catch (P) {
                    qe(e, e.return, P);
                }
                Kf && (Kf = !1, Cd(e));
                break;
            case 4:
                a = ol, ol = Fi(e.stateNode.containerInfo), Ht(t, e), Lt(e), ol = a;
                break;
            case 12:
                Ht(t, e), Lt(e);
                break;
            case 31:
                Ht(t, e), Lt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Hi(e, a)));
                break;
            case 13:
                Ht(t, e), Lt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (wi = Ot()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Hi(e, a)));
                break;
            case 22:
                n = e.memoizedState !== null;
                var p = l !== null && l.memoizedState !== null, _ = Bl, w = mt;
                if (Bl = _ || n, mt = w || p, Ht(t, e), mt = w, Bl = _, Lt(e), a & 8192) e: for(t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || p || Bl || mt || Ga(e)), l = null, t = e;;){
                    if (t.tag === 5 || t.tag === 26) {
                        if (l === null) {
                            p = l = t;
                            try {
                                if (i = p.stateNode, n) c = i.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                else {
                                    h = p.stateNode;
                                    var q = p.memoizedProps.style, U = q != null && q.hasOwnProperty("display") ? q.display : null;
                                    h.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                                }
                            } catch (P) {
                                qe(p, p.return, P);
                            }
                        }
                    } else if (t.tag === 6) {
                        if (l === null) {
                            p = t;
                            try {
                                p.stateNode.nodeValue = n ? "" : p.memoizedProps;
                            } catch (P) {
                                qe(p, p.return, P);
                            }
                        }
                    } else if (t.tag === 18) {
                        if (l === null) {
                            p = t;
                            try {
                                var H = p.stateNode;
                                n ? Sh(H, !0) : Sh(p.stateNode, !1);
                            } catch (P) {
                                qe(p, p.return, P);
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue;
                    }
                    if (t === e) break e;
                    for(; t.sibling === null;){
                        if (t.return === null || t.return === e) break e;
                        l === t && (l = null), t = t.return;
                    }
                    l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
                }
                a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Hi(e, l))));
                break;
            case 19:
                Ht(t, e), Lt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Hi(e, a)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                Ht(t, e), Lt(e);
        }
    }
    function Lt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for(var l, a = e.return; a !== null;){
                    if (Ed(a)) {
                        l = a;
                        break;
                    }
                    a = a.return;
                }
                if (l == null) throw Error(f(160));
                switch(l.tag){
                    case 27:
                        var n = l.stateNode, i = Vf(e);
                        xi(e, i, n);
                        break;
                    case 5:
                        var c = l.stateNode;
                        l.flags & 32 && (Ia(c, ""), l.flags &= -33);
                        var h = Vf(e);
                        xi(e, h, c);
                        break;
                    case 3:
                    case 4:
                        var p = l.stateNode.containerInfo, _ = Vf(e);
                        Zf(e, _, p);
                        break;
                    default:
                        throw Error(f(161));
                }
            } catch (w) {
                qe(e, e.return, w);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function Cd(e) {
        if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
            var t = e;
            Cd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Yl(e, t) {
        if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)Td(e, t.alternate, t), t = t.sibling;
    }
    function Ga(e) {
        for(e = e.child; e !== null;){
            var t = e;
            switch(t.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    ia(4, t, t.return), Ga(t);
                    break;
                case 1:
                    Sl(t, t.return);
                    var l = t.stateNode;
                    typeof l.componentWillUnmount == "function" && Sd(t, t.return, l), Ga(t);
                    break;
                case 27:
                    Ru(t.stateNode);
                case 26:
                case 5:
                    Sl(t, t.return), Ga(t);
                    break;
                case 22:
                    t.memoizedState === null && Ga(t);
                    break;
                case 30:
                    Ga(t);
                    break;
                default:
                    Ga(t);
            }
            e = e.sibling;
        }
    }
    function ql(e, t, l) {
        for(l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
            var a = t.alternate, n = e, i = t, c = i.flags;
            switch(i.tag){
                case 0:
                case 11:
                case 15:
                    ql(n, i, l), du(4, i);
                    break;
                case 1:
                    if (ql(n, i, l), a = i, n = a.stateNode, typeof n.componentDidMount == "function") try {
                        n.componentDidMount();
                    } catch (_) {
                        qe(a, a.return, _);
                    }
                    if (a = i, n = a.updateQueue, n !== null) {
                        var h = a.stateNode;
                        try {
                            var p = n.shared.hiddenCallbacks;
                            if (p !== null) for(n.shared.hiddenCallbacks = null, n = 0; n < p.length; n++)rs(p[n], h);
                        } catch (_) {
                            qe(a, a.return, _);
                        }
                    }
                    l && c & 64 && pd(i), hu(i, i.return);
                    break;
                case 27:
                    Rd(i);
                case 26:
                case 5:
                    ql(n, i, l), l && a === null && c & 4 && bd(i), hu(i, i.return);
                    break;
                case 12:
                    ql(n, i, l);
                    break;
                case 31:
                    ql(n, i, l), l && c & 4 && Ad(n, i);
                    break;
                case 13:
                    ql(n, i, l), l && c & 4 && Od(n, i);
                    break;
                case 22:
                    i.memoizedState === null && ql(n, i, l), hu(i, i.return);
                    break;
                case 30:
                    break;
                default:
                    ql(n, i, l);
            }
            t = t.sibling;
        }
    }
    function Jf(e, t) {
        var l = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && In(l));
    }
    function Ff(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && In(e));
    }
    function sl(e, t, l, a) {
        if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)Ud(e, t, l, a), t = t.sibling;
    }
    function Ud(e, t, l, a) {
        var n = t.flags;
        switch(t.tag){
            case 0:
            case 11:
            case 15:
                sl(e, t, l, a), n & 2048 && du(9, t);
                break;
            case 1:
                sl(e, t, l, a);
                break;
            case 3:
                sl(e, t, l, a), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && In(e)));
                break;
            case 12:
                if (n & 2048) {
                    sl(e, t, l, a), e = t.stateNode;
                    try {
                        var i = t.memoizedProps, c = i.id, h = i.onPostCommit;
                        typeof h == "function" && h(c, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                    } catch (p) {
                        qe(t, t.return, p);
                    }
                } else sl(e, t, l, a);
                break;
            case 31:
                sl(e, t, l, a);
                break;
            case 13:
                sl(e, t, l, a);
                break;
            case 23:
                break;
            case 22:
                i = t.stateNode, c = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? sl(e, t, l, a) : mu(e, t) : i._visibility & 2 ? sl(e, t, l, a) : (i._visibility |= 2, bn(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && Jf(c, t);
                break;
            case 24:
                sl(e, t, l, a), n & 2048 && Ff(t.alternate, t);
                break;
            default:
                sl(e, t, l, a);
        }
    }
    function bn(e, t, l, a, n) {
        for(n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;){
            var i = e, c = t, h = l, p = a, _ = c.flags;
            switch(c.tag){
                case 0:
                case 11:
                case 15:
                    bn(i, c, h, p, n), du(8, c);
                    break;
                case 23:
                    break;
                case 22:
                    var w = c.stateNode;
                    c.memoizedState !== null ? w._visibility & 2 ? bn(i, c, h, p, n) : mu(i, c) : (w._visibility |= 2, bn(i, c, h, p, n)), n && _ & 2048 && Jf(c.alternate, c);
                    break;
                case 24:
                    bn(i, c, h, p, n), n && _ & 2048 && Ff(c.alternate, c);
                    break;
                default:
                    bn(i, c, h, p, n);
            }
            t = t.sibling;
        }
    }
    function mu(e, t) {
        if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
            var l = e, a = t, n = a.flags;
            switch(a.tag){
                case 22:
                    mu(l, a), n & 2048 && Jf(a.alternate, a);
                    break;
                case 24:
                    mu(l, a), n & 2048 && Ff(a.alternate, a);
                    break;
                default:
                    mu(l, a);
            }
            t = t.sibling;
        }
    }
    var yu = 8192;
    function En(e, t, l) {
        if (e.subtreeFlags & yu) for(e = e.child; e !== null;)Nd(e, t, l), e = e.sibling;
    }
    function Nd(e, t, l) {
        switch(e.tag){
            case 26:
                En(e, t, l), e.flags & yu && e.memoizedState !== null && u0(l, ol, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                En(e, t, l);
                break;
            case 3:
            case 4:
                var a = ol;
                ol = Fi(e.stateNode.containerInfo), En(e, t, l), ol = a;
                break;
            case 22:
                e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = yu, yu = 16777216, En(e, t, l), yu = a) : En(e, t, l));
                break;
            default:
                En(e, t, l);
        }
    }
    function xd(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
            t.child = null;
            do t = e.sibling, e.sibling = null, e = t;
            while (e !== null);
        }
    }
    function vu(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null) for(var l = 0; l < t.length; l++){
                var a = t[l];
                St = a, Ld(a, e);
            }
            xd(e);
        }
        if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)Hd(e), e = e.sibling;
    }
    function Hd(e) {
        switch(e.tag){
            case 0:
            case 11:
            case 15:
                vu(e), e.flags & 2048 && ia(9, e, e.return);
                break;
            case 3:
                vu(e);
                break;
            case 12:
                vu(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Li(e)) : vu(e);
                break;
            default:
                vu(e);
        }
    }
    function Li(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null) for(var l = 0; l < t.length; l++){
                var a = t[l];
                St = a, Ld(a, e);
            }
            xd(e);
        }
        for(e = e.child; e !== null;){
            switch(t = e, t.tag){
                case 0:
                case 11:
                case 15:
                    ia(8, t, t.return), Li(t);
                    break;
                case 22:
                    l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Li(t));
                    break;
                default:
                    Li(t);
            }
            e = e.sibling;
        }
    }
    function Ld(e, t) {
        for(; St !== null;){
            var l = St;
            switch(l.tag){
                case 0:
                case 11:
                case 15:
                    ia(8, l, t);
                    break;
                case 23:
                case 22:
                    if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                        var a = l.memoizedState.cachePool.pool;
                        a != null && a.refCount++;
                    }
                    break;
                case 24:
                    In(l.memoizedState.cache);
            }
            if (a = l.child, a !== null) a.return = l, St = a;
            else e: for(l = e; St !== null;){
                a = St;
                var n = a.sibling, i = a.return;
                if (Md(a), a === l) {
                    St = null;
                    break e;
                }
                if (n !== null) {
                    n.return = i, St = n;
                    break e;
                }
                St = i;
            }
        }
    }
    var bv = {
        getCacheForType: function getCacheForType(e) {
            var t = Et(st), l = t.data.get(e);
            return l === void 0 && (l = e(), t.data.set(e, l)), l;
        },
        cacheSignal: function cacheSignal() {
            return Et(st).controller.signal;
        }
    }, Ev = typeof WeakMap == "function" ? WeakMap : Map, je = 0, Je = null, De = null, Oe = 0, Ye = 0, Xt = null, ra = !1, Rn = !1, $f = !1, Gl = 0, nt = 0, fa = 0, Xa = 0, Wf = 0, Qt = 0, zn = 0, gu = null, wt = null, kf = !1, wi = 0, wd = 0, Bi = 1 / 0, ji = null, ca = null, vt = 0, oa = null, Tn = null, Xl = 0, Pf = 0, If = null, Bd = null, pu = 0, ec = null;
    function Vt() {
        return (je & 2) !== 0 && Oe !== 0 ? Oe & -Oe : x.T !== null ? ic() : G();
    }
    function jd() {
        if (Qt === 0) if ((Oe & 536870912) === 0 || Ne) {
            var e = Dl;
            Dl <<= 1, (Dl & 3932160) === 0 && (Dl = 262144), Qt = e;
        } else Qt = 536870912;
        return e = qt.current, e !== null && (e.flags |= 32), Qt;
    }
    function Bt(e, t, l) {
        (e === Je && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null) && (Mn(e, 0), sa(e, Oe, Qt, !1)), ml(e, l), ((je & 2) === 0 || e !== Je) && (e === Je && ((je & 2) === 0 && (Xa |= l), nt === 4 && sa(e, Oe, Qt, !1)), bl(e));
    }
    function Yd(e, t, l) {
        if ((je & 6) !== 0) throw Error(f(327));
        var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Jl(e, t), n = a ? Tv(e, t) : lc(e, t, !0), i = a;
        do {
            if (n === 0) {
                Rn && !a && sa(e, t, 0, !1);
                break;
            } else {
                if (l = e.current.alternate, i && !Rv(l)) {
                    n = lc(e, t, !1), i = !1;
                    continue;
                }
                if (n === 2) {
                    if (i = t, e.errorRecoveryDisabledLanes & i) var c = 0;
                    else c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
                    if (c !== 0) {
                        t = c;
                        e: {
                            var h = e;
                            n = gu;
                            var p = h.current.memoizedState.isDehydrated;
                            if (p && (Mn(h, c).flags |= 256), c = lc(h, c, !1), c !== 2) {
                                if ($f && !p) {
                                    h.errorRecoveryDisabledLanes |= i, Xa |= i, n = 4;
                                    break e;
                                }
                                i = wt, wt = n, i !== null && (wt === null ? wt = i : wt.push.apply(wt, i));
                            }
                            n = c;
                        }
                        if (i = !1, n !== 2) continue;
                    }
                }
                if (n === 1) {
                    Mn(e, 0), sa(e, t, 0, !0);
                    break;
                }
                e: {
                    switch(a = e, i = n, i){
                        case 0:
                        case 1:
                            throw Error(f(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            sa(a, t, Qt, !ra);
                            break e;
                        case 2:
                            wt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(f(329));
                    }
                    if ((t & 62914560) === t && (n = wi + 300 - Ot(), 10 < n)) {
                        if (sa(a, t, Qt, !ra), Fa(a, 0, !0) !== 0) break e;
                        Xl = t, a.timeoutHandle = vh(qd.bind(null, a, l, wt, ji, kf, t, Qt, Xa, zn, ra, i, "Throttled", -0, 0), n);
                        break e;
                    }
                    qd(a, l, wt, ji, kf, t, Qt, Xa, zn, ra, i, null, -0, 0);
                }
            }
            break;
        }while (!0);
        bl(e);
    }
    function qd(e, t, l, a, n, i, c, h, p, _, w, q, U, H) {
        if (e.timeoutHandle = -1, q = t.subtreeFlags, q & 8192 || (q & 16785408) === 16785408) {
            q = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Al
            }, Nd(t, i, q);
            var P = (i & 62914560) === i ? wi - Ot() : (i & 4194048) === i ? wd - Ot() : 0;
            if (P = i0(q, P), P !== null) {
                Xl = i, e.cancelPendingCommit = P(Fd.bind(null, e, t, i, l, a, n, c, h, p, w, q, null, U, H)), sa(e, i, c, !_);
                return;
            }
        }
        Fd(e, t, i, l, a, n, c, h, p);
    }
    function Rv(e) {
        for(var t = e;;){
            var l = t.tag;
            if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null))) for(var a = 0; a < l.length; a++){
                var n = l[a], i = n.getSnapshot;
                n = n.value;
                try {
                    if (!jt(i(), n)) return !1;
                } catch (unused) {
                    return !1;
                }
            }
            if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
            else {
                if (t === e) break;
                for(; t.sibling === null;){
                    if (t.return === null || t.return === e) return !0;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
        }
        return !0;
    }
    function sa(e, t, l, a) {
        t &= ~Wf, t &= ~Xa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
        for(var n = t; 0 < n;){
            var i = 31 - Tt(n), c = 1 << i;
            a[i] = -1, n &= ~c;
        }
        l !== 0 && Fu(e, l, t);
    }
    function Yi() {
        return (je & 6) === 0 ? (Su(0), !1) : !0;
    }
    function tc() {
        if (De !== null) {
            if (Ye === 0) var e = De.return;
            else e = De, Ul = xa = null, gf(e), yn = null, tu = 0, e = De;
            for(; e !== null;)gd(e.alternate, e), e = e.return;
            De = null;
        }
    }
    function Mn(e, t) {
        var l = e.timeoutHandle;
        l !== -1 && (e.timeoutHandle = -1, Xv(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Xl = 0, tc(), Je = e, De = l = _l(e.current, null), Oe = t, Ye = 0, Xt = null, ra = !1, Rn = Jl(e, t), $f = !1, zn = Qt = Wf = Xa = fa = nt = 0, wt = gu = null, kf = !1, (t & 8) !== 0 && (t |= t & 32);
        var a = e.entangledLanes;
        if (a !== 0) for(e = e.entanglements, a &= t; 0 < a;){
            var n = 31 - Tt(a), i = 1 << n;
            t |= e[n], a &= ~i;
        }
        return Gl = t, ii(), l;
    }
    function Gd(e, t) {
        ge = null, x.H = cu, t === mn || t === mi ? (t = as(), Ye = 3) : t === nf ? (t = as(), Ye = 4) : Ye = t === xf ? 8 : t !== null && (typeof t === "undefined" ? "undefined" : _type_of(t)) == "object" && typeof t.then == "function" ? 6 : 1, Xt = t, De === null && (nt = 1, Oi(e, Wt(t, e.current)));
    }
    function Xd() {
        var e = qt.current;
        return e === null ? !0 : (Oe & 4194048) === Oe ? el === null : (Oe & 62914560) === Oe || (Oe & 536870912) !== 0 ? e === el : !1;
    }
    function Qd() {
        var e = x.H;
        return x.H = cu, e === null ? cu : e;
    }
    function Vd() {
        var e = x.A;
        return x.A = bv, e;
    }
    function qi() {
        nt = 4, ra || (Oe & 4194048) !== Oe && qt.current !== null || (Rn = !0), (fa & 134217727) === 0 && (Xa & 134217727) === 0 || Je === null || sa(Je, Oe, Qt, !1);
    }
    function lc(e, t, l) {
        var a = je;
        je |= 2;
        var n = Qd(), i = Vd();
        (Je !== e || Oe !== t) && (ji = null, Mn(e, t)), t = !1;
        var c = nt;
        e: do try {
            if (Ye !== 0 && De !== null) {
                var h = De, p = Xt;
                switch(Ye){
                    case 8:
                        tc(), c = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        qt.current === null && (t = !0);
                        var _ = Ye;
                        if (Ye = 0, Xt = null, Dn(e, h, p, _), l && Rn) {
                            c = 0;
                            break e;
                        }
                        break;
                    default:
                        _ = Ye, Ye = 0, Xt = null, Dn(e, h, p, _);
                }
            }
            zv(), c = nt;
            break;
        } catch (w) {
            Gd(e, w);
        }
        while (!0);
        return t && e.shellSuspendCounter++, Ul = xa = null, je = a, x.H = n, x.A = i, De === null && (Je = null, Oe = 0, ii()), c;
    }
    function zv() {
        for(; De !== null;)Zd(De);
    }
    function Tv(e, t) {
        var l = je;
        je |= 2;
        var a = Qd(), n = Vd();
        Je !== e || Oe !== t ? (ji = null, Bi = Ot() + 500, Mn(e, t)) : Rn = Jl(e, t);
        e: do try {
            if (Ye !== 0 && De !== null) {
                t = De;
                var i = Xt;
                t: switch(Ye){
                    case 1:
                        Ye = 0, Xt = null, Dn(e, t, i, 1);
                        break;
                    case 2:
                    case 9:
                        if (ts(i)) {
                            Ye = 0, Xt = null, Kd(t);
                            break;
                        }
                        t = function t() {
                            Ye !== 2 && Ye !== 9 || Je !== e || (Ye = 7), bl(e);
                        }, i.then(t, t);
                        break e;
                    case 3:
                        Ye = 7;
                        break e;
                    case 4:
                        Ye = 5;
                        break e;
                    case 7:
                        ts(i) ? (Ye = 0, Xt = null, Kd(t)) : (Ye = 0, Xt = null, Dn(e, t, i, 7));
                        break;
                    case 5:
                        var c = null;
                        switch(De.tag){
                            case 26:
                                c = De.memoizedState;
                            case 5:
                            case 27:
                                var h = De;
                                if (c ? Uh(c) : h.stateNode.complete) {
                                    Ye = 0, Xt = null;
                                    var p = h.sibling;
                                    if (p !== null) De = p;
                                    else {
                                        var _ = h.return;
                                        _ !== null ? (De = _, Gi(_)) : De = null;
                                    }
                                    break t;
                                }
                        }
                        Ye = 0, Xt = null, Dn(e, t, i, 5);
                        break;
                    case 6:
                        Ye = 0, Xt = null, Dn(e, t, i, 6);
                        break;
                    case 8:
                        tc(), nt = 6;
                        break e;
                    default:
                        throw Error(f(462));
                }
            }
            Mv();
            break;
        } catch (w) {
            Gd(e, w);
        }
        while (!0);
        return Ul = xa = null, x.H = a, x.A = n, je = l, De !== null ? 0 : (Je = null, Oe = 0, ii(), nt);
    }
    function Mv() {
        for(; De !== null && !pr();)Zd(De);
    }
    function Zd(e) {
        var t = yd(e.alternate, e, Gl);
        e.memoizedProps = e.pendingProps, t === null ? Gi(e) : De = t;
    }
    function Kd(e) {
        var t = e, l = t.alternate;
        switch(t.tag){
            case 15:
            case 0:
                t = cd(l, t, t.pendingProps, t.type, void 0, Oe);
                break;
            case 11:
                t = cd(l, t, t.pendingProps, t.type.render, t.ref, Oe);
                break;
            case 5:
                gf(t);
            default:
                gd(l, t), t = De = Vo(t, Gl), t = yd(l, t, Gl);
        }
        e.memoizedProps = e.pendingProps, t === null ? Gi(e) : De = t;
    }
    function Dn(e, t, l, a) {
        Ul = xa = null, gf(t), yn = null, tu = 0;
        var n = t.return;
        try {
            if (hv(e, n, t, l, Oe)) {
                nt = 1, Oi(e, Wt(l, e.current)), De = null;
                return;
            }
        } catch (i) {
            if (n !== null) throw De = n, i;
            nt = 1, Oi(e, Wt(l, e.current)), De = null;
            return;
        }
        t.flags & 32768 ? (Ne || a === 1 ? e = !0 : Rn || (Oe & 536870912) !== 0 ? e = !1 : (ra = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = qt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Jd(t, e)) : Gi(t);
    }
    function Gi(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Jd(t, ra);
                return;
            }
            e = t.return;
            var l = vv(t.alternate, t, Gl);
            if (l !== null) {
                De = l;
                return;
            }
            if (t = t.sibling, t !== null) {
                De = t;
                return;
            }
            De = t = e;
        }while (t !== null);
        nt === 0 && (nt = 5);
    }
    function Jd(e, t) {
        do {
            var l = gv(e.alternate, e);
            if (l !== null) {
                l.flags &= 32767, De = l;
                return;
            }
            if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
                De = e;
                return;
            }
            De = e = l;
        }while (e !== null);
        nt = 6, De = null;
    }
    function Fd(e, t, l, a, n, i, c, h, p) {
        e.cancelPendingCommit = null;
        do Xi();
        while (vt !== 0);
        if ((je & 6) !== 0) throw Error(f(327));
        if (t !== null) {
            if (t === e.current) throw Error(f(177));
            if (i = t.lanes | t.childLanes, i |= Qr, Ju(e, l, i, c, h, p), e === Je && (De = Je = null, Oe = 0), Tn = t, oa = e, Xl = l, Pf = i, If = n, Bd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, _v(Kl, function() {
                return Id(), null;
            })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
                a = x.T, x.T = null, n = Q.p, Q.p = 2, c = je, je |= 4;
                try {
                    pv(e, t, l);
                } finally{
                    je = c, Q.p = n, x.T = a;
                }
            }
            vt = 1, $d(), Wd(), kd();
        }
    }
    function $d() {
        if (vt === 1) {
            vt = 0;
            var e = oa, t = Tn, l = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || l) {
                l = x.T, x.T = null;
                var a = Q.p;
                Q.p = 2;
                var n = je;
                je |= 4;
                try {
                    _d(t, e);
                    var i = mc, c = Lo(e.containerInfo), h = i.focusedElem, p = i.selectionRange;
                    if (c !== h && h && h.ownerDocument && Ho(h.ownerDocument.documentElement, h)) {
                        if (p !== null && jr(h)) {
                            var _ = p.start, w = p.end;
                            if (w === void 0 && (w = _), "selectionStart" in h) h.selectionStart = _, h.selectionEnd = Math.min(w, h.value.length);
                            else {
                                var q = h.ownerDocument || document, U = q && q.defaultView || window;
                                if (U.getSelection) {
                                    var H = U.getSelection(), P = h.textContent.length, se = Math.min(p.start, P), Qe = p.end === void 0 ? se : Math.min(p.end, P);
                                    !H.extend && se > Qe && (c = Qe, Qe = se, se = c);
                                    var T = xo(h, se), R = xo(h, Qe);
                                    if (T && R && (H.rangeCount !== 1 || H.anchorNode !== T.node || H.anchorOffset !== T.offset || H.focusNode !== R.node || H.focusOffset !== R.offset)) {
                                        var O = q.createRange();
                                        O.setStart(T.node, T.offset), H.removeAllRanges(), se > Qe ? (H.addRange(O), H.extend(R.node, R.offset)) : (O.setEnd(R.node, R.offset), H.addRange(O));
                                    }
                                }
                            }
                        }
                        for(q = [], H = h; H = H.parentNode;)H.nodeType === 1 && q.push({
                            element: H,
                            left: H.scrollLeft,
                            top: H.scrollTop
                        });
                        for(typeof h.focus == "function" && h.focus(), h = 0; h < q.length; h++){
                            var j = q[h];
                            j.element.scrollLeft = j.left, j.element.scrollTop = j.top;
                        }
                    }
                    er = !!hc, mc = hc = null;
                } finally{
                    je = n, Q.p = a, x.T = l;
                }
            }
            e.current = t, vt = 2;
        }
    }
    function Wd() {
        if (vt === 2) {
            vt = 0;
            var e = oa, t = Tn, l = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || l) {
                l = x.T, x.T = null;
                var a = Q.p;
                Q.p = 2;
                var n = je;
                je |= 4;
                try {
                    Td(e, t.alternate, t);
                } finally{
                    je = n, Q.p = a, x.T = l;
                }
            }
            vt = 3;
        }
    }
    function kd() {
        if (vt === 4 || vt === 3) {
            vt = 0, Sr();
            var e = oa, t = Tn, l = Xl, a = Bd;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? vt = 5 : (vt = 0, Tn = oa = null, Pd(e, e.pendingLanes));
            var n = e.pendingLanes;
            if (n === 0 && (ca = null), C(l), t = t.stateNode, _t && typeof _t.onCommitFiberRoot == "function") try {
                _t.onCommitFiberRoot(Ml, t, void 0, (t.current.flags & 128) === 128);
            } catch (unused) {}
            if (a !== null) {
                t = x.T, n = Q.p, Q.p = 2, x.T = null;
                try {
                    for(var i = e.onRecoverableError, c = 0; c < a.length; c++){
                        var h = a[c];
                        i(h.value, {
                            componentStack: h.stack
                        });
                    }
                } finally{
                    x.T = t, Q.p = n;
                }
            }
            (Xl & 3) !== 0 && Xi(), bl(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === ec ? pu++ : (pu = 0, ec = e) : pu = 0, Su(0);
        }
    }
    function Pd(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, In(t)));
    }
    function Xi() {
        return $d(), Wd(), kd(), Id();
    }
    function Id() {
        if (vt !== 5) return !1;
        var e = oa, t = Pf;
        Pf = 0;
        var l = C(Xl), a = x.T, n = Q.p;
        try {
            Q.p = 32 > l ? 32 : l, x.T = null, l = If, If = null;
            var i = oa, c = Xl;
            if (vt = 0, Tn = oa = null, Xl = 0, (je & 6) !== 0) throw Error(f(331));
            var h = je;
            if (je |= 4, Hd(i.current), Ud(i, i.current, c, l), je = h, Su(0, !1), _t && typeof _t.onPostCommitFiberRoot == "function") try {
                _t.onPostCommitFiberRoot(Ml, i);
            } catch (unused) {}
            return !0;
        } finally{
            Q.p = n, x.T = a, Pd(e, t);
        }
    }
    function eh(e, t, l) {
        t = Wt(l, t), t = Nf(e.stateNode, t, 2), e = aa(e, t, 2), e !== null && (ml(e, 2), bl(e));
    }
    function qe(e, t, l) {
        if (e.tag === 3) eh(e, e, l);
        else for(; t !== null;){
            if (t.tag === 3) {
                eh(t, e, l);
                break;
            } else if (t.tag === 1) {
                var a = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ca === null || !ca.has(a))) {
                    e = Wt(l, e), l = td(2), a = aa(t, l, 2), a !== null && (ld(l, a, t, e), ml(a, 2), bl(a));
                    break;
                }
            }
            t = t.return;
        }
    }
    function ac(e, t, l) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new Ev;
            var n = new Set;
            a.set(t, n);
        } else n = a.get(t), n === void 0 && (n = new Set, a.set(t, n));
        n.has(l) || ($f = !0, n.add(l), e = Dv.bind(null, e, t, l), t.then(e, e));
    }
    function Dv(e, t, l) {
        var a = e.pingCache;
        a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Je === e && (Oe & l) === l && (nt === 4 || nt === 3 && (Oe & 62914560) === Oe && 300 > Ot() - wi ? (je & 2) === 0 && Mn(e, 0) : Wf |= l, zn === Oe && (zn = 0)), bl(e);
    }
    function th(e, t) {
        t === 0 && (t = Gn()), e = Ca(e, t), e !== null && (ml(e, t), bl(e));
    }
    function Av(e) {
        var t = e.memoizedState, l = 0;
        t !== null && (l = t.retryLane), th(e, l);
    }
    function Ov(e, t) {
        var l = 0;
        switch(e.tag){
            case 31:
            case 13:
                var a = e.stateNode, n = e.memoizedState;
                n !== null && (l = n.retryLane);
                break;
            case 19:
                a = e.stateNode;
                break;
            case 22:
                a = e.stateNode._retryCache;
                break;
            default:
                throw Error(f(314));
        }
        a !== null && a.delete(t), th(e, l);
    }
    function _v(e, t) {
        return Ja(e, t);
    }
    var Qi = null, An = null, nc = !1, Vi = !1, uc = !1, da = 0;
    function bl(e) {
        e !== An && e.next === null && (An === null ? Qi = An = e : An = An.next = e), Vi = !0, nc || (nc = !0, Uv());
    }
    function Su(e, t) {
        if (!uc && Vi) {
            uc = !0;
            do for(var l = !1, a = Qi; a !== null;){
                if (e !== 0) {
                    var n = a.pendingLanes;
                    if (n === 0) var i = 0;
                    else {
                        var c = a.suspendedLanes, h = a.pingedLanes;
                        i = (1 << 31 - Tt(42 | e) + 1) - 1, i &= n & ~(c & ~h), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
                    }
                    i !== 0 && (l = !0, uh(a, i));
                } else i = Oe, i = Fa(a, a === Je ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (i & 3) === 0 || Jl(a, i) || (l = !0, uh(a, i));
                a = a.next;
            }
            while (l);
            uc = !1;
        }
    }
    function Cv() {
        lh();
    }
    function lh() {
        Vi = nc = !1;
        var e = 0;
        da !== 0 && Gv() && (e = da);
        for(var t = Ot(), l = null, a = Qi; a !== null;){
            var n = a.next, i = ah(a, t);
            i === 0 ? (a.next = null, l === null ? Qi = n : l.next = n, n === null && (An = l)) : (l = a, (e !== 0 || (i & 3) !== 0) && (Vi = !0)), a = n;
        }
        vt !== 0 && vt !== 5 || Su(e), da !== 0 && (da = 0);
    }
    function ah(e, t) {
        for(var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;){
            var c = 31 - Tt(i), h = 1 << c, p = n[c];
            p === -1 ? ((h & l) === 0 || (h & a) !== 0) && (n[c] = Rr(h, t)) : p <= t && (e.expiredLanes |= h), i &= ~h;
        }
        if (t = Je, l = Oe, l = Fa(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, l === 0 || e === t && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && Yn(a), e.callbackNode = null, e.callbackPriority = 0;
        if ((l & 3) === 0 || Jl(e, l)) {
            if (t = l & -l, t === e.callbackPriority) return t;
            switch(a !== null && Yn(a), C(l)){
                case 2:
                case 8:
                    l = qn;
                    break;
                case 32:
                    l = Kl;
                    break;
                case 268435456:
                    l = Jt;
                    break;
                default:
                    l = Kl;
            }
            return a = nh.bind(null, e), l = Ja(l, a), e.callbackPriority = t, e.callbackNode = l, t;
        }
        return a !== null && a !== null && Yn(a), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function nh(e, t) {
        if (vt !== 0 && vt !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var l = e.callbackNode;
        if (Xi() && e.callbackNode !== l) return null;
        var a = Oe;
        return a = Fa(e, e === Je ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Yd(e, a, t), ah(e, Ot()), e.callbackNode != null && e.callbackNode === l ? nh.bind(null, e) : null);
    }
    function uh(e, t) {
        if (Xi()) return null;
        Yd(e, t, !0);
    }
    function Uv() {
        Qv(function() {
            (je & 6) !== 0 ? Ja(Zl, Cv) : lh();
        });
    }
    function ic() {
        if (da === 0) {
            var e = dn;
            e === 0 && (e = za, za <<= 1, (za & 261888) === 0 && (za = 256)), da = e;
        }
        return da;
    }
    function ih(e) {
        return e == null || (typeof e === "undefined" ? "undefined" : _type_of(e)) == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Pu("" + e);
    }
    function rh(e, t) {
        var l = t.ownerDocument.createElement("input");
        return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
    }
    function Nv(e, t, l, a, n) {
        if (t === "submit" && l && l.stateNode === n) {
            var i = ih((n[$] || null).action), c = a.submitter;
            c && (t = (t = c[$] || null) ? ih(t.formAction) : c.getAttribute("formAction"), t !== null && (i = t, c = null));
            var h = new li("action", "action", null, a, n);
            e.push({
                event: h,
                listeners: [
                    {
                        instance: null,
                        listener: function listener() {
                            if (a.defaultPrevented) {
                                if (da !== 0) {
                                    var p = c ? rh(n, c) : new FormData(n);
                                    Df(l, {
                                        pending: !0,
                                        data: p,
                                        method: n.method,
                                        action: i
                                    }, null, p);
                                }
                            } else typeof i == "function" && (h.preventDefault(), p = c ? rh(n, c) : new FormData(n), Df(l, {
                                pending: !0,
                                data: p,
                                method: n.method,
                                action: i
                            }, i, p));
                        },
                        currentTarget: n
                    }
                ]
            });
        }
    }
    for(var rc = 0; rc < Xr.length; rc++){
        var fc = Xr[rc], xv = fc.toLowerCase(), Hv = fc[0].toUpperCase() + fc.slice(1);
        cl(xv, "on" + Hv);
    }
    cl(jo, "onAnimationEnd"), cl(Yo, "onAnimationIteration"), cl(qo, "onAnimationStart"), cl("dblclick", "onDoubleClick"), cl("focusin", "onFocus"), cl("focusout", "onBlur"), cl(Wy, "onTransitionRun"), cl(ky, "onTransitionStart"), cl(Py, "onTransitionCancel"), cl(Go, "onTransitionEnd"), yl("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]), yl("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]), yl("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]), yl("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]), pt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), pt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), pt("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]), pt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), pt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), pt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var bu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bu));
    function fh(e, t) {
        t = (t & 4) !== 0;
        for(var l = 0; l < e.length; l++){
            var a = e[l], n = a.event;
            a = a.listeners;
            e: {
                var i = void 0;
                if (t) for(var c = a.length - 1; 0 <= c; c--){
                    var h = a[c], p = h.instance, _ = h.currentTarget;
                    if (h = h.listener, p !== i && n.isPropagationStopped()) break e;
                    i = h, n.currentTarget = _;
                    try {
                        i(n);
                    } catch (w) {
                        ui(w);
                    }
                    n.currentTarget = null, i = p;
                }
                else for(c = 0; c < a.length; c++){
                    if (h = a[c], p = h.instance, _ = h.currentTarget, h = h.listener, p !== i && n.isPropagationStopped()) break e;
                    i = h, n.currentTarget = _;
                    try {
                        i(n);
                    } catch (w) {
                        ui(w);
                    }
                    n.currentTarget = null, i = p;
                }
            }
        }
    }
    function Ae(e, t) {
        var l = t[W];
        l === void 0 && (l = t[W] = new Set);
        var a = e + "__bubble";
        l.has(a) || (ch(t, e, 2, !1), l.add(a));
    }
    function cc(e, t, l) {
        var a = 0;
        t && (a |= 4), ch(l, e, a, t);
    }
    var Zi = "_reactListening" + Math.random().toString(36).slice(2);
    function oc(e) {
        if (!e[Zi]) {
            e[Zi] = !0, $l.forEach(function(l) {
                l !== "selectionchange" && (Lv.has(l) || cc(l, !1, e), cc(l, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Zi] || (t[Zi] = !0, cc("selectionchange", !1, t));
        }
    }
    function ch(e, t, l, a) {
        switch(jh(t)){
            case 2:
                var n = c0;
                break;
            case 8:
                n = o0;
                break;
            default:
                n = Mc;
        }
        l = n.bind(null, t, l, e), n = void 0, !_r || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
            capture: !0,
            passive: n
        }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
            passive: n
        }) : e.addEventListener(t, l, !1);
    }
    function sc(e, t, l, a, n) {
        var i = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for(;;){
            if (a === null) return;
            var c = a.tag;
            if (c === 3 || c === 4) {
                var h = a.stateNode.containerInfo;
                if (h === n) break;
                if (c === 4) for(c = a.return; c !== null;){
                    var p = c.tag;
                    if ((p === 3 || p === 4) && c.stateNode.containerInfo === n) return;
                    c = c.return;
                }
                for(; h !== null;){
                    if (c = $e(h), c === null) return;
                    if (p = c.tag, p === 5 || p === 6 || p === 26 || p === 27) {
                        a = i = c;
                        continue e;
                    }
                    h = h.parentNode;
                }
            }
            a = a.return;
        }
        mo(function() {
            var _ = i, w = Ar(l), q = [];
            e: {
                var U = Xo.get(e);
                if (U !== void 0) {
                    var H = li, P = e;
                    switch(e){
                        case "keypress":
                            if (ei(l) === 0) break e;
                        case "keydown":
                        case "keyup":
                            H = Oy;
                            break;
                        case "focusin":
                            P = "focus", H = xr;
                            break;
                        case "focusout":
                            P = "blur", H = xr;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            H = xr;
                            break;
                        case "click":
                            if (l.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            H = go;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            H = vy;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            H = Uy;
                            break;
                        case jo:
                        case Yo:
                        case qo:
                            H = Sy;
                            break;
                        case Go:
                            H = xy;
                            break;
                        case "scroll":
                        case "scrollend":
                            H = my;
                            break;
                        case "wheel":
                            H = Ly;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            H = Ey;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            H = So;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            H = By;
                    }
                    var se = (t & 4) !== 0, Qe = !se && (e === "scroll" || e === "scrollend"), T = se ? U !== null ? U + "Capture" : null : U;
                    se = [];
                    for(var R = _, O; R !== null;){
                        var j = R;
                        if (O = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || O === null || T === null || (j = Xn(R, T), j != null && se.push(Eu(R, j, O))), Qe) break;
                        R = R.return;
                    }
                    0 < se.length && (U = new H(U, P, null, l, w), q.push({
                        event: U,
                        listeners: se
                    }));
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (U = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", U && l !== Dr && (P = l.relatedTarget || l.fromElement) && ($e(P) || P[le])) break e;
                    if ((H || U) && (U = w.window === w ? w : (U = w.ownerDocument) ? U.defaultView || U.parentWindow : window, H ? (P = l.relatedTarget || l.toElement, H = _, P = P ? $e(P) : null, P !== null && (Qe = d(P), se = P.tag, P !== Qe || se !== 5 && se !== 27 && se !== 6) && (P = null)) : (H = null, P = _), H !== P)) {
                        if (se = go, j = "onMouseLeave", T = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (se = So, j = "onPointerLeave", T = "onPointerEnter", R = "pointer"), Qe = H == null ? U : He(H), O = P == null ? U : He(P), U = new se(j, R + "leave", H, l, w), U.target = Qe, U.relatedTarget = O, j = null, $e(w) === _ && (se = new se(T, R + "enter", P, l, w), se.target = O, se.relatedTarget = Qe, j = se), Qe = j, H && P) t: {
                            for(se = wv, T = H, R = P, O = 0, j = T; j; j = se(j))O++;
                            j = 0;
                            for(var fe = R; fe; fe = se(fe))j++;
                            for(; 0 < O - j;)T = se(T), O--;
                            for(; 0 < j - O;)R = se(R), j--;
                            for(; O--;){
                                if (T === R || R !== null && T === R.alternate) {
                                    se = T;
                                    break t;
                                }
                                T = se(T), R = se(R);
                            }
                            se = null;
                        }
                        else se = null;
                        H !== null && oh(q, U, H, se, !1), P !== null && Qe !== null && oh(q, Qe, P, se, !0);
                    }
                }
                e: {
                    if (U = _ ? He(_) : window, H = U.nodeName && U.nodeName.toLowerCase(), H === "select" || H === "input" && U.type === "file") var we = Ao;
                    else if (Mo(U)) if (Oo) we = Jy;
                    else {
                        we = Zy;
                        var ne = Vy;
                    }
                    else H = U.nodeName, !H || H.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? _ && Mr(_.elementType) && (we = Ao) : we = Ky;
                    if (we && (we = we(e, _))) {
                        Do(q, we, l, w);
                        break e;
                    }
                    ne && ne(e, U, _), e === "focusout" && _ && U.type === "number" && _.memoizedProps.value != null && Tr(U, "number", U.value);
                }
                switch(ne = _ ? He(_) : window, e){
                    case "focusin":
                        (Mo(ne) || ne.contentEditable === "true") && (an = ne, Yr = _, Wn = null);
                        break;
                    case "focusout":
                        Wn = Yr = an = null;
                        break;
                    case "mousedown":
                        qr = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        qr = !1, wo(q, l, w);
                        break;
                    case "selectionchange":
                        if ($y) break;
                    case "keydown":
                    case "keyup":
                        wo(q, l, w);
                }
                var be;
                if (Lr) e: {
                    switch(e){
                        case "compositionstart":
                            var _e = "onCompositionStart";
                            break e;
                        case "compositionend":
                            _e = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            _e = "onCompositionUpdate";
                            break e;
                    }
                    _e = void 0;
                }
                else ln ? zo(e, l) && (_e = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (_e = "onCompositionStart");
                _e && (bo && l.locale !== "ko" && (ln || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && ln && (be = yo()) : (Wl = w, Cr = "value" in Wl ? Wl.value : Wl.textContent, ln = !0)), ne = Ki(_, _e), 0 < ne.length && (_e = new po(_e, e, null, l, w), q.push({
                    event: _e,
                    listeners: ne
                }), be ? _e.data = be : (be = To(l), be !== null && (_e.data = be)))), (be = Yy ? qy(e, l) : Gy(e, l)) && (_e = Ki(_, "onBeforeInput"), 0 < _e.length && (ne = new po("onBeforeInput", "beforeinput", null, l, w), q.push({
                    event: ne,
                    listeners: _e
                }), ne.data = be)), Nv(q, e, _, l, w);
            }
            fh(q, t);
        });
    }
    function Eu(e, t, l) {
        return {
            instance: e,
            listener: t,
            currentTarget: l
        };
    }
    function Ki(e, t) {
        for(var l = t + "Capture", a = []; e !== null;){
            var n = e, i = n.stateNode;
            if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = Xn(e, l), n != null && a.unshift(Eu(e, n, i)), n = Xn(e, t), n != null && a.push(Eu(e, n, i))), e.tag === 3) return a;
            e = e.return;
        }
        return [];
    }
    function wv(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null;
    }
    function oh(e, t, l, a, n) {
        for(var i = t._reactName, c = []; l !== null && l !== a;){
            var h = l, p = h.alternate, _ = h.stateNode;
            if (h = h.tag, p !== null && p === a) break;
            h !== 5 && h !== 26 && h !== 27 || _ === null || (p = _, n ? (_ = Xn(l, i), _ != null && c.unshift(Eu(l, _, p))) : n || (_ = Xn(l, i), _ != null && c.push(Eu(l, _, p)))), l = l.return;
        }
        c.length !== 0 && e.push({
            event: t,
            listeners: c
        });
    }
    var Bv = /\r\n?/g, jv = /\u0000|\uFFFD/g;
    function sh(e) {
        return (typeof e == "string" ? e : "" + e).replace(Bv, "\n").replace(jv, "");
    }
    function dh(e, t) {
        return t = sh(t), sh(e) === t;
    }
    function Xe(e, t, l, a, n, i) {
        switch(l){
            case "children":
                typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ia(e, a) : (typeof a == "number" || (typeof a === "undefined" ? "undefined" : _type_of(a)) == "bigint") && t !== "body" && Ia(e, "" + a);
                break;
            case "className":
                ut(e, "class", a);
                break;
            case "tabIndex":
                ut(e, "tabindex", a);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                ut(e, l, a);
                break;
            case "style":
                so(e, a, i);
                break;
            case "data":
                if (t !== "object") {
                    ut(e, "data", a);
                    break;
                }
            case "src":
            case "href":
                if (a === "" && (t !== "a" || l !== "href")) {
                    e.removeAttribute(l);
                    break;
                }
                if (a == null || typeof a == "function" || (typeof a === "undefined" ? "undefined" : _type_of(a)) == "symbol" || typeof a == "boolean") {
                    e.removeAttribute(l);
                    break;
                }
                a = Pu("" + a), e.setAttribute(l, a);
                break;
            case "action":
            case "formAction":
                if (typeof a == "function") {
                    e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break;
                } else typeof i == "function" && (l === "formAction" ? (t !== "input" && Xe(e, t, "name", n.name, n, null), Xe(e, t, "formEncType", n.formEncType, n, null), Xe(e, t, "formMethod", n.formMethod, n, null), Xe(e, t, "formTarget", n.formTarget, n, null)) : (Xe(e, t, "encType", n.encType, n, null), Xe(e, t, "method", n.method, n, null), Xe(e, t, "target", n.target, n, null)));
                if (a == null || (typeof a === "undefined" ? "undefined" : _type_of(a)) == "symbol" || typeof a == "boolean") {
                    e.removeAttribute(l);
                    break;
                }
                a = Pu("" + a), e.setAttribute(l, a);
                break;
            case "onClick":
                a != null && (e.onclick = Al);
                break;
            case "onScroll":
                a != null && Ae("scroll", e);
                break;
            case "onScrollEnd":
                a != null && Ae("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if ((typeof a === "undefined" ? "undefined" : _type_of(a)) != "object" || !("__html" in a)) throw Error(f(61));
                    if (l = a.__html, l != null) {
                        if (n.children != null) throw Error(f(60));
                        e.innerHTML = l;
                    }
                }
                break;
            case "multiple":
                e.multiple = a && typeof a != "function" && (typeof a === "undefined" ? "undefined" : _type_of(a)) != "symbol";
                break;
            case "muted":
                e.muted = a && typeof a != "function" && (typeof a === "undefined" ? "undefined" : _type_of(a)) != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (a == null || typeof a == "function" || typeof a == "boolean" || (typeof a === "undefined" ? "undefined" : _type_of(a)) == "symbol") {
                    e.removeAttribute("xlink:href");
                    break;
                }
                l = Pu("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                a != null && typeof a != "function" && (typeof a === "undefined" ? "undefined" : _type_of(a)) != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                a && typeof a != "function" && (typeof a === "undefined" ? "undefined" : _type_of(a)) != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
                break;
            case "capture":
            case "download":
                a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && (typeof a === "undefined" ? "undefined" : _type_of(a)) != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                a != null && typeof a != "function" && (typeof a === "undefined" ? "undefined" : _type_of(a)) != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
                break;
            case "rowSpan":
            case "start":
                a == null || typeof a == "function" || (typeof a === "undefined" ? "undefined" : _type_of(a)) == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
                break;
            case "popover":
                Ae("beforetoggle", e), Ae("toggle", e), Me(e, "popover", a);
                break;
            case "xlinkActuate":
                Mt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                break;
            case "xlinkArcrole":
                Mt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                break;
            case "xlinkRole":
                Mt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
                break;
            case "xlinkShow":
                Mt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
                break;
            case "xlinkTitle":
                Mt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
                break;
            case "xlinkType":
                Mt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
                break;
            case "xmlBase":
                Mt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                break;
            case "xmlLang":
                Mt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                break;
            case "xmlSpace":
                Mt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                break;
            case "is":
                Me(e, "is", a);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = dy.get(l) || l, Me(e, l, a));
        }
    }
    function dc(e, t, l, a, n, i) {
        switch(l){
            case "style":
                so(e, a, i);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if ((typeof a === "undefined" ? "undefined" : _type_of(a)) != "object" || !("__html" in a)) throw Error(f(61));
                    if (l = a.__html, l != null) {
                        if (n.children != null) throw Error(f(60));
                        e.innerHTML = l;
                    }
                }
                break;
            case "children":
                typeof a == "string" ? Ia(e, a) : (typeof a == "number" || (typeof a === "undefined" ? "undefined" : _type_of(a)) == "bigint") && Ia(e, "" + a);
                break;
            case "onScroll":
                a != null && Ae("scroll", e);
                break;
            case "onScrollEnd":
                a != null && Ae("scrollend", e);
                break;
            case "onClick":
                a != null && (e.onclick = Al);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!fl.hasOwnProperty(l)) e: {
                    if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), i = e[$] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, n), typeof a == "function")) {
                        typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
                        break e;
                    }
                    l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Me(e, l, a);
                }
        }
    }
    function zt(e, t, l) {
        switch(t){
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                Ae("error", e), Ae("load", e);
                var a = !1, n = !1, i;
                for(i in l)if (l.hasOwnProperty(i)) {
                    var c = l[i];
                    if (c != null) switch(i){
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            n = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(f(137, t));
                        default:
                            Xe(e, t, i, c, l, null);
                    }
                }
                n && Xe(e, t, "srcSet", l.srcSet, l, null), a && Xe(e, t, "src", l.src, l, null);
                return;
            case "input":
                Ae("invalid", e);
                var h = i = c = n = null, p = null, _ = null;
                for(a in l)if (l.hasOwnProperty(a)) {
                    var w = l[a];
                    if (w != null) switch(a){
                        case "name":
                            n = w;
                            break;
                        case "type":
                            c = w;
                            break;
                        case "checked":
                            p = w;
                            break;
                        case "defaultChecked":
                            _ = w;
                            break;
                        case "value":
                            i = w;
                            break;
                        case "defaultValue":
                            h = w;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (w != null) throw Error(f(137, t));
                            break;
                        default:
                            Xe(e, t, a, w, l, null);
                    }
                }
                ro(e, i, h, p, _, c, n, !1);
                return;
            case "select":
                Ae("invalid", e), a = c = i = null;
                for(n in l)if (l.hasOwnProperty(n) && (h = l[n], h != null)) switch(n){
                    case "value":
                        i = h;
                        break;
                    case "defaultValue":
                        c = h;
                        break;
                    case "multiple":
                        a = h;
                    default:
                        Xe(e, t, n, h, l, null);
                }
                t = i, l = c, e.multiple = !!a, t != null ? Pa(e, !!a, t, !1) : l != null && Pa(e, !!a, l, !0);
                return;
            case "textarea":
                Ae("invalid", e), i = n = a = null;
                for(c in l)if (l.hasOwnProperty(c) && (h = l[c], h != null)) switch(c){
                    case "value":
                        a = h;
                        break;
                    case "defaultValue":
                        n = h;
                        break;
                    case "children":
                        i = h;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (h != null) throw Error(f(91));
                        break;
                    default:
                        Xe(e, t, c, h, l, null);
                }
                co(e, a, n, i);
                return;
            case "option":
                for(p in l)l.hasOwnProperty(p) && (a = l[p], a != null) && (p === "selected" ? e.selected = a && typeof a != "function" && (typeof a === "undefined" ? "undefined" : _type_of(a)) != "symbol" : Xe(e, t, p, a, l, null));
                return;
            case "dialog":
                Ae("beforetoggle", e), Ae("toggle", e), Ae("cancel", e), Ae("close", e);
                break;
            case "iframe":
            case "object":
                Ae("load", e);
                break;
            case "video":
            case "audio":
                for(a = 0; a < bu.length; a++)Ae(bu[a], e);
                break;
            case "image":
                Ae("error", e), Ae("load", e);
                break;
            case "details":
                Ae("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                Ae("error", e), Ae("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for(_ in l)if (l.hasOwnProperty(_) && (a = l[_], a != null)) switch(_){
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(f(137, t));
                    default:
                        Xe(e, t, _, a, l, null);
                }
                return;
            default:
                if (Mr(t)) {
                    for(w in l)l.hasOwnProperty(w) && (a = l[w], a !== void 0 && dc(e, t, w, a, l, void 0));
                    return;
                }
        }
        for(h in l)l.hasOwnProperty(h) && (a = l[h], a != null && Xe(e, t, h, a, l, null));
    }
    function Yv(e, t, l, a) {
        switch(t){
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var n = null, i = null, c = null, h = null, p = null, _ = null, w = null;
                for(H in l){
                    var q = l[H];
                    if (l.hasOwnProperty(H) && q != null) switch(H){
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            p = q;
                        default:
                            a.hasOwnProperty(H) || Xe(e, t, H, null, a, q);
                    }
                }
                for(var U in a){
                    var H = a[U];
                    if (q = l[U], a.hasOwnProperty(U) && (H != null || q != null)) switch(U){
                        case "type":
                            i = H;
                            break;
                        case "name":
                            n = H;
                            break;
                        case "checked":
                            _ = H;
                            break;
                        case "defaultChecked":
                            w = H;
                            break;
                        case "value":
                            c = H;
                            break;
                        case "defaultValue":
                            h = H;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (H != null) throw Error(f(137, t));
                            break;
                        default:
                            H !== q && Xe(e, t, U, H, a, q);
                    }
                }
                zr(e, c, h, p, _, w, i, n);
                return;
            case "select":
                H = c = h = U = null;
                for(i in l)if (p = l[i], l.hasOwnProperty(i) && p != null) switch(i){
                    case "value":
                        break;
                    case "multiple":
                        H = p;
                    default:
                        a.hasOwnProperty(i) || Xe(e, t, i, null, a, p);
                }
                for(n in a)if (i = a[n], p = l[n], a.hasOwnProperty(n) && (i != null || p != null)) switch(n){
                    case "value":
                        U = i;
                        break;
                    case "defaultValue":
                        h = i;
                        break;
                    case "multiple":
                        c = i;
                    default:
                        i !== p && Xe(e, t, n, i, a, p);
                }
                t = h, l = c, a = H, U != null ? Pa(e, !!l, U, !1) : !!a != !!l && (t != null ? Pa(e, !!l, t, !0) : Pa(e, !!l, l ? [] : "", !1));
                return;
            case "textarea":
                H = U = null;
                for(h in l)if (n = l[h], l.hasOwnProperty(h) && n != null && !a.hasOwnProperty(h)) switch(h){
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Xe(e, t, h, null, a, n);
                }
                for(c in a)if (n = a[c], i = l[c], a.hasOwnProperty(c) && (n != null || i != null)) switch(c){
                    case "value":
                        U = n;
                        break;
                    case "defaultValue":
                        H = n;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (n != null) throw Error(f(91));
                        break;
                    default:
                        n !== i && Xe(e, t, c, n, a, i);
                }
                fo(e, U, H);
                return;
            case "option":
                for(var P in l)U = l[P], l.hasOwnProperty(P) && U != null && !a.hasOwnProperty(P) && (P === "selected" ? e.selected = !1 : Xe(e, t, P, null, a, U));
                for(p in a)U = a[p], H = l[p], a.hasOwnProperty(p) && U !== H && (U != null || H != null) && (p === "selected" ? e.selected = U && typeof U != "function" && (typeof U === "undefined" ? "undefined" : _type_of(U)) != "symbol" : Xe(e, t, p, U, a, H));
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for(var se in l)U = l[se], l.hasOwnProperty(se) && U != null && !a.hasOwnProperty(se) && Xe(e, t, se, null, a, U);
                for(_ in a)if (U = a[_], H = l[_], a.hasOwnProperty(_) && U !== H && (U != null || H != null)) switch(_){
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (U != null) throw Error(f(137, t));
                        break;
                    default:
                        Xe(e, t, _, U, a, H);
                }
                return;
            default:
                if (Mr(t)) {
                    for(var Qe in l)U = l[Qe], l.hasOwnProperty(Qe) && U !== void 0 && !a.hasOwnProperty(Qe) && dc(e, t, Qe, void 0, a, U);
                    for(w in a)U = a[w], H = l[w], !a.hasOwnProperty(w) || U === H || U === void 0 && H === void 0 || dc(e, t, w, U, a, H);
                    return;
                }
        }
        for(var T in l)U = l[T], l.hasOwnProperty(T) && U != null && !a.hasOwnProperty(T) && Xe(e, t, T, null, a, U);
        for(q in a)U = a[q], H = l[q], !a.hasOwnProperty(q) || U === H || U == null && H == null || Xe(e, t, q, U, a, H);
    }
    function hh(e) {
        switch(e){
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1;
        }
    }
    function qv() {
        if (typeof performance.getEntriesByType == "function") {
            for(var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++){
                var n = l[a], i = n.transferSize, c = n.initiatorType, h = n.duration;
                if (i && h && hh(c)) {
                    for(c = 0, h = n.responseEnd, a += 1; a < l.length; a++){
                        var p = l[a], _ = p.startTime;
                        if (_ > h) break;
                        var w = p.transferSize, q = p.initiatorType;
                        w && hh(q) && (p = p.responseEnd, c += w * (p < h ? 1 : (h - _) / (p - _)));
                    }
                    if (--a, t += 8 * (i + c) / (n.duration / 1e3), e++, 10 < e) break;
                }
            }
            if (0 < e) return t / e / 1e6;
        }
        return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    var hc = null, mc = null;
    function Ji(e) {
        return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function mh(e) {
        switch(e){
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0;
        }
    }
    function yh(e, t) {
        if (e === 0) switch(t){
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0;
        }
        return e === 1 && t === "foreignObject" ? 0 : e;
    }
    function yc(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || _type_of(t.children) == "bigint" || _type_of(t.dangerouslySetInnerHTML) == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var vc = null;
    function Gv() {
        var e = window.event;
        return e && e.type === "popstate" ? e === vc ? !1 : (vc = e, !0) : (vc = null, !1);
    }
    var vh = typeof setTimeout == "function" ? setTimeout : void 0, Xv = typeof clearTimeout == "function" ? clearTimeout : void 0, gh = typeof Promise == "function" ? Promise : void 0, Qv = typeof queueMicrotask == "function" ? queueMicrotask : (typeof gh === "undefined" ? "undefined" : _type_of(gh)) < "u" ? function(e) {
        return gh.resolve(null).then(e).catch(Vv);
    } : vh;
    function Vv(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function ha(e) {
        return e === "head";
    }
    function ph(e, t) {
        var l = t, a = 0;
        do {
            var n = l.nextSibling;
            if (e.removeChild(l), n && n.nodeType === 8) if (l = n.data, l === "/$" || l === "/&") {
                if (a === 0) {
                    e.removeChild(n), Un(t);
                    return;
                }
                a--;
            } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
            else if (l === "html") Ru(e.ownerDocument.documentElement);
            else if (l === "head") {
                l = e.ownerDocument.head, Ru(l);
                for(var i = l.firstChild; i;){
                    var c = i.nextSibling, h = i.nodeName;
                    i[Te] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = c;
                }
            } else l === "body" && Ru(e.ownerDocument.body);
            l = n;
        }while (l);
        Un(t);
    }
    function Sh(e, t) {
        var l = e;
        e = 0;
        do {
            var a = l.nextSibling;
            if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8) if (l = a.data, l === "/$") {
                if (e === 0) break;
                e--;
            } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
            l = a;
        }while (l);
    }
    function gc(e) {
        var t = e.firstChild;
        for(t && t.nodeType === 10 && (t = t.nextSibling); t;){
            var l = t;
            switch(t = t.nextSibling, l.nodeName){
                case "HTML":
                case "HEAD":
                case "BODY":
                    gc(l), Ke(l);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (l.rel.toLowerCase() === "stylesheet") continue;
            }
            e.removeChild(l);
        }
    }
    function Zv(e, t, l, a) {
        for(; e.nodeType === 1;){
            var n = l;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
            } else if (a) {
                if (!e[Te]) switch(t){
                    case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case "link":
                        if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence")) break;
                        if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title)) break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case "script":
                        if (i = e.getAttribute("src"), (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                        return e;
                    default:
                        return e;
                }
            } else if (t === "input" && e.type === "hidden") {
                var i = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && e.getAttribute("name") === i) return e;
            } else return e;
            if (e = tl(e.nextSibling), e === null) break;
        }
        return null;
    }
    function Kv(e, t, l) {
        if (t === "") return null;
        for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = tl(e.nextSibling), e === null)) return null;
        return e;
    }
    function bh(e, t) {
        for(; e.nodeType !== 8;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = tl(e.nextSibling), e === null)) return null;
        return e;
    }
    function pc(e) {
        return e.data === "$?" || e.data === "$~";
    }
    function Sc(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
    }
    function Jv(e, t) {
        var l = e.ownerDocument;
        if (e.data === "$~") e._reactRetry = t;
        else if (e.data !== "$?" || l.readyState !== "loading") t();
        else {
            var a = function a1() {
                t(), l.removeEventListener("DOMContentLoaded", a);
            };
            l.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
        }
    }
    function tl(e) {
        for(; e != null; e = e.nextSibling){
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
                if (t === "/$" || t === "/&") return null;
            }
        }
        return e;
    }
    var bc = null;
    function Eh(e) {
        e = e.nextSibling;
        for(var t = 0; e;){
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "/$" || l === "/&") {
                    if (t === 0) return tl(e.nextSibling);
                    t--;
                } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
            }
            e = e.nextSibling;
        }
        return null;
    }
    function Rh(e) {
        e = e.previousSibling;
        for(var t = 0; e;){
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
                    if (t === 0) return e;
                    t--;
                } else l !== "/$" && l !== "/&" || t++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    function zh(e, t, l) {
        switch(t = Ji(l), e){
            case "html":
                if (e = t.documentElement, !e) throw Error(f(452));
                return e;
            case "head":
                if (e = t.head, !e) throw Error(f(453));
                return e;
            case "body":
                if (e = t.body, !e) throw Error(f(454));
                return e;
            default:
                throw Error(f(451));
        }
    }
    function Ru(e) {
        for(var t = e.attributes; t.length;)e.removeAttributeNode(t[0]);
        Ke(e);
    }
    var ll = new Map, Th = new Set;
    function Fi(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var Ql = Q.d;
    Q.d = {
        f: Fv,
        r: $v,
        D: Wv,
        C: kv,
        L: Pv,
        m: Iv,
        X: t0,
        S: e0,
        M: l0
    };
    function Fv() {
        var e = Ql.f(), t = Yi();
        return e || t;
    }
    function $v(e) {
        var t = lt(e);
        t !== null && t.tag === 5 && t.type === "form" ? Gs(t) : Ql.r(e);
    }
    var On = (typeof document === "undefined" ? "undefined" : _type_of(document)) > "u" ? null : document;
    function Mh(e, t, l) {
        var a = On;
        if (a && typeof t == "string" && t) {
            var n = Ft(t);
            n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Th.has(n) || (Th.add(n), e = {
                rel: e,
                crossOrigin: l,
                href: t
            }, a.querySelector(n) === null && (t = a.createElement("link"), zt(t, "link", e), Fe(t), a.head.appendChild(t)));
        }
    }
    function Wv(e) {
        Ql.D(e), Mh("dns-prefetch", e, null);
    }
    function kv(e, t) {
        Ql.C(e, t), Mh("preconnect", e, t);
    }
    function Pv(e, t, l) {
        Ql.L(e, t, l);
        var a = On;
        if (a && e && t) {
            var n = 'link[rel="preload"][as="' + Ft(t) + '"]';
            t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Ft(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Ft(l.imageSizes) + '"]')) : n += '[href="' + Ft(e) + '"]';
            var i = n;
            switch(t){
                case "style":
                    i = _n(e);
                    break;
                case "script":
                    i = Cn(e);
            }
            ll.has(i) || (e = E({
                rel: "preload",
                href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                as: t
            }, l), ll.set(i, e), a.querySelector(n) !== null || t === "style" && a.querySelector(zu(i)) || t === "script" && a.querySelector(Tu(i)) || (t = a.createElement("link"), zt(t, "link", e), Fe(t), a.head.appendChild(t)));
        }
    }
    function Iv(e, t) {
        Ql.m(e, t);
        var l = On;
        if (l && e) {
            var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Ft(a) + '"][href="' + Ft(e) + '"]', i = n;
            switch(a){
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    i = Cn(e);
            }
            if (!ll.has(i) && (e = E({
                rel: "modulepreload",
                href: e
            }, t), ll.set(i, e), l.querySelector(n) === null)) {
                switch(a){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (l.querySelector(Tu(i))) return;
                }
                a = l.createElement("link"), zt(a, "link", e), Fe(a), l.head.appendChild(a);
            }
        }
    }
    function e0(e, t, l) {
        Ql.S(e, t, l);
        var a = On;
        if (a && e) {
            var n = ct(a).hoistableStyles, i = _n(e);
            t = t || "default";
            var c = n.get(i);
            if (!c) {
                var h = {
                    loading: 0,
                    preload: null
                };
                if (c = a.querySelector(zu(i))) h.loading = 5;
                else {
                    e = E({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, l), (l = ll.get(i)) && Ec(e, l);
                    var p = c = a.createElement("link");
                    Fe(p), zt(p, "link", e), p._p = new Promise(function(_, w) {
                        p.onload = _, p.onerror = w;
                    }), p.addEventListener("load", function() {
                        h.loading |= 1;
                    }), p.addEventListener("error", function() {
                        h.loading |= 2;
                    }), h.loading |= 4, $i(c, t, a);
                }
                c = {
                    type: "stylesheet",
                    instance: c,
                    count: 1,
                    state: h
                }, n.set(i, c);
            }
        }
    }
    function t0(e, t) {
        Ql.X(e, t);
        var l = On;
        if (l && e) {
            var a = ct(l).hoistableScripts, n = Cn(e), i = a.get(n);
            i || (i = l.querySelector(Tu(n)), i || (e = E({
                src: e,
                async: !0
            }, t), (t = ll.get(n)) && Rc(e, t), i = l.createElement("script"), Fe(i), zt(i, "link", e), l.head.appendChild(i)), i = {
                type: "script",
                instance: i,
                count: 1,
                state: null
            }, a.set(n, i));
        }
    }
    function l0(e, t) {
        Ql.M(e, t);
        var l = On;
        if (l && e) {
            var a = ct(l).hoistableScripts, n = Cn(e), i = a.get(n);
            i || (i = l.querySelector(Tu(n)), i || (e = E({
                src: e,
                async: !0,
                type: "module"
            }, t), (t = ll.get(n)) && Rc(e, t), i = l.createElement("script"), Fe(i), zt(i, "link", e), l.head.appendChild(i)), i = {
                type: "script",
                instance: i,
                count: 1,
                state: null
            }, a.set(n, i));
        }
    }
    function Dh(e, t, l, a) {
        var n = (n = he.current) ? Fi(n) : null;
        if (!n) throw Error(f(446));
        switch(e){
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof l.precedence == "string" && typeof l.href == "string" ? (t = _n(l.href), l = ct(n).hoistableStyles, a = l.get(t), a || (a = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, l.set(t, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                    e = _n(l.href);
                    var i = ct(n).hoistableStyles, c = i.get(e);
                    if (c || (n = n.ownerDocument || n, c = {
                        type: "stylesheet",
                        instance: null,
                        count: 0,
                        state: {
                            loading: 0,
                            preload: null
                        }
                    }, i.set(e, c), (i = n.querySelector(zu(e))) && !i._p && (c.instance = i, c.state.loading = 5), ll.has(e) || (l = {
                        rel: "preload",
                        as: "style",
                        href: l.href,
                        crossOrigin: l.crossOrigin,
                        integrity: l.integrity,
                        media: l.media,
                        hrefLang: l.hrefLang,
                        referrerPolicy: l.referrerPolicy
                    }, ll.set(e, l), i || a0(n, e, l, c.state))), t && a === null) throw Error(f(528, ""));
                    return c;
                }
                if (t && a !== null) throw Error(f(529, ""));
                return null;
            case "script":
                return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && (typeof t === "undefined" ? "undefined" : _type_of(t)) != "symbol" ? (t = Cn(l), l = ct(n).hoistableScripts, a = l.get(t), a || (a = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, l.set(t, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(f(444, e));
        }
    }
    function _n(e) {
        return 'href="' + Ft(e) + '"';
    }
    function zu(e) {
        return 'link[rel="stylesheet"][' + e + "]";
    }
    function Ah(e) {
        return E({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        });
    }
    function a0(e, t, l, a) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
            return a.loading |= 1;
        }), t.addEventListener("error", function() {
            return a.loading |= 2;
        }), zt(t, "link", l), Fe(t), e.head.appendChild(t));
    }
    function Cn(e) {
        return '[src="' + Ft(e) + '"]';
    }
    function Tu(e) {
        return "script[async]" + e;
    }
    function Oh(e, t, l) {
        if (t.count++, t.instance === null) switch(t.type){
            case "style":
                var a = e.querySelector('style[data-href~="' + Ft(l.href) + '"]');
                if (a) return t.instance = a, Fe(a), a;
                var n = E({}, l, {
                    "data-href": l.href,
                    "data-precedence": l.precedence,
                    href: null,
                    precedence: null
                });
                return a = (e.ownerDocument || e).createElement("style"), Fe(a), zt(a, "style", n), $i(a, l.precedence, e), t.instance = a;
            case "stylesheet":
                n = _n(l.href);
                var i = e.querySelector(zu(n));
                if (i) return t.state.loading |= 4, t.instance = i, Fe(i), i;
                a = Ah(l), (n = ll.get(n)) && Ec(a, n), i = (e.ownerDocument || e).createElement("link"), Fe(i);
                var c = i;
                return c._p = new Promise(function(h, p) {
                    c.onload = h, c.onerror = p;
                }), zt(i, "link", a), t.state.loading |= 4, $i(i, l.precedence, e), t.instance = i;
            case "script":
                return i = Cn(l.src), (n = e.querySelector(Tu(i))) ? (t.instance = n, Fe(n), n) : (a = l, (n = ll.get(i)) && (a = E({}, l), Rc(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Fe(n), zt(n, "link", a), e.head.appendChild(n), t.instance = n);
            case "void":
                return null;
            default:
                throw Error(f(443, t.type));
        }
        else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, $i(a, l.precedence, e));
        return t.instance;
    }
    function $i(e, t, l) {
        for(var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, i = n, c = 0; c < a.length; c++){
            var h = a[c];
            if (h.dataset.precedence === t) i = h;
            else if (i !== n) break;
        }
        i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
    }
    function Ec(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function Rc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    var Wi = null;
    function _h(e, t, l) {
        if (Wi === null) {
            var a = new Map, n = Wi = new Map;
            n.set(l, a);
        } else n = Wi, a = n.get(l), a || (a = new Map, n.set(l, a));
        if (a.has(e)) return a;
        for(a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++){
            var i = l[n];
            if (!(i[Te] || i[F] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
                var c = i.getAttribute(t) || "";
                c = e + c;
                var h = a.get(c);
                h ? h.push(i) : a.set(c, [
                    i
                ]);
            }
        }
        return a;
    }
    function Ch(e, t, l) {
        e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
    }
    function n0(e, t, l) {
        if (l === 1 || t.itemProp != null) return !1;
        switch(e){
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
            case "script":
                if (t.async && typeof t.async != "function" && _type_of(t.async) != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
        }
        return !1;
    }
    function Uh(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
    }
    function u0(e, t, l, a) {
        if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
                var n = _n(a.href), i = t.querySelector(zu(n));
                if (i) {
                    t = i._p, t !== null && (typeof t === "undefined" ? "undefined" : _type_of(t)) == "object" && typeof t.then == "function" && (e.count++, e = ki.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, Fe(i);
                    return;
                }
                i = t.ownerDocument || t, a = Ah(a), (n = ll.get(n)) && Ec(a, n), i = i.createElement("link"), Fe(i);
                var c = i;
                c._p = new Promise(function(h, p) {
                    c.onload = h, c.onerror = p;
                }), zt(i, "link", a), l.instance = i;
            }
            e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = ki.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
        }
    }
    var zc = 0;
    function i0(e, t) {
        return e.stylesheets && e.count === 0 && Ii(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
            var a = setTimeout(function() {
                if (e.stylesheets && Ii(e, e.stylesheets), e.unsuspend) {
                    var i = e.unsuspend;
                    e.unsuspend = null, i();
                }
            }, 6e4 + t);
            0 < e.imgBytes && zc === 0 && (zc = 62500 * qv());
            var n = setTimeout(function() {
                if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ii(e, e.stylesheets), e.unsuspend)) {
                    var i = e.unsuspend;
                    e.unsuspend = null, i();
                }
            }, (e.imgBytes > zc ? 50 : 800) + t);
            return e.unsuspend = l, function() {
                e.unsuspend = null, clearTimeout(a), clearTimeout(n);
            };
        } : null;
    }
    function ki() {
        if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets) Ii(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e();
            }
        }
    }
    var Pi = null;
    function Ii(e, t) {
        e.stylesheets = null, e.unsuspend !== null && (e.count++, Pi = new Map, t.forEach(r0, e), Pi = null, ki.call(e));
    }
    function r0(e, t) {
        if (!(t.state.loading & 4)) {
            var l = Pi.get(e);
            if (l) var a = l.get(null);
            else {
                l = new Map, Pi.set(e, l);
                for(var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < n.length; i++){
                    var c = n[i];
                    (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), a = c);
                }
                a && l.set(null, a);
            }
            n = t.instance, c = n.getAttribute("data-precedence"), i = l.get(c) || a, i === a && l.set(null, n), l.set(c, n), this.count++, a = ki.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
        }
    }
    var Mu = {
        $$typeof: k,
        Provider: null,
        Consumer: null,
        _currentValue: ee,
        _currentValue2: ee,
        _threadCount: 0
    };
    function f0(e, t, l, a, n, i, c, h, p) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Fl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fl(0), this.hiddenUpdates = Fl(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = new Map;
    }
    function Nh(e, t, l, a, n, i, c, h, p, _, w, q) {
        return e = new f0(e, t, l, c, p, _, w, q, h), t = 1, i === !0 && (t |= 24), i = Yt(3, null, null, t), e.current = i, i.stateNode = e, t = tf(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
            element: a,
            isDehydrated: l,
            cache: t
        }, uf(i), e;
    }
    function xh(e) {
        return e ? (e = rn, e) : rn;
    }
    function Hh(e, t, l, a, n, i) {
        n = xh(n), a.context === null ? a.context = n : a.pendingContext = n, a = la(t), a.payload = {
            element: l
        }, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = aa(e, a, t), l !== null && (Bt(l, e, t), au(l, e, t));
    }
    function Lh(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var l = e.retryLane;
            e.retryLane = l !== 0 && l < t ? l : t;
        }
    }
    function Tc(e, t) {
        Lh(e, t), (e = e.alternate) && Lh(e, t);
    }
    function wh(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Ca(e, 67108864);
            t !== null && Bt(t, e, 67108864), Tc(e, 67108864);
        }
    }
    function Bh(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Vt();
            t = z(t);
            var l = Ca(e, t);
            l !== null && Bt(l, e, t), Tc(e, t);
        }
    }
    var er = !0;
    function c0(e, t, l, a) {
        var n = x.T;
        x.T = null;
        var i = Q.p;
        try {
            Q.p = 2, Mc(e, t, l, a);
        } finally{
            Q.p = i, x.T = n;
        }
    }
    function o0(e, t, l, a) {
        var n = x.T;
        x.T = null;
        var i = Q.p;
        try {
            Q.p = 8, Mc(e, t, l, a);
        } finally{
            Q.p = i, x.T = n;
        }
    }
    function Mc(e, t, l, a) {
        if (er) {
            var n = Dc(a);
            if (n === null) sc(e, t, a, tr, l), Yh(e, a);
            else if (d0(n, e, t, l, a)) a.stopPropagation();
            else if (Yh(e, a), t & 4 && -1 < s0.indexOf(e)) {
                for(; n !== null;){
                    var i = lt(n);
                    if (i !== null) switch(i.tag){
                        case 3:
                            if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                                var c = rl(i.pendingLanes);
                                if (c !== 0) {
                                    var h = i;
                                    for(h.pendingLanes |= 2, h.entangledLanes |= 2; c;){
                                        var p = 1 << 31 - Tt(c);
                                        h.entanglements[1] |= p, c &= ~p;
                                    }
                                    bl(i), (je & 6) === 0 && (Bi = Ot() + 500, Su(0));
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            h = Ca(i, 2), h !== null && Bt(h, i, 2), Yi(), Tc(i, 2);
                    }
                    if (i = Dc(a), i === null && sc(e, t, a, tr, l), i === n) break;
                    n = i;
                }
                n !== null && a.stopPropagation();
            } else sc(e, t, a, null, l);
        }
    }
    function Dc(e) {
        return e = Ar(e), Ac(e);
    }
    var tr = null;
    function Ac(e) {
        if (tr = null, e = $e(e), e !== null) {
            var t = d(e);
            if (t === null) e = null;
            else {
                var l = t.tag;
                if (l === 13) {
                    if (e = y(t), e !== null) return e;
                    e = null;
                } else if (l === 31) {
                    if (e = v(t), e !== null) return e;
                    e = null;
                } else if (l === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null;
                } else t !== e && (e = null);
            }
        }
        return tr = e, null;
    }
    function jh(e) {
        switch(e){
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch(Tl()){
                    case Zl:
                        return 2;
                    case qn:
                        return 8;
                    case Kl:
                    case il:
                        return 32;
                    case Jt:
                        return 268435456;
                    default:
                        return 32;
                }
            default:
                return 32;
        }
    }
    var Oc = !1, ma = null, ya = null, va = null, Du = new Map, Au = new Map, ga = [], s0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Yh(e, t) {
        switch(e){
            case "focusin":
            case "focusout":
                ma = null;
                break;
            case "dragenter":
            case "dragleave":
                ya = null;
                break;
            case "mouseover":
            case "mouseout":
                va = null;
                break;
            case "pointerover":
            case "pointerout":
                Du.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Au.delete(t.pointerId);
        }
    }
    function Ou(e, t, l, a, n, i) {
        return e === null || e.nativeEvent !== i ? (e = {
            blockedOn: t,
            domEventName: l,
            eventSystemFlags: a,
            nativeEvent: i,
            targetContainers: [
                n
            ]
        }, t !== null && (t = lt(t), t !== null && wh(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
    }
    function d0(e, t, l, a, n) {
        switch(t){
            case "focusin":
                return ma = Ou(ma, e, t, l, a, n), !0;
            case "dragenter":
                return ya = Ou(ya, e, t, l, a, n), !0;
            case "mouseover":
                return va = Ou(va, e, t, l, a, n), !0;
            case "pointerover":
                var i = n.pointerId;
                return Du.set(i, Ou(Du.get(i) || null, e, t, l, a, n)), !0;
            case "gotpointercapture":
                return i = n.pointerId, Au.set(i, Ou(Au.get(i) || null, e, t, l, a, n)), !0;
        }
        return !1;
    }
    function qh(e) {
        var t = $e(e.target);
        if (t !== null) {
            var l = d(t);
            if (l !== null) {
                if (t = l.tag, t === 13) {
                    if (t = y(l), t !== null) {
                        e.blockedOn = t, Z(e.priority, function() {
                            Bh(l);
                        });
                        return;
                    }
                } else if (t === 31) {
                    if (t = v(l), t !== null) {
                        e.blockedOn = t, Z(e.priority, function() {
                            Bh(l);
                        });
                        return;
                    }
                } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function lr(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var l = Dc(e.nativeEvent);
            if (l === null) {
                l = e.nativeEvent;
                var a = new l.constructor(l.type, l);
                Dr = a, l.target.dispatchEvent(a), Dr = null;
            } else return t = lt(l), t !== null && wh(t), e.blockedOn = l, !1;
            t.shift();
        }
        return !0;
    }
    function Gh(e, t, l) {
        lr(e) && l.delete(t);
    }
    function h0() {
        Oc = !1, ma !== null && lr(ma) && (ma = null), ya !== null && lr(ya) && (ya = null), va !== null && lr(va) && (va = null), Du.forEach(Gh), Au.forEach(Gh);
    }
    function ar(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Oc || (Oc = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, h0)));
    }
    var nr = null;
    function Xh(e) {
        nr !== e && (nr = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
            nr === e && (nr = null);
            for(var t = 0; t < e.length; t += 3){
                var l = e[t], a = e[t + 1], n = e[t + 2];
                if (typeof a != "function") {
                    if (Ac(a || l) === null) continue;
                    break;
                }
                var i = lt(l);
                i !== null && (e.splice(t, 3), t -= 3, Df(i, {
                    pending: !0,
                    data: n,
                    method: l.method,
                    action: a
                }, a, n));
            }
        }));
    }
    function Un(e) {
        function t(p) {
            return ar(p, e);
        }
        ma !== null && ar(ma, e), ya !== null && ar(ya, e), va !== null && ar(va, e), Du.forEach(t), Au.forEach(t);
        for(var l = 0; l < ga.length; l++){
            var a = ga[l];
            a.blockedOn === e && (a.blockedOn = null);
        }
        for(; 0 < ga.length && (l = ga[0], l.blockedOn === null);)qh(l), l.blockedOn === null && ga.shift();
        if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for(a = 0; a < l.length; a += 3){
            var n = l[a], i = l[a + 1], c = n[$] || null;
            if (typeof i == "function") c || Xh(l);
            else if (c) {
                var h = null;
                if (i && i.hasAttribute("formAction")) {
                    if (n = i, c = i[$] || null) h = c.formAction;
                    else if (Ac(n) !== null) continue;
                } else h = c.action;
                typeof h == "function" ? l[a + 1] = h : (l.splice(a, 3), a -= 3), Xh(l);
            }
        }
    }
    function Qh() {
        function e(i) {
            i.canIntercept && i.info === "react-transition" && i.intercept({
                handler: function handler() {
                    return new Promise(function(c) {
                        return n = c;
                    });
                },
                focusReset: "manual",
                scroll: "manual"
            });
        }
        function t() {
            n !== null && (n(), n = null), a || setTimeout(l, 20);
        }
        function l() {
            if (!a && !navigation.transition) {
                var i = navigation.currentEntry;
                i && i.url != null && navigation.navigate(i.url, {
                    state: i.getState(),
                    info: "react-transition",
                    history: "replace"
                });
            }
        }
        if ((typeof navigation === "undefined" ? "undefined" : _type_of(navigation)) == "object") {
            var a = !1, n = null;
            return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
                a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
            };
        }
    }
    function _c(e) {
        this._internalRoot = e;
    }
    ur.prototype.render = _c.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(f(409));
        var l = t.current, a = Vt();
        Hh(l, a, e, t, null, null);
    }, ur.prototype.unmount = _c.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Hh(e.current, 2, null, e, null, null), Yi(), t[le] = null;
        }
    };
    function ur(e) {
        this._internalRoot = e;
    }
    ur.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = G();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var l = 0; l < ga.length && t !== 0 && t < ga[l].priority; l++);
            ga.splice(l, 0, e), l === 0 && qh(e);
        }
    };
    var Vh = r.version;
    if (Vh !== "19.2.4") throw Error(f(527, Vh, "19.2.4"));
    Q.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
        return e = m(t), e = e !== null ? M(e) : null, e = e === null ? null : e.stateNode, e;
    };
    var m0 = {
        bundleType: 0,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: x,
        reconcilerVersion: "19.2.4"
    };
    if ((typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _type_of(__REACT_DEVTOOLS_GLOBAL_HOOK__)) < "u") {
        var ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ir.isDisabled && ir.supportsFiber) try {
            Ml = ir.inject(m0), _t = ir;
        } catch (unused) {}
    }
    return Cu.createRoot = function(e, t) {
        if (!s(e)) throw Error(f(299));
        var l = !1, a = "", n = ks, i = Ps, c = Is;
        return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = Nh(e, 1, !1, null, null, l, a, null, n, i, c, Qh), e[le] = t.current, oc(e), new _c(t);
    }, Cu.hydrateRoot = function(e, t, l) {
        if (!s(e)) throw Error(f(299));
        var a = !1, n = "", i = ks, c = Ps, h = Is, p = null;
        return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (h = l.onRecoverableError), l.formState !== void 0 && (p = l.formState)), t = Nh(e, 1, !0, t, l !== null && l !== void 0 ? l : null, a, n, p, i, c, h, Qh), t.context = xh(null), l = t.current, a = Vt(), a = z(a), n = la(a), n.callback = null, aa(l, n, a), l = a, t.current.lanes = l, ml(t, l), bl(t), e[le] = t.current, oc(e), new ur(t);
    }, Cu.version = "19.2.4", Cu;
}
var em;
function D0() {
    if (em) return Nc.exports;
    em = 1;
    function u() {
        if (!((typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _type_of(__REACT_DEVTOOLS_GLOBAL_HOOK__)) > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
        } catch (r) {
            console.error(r);
        }
    }
    return u(), Nc.exports = M0(), Nc.exports;
}
var Pp = D0(), Um = Cm();
var A0 = Fc(Um), Ip = Jc({
    __proto__: null,
    default: A0
}, [
    Um
]);
var Nm = function Nm(u) {
    throw TypeError(u);
}, O0 = function O0(u, r, o) {
    return r.has(u) || Nm("Cannot " + o);
}, wc = function wc(u, r, o) {
    return O0(u, r, "read from private field"), o ? o.call(u) : r.get(u);
}, _0 = function _0(u, r, o) {
    return r.has(u) ? Nm("Cannot add the same private member more than once") : _instanceof1(r, WeakSet) ? r.add(u) : r.set(u, o);
};
function tm(u) {
    return (typeof u === "undefined" ? "undefined" : _type_of(u)) == "object" && u != null && "pathname" in u && "search" in u && "hash" in u && "state" in u && "key" in u;
}
function C0() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var tmp = u.initialEntries, r = tmp === void 0 ? [
        "/"
    ] : tmp, o = u.initialIndex, tmp1 = u.v5Compat, f = tmp1 === void 0 ? !1 : tmp1, s;
    s = r.map(function(A, Y) {
        return M(A, typeof A == "string" ? null : A.state, Y === 0 ? "default" : void 0, typeof A == "string" ? void 0 : A.unstable_mask);
    });
    var d = g(o !== null && o !== void 0 ? o : s.length - 1), y = "POP", v = null;
    function g(A) {
        return Math.min(Math.max(A, 0), s.length - 1);
    }
    function m() {
        return s[d];
    }
    function M(A) {
        var Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, X = arguments.length > 2 ? arguments[2] : void 0, K = arguments.length > 3 ? arguments[3] : void 0;
        var ie = Xc(s ? m().pathname : "/", A, Y, X, K);
        return et(ie.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: ".concat(JSON.stringify(A))), ie;
    }
    function E(A) {
        return typeof A == "string" ? A : El(A);
    }
    return {
        get index () {
            return d;
        },
        get action () {
            return y;
        },
        get location () {
            return m();
        },
        createHref: E,
        createURL: function createURL(A) {
            return new URL(E(A), "http://localhost");
        },
        encodeLocation: function encodeLocation(A) {
            var Y = typeof A == "string" ? hl(A) : A;
            return {
                pathname: Y.pathname || "",
                search: Y.search || "",
                hash: Y.hash || ""
            };
        },
        push: function push(A, Y) {
            y = "PUSH";
            var X = tm(A) ? A : M(A, Y);
            d += 1, s.splice(d, s.length, X), f && v && v({
                action: y,
                location: X,
                delta: 1
            });
        },
        replace: function replace(A, Y) {
            y = "REPLACE";
            var X = tm(A) ? A : M(A, Y);
            s[d] = X, f && v && v({
                action: y,
                location: X,
                delta: 0
            });
        },
        go: function go(A) {
            y = "POP";
            var Y = g(d + A), X = s[Y];
            d = Y, v && v({
                action: y,
                location: X,
                delta: A
            });
        },
        listen: function listen(A) {
            return v = A, function() {
                v = null;
            };
        }
    };
}
function Re(u, r) {
    if (u === !1 || u === null || (typeof u === "undefined" ? "undefined" : _type_of(u)) > "u") throw new Error(r);
}
function et(u, r) {
    if (!u) {
        (typeof console === "undefined" ? "undefined" : _type_of(console)) < "u" && console.warn(r);
        try {
            throw new Error(r);
        } catch (unused) {}
    }
}
function U0() {
    return Math.random().toString(36).substring(2, 10);
}
function Xc(u, r) {
    var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, f = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0;
    return _object_spread_props(_object_spread({
        pathname: typeof u == "string" ? u : u.pathname,
        search: "",
        hash: ""
    }, typeof r == "string" ? hl(r) : r), {
        state: o,
        key: r && r.key || f || U0(),
        unstable_mask: s
    });
}
function El(param) {
    var tmp = param.pathname, u = tmp === void 0 ? "/" : tmp, tmp1 = param.search, r = tmp1 === void 0 ? "" : tmp1, tmp2 = param.hash, o = tmp2 === void 0 ? "" : tmp2;
    return r && r !== "?" && (u += r.charAt(0) === "?" ? r : "?" + r), o && o !== "#" && (u += o.charAt(0) === "#" ? o : "#" + o), u;
}
function hl(u) {
    var r = {};
    if (u) {
        var o = u.indexOf("#");
        o >= 0 && (r.hash = u.substring(o), u = u.substring(0, o));
        var f = u.indexOf("?");
        f >= 0 && (r.search = u.substring(f), u = u.substring(0, f)), u && (r.pathname = u);
    }
    return r;
}
function N0(u) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    var o = "http://localhost";
    (typeof window === "undefined" ? "undefined" : _type_of(window)) < "u" && (o = window.location.origin !== "null" ? window.location.origin : window.location.href), Re(o, "No window.location.(origin|href) available to create URL");
    var f = typeof u == "string" ? u : El(u);
    return f = f.replace(/ $/, "%20"), !r && f.startsWith("//") && (f = o + f), new URL(f, o);
}
var Hu, lm = /*#__PURE__*/ function() {
    "use strict";
    function lm(u) {
        _class_call_check(this, lm);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        if (_0(this, Hu, new Map), u) try {
            for(var _iterator = u[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), r = _step_value[0], o = _step_value[1];
                this.set(r, o);
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
    _create_class(lm, [
        {
            key: "get",
            value: function get(u) {
                if (wc(this, Hu).has(u)) return wc(this, Hu).get(u);
                if (u.defaultValue !== void 0) return u.defaultValue;
                throw new Error("No value found for context");
            }
        },
        {
            key: "set",
            value: function set(u, r) {
                wc(this, Hu).set(u, r);
            }
        }
    ]);
    return lm;
}();
Hu = new WeakMap;
var x0 = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children"
]);
function H0(u) {
    return x0.has(u);
}
var L0 = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "middleware",
    "children"
]);
function w0(u) {
    return L0.has(u);
}
function B0(u) {
    return u.index === !0;
}
function Bu(u, r) {
    var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    return u.map(function(d, y) {
        var v = _to_consumable_array(o).concat([
            String(y)
        ]), g = typeof d.id == "string" ? d.id : v.join("-");
        if (Re(d.index !== !0 || !d.children, "Cannot specify children on an index route"), Re(s || !f[g], 'Found a route id collision on id "'.concat(g, "\".  Route id's must be globally unique within Data Router usages")), B0(d)) {
            var m = _object_spread_props(_object_spread({}, d), {
                id: g
            });
            return f[g] = am(m, r(m)), m;
        } else {
            var m1 = _object_spread_props(_object_spread({}, d), {
                id: g,
                children: void 0
            });
            return f[g] = am(m1, r(m1)), d.children && (m1.children = Bu(d.children, r, v, f, s)), m1;
        }
    });
}
function am(u, r) {
    return Object.assign(u, _object_spread({}, r, _type_of(r.lazy) == "object" && r.lazy != null ? {
        lazy: _object_spread({}, u.lazy, r.lazy)
    } : {}));
}
function Sa(u, r) {
    var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "/";
    return Lu(u, r, o, !1);
}
function Lu(u, r, o, f) {
    var s = typeof r == "string" ? hl(r) : r, d = nl(s.pathname || "/", o);
    if (d == null) return null;
    var y = xm(u);
    Y0(y);
    var v = null;
    for(var g = 0; v == null && g < y.length; ++g){
        var m = W0(d);
        v = F0(y[g], m, f);
    }
    return v;
}
function j0(u, r) {
    var o = u.route, f = u.pathname, s = u.params;
    return {
        id: o.id,
        pathname: f,
        params: s,
        data: r[o.id],
        loaderData: r[o.id],
        handle: o.handle
    };
}
function xm(u) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    var d = function d(y, v) {
        var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : s, m = arguments.length > 3 ? arguments[3] : void 0;
        var M = {
            relativePath: m === void 0 ? y.path || "" : m,
            caseSensitive: y.caseSensitive === !0,
            childrenIndex: v,
            route: y
        };
        if (M.relativePath.startsWith("/")) {
            if (!M.relativePath.startsWith(f) && g) return;
            Re(M.relativePath.startsWith(f), 'Absolute route path "'.concat(M.relativePath, '" nested under path "').concat(f, '" is not valid. An absolute child route path must start with the combined path of all its parent routes.')), M.relativePath = M.relativePath.slice(f.length);
        }
        var E = dl([
            f,
            M.relativePath
        ]), L = o.concat(M);
        y.children && y.children.length > 0 && (Re(y.index !== !0, 'Index routes must not have child routes. Please remove all child routes from route path "'.concat(E, '".')), xm(y.children, r, L, E, g)), !(y.path == null && !y.index) && r.push({
            path: E,
            score: K0(E, y.index),
            routesMeta: L
        });
    };
    return u.forEach(function(y, v) {
        var _y_path;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        if (y.path === "" || !((_y_path = y.path) === null || _y_path === void 0 ? void 0 : _y_path.includes("?"))) d(y, v);
        else try {
            for(var _iterator = Hm(y.path)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var g = _step.value;
                d(y, v, !0, g);
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
    }), r;
}
function Hm(u) {
    var _v, _v1;
    var r = u.split("/");
    if (r.length === 0) return [];
    var _r = _to_array(r), o = _r[0], f = _r.slice(1), s = o.endsWith("?"), d = o.replace(/\?$/, "");
    if (f.length === 0) return s ? [
        d,
        ""
    ] : [
        d
    ];
    var y = Hm(f.join("/")), v = [];
    return (_v = v).push.apply(_v, _to_consumable_array(y.map(function(g) {
        return g === "" ? d : [
            d,
            g
        ].join("/");
    }))), s && (_v1 = v).push.apply(_v1, _to_consumable_array(y)), v.map(function(g) {
        return u.startsWith("/") && g === "" ? "/" : g;
    });
}
function Y0(u) {
    u.sort(function(r, o) {
        return r.score !== o.score ? o.score - r.score : J0(r.routesMeta.map(function(f) {
            return f.childrenIndex;
        }), o.routesMeta.map(function(f) {
            return f.childrenIndex;
        }));
    });
}
var q0 = /^:[\w-]+$/, G0 = 3, X0 = 2, Q0 = 1, V0 = 10, Z0 = -2, nm = function nm(u) {
    return u === "*";
};
function K0(u, r) {
    var o = u.split("/"), f = o.length;
    return o.some(nm) && (f += Z0), r && (f += X0), o.filter(function(s) {
        return !nm(s);
    }).reduce(function(s, d) {
        return s + (q0.test(d) ? G0 : d === "" ? Q0 : V0);
    }, f);
}
function J0(u, r) {
    return u.length === r.length && u.slice(0, -1).every(function(f, s) {
        return f === r[s];
    }) ? u[u.length - 1] - r[r.length - 1] : 0;
}
function F0(u, r) {
    var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    var f = u.routesMeta, s = {}, d = "/", y = [];
    for(var v = 0; v < f.length; ++v){
        var g = f[v], m = v === f.length - 1, M = d === "/" ? r : r.slice(d.length) || "/", E = hr({
            path: g.relativePath,
            caseSensitive: g.caseSensitive,
            end: m
        }, M), L = g.route;
        if (!E && m && o && !f[f.length - 1].route.index && (E = hr({
            path: g.relativePath,
            caseSensitive: g.caseSensitive,
            end: !1
        }, M)), !E) return null;
        Object.assign(s, E.params), y.push({
            params: s,
            pathname: dl([
                d,
                E.pathname
            ]),
            pathnameBase: I0(dl([
                d,
                E.pathnameBase
            ])),
            route: L
        }), E.pathnameBase !== "/" && (d = dl([
            d,
            E.pathnameBase
        ]));
    }
    return y;
}
function hr(u, r) {
    typeof u == "string" && (u = {
        path: u,
        caseSensitive: !1,
        end: !0
    });
    var _$0 = _sliced_to_array($0(u.path, u.caseSensitive, u.end), 2), o = _$0[0], f = _$0[1], s = r.match(o);
    if (!s) return null;
    var d = s[0], y = d.replace(/(.)\/+$/, "$1"), v = s.slice(1);
    return {
        params: f.reduce(function(m, param, L) {
            var M = param.paramName, E = param.isOptional;
            if (M === "*") {
                var Y = v[L] || "";
                y = d.slice(0, d.length - Y.length).replace(/(.)\/+$/, "$1");
            }
            var A = v[L];
            return E && !A ? m[M] = void 0 : m[M] = (A || "").replace(/%2F/g, "/"), m;
        }, {}),
        pathname: d,
        pathnameBase: y,
        pattern: u
    };
}
function $0(u) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    et(u === "*" || !u.endsWith("*") || u.endsWith("/*"), 'Route path "'.concat(u, '" will be treated as if it were "').concat(u.replace(/\*$/, "/*"), '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "').concat(u.replace(/\*$/, "/*"), '".'));
    var f = [], s = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, function(y, v, g, m, M) {
        if (f.push({
            paramName: v,
            isOptional: g != null
        }), g) {
            var E = M.charAt(m + y.length);
            return E && E !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
        }
        return "/([^\\/]+)";
    }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return u.endsWith("*") ? (f.push({
        paramName: "*"
    }), s += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? s += "\\/*$" : u !== "" && u !== "/" && (s += "(?:(?=\\/|$))"), [
        new RegExp(s, r ? void 0 : "i"),
        f
    ];
}
function W0(u) {
    try {
        return u.split("/").map(function(r) {
            return decodeURIComponent(r).replace(/\//g, "%2F");
        }).join("/");
    } catch (r) {
        return et(!1, 'The URL path "'.concat(u, '" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (').concat(r, ").")), u;
    }
}
function nl(u, r) {
    if (r === "/") return u;
    if (!u.toLowerCase().startsWith(r.toLowerCase())) return null;
    var o = r.endsWith("/") ? r.length - 1 : r.length, f = u.charAt(o);
    return f && f !== "/" ? null : u.slice(o) || "/";
}
function k0(param) {
    var u = param.basename, r = param.pathname;
    return r === "/" ? u : dl([
        u,
        r
    ]);
}
var Lm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Wc = function Wc(u) {
    return Lm.test(u);
};
function P0(u) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "/";
    var _ref = typeof u == "string" ? hl(u) : u, o = _ref.pathname, tmp = _ref.search, f = tmp === void 0 ? "" : tmp, tmp1 = _ref.hash, s = tmp1 === void 0 ? "" : tmp1, d;
    return o ? (o = o.replace(/\/\/+/g, "/"), o.startsWith("/") ? d = um(o.substring(1), "/") : d = um(o, r)) : d = r, {
        pathname: d,
        search: eg(f),
        hash: tg(s)
    };
}
function um(u, r) {
    var o = r.replace(/\/+$/, "").split("/");
    return u.split("/").forEach(function(s) {
        s === ".." ? o.length > 1 && o.pop() : s !== "." && o.push(s);
    }), o.length > 1 ? o.join("/") : "/";
}
function Bc(u, r, o, f) {
    return "Cannot include a '".concat(u, "' character in a manually specified `to.").concat(r, "` field [").concat(JSON.stringify(f), "].  Please separate it out to the `to.").concat(o, '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.');
}
function wm(u) {
    return u.filter(function(r, o) {
        return o === 0 || r.route.path && r.route.path.length > 0;
    });
}
function mr(u) {
    var r = wm(u);
    return r.map(function(o, f) {
        return f === r.length - 1 ? o.pathname : o.pathnameBase;
    });
}
function Yu(u, r, o) {
    var f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    var s;
    typeof u == "string" ? s = hl(u) : (s = _object_spread({}, u), Re(!s.pathname || !s.pathname.includes("?"), Bc("?", "pathname", "search", s)), Re(!s.pathname || !s.pathname.includes("#"), Bc("#", "pathname", "hash", s)), Re(!s.search || !s.search.includes("#"), Bc("#", "search", "hash", s)));
    var d = u === "" || s.pathname === "", y = d ? "/" : s.pathname, v;
    if (y == null) v = o;
    else {
        var E = r.length - 1;
        if (!f && y.startsWith("..")) {
            var L = y.split("/");
            for(; L[0] === "..";)L.shift(), E -= 1;
            s.pathname = L.join("/");
        }
        v = E >= 0 ? r[E] : "/";
    }
    var g = P0(s, v), m = y && y !== "/" && y.endsWith("/"), M = (d || y === ".") && o.endsWith("/");
    return !g.pathname.endsWith("/") && (m || M) && (g.pathname += "/"), g;
}
var dl = function dl(u) {
    return u.join("/").replace(/\/\/+/g, "/");
}, I0 = function I0(u) {
    return u.replace(/\/+$/, "").replace(/^\/*/, "/");
}, eg = function eg(u) {
    return !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u;
}, tg = function tg(u) {
    return !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u;
}, yr = function yr(u, r, o) {
    "use strict";
    var f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    _class_call_check(this, yr);
    this.status = u, this.statusText = r || "", this.internal = f, _instanceof1(o, Error) ? (this.data = o.toString(), this.error = o) : this.data = o;
};
function ju(u) {
    return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
}
function qu(u) {
    return u.map(function(r) {
        return r.route.path;
    }).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var Bm = (typeof window === "undefined" ? "undefined" : _type_of(window)) < "u" && _type_of(window.document) < "u" && _type_of(window.document.createElement) < "u";
function jm(u, r) {
    var o = u;
    if (typeof o != "string" || !Lm.test(o)) return {
        absoluteURL: void 0,
        isExternal: !1,
        to: o
    };
    var f = o, s = !1;
    if (Bm) try {
        var d = new URL(window.location.href), y = o.startsWith("//") ? new URL(d.protocol + o) : new URL(o), v = nl(y.pathname, r);
        y.origin === d.origin && v != null ? o = v + y.search + y.hash : s = !0;
    } catch (unused) {
        et(!1, '<Link to="'.concat(o, '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.'));
    }
    return {
        absoluteURL: f,
        isExternal: s,
        to: o
    };
}
var Ea = Symbol("Uninstrumented");
function lg(u, r) {
    var o = {
        lazy: [],
        "lazy.loader": [],
        "lazy.action": [],
        "lazy.middleware": [],
        middleware: [],
        loader: [],
        action: []
    };
    u.forEach(function(s) {
        return s({
            id: r.id,
            index: r.index,
            path: r.path,
            instrument: function instrument(d) {
                var y = Object.keys(o);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = y[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var v = _step.value;
                        d[v] && o[v].push(d[v]);
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
        });
    });
    var f = {};
    if (typeof r.lazy == "function" && o.lazy.length > 0) {
        var s = xn(o.lazy, r.lazy, function() {});
        s && (f.lazy = s);
    }
    if (_type_of(r.lazy) == "object") {
        var s1 = r.lazy;
        [
            "middleware",
            "loader",
            "action"
        ].forEach(function(d) {
            var y = s1[d], v = o["lazy.".concat(d)];
            if (typeof y == "function" && v.length > 0) {
                var g = xn(v, y, function() {});
                g && (f.lazy = Object.assign(f.lazy || {}, _define_property({}, d, g)));
            }
        });
    }
    return [
        "loader",
        "action"
    ].forEach(function(s) {
        var d = r[s];
        if (typeof d == "function" && o[s].length > 0) {
            var _d_Ea;
            var y = (_d_Ea = d[Ea]) !== null && _d_Ea !== void 0 ? _d_Ea : d, v = xn(o[s], y, function() {
                for(var _len = arguments.length, g = new Array(_len), _key = 0; _key < _len; _key++){
                    g[_key] = arguments[_key];
                }
                return im(g[0]);
            });
            v && (s === "loader" && y.hydrate === !0 && (v.hydrate = !0), v[Ea] = y, f[s] = v);
        }
    }), r.middleware && r.middleware.length > 0 && o.middleware.length > 0 && (f.middleware = r.middleware.map(function(s) {
        var _s_Ea;
        var d = (_s_Ea = s[Ea]) !== null && _s_Ea !== void 0 ? _s_Ea : s, y = xn(o.middleware, d, function() {
            for(var _len = arguments.length, v = new Array(_len), _key = 0; _key < _len; _key++){
                v[_key] = arguments[_key];
            }
            return im(v[0]);
        });
        return y ? (y[Ea] = d, y) : s;
    })), f;
}
function ag(u, r) {
    var o = {
        navigate: [],
        fetch: []
    };
    if (r.forEach(function(f) {
        return f({
            instrument: function instrument(s) {
                var d = Object.keys(s);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = d[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var y = _step.value;
                        s[y] && o[y].push(s[y]);
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
        });
    }), o.navigate.length > 0) {
        var _u_navigate_Ea;
        var f = (_u_navigate_Ea = u.navigate[Ea]) !== null && _u_navigate_Ea !== void 0 ? _u_navigate_Ea : u.navigate, s = xn(o.navigate, f, function() {
            for(var _len = arguments.length, d = new Array(_len), _key = 0; _key < _len; _key++){
                d[_key] = arguments[_key];
            }
            var _d = _sliced_to_array(d, 2), y = _d[0], v = _d[1];
            return _object_spread({
                to: typeof y == "number" || typeof y == "string" ? y : y ? El(y) : "."
            }, rm(u, v !== null && v !== void 0 ? v : {}));
        });
        s && (s[Ea] = f, u.navigate = s);
    }
    if (o.fetch.length > 0) {
        var _u_fetch_Ea;
        var f1 = (_u_fetch_Ea = u.fetch[Ea]) !== null && _u_fetch_Ea !== void 0 ? _u_fetch_Ea : u.fetch, s1 = xn(o.fetch, f1, function() {
            for(var _len = arguments.length, d = new Array(_len), _key = 0; _key < _len; _key++){
                d[_key] = arguments[_key];
            }
            var _d = _sliced_to_array(d, 4), y = _d[0], v = _d[2], g = _d[3];
            return _object_spread({
                href: v !== null && v !== void 0 ? v : ".",
                fetcherKey: y
            }, rm(u, g !== null && g !== void 0 ? g : {}));
        });
        s1 && (s1[Ea] = f1, u.fetch = s1);
    }
    return u;
}
function xn(u, r, o) {
    return u.length === 0 ? null : function() {
        for(var _len = arguments.length, f = new Array(_len), _key = 0; _key < _len; _key++){
            f[_key] = arguments[_key];
        }
        return _async_to_generator(function() {
            var s;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            Ym(u, o.apply(void 0, _to_consumable_array(f)), function() {
                                return r.apply(void 0, _to_consumable_array(f));
                            }, u.length - 1)
                        ];
                    case 1:
                        s = _state.sent();
                        if (s.type === "error") throw s.value;
                        return [
                            2,
                            s.value
                        ];
                }
            });
        })();
    };
}
function Ym(u, r, o, f) {
    return _async_to_generator(function() {
        var s, d, _$y, v, g, _tmp, _tmp1, y;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    s = u[f];
                    if (!s) return [
                        3,
                        8
                    ];
                    v = function v() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        _$y ? console.error("You cannot call instrumented handlers more than once") : _$y = Ym(u, r, o, f - 1);
                                        return [
                                            4,
                                            _$y
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            (d = _state.sent(), Re(d, "Expected a result"), d.type === "error" && _instanceof1(d.value, Error) ? {
                                                status: "error",
                                                error: d.value
                                            } : {
                                                status: "success",
                                                error: void 0
                                            })
                                        ];
                                }
                            });
                        })();
                    };
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        s(v, r)
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    g = _state.sent();
                    console.error("An instrumentation function threw an error:", g);
                    return [
                        3,
                        4
                    ];
                case 4:
                    _tmp = _$y;
                    if (_tmp) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        v()
                    ];
                case 5:
                    _tmp = _state.sent();
                    _state.label = 6;
                case 6:
                    _tmp;
                    return [
                        4,
                        _$y
                    ];
                case 7:
                    _state.sent();
                    return [
                        3,
                        11
                    ];
                case 8:
                    _state.trys.push([
                        8,
                        10,
                        ,
                        11
                    ]);
                    _tmp1 = {
                        type: "success"
                    };
                    return [
                        4,
                        o()
                    ];
                case 9:
                    d = (_tmp1.value = _state.sent(), _tmp1);
                    return [
                        3,
                        11
                    ];
                case 10:
                    y = _state.sent();
                    d = {
                        type: "error",
                        value: y
                    };
                    return [
                        3,
                        11
                    ];
                case 11:
                    return [
                        2,
                        d || {
                            type: "error",
                            value: new Error("No result assigned in instrumentation chain.")
                        }
                    ];
            }
        });
    })();
}
function im(u) {
    var r = u.request, o = u.context, f = u.params, s = u.unstable_pattern;
    return {
        request: ng(r),
        params: _object_spread({}, f),
        unstable_pattern: s,
        context: ug(o)
    };
}
function rm(u, r) {
    return _object_spread({
        currentUrl: El(u.state.location)
    }, "formMethod" in r ? {
        formMethod: r.formMethod
    } : {}, "formEncType" in r ? {
        formEncType: r.formEncType
    } : {}, "formData" in r ? {
        formData: r.formData
    } : {}, "body" in r ? {
        body: r.body
    } : {});
}
function ng(u) {
    var _u_headers;
    return {
        method: u.method,
        url: u.url,
        headers: {
            get: function get() {
                for(var _len = arguments.length, r = new Array(_len), _key = 0; _key < _len; _key++){
                    r[_key] = arguments[_key];
                }
                return (_u_headers = u.headers).get.apply(_u_headers, _to_consumable_array(r));
            }
        }
    };
}
function ug(u) {
    if (rg(u)) {
        var r = _object_spread({}, u);
        return Object.freeze(r), r;
    } else return {
        get: function get(r) {
            return u.get(r);
        }
    };
}
var ig = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function rg(u) {
    if (u === null || (typeof u === "undefined" ? "undefined" : _type_of(u)) != "object") return !1;
    var r = Object.getPrototypeOf(u);
    return r === Object.prototype || r === null || Object.getOwnPropertyNames(r).sort().join("\0") === ig;
}
var qm = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
], fg = new Set(qm), cg = [
    "GET"
].concat(_to_consumable_array(qm)), og = new Set(cg), Gm = new Set([
    301,
    302,
    303,
    307,
    308
]), sg = new Set([
    307,
    308
]), jc = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}, dg = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}, Uu = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
}, hg = function hg(u) {
    return {
        hasErrorBoundary: !!u.hasErrorBoundary
    };
}, Xm = "remix-router-transitions", Qm = Symbol("ResetLoaderData");
function mg(u) {
    var r = u.window ? u.window : (typeof window === "undefined" ? "undefined" : _type_of(window)) < "u" ? window : void 0, o = (typeof r === "undefined" ? "undefined" : _type_of(r)) < "u" && _type_of(r.document) < "u" && _type_of(r.document.createElement) < "u";
    Re(u.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    var f = u.hydrationRouteProperties || [], s = u.mapRouteProperties || hg, d = s;
    if (u.unstable_instrumentations) {
        var S = u.unstable_instrumentations;
        d = function d(z) {
            return _object_spread({}, s(z), lg(S.map(function(C) {
                return C.route;
            }).filter(Boolean), z));
        };
    }
    var y = {}, v = Bu(u.routes, d, void 0, y), g, m = u.basename || "/";
    m.startsWith("/") || (m = "/".concat(m));
    var M = u.dataStrategy || Sg, E = _object_spread({
        unstable_passThroughRequests: !1
    }, u.future), L = null, A = new Set, Y = null, X = null, K = null, ie = u.hydrationData != null, I = Sa(v, u.history.location, m), k = !1, xe = null, ve, pe;
    if (I == null && !u.patchRoutesOnNavigation) {
        var S1 = al(404, {
            pathname: u.history.location.pathname
        }), _rr = rr(v), z = _rr.matches, C = _rr.route;
        ve = !0, pe = !ve, I = z, xe = _define_property({}, C.id, S1);
    } else if (I && !u.hydrationData && Fl(I, v, u.history.location.pathname).active && (I = null), I) if (I.some(function(S) {
        return S.route.lazy;
    })) ve = !1, pe = !ve;
    else if (!I.some(function(S) {
        return kc(S.route);
    })) ve = !0, pe = !ve;
    else {
        var S2 = u.hydrationData ? u.hydrationData.loaderData : null, z1 = u.hydrationData ? u.hydrationData.errors : null, C1 = I;
        if (z1) {
            var G = I.findIndex(function(Z) {
                return z1[Z.route.id] !== void 0;
            });
            C1 = C1.slice(0, G + 1);
        }
        pe = !1, ve = !0, C1.forEach(function(G) {
            var Z = Vm(G.route, S2, z1);
            pe = pe || Z.renderFallback, ve = ve && !Z.shouldLoad;
        });
    }
    else {
        ve = !1, pe = !ve, I = [];
        var S3 = Fl(null, v, u.history.location.pathname);
        S3.active && S3.matches && (k = !0, I = S3.matches);
    }
    var re, D = {
        historyAction: u.history.action,
        location: u.history.location,
        matches: I,
        initialized: ve,
        renderFallback: pe,
        navigation: jc,
        restoreScrollPosition: u.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: u.hydrationData && u.hydrationData.loaderData || {},
        actionData: u.hydrationData && u.hydrationData.actionData || null,
        errors: u.hydrationData && u.hydrationData.errors || xe,
        fetchers: new Map,
        blockers: new Map
    }, Ee = "POP", Ce = null, Ve = !1, me, tt = !1, Ue = new Map, de = null, x = !1, Q = !1, ee = new Set, ae = new Map, Se = 0, b = -1, B = new Map, V = new Set, J = new Map, oe = new Map, he = new Set, ze = new Map, ft, Ze = null;
    function Ra() {
        if (L = u.history.listen(function(param) {
            var S = param.action, z = param.location, C = param.delta;
            if (ft) {
                ft(), ft = void 0;
                return;
            }
            et(ze.size === 0 || C != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            var G = Ta({
                currentLocation: D.location,
                nextLocation: z,
                historyAction: S
            });
            if (G && C != null) {
                var Z = new Promise(function(te) {
                    ft = te;
                });
                u.history.go(C * -1), Dl(G, {
                    state: "blocked",
                    location: z,
                    proceed: function proceed() {
                        Dl(G, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: z
                        }), Z.then(function() {
                            return u.history.go(C);
                        });
                    },
                    reset: function reset() {
                        var te = new Map(D.blockers);
                        te.set(G, Uu), yt({
                            blockers: te
                        });
                    }
                }), Ce === null || Ce === void 0 ? void 0 : Ce.resolve(), Ce = null;
                return;
            }
            return zl(S, z);
        }), o) {
            Bg(r, Ue);
            var S = function S() {
                return jg(r, Ue);
            };
            r.addEventListener("pagehide", S), de = function de() {
                return r.removeEventListener("pagehide", S);
            };
        }
        return D.initialized || zl("POP", D.location, {
            initialHydration: !0
        }), re;
    }
    function Za() {
        L && L(), de && de(), A.clear(), me && me.abort(), D.fetchers.forEach(function(S, z) {
            return Ml(z);
        }), D.blockers.forEach(function(S, z) {
            return za(z);
        });
    }
    function wn(S) {
        return A.add(S), function() {
            return A.delete(S);
        };
    }
    function yt(S) {
        var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        S.matches && (S.matches = S.matches.map(function(Z) {
            var te = y[Z.route.id], F = Z.route;
            return F.element !== te.element || F.errorElement !== te.errorElement || F.hydrateFallbackElement !== te.hydrateFallbackElement ? _object_spread_props(_object_spread({}, Z), {
                route: te
            }) : Z;
        })), D = _object_spread({}, D, S);
        var C = [], G = [];
        D.fetchers.forEach(function(Z, te) {
            Z.state === "idle" && (he.has(te) ? C.push(te) : G.push(te));
        }), he.forEach(function(Z) {
            !D.fetchers.has(Z) && !ae.has(Z) && C.push(Z);
        }), _to_consumable_array(A).forEach(function(Z) {
            var _S_errors;
            return Z(D, {
                deletedFetchers: C,
                newErrors: (_S_errors = S.errors) !== null && _S_errors !== void 0 ? _S_errors : null,
                viewTransitionOpts: z.viewTransitionOpts,
                flushSync: z.flushSync === !0
            });
        }), C.forEach(function(Z) {
            return Ml(Z);
        }), G.forEach(function(Z) {
            return D.fetchers.delete(Z);
        });
    }
    function Ut(S, z) {
        var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, C = _ref.flushSync;
        var _S_state, _S_state1;
        var G = D.actionData != null && D.navigation.formMethod != null && At(D.navigation.formMethod) && D.navigation.state === "loading" && ((_S_state = S.state) === null || _S_state === void 0 ? void 0 : _S_state._isRedirect) !== !0, Z;
        z.actionData ? Object.keys(z.actionData).length > 0 ? Z = z.actionData : Z = null : G ? Z = D.actionData : Z = null;
        var te = z.loaderData ? pm(D.loaderData, z.loaderData, z.matches || [], z.errors) : D.loaderData, F = D.blockers;
        F.size > 0 && (F = new Map(F), F.forEach(function(ce, ue) {
            return F.set(ue, Uu);
        }));
        var $ = x ? !1 : Gn(S, z.matches || D.matches), le = Ve === !0 || D.navigation.formMethod != null && At(D.navigation.formMethod) && ((_S_state1 = S.state) === null || _S_state1 === void 0 ? void 0 : _S_state1._isRedirect) !== !0;
        g && (v = g, g = void 0), x || Ee === "POP" || (Ee === "PUSH" ? u.history.push(S, S.state) : Ee === "REPLACE" && u.history.replace(S, S.state));
        var W;
        if (Ee === "POP") {
            var ce = Ue.get(D.location.pathname);
            ce && ce.has(S.pathname) ? W = {
                currentLocation: D.location,
                nextLocation: S
            } : Ue.has(S.pathname) && (W = {
                currentLocation: S,
                nextLocation: D.location
            });
        } else if (tt) {
            var ce1 = Ue.get(D.location.pathname);
            ce1 ? ce1.add(S.pathname) : (ce1 = new Set([
                S.pathname
            ]), Ue.set(D.location.pathname, ce1)), W = {
                currentLocation: D.location,
                nextLocation: S
            };
        }
        yt(_object_spread_props(_object_spread({}, z), {
            actionData: Z,
            loaderData: te,
            historyAction: Ee,
            location: S,
            initialized: !0,
            renderFallback: !1,
            navigation: jc,
            revalidation: "idle",
            restoreScrollPosition: $,
            preventScrollReset: le,
            blockers: F
        }), {
            viewTransitionOpts: W,
            flushSync: C === !0
        }), Ee = "POP", Ve = !1, tt = !1, x = !1, Q = !1, Ce === null || Ce === void 0 ? void 0 : Ce.resolve(), Ce = null, Ze === null || Ze === void 0 ? void 0 : Ze.resolve(), Ze = null;
    }
    function Ka(S, z) {
        return _async_to_generator(function() {
            var Ke, C, _fm, G, Z, te, F, $, le, W, ce, ue, Le, Te;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (Ce === null || Ce === void 0 ? void 0 : Ce.resolve(), Ce = null, typeof S == "number") {
                            Ce || (Ce = Rm());
                            Ke = Ce.promise;
                            return [
                                2,
                                (u.history.go(S), Ke)
                            ];
                        }
                        C = Qc(D.location, D.matches, m, S, z === null || z === void 0 ? void 0 : z.fromRouteId, z === null || z === void 0 ? void 0 : z.relative), _fm = fm(!1, C, z), G = _fm.path, Z = _fm.submission, te = _fm.error;
                        (z === null || z === void 0 ? void 0 : z.unstable_mask) && (F = _object_spread({
                            pathname: "",
                            search: "",
                            hash: ""
                        }, typeof z.unstable_mask == "string" ? hl(z.unstable_mask) : _object_spread({}, D.location.unstable_mask, z.unstable_mask)));
                        $ = D.location, le = Xc($, G, z && z.state, void 0, F);
                        le = _object_spread({}, le, u.history.encodeLocation(le));
                        W = z && z.replace != null ? z.replace : void 0, ce = "PUSH";
                        W === !0 ? ce = "REPLACE" : W === !1 || Z != null && At(Z.formMethod) && Z.formAction === D.location.pathname + D.location.search && (ce = "REPLACE");
                        ue = z && "preventScrollReset" in z ? z.preventScrollReset === !0 : void 0, Le = (z && z.flushSync) === !0, Te = Ta({
                            currentLocation: $,
                            nextLocation: le,
                            historyAction: ce
                        });
                        if (Te) {
                            Dl(Te, {
                                state: "blocked",
                                location: le,
                                proceed: function proceed() {
                                    Dl(Te, {
                                        state: "proceeding",
                                        proceed: void 0,
                                        reset: void 0,
                                        location: le
                                    }), Ka(S, z);
                                },
                                reset: function reset() {
                                    var Ke = new Map(D.blockers);
                                    Ke.set(Te, Uu), yt({
                                        blockers: Ke
                                    });
                                }
                            });
                            return [
                                2
                            ];
                        }
                        return [
                            4,
                            zl(ce, le, {
                                submission: Z,
                                pendingError: te,
                                preventScrollReset: ue,
                                replace: z && z.replace,
                                enableViewTransition: z && z.viewTransition,
                                flushSync: Le,
                                callSiteDefaultShouldRevalidate: z && z.unstable_defaultShouldRevalidate
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        })();
    }
    function Bn() {
        Ze || (Ze = Rm()), Kl(), yt({
            revalidation: "loading"
        });
        var S = Ze.promise;
        return D.navigation.state === "submitting" ? S : D.navigation.state === "idle" ? (zl(D.historyAction, D.location, {
            startUninterruptedRevalidation: !0
        }), S) : (zl(Ee || D.historyAction, D.navigation.location, {
            overrideNavigation: D.navigation,
            enableViewTransition: tt === !0
        }), S);
    }
    function zl(S, z, C) {
        return _async_to_generator(function() {
            var G, Z, te, F, $, _rl, $e, lt, He, le, W, ce, _tmp, $e1, _$e_pendingActionResult, lt1, He1, _ref, ue, Le, Te, Ke;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        me && me.abort(), me = null, Ee = S, x = (C && C.startUninterruptedRevalidation) === !0, Rr(D.location, D.matches), Ve = (C && C.preventScrollReset) === !0, tt = (C && C.enableViewTransition) === !0;
                        G = g || v, Z = C && C.overrideNavigation, te = (C === null || C === void 0 ? void 0 : C.initialHydration) && D.matches && D.matches.length > 0 && !k ? D.matches : Sa(G, z, m), F = (C && C.flushSync) === !0;
                        if (te && D.initialized && !Q && Ag(D.location, z) && !(C && C.submission && At(C.submission.formMethod))) {
                            Ut(z, {
                                matches: te
                            }, {
                                flushSync: F
                            });
                            return [
                                2
                            ];
                        }
                        $ = Fl(te, G, z.pathname);
                        if ($.active && $.matches && (te = $.matches), !te) {
                            _rl = rl(z.pathname), $e = _rl.error, lt = _rl.notFoundMatches, He = _rl.route;
                            Ut(z, {
                                matches: lt,
                                loaderData: {},
                                errors: _define_property({}, He.id, $e)
                            }, {
                                flushSync: F
                            });
                            return [
                                2
                            ];
                        }
                        me = new AbortController;
                        le = Nn(u.history, z, me.signal, C && C.submission);
                        if (!u.getContext) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            u.getContext()
                        ];
                    case 1:
                        _tmp = _state.sent();
                        return [
                            3,
                            3
                        ];
                    case 2:
                        _tmp = new lm;
                        _state.label = 3;
                    case 3:
                        W = _tmp;
                        if (!(C && C.pendingError)) return [
                            3,
                            4
                        ];
                        ce = [
                            ba(te).route.id,
                            {
                                type: "error",
                                error: C.pendingError
                            }
                        ];
                        return [
                            3,
                            6
                        ];
                    case 4:
                        if (!(C && C.submission && At(C.submission.formMethod))) return [
                            3,
                            6
                        ];
                        return [
                            4,
                            Qu(le, z, C.submission, te, W, $.active, C && C.initialHydration === !0, {
                                replace: C.replace,
                                flushSync: F
                            })
                        ];
                    case 5:
                        $e1 = _state.sent();
                        if ($e1.shortCircuited) return [
                            2
                        ];
                        if ($e1.pendingActionResult) {
                            _$e_pendingActionResult = _sliced_to_array($e1.pendingActionResult, 2), lt1 = _$e_pendingActionResult[0], He1 = _$e_pendingActionResult[1];
                            if (Zt(He1) && ju(He1.error) && He1.error.status === 404) {
                                me = null, Ut(z, {
                                    matches: $e1.matches,
                                    loaderData: {},
                                    errors: _define_property({}, lt1, He1.error)
                                });
                                return [
                                    2
                                ];
                            }
                        }
                        te = $e1.matches || te, ce = $e1.pendingActionResult, Z = Yc(z, C.submission), F = !1, $.active = !1, le = Nn(u.history, le.url, le.signal);
                        _state.label = 6;
                    case 6:
                        return [
                            4,
                            jn(le, z, te, W, $.active, Z, C && C.submission, C && C.fetcherSubmission, C && C.replace, C && C.initialHydration === !0, F, ce, C && C.callSiteDefaultShouldRevalidate)
                        ];
                    case 7:
                        _ref = _state.sent(), ue = _ref.shortCircuited, Le = _ref.matches, Te = _ref.loaderData, Ke = _ref.errors;
                        ue || (me = null, Ut(z, _object_spread_props(_object_spread({
                            matches: Le || te
                        }, Sm(ce)), {
                            loaderData: Te,
                            errors: Ke
                        })));
                        return [
                            2
                        ];
                }
            });
        })();
    }
    function Qu(_0, _1, _2, _3, _4, _5, _6) {
        return _async_to_generator(function(S, z, C, G, Z, te, F) {
            var $, le, ue, _rr, Te, Ke, Le, _rl, Le1, Te1, Ke1, W, ce, ue1, Le2, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, Te2, ue2, ue3;
            var _arguments = arguments;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        $ = _arguments.length > 7 && _arguments[7] !== void 0 ? _arguments[7] : {};
                        Kl();
                        le = Lg(z, C);
                        if (!(yt({
                            navigation: le
                        }, {
                            flushSync: $.flushSync === !0
                        }), te)) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            ml(G, z.pathname, S.signal)
                        ];
                    case 1:
                        ue = _state.sent();
                        if (ue.type === "aborted") return [
                            2,
                            {
                                shortCircuited: !0
                            }
                        ];
                        if (ue.type === "error") {
                            if (ue.partialMatches.length === 0) {
                                _rr = rr(v), Te = _rr.matches, Ke = _rr.route;
                                return [
                                    2,
                                    {
                                        matches: Te,
                                        pendingActionResult: [
                                            Ke.id,
                                            {
                                                type: "error",
                                                error: ue.error
                                            }
                                        ]
                                    }
                                ];
                            }
                            Le = ba(ue.partialMatches).route.id;
                            return [
                                2,
                                {
                                    matches: ue.partialMatches,
                                    pendingActionResult: [
                                        Le,
                                        {
                                            type: "error",
                                            error: ue.error
                                        }
                                    ]
                                }
                            ];
                        } else if (ue.matches) G = ue.matches;
                        else {
                            _rl = rl(z.pathname), Le1 = _rl.notFoundMatches, Te1 = _rl.error, Ke1 = _rl.route;
                            return [
                                2,
                                {
                                    matches: Le1,
                                    pendingActionResult: [
                                        Ke1.id,
                                        {
                                            type: "error",
                                            error: Te1
                                        }
                                    ]
                                }
                            ];
                        }
                        _state.label = 2;
                    case 2:
                        ce = or(G, z);
                        if (!(!ce.route.action && !ce.route.lazy)) return [
                            3,
                            3
                        ];
                        W = {
                            type: "error",
                            error: al(405, {
                                method: S.method,
                                pathname: z.pathname,
                                routeId: ce.route.id
                            })
                        };
                        return [
                            3,
                            5
                        ];
                    case 3:
                        ue1 = Hn(d, y, S, z, G, ce, F ? [] : f, Z);
                        return [
                            4,
                            Zl(S, z, ue1, Z, null)
                        ];
                    case 4:
                        Le2 = _state.sent();
                        if (W = Le2[ce.route.id], !W) {
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = G[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    Te2 = _step.value;
                                    if (Le2[Te2.route.id]) {
                                        W = Le2[Te2.route.id];
                                        break;
                                    }
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
                        if (S.signal.aborted) return [
                            2,
                            {
                                shortCircuited: !0
                            }
                        ];
                        _state.label = 5;
                    case 5:
                        if (!Qa(W)) return [
                            3,
                            7
                        ];
                        $ && $.replace != null ? ue2 = $.replace : ue2 = ym(W.response.headers.get("Location"), new URL(S.url), m, u.history) === D.location.pathname + D.location.search;
                        return [
                            4,
                            Tl(S, W, !0, {
                                submission: C,
                                replace: ue2
                            })
                        ];
                    case 6:
                        return [
                            2,
                            (_state.sent(), {
                                shortCircuited: !0
                            })
                        ];
                    case 7:
                        if (Zt(W)) {
                            ue3 = ba(G, ce.route.id);
                            return [
                                2,
                                (($ && $.replace) !== !0 && (Ee = "PUSH"), {
                                    matches: G,
                                    pendingActionResult: [
                                        ue3.route.id,
                                        W,
                                        ce.route.id
                                    ]
                                })
                            ];
                        }
                        return [
                            2,
                            {
                                matches: G,
                                pendingActionResult: [
                                    ce.route.id,
                                    W
                                ]
                            }
                        ];
                }
            });
        }).apply(this, arguments);
    }
    function jn(S, z, C, G, Z, te, F, $, le, W, ce, ue, Le) {
        return _async_to_generator(function() {
            var Te, Ke, $e, ut, Me, _rr, Mt, ot, ut1, _rl, ut2, Mt1, ot1, lt, _cm, He, ct, Me1, Me2, ut3, Fe, _ref, $l, fl, pt, _gm, yl, Ma, vl, Da, $a;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        Te = te || Yc(z, F), Ke = F || $ || Em(Te), $e = !x && !W;
                        if (!Z) return [
                            3,
                            2
                        ];
                        if ($e) {
                            ut = Ja(ue);
                            yt(_object_spread({
                                navigation: Te
                            }, ut !== void 0 ? {
                                actionData: ut
                            } : {}), {
                                flushSync: ce
                            });
                        }
                        return [
                            4,
                            ml(C, z.pathname, S.signal)
                        ];
                    case 1:
                        Me = _state.sent();
                        if (Me.type === "aborted") return [
                            2,
                            {
                                shortCircuited: !0
                            }
                        ];
                        if (Me.type === "error") {
                            if (Me.partialMatches.length === 0) {
                                _rr = rr(v), Mt = _rr.matches, ot = _rr.route;
                                return [
                                    2,
                                    {
                                        matches: Mt,
                                        loaderData: {},
                                        errors: _define_property({}, ot.id, Me.error)
                                    }
                                ];
                            }
                            ut1 = ba(Me.partialMatches).route.id;
                            return [
                                2,
                                {
                                    matches: Me.partialMatches,
                                    loaderData: {},
                                    errors: _define_property({}, ut1, Me.error)
                                }
                            ];
                        } else if (Me.matches) C = Me.matches;
                        else {
                            _rl = rl(z.pathname), ut2 = _rl.error, Mt1 = _rl.notFoundMatches, ot1 = _rl.route;
                            return [
                                2,
                                {
                                    matches: Mt1,
                                    loaderData: {},
                                    errors: _define_property({}, ot1.id, ut2)
                                }
                            ];
                        }
                        _state.label = 2;
                    case 2:
                        lt = g || v, _cm = cm(S, G, d, y, u.history, D, C, Ke, z, W ? [] : f, W === !0, Q, ee, he, J, V, lt, m, u.patchRoutesOnNavigation != null, ue, Le), He = _cm.dsMatches, ct = _cm.revalidatingFetchers;
                        if (b = ++Se, !u.dataStrategy && !He.some(function(Me) {
                            return Me.shouldLoad;
                        }) && !He.some(function(Me) {
                            return Me.route.middleware && Me.route.middleware.length > 0;
                        }) && ct.length === 0) {
                            Me1 = Zu();
                            return [
                                2,
                                (Ut(z, _object_spread({
                                    matches: C,
                                    loaderData: {},
                                    errors: ue && Zt(ue[1]) ? _define_property({}, ue[0], ue[1].error) : null
                                }, Sm(ue), Me1 ? {
                                    fetchers: new Map(D.fetchers)
                                } : {}), {
                                    flushSync: ce
                                }), {
                                    shortCircuited: !0
                                })
                            ];
                        }
                        if ($e) {
                            Me2 = {};
                            if (!Z) {
                                Me2.navigation = Te;
                                ut3 = Ja(ue);
                                ut3 !== void 0 && (Me2.actionData = ut3);
                            }
                            ct.length > 0 && (Me2.fetchers = Yn(ct)), yt(Me2, {
                                flushSync: ce
                            });
                        }
                        ct.forEach(function(Me) {
                            gt(Me.key), Me.controller && ae.set(Me.key, Me.controller);
                        });
                        Fe = function Fe() {
                            return ct.forEach(function(Me) {
                                return gt(Me.key);
                            });
                        };
                        me && me.signal.addEventListener("abort", Fe);
                        return [
                            4,
                            qn(He, ct, S, z, G)
                        ];
                    case 3:
                        _ref = _state.sent(), $l = _ref.loaderResults, fl = _ref.fetcherResults;
                        if (S.signal.aborted) return [
                            2,
                            {
                                shortCircuited: !0
                            }
                        ];
                        me && me.signal.removeEventListener("abort", Fe), ct.forEach(function(Me) {
                            return ae.delete(Me.key);
                        });
                        pt = fr($l);
                        if (!pt) return [
                            3,
                            5
                        ];
                        return [
                            4,
                            Tl(S, pt.result, !0, {
                                replace: le
                            })
                        ];
                    case 4:
                        return [
                            2,
                            (_state.sent(), {
                                shortCircuited: !0
                            })
                        ];
                    case 5:
                        if (!(pt = fr(fl), pt)) return [
                            3,
                            7
                        ];
                        V.add(pt.key);
                        return [
                            4,
                            Tl(S, pt.result, !0, {
                                replace: le
                            })
                        ];
                    case 6:
                        return [
                            2,
                            (_state.sent(), {
                                shortCircuited: !0
                            })
                        ];
                    case 7:
                        _gm = gm(D, C, $l, ue, ct, fl), yl = _gm.loaderData, Ma = _gm.errors;
                        W && D.errors && (Ma = _object_spread({}, D.errors, Ma));
                        vl = Zu(), Da = Ku(b), $a = vl || Da || ct.length > 0;
                        return [
                            2,
                            _object_spread({
                                matches: C,
                                loaderData: yl,
                                errors: Ma
                            }, $a ? {
                                fetchers: new Map(D.fetchers)
                            } : {})
                        ];
                }
            });
        })();
    }
    function Ja(S) {
        if (S && !Zt(S[1])) return _define_property({}, S[0], S[1].data);
        if (D.actionData) return Object.keys(D.actionData).length === 0 ? null : D.actionData;
    }
    function Yn(S) {
        return S.forEach(function(z) {
            var C = D.fetchers.get(z.key), G = Nu(void 0, C ? C.data : void 0);
            D.fetchers.set(z.key, G);
        }), new Map(D.fetchers);
    }
    function pr(S, z, C, G) {
        return _async_to_generator(function() {
            var Z, te, F, $, le, _fm, W, ce, ue, Le, Te, _tmp;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        gt(S);
                        Z = (G && G.flushSync) === !0, te = g || v, F = Qc(D.location, D.matches, m, C, z, G === null || G === void 0 ? void 0 : G.relative), $ = Sa(te, F, m), le = Fl($, te, F);
                        if (le.active && le.matches && ($ = le.matches), !$) {
                            Jt(S, z, al(404, {
                                pathname: F
                            }), {
                                flushSync: Z
                            });
                            return [
                                2
                            ];
                        }
                        _fm = fm(!0, F, G), W = _fm.path, ce = _fm.submission, ue = _fm.error;
                        if (ue) {
                            Jt(S, z, ue, {
                                flushSync: Z
                            });
                            return [
                                2
                            ];
                        }
                        if (!u.getContext) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            u.getContext()
                        ];
                    case 1:
                        _tmp = _state.sent();
                        return [
                            3,
                            3
                        ];
                    case 2:
                        _tmp = new lm;
                        _state.label = 3;
                    case 3:
                        Le = _tmp, Te = (G && G.preventScrollReset) === !0;
                        if (!(ce && At(ce.formMethod))) return [
                            3,
                            5
                        ];
                        return [
                            4,
                            Sr(S, z, W, $, Le, le.active, Z, Te, ce, G && G.unstable_defaultShouldRevalidate)
                        ];
                    case 4:
                        _state.sent();
                        return [
                            2
                        ];
                    case 5:
                        J.set(S, {
                            routeId: z,
                            path: W
                        });
                        return [
                            4,
                            Ot(S, z, W, $, Le, le.active, Z, Te, ce)
                        ];
                    case 6:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        })();
    }
    function Sr(S, z, C, G, Z, te, F, $, le, W) {
        return _async_to_generator(function() {
            var ce, ue, Le, We, Te, We1, Ke, $e, lt, He, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, We2, ct, Fe, $l, fl, pt, yl, _cm, Ma, vl, Da, _ref, $a, Me, We3, ut, _gm, Mt, ot;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        Kl(), J.delete(S);
                        ce = D.fetchers.get(S);
                        il(S, wg(le, ce), {
                            flushSync: F
                        });
                        ue = new AbortController, Le = Nn(u.history, C, ue.signal, le);
                        if (!te) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            ml(G, new URL(Le.url).pathname, Le.signal, S)
                        ];
                    case 1:
                        We = _state.sent();
                        if (We.type === "aborted") return [
                            2
                        ];
                        if (We.type === "error") {
                            Jt(S, z, We.error, {
                                flushSync: F
                            });
                            return [
                                2
                            ];
                        } else if (We.matches) G = We.matches;
                        else {
                            Jt(S, z, al(404, {
                                pathname: C
                            }), {
                                flushSync: F
                            });
                            return [
                                2
                            ];
                        }
                        _state.label = 2;
                    case 2:
                        Te = or(G, C);
                        if (!Te.route.action && !Te.route.lazy) {
                            We1 = al(405, {
                                method: le.formMethod,
                                pathname: C,
                                routeId: z
                            });
                            Jt(S, z, We1, {
                                flushSync: F
                            });
                            return [
                                2
                            ];
                        }
                        ae.set(S, ue);
                        Ke = Se, $e = Hn(d, y, Le, C, G, Te, f, Z);
                        return [
                            4,
                            Zl(Le, C, $e, Z, S)
                        ];
                    case 3:
                        lt = _state.sent(), He = lt[Te.route.id];
                        if (!He) {
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = $e[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    We2 = _step.value;
                                    if (lt[We2.route.id]) {
                                        He = lt[We2.route.id];
                                        break;
                                    }
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
                        if (Le.signal.aborted) {
                            ae.get(S) === ue && ae.delete(S);
                            return [
                                2
                            ];
                        }
                        if (he.has(S)) {
                            if (Qa(He) || Zt(He)) {
                                il(S, Vl(void 0));
                                return [
                                    2
                                ];
                            }
                        } else {
                            if (Qa(He)) if (ae.delete(S), b > Ke) {
                                il(S, Vl(void 0));
                                return [
                                    2
                                ];
                            } else return [
                                2,
                                (V.add(S), il(S, Nu(le)), Tl(Le, He, !1, {
                                    fetcherSubmission: le,
                                    preventScrollReset: $
                                }))
                            ];
                            if (Zt(He)) {
                                Jt(S, z, He.error);
                                return [
                                    2
                                ];
                            }
                        }
                        ct = D.navigation.location || D.location, Fe = Nn(u.history, ct, ue.signal), $l = g || v, fl = D.navigation.state !== "idle" ? Sa($l, D.navigation.location, m) : D.matches;
                        Re(fl, "Didn't find any matches after fetcher action");
                        pt = ++Se;
                        B.set(S, pt);
                        yl = Nu(le, He.data);
                        D.fetchers.set(S, yl);
                        _cm = cm(Fe, Z, d, y, u.history, D, fl, le, ct, f, !1, Q, ee, he, J, V, $l, m, u.patchRoutesOnNavigation != null, [
                            Te.route.id,
                            He
                        ], W), Ma = _cm.dsMatches, vl = _cm.revalidatingFetchers;
                        vl.filter(function(We) {
                            return We.key !== S;
                        }).forEach(function(We) {
                            var Wa = We.key, ka = D.fetchers.get(Wa), Wu = Nu(void 0, ka ? ka.data : void 0);
                            D.fetchers.set(Wa, Wu), gt(Wa), We.controller && ae.set(Wa, We.controller);
                        }), yt({
                            fetchers: new Map(D.fetchers)
                        });
                        Da = function Da() {
                            return vl.forEach(function(We) {
                                return gt(We.key);
                            });
                        };
                        ue.signal.addEventListener("abort", Da);
                        return [
                            4,
                            qn(Ma, vl, Fe, ct, Z)
                        ];
                    case 4:
                        _ref = _state.sent(), $a = _ref.loaderResults, Me = _ref.fetcherResults;
                        if (ue.signal.aborted) return [
                            2
                        ];
                        if (ue.signal.removeEventListener("abort", Da), B.delete(S), ae.delete(S), vl.forEach(function(We) {
                            return ae.delete(We.key);
                        }), D.fetchers.has(S)) {
                            We3 = Vl(He.data);
                            D.fetchers.set(S, We3);
                        }
                        ut = fr($a);
                        if (ut) return [
                            2,
                            Tl(Fe, ut.result, !1, {
                                preventScrollReset: $
                            })
                        ];
                        if (ut = fr(Me), ut) return [
                            2,
                            (V.add(ut.key), Tl(Fe, ut.result, !1, {
                                preventScrollReset: $
                            }))
                        ];
                        _gm = gm(D, fl, $a, void 0, vl, Me), Mt = _gm.loaderData, ot = _gm.errors;
                        Ku(pt), D.navigation.state === "loading" && pt > b ? (Re(Ee, "Expected pending action"), me && me.abort(), Ut(D.navigation.location, {
                            matches: fl,
                            loaderData: Mt,
                            errors: ot,
                            fetchers: new Map(D.fetchers)
                        })) : (yt({
                            errors: ot,
                            loaderData: pm(D.loaderData, Mt, fl, ot),
                            fetchers: new Map(D.fetchers)
                        }), Q = !1);
                        return [
                            2
                        ];
                }
            });
        })();
    }
    function Ot(S, z, C, G, Z, te, F, $, le) {
        return _async_to_generator(function() {
            var W, ce, ue, He, Le, Te, Ke, lt;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        W = D.fetchers.get(S);
                        il(S, Nu(le, W ? W.data : void 0), {
                            flushSync: F
                        });
                        ce = new AbortController, ue = Nn(u.history, C, ce.signal);
                        if (!te) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            ml(G, new URL(ue.url).pathname, ue.signal, S)
                        ];
                    case 1:
                        He = _state.sent();
                        if (He.type === "aborted") return [
                            2
                        ];
                        if (He.type === "error") {
                            Jt(S, z, He.error, {
                                flushSync: F
                            });
                            return [
                                2
                            ];
                        } else if (He.matches) G = He.matches;
                        else {
                            Jt(S, z, al(404, {
                                pathname: C
                            }), {
                                flushSync: F
                            });
                            return [
                                2
                            ];
                        }
                        _state.label = 2;
                    case 2:
                        Le = or(G, C);
                        ae.set(S, ce);
                        Te = Se, Ke = Hn(d, y, ue, C, G, Le, f, Z);
                        return [
                            4,
                            Zl(ue, C, Ke, Z, S)
                        ];
                    case 3:
                        lt = _state.sent()[Le.route.id];
                        if (!(ae.get(S) === ce && ae.delete(S), !ue.signal.aborted)) return [
                            3,
                            7
                        ];
                        if (he.has(S)) {
                            il(S, Vl(void 0));
                            return [
                                2
                            ];
                        }
                        if (!Qa(lt)) return [
                            3,
                            6
                        ];
                        if (!(b > Te)) return [
                            3,
                            4
                        ];
                        il(S, Vl(void 0));
                        return [
                            2
                        ];
                    case 4:
                        V.add(S);
                        return [
                            4,
                            Tl(ue, lt, !1, {
                                preventScrollReset: $
                            })
                        ];
                    case 5:
                        _state.sent();
                        return [
                            2
                        ];
                    case 6:
                        if (Zt(lt)) {
                            Jt(S, z, lt.error);
                            return [
                                2
                            ];
                        }
                        il(S, Vl(lt.data));
                        _state.label = 7;
                    case 7:
                        return [
                            2
                        ];
                }
            });
        })();
    }
    function Tl(_0, _1, _2) {
        return _async_to_generator(function(S, z, C) {
            var _ref, G, Z, te, F, $, le, Ke, $e, W, _D_navigation, ce, ue, Le, Te, Ke1;
            var _arguments = arguments;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ref = _arguments.length > 3 && _arguments[3] !== void 0 ? _arguments[3] : {}, G = _ref.submission, Z = _ref.fetcherSubmission, te = _ref.preventScrollReset, F = _ref.replace;
                        C || (Ce === null || Ce === void 0 ? void 0 : Ce.resolve(), Ce = null), z.response.headers.has("X-Remix-Revalidate") && (Q = !0);
                        $ = z.response.headers.get("Location");
                        Re($, "Expected a Location header on the redirect Response"), $ = ym($, new URL(S.url), m, u.history);
                        le = Xc(D.location, $, {
                            _isRedirect: !0
                        });
                        if (o) {
                            Ke = !1;
                            if (z.response.headers.has("X-Remix-Reload-Document")) Ke = !0;
                            else if (Wc($)) {
                                $e = N0($, !0);
                                Ke = $e.origin !== r.location.origin || nl($e.pathname, m) == null;
                            }
                            if (Ke) {
                                F ? r.location.replace($) : r.location.assign($);
                                return [
                                    2
                                ];
                            }
                        }
                        me = null;
                        W = F === !0 || z.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", _D_navigation = D.navigation, ce = _D_navigation.formMethod, ue = _D_navigation.formAction, Le = _D_navigation.formEncType;
                        !G && !Z && ce && ue && Le && (G = Em(D.navigation));
                        Te = G || Z;
                        if (!(sg.has(z.response.status) && Te && At(Te.formMethod))) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            zl(W, le, {
                                submission: _object_spread_props(_object_spread({}, Te), {
                                    formAction: $
                                }),
                                preventScrollReset: te || Ve,
                                enableViewTransition: C ? tt : void 0
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 2:
                        Ke1 = Yc(le, G);
                        return [
                            4,
                            zl(W, le, {
                                overrideNavigation: Ke1,
                                fetcherSubmission: Z,
                                preventScrollReset: te || Ve,
                                enableViewTransition: C ? tt : void 0
                            })
                        ];
                    case 3:
                        _state.sent();
                        _state.label = 4;
                    case 4:
                        return [
                            2
                        ];
                }
            });
        }).apply(this, arguments);
    }
    function Zl(S, z, C, G, Z) {
        return _async_to_generator(function() {
            var te, F, $, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, $1, _te_$_route_id, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, _step_value, $2, le, W, err;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        F = {};
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            Eg(M, S, z, C, Z, G, !1)
                        ];
                    case 2:
                        te = _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 3:
                        $ = _state.sent();
                        return [
                            2,
                            (C.filter(function(le) {
                                return le.shouldLoad;
                            }).forEach(function(le) {
                                F[le.route.id] = {
                                    type: "error",
                                    error: $
                                };
                            }), F)
                        ];
                    case 4:
                        if (S.signal.aborted) return [
                            2,
                            F
                        ];
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        if (!At(S.method)) try {
                            for(_iterator = C[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                $1 = _step.value;
                                ;
                                if (((_te_$_route_id = te[$1.route.id]) === null || _te_$_route_id === void 0 ? void 0 : _te_$_route_id.type) === "error") break;
                                !te.hasOwnProperty($1.route.id) && !D.loaderData.hasOwnProperty($1.route.id) && (!D.errors || !D.errors.hasOwnProperty($1.route.id)) && $1.shouldCallHandler() && (te[$1.route.id] = {
                                    type: "error",
                                    result: new Error("No result returned from dataStrategy for route ".concat($1.route.id))
                                });
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
                        _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        _state.label = 5;
                    case 5:
                        _state.trys.push([
                            5,
                            11,
                            12,
                            13
                        ]);
                        _iterator1 = Object.entries(te)[Symbol.iterator]();
                        _state.label = 6;
                    case 6:
                        if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                            3,
                            10
                        ];
                        _step_value = _sliced_to_array(_step1.value, 2), $2 = _step_value[0], le = _step_value[1];
                        if (!Ug(le)) return [
                            3,
                            7
                        ];
                        W = le.result;
                        F[$2] = {
                            type: "redirect",
                            response: Mg(W, S, $2, C, m)
                        };
                        return [
                            3,
                            9
                        ];
                    case 7:
                        return [
                            4,
                            Tg(le)
                        ];
                    case 8:
                        F[$2] = _state.sent();
                        _state.label = 9;
                    case 9:
                        _iteratorNormalCompletion1 = true;
                        return [
                            3,
                            6
                        ];
                    case 10:
                        return [
                            3,
                            13
                        ];
                    case 11:
                        err = _state.sent();
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                        return [
                            3,
                            13
                        ];
                    case 12:
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                        return [
                            7
                        ];
                    case 13:
                        return [
                            2,
                            F
                        ];
                }
            });
        })();
    }
    function qn(S, z, C, G, Z) {
        return _async_to_generator(function() {
            var te, F, $, le;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        te = Zl(C, G, S, Z, null), F = Promise.all(z.map(function(W) {
                            return _async_to_generator(function() {
                                var ue;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (!(W.matches && W.match && W.request && W.controller)) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                Zl(W.request, W.path, W.matches, Z, W.key)
                                            ];
                                        case 1:
                                            ue = _state.sent()[W.match.route.id];
                                            return [
                                                2,
                                                _define_property({}, W.key, ue)
                                            ];
                                        case 2:
                                            return [
                                                2,
                                                Promise.resolve(_define_property({}, W.key, {
                                                    type: "error",
                                                    error: al(404, {
                                                        pathname: W.path
                                                    })
                                                }))
                                            ];
                                        case 3:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })();
                        }));
                        return [
                            4,
                            te
                        ];
                    case 1:
                        $ = _state.sent();
                        return [
                            4,
                            F
                        ];
                    case 2:
                        le = _state.sent().reduce(function(W, ce) {
                            return Object.assign(W, ce);
                        }, {});
                        return [
                            2,
                            {
                                loaderResults: $,
                                fetcherResults: le
                            }
                        ];
                }
            });
        })();
    }
    function Kl() {
        Q = !0, J.forEach(function(S, z) {
            ae.has(z) && ee.add(z), gt(z);
        });
    }
    function il(S, z) {
        var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        D.fetchers.set(S, z), yt({
            fetchers: new Map(D.fetchers)
        }, {
            flushSync: (C && C.flushSync) === !0
        });
    }
    function Jt(S, z, C) {
        var G = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        var Z = ba(D.matches, z);
        Ml(S), yt({
            errors: _define_property({}, Z.route.id, C),
            fetchers: new Map(D.fetchers)
        }, {
            flushSync: (G && G.flushSync) === !0
        });
    }
    function Vu(S) {
        return oe.set(S, (oe.get(S) || 0) + 1), he.has(S) && he.delete(S), D.fetchers.get(S) || dg;
    }
    function br(S, z) {
        gt(S, z === null || z === void 0 ? void 0 : z.reason), il(S, Vl(null));
    }
    function Ml(S) {
        var z = D.fetchers.get(S);
        ae.has(S) && !(z && z.state === "loading" && B.has(S)) && gt(S), J.delete(S), B.delete(S), V.delete(S), he.delete(S), ee.delete(S), D.fetchers.delete(S);
    }
    function _t(S) {
        var z = (oe.get(S) || 0) - 1;
        z <= 0 ? (oe.delete(S), he.add(S)) : oe.set(S, z), yt({
            fetchers: new Map(D.fetchers)
        });
    }
    function gt(S, z) {
        var C = ae.get(S);
        C && (C.abort(z), ae.delete(S));
    }
    function Tt(S) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = S[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var z = _step.value;
                var C = Vu(z), G = Vl(C.data);
                D.fetchers.set(z, G);
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
    function Zu() {
        var S = [], z = !1;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = V[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var C = _step.value;
                var G = D.fetchers.get(C);
                Re(G, "Expected fetcher: ".concat(C)), G.state === "loading" && (V.delete(C), S.push(C), z = !0);
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
        return Tt(S), z;
    }
    function Ku(S) {
        var z = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = B[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), C = _step_value[0], G = _step_value[1];
                if (G < S) {
                    var Z = D.fetchers.get(C);
                    Re(Z, "Expected fetcher: ".concat(C)), Z.state === "loading" && (gt(C), B.delete(C), z.push(C));
                }
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
        return Tt(z), z.length > 0;
    }
    function Er(S, z) {
        var C = D.blockers.get(S) || Uu;
        return ze.get(S) !== z && ze.set(S, z), C;
    }
    function za(S) {
        D.blockers.delete(S), ze.delete(S);
    }
    function Dl(S, z) {
        var C = D.blockers.get(S) || Uu;
        Re(C.state === "unblocked" && z.state === "blocked" || C.state === "blocked" && z.state === "blocked" || C.state === "blocked" && z.state === "proceeding" || C.state === "blocked" && z.state === "unblocked" || C.state === "proceeding" && z.state === "unblocked", "Invalid blocker state transition: ".concat(C.state, " -> ").concat(z.state));
        var G = new Map(D.blockers);
        G.set(S, z), yt({
            blockers: G
        });
    }
    function Ta(param) {
        var S = param.currentLocation, z = param.nextLocation, C = param.historyAction;
        if (ze.size === 0) return;
        ze.size > 1 && et(!1, "A router only supports one blocker at a time");
        var G = Array.from(ze.entries()), _G_ = _sliced_to_array(G[G.length - 1], 2), Z = _G_[0], te = _G_[1], F = D.blockers.get(Z);
        if (!(F && F.state === "proceeding") && te({
            currentLocation: S,
            nextLocation: z,
            historyAction: C
        })) return Z;
    }
    function rl(S) {
        var z = al(404, {
            pathname: S
        }), C = g || v, _rr = rr(C), G = _rr.matches, Z = _rr.route;
        return {
            notFoundMatches: G,
            route: Z,
            error: z
        };
    }
    function Fa(S, z, C) {
        if (Y = S, K = z, X = C || null, !ie && D.navigation === jc) {
            ie = !0;
            var G = Gn(D.location, D.matches);
            G != null && yt({
                restoreScrollPosition: G
            });
        }
        return function() {
            Y = null, K = null, X = null;
        };
    }
    function Jl(S, z) {
        return X && X(S, z.map(function(G) {
            return j0(G, D.loaderData);
        })) || S.key;
    }
    function Rr(S, z) {
        if (Y && K) {
            var C = Jl(S, z);
            Y[C] = K();
        }
    }
    function Gn(S, z) {
        if (Y) {
            var C = Jl(S, z), G = Y[C];
            if (typeof G == "number") return G;
        }
        return null;
    }
    function Fl(S, z, C) {
        if (u.patchRoutesOnNavigation) if (S) {
            if (Object.keys(S[0].params).length > 0) return {
                active: !0,
                matches: Lu(z, C, m, !0)
            };
        } else return {
            active: !0,
            matches: Lu(z, C, m, !0) || []
        };
        return {
            active: !1,
            matches: null
        };
    }
    function ml(S, z, C, G) {
        return _async_to_generator(function() {
            var _loop, Z, _ret;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _loop = function _loop() {
                            var te, F, $, ce, le, W;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        te = g == null, F = g || v, $ = y;
                                        _state.label = 1;
                                    case 1:
                                        _state.trys.push([
                                            1,
                                            3,
                                            4,
                                            5
                                        ]);
                                        return [
                                            4,
                                            u.patchRoutesOnNavigation({
                                                signal: C,
                                                path: z,
                                                matches: Z,
                                                fetcherKey: G,
                                                patch: function patch(ce, ue) {
                                                    C.aborted || om(ce, ue, F, $, d, !1);
                                                }
                                            })
                                        ];
                                    case 2:
                                        _state.sent();
                                        return [
                                            3,
                                            5
                                        ];
                                    case 3:
                                        ce = _state.sent();
                                        return [
                                            2,
                                            {
                                                v: {
                                                    type: "error",
                                                    error: ce,
                                                    partialMatches: Z
                                                }
                                            }
                                        ];
                                    case 4:
                                        te && !C.aborted && (v = _to_consumable_array(v));
                                        return [
                                            7
                                        ];
                                    case 5:
                                        if (C.aborted) return [
                                            2,
                                            {
                                                v: {
                                                    type: "aborted"
                                                }
                                            }
                                        ];
                                        le = Sa(F, z, m), W = null;
                                        if (le) {
                                            if (Object.keys(le[0].params).length === 0) return [
                                                2,
                                                {
                                                    v: {
                                                        type: "success",
                                                        matches: le
                                                    }
                                                }
                                            ];
                                            if (W = Lu(F, z, m, !0), !(W && Z.length < W.length && Ju(Z, W.slice(0, Z.length)))) return [
                                                2,
                                                {
                                                    v: {
                                                        type: "success",
                                                        matches: le
                                                    }
                                                }
                                            ];
                                        }
                                        if (W || (W = Lu(F, z, m, !0)), !W || Ju(Z, W)) return [
                                            2,
                                            {
                                                v: {
                                                    type: "success",
                                                    matches: null
                                                }
                                            }
                                        ];
                                        Z = W;
                                        return [
                                            2
                                        ];
                                }
                            });
                        };
                        if (!u.patchRoutesOnNavigation) return [
                            2,
                            {
                                type: "success",
                                matches: S
                            }
                        ];
                        Z = S;
                        _state.label = 1;
                    case 1:
                        return [
                            5,
                            _ts_values(_loop())
                        ];
                    case 2:
                        _ret = _state.sent();
                        if (_type_of(_ret) === "object") return [
                            2,
                            _ret.v
                        ];
                        _state.label = 3;
                    case 3:
                        return [
                            3,
                            1
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        })();
    }
    function Ju(S, z) {
        return S.length === z.length && S.every(function(C, G) {
            return C.route.id === z[G].route.id;
        });
    }
    function Fu(S) {
        y = {}, g = Bu(S, d, void 0, y);
    }
    function $u(S, z) {
        var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
        var G = g == null;
        om(S, z, g || v, y, d, C), G && (v = _to_consumable_array(v), yt({}));
    }
    return re = {
        get basename () {
            return m;
        },
        get future () {
            return E;
        },
        get state () {
            return D;
        },
        get routes () {
            return v;
        },
        get window () {
            return r;
        },
        initialize: Ra,
        subscribe: wn,
        enableScrollRestoration: Fa,
        navigate: Ka,
        fetch: pr,
        revalidate: Bn,
        createHref: function createHref(S) {
            return u.history.createHref(S);
        },
        encodeLocation: function encodeLocation(S) {
            return u.history.encodeLocation(S);
        },
        getFetcher: Vu,
        resetFetcher: br,
        deleteFetcher: _t,
        dispose: Za,
        getBlocker: Er,
        deleteBlocker: za,
        patchRoutes: $u,
        _internalFetchControllers: ae,
        _internalSetRoutes: Fu,
        _internalSetStateDoNotUseOrYouWillBreakYourApp: function _internalSetStateDoNotUseOrYouWillBreakYourApp(S) {
            yt(S);
        }
    }, u.unstable_instrumentations && (re = ag(re, u.unstable_instrumentations.map(function(S) {
        return S.router;
    }).filter(Boolean))), re;
}
function yg(u) {
    return u != null && ("formData" in u && u.formData != null || "body" in u && u.body !== void 0);
}
function Qc(u, r, o, f, s, d) {
    var y, v;
    if (s) {
        y = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var m = _step.value;
                if (y.push(m), m.route.id === s) {
                    v = m;
                    break;
                }
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
    } else y = r, v = r[r.length - 1];
    var g = Yu(f || ".", mr(y), nl(u.pathname, o) || u.pathname, d === "path");
    if (f == null && (g.search = u.search, g.hash = u.hash), (f == null || f === "" || f === ".") && v) {
        var m1 = Ic(g.search);
        if (v.route.index && !m1) g.search = g.search ? g.search.replace(/^\?/, "?index&") : "?index";
        else if (!v.route.index && m1) {
            var M = new URLSearchParams(g.search), E = M.getAll("index");
            M.delete("index"), E.filter(function(A) {
                return A;
            }).forEach(function(A) {
                return M.append("index", A);
            });
            var L = M.toString();
            g.search = L ? "?".concat(L) : "";
        }
    }
    return o !== "/" && (g.pathname = k0({
        basename: o,
        pathname: g.pathname
    })), El(g);
}
function fm(u, r, o) {
    if (!o || !yg(o)) return {
        path: r
    };
    if (o.formMethod && !Hg(o.formMethod)) return {
        path: r,
        error: al(405, {
            method: o.formMethod
        })
    };
    var f = function f() {
        return {
            path: r,
            error: al(400, {
                type: "invalid-body"
            })
        };
    }, d = (o.formMethod || "get").toUpperCase(), y = km(r);
    if (o.body !== void 0) {
        if (o.formEncType === "text/plain") {
            if (!At(d)) return f();
            var E = typeof o.body == "string" ? o.body : _instanceof1(o.body, FormData) || _instanceof1(o.body, URLSearchParams) ? Array.from(o.body.entries()).reduce(function(L, param) {
                var _param = _sliced_to_array(param, 2), A = _param[0], Y = _param[1];
                return "".concat(L).concat(A, "=").concat(Y, "\n");
            }, "") : String(o.body);
            return {
                path: r,
                submission: {
                    formMethod: d,
                    formAction: y,
                    formEncType: o.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: E
                }
            };
        } else if (o.formEncType === "application/json") {
            if (!At(d)) return f();
            try {
                var E1 = typeof o.body == "string" ? JSON.parse(o.body) : o.body;
                return {
                    path: r,
                    submission: {
                        formMethod: d,
                        formAction: y,
                        formEncType: o.formEncType,
                        formData: void 0,
                        json: E1,
                        text: void 0
                    }
                };
            } catch (unused) {
                return f();
            }
        }
    }
    Re(typeof FormData == "function", "FormData is not available in this environment");
    var v, g;
    if (o.formData) v = Zc(o.formData), g = o.formData;
    else if (_instanceof1(o.body, FormData)) v = Zc(o.body), g = o.body;
    else if (_instanceof1(o.body, URLSearchParams)) v = o.body, g = vm(v);
    else if (o.body == null) v = new URLSearchParams, g = new FormData;
    else try {
        v = new URLSearchParams(o.body), g = vm(v);
    } catch (unused) {
        return f();
    }
    var m = {
        formMethod: d,
        formAction: y,
        formEncType: o && o.formEncType || "application/x-www-form-urlencoded",
        formData: g,
        json: void 0,
        text: void 0
    };
    if (At(m.formMethod)) return {
        path: r,
        submission: m
    };
    var M = hl(r);
    return u && M.search && Ic(M.search) && v.append("index", ""), M.search = "?".concat(v), {
        path: El(M),
        submission: m
    };
}
function cm(u, r, o, f, s, d, y, v, g, m, M, E, L, A, Y, X, K, ie, I, k, xe) {
    var _d_matches_;
    var ve = k ? Zt(k[1]) ? k[1].error : k[1].data : void 0, pe = s.createURL(d.location), re = s.createURL(g), D;
    if (M && d.errors) {
        var de = Object.keys(d.errors)[0];
        D = y.findIndex(function(x) {
            return x.route.id === de;
        });
    } else if (k && Zt(k[1])) {
        var de1 = k[0];
        D = y.findIndex(function(x) {
            return x.route.id === de1;
        }) - 1;
    }
    var Ee = k ? k[1].statusCode : void 0, Ce = Ee && Ee >= 400, Ve = _object_spread_props(_object_spread({
        currentUrl: pe,
        currentParams: ((_d_matches_ = d.matches[0]) === null || _d_matches_ === void 0 ? void 0 : _d_matches_.params) || {},
        nextUrl: re,
        nextParams: y[0].params
    }, v), {
        actionResult: ve,
        actionStatus: Ee
    }), me = qu(y), tt = y.map(function(de, x) {
        var Q = de.route, ee = null;
        if (D != null && x > D) ee = !1;
        else if (Q.lazy) ee = !0;
        else if (!kc(Q)) ee = !1;
        else if (M) {
            var _Vm = Vm(Q, d.loaderData, d.errors), B = _Vm.shouldLoad;
            ee = B;
        } else vg(d.loaderData, d.matches[x], de) && (ee = !0);
        if (ee !== null) return Vc(o, f, u, g, me, de, m, r, ee);
        var ae = !1;
        typeof xe == "boolean" ? ae = xe : Ce ? ae = !1 : (E || pe.pathname + pe.search === re.pathname + re.search || pe.search !== re.search || gg(d.matches[x], de)) && (ae = !0);
        var Se = _object_spread_props(_object_spread({}, Ve), {
            defaultShouldRevalidate: ae
        }), b = wu(de, Se);
        return Vc(o, f, u, g, me, de, m, r, b, Se, xe);
    }), Ue = [];
    return Y.forEach(function(de, x) {
        if (M || !y.some(function(J) {
            return J.route.id === de.routeId;
        }) || A.has(x)) return;
        var Q = d.fetchers.get(x), ee = Q && Q.state !== "idle" && Q.data === void 0, ae = Sa(K, de.path, ie);
        if (!ae) {
            if (I && ee) return;
            Ue.push({
                key: x,
                routeId: de.routeId,
                path: de.path,
                matches: null,
                match: null,
                request: null,
                controller: null
            });
            return;
        }
        if (X.has(x)) return;
        var Se = or(ae, de.path), b = new AbortController, B = Nn(s, de.path, b.signal), V = null;
        if (L.has(x)) L.delete(x), V = Hn(o, f, B, de.path, ae, Se, m, r);
        else if (ee) E && (V = Hn(o, f, B, de.path, ae, Se, m, r));
        else {
            var J;
            typeof xe == "boolean" ? J = xe : Ce ? J = !1 : J = E;
            var oe = _object_spread_props(_object_spread({}, Ve), {
                defaultShouldRevalidate: J
            });
            wu(Se, oe) && (V = Hn(o, f, B, de.path, ae, Se, m, r, oe));
        }
        V && Ue.push({
            key: x,
            routeId: de.routeId,
            path: de.path,
            matches: V,
            match: Se,
            request: B,
            controller: b
        });
    }), {
        dsMatches: tt,
        revalidatingFetchers: Ue
    };
}
function kc(u) {
    return u.loader != null || u.middleware != null && u.middleware.length > 0;
}
function Vm(u, r, o) {
    if (u.lazy) return {
        shouldLoad: !0,
        renderFallback: !0
    };
    if (!kc(u)) return {
        shouldLoad: !1,
        renderFallback: !1
    };
    var f = r != null && u.id in r, s = o != null && o[u.id] !== void 0;
    if (!f && s) return {
        shouldLoad: !1,
        renderFallback: !1
    };
    if (typeof u.loader == "function" && u.loader.hydrate === !0) return {
        shouldLoad: !0,
        renderFallback: !f
    };
    var d = !f && !s;
    return {
        shouldLoad: d,
        renderFallback: d
    };
}
function vg(u, r, o) {
    var f = !r || o.route.id !== r.route.id, s = !u.hasOwnProperty(o.route.id);
    return f || s;
}
function gg(u, r) {
    var o = u.route.path;
    return u.pathname !== r.pathname || o != null && o.endsWith("*") && u.params["*"] !== r.params["*"];
}
function wu(u, r) {
    if (u.route.shouldRevalidate) {
        var o = u.route.shouldRevalidate(r);
        if (typeof o == "boolean") return o;
    }
    return r.defaultShouldRevalidate;
}
function om(u, r, o, f, s, d) {
    var y;
    if (u) {
        var m = f[u];
        Re(m, "No route found to patch children into: routeId = ".concat(u)), m.children || (m.children = []), y = m.children;
    } else y = o;
    var v = [], g = [];
    if (r.forEach(function(m) {
        var M = y.find(function(E) {
            return Zm(m, E);
        });
        M ? g.push({
            existingRoute: M,
            newRoute: m
        }) : v.push(m);
    }), v.length > 0) {
        var _y;
        var m1 = Bu(v, s, [
            u || "_",
            "patch",
            String((y === null || y === void 0 ? void 0 : y.length) || "0")
        ], f);
        (_y = y).push.apply(_y, _to_consumable_array(m1));
    }
    if (d && g.length > 0) for(var m2 = 0; m2 < g.length; m2++){
        var _g_m = g[m2], M = _g_m.existingRoute, E = _g_m.newRoute, L = M, _Bu = _sliced_to_array(Bu([
            E
        ], s, [], {}, !0), 1), A = _Bu[0];
        Object.assign(L, {
            element: A.element ? A.element : L.element,
            errorElement: A.errorElement ? A.errorElement : L.errorElement,
            hydrateFallbackElement: A.hydrateFallbackElement ? A.hydrateFallbackElement : L.hydrateFallbackElement
        });
    }
}
function Zm(u, r) {
    var _ref;
    var _u_children;
    return "id" in u && "id" in r && u.id === r.id ? !0 : u.index === r.index && u.path === r.path && u.caseSensitive === r.caseSensitive ? (!u.children || u.children.length === 0) && (!r.children || r.children.length === 0) ? !0 : (_ref = (_u_children = u.children) === null || _u_children === void 0 ? void 0 : _u_children.every(function(o, f) {
        var _r_children;
        return (_r_children = r.children) === null || _r_children === void 0 ? void 0 : _r_children.some(function(s) {
            return Zm(o, s);
        });
    })) !== null && _ref !== void 0 ? _ref : !1 : !1;
}
var sm = new WeakMap, Km = function Km(param) {
    var u = param.key, r = param.route, o = param.manifest, f = param.mapRouteProperties;
    var s = o[r.id];
    if (Re(s, "No route found in manifest"), !s.lazy || _type_of(s.lazy) != "object") return;
    var d = s.lazy[u];
    if (!d) return;
    var y = sm.get(s);
    y || (y = {}, sm.set(s, y));
    var v = y[u];
    if (v) return v;
    var g = function() {
        return _async_to_generator(function() {
            var m, E, L;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        m = H0(u), E = s[u] !== void 0 && u !== "hasErrorBoundary";
                        if (!m) return [
                            3,
                            1
                        ];
                        et(!m, "Route property " + u + " is not a supported lazy route property. This property will be ignored."), y[u] = Promise.resolve();
                        return [
                            3,
                            4
                        ];
                    case 1:
                        if (!E) return [
                            3,
                            2
                        ];
                        et(!1, 'Route "'.concat(s.id, '" has a static property "').concat(u, '" defined. The lazy property will be ignored.'));
                        return [
                            3,
                            4
                        ];
                    case 2:
                        return [
                            4,
                            d()
                        ];
                    case 3:
                        L = _state.sent();
                        L != null && (Object.assign(s, _define_property({}, u, L)), Object.assign(s, f(s)));
                        _state.label = 4;
                    case 4:
                        _type_of(s.lazy) == "object" && (s.lazy[u] = void 0, Object.values(s.lazy).every(function(L) {
                            return L === void 0;
                        }) && (s.lazy = void 0));
                        return [
                            2
                        ];
                }
            });
        })();
    }();
    return y[u] = g, g;
}, dm = new WeakMap;
function pg(u, r, o, f, s) {
    var d = o[u.id];
    if (Re(d, "No route found in manifest"), !u.lazy) return {
        lazyRoutePromise: void 0,
        lazyHandlerPromise: void 0
    };
    if (typeof u.lazy == "function") {
        var M = dm.get(d);
        if (M) return {
            lazyRoutePromise: M,
            lazyHandlerPromise: M
        };
        var E = function() {
            return _async_to_generator(function() {
                var L, A, Y, X, K, I;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            Re(typeof u.lazy == "function", "No lazy route function found");
                            return [
                                4,
                                u.lazy()
                            ];
                        case 1:
                            L = _state.sent(), A = {};
                            for(var Y in L){
                                X = L[Y];
                                if (X === void 0) continue;
                                K = w0(Y), I = d[Y] !== void 0 && Y !== "hasErrorBoundary";
                                K ? et(!K, "Route property " + Y + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : I ? et(!I, 'Route "'.concat(d.id, '" has a static property "').concat(Y, '" defined but its lazy function is also returning a value for this property. The lazy route property "').concat(Y, '" will be ignored.')) : A[Y] = X;
                            }
                            Object.assign(d, A), Object.assign(d, _object_spread_props(_object_spread({}, f(d)), {
                                lazy: void 0
                            }));
                            return [
                                2
                            ];
                    }
                });
            })();
        }();
        return dm.set(d, E), E.catch(function() {}), {
            lazyRoutePromise: E,
            lazyHandlerPromise: E
        };
    }
    var y = Object.keys(u.lazy), v = [], g;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = y[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var M1 = _step.value;
            if (s && s.includes(M1)) continue;
            var E1 = Km({
                key: M1,
                route: u,
                manifest: o,
                mapRouteProperties: f
            });
            E1 && (v.push(E1), M1 === r && (g = E1));
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
    var m = v.length > 0 ? Promise.all(v).then(function() {}) : void 0;
    return m === null || m === void 0 ? void 0 : m.catch(function() {}), g === null || g === void 0 ? void 0 : g.catch(function() {}), {
        lazyRoutePromise: m,
        lazyHandlerPromise: g
    };
}
function hm(u) {
    return _async_to_generator(function() {
        var r, o;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    r = u.matches.filter(function(s) {
                        return s.shouldLoad;
                    }), o = {};
                    return [
                        4,
                        Promise.all(r.map(function(s) {
                            return s.resolve();
                        }))
                    ];
                case 1:
                    return [
                        2,
                        (_state.sent().forEach(function(s, d) {
                            o[r[d].route.id] = s;
                        }), o)
                    ];
            }
        });
    })();
}
function Sg(u) {
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                u.matches.some(function(r) {
                    return r.route.middleware;
                }) ? Jm(u, function() {
                    return hm(u);
                }) : hm(u)
            ];
        });
    })();
}
function Jm(u, r) {
    return bg(u, r, function(f) {
        if (xg(f)) throw f;
        return f;
    }, _g, o);
    function o(f, s, d) {
        if (d) return Promise.resolve(Object.assign(d.value, _define_property({}, s, {
            type: "error",
            result: f
        })));
        {
            var y = u.matches, v = Math.min(Math.max(y.findIndex(function(m) {
                return m.route.id === s;
            }), 0), Math.max(y.findIndex(function(m) {
                return m.shouldCallHandler();
            }), 0)), g = ba(y, y[v].route.id).route.id;
            return Promise.resolve(_define_property({}, g, {
                type: "error",
                result: f
            }));
        }
    }
}
function bg(u, r, o, f, s) {
    return _async_to_generator(function() {
        var d, y, v;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    d = u.matches, y = _object_without_properties(u, [
                        "matches"
                    ]), v = d.flatMap(function(m) {
                        return m.route.middleware ? m.route.middleware.map(function(M) {
                            return [
                                m.route.id,
                                M
                            ];
                        }) : [];
                    });
                    return [
                        4,
                        Fm(y, v, r, o, f, s)
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    })();
}
function Fm(u, r, o, f, s, d) {
    var y = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0;
    return _async_to_generator(function() {
        var _v_signal_reason, v, g, _g, m, M, E, L, _$A, Y, _tmp, _tmp1, _tmp2, A;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    v = u.request;
                    if (v.signal.aborted) throw (_v_signal_reason = v.signal.reason) !== null && _v_signal_reason !== void 0 ? _v_signal_reason : new Error("Request aborted: ".concat(v.method, " ").concat(v.url));
                    g = r[y];
                    if (!!g) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        o()
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
                case 2:
                    _g = _sliced_to_array(g, 2), m = _g[0], M = _g[1], L = function L() {
                        return _async_to_generator(function() {
                            var _tmp, A, _tmp1;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        if (E) throw new Error("You may only call `next()` once per middleware");
                                        _state.label = 1;
                                    case 1:
                                        _state.trys.push([
                                            1,
                                            3,
                                            ,
                                            5
                                        ]);
                                        _tmp = {};
                                        return [
                                            4,
                                            Fm(u, r, o, f, s, d, y + 1)
                                        ];
                                    case 2:
                                        return [
                                            2,
                                            (E = (_tmp.value = _state.sent(), _tmp), E.value)
                                        ];
                                    case 3:
                                        A = _state.sent();
                                        _tmp1 = {};
                                        return [
                                            4,
                                            d(A, m, E)
                                        ];
                                    case 4:
                                        return [
                                            2,
                                            (E = (_tmp1.value = _state.sent(), _tmp1), E.value)
                                        ];
                                    case 5:
                                        return [
                                            2
                                        ];
                                }
                            });
                        })();
                    };
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        10,
                        ,
                        12
                    ]);
                    return [
                        4,
                        M(u, L)
                    ];
                case 4:
                    _$A = _state.sent(), Y = _$A != null ? f(_$A) : void 0;
                    if (!s(Y)) return [
                        3,
                        5
                    ];
                    _tmp = Y;
                    return [
                        3,
                        9
                    ];
                case 5:
                    if (!E) return [
                        3,
                        6
                    ];
                    _tmp1 = Y !== null && Y !== void 0 ? Y : E.value;
                    return [
                        3,
                        8
                    ];
                case 6:
                    _tmp2 = {};
                    return [
                        4,
                        L()
                    ];
                case 7:
                    _tmp1 = (E = (_tmp2.value = _state.sent(), _tmp2), E.value);
                    _state.label = 8;
                case 8:
                    _tmp = _tmp1;
                    _state.label = 9;
                case 9:
                    return [
                        2,
                        _tmp
                    ];
                case 10:
                    A = _state.sent();
                    return [
                        4,
                        d(A, m, E)
                    ];
                case 11:
                    return [
                        2,
                        _state.sent()
                    ];
                case 12:
                    return [
                        2
                    ];
            }
        });
    })();
}
function $m(u, r, o, f, s) {
    var d = Km({
        key: "middleware",
        route: f.route,
        manifest: r,
        mapRouteProperties: u
    }), y = pg(f.route, At(o.method) ? "action" : "loader", r, u, s);
    return {
        middleware: d,
        route: y.lazyRoutePromise,
        handler: y.lazyHandlerPromise
    };
}
function Vc(u, r, o, f, s, d, y, v, g) {
    var m = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : null, M = arguments.length > 10 ? arguments[10] : void 0;
    var E = !1, L = $m(u, r, o, d, y);
    return _object_spread_props(_object_spread({}, d), {
        _lazyPromises: L,
        shouldLoad: g,
        shouldRevalidateArgs: m,
        shouldCallHandler: function shouldCallHandler(A) {
            return E = !0, m ? typeof M == "boolean" ? wu(d, _object_spread_props(_object_spread({}, m), {
                defaultShouldRevalidate: M
            })) : typeof A == "boolean" ? wu(d, _object_spread_props(_object_spread({}, m), {
                defaultShouldRevalidate: A
            })) : wu(d, m) : g;
        },
        resolve: function resolve(A) {
            var _d_route = d.route, Y = _d_route.lazy, X = _d_route.loader, K = _d_route.middleware, ie = E || g || A && !At(o.method) && (Y || X), I = K && K.length > 0 && !X && !Y;
            return ie && (At(o.method) || !I) ? Rg({
                request: o,
                path: f,
                unstable_pattern: s,
                match: d,
                lazyHandlerPromise: L === null || L === void 0 ? void 0 : L.handler,
                lazyRoutePromise: L === null || L === void 0 ? void 0 : L.route,
                handlerOverride: A,
                scopedContext: v
            }) : Promise.resolve({
                type: "data",
                result: void 0
            });
        }
    });
}
function Hn(u, r, o, f, s, d, y, v) {
    var g = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : null;
    return s.map(function(m) {
        return m.route.id !== d.route.id ? _object_spread_props(_object_spread({}, m), {
            shouldLoad: !1,
            shouldRevalidateArgs: g,
            shouldCallHandler: function shouldCallHandler() {
                return !1;
            },
            _lazyPromises: $m(u, r, o, m, y),
            resolve: function resolve() {
                return Promise.resolve({
                    type: "data",
                    result: void 0
                });
            }
        }) : Vc(u, r, o, f, qu(s), m, y, v, !0, g);
    });
}
function Eg(u, r, o, f, s, d, y) {
    return _async_to_generator(function() {
        var _tmp, v, m, unused;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _tmp = f.some(function(M) {
                        var _M__lazyPromises;
                        return (_M__lazyPromises = M._lazyPromises) === null || _M__lazyPromises === void 0 ? void 0 : _M__lazyPromises.middleware;
                    });
                    if (!_tmp) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        Promise.all(f.map(function(M) {
                            var _M__lazyPromises;
                            return (_M__lazyPromises = M._lazyPromises) === null || _M__lazyPromises === void 0 ? void 0 : _M__lazyPromises.middleware;
                        }))
                    ];
                case 1:
                    _tmp = _state.sent();
                    _state.label = 2;
                case 2:
                    _tmp;
                    v = {
                        request: r,
                        unstable_url: Wm(r, o),
                        unstable_pattern: qu(f),
                        params: f[0].params,
                        context: d,
                        matches: f
                    };
                    return [
                        4,
                        u(_object_spread_props(_object_spread({}, v), {
                            fetcherKey: s,
                            runClientMiddleware: function runClientMiddleware(M) {
                                var E = v;
                                return Jm(E, function() {
                                    return M(_object_spread_props(_object_spread({}, E), {
                                        fetcherKey: s,
                                        runClientMiddleware: function runClientMiddleware() {
                                            throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler");
                                        }
                                    }));
                                });
                            }
                        }))
                    ];
                case 3:
                    m = _state.sent();
                    _state.label = 4;
                case 4:
                    _state.trys.push([
                        4,
                        6,
                        ,
                        7
                    ]);
                    return [
                        4,
                        Promise.all(f.flatMap(function(M) {
                            var _M__lazyPromises, _M__lazyPromises1;
                            return [
                                (_M__lazyPromises = M._lazyPromises) === null || _M__lazyPromises === void 0 ? void 0 : _M__lazyPromises.handler,
                                (_M__lazyPromises1 = M._lazyPromises) === null || _M__lazyPromises1 === void 0 ? void 0 : _M__lazyPromises1.route
                            ];
                        }))
                    ];
                case 5:
                    _state.sent();
                    return [
                        3,
                        7
                    ];
                case 6:
                    unused = _state.sent();
                    return [
                        3,
                        7
                    ];
                case 7:
                    return [
                        2,
                        m
                    ];
            }
        });
    })();
}
function Rg(_0) {
    return _async_to_generator(function(param) {
        var u, r, o, f, s, d, y, v, g, m, M, E, L, _$A, Y, _ref, X, Y1, ref, X1, K, Y2, X2, A;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    u = param.request, r = param.path, o = param.unstable_pattern, f = param.match, s = param.lazyHandlerPromise, d = param.lazyRoutePromise, y = param.handlerOverride, v = param.scopedContext;
                    M = At(u.method), E = M ? "action" : "loader", L = function L(A) {
                        var Y, X = new Promise(function(I, k) {
                            return Y = k;
                        });
                        m = function m() {
                            return Y();
                        }, u.signal.addEventListener("abort", m);
                        var K = function K(I) {
                            return typeof A != "function" ? Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "'.concat(E, '" [routeId: ').concat(f.route.id, "]"))) : A.apply(void 0, [
                                {
                                    request: u,
                                    unstable_url: Wm(u, r),
                                    unstable_pattern: o,
                                    params: f.params,
                                    context: v
                                }
                            ].concat(_to_consumable_array(I !== void 0 ? [
                                I
                            ] : [])));
                        }, ie = function() {
                            return _async_to_generator(function() {
                                var _tmp, I;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            _state.trys.push([
                                                0,
                                                2,
                                                ,
                                                3
                                            ]);
                                            _tmp = {
                                                type: "data"
                                            };
                                            return [
                                                4,
                                                y ? y(function(k) {
                                                    return K(k);
                                                }) : K()
                                            ];
                                        case 1:
                                            return [
                                                2,
                                                (_tmp.result = _state.sent(), _tmp)
                                            ];
                                        case 2:
                                            I = _state.sent();
                                            return [
                                                2,
                                                {
                                                    type: "error",
                                                    result: I
                                                }
                                            ];
                                        case 3:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })();
                        }();
                        return Promise.race([
                            ie,
                            X
                        ]);
                    };
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        12,
                        13,
                        14
                    ]);
                    _$A = M ? f.route.action : f.route.loader;
                    if (!(s || d)) return [
                        3,
                        8
                    ];
                    if (!_$A) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        Promise.all([
                            L(_$A).catch(function(K) {
                                Y = K;
                            }),
                            s,
                            d
                        ])
                    ];
                case 2:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), X = _ref[0];
                    if (Y !== void 0) throw Y;
                    g = X;
                    return [
                        3,
                        7
                    ];
                case 3:
                    return [
                        4,
                        s
                    ];
                case 4:
                    _state.sent();
                    Y1 = M ? f.route.action : f.route.loader;
                    if (!Y1) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        Promise.all([
                            L(Y1),
                            d
                        ])
                    ];
                case 5:
                    ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), g = ref[0], ref;
                    return [
                        3,
                        7
                    ];
                case 6:
                    if (E === "action") {
                        X1 = new URL(u.url), K = X1.pathname + X1.search;
                        throw al(405, {
                            method: u.method,
                            pathname: K,
                            routeId: f.route.id
                        });
                    } else return [
                        2,
                        {
                            type: "data",
                            result: void 0
                        }
                    ];
                    _state.label = 7;
                case 7:
                    return [
                        3,
                        11
                    ];
                case 8:
                    if (!_$A) return [
                        3,
                        10
                    ];
                    return [
                        4,
                        L(_$A)
                    ];
                case 9:
                    g = _state.sent();
                    return [
                        3,
                        11
                    ];
                case 10:
                    Y2 = new URL(u.url), X2 = Y2.pathname + Y2.search;
                    throw al(404, {
                        pathname: X2
                    });
                case 11:
                    return [
                        3,
                        14
                    ];
                case 12:
                    A = _state.sent();
                    return [
                        2,
                        {
                            type: "error",
                            result: A
                        }
                    ];
                case 13:
                    m && u.signal.removeEventListener("abort", m);
                    return [
                        7
                    ];
                case 14:
                    return [
                        2,
                        g
                    ];
            }
        });
    }).apply(this, arguments);
}
function zg(u) {
    return _async_to_generator(function() {
        var r;
        return _ts_generator(this, function(_state) {
            r = u.headers.get("Content-Type");
            return [
                2,
                r && /\bapplication\/json\b/.test(r) ? u.body == null ? null : u.json() : u.text()
            ];
        });
    })();
}
function Tg(u) {
    return _async_to_generator(function() {
        var _r_init, _r_init1, _r_init2, _r_init3, _r_init4, r, o, f, s;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    r = u.result, o = u.type;
                    if (!Pc(r)) return [
                        3,
                        5
                    ];
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        zg(r)
                    ];
                case 2:
                    f = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    s = _state.sent();
                    return [
                        2,
                        {
                            type: "error",
                            error: s
                        }
                    ];
                case 4:
                    return [
                        2,
                        o === "error" ? {
                            type: "error",
                            error: new yr(r.status, r.statusText, f),
                            statusCode: r.status,
                            headers: r.headers
                        } : {
                            type: "data",
                            data: f,
                            statusCode: r.status,
                            headers: r.headers
                        }
                    ];
                case 5:
                    return [
                        2,
                        o === "error" ? bm(r) ? _instanceof1(r.data, Error) ? {
                            type: "error",
                            error: r.data,
                            statusCode: (_r_init = r.init) === null || _r_init === void 0 ? void 0 : _r_init.status,
                            headers: ((_r_init1 = r.init) === null || _r_init1 === void 0 ? void 0 : _r_init1.headers) ? new Headers(r.init.headers) : void 0
                        } : {
                            type: "error",
                            error: Og(r),
                            statusCode: ju(r) ? r.status : void 0,
                            headers: ((_r_init2 = r.init) === null || _r_init2 === void 0 ? void 0 : _r_init2.headers) ? new Headers(r.init.headers) : void 0
                        } : {
                            type: "error",
                            error: r,
                            statusCode: ju(r) ? r.status : void 0
                        } : bm(r) ? {
                            type: "data",
                            data: r.data,
                            statusCode: (_r_init3 = r.init) === null || _r_init3 === void 0 ? void 0 : _r_init3.status,
                            headers: ((_r_init4 = r.init) === null || _r_init4 === void 0 ? void 0 : _r_init4.headers) ? new Headers(r.init.headers) : void 0
                        } : {
                            type: "data",
                            data: r
                        }
                    ];
            }
        });
    })();
}
function Mg(u, r, o, f, s) {
    var d = u.headers.get("Location");
    if (Re(d, "Redirects returned/thrown from loaders/actions must have a Location header"), !Wc(d)) {
        var y = f.slice(0, f.findIndex(function(v) {
            return v.route.id === o;
        }) + 1);
        d = Qc(new URL(r.url), y, s, d), u.headers.set("Location", d);
    }
    return u;
}
var mm = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    "javascript:"
];
function ym(u, r, o, f) {
    if (Wc(u)) {
        var s = u, d = s.startsWith("//") ? new URL(r.protocol + s) : new URL(s);
        if (mm.includes(d.protocol)) throw new Error("Invalid redirect location");
        var y = nl(d.pathname, o) != null;
        if (d.origin === r.origin && y) return d.pathname + d.search + d.hash;
    }
    try {
        var s1 = f.createURL(u);
        if (mm.includes(s1.protocol)) throw new Error("Invalid redirect location");
    } catch (unused) {}
    return u;
}
function Nn(u, r, o, f) {
    var s = u.createURL(km(r)).toString(), d = {
        signal: o
    };
    if (f && At(f.formMethod)) {
        var y = f.formMethod, v = f.formEncType;
        d.method = y.toUpperCase(), v === "application/json" ? (d.headers = new Headers({
            "Content-Type": v
        }), d.body = JSON.stringify(f.json)) : v === "text/plain" ? d.body = f.text : v === "application/x-www-form-urlencoded" && f.formData ? d.body = Zc(f.formData) : d.body = f.formData;
    }
    return new Request(s, d);
}
function Wm(u, r) {
    var o = new URL(u.url), f = typeof r == "string" ? hl(r) : r;
    if (o.pathname = f.pathname || "/", f.search) {
        var s = new URLSearchParams(f.search), d = s.getAll("index");
        s.delete("index");
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = d.filter(Boolean)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var y = _step.value;
                s.append("index", y);
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
        o.search = s.size ? "?".concat(s.toString()) : "";
    } else o.search = "";
    return o.hash = f.hash || "", o;
}
function Zc(u) {
    var r = new URLSearchParams;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = u.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), o = _step_value[0], f = _step_value[1];
            r.append(o, typeof f == "string" ? f : f.name);
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
    return r;
}
function vm(u) {
    var r = new FormData;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = u.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), o = _step_value[0], f = _step_value[1];
            r.append(o, f);
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
    return r;
}
function Dg(u, r, o) {
    var f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    var d = {}, y = null, v, g = !1, m = {}, M = o && Zt(o[1]) ? o[1].error : void 0;
    return u.forEach(function(E) {
        if (!(E.route.id in r)) return;
        var L = E.route.id, A = r[L];
        if (Re(!Qa(A), "Cannot handle redirect results in processLoaderData"), Zt(A)) {
            var Y = A.error;
            if (M !== void 0 && (Y = M, M = void 0), y = y || {}, s) y[L] = Y;
            else {
                var X = ba(u, L);
                y[X.route.id] == null && (y[X.route.id] = Y);
            }
            f || (d[L] = Qm), g || (g = !0, v = ju(A.error) ? A.error.status : 500), A.headers && (m[L] = A.headers);
        } else d[L] = A.data, A.statusCode && A.statusCode !== 200 && !g && (v = A.statusCode), A.headers && (m[L] = A.headers);
    }), M !== void 0 && o && (y = _define_property({}, o[0], M), o[2] && (d[o[2]] = void 0)), {
        loaderData: d,
        errors: y,
        statusCode: v || 200,
        loaderHeaders: m
    };
}
function gm(u, r, o, f, s, d) {
    var _Dg = Dg(r, o, f), y = _Dg.loaderData, v = _Dg.errors;
    return s.filter(function(g) {
        return !g.matches || g.matches.some(function(m) {
            return m.shouldLoad;
        });
    }).forEach(function(g) {
        var m = g.key, M = g.match, E = g.controller;
        if (E && E.signal.aborted) return;
        var L = d[m];
        if (Re(L, "Did not find corresponding fetcher result"), Zt(L)) {
            var A = ba(u.matches, M === null || M === void 0 ? void 0 : M.route.id);
            v && v[A.route.id] || (v = _object_spread_props(_object_spread({}, v), _define_property({}, A.route.id, L.error))), u.fetchers.delete(m);
        } else if (Qa(L)) Re(!1, "Unhandled fetcher revalidation redirect");
        else {
            var A1 = Vl(L.data);
            u.fetchers.set(m, A1);
        }
    }), {
        loaderData: y,
        errors: v
    };
}
function pm(u, r, o, f) {
    var s = Object.entries(r).filter(function(param) {
        var _param = _sliced_to_array(param, 2), d = _param[1];
        return d !== Qm;
    }).reduce(function(d, param) {
        var _param = _sliced_to_array(param, 2), y = _param[0], v = _param[1];
        return d[y] = v, d;
    }, {});
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = o[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var d = _step.value;
            var y = d.route.id;
            if (!r.hasOwnProperty(y) && u.hasOwnProperty(y) && d.route.loader && (s[y] = u[y]), f && f.hasOwnProperty(y)) break;
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
    return s;
}
function Sm(u) {
    return u ? Zt(u[1]) ? {
        actionData: {}
    } : {
        actionData: _define_property({}, u[0], u[1].data)
    } : {};
}
function ba(u, r) {
    return (r ? u.slice(0, u.findIndex(function(f) {
        return f.route.id === r;
    }) + 1) : _to_consumable_array(u)).reverse().find(function(f) {
        return f.route.hasErrorBoundary === !0;
    }) || u[0];
}
function rr(u) {
    var r = u.length === 1 ? u[0] : u.find(function(o) {
        return o.index || !o.path || o.path === "/";
    }) || {
        id: "__shim-error-route__"
    };
    return {
        matches: [
            {
                params: {},
                pathname: "",
                pathnameBase: "",
                route: r
            }
        ],
        route: r
    };
}
function al(u) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = _ref.pathname, o = _ref.routeId, f = _ref.method, s = _ref.type, d = _ref.message;
    var y = "Unknown Server Error", v = "Unknown @remix-run/router error";
    return u === 400 ? (y = "Bad Request", f && r && o ? v = "You made a ".concat(f, ' request to "').concat(r, '" but did not provide a `loader` for route "').concat(o, '", so there is no way to handle the request.') : s === "invalid-body" && (v = "Unable to encode submission body")) : u === 403 ? (y = "Forbidden", v = 'Route "'.concat(o, '" does not match URL "').concat(r, '"')) : u === 404 ? (y = "Not Found", v = 'No route matches URL "'.concat(r, '"')) : u === 405 && (y = "Method Not Allowed", f && r && o ? v = "You made a ".concat(f.toUpperCase(), ' request to "').concat(r, '" but did not provide an `action` for route "').concat(o, '", so there is no way to handle the request.') : f && (v = 'Invalid request method "'.concat(f.toUpperCase(), '"'))), new yr(u || 500, y, new Error(v), !0);
}
function fr(u) {
    var r = Object.entries(u);
    for(var o = r.length - 1; o >= 0; o--){
        var _r_o = _sliced_to_array(r[o], 2), f = _r_o[0], s = _r_o[1];
        if (Qa(s)) return {
            key: f,
            result: s
        };
    }
}
function km(u) {
    var r = typeof u == "string" ? hl(u) : u;
    return El(_object_spread_props(_object_spread({}, r), {
        hash: ""
    }));
}
function Ag(u, r) {
    return u.pathname !== r.pathname || u.search !== r.search ? !1 : u.hash === "" ? r.hash !== "" : u.hash === r.hash ? !0 : r.hash !== "";
}
function Og(u) {
    var _ref, _ref1;
    var _u_init, _u_init1;
    return new yr((_ref = (_u_init = u.init) === null || _u_init === void 0 ? void 0 : _u_init.status) !== null && _ref !== void 0 ? _ref : 500, (_ref1 = (_u_init1 = u.init) === null || _u_init1 === void 0 ? void 0 : _u_init1.statusText) !== null && _ref1 !== void 0 ? _ref1 : "Internal Server Error", u.data);
}
function _g(u) {
    return u != null && (typeof u === "undefined" ? "undefined" : _type_of(u)) == "object" && Object.entries(u).every(function(param) {
        var _param = _sliced_to_array(param, 2), r = _param[0], o = _param[1];
        return typeof r == "string" && Cg(o);
    });
}
function Cg(u) {
    return u != null && (typeof u === "undefined" ? "undefined" : _type_of(u)) == "object" && "type" in u && "result" in u && (u.type === "data" || u.type === "error");
}
function Ug(u) {
    return Pc(u.result) && Gm.has(u.result.status);
}
function Zt(u) {
    return u.type === "error";
}
function Qa(u) {
    return (u && u.type) === "redirect";
}
function bm(u) {
    return (typeof u === "undefined" ? "undefined" : _type_of(u)) == "object" && u != null && "type" in u && "data" in u && "init" in u && u.type === "DataWithResponseInit";
}
function Pc(u) {
    return u != null && typeof u.status == "number" && typeof u.statusText == "string" && _type_of(u.headers) == "object" && _type_of(u.body) < "u";
}
function Ng(u) {
    return Gm.has(u);
}
function xg(u) {
    return Pc(u) && Ng(u.status) && u.headers.has("Location");
}
function Hg(u) {
    return og.has(u.toUpperCase());
}
function At(u) {
    return fg.has(u.toUpperCase());
}
function Ic(u) {
    return new URLSearchParams(u).getAll("index").some(function(r) {
        return r === "";
    });
}
function or(u, r) {
    var o = typeof r == "string" ? hl(r).search : r.search;
    if (u[u.length - 1].route.index && Ic(o || "")) return u[u.length - 1];
    var f = wm(u);
    return f[f.length - 1];
}
function Em(u) {
    var r = u.formMethod, o = u.formAction, f = u.formEncType, s = u.text, d = u.formData, y = u.json;
    if (!(!r || !o || !f)) {
        if (s != null) return {
            formMethod: r,
            formAction: o,
            formEncType: f,
            formData: void 0,
            json: void 0,
            text: s
        };
        if (d != null) return {
            formMethod: r,
            formAction: o,
            formEncType: f,
            formData: d,
            json: void 0,
            text: void 0
        };
        if (y !== void 0) return {
            formMethod: r,
            formAction: o,
            formEncType: f,
            formData: void 0,
            json: y,
            text: void 0
        };
    }
}
function Yc(u, r) {
    return r ? {
        state: "loading",
        location: u,
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text
    } : {
        state: "loading",
        location: u,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    };
}
function Lg(u, r) {
    return {
        state: "submitting",
        location: u,
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text
    };
}
function Nu(u, r) {
    return u ? {
        state: "loading",
        formMethod: u.formMethod,
        formAction: u.formAction,
        formEncType: u.formEncType,
        formData: u.formData,
        json: u.json,
        text: u.text,
        data: r
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: r
    };
}
function wg(u, r) {
    return {
        state: "submitting",
        formMethod: u.formMethod,
        formAction: u.formAction,
        formEncType: u.formEncType,
        formData: u.formData,
        json: u.json,
        text: u.text,
        data: r ? r.data : void 0
    };
}
function Vl(u) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: u
    };
}
function Bg(u, r) {
    try {
        var o = u.sessionStorage.getItem(Xm);
        if (o) {
            var f = JSON.parse(o);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = Object.entries(f || {})[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _sliced_to_array(_step.value, 2), s = _step_value[0], d = _step_value[1];
                    d && Array.isArray(d) && r.set(s, new Set(d || []));
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
    } catch (unused) {}
}
function jg(u, r) {
    if (r.size > 0) {
        var o = {};
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = r[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), _$f = _step_value[0], s = _step_value[1];
                o[_$f] = _to_consumable_array(s);
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
        try {
            u.sessionStorage.setItem(Xm, JSON.stringify(o));
        } catch (f) {
            et(!1, "Failed to save applied view transitions in sessionStorage (".concat(f, ")."));
        }
    }
}
function Rm() {
    var u, r, o = new Promise(function(f, s) {
        u = function u(d) {
            return _async_to_generator(function() {
                var unused;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            f(d);
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                3,
                                ,
                                4
                            ]);
                            return [
                                4,
                                o
                            ];
                        case 2:
                            _state.sent();
                            return [
                                3,
                                4
                            ];
                        case 3:
                            unused = _state.sent();
                            return [
                                3,
                                4
                            ];
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            })();
        }, r = function r(d) {
            return _async_to_generator(function() {
                var unused;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            s(d);
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                3,
                                ,
                                4
                            ]);
                            return [
                                4,
                                o
                            ];
                        case 2:
                            _state.sent();
                            return [
                                3,
                                4
                            ];
                        case 3:
                            unused = _state.sent();
                            return [
                                3,
                                4
                            ];
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            })();
        };
    });
    return {
        promise: o,
        resolve: u,
        reject: r
    };
}
var Va = N.createContext(null);
Va.displayName = "DataRouter";
var Gu = N.createContext(null);
Gu.displayName = "DataRouterState";
var Pm = N.createContext(!1);
function Yg() {
    return N.useContext(Pm);
}
var eo = N.createContext({
    isTransitioning: !1
});
eo.displayName = "ViewTransition";
var Im = N.createContext(new Map);
Im.displayName = "Fetchers";
var qg = N.createContext(null);
qg.displayName = "Await";
var Kt = N.createContext(null);
Kt.displayName = "Navigation";
var vr = N.createContext(null);
vr.displayName = "Location";
var ul = N.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
ul.displayName = "Route";
var to = N.createContext(null);
to.displayName = "RouteError";
var ey = "REACT_ROUTER_ERROR", Gg = "REDIRECT", Xg = "ROUTE_ERROR_RESPONSE";
function Qg(u) {
    if (u.startsWith("".concat(ey, ":").concat(Gg, ":{"))) try {
        var r = JSON.parse(u.slice(28));
        if ((typeof r === "undefined" ? "undefined" : _type_of(r)) == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean") return r;
    } catch (unused) {}
}
function Vg(u) {
    if (u.startsWith("".concat(ey, ":").concat(Xg, ":{"))) try {
        var r = JSON.parse(u.slice(40));
        if ((typeof r === "undefined" ? "undefined" : _type_of(r)) == "object" && r && typeof r.status == "number" && typeof r.statusText == "string") return new yr(r.status, r.statusText, r.data);
    } catch (unused) {}
}
function Zg(u) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = _ref.relative;
    Re(Ln(), "useHref() may be used only in the context of a <Router> component.");
    var _N_useContext = N.useContext(Kt), o = _N_useContext.basename, f = _N_useContext.navigator, _Xu = Xu(u, {
        relative: r
    }), s = _Xu.hash, d = _Xu.pathname, y = _Xu.search, v = d;
    return o !== "/" && (v = d === "/" ? o : dl([
        o,
        d
    ])), f.createHref({
        pathname: v,
        search: y,
        hash: s
    });
}
function Ln() {
    return N.useContext(vr) != null;
}
function Rl() {
    return Re(Ln(), "useLocation() may be used only in the context of a <Router> component."), N.useContext(vr).location;
}
var ty = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ly(u) {
    N.useContext(Kt).static || N.useLayoutEffect(u);
}
function lo() {
    var _N_useContext = N.useContext(ul), u = _N_useContext.isDataRoute;
    return u ? ip() : Kg();
}
function Kg() {
    Re(Ln(), "useNavigate() may be used only in the context of a <Router> component.");
    var u = N.useContext(Va), _N_useContext = N.useContext(Kt), r = _N_useContext.basename, o = _N_useContext.navigator, _N_useContext1 = N.useContext(ul), f = _N_useContext1.matches, _Rl = Rl(), s = _Rl.pathname, d = JSON.stringify(mr(f)), y = N.useRef(!1);
    return ly(function() {
        y.current = !0;
    }), N.useCallback(function(g) {
        var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (et(y.current, ty), !y.current) return;
        if (typeof g == "number") {
            o.go(g);
            return;
        }
        var M = Yu(g, JSON.parse(d), s, m.relative === "path");
        u == null && r !== "/" && (M.pathname = M.pathname === "/" ? r : dl([
            r,
            M.pathname
        ])), (m.replace ? o.replace : o.push)(M, m.state, m);
    }, [
        r,
        o,
        d,
        s,
        u
    ]);
}
var Jg = N.createContext(null);
function Fg(u) {
    var r = N.useContext(ul).outlet;
    return N.useMemo(function() {
        return r && N.createElement(Jg.Provider, {
            value: u
        }, r);
    }, [
        r,
        u
    ]);
}
function e1() {
    var _N_useContext = N.useContext(ul), u = _N_useContext.matches, r = u[u.length - 1];
    return r ? r.params : {};
}
function Xu(u) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = _ref.relative;
    var _N_useContext = N.useContext(ul), o = _N_useContext.matches, _Rl = Rl(), f = _Rl.pathname, s = JSON.stringify(mr(o));
    return N.useMemo(function() {
        return Yu(u, JSON.parse(s), f, r === "path");
    }, [
        u,
        s,
        f,
        r
    ]);
}
function $g(u, r, o) {
    Re(Ln(), "useRoutes() may be used only in the context of a <Router> component.");
    var _N_useContext = N.useContext(Kt), f = _N_useContext.navigator, _N_useContext1 = N.useContext(ul), s = _N_useContext1.matches, d = s[s.length - 1], y = d ? d.params : {}, v = d ? d.pathname : "/", g = d ? d.pathnameBase : "/", m = d && d.route;
    {
        var K = m && m.path || "";
        ny(v, !m || K.endsWith("*") || K.endsWith("*?"), 'You rendered descendant <Routes> (or called `useRoutes()`) at "'.concat(v, '" (under <Route path="').concat(K, '">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="').concat(K, '"> to <Route path="').concat(K === "/" ? "*" : "".concat(K, "/*"), '">.'));
    }
    var M = Rl(), E;
    E = M;
    var L = E.pathname || "/", A = L;
    if (g !== "/") {
        var K1 = g.replace(/^\//, "").split("/");
        A = "/" + L.replace(/^\//, "").split("/").slice(K1.length).join("/");
    }
    var Y = Sa(u, {
        pathname: A
    });
    return et(m || Y != null, 'No routes matched location "'.concat(E.pathname).concat(E.search).concat(E.hash, '" ')), et(Y == null || Y[Y.length - 1].route.element !== void 0 || Y[Y.length - 1].route.Component !== void 0 || Y[Y.length - 1].route.lazy !== void 0, 'Matched leaf route at location "'.concat(E.pathname).concat(E.search).concat(E.hash, '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.')), ep(Y && Y.map(function(K) {
        return Object.assign({}, K, {
            params: Object.assign({}, y, K.params),
            pathname: dl([
                g,
                f.encodeLocation ? f.encodeLocation(K.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : K.pathname
            ]),
            pathnameBase: K.pathnameBase === "/" ? g : dl([
                g,
                f.encodeLocation ? f.encodeLocation(K.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : K.pathnameBase
            ])
        });
    }), s, o);
}
function Wg() {
    var u = up(), r = ju(u) ? "".concat(u.status, " ").concat(u.statusText) : _instanceof1(u, Error) ? u.message : JSON.stringify(u), o = _instanceof1(u, Error) ? u.stack : null, f = "rgba(200,200,200, 0.5)", s = {
        padding: "0.5rem",
        backgroundColor: f
    }, d = {
        padding: "2px 4px",
        backgroundColor: f
    }, y = null;
    return console.error("Error handled by React Router default ErrorBoundary:", u), y = N.createElement(N.Fragment, null, N.createElement("p", null, "💿 Hey developer 👋"), N.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", N.createElement("code", {
        style: d
    }, "ErrorBoundary"), " or", " ", N.createElement("code", {
        style: d
    }, "errorElement"), " prop on your route.")), N.createElement(N.Fragment, null, N.createElement("h2", null, "Unexpected Application Error!"), N.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, r), o ? N.createElement("pre", {
        style: s
    }, o) : null, y);
}
var kg = N.createElement(Wg, null), ay = /*#__PURE__*/ function(_N_Component) {
    "use strict";
    _inherits(ay, _N_Component);
    function ay(u) {
        _class_call_check(this, ay);
        var _this;
        _this = _call_super(this, ay, [
            u
        ]), _this.state = {
            location: u.location,
            revalidation: u.revalidation,
            error: u.error
        };
        return _this;
    }
    _create_class(ay, [
        {
            key: "componentDidCatch",
            value: function componentDidCatch(u, r) {
                this.props.onError ? this.props.onError(u, r) : console.error("React Router caught the following error during render", u);
            }
        },
        {
            key: "render",
            value: function render() {
                var u = this.state.error;
                if (this.context && (typeof u === "undefined" ? "undefined" : _type_of(u)) == "object" && u && "digest" in u && typeof u.digest == "string") {
                    var o = Vg(u.digest);
                    o && (u = o);
                }
                var r = u !== void 0 ? N.createElement(ul.Provider, {
                    value: this.props.routeContext
                }, N.createElement(to.Provider, {
                    value: u,
                    children: this.props.component
                })) : this.props.children;
                return this.context ? N.createElement(Pg, {
                    error: u
                }, r) : r;
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(u) {
                return {
                    error: u
                };
            }
        },
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(u, r) {
                return r.location !== u.location || r.revalidation !== "idle" && u.revalidation === "idle" ? {
                    error: u.error,
                    location: u.location,
                    revalidation: u.revalidation
                } : {
                    error: u.error !== void 0 ? u.error : r.error,
                    location: r.location,
                    revalidation: u.revalidation || r.revalidation
                };
            }
        }
    ]);
    return ay;
}(N.Component);
ay.contextType = Pm;
var qc = new WeakMap;
function Pg(param) {
    var u = param.children, r = param.error;
    var _N_useContext = N.useContext(Kt), o = _N_useContext.basename;
    if ((typeof r === "undefined" ? "undefined" : _type_of(r)) == "object" && r && "digest" in r && typeof r.digest == "string") {
        var f = Qg(r.digest);
        if (f) {
            var s = qc.get(r);
            if (s) throw s;
            var d = jm(f.location, o);
            if (Bm && !qc.get(r)) if (d.isExternal || f.reloadDocument) window.location.href = d.absoluteURL || d.to;
            else {
                var y = Promise.resolve().then(function() {
                    return window.__reactRouterDataRouter.navigate(d.to, {
                        replace: f.replace
                    });
                });
                throw qc.set(r, y), y;
            }
            return N.createElement("meta", {
                httpEquiv: "refresh",
                content: "0;url=".concat(d.absoluteURL || d.to)
            });
        }
    }
    return u;
}
function Ig(param) {
    var u = param.routeContext, r = param.match, o = param.children;
    var f = N.useContext(Va);
    return f && f.static && f.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (f.staticContext._deepestRenderedBoundaryId = r.route.id), N.createElement(ul.Provider, {
        value: u
    }, o);
}
function ep(u) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], o = arguments.length > 2 ? arguments[2] : void 0;
    var f = o === null || o === void 0 ? void 0 : o.state;
    if (u == null) {
        if (!f) return null;
        if (f.errors) u = f.matches;
        else if (r.length === 0 && !f.initialized && f.matches.length > 0) u = f.matches;
        else return null;
    }
    var s = u, d = f === null || f === void 0 ? void 0 : f.errors;
    if (d != null) {
        var M = s.findIndex(function(E) {
            return E.route.id && (d === null || d === void 0 ? void 0 : d[E.route.id]) !== void 0;
        });
        Re(M >= 0, "Could not find a matching route for errors on route IDs: ".concat(Object.keys(d).join(","))), s = s.slice(0, Math.min(s.length, M + 1));
    }
    var y = !1, v = -1;
    if (o && f) {
        y = f.renderFallback;
        for(var M1 = 0; M1 < s.length; M1++){
            var E = s[M1];
            if ((E.route.HydrateFallback || E.route.hydrateFallbackElement) && (v = M1), E.route.id) {
                var L = f.loaderData, A = f.errors, Y = E.route.loader && !L.hasOwnProperty(E.route.id) && (!A || A[E.route.id] === void 0);
                if (E.route.lazy || Y) {
                    o.isStatic && (y = !0), v >= 0 ? s = s.slice(0, v + 1) : s = [
                        s[0]
                    ];
                    break;
                }
            }
        }
    }
    var g = o === null || o === void 0 ? void 0 : o.onError, m = f && g ? function(M, E) {
        var _ref;
        var _f_matches_, _f_matches;
        g(M, {
            location: f.location,
            params: (_ref = (_f_matches = f.matches) === null || _f_matches === void 0 ? void 0 : (_f_matches_ = _f_matches[0]) === null || _f_matches_ === void 0 ? void 0 : _f_matches_.params) !== null && _ref !== void 0 ? _ref : {},
            unstable_pattern: qu(f.matches),
            errorInfo: E
        });
    } : void 0;
    return s.reduceRight(function(M, E, L) {
        var A, Y = !1, X = null, K = null;
        f && (A = d && E.route.id ? d[E.route.id] : void 0, X = E.route.errorElement || kg, y && (v < 0 && L === 0 ? (ny("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), Y = !0, K = null) : v === L && (Y = !0, K = E.route.hydrateFallbackElement || null)));
        var ie = r.concat(s.slice(0, L + 1)), I = function I() {
            var k;
            return A ? k = X : Y ? k = K : E.route.Component ? k = N.createElement(E.route.Component, null) : E.route.element ? k = E.route.element : k = M, N.createElement(Ig, {
                match: E,
                routeContext: {
                    outlet: M,
                    matches: ie,
                    isDataRoute: f != null
                },
                children: k
            });
        };
        return f && (E.route.ErrorBoundary || E.route.errorElement || L === 0) ? N.createElement(ay, {
            location: f.location,
            revalidation: f.revalidation,
            component: X,
            error: A,
            children: I(),
            routeContext: {
                outlet: null,
                matches: ie,
                isDataRoute: !0
            },
            onError: m
        }) : I();
    }, null);
}
function ao(u) {
    return "".concat(u, " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.");
}
function tp(u) {
    var r = N.useContext(Va);
    return Re(r, ao(u)), r;
}
function lp(u) {
    var r = N.useContext(Gu);
    return Re(r, ao(u)), r;
}
function ap(u) {
    var r = N.useContext(ul);
    return Re(r, ao(u)), r;
}
function no(u) {
    var r = ap(u), o = r.matches[r.matches.length - 1];
    return Re(o.route.id, "".concat(u, ' can only be used on routes that contain a unique "id"')), o.route.id;
}
function np() {
    return no("useRouteId");
}
function up() {
    var _r_errors;
    var u = N.useContext(to), r = lp("useRouteError"), o = no("useRouteError");
    return u !== void 0 ? u : (_r_errors = r.errors) === null || _r_errors === void 0 ? void 0 : _r_errors[o];
}
function ip() {
    var _tp = tp("useNavigate"), u = _tp.router, r = no("useNavigate"), o = N.useRef(!1);
    return ly(function() {
        o.current = !0;
    }), N.useCallback(function(s) {
        var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return _async_to_generator(function() {
            var _tmp, _tmp1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        et(o.current, ty);
                        _tmp = o.current;
                        if (!_tmp) return [
                            3,
                            5
                        ];
                        if (!(typeof s == "number")) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            u.navigate(s)
                        ];
                    case 1:
                        _tmp1 = _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 2:
                        return [
                            4,
                            u.navigate(s, _object_spread({
                                fromRouteId: r
                            }, d))
                        ];
                    case 3:
                        _tmp1 = _state.sent();
                        _state.label = 4;
                    case 4:
                        _tmp = _tmp1;
                        _state.label = 5;
                    case 5:
                        _tmp;
                        return [
                            2
                        ];
                }
            });
        })();
    }, [
        u,
        r
    ]);
}
var zm = {};
function ny(u, r, o) {
    !r && !zm[u] && (zm[u] = !0, et(!1, o));
}
var Tm = {};
function Mm(u, r) {
    !u && !Tm[r] && (Tm[r] = !0, console.warn(r));
}
var rp = "useOptimistic", Dm = E0[rp], fp = function fp() {};
function cp(u) {
    return Dm ? Dm(u) : [
        u,
        fp
    ];
}
function op(u) {
    var r = {
        hasErrorBoundary: u.hasErrorBoundary || u.ErrorBoundary != null || u.errorElement != null
    };
    return u.Component && (u.element && et(!1, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(r, {
        element: N.createElement(u.Component),
        Component: void 0
    })), u.HydrateFallback && (u.hydrateFallbackElement && et(!1, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(r, {
        hydrateFallbackElement: N.createElement(u.HydrateFallback),
        HydrateFallback: void 0
    })), u.ErrorBoundary && (u.errorElement && et(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(r, {
        errorElement: N.createElement(u.ErrorBoundary),
        ErrorBoundary: void 0
    })), r;
}
var sp = [
    "HydrateFallback",
    "hydrateFallbackElement"
];
function t1(u, r) {
    return mg({
        basename: r === null || r === void 0 ? void 0 : r.basename,
        getContext: r === null || r === void 0 ? void 0 : r.getContext,
        future: r === null || r === void 0 ? void 0 : r.future,
        history: C0({
            initialEntries: r === null || r === void 0 ? void 0 : r.initialEntries,
            initialIndex: r === null || r === void 0 ? void 0 : r.initialIndex
        }),
        hydrationData: r === null || r === void 0 ? void 0 : r.hydrationData,
        routes: u,
        hydrationRouteProperties: sp,
        mapRouteProperties: op,
        dataStrategy: r === null || r === void 0 ? void 0 : r.dataStrategy,
        patchRoutesOnNavigation: r === null || r === void 0 ? void 0 : r.patchRoutesOnNavigation,
        unstable_instrumentations: r === null || r === void 0 ? void 0 : r.unstable_instrumentations
    }).initialize();
}
var dp = function dp() {
    "use strict";
    var _this = this;
    _class_call_check(this, dp);
    this.status = "pending", this.promise = new Promise(function(u, r) {
        _this.resolve = function(o) {
            _this.status === "pending" && (_this.status = "resolved", u(o));
        }, _this.reject = function(o) {
            _this.status === "pending" && (_this.status = "rejected", r(o));
        };
    });
};
function l1(param) {
    var u = param.router, r = param.flushSync, o = param.onError, f = param.unstable_useTransitions;
    f = Yg() || f;
    var _N_useState = _sliced_to_array(N.useState(u.state), 2), d = _N_useState[0], y = _N_useState[1], _cp = _sliced_to_array(cp(d), 2), v = _cp[0], g = _cp[1], _N_useState1 = _sliced_to_array(N.useState(), 2), m = _N_useState1[0], M = _N_useState1[1], _N_useState2 = _sliced_to_array(N.useState({
        isTransitioning: !1
    }), 2), E = _N_useState2[0], L = _N_useState2[1], _N_useState3 = _sliced_to_array(N.useState(), 2), A = _N_useState3[0], Y = _N_useState3[1], _N_useState4 = _sliced_to_array(N.useState(), 2), X = _N_useState4[0], K = _N_useState4[1], _N_useState5 = _sliced_to_array(N.useState(), 2), ie = _N_useState5[0], I = _N_useState5[1], k = N.useRef(new Map), xe = N.useCallback(function(D, param) {
        var Ee = param.deletedFetchers, Ce = param.newErrors, Ve = param.flushSync, me = param.viewTransitionOpts;
        Ce && o && Object.values(Ce).forEach(function(Ue) {
            var _ref;
            var _D_matches_;
            return o(Ue, {
                location: D.location,
                params: (_ref = (_D_matches_ = D.matches[0]) === null || _D_matches_ === void 0 ? void 0 : _D_matches_.params) !== null && _ref !== void 0 ? _ref : {},
                unstable_pattern: qu(D.matches)
            });
        }), D.fetchers.forEach(function(Ue, de) {
            Ue.data !== void 0 && k.current.set(de, Ue.data);
        }), Ee.forEach(function(Ue) {
            return k.current.delete(Ue);
        }), Mm(Ve === !1 || r != null, 'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');
        var tt = u.window != null && u.window.document != null && typeof u.window.document.startViewTransition == "function";
        if (Mm(me == null || tt, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."), !me || !tt) {
            r && Ve ? r(function() {
                return y(D);
            }) : f === !1 ? y(D) : N.startTransition(function() {
                f === !0 && g(function(Ue) {
                    return Am(Ue, D);
                }), y(D);
            });
            return;
        }
        if (r && Ve) {
            r(function() {
                X && (A === null || A === void 0 ? void 0 : A.resolve(), X.skipTransition()), L({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: me.currentLocation,
                    nextLocation: me.nextLocation
                });
            });
            var Ue = u.window.document.startViewTransition(function() {
                r(function() {
                    return y(D);
                });
            });
            Ue.finished.finally(function() {
                r(function() {
                    Y(void 0), K(void 0), M(void 0), L({
                        isTransitioning: !1
                    });
                });
            }), r(function() {
                return K(Ue);
            });
            return;
        }
        X ? (A === null || A === void 0 ? void 0 : A.resolve(), X.skipTransition(), I({
            state: D,
            currentLocation: me.currentLocation,
            nextLocation: me.nextLocation
        })) : (M(D), L({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: me.currentLocation,
            nextLocation: me.nextLocation
        }));
    }, [
        u.window,
        r,
        X,
        A,
        f,
        g,
        o
    ]);
    N.useLayoutEffect(function() {
        return u.subscribe(xe);
    }, [
        u,
        xe
    ]), N.useEffect(function() {
        E.isTransitioning && !E.flushSync && Y(new dp);
    }, [
        E
    ]), N.useEffect(function() {
        if (A && m && u.window) {
            var D = m, Ee = A.promise, Ce = u.window.document.startViewTransition(function() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                f === !1 ? y(D) : N.startTransition(function() {
                                    f === !0 && g(function(Ve) {
                                        return Am(Ve, D);
                                    }), y(D);
                                });
                                return [
                                    4,
                                    Ee
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            });
            Ce.finished.finally(function() {
                Y(void 0), K(void 0), M(void 0), L({
                    isTransitioning: !1
                });
            }), K(Ce);
        }
    }, [
        m,
        A,
        u.window,
        f,
        g
    ]), N.useEffect(function() {
        A && m && v.location.key === m.location.key && A.resolve();
    }, [
        A,
        X,
        v.location,
        m
    ]), N.useEffect(function() {
        !E.isTransitioning && ie && (M(ie.state), L({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: ie.currentLocation,
            nextLocation: ie.nextLocation
        }), I(void 0));
    }, [
        E.isTransitioning,
        ie
    ]);
    var ve = N.useMemo(function() {
        return {
            createHref: u.createHref,
            encodeLocation: u.encodeLocation,
            go: function go(D) {
                return u.navigate(D);
            },
            push: function push(D, Ee, Ce) {
                return u.navigate(D, {
                    state: Ee,
                    preventScrollReset: Ce === null || Ce === void 0 ? void 0 : Ce.preventScrollReset
                });
            },
            replace: function replace(D, Ee, Ce) {
                return u.navigate(D, {
                    replace: !0,
                    state: Ee,
                    preventScrollReset: Ce === null || Ce === void 0 ? void 0 : Ce.preventScrollReset
                });
            }
        };
    }, [
        u
    ]), pe = u.basename || "/", re = N.useMemo(function() {
        return {
            router: u,
            navigator: ve,
            static: !1,
            basename: pe,
            onError: o
        };
    }, [
        u,
        ve,
        pe,
        o
    ]);
    return N.createElement(N.Fragment, null, N.createElement(Va.Provider, {
        value: re
    }, N.createElement(Gu.Provider, {
        value: v
    }, N.createElement(Im.Provider, {
        value: k.current
    }, N.createElement(eo.Provider, {
        value: E
    }, N.createElement(yp, {
        basename: pe,
        location: v.location,
        navigationType: v.historyAction,
        navigator: ve,
        unstable_useTransitions: f
    }, N.createElement(hp, {
        routes: u.routes,
        future: u.future,
        state: v,
        isStatic: !1,
        onError: o
    })))))), null);
}
function Am(u, r) {
    return _object_spread_props(_object_spread({}, u), {
        navigation: r.navigation.state !== "idle" ? r.navigation : u.navigation,
        revalidation: r.revalidation !== "idle" ? r.revalidation : u.revalidation,
        actionData: r.navigation.state !== "submitting" ? r.actionData : u.actionData,
        fetchers: r.fetchers
    });
}
var hp = N.memo(mp);
function mp(param) {
    var u = param.routes, r = param.future, o = param.state, f = param.isStatic, s = param.onError;
    return $g(u, void 0, {
        state: o,
        isStatic: f,
        onError: s
    });
}
function a1(param) {
    var u = param.to, r = param.replace, o = param.state, f = param.relative;
    Re(Ln(), "<Navigate> may be used only in the context of a <Router> component.");
    var _N_useContext = N.useContext(Kt), s = _N_useContext.static;
    et(!s, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    var _N_useContext1 = N.useContext(ul), d = _N_useContext1.matches, _Rl = Rl(), y = _Rl.pathname, v = lo(), g = Yu(u, mr(d), y, f === "path"), m = JSON.stringify(g);
    return N.useEffect(function() {
        v(JSON.parse(m), {
            replace: r,
            state: o,
            relative: f
        });
    }, [
        v,
        m,
        f,
        r,
        o
    ]), null;
}
function n1(u) {
    return Fg(u.context);
}
function yp(param) {
    var tmp = param.basename, u = tmp === void 0 ? "/" : tmp, tmp1 = param.children, r = tmp1 === void 0 ? null : tmp1, o = param.location, tmp2 = param.navigationType, f = tmp2 === void 0 ? "POP" : tmp2, s = param.navigator, tmp3 = param.static, d = tmp3 === void 0 ? !1 : tmp3, y = param.unstable_useTransitions;
    Re(!Ln(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    var v = u.replace(/^\/*/, "/"), g = N.useMemo(function() {
        return {
            basename: v,
            navigator: s,
            static: d,
            unstable_useTransitions: y,
            future: {}
        };
    }, [
        v,
        s,
        d,
        y
    ]);
    typeof o == "string" && (o = hl(o));
    var tmp4 = o.pathname, m = tmp4 === void 0 ? "/" : tmp4, tmp5 = o.search, M = tmp5 === void 0 ? "" : tmp5, tmp6 = o.hash, E = tmp6 === void 0 ? "" : tmp6, tmp7 = o.state, L = tmp7 === void 0 ? null : tmp7, tmp8 = o.key, A = tmp8 === void 0 ? "default" : tmp8, Y = o.unstable_mask, X = N.useMemo(function() {
        var K = nl(m, v);
        return K == null ? null : {
            location: {
                pathname: K,
                search: M,
                hash: E,
                state: L,
                key: A,
                unstable_mask: Y
            },
            navigationType: f
        };
    }, [
        v,
        m,
        M,
        E,
        L,
        A,
        f,
        Y
    ]);
    return et(X != null, '<Router basename="'.concat(v, '"> is not able to match the URL "').concat(m).concat(M).concat(E, "\" because it does not start with the basename, so the <Router> won't render anything.")), X == null ? null : N.createElement(Kt.Provider, {
        value: g
    }, N.createElement(vr.Provider, {
        children: r,
        value: X
    }));
}
var sr = "get", dr = "application/x-www-form-urlencoded";
function gr(u) {
    return (typeof HTMLElement === "undefined" ? "undefined" : _type_of(HTMLElement)) < "u" && _instanceof1(u, HTMLElement);
}
function vp(u) {
    return gr(u) && u.tagName.toLowerCase() === "button";
}
function gp(u) {
    return gr(u) && u.tagName.toLowerCase() === "form";
}
function pp(u) {
    return gr(u) && u.tagName.toLowerCase() === "input";
}
function Sp(u) {
    return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function bp(u, r) {
    return u.button === 0 && (!r || r === "_self") && !Sp(u);
}
function Kc() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return new URLSearchParams(typeof u == "string" || Array.isArray(u) || _instanceof1(u, URLSearchParams) ? u : Object.keys(u).reduce(function(r, o) {
        var f = u[o];
        return r.concat(Array.isArray(f) ? f.map(function(s) {
            return [
                o,
                s
            ];
        }) : [
            [
                o,
                f
            ]
        ]);
    }, []));
}
function Ep(u, r) {
    var o = Kc(u);
    return r && r.forEach(function(f, s) {
        o.has(s) || r.getAll(s).forEach(function(d) {
            o.append(s, d);
        });
    }), o;
}
var cr = null;
function Rp() {
    if (cr === null) try {
        new FormData(document.createElement("form"), 0), cr = !1;
    } catch (unused) {
        cr = !0;
    }
    return cr;
}
var zp = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
]);
function Gc(u) {
    return u != null && !zp.has(u) ? (et(!1, '"'.concat(u, '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "').concat(dr, '"')), null) : u;
}
function Tp(u, r) {
    var o, f, s, d, y;
    if (gp(u)) {
        var v = u.getAttribute("action");
        f = v ? nl(v, r) : null, o = u.getAttribute("method") || sr, s = Gc(u.getAttribute("enctype")) || dr, d = new FormData(u);
    } else if (vp(u) || pp(u) && (u.type === "submit" || u.type === "image")) {
        var v1 = u.form;
        if (v1 == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        var g = u.getAttribute("formaction") || v1.getAttribute("action");
        if (f = g ? nl(g, r) : null, o = u.getAttribute("formmethod") || v1.getAttribute("method") || sr, s = Gc(u.getAttribute("formenctype")) || Gc(v1.getAttribute("enctype")) || dr, d = new FormData(v1, u), !Rp()) {
            var m = u.name, M = u.type, E = u.value;
            if (M === "image") {
                var L = m ? "".concat(m, ".") : "";
                d.append("".concat(L, "x"), "0"), d.append("".concat(L, "y"), "0");
            } else m && d.append(m, E);
        }
    } else {
        if (gr(u)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        o = sr, f = null, s = dr, y = u;
    }
    return d && s === "text/plain" && (y = d, d = void 0), {
        action: f,
        method: o.toLowerCase(),
        encType: s,
        formData: d,
        body: y
    };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function uo(u, r) {
    if (u === !1 || u === null || (typeof u === "undefined" ? "undefined" : _type_of(u)) > "u") throw new Error(r);
}
function Mp(u, r, o, f) {
    var s = typeof u == "string" ? new URL(u, (typeof window === "undefined" ? "undefined" : _type_of(window)) > "u" ? "server://singlefetch/" : window.location.origin) : u;
    return o ? s.pathname.endsWith("/") ? s.pathname = "".concat(s.pathname, "_.").concat(f) : s.pathname = "".concat(s.pathname, ".").concat(f) : s.pathname === "/" ? s.pathname = "_root.".concat(f) : r && nl(s.pathname, r) === "/" ? s.pathname = "".concat(r.replace(/\/$/, ""), "/_root.").concat(f) : s.pathname = "".concat(s.pathname.replace(/\/$/, ""), ".").concat(f), s;
}
function Dp(u, r) {
    return _async_to_generator(function() {
        var _$o, o;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (u.id in r) return [
                        2,
                        r[u.id]
                    ];
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        import(u.module)
                    ];
                case 2:
                    _$o = _state.sent();
                    return [
                        2,
                        (r[u.id] = _$o, _$o)
                    ];
                case 3:
                    o = _state.sent();
                    return [
                        2,
                        (console.error("Error loading route module `".concat(u.module, "`, reloading page...")), console.error(o), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(function() {}))
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    })();
}
function Ap(u) {
    return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
}
function Op(u, r, o) {
    return _async_to_generator(function() {
        var f;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        Promise.all(u.map(function(s) {
                            return _async_to_generator(function() {
                                var d, y;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            d = r.routes[s.route.id];
                                            if (!d) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                Dp(d, o)
                                            ];
                                        case 1:
                                            y = _state.sent();
                                            return [
                                                2,
                                                y.links ? y.links() : []
                                            ];
                                        case 2:
                                            return [
                                                2,
                                                []
                                            ];
                                    }
                                });
                            })();
                        }))
                    ];
                case 1:
                    f = _state.sent();
                    return [
                        2,
                        Np(f.flat(1).filter(Ap).filter(function(s) {
                            return s.rel === "stylesheet" || s.rel === "preload";
                        }).map(function(s) {
                            return s.rel === "stylesheet" ? _object_spread_props(_object_spread({}, s), {
                                rel: "prefetch",
                                as: "style"
                            }) : _object_spread_props(_object_spread({}, s), {
                                rel: "prefetch"
                            });
                        }))
                    ];
            }
        });
    })();
}
function Om(u, r, o, f, s, d) {
    var y = function y(g, m) {
        return o[m] ? g.route.id !== o[m].route.id : !0;
    }, v = function v(g, m) {
        var _o_m_route_path;
        return o[m].pathname !== g.pathname || ((_o_m_route_path = o[m].route.path) === null || _o_m_route_path === void 0 ? void 0 : _o_m_route_path.endsWith("*")) && o[m].params["*"] !== g.params["*"];
    };
    return d === "assets" ? r.filter(function(g, m) {
        return y(g, m) || v(g, m);
    }) : d === "data" ? r.filter(function(g, m) {
        var M = f.routes[g.route.id];
        if (!M || !M.hasLoader) return !1;
        if (y(g, m) || v(g, m)) return !0;
        if (g.route.shouldRevalidate) {
            var _o_;
            var E = g.route.shouldRevalidate({
                currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
                currentParams: ((_o_ = o[0]) === null || _o_ === void 0 ? void 0 : _o_.params) || {},
                nextUrl: new URL(u, window.origin),
                nextParams: g.params,
                defaultShouldRevalidate: !0
            });
            if (typeof E == "boolean") return E;
        }
        return !0;
    }) : [];
}
function _p(u, r) {
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = _ref.includeHydrateFallback;
    return Cp(u.map(function(f) {
        var s = r.routes[f.route.id];
        if (!s) return [];
        var d = [
            s.module
        ];
        return s.clientActionModule && (d = d.concat(s.clientActionModule)), s.clientLoaderModule && (d = d.concat(s.clientLoaderModule)), o && s.hydrateFallbackModule && (d = d.concat(s.hydrateFallbackModule)), s.imports && (d = d.concat(s.imports)), d;
    }).flat(1));
}
function Cp(u) {
    return _to_consumable_array(new Set(u));
}
function Up(u) {
    var r = {}, o = Object.keys(u).sort();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = o[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var f = _step.value;
            r[f] = u[f];
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
    return r;
}
function Np(u, r) {
    var o = new Set;
    return new Set(r), u.reduce(function(f, s) {
        var d = JSON.stringify(Up(s));
        return o.has(d) || (o.add(d), f.push({
            key: d,
            link: s
        })), f;
    }, []);
}
function uy() {
    var u = N.useContext(Va);
    return uo(u, "You must render this element inside a <DataRouterContext.Provider> element"), u;
}
function xp() {
    var u = N.useContext(Gu);
    return uo(u, "You must render this element inside a <DataRouterStateContext.Provider> element"), u;
}
var io = N.createContext(void 0);
io.displayName = "FrameworkContext";
function iy() {
    var u = N.useContext(io);
    return uo(u, "You must render this element inside a <HydratedRouter> element"), u;
}
function Hp(u, r) {
    var o = N.useContext(io), _N_useState = _sliced_to_array(N.useState(!1), 2), f = _N_useState[0], s = _N_useState[1], _N_useState1 = _sliced_to_array(N.useState(!1), 2), d = _N_useState1[0], y = _N_useState1[1], v = r.onFocus, g = r.onBlur, m = r.onMouseEnter, M = r.onMouseLeave, E = r.onTouchStart, L = N.useRef(null);
    N.useEffect(function() {
        if (u === "render" && y(!0), u === "viewport") {
            var X = function X(ie) {
                ie.forEach(function(I) {
                    y(I.isIntersecting);
                });
            }, K = new IntersectionObserver(X, {
                threshold: .5
            });
            return L.current && K.observe(L.current), function() {
                K.disconnect();
            };
        }
    }, [
        u
    ]), N.useEffect(function() {
        if (f) {
            var X = setTimeout(function() {
                y(!0);
            }, 100);
            return function() {
                clearTimeout(X);
            };
        }
    }, [
        f
    ]);
    var A = function A() {
        s(!0);
    }, Y = function Y() {
        s(!1), y(!1);
    };
    return o ? u !== "intent" ? [
        d,
        L,
        {}
    ] : [
        d,
        L,
        {
            onFocus: xu(v, A),
            onBlur: xu(g, Y),
            onMouseEnter: xu(m, A),
            onMouseLeave: xu(M, Y),
            onTouchStart: xu(E, A)
        }
    ] : [
        !1,
        L,
        {}
    ];
}
function xu(u, r) {
    return function(o) {
        u && u(o), o.defaultPrevented || r(o);
    };
}
function Lp(_0) {
    var u = _0.page, r = _object_without_properties(_0, [
        "page"
    ]);
    var _uy = uy(), o = _uy.router, f = N.useMemo(function() {
        return Sa(o.routes, u, o.basename);
    }, [
        o.routes,
        u,
        o.basename
    ]);
    return f ? N.createElement(Bp, _object_spread({
        page: u,
        matches: f
    }, r)) : null;
}
function wp(u) {
    var _iy = iy(), r = _iy.manifest, o = _iy.routeModules, _N_useState = _sliced_to_array(N.useState([]), 2), f = _N_useState[0], s = _N_useState[1];
    return N.useEffect(function() {
        var d = !1;
        return Op(u, r, o).then(function(y) {
            d || s(y);
        }), function() {
            d = !0;
        };
    }, [
        u,
        r,
        o
    ]), f;
}
function Bp(_0) {
    var u = _0.page, r = _0.matches, o = _object_without_properties(_0, [
        "page",
        "matches"
    ]);
    var f = Rl(), _iy = iy(), s = _iy.future, d = _iy.manifest, y = _iy.routeModules, _uy = uy(), v = _uy.basename, _xp = xp(), g = _xp.loaderData, m = _xp.matches, M = N.useMemo(function() {
        return Om(u, r, m, d, f, "data");
    }, [
        u,
        r,
        m,
        d,
        f
    ]), E = N.useMemo(function() {
        return Om(u, r, m, d, f, "assets");
    }, [
        u,
        r,
        m,
        d,
        f
    ]), L = N.useMemo(function() {
        if (u === f.pathname + f.search + f.hash) return [];
        var X = new Set, K = !1;
        if (r.forEach(function(I) {
            var _y_I_route_id;
            var k = d.routes[I.route.id];
            !k || !k.hasLoader || (!M.some(function(xe) {
                return xe.route.id === I.route.id;
            }) && I.route.id in g && ((_y_I_route_id = y[I.route.id]) === null || _y_I_route_id === void 0 ? void 0 : _y_I_route_id.shouldRevalidate) || k.hasClientLoader ? K = !0 : X.add(I.route.id));
        }), X.size === 0) return [];
        var ie = Mp(u, v, s.unstable_trailingSlashAwareDataRequests, "data");
        return K && X.size > 0 && ie.searchParams.set("_routes", r.filter(function(I) {
            return X.has(I.route.id);
        }).map(function(I) {
            return I.route.id;
        }).join(",")), [
            ie.pathname + ie.search
        ];
    }, [
        v,
        s.unstable_trailingSlashAwareDataRequests,
        g,
        f,
        d,
        M,
        r,
        u,
        y
    ]), A = N.useMemo(function() {
        return _p(E, d);
    }, [
        E,
        d
    ]), Y = wp(E);
    return N.createElement(N.Fragment, null, L.map(function(X) {
        return N.createElement("link", _object_spread({
            key: X,
            rel: "prefetch",
            as: "fetch",
            href: X
        }, o));
    }), A.map(function(X) {
        return N.createElement("link", _object_spread({
            key: X,
            rel: "modulepreload",
            href: X
        }, o));
    }), Y.map(function(param) {
        var X = param.key, K = param.link;
        var _K_crossOrigin;
        return N.createElement("link", _object_spread_props(_object_spread({
            key: X,
            nonce: o.nonce
        }, K), {
            crossOrigin: (_K_crossOrigin = K.crossOrigin) !== null && _K_crossOrigin !== void 0 ? _K_crossOrigin : o.crossOrigin
        }));
    }));
}
function jp() {
    for(var _len = arguments.length, u = new Array(_len), _key = 0; _key < _len; _key++){
        u[_key] = arguments[_key];
    }
    return function(r) {
        u.forEach(function(o) {
            typeof o == "function" ? o(r) : o != null && (o.current = r);
        });
    };
}
var Yp = (typeof window === "undefined" ? "undefined" : _type_of(window)) < "u" && _type_of(window.document) < "u" && _type_of(window.document.createElement) < "u";
try {
    Yp && (window.__reactRouterVersion = "7.13.2");
} catch (unused) {}
var ry = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, fy = N.forwardRef(function(_0, _1) {
    var _ref = [
        _0,
        _1
    ], _ref1 = _to_array(_ref), _ref2 = _ref1[0], _rest = _ref1.slice(1), r = _ref2.onClick, tmp = _ref2.discover, o = tmp === void 0 ? "render" : tmp, tmp1 = _ref2.prefetch, f = tmp1 === void 0 ? "none" : tmp1, s = _ref2.relative, d = _ref2.reloadDocument, y = _ref2.replace, v = _ref2.unstable_mask, g = _ref2.state, m = _ref2.target, M = _ref2.to, E = _ref2.preventScrollReset, L = _ref2.viewTransition, A = _ref2.unstable_defaultShouldRevalidate, Y = _object_without_properties(_ref2, [
        "onClick",
        "discover",
        "prefetch",
        "relative",
        "reloadDocument",
        "replace",
        "unstable_mask",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "viewTransition",
        "unstable_defaultShouldRevalidate"
    ]), _rest1 = _sliced_to_array(_rest, 1), X = _rest1[0];
    var _N_useContext = N.useContext(Kt), K = _N_useContext.basename, ie = _N_useContext.navigator, I = _N_useContext.unstable_useTransitions, k = typeof M == "string" && ry.test(M), xe = jm(M, K);
    M = xe.to;
    var ve = Zg(M, {
        relative: s
    }), pe = Rl(), re = null;
    if (v) {
        var de = Yu(v, [], pe.unstable_mask ? pe.unstable_mask.pathname : "/", !0);
        K !== "/" && (de.pathname = de.pathname === "/" ? K : dl([
            K,
            de.pathname
        ])), re = ie.createHref(de);
    }
    var _Hp = _sliced_to_array(Hp(f, Y), 3), D = _Hp[0], Ee = _Hp[1], Ce = _Hp[2], Ve = Qp(M, {
        replace: y,
        unstable_mask: v,
        state: g,
        target: m,
        preventScrollReset: E,
        relative: s,
        viewTransition: L,
        unstable_defaultShouldRevalidate: A,
        unstable_useTransitions: I
    });
    function me(de) {
        r && r(de), de.defaultPrevented || Ve(de);
    }
    var tt = !(xe.isExternal || d), Ue = N.createElement("a", _object_spread_props(_object_spread({}, Y, Ce), {
        href: (tt ? re : void 0) || xe.absoluteURL || ve,
        onClick: tt ? me : r,
        ref: jp(X, Ee),
        target: m,
        "data-discover": !k && o === "render" ? "true" : void 0
    }));
    return D && !k ? N.createElement(N.Fragment, null, Ue, N.createElement(Lp, {
        page: ve
    })) : Ue;
});
fy.displayName = "Link";
var qp = N.forwardRef(function(_0, _1) {
    var _ref = [
        _0,
        _1
    ], _ref1 = _to_array(_ref), _ref2 = _ref1[0], _rest = _ref1.slice(1), tmp = _ref2["aria-current"], r = tmp === void 0 ? "page" : tmp, tmp1 = _ref2.caseSensitive, o = tmp1 === void 0 ? !1 : tmp1, tmp2 = _ref2.className, f = tmp2 === void 0 ? "" : tmp2, tmp3 = _ref2.end, s = tmp3 === void 0 ? !1 : tmp3, d = _ref2.style, y = _ref2.to, v = _ref2.viewTransition, g = _ref2.children, m = _object_without_properties(_ref2, [
        "aria-current",
        "caseSensitive",
        "className",
        "end",
        "style",
        "to",
        "viewTransition",
        "children"
    ]), _rest1 = _sliced_to_array(_rest, 1), M = _rest1[0];
    var E = Xu(y, {
        relative: m.relative
    }), L = Rl(), A = N.useContext(Gu), _N_useContext = N.useContext(Kt), Y = _N_useContext.navigator, X = _N_useContext.basename, K = A != null && Fp(E) && v === !0, ie = Y.encodeLocation ? Y.encodeLocation(E).pathname : E.pathname, I = L.pathname, k = A && A.navigation && A.navigation.location ? A.navigation.location.pathname : null;
    o || (I = I.toLowerCase(), k = k ? k.toLowerCase() : null, ie = ie.toLowerCase()), k && X && (k = nl(k, X) || k);
    var xe = ie !== "/" && ie.endsWith("/") ? ie.length - 1 : ie.length;
    var ve = I === ie || !s && I.startsWith(ie) && I.charAt(xe) === "/", pe = k != null && (k === ie || !s && k.startsWith(ie) && k.charAt(ie.length) === "/"), re = {
        isActive: ve,
        isPending: pe,
        isTransitioning: K
    }, D = ve ? r : void 0, Ee;
    typeof f == "function" ? Ee = f(re) : Ee = [
        f,
        ve ? "active" : null,
        pe ? "pending" : null,
        K ? "transitioning" : null
    ].filter(Boolean).join(" ");
    var Ce = typeof d == "function" ? d(re) : d;
    return N.createElement(fy, _object_spread_props(_object_spread({}, m), {
        "aria-current": D,
        className: Ee,
        ref: M,
        style: Ce,
        to: y,
        viewTransition: v
    }), typeof g == "function" ? g(re) : g);
});
qp.displayName = "NavLink";
var Gp = N.forwardRef(function(_0, _1) {
    var _ref = [
        _0,
        _1
    ], _ref1 = _to_array(_ref), _ref2 = _ref1[0], _rest = _ref1.slice(1), tmp = _ref2.discover, u = tmp === void 0 ? "render" : tmp, r = _ref2.fetcherKey, o = _ref2.navigate, f = _ref2.reloadDocument, s = _ref2.replace, d = _ref2.state, tmp1 = _ref2.method, y = tmp1 === void 0 ? sr : tmp1, v = _ref2.action, g = _ref2.onSubmit, m = _ref2.relative, M = _ref2.preventScrollReset, E = _ref2.viewTransition, L = _ref2.unstable_defaultShouldRevalidate, A = _object_without_properties(_ref2, [
        "discover",
        "fetcherKey",
        "navigate",
        "reloadDocument",
        "replace",
        "state",
        "method",
        "action",
        "onSubmit",
        "relative",
        "preventScrollReset",
        "viewTransition",
        "unstable_defaultShouldRevalidate"
    ]), _rest1 = _sliced_to_array(_rest, 1), Y = _rest1[0];
    var _N_useContext = N.useContext(Kt), X = _N_useContext.unstable_useTransitions, K = Kp(), ie = Jp(v, {
        relative: m
    }), I = y.toLowerCase() === "get" ? "get" : "post", k = typeof v == "string" && ry.test(v), xe = function xe(ve) {
        if (g && g(ve), ve.defaultPrevented) return;
        ve.preventDefault();
        var pe = ve.nativeEvent.submitter, re = (pe === null || pe === void 0 ? void 0 : pe.getAttribute("formmethod")) || y, D = function D() {
            return K(pe || ve.currentTarget, {
                fetcherKey: r,
                method: re,
                navigate: o,
                replace: s,
                state: d,
                relative: m,
                preventScrollReset: M,
                viewTransition: E,
                unstable_defaultShouldRevalidate: L
            });
        };
        X && o !== !1 ? N.startTransition(function() {
            return D();
        }) : D();
    };
    return N.createElement("form", _object_spread_props(_object_spread({
        ref: Y,
        method: I,
        action: ie,
        onSubmit: f ? g : xe
    }, A), {
        "data-discover": !k && u === "render" ? "true" : void 0
    }));
});
Gp.displayName = "Form";
function Xp(u) {
    return "".concat(u, " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.");
}
function cy(u) {
    var r = N.useContext(Va);
    return Re(r, Xp(u)), r;
}
function Qp(u) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = _ref.target, o = _ref.replace, f = _ref.unstable_mask, s = _ref.state, d = _ref.preventScrollReset, y = _ref.relative, v = _ref.viewTransition, g = _ref.unstable_defaultShouldRevalidate, m = _ref.unstable_useTransitions;
    var M = lo(), E = Rl(), L = Xu(u, {
        relative: y
    });
    return N.useCallback(function(A) {
        if (bp(A, r)) {
            A.preventDefault();
            var Y = o !== void 0 ? o : El(E) === El(L), X = function X() {
                return M(u, {
                    replace: Y,
                    unstable_mask: f,
                    state: s,
                    preventScrollReset: d,
                    relative: y,
                    viewTransition: v,
                    unstable_defaultShouldRevalidate: g
                });
            };
            m ? N.startTransition(function() {
                return X();
            }) : X();
        }
    }, [
        E,
        M,
        L,
        o,
        f,
        s,
        r,
        u,
        d,
        y,
        v,
        g,
        m
    ]);
}
function u1(u) {
    et((typeof URLSearchParams === "undefined" ? "undefined" : _type_of(URLSearchParams)) < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
    var r = N.useRef(Kc(u)), o = N.useRef(!1), f = Rl(), s = N.useMemo(function() {
        return Ep(f.search, o.current ? null : r.current);
    }, [
        f.search
    ]), d = lo(), y = N.useCallback(function(v, g) {
        var m = Kc(typeof v == "function" ? v(new URLSearchParams(s)) : v);
        o.current = !0, d("?" + m, g);
    }, [
        d,
        s
    ]);
    return [
        s,
        y
    ];
}
var Vp = 0, Zp = function Zp() {
    return "__".concat(String(++Vp), "__");
};
function Kp() {
    var _cy = cy("useSubmit"), u = _cy.router, _N_useContext = N.useContext(Kt), r = _N_useContext.basename, o = np(), f = u.fetch, s = u.navigate;
    return N.useCallback(function(d) {
        var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return _async_to_generator(function() {
            var _Tp, v, g, m, M, E, L;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _Tp = Tp(d, r), v = _Tp.action, g = _Tp.method, m = _Tp.encType, M = _Tp.formData, E = _Tp.body;
                        if (!(y.navigate === !1)) return [
                            3,
                            2
                        ];
                        L = y.fetcherKey || Zp();
                        return [
                            4,
                            f(L, o, y.action || v, {
                                unstable_defaultShouldRevalidate: y.unstable_defaultShouldRevalidate,
                                preventScrollReset: y.preventScrollReset,
                                formData: M,
                                body: E,
                                formMethod: y.method || g,
                                formEncType: y.encType || m,
                                flushSync: y.flushSync
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 2:
                        return [
                            4,
                            s(y.action || v, {
                                unstable_defaultShouldRevalidate: y.unstable_defaultShouldRevalidate,
                                preventScrollReset: y.preventScrollReset,
                                formData: M,
                                body: E,
                                formMethod: y.method || g,
                                formEncType: y.encType || m,
                                replace: y.replace,
                                state: y.state,
                                fromRouteId: o,
                                flushSync: y.flushSync,
                                viewTransition: y.viewTransition
                            })
                        ];
                    case 3:
                        _state.sent();
                        _state.label = 4;
                    case 4:
                        return [
                            2
                        ];
                }
            });
        })();
    }, [
        f,
        s,
        r,
        o
    ]);
}
function Jp(u) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = _ref.relative;
    var _N_useContext = N.useContext(Kt), o = _N_useContext.basename, f = N.useContext(ul);
    Re(f, "useFormAction must be used inside a RouteContext");
    var _f_matches_slice = _sliced_to_array(f.matches.slice(-1), 1), s = _f_matches_slice[0], d = _object_spread({}, Xu(u || ".", {
        relative: r
    })), y = Rl();
    if (u == null) {
        d.search = y.search;
        var v = new URLSearchParams(d.search), g = v.getAll("index");
        if (g.some(function(M) {
            return M === "";
        })) {
            v.delete("index"), g.filter(function(E) {
                return E;
            }).forEach(function(E) {
                return v.append("index", E);
            });
            var M = v.toString();
            d.search = M ? "?".concat(M) : "";
        }
    }
    return (!u || u === ".") && s.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (d.pathname = d.pathname === "/" ? o : dl([
        o,
        d.pathname
    ])), El(d);
}
function Fp(u) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = _ref.relative;
    var o = N.useContext(eo);
    Re(o != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    var _cy = cy("useViewTransitionState"), f = _cy.basename, s = Xu(u, {
        relative: r
    });
    if (!o.isTransitioning) return !1;
    var d = nl(o.currentLocation.pathname, f) || o.currentLocation.pathname, y = nl(o.nextLocation.pathname, f) || o.nextLocation.pathname;
    return hr(s.pathname, y) != null || hr(s.pathname, d) != null;
}
export { fy as L, a1 as N, n1 as O, l1 as R, Wp as a, Um as b, $p as c, b0 as d, Pp as e, up as f, Fc as g, Ip as h, kp as i, _m as j, A0 as k, $c as l, Cm as m, e1 as n, Rl as o, u1 as p, t1 as q, N as r, lo as u };
