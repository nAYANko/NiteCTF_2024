(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        l(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const d of s.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && l(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function l(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
function R() {}
function Jt(e, t) {
    for (const n in t)
        e[n] = t[n];
    return e
}
function Gt(e) {
    return e()
}
function Dt() {
    return Object.create(null)
}
function nt(e) {
    e.forEach(Gt)
}
function Pt(e) {
    return typeof e == "function"
}
function st(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}
function ae(e) {
    return Object.keys(e).length === 0
}
function ce(e, ...t) {
    if (e == null)
        return R;
    const n = e.subscribe(...t);
    return n.unsubscribe ? () => n.unsubscribe() : n
}
function a(e, t) {
    e.appendChild(t)
}
function S(e, t, n) {
    e.insertBefore(t, n || null)
}
function L(e) {
    e.parentNode && e.parentNode.removeChild(e)
}
function Kt(e, t) {
    for (let n = 0; n < e.length; n += 1)
        e[n] && e[n].d(t)
}
function f(e) {
    return document.createElement(e)
}
function yt(e) {
    return document.createTextNode(e)
}
function _() {
    return yt(" ")
}
function $t() {
    return yt("")
}
function Z(e, t, n, l) {
    return e.addEventListener(t, n, l),
    () => e.removeEventListener(t, n, l)
}
function ue(e) {
    return function(t) {
        return t.preventDefault(),
        e.call(this, t)
    }
}
function u(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}
function de(e) {
    return Array.from(e.childNodes)
}
function jt(e, t) {
    t = "" + t,
    e.data !== t && (e.data = t)
}
function F(e, t) {
    e.value = t ?? ""
}
function Mt(e, t, n, l) {
    n === null ? e.style.removeProperty(t) : e.style.setProperty(t, n, l ? "important" : "")
}
function fe(e, t, {bubbles: n=!1, cancelable: l=!1}={}) {
    const o = document.createEvent("CustomEvent");
    return o.initCustomEvent(e, n, l, t),
    o
}
function Et(e, t) {
    return new e(t)
}
let kt;
function wt(e) {
    kt = e
}
function Ct() {
    if (!kt)
        throw new Error("Function called outside component initialization");
    return kt
}
function Vt(e) {
    Ct().$$.on_mount.push(e)
}
function pe(e) {
    Ct().$$.after_update.push(e)
}
function he(e) {
    Ct().$$.on_destroy.push(e)
}
function Xt() {
    const e = Ct();
    return (t, n, {cancelable: l=!1}={}) => {
        const o = e.$$.callbacks[t];
        if (o) {
            const s = fe(t, n, {
                cancelable: l
            });
            return o.slice().forEach(d => {
                d.call(e, s)
            }
            ),
            !s.defaultPrevented
        }
        return !0
    }
}
function At(e, t) {
    const n = e.$$.callbacks[t.type];
    n && n.slice().forEach(l => l.call(this, t))
}
const ht = []
  , Nt = [];
let mt = [];
const Rt = []
  , Qt = Promise.resolve();
let Ot = !1;
function te() {
    Ot || (Ot = !0,
    Qt.then(ee))
}
function me() {
    return te(),
    Qt
}
function Ht(e) {
    mt.push(e)
}
const Tt = new Set;
let ft = 0;
function ee() {
    if (ft !== 0)
        return;
    const e = kt;
    do {
        try {
            for (; ft < ht.length; ) {
                const t = ht[ft];
                ft++,
                wt(t),
                be(t.$$)
            }
        } catch (t) {
            throw ht.length = 0,
            ft = 0,
            t
        }
        for (wt(null),
        ht.length = 0,
        ft = 0; Nt.length; )
            Nt.pop()();
        for (let t = 0; t < mt.length; t += 1) {
            const n = mt[t];
            Tt.has(n) || (Tt.add(n),
            n())
        }
        mt.length = 0
    } while (ht.length);
    for (; Rt.length; )
        Rt.pop()();
    Ot = !1,
    Tt.clear(),
    wt(e)
}
function be(e) {
    if (e.fragment !== null) {
        e.update(),
        nt(e.before_update);
        const t = e.dirty;
        e.dirty = [-1],
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(Ht)
    }
}
function ge(e) {
    const t = []
      , n = [];
    mt.forEach(l => e.indexOf(l) === -1 ? t.push(l) : n.push(l)),
    n.forEach(l => l()),
    mt = t
}
const xt = new Set;
let rt;
function Lt() {
    rt = {
        r: 0,
        c: [],
        p: rt
    }
}
function St() {
    rt.r || nt(rt.c),
    rt = rt.p
}
function K(e, t) {
    e && e.i && (xt.delete(e),
    e.i(t))
}
function Q(e, t, n, l) {
    if (e && e.o) {
        if (xt.has(e))
            return;
        xt.add(e),
        rt.c.push( () => {
            xt.delete(e),
            l && (n && e.d(1),
            l())
        }
        ),
        e.o(t)
    } else
        l && l()
}
function ne(e, t) {
    const n = {}
      , l = {}
      , o = {
        $$scope: 1
    };
    let s = e.length;
    for (; s--; ) {
        const d = e[s]
          , i = t[s];
        if (i) {
            for (const r in d)
                r in i || (l[r] = 1);
            for (const r in i)
                o[r] || (n[r] = i[r],
                o[r] = 1);
            e[s] = i
        } else
            for (const r in d)
                o[r] = 1
    }
    for (const d in l)
        d in n || (n[d] = void 0);
    return n
}
function le(e) {
    return typeof e == "object" && e !== null ? e : {}
}
function bt(e) {
    e && e.c()
}
function it(e, t, n, l) {
    const {fragment: o, after_update: s} = e.$$;
    o && o.m(t, n),
    l || Ht( () => {
        const d = e.$$.on_mount.map(Gt).filter(Pt);
        e.$$.on_destroy ? e.$$.on_destroy.push(...d) : nt(d),
        e.$$.on_mount = []
    }
    ),
    s.forEach(Ht)
}
function at(e, t) {
    const n = e.$$;
    n.fragment !== null && (ge(n.after_update),
    nt(n.on_destroy),
    n.fragment && n.fragment.d(t),
    n.on_destroy = n.fragment = null,
    n.ctx = [])
}
function ve(e, t) {
    e.$$.dirty[0] === -1 && (ht.push(e),
    te(),
    e.$$.dirty.fill(0)),
    e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}
function ct(e, t, n, l, o, s, d, i=[-1]) {
    const r = kt;
    wt(e);
    const c = e.$$ = {
        fragment: null,
        ctx: [],
        props: s,
        update: R,
        not_equal: o,
        bound: Dt(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (r ? r.$$.context : [])),
        callbacks: Dt(),
        dirty: i,
        skip_bound: !1,
        root: t.target || r.$$.root
    };
    d && d(c.root);
    let b = !1;
    if (c.ctx = n ? n(e, t.props || {}, (C, y, ...$) => {
        const w = $.length ? $[0] : y;
        return c.ctx && o(c.ctx[C], c.ctx[C] = w) && (!c.skip_bound && c.bound[C] && c.bound[C](w),
        b && ve(e, C)),
        y
    }
    ) : [],
    c.update(),
    b = !0,
    nt(c.before_update),
    c.fragment = l ? l(c.ctx) : !1,
    t.target) {
        if (t.hydrate) {
            const C = de(t.target);
            c.fragment && c.fragment.l(C),
            C.forEach(L)
        } else
            c.fragment && c.fragment.c();
        t.intro && K(e.$$.fragment),
        it(e, t.target, t.anchor, t.customElement),
        ee()
    }
    wt(r)
}
class ut {
    $destroy() {
        at(this, 1),
        this.$destroy = R
    }
    $on(t, n) {
        if (!Pt(n))
            return R;
        const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return l.push(n),
        () => {
            const o = l.indexOf(n);
            o !== -1 && l.splice(o, 1)
        }
    }
    $set(t) {
        this.$$set && !ae(t) && (this.$$.skip_bound = !0,
        this.$$set(t),
        this.$$.skip_bound = !1)
    }
}
const pt = [];
function oe(e, t) {
    return {
        subscribe: se(e, t).subscribe
    }
}
function se(e, t=R) {
    let n;
    const l = new Set;
    function o(i) {
        if (st(e, i) && (e = i,
        n)) {
            const r = !pt.length;
            for (const c of l)
                c[1](),
                pt.push(c, e);
            if (r) {
                for (let c = 0; c < pt.length; c += 2)
                    pt[c][0](pt[c + 1]);
                pt.length = 0
            }
        }
    }
    function s(i) {
        o(i(e))
    }
    function d(i, r=R) {
        const c = [i, r];
        return l.add(c),
        l.size === 1 && (n = t(o) || R),
        i(e),
        () => {
            l.delete(c),
            l.size === 0 && n && (n(),
            n = null)
        }
    }
    return {
        set: o,
        update: s,
        subscribe: d
    }
}
function re(e, t, n) {
    const l = !Array.isArray(e)
      , o = l ? [e] : e
      , s = t.length < 2;
    return oe(n, d => {
        let i = !1;
        const r = [];
        let c = 0
          , b = R;
        const C = () => {
            if (c)
                return;
            b();
            const $ = t(l ? r[0] : r, d);
            s ? d($) : b = Pt($) ? $ : R
        }
          , y = o.map( ($, w) => ce($, A => {
            r[w] = A,
            c &= ~(1 << w),
            i && C()
        }
        , () => {
            c |= 1 << w
        }
        ));
        return i = !0,
        C(),
        function() {
            nt(y),
            b(),
            i = !1
        }
    }
    )
}
function _e(e, t) {
    if (e instanceof RegExp)
        return {
            keys: !1,
            pattern: e
        };
    var n, l, o, s, d = [], i = "", r = e.split("/");
    for (r[0] || r.shift(); o = r.shift(); )
        n = o[0],
        n === "*" ? (d.push("wild"),
        i += "/(.*)") : n === ":" ? (l = o.indexOf("?", 1),
        s = o.indexOf(".", 1),
        d.push(o.substring(1, ~l ? l : ~s ? s : o.length)),
        i += ~l && !~s ? "(?:/([^/]+?))?" : "/([^/]+?)",
        ~s && (i += (~l ? "?" : "") + "\\" + o.substring(s))) : i += "/" + o;
    return {
        keys: d,
        pattern: new RegExp("^" + i + (t ? "(?=$|/)" : "/?$"),"i")
    }
}
function we(e) {
    let t, n, l;
    const o = [e[2]];
    var s = e[0];
    function d(i) {
        let r = {};
        for (let c = 0; c < o.length; c += 1)
            r = Jt(r, o[c]);
        return {
            props: r
        }
    }
    return s && (t = Et(s, d()),
    t.$on("routeEvent", e[7])),
    {
        c() {
            t && bt(t.$$.fragment),
            n = $t()
        },
        m(i, r) {
            t && it(t, i, r),
            S(i, n, r),
            l = !0
        },
        p(i, r) {
            const c = r & 4 ? ne(o, [le(i[2])]) : {};
            if (r & 1 && s !== (s = i[0])) {
                if (t) {
                    Lt();
                    const b = t;
                    Q(b.$$.fragment, 1, 0, () => {
                        at(b, 1)
                    }
                    ),
                    St()
                }
                s ? (t = Et(s, d()),
                t.$on("routeEvent", i[7]),
                bt(t.$$.fragment),
                K(t.$$.fragment, 1),
                it(t, n.parentNode, n)) : t = null
            } else
                s && t.$set(c)
        },
        i(i) {
            l || (t && K(t.$$.fragment, i),
            l = !0)
        },
        o(i) {
            t && Q(t.$$.fragment, i),
            l = !1
        },
        d(i) {
            i && L(n),
            t && at(t, i)
        }
    }
}
function ye(e) {
    let t, n, l;
    const o = [{
        params: e[1]
    }, e[2]];
    var s = e[0];
    function d(i) {
        let r = {};
        for (let c = 0; c < o.length; c += 1)
            r = Jt(r, o[c]);
        return {
            props: r
        }
    }
    return s && (t = Et(s, d()),
    t.$on("routeEvent", e[6])),
    {
        c() {
            t && bt(t.$$.fragment),
            n = $t()
        },
        m(i, r) {
            t && it(t, i, r),
            S(i, n, r),
            l = !0
        },
        p(i, r) {
            const c = r & 6 ? ne(o, [r & 2 && {
                params: i[1]
            }, r & 4 && le(i[2])]) : {};
            if (r & 1 && s !== (s = i[0])) {
                if (t) {
                    Lt();
                    const b = t;
                    Q(b.$$.fragment, 1, 0, () => {
                        at(b, 1)
                    }
                    ),
                    St()
                }
                s ? (t = Et(s, d()),
                t.$on("routeEvent", i[6]),
                bt(t.$$.fragment),
                K(t.$$.fragment, 1),
                it(t, n.parentNode, n)) : t = null
            } else
                s && t.$set(c)
        },
        i(i) {
            l || (t && K(t.$$.fragment, i),
            l = !0)
        },
        o(i) {
            t && Q(t.$$.fragment, i),
            l = !1
        },
        d(i) {
            i && L(n),
            t && at(t, i)
        }
    }
}
function ke(e) {
    let t, n, l, o;
    const s = [ye, we]
      , d = [];
    function i(r, c) {
        return r[1] ? 0 : 1
    }
    return t = i(e),
    n = d[t] = s[t](e),
    {
        c() {
            n.c(),
            l = $t()
        },
        m(r, c) {
            d[t].m(r, c),
            S(r, l, c),
            o = !0
        },
        p(r, [c]) {
            let b = t;
            t = i(r),
            t === b ? d[t].p(r, c) : (Lt(),
            Q(d[b], 1, 1, () => {
                d[b] = null
            }
            ),
            St(),
            n = d[t],
            n ? n.p(r, c) : (n = d[t] = s[t](r),
            n.c()),
            K(n, 1),
            n.m(l.parentNode, l))
        },
        i(r) {
            o || (K(n),
            o = !0)
        },
        o(r) {
            Q(n),
            o = !1
        },
        d(r) {
            d[t].d(r),
            r && L(l)
        }
    }
}
function qt() {
    const e = window.location.href.indexOf("#/");
    let t = e > -1 ? window.location.href.substr(e + 1) : "/";
    const n = t.indexOf("?");
    let l = "";
    return n > -1 && (l = t.substr(n + 1),
    t = t.substr(0, n)),
    {
        location: t,
        querystring: l
    }
}
const Bt = oe(null, function(t) {
    t(qt());
    const n = () => {
        t(qt())
    }
    ;
    return window.addEventListener("hashchange", n, !1),
    function() {
        window.removeEventListener("hashchange", n, !1)
    }
});
re(Bt, e => e.location);
re(Bt, e => e.querystring);
const zt = se(void 0);
function xe(e) {
    e ? window.scrollTo(e.__svelte_spa_router_scrollX, e.__svelte_spa_router_scrollY) : window.scrollTo(0, 0)
}
function Ee(e, t, n) {
    let {routes: l={}} = t
      , {prefix: o=""} = t
      , {restoreScrollState: s=!1} = t;
    class d {
        constructor(m, h) {
            if (!h || typeof h != "function" && (typeof h != "object" || h._sveltesparouter !== !0))
                throw Error("Invalid component object");
            if (!m || typeof m == "string" && (m.length < 1 || m.charAt(0) != "/" && m.charAt(0) != "*") || typeof m == "object" && !(m instanceof RegExp))
                throw Error('Invalid value for "path" argument - strings must start with / or *');
            const {pattern: E, keys: M} = _e(m);
            this.path = m,
            typeof h == "object" && h._sveltesparouter === !0 ? (this.component = h.component,
            this.conditions = h.conditions || [],
            this.userData = h.userData,
            this.props = h.props || {}) : (this.component = () => Promise.resolve(h),
            this.conditions = [],
            this.props = {}),
            this._pattern = E,
            this._keys = M
        }
        match(m) {
            if (o) {
                if (typeof o == "string")
                    if (m.startsWith(o))
                        m = m.substr(o.length) || "/";
                    else
                        return null;
                else if (o instanceof RegExp) {
                    const B = m.match(o);
                    if (B && B[0])
                        m = m.substr(B[0].length) || "/";
                    else
                        return null
                }
            }
            const h = this._pattern.exec(m);
            if (h === null)
                return null;
            if (this._keys === !1)
                return h;
            const E = {};
            let M = 0;
            for (; M < this._keys.length; ) {
                try {
                    E[this._keys[M]] = decodeURIComponent(h[M + 1] || "") || null
                } catch {
                    E[this._keys[M]] = null
                }
                M++
            }
            return E
        }
        async checkConditions(m) {
            for (let h = 0; h < this.conditions.length; h++)
                if (!await this.conditions[h](m))
                    return !1;
            return !0
        }
    }
    const i = [];
    l instanceof Map ? l.forEach( (p, m) => {
        i.push(new d(m,p))
    }
    ) : Object.keys(l).forEach(p => {
        i.push(new d(p,l[p]))
    }
    );
    let r = null
      , c = null
      , b = {};
    const C = Xt();
    async function y(p, m) {
        await me(),
        C(p, m)
    }
    let $ = null
      , w = null;
    s && (w = p => {
        p.state && (p.state.__svelte_spa_router_scrollY || p.state.__svelte_spa_router_scrollX) ? $ = p.state : $ = null
    }
    ,
    window.addEventListener("popstate", w),
    pe( () => {
        xe($)
    }
    ));
    let A = null
      , P = null;
    const x = Bt.subscribe(async p => {
        A = p;
        let m = 0;
        for (; m < i.length; ) {
            const h = i[m].match(p.location);
            if (!h) {
                m++;
                continue
            }
            const E = {
                route: i[m].path,
                location: p.location,
                querystring: p.querystring,
                userData: i[m].userData,
                params: h && typeof h == "object" && Object.keys(h).length ? h : null
            };
            if (!await i[m].checkConditions(E)) {
                n(0, r = null),
                P = null,
                y("conditionsFailed", E);
                return
            }
            y("routeLoading", Object.assign({}, E));
            const M = i[m].component;
            if (P != M) {
                M.loading ? (n(0, r = M.loading),
                P = M,
                n(1, c = M.loadingParams),
                n(2, b = {}),
                y("routeLoaded", Object.assign({}, E, {
                    component: r,
                    name: r.name,
                    params: c
                }))) : (n(0, r = null),
                P = null);
                const B = await M();
                if (p != A)
                    return;
                n(0, r = B && B.default || B),
                P = M
            }
            h && typeof h == "object" && Object.keys(h).length ? n(1, c = h) : n(1, c = null),
            n(2, b = i[m].props),
            y("routeLoaded", Object.assign({}, E, {
                component: r,
                name: r.name,
                params: c
            })).then( () => {
                zt.set(c)
            }
            );
            return
        }
        n(0, r = null),
        P = null,
        zt.set(void 0)
    }
    );
    he( () => {
        x(),
        w && window.removeEventListener("popstate", w)
    }
    );
    function O(p) {
        At.call(this, e, p)
    }
    function g(p) {
        At.call(this, e, p)
    }
    return e.$$set = p => {
        "routes"in p && n(3, l = p.routes),
        "prefix"in p && n(4, o = p.prefix),
        "restoreScrollState"in p && n(5, s = p.restoreScrollState)
    }
    ,
    e.$$.update = () => {
        e.$$.dirty & 32 && (history.scrollRestoration = s ? "manual" : "auto")
    }
    ,
    [r, c, b, l, o, s, O, g]
}
class $e extends ut {
    constructor(t) {
        super(),
        ct(this, t, Ee, ke, st, {
            routes: 3,
            prefix: 4,
            restoreScrollState: 5
        })
    }
}
function Me(e) {
    let t;
    return {
        c() {
            t = f("div"),
            t.innerHTML = `<div class="hero-overlay bg-slate-900 bg-opacity-80"></div> 
    <div class="hero-content text-center text-neutral-content"><div class="max-w-md"><h1 class="mb-5 text-5xl">CYB3RNO73S</h1> 
        <p class="mb-5">Welcome to Cybernotes, a truly secure notes app, aimed at protecting your data from even the most skilled hackers and most skilled hackers, and most violent criminals</p> 
        <a href="/#/login"><button class="btn btn-primary">Get Started</button></a></div></div>`,
            u(t, "class", "hero min-h-screen"),
            Mt(t, "background-image", "url(/uploads/bg.jpg)")
        },
        m(n, l) {
            S(n, t, l)
        },
        p: R,
        i: R,
        o: R,
        d(n) {
            n && L(t)
        }
    }
}
class Ce extends ut {
    constructor(t) {
        super(),
        ct(this, t, null, Me, st, {})
    }
}
function Le(e) {
    let t, n, l, o, s, d, i, r, c, b, C, y, $, w, A, P, x, O, g, p, m, h, E, M, B, q;
    return {
        c() {
            t = f("div"),
            n = f("div"),
            l = _(),
            o = f("div"),
            s = f("div"),
            s.innerHTML = `<h1 class="text-5xl font-bold text-secondary">Login now!</h1> 
        <p class="py-6 text-secondary">Welcome to Cybernotes, a truly secure notes app, aimed at protecting your data from even the most skilled hackers and most skilled netrunners, and most violent criminals</p>`,
            d = _(),
            i = f("div"),
            r = f("form"),
            c = f("div"),
            b = f("label"),
            b.innerHTML = `<span class="label-text">Arasaka ID</span> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path></svg>`,
            C = _(),
            y = f("input"),
            $ = _(),
            w = f("div"),
            A = f("label"),
            A.innerHTML = `<span class="label-text">Password</span> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd"></path></svg>`,
            P = _(),
            x = f("input"),
            O = _(),
            g = f("label"),
            g.innerHTML = '<a href="https://xkcd.com/565/" class="label-text-alt link link-hover">Forgot password?</a>',
            p = _(),
            m = f("div"),
            h = f("button"),
            h.textContent = "Login",
            E = _(),
            M = f("dialog"),
            M.innerHTML = `<div class="modal-box"><h3 class="font-bold text-lg">Error!</h3> 
    <p class="py-4">Login Failed</p></div> 
  <form method="dialog" class="modal-backdrop"><button>close</button></form>`,
            u(n, "class", "hero-overlay bg-slate-900 bg-opacity-80"),
            u(s, "class", "text-center lg:text-left"),
            u(b, "class", "label"),
            u(y, "placeholder", "Arasaka ID"),
            u(y, "class", "input input-bordered"),
            y.required = !0,
            u(c, "class", "form-control"),
            u(A, "class", "label"),
            u(x, "type", "password"),
            u(x, "placeholder", "password"),
            u(x, "class", "input input-bordered"),
            x.required = !0,
            u(g, "class", "label"),
            u(w, "class", "form-control"),
            u(h, "class", "btn btn-primary"),
            u(m, "class", "form-control mt-6"),
            u(r, "class", "card-body"),
            u(i, "class", "card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"),
            u(o, "class", "hero-content flex-col lg:flex-row-reverse"),
            u(t, "class", "hero min-h-screen"),
            Mt(t, "background-image", "url(/uploads/bg.jpg)"),
            u(M, "id", "fail_modal"),
            u(M, "class", "modal")
        },
        m(N, W) {
            S(N, t, W),
            a(t, n),
            a(t, l),
            a(t, o),
            a(o, s),
            a(o, d),
            a(o, i),
            a(i, r),
            a(r, c),
            a(c, b),
            a(c, C),
            a(c, y),
            F(y, e[0]),
            a(r, $),
            a(r, w),
            a(w, A),
            a(w, P),
            a(w, x),
            F(x, e[1]),
            a(w, O),
            a(w, g),
            a(r, p),
            a(r, m),
            a(m, h),
            S(N, E, W),
            S(N, M, W),
            B || (q = [Z(y, "input", e[4]), Z(x, "input", e[5]), Z(h, "click", e[6]), Z(h, "click", ue(e[3]))],
            B = !0)
        },
        p(N, [W]) {
            W & 1 && y.value !== N[0] && F(y, N[0]),
            W & 2 && x.value !== N[1] && F(x, N[1])
        },
        i: R,
        o: R,
        d(N) {
            N && L(t),
            N && L(E),
            N && L(M),
            B = !1,
            nt(q)
        }
    }
}
function Se(e, t, n) {
    let l = ""
      , o = "";
    Vt( () => {
        localStorage.token != null && window.location.replace("/#/notes")
    }
    );
    const s = async () => {
        const b = "/api/login"
          , C = {
            username: l,
            password: o
        };
        try {
            const y = await fetch(b, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(C)
            });
            if (!y.ok) {
                fail_modal.showModal();
                return
            }
            const w = (await y.json()).token;
            localStorage.setItem("token", w),
            window.location.replace("/#/notes")
        } catch (y) {
            console.error("Error:", y)
        }
    }
    ;
    function d(b) {
        At.call(this, e, b)
    }
    function i() {
        l = this.value,
        n(0, l)
    }
    function r() {
        o = this.value,
        n(1, o)
    }
    return [l, o, s, d, i, r, () => s()]
}
class Te extends ut {
    constructor(t) {
        super(),
        ct(this, t, Se, Le, st, {})
    }
}
function je(e) {
    let t, n, l;
    return {
        c() {
            t = f("div"),
            t.innerHTML = `<div class="hero-overlay bg-slate-900 bg-opacity-80"></div> 

    <div class="hero-content flex-col lg:flex-row-reverse"><div class="text-center lg:text-left"><h1 class="text-5xl font-bold text-secondary">Register now!</h1> 
        <p class="py-6 text-secondary">Welcome to Cybernotes, a truly secure notes app, aimed at protecting your data from even the most skilled hackers and most skilled netrunners, and most violent criminals</p></div> 
      <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"><form class="card-body"><div class="form-control"><label class="label"><span class="label-text">Arasaka ID</span> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path></svg></label> 
            <input placeholder="Arasaka ID" class="input input-bordered" required=""/></div> 
          <div class="form-control"><label class="label"><span class="label-text">Password</span> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd"></path></svg></label> 
            <input type="password" placeholder="password" class="input input-bordered" required=""/></div> 
          <div class="form-control"><label class="label"><span class="label-text">FDRP Password</span> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd"></path></svg></label> 
            <input type="password" placeholder="FDRP password" class="input input-bordered" required=""/></div> 
          <div class="form-control mt-6"><button class="btn btn-primary" onclick="modal.showModal()">Register</button></div></form></div></div>`,
            n = _(),
            l = f("dialog"),
            l.innerHTML = `<div class="modal-box"><h3 class="font-bold text-lg">Error!</h3> 
    <p class="py-4">Insert neural interface to register</p> 
    <div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div></div>`,
            u(t, "class", "hero min-h-screen"),
            Mt(t, "background-image", "url(/uploads/bg.jpg)"),
            u(l, "id", "modal"),
            u(l, "class", "modal")
        },
        m(o, s) {
            S(o, t, s),
            S(o, n, s),
            S(o, l, s)
        },
        p: R,
        i: R,
        o: R,
        d(o) {
            o && L(t),
            o && L(n),
            o && L(l)
        }
    }
}
class Ae extends ut {
    constructor(t) {
        super(),
        ct(this, t, null, je, st, {})
    }
}
function Zt(e, t, n) {
    const l = e.slice();
    return l[16] = t[n],
    l
}
function Ft(e) {
    let t, n = e[16].trim() + "", l;
    return {
        c() {
            t = f("button"),
            l = yt(n),
            u(t, "class", "btn btn-secondary btn-sm mb-2 mr-1")
        },
        m(o, s) {
            S(o, t, s),
            a(t, l)
        },
        p(o, s) {
            s & 1 && n !== (n = o[16].trim() + "") && jt(l, n)
        },
        d(o) {
            o && L(t)
        }
    }
}
function Ut(e) {
    let t = e[16].trim() != "", n, l = t && Ft(e);
    return {
        c() {
            l && l.c(),
            n = $t()
        },
        m(o, s) {
            l && l.m(o, s),
            S(o, n, s)
        },
        p(o, s) {
            s & 1 && (t = o[16].trim() != ""),
            t ? l ? l.p(o, s) : (l = Ft(o),
            l.c(),
            l.m(n.parentNode, n)) : l && (l.d(1),
            l = null)
        },
        d(o) {
            l && l.d(o),
            o && L(n)
        }
    }
}
function Ne(e) {
    let t, n, l, o, s, d, i, r, c, b = e[0][2] + "", C, y, $, w, A = e[0][3] + "", P, x, O, g, p, m, h, E, M, B, q, N, W, gt, Y, J, vt, _t, tt, G, lt, ot, et, V, X, dt, U = e[0][4].split(","), I = [];
    for (let k = 0; k < U.length; k += 1)
        I[k] = Ut(Zt(e, U, k));
    return {
        c() {
            t = f("div"),
            n = f("div"),
            l = f("button"),
            l.innerHTML = '<svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"></path></svg>',
            o = _(),
            s = f("button"),
            s.innerHTML = '<svg class="w-6 h-6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"></path></svg>',
            d = _(),
            i = f("div");
            for (let k = 0; k < I.length; k += 1)
                I[k].c();
            r = _(),
            c = f("h2"),
            C = yt(b),
            y = _(),
            $ = f("div"),
            w = f("p"),
            P = yt(A),
            x = _(),
            O = f("dialog"),
            g = f("div"),
            p = f("div"),
            p.textContent = "Edit Note",
            m = _(),
            h = f("input"),
            E = _(),
            M = f("br"),
            B = _(),
            q = f("textarea"),
            N = _(),
            W = f("br"),
            gt = _(),
            Y = f("input"),
            J = _(),
            vt = f("br"),
            _t = _(),
            tt = f("div"),
            G = f("button"),
            G.textContent = "CANCEL",
            lt = _(),
            ot = f("button"),
            ot.textContent = "UPDATE",
            et = _(),
            V = f("dialog"),
            V.innerHTML = `<div class="modal-box"><h3 class="font-bold text-lg">Error!</h3> 
      <p class="py-4">Failed to delete note</p></div> 
    <form method="dialog" class="modal-backdrop"><button>close</button></form>`,
            u(l, "class", "btn btn-square btn-sm"),
            u(s, "class", "btn btn-square btn-sm"),
            u(n, "class", "float-right"),
            u(i, "class", ""),
            u(c, "class", "text-2xl"),
            u($, "class", "max-h-52 overflow-scroll"),
            u(t, "class", "w-auto bg-base-100 shadow-xl p-3 max-h-72"),
            u(p, "class", "text-5xl mb-5"),
            u(h, "type", "text"),
            u(h, "placeholder", "Title"),
            u(h, "class", "input input-bordered input-primary w-96 mb-5 border-3"),
            u(q, "class", "textarea textarea-secondary textarea-md w-96 border-3 mb-5"),
            u(q, "placeholder", "Note"),
            u(Y, "type", "text"),
            u(Y, "placeholder", "Tags comma seperated"),
            u(Y, "class", "input input-bordered w-96 mb-5 border-3"),
            u(G, "class", "btn"),
            u(ot, "class", "btn btn-primary"),
            u(tt, "class", "float-right"),
            u(g, "class", "p-5 bg-base-100"),
            u(O, "id", "edit_modal"),
            u(O, "class", "modal"),
            u(V, "id", "fail_del_modal"),
            u(V, "class", "modal")
        },
        m(k, z) {
            S(k, t, z),
            a(t, n),
            a(n, l),
            a(n, o),
            a(n, s),
            a(t, d),
            a(t, i);
            for (let T = 0; T < I.length; T += 1)
                I[T] && I[T].m(i, null);
            a(t, r),
            a(t, c),
            a(c, C),
            a(t, y),
            a(t, $),
            a($, w),
            a(w, P),
            S(k, x, z),
            S(k, O, z),
            a(O, g),
            a(g, p),
            a(g, m),
            a(g, h),
            F(h, e[2]),
            a(g, E),
            a(g, M),
            a(g, B),
            a(g, q),
            F(q, e[3]),
            a(g, N),
            a(g, W),
            a(g, gt),
            a(g, Y),
            F(Y, e[4]),
            a(g, J),
            a(g, vt),
            a(g, _t),
            a(g, tt),
            a(tt, G),
            a(tt, lt),
            a(tt, ot),
            e[14](O),
            S(k, et, z),
            S(k, V, z),
            X || (dt = [Z(l, "click", e[7]), Z(s, "click", e[8]), Z(h, "input", e[9]), Z(q, "input", e[10]), Z(Y, "input", e[11]), Z(G, "click", e[12]), Z(ot, "click", e[13])],
            X = !0)
        },
        p(k, [z]) {
            if (z & 1) {
                U = k[0][4].split(",");
                let T;
                for (T = 0; T < U.length; T += 1) {
                    const j = Zt(k, U, T);
                    I[T] ? I[T].p(j, z) : (I[T] = Ut(j),
                    I[T].c(),
                    I[T].m(i, null))
                }
                for (; T < I.length; T += 1)
                    I[T].d(1);
                I.length = U.length
            }
            z & 1 && b !== (b = k[0][2] + "") && jt(C, b),
            z & 1 && A !== (A = k[0][3] + "") && jt(P, A),
            z & 4 && h.value !== k[2] && F(h, k[2]),
            z & 8 && F(q, k[3]),
            z & 16 && Y.value !== k[4] && F(Y, k[4])
        },
        i: R,
        o: R,
        d(k) {
            k && L(t),
            Kt(I, k),
            k && L(x),
            k && L(O),
            e[14](null),
            k && L(et),
            k && L(V),
            X = !1,
            nt(dt)
        }
    }
}
function Oe(e, t, n) {
    const l = Xt();
    let {data: o} = t;
    const s = async g => {
        const p = `/api/notes/${g}`
          , m = localStorage.getItem("token");
        try {
            const h = await fetch(p, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${m}`
                }
            });
            h.ok || fail_del_modal.showModal();
            const E = await h.json();
            l("reload")
        } catch (h) {
            console.error("Error:", h)
        }
    }
    ;
    let d, i = o[2], r = o[3], c = o[4];
    const b = async (g, p, m, h) => {
        const E = `/api/notes/${g}`
          , M = localStorage.getItem("token")
          , B = {
            title: p,
            content: m,
            tags: h
        };
        console.log(g, p, m, h);
        try {
            const q = await fetch(E, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${M}`
                },
                body: JSON.stringify(B)
            });
            if (!q.ok)
                throw new Error("Failed to edit note");
            const N = await q.json();
            l("reload"),
            d.close()
        } catch (q) {
            console.error("Error:", q)
        }
    }
      , C = () => d.showModal()
      , y = () => s(o[0]);
    function $() {
        i = this.value,
        n(2, i)
    }
    function w() {
        r = this.value,
        n(3, r)
    }
    function A() {
        c = this.value,
        n(4, c)
    }
    const P = () => d.close()
      , x = () => b(o[0], i, r, c);
    function O(g) {
        Nt[g ? "unshift" : "push"]( () => {
            d = g,
            n(1, d)
        }
        )
    }
    return e.$$set = g => {
        "data"in g && n(0, o = g.data)
    }
    ,
    [o, d, i, r, c, s, b, C, y, $, w, A, P, x, O]
}
class He extends ut {
    constructor(t) {
        super(),
        ct(this, t, Oe, Ne, st, {
            data: 0
        })
    }
}
function Wt(e, t, n) {
    const l = e.slice();
    return l[12] = t[n],
    l
}
function Yt(e) {
    let t, n;
    return t = new He({
        props: {
            data: e[12]
        }
    }),
    t.$on("reload", e[8]),
    {
        c() {
            bt(t.$$.fragment)
        },
        m(l, o) {
            it(t, l, o),
            n = !0
        },
        p(l, o) {
            const s = {};
            o & 1 && (s.data = l[12]),
            t.$set(s)
        },
        i(l) {
            n || (K(t.$$.fragment, l),
            n = !0)
        },
        o(l) {
            Q(t.$$.fragment, l),
            n = !1
        },
        d(l) {
            at(t, l)
        }
    }
}
function Pe(e) {
    let t, n, l, o, s, d, i, r, c, b, C, y, $, w, A, P, x, O, g, p, m, h, E, M, B, q, N, W, gt, Y, J, vt, _t, tt, G, lt, ot, et, V, X, dt, U, I, k, z, T = e[0], j = [];
    for (let v = 0; v < T.length; v += 1)
        j[v] = Yt(Wt(e, T, v));
    const ie = v => Q(j[v], 1, 1, () => {
        j[v] = null
    }
    );
    return {
        c() {
            t = f("div"),
            n = f("details"),
            l = f("summary"),
            l.textContent = "CYBERNOTES",
            o = _(),
            s = f("ul"),
            d = f("li"),
            d.innerHTML = "<a>Logout</a>",
            i = _(),
            r = f("li"),
            r.innerHTML = "<a>Connect neural interface</a>",
            c = _(),
            b = f("input"),
            C = _(),
            y = f("button"),
            y.textContent = "Add",
            $ = _(),
            w = f("div"),
            A = f("div"),
            P = _(),
            x = f("div");
            for (let v = 0; v < j.length; v += 1)
                j[v].c();
            O = _(),
            g = f("dialog"),
            p = f("div"),
            m = f("div"),
            m.textContent = "Add Note",
            h = _(),
            E = f("input"),
            M = _(),
            B = f("br"),
            q = _(),
            N = f("textarea"),
            W = _(),
            gt = f("br"),
            Y = _(),
            J = f("input"),
            vt = _(),
            _t = f("br"),
            tt = _(),
            G = f("div"),
            lt = f("button"),
            lt.textContent = "CANCEL",
            ot = _(),
            et = f("button"),
            et.textContent = "ADD",
            V = _(),
            X = f("dialog"),
            X.innerHTML = `<div class="modal-box"><h3 class="font-bold text-lg">Error!</h3> 
    <p class="py-4">Failed to add note</p></div> 
  <form method="dialog" class="modal-backdrop"><button>close</button></form>`,
            dt = _(),
            U = f("dialog"),
            U.innerHTML = `<div class="modal-box"><h3 class="font-bold text-lg">Error!</h3> 
    <p class="py-4">Failed to get notes</p></div> 
  <form method="dialog" class="modal-backdrop"><button>close</button></form>`,
            u(l, "class", "m-1 btn text-xl font-bold"),
            u(s, "class", "p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"),
            u(n, "class", "dropdown"),
            u(b, "type", "text"),
            u(b, "placeholder", "Search"),
            u(b, "class", "input bg-slate-900 text-base-100 w-full"),
            u(y, "class", "btn btn-primary ml-3"),
            u(y, "onclick", "modal.showModal()"),
            u(t, "class", "navbar bg-base-100"),
            u(A, "class", "hero-overlay bg-slate-900 bg-opacity-80"),
            u(x, "class", "grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10"),
            u(w, "class", "hero min-h-screen"),
            Mt(w, "background-image", "url(/uploads/bg.jpg)"),
            u(m, "class", "text-5xl mb-5"),
            u(E, "type", "text"),
            u(E, "placeholder", "Title"),
            u(E, "class", "input input-bordered input-primary w-96 mb-5 border-3"),
            u(N, "class", "textarea textarea-secondary textarea-md w-96 border-3 mb-5"),
            u(N, "placeholder", "Note"),
            u(J, "type", "text"),
            u(J, "placeholder", "Tags comma seperated"),
            u(J, "class", "input input-bordered w-96 mb-5 border-3"),
            u(lt, "class", "btn"),
            u(lt, "onclick", "modal.close()"),
            u(et, "class", "btn btn-primary"),
            u(G, "class", "float-right"),
            u(p, "class", "p-5 bg-base-100"),
            u(g, "id", "modal"),
            u(g, "class", "modal"),
            u(X, "id", "fail_add_modal"),
            u(X, "class", "modal"),
            u(U, "id", "fail_get_modal"),
            u(U, "class", "modal")
        },
        m(v, H) {
            S(v, t, H),
            a(t, n),
            a(n, l),
            a(n, o),
            a(n, s),
            a(s, d),
            a(s, i),
            a(s, r),
            a(t, c),
            a(t, b),
            a(t, C),
            a(t, y),
            S(v, $, H),
            S(v, w, H),
            a(w, A),
            a(w, P),
            a(w, x);
            for (let D = 0; D < j.length; D += 1)
                j[D] && j[D].m(x, null);
            S(v, O, H),
            S(v, g, H),
            a(g, p),
            a(p, m),
            a(p, h),
            a(p, E),
            F(E, e[1]),
            a(p, M),
            a(p, B),
            a(p, q),
            a(p, N),
            F(N, e[2]),
            a(p, W),
            a(p, gt),
            a(p, Y),
            a(p, J),
            F(J, e[3]),
            a(p, vt),
            a(p, _t),
            a(p, tt),
            a(p, G),
            a(G, lt),
            a(G, ot),
            a(G, et),
            S(v, V, H),
            S(v, X, H),
            S(v, dt, H),
            S(v, U, H),
            I = !0,
            k || (z = [Z(d, "click", e[7]), Z(E, "input", e[9]), Z(N, "input", e[10]), Z(J, "input", e[11]), Z(et, "click", e[5])],
            k = !0)
        },
        p(v, [H]) {
            if (H & 17) {
                T = v[0];
                let D;
                for (D = 0; D < T.length; D += 1) {
                    const It = Wt(v, T, D);
                    j[D] ? (j[D].p(It, H),
                    K(j[D], 1)) : (j[D] = Yt(It),
                    j[D].c(),
                    K(j[D], 1),
                    j[D].m(x, null))
                }
                for (Lt(),
                D = T.length; D < j.length; D += 1)
                    ie(D);
                St()
            }
            H & 2 && E.value !== v[1] && F(E, v[1]),
            H & 4 && F(N, v[2]),
            H & 8 && J.value !== v[3] && F(J, v[3])
        },
        i(v) {
            if (!I) {
                for (let H = 0; H < T.length; H += 1)
                    K(j[H]);
                I = !0
            }
        },
        o(v) {
            j = j.filter(Boolean);
            for (let H = 0; H < j.length; H += 1)
                Q(j[H]);
            I = !1
        },
        d(v) {
            v && L(t),
            v && L($),
            v && L(w),
            Kt(j, v),
            v && L(O),
            v && L(g),
            v && L(V),
            v && L(X),
            v && L(dt),
            v && L(U),
            k = !1,
            nt(z)
        }
    }
}
function Be(e, t, n) {
    let l = [];
    Vt( () => {
        localStorage.token == null && window.location.replace("/#/login")
    }
    );
    const o = async () => {
        const A = "api/notes"
          , P = localStorage.getItem("token");
        try {
            const x = await fetch(A, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${P}`
                }
            });
            x.ok || (fail_get_modal.showModal(),
            localStorage.removeItem("token")),
            n(0, l = await x.json())
        } catch (x) {
            console.error("Error:", x)
        }
    }
    ;
    let s = ""
      , d = ""
      , i = "";
    const r = async () => {
        const A = "/api/notes"
          , P = localStorage.getItem("token")
          , x = {
            title: s,
            content: d,
            tags: i
        };
        try {
            const O = await fetch(A, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${P}`
                },
                body: JSON.stringify(x)
            });
            O.ok || fail_add_modal.showModal();
            const g = await O.json();
            modal.close(),
            o()
        } catch (O) {
            console.error("Error:", O)
        }
    }
      , c = async () => {
        localStorage.removeItem("token"),
        window.location.replace("/#/login")
    }
    ;
    o();
    const b = () => c()
      , C = () => o();
    function y() {
        s = this.value,
        n(1, s)
    }
    function $() {
        d = this.value,
        n(2, d)
    }
    function w() {
        i = this.value,
        n(3, i)
    }
    return [l, s, d, i, o, r, c, b, C, y, $, w]
}
class Ie extends ut {
    constructor(t) {
        super(),
        ct(this, t, Be, Pe, st, {})
    }
}
function De(e) {
    let t, n, l, o;
    return t = new $e({
        props: {
            routes: {
                "/": Ce,
                "/login": Te,
                "/notes": Ie,
                "/register": Ae
            }
        }
    }),
    {
        c() {
            bt(t.$$.fragment),
            n = _(),
            l = f("footer"),
            l.innerHTML = `<aside class="svelte-1ppaie9"><svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current svelte-1ppaie9"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" class="svelte-1ppaie9"></path></svg> 
      <p class="svelte-1ppaie9">ARASAKA Industries Ltd.<br class="svelte-1ppaie9"/>Providing reliable tech since 1912</p></aside>  
    <nav class="svelte-1ppaie9"><h6 class="footer-title svelte-1ppaie9">Social</h6>  
      <div class="grid grid-flow-col gap-4 svelte-1ppaie9"><a class="svelte-1ppaie9"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current svelte-1ppaie9"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" class="svelte-1ppaie9"></path></svg></a> 
        <a class="svelte-1ppaie9"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current svelte-1ppaie9"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" class="svelte-1ppaie9"></path></svg></a> 
        <a class="svelte-1ppaie9"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current svelte-1ppaie9"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" class="svelte-1ppaie9"></path></svg></a></div></nav>`,
            u(l, "class", "footer p-10 bg-slate-900 text-neutral-content svelte-1ppaie9")
        },
        m(s, d) {
            it(t, s, d),
            S(s, n, d),
            S(s, l, d),
            o = !0
        },
        p: R,
        i(s) {
            o || (K(t.$$.fragment, s),
            o = !0)
        },
        o(s) {
            Q(t.$$.fragment, s),
            o = !1
        },
        d(s) {
            at(t, s),
            s && L(n),
            s && L(l)
        }
    }
}
class Re extends ut {
    constructor(t) {
        super(),
        ct(this, t, null, De, st, {})
    }
}
new Re({
    target: document.getElementById("app")
});
