function _instanceof(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
import { D as y, O as I, V as C } from "./index-wSLjxAso.js";
var m;
function x(i) {
    var e = y.get().createCanvas(6, 1), a = e.getContext("2d");
    return a.fillStyle = i, a.fillRect(0, 0, 6, 1), e;
}
function M() {
    if (m !== void 0) return m;
    try {
        var i = x("#ff00ff"), e = x("#ffff00"), n = y.get().createCanvas(6, 1).getContext("2d");
        n.globalCompositeOperation = "multiply", n.drawImage(i, 0, 0), n.drawImage(e, 2, 0);
        var t = n.getImageData(2, 0, 1, 1);
        if (!t) m = !1;
        else {
            var o = t.data;
            m = o[0] === 255 && o[1] === 0 && o[2] === 0;
        }
    } catch (unused) {
        m = !1;
    }
    return m;
}
var h = {
    canvas: null,
    convertTintToImage: !1,
    cacheStepsPerColorChannel: 8,
    canUseMultiply: M(),
    tintMethod: null,
    _canvasSourceCache: new WeakMap,
    _unpremultipliedCache: new WeakMap,
    getCanvasSource: function getCanvasSource(i) {
        var _e_resourceWidth, _e_resourceHeight;
        var e = i.source, a = e === null || e === void 0 ? void 0 : e.resource;
        if (!a) return null;
        var n = e.alphaMode === "premultiplied-alpha", t = (_e_resourceWidth = e.resourceWidth) !== null && _e_resourceWidth !== void 0 ? _e_resourceWidth : e.pixelWidth, o = (_e_resourceHeight = e.resourceHeight) !== null && _e_resourceHeight !== void 0 ? _e_resourceHeight : e.pixelHeight, l = t !== e.pixelWidth || o !== e.pixelHeight;
        if (n) {
            if ((_instanceof(a, HTMLCanvasElement) || (typeof OffscreenCanvas === "undefined" ? "undefined" : _type_of(OffscreenCanvas)) < "u" && _instanceof(a, OffscreenCanvas)) && !l) return a;
            var s = h._unpremultipliedCache.get(e);
            if ((s === null || s === void 0 ? void 0 : s.resourceId) === e._resourceId) return s.canvas;
        }
        if (_instanceof(a, Uint8Array) || _instanceof(a, Uint8ClampedArray) || _instanceof(a, Int8Array) || _instanceof(a, Uint16Array) || _instanceof(a, Int16Array) || _instanceof(a, Uint32Array) || _instanceof(a, Int32Array) || _instanceof(a, Float32Array) || _instanceof(a, ArrayBuffer)) {
            var s1 = h._canvasSourceCache.get(e);
            if ((s1 === null || s1 === void 0 ? void 0 : s1.resourceId) === e._resourceId) return s1.canvas;
            var r = y.get().createCanvas(e.pixelWidth, e.pixelHeight), u = r.getContext("2d"), c = u.createImageData(e.pixelWidth, e.pixelHeight), d = c.data, f = _instanceof(a, ArrayBuffer) ? new Uint8Array(a) : new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
            if (e.format === "bgra8unorm") for(var g = 0; g < d.length && g + 3 < f.length; g += 4)d[g] = f[g + 2], d[g + 1] = f[g + 1], d[g + 2] = f[g], d[g + 3] = f[g + 3];
            else d.set(f.subarray(0, d.length));
            return u.putImageData(c, 0, 0), h._canvasSourceCache.set(e, {
                canvas: r,
                resourceId: e._resourceId
            }), r;
        }
        if (n) {
            var s2 = y.get().createCanvas(e.pixelWidth, e.pixelHeight), r1 = s2.getContext("2d", {
                willReadFrequently: !0
            });
            s2.width = e.pixelWidth, s2.height = e.pixelHeight, r1.drawImage(a, 0, 0);
            var u1 = r1.getImageData(0, 0, s2.width, s2.height), c1 = u1.data;
            for(var d1 = 0; d1 < c1.length; d1 += 4){
                var f1 = c1[d1 + 3];
                if (f1 > 0) {
                    var g1 = 255 / f1;
                    c1[d1] = Math.min(255, c1[d1] * g1 + .5), c1[d1 + 1] = Math.min(255, c1[d1 + 1] * g1 + .5), c1[d1 + 2] = Math.min(255, c1[d1 + 2] * g1 + .5);
                }
            }
            return r1.putImageData(u1, 0, 0), h._unpremultipliedCache.set(e, {
                canvas: s2,
                resourceId: e._resourceId
            }), s2;
        }
        if (l) {
            var s3 = h._canvasSourceCache.get(e);
            if ((s3 === null || s3 === void 0 ? void 0 : s3.resourceId) === e._resourceId) return s3.canvas;
            var r2 = y.get().createCanvas(e.pixelWidth, e.pixelHeight), u2 = r2.getContext("2d");
            return r2.width = e.pixelWidth, r2.height = e.pixelHeight, u2.drawImage(a, 0, 0), h._canvasSourceCache.set(e, {
                canvas: r2,
                resourceId: e._resourceId
            }), r2;
        }
        return a;
    },
    getTintedCanvas: function getTintedCanvas(i, e) {
        var a = i.texture, n = I.shared.setValue(e).toHex(), t = a.tintCache || (a.tintCache = {}), o = t[n], l = a.source._resourceId;
        if ((o === null || o === void 0 ? void 0 : o.tintId) === l) return o;
        var s = o && "getContext" in o ? o : y.get().createCanvas();
        return h.tintMethod(a, e, s), s.tintId = l, t[n] = s, t[n];
    },
    getTintedPattern: function getTintedPattern(i, e) {
        var a = I.shared.setValue(e).toHex(), n = i.patternCache || (i.patternCache = {}), t = i.source._resourceId;
        var o = n[a];
        return (o === null || o === void 0 ? void 0 : o.tintId) === t || (h.canvas || (h.canvas = y.get().createCanvas()), h.tintMethod(i, e, h.canvas), o = h.canvas.getContext("2d").createPattern(h.canvas, "repeat"), o.tintId = t, n[a] = o), o;
    },
    applyPatternTransform: function applyPatternTransform(i, e) {
        var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        if (!e) return;
        var n = i;
        if (!n.setTransform) return;
        var t = globalThis.DOMMatrix;
        if (!t) return;
        var o = new t([
            e.a,
            e.b,
            e.c,
            e.d,
            e.tx,
            e.ty
        ]);
        n.setTransform(a ? o.inverse() : o);
    },
    tintWithMultiply: function tintWithMultiply(i, e, a) {
        var _ref, _i_source__resolution;
        var n = a.getContext("2d"), t = i.frame.clone(), o = (_ref = (_i_source__resolution = i.source._resolution) !== null && _i_source__resolution !== void 0 ? _i_source__resolution : i.source.resolution) !== null && _ref !== void 0 ? _ref : 1, l = i.rotate;
        t.x *= o, t.y *= o, t.width *= o, t.height *= o;
        var s = C.isVertical(l), r = s ? t.height : t.width, u = s ? t.width : t.height;
        a.width = Math.ceil(r), a.height = Math.ceil(u), n.save(), n.fillStyle = I.shared.setValue(e).toHex(), n.fillRect(0, 0, r, u), n.globalCompositeOperation = "multiply";
        var c = h.getCanvasSource(i);
        if (!c) {
            n.restore();
            return;
        }
        l && h._applyInverseRotation(n, l, t.width, t.height), n.drawImage(c, t.x, t.y, t.width, t.height, 0, 0, t.width, t.height), n.globalCompositeOperation = "destination-atop", n.drawImage(c, t.x, t.y, t.width, t.height, 0, 0, t.width, t.height), n.restore();
    },
    tintWithOverlay: function tintWithOverlay(i, e, a) {
        var _ref, _i_source__resolution;
        var n = a.getContext("2d"), t = i.frame.clone(), o = (_ref = (_i_source__resolution = i.source._resolution) !== null && _i_source__resolution !== void 0 ? _i_source__resolution : i.source.resolution) !== null && _ref !== void 0 ? _ref : 1, l = i.rotate;
        t.x *= o, t.y *= o, t.width *= o, t.height *= o;
        var s = C.isVertical(l), r = s ? t.height : t.width, u = s ? t.width : t.height;
        a.width = Math.ceil(r), a.height = Math.ceil(u), n.save(), n.globalCompositeOperation = "copy", n.fillStyle = I.shared.setValue(e).toHex(), n.fillRect(0, 0, r, u), n.globalCompositeOperation = "destination-atop";
        var c = h.getCanvasSource(i);
        if (!c) {
            n.restore();
            return;
        }
        l && h._applyInverseRotation(n, l, t.width, t.height), n.drawImage(c, t.x, t.y, t.width, t.height, 0, 0, t.width, t.height), n.restore();
    },
    tintWithPerPixel: function tintWithPerPixel(i, e, a) {
        var _ref, _i_source__resolution;
        var n = a.getContext("2d"), t = i.frame.clone(), o = (_ref = (_i_source__resolution = i.source._resolution) !== null && _i_source__resolution !== void 0 ? _i_source__resolution : i.source.resolution) !== null && _ref !== void 0 ? _ref : 1, l = i.rotate;
        t.x *= o, t.y *= o, t.width *= o, t.height *= o;
        var s = C.isVertical(l), r = s ? t.height : t.width, u = s ? t.width : t.height;
        a.width = Math.ceil(r), a.height = Math.ceil(u), n.save(), n.globalCompositeOperation = "copy";
        var c = h.getCanvasSource(i);
        if (!c) {
            n.restore();
            return;
        }
        l && h._applyInverseRotation(n, l, t.width, t.height), n.drawImage(c, t.x, t.y, t.width, t.height, 0, 0, t.width, t.height), n.restore();
        var d = e >> 16 & 255, f = e >> 8 & 255, g = e & 255, w = n.getImageData(0, 0, r, u), v = w.data;
        for(var p = 0; p < v.length; p += 4)v[p] = v[p] * d / 255, v[p + 1] = v[p + 1] * f / 255, v[p + 2] = v[p + 2] * g / 255;
        n.putImageData(w, 0, 0);
    },
    _applyInverseRotation: function _applyInverseRotation(i, e, a, n) {
        var t = C.inv(e), o = C.uX(t), l = C.uY(t), s = C.vX(t), r = C.vY(t), u = -Math.min(0, o * a, s * n, o * a + s * n), c = -Math.min(0, l * a, r * n, l * a + r * n);
        i.transform(o, l, s, r, u, c);
    }
};
h.tintMethod = h.canUseMultiply ? h.tintWithMultiply : h.tintWithPerPixel;
export { M as a, h as c };
