(function (e) {
	function t(t) {
		for (
			var r, a, s = t[0], u = t[1], c = t[2], l = 0, d = [];
			l < s.length;
			l++
		)
			(a = s[l]),
				Object.prototype.hasOwnProperty.call(o, a) &&
					o[a] &&
					d.push(o[a][0]),
				(o[a] = 0);
		for (r in u)
			Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
		f && f(t);
		while (d.length) d.shift()();
		return i.push.apply(i, c || []), n();
	}
	function n() {
		for (var e, t = 0; t < i.length; t++) {
			for (var n = i[t], r = !0, a = 1; a < n.length; a++) {
				var s = n[a];
				0 !== o[s] && (r = !1);
			}
			r && (i.splice(t--, 1), (e = u((u.s = n[0]))));
		}
		return e;
	}
	var r = {},
		a = { 1: 0 },
		o = { 1: 0 },
		i = [];
	function s(e) {
		return (
			u.p +
			"js/" +
			({}[e] || e) +
			"." +
			{
				2: "74d80b03",
				3: "a2d3ab0e",
				4: "3a606182",
				5: "c21403fb",
				6: "dff540ce",
				7: "27b3e441",
				8: "7b3fc61b",
				9: "bca56e98",
			}[e] +
			".js"
		);
	}
	function u(t) {
		if (r[t]) return r[t].exports;
		var n = (r[t] = { i: t, l: !1, exports: {} });
		return e[t].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
	}
	(u.e = function (e) {
		var t = [],
			n = { 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1 };
		a[e]
			? t.push(a[e])
			: 0 !== a[e] &&
				n[e] &&
				t.push(
					(a[e] = new Promise(function (t, n) {
						for (
							var r =
									"css/" +
									({}[e] || e) +
									"." +
									{
										2: "7d49e47f",
										3: "e51c852e",
										4: "eafea247",
										5: "f07aa5cc",
										6: "7bdfacea",
										7: "e51c852e",
										8: "31d6cfe0",
										9: "31d6cfe0",
									}[e] +
									".css",
								o = u.p + r,
								i = document.getElementsByTagName("link"),
								s = 0;
							s < i.length;
							s++
						) {
							var c = i[s],
								l =
									c.getAttribute("data-href") ||
									c.getAttribute("href");
							if ("stylesheet" === c.rel && (l === r || l === o))
								return t();
						}
						var d = document.getElementsByTagName("style");
						for (s = 0; s < d.length; s++) {
							(c = d[s]), (l = c.getAttribute("data-href"));
							if (l === r || l === o) return t();
						}
						var f = document.createElement("link");
						(f.rel = "stylesheet"),
							(f.type = "text/css"),
							(f.onload = t),
							(f.onerror = function (t) {
								var r = (t && t.target && t.target.src) || o,
									i = new Error(
										"Loading CSS chunk " +
											e +
											" failed.\n(" +
											r +
											")",
									);
								(i.code = "CSS_CHUNK_LOAD_FAILED"),
									(i.request = r),
									delete a[e],
									f.parentNode.removeChild(f),
									n(i);
							}),
							(f.href = o);
						var p = document.getElementsByTagName("head")[0];
						p.appendChild(f);
					}).then(function () {
						a[e] = 0;
					})),
				);
		var r = o[e];
		if (0 !== r)
			if (r) t.push(r[2]);
			else {
				var i = new Promise(function (t, n) {
					r = o[e] = [t, n];
				});
				t.push((r[2] = i));
				var c,
					l = document.createElement("script");
				(l.charset = "utf-8"),
					(l.timeout = 120),
					u.nc && l.setAttribute("nonce", u.nc),
					(l.src = s(e));
				var d = new Error();
				c = function (t) {
					(l.onerror = l.onload = null), clearTimeout(f);
					var n = o[e];
					if (0 !== n) {
						if (n) {
							var r =
									t &&
									("load" === t.type ? "missing" : t.type),
								a = t && t.target && t.target.src;
							(d.message =
								"Loading chunk " +
								e +
								" failed.\n(" +
								r +
								": " +
								a +
								")"),
								(d.name = "ChunkLoadError"),
								(d.type = r),
								(d.request = a),
								n[1](d);
						}
						o[e] = void 0;
					}
				};
				var f = setTimeout(function () {
					c({ type: "timeout", target: l });
				}, 12e4);
				(l.onerror = l.onload = c), document.head.appendChild(l);
			}
		return Promise.all(t);
	}),
		(u.m = e),
		(u.c = r),
		(u.d = function (e, t, n) {
			u.o(e, t) ||
				Object.defineProperty(e, t, { enumerable: !0, get: n });
		}),
		(u.r = function (e) {
			"undefined" !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module",
				}),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(u.t = function (e, t) {
			if ((1 & t && (e = u(e)), 8 & t)) return e;
			if (4 & t && "object" === typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (
				(u.r(n),
				Object.defineProperty(n, "default", {
					enumerable: !0,
					value: e,
				}),
				2 & t && "string" != typeof e)
			)
				for (var r in e)
					u.d(
						n,
						r,
						function (t) {
							return e[t];
						}.bind(null, r),
					);
			return n;
		}),
		(u.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e["default"];
						}
					: function () {
							return e;
						};
			return u.d(t, "a", t), t;
		}),
		(u.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(u.p = "/"),
		(u.oe = function (e) {
			throw (console.error(e), e);
		});
	var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
		l = c.push.bind(c);
	(c.push = t), (c = c.slice());
	for (var d = 0; d < c.length; d++) t(c[d]);
	var f = l;
	i.push([0, 0]), n();
})({
	0: function (e, t, n) {
		e.exports = n("2f39");
	},
	"018e": function (e, t) {},
	"02f7": function (e, t, n) {
		var r = {
			"./eva-icons.js": "ae42",
			"./fontawesome-v5-pro.js": "9f2c",
			"./fontawesome-v5.js": "b0a2",
			"./ionicons-v4.js": "01e2",
			"./material-icons-outlined.js": "f894",
			"./material-icons-round.js": "ce94",
			"./material-icons-sharp.js": "4459",
			"./material-icons.js": "8c07",
			"./mdi-v3.js": "f00f",
			"./mdi-v4.js": "cbeb",
			"./themify.js": "fc09",
		};
		function a(e) {
			var t = o(e);
			return n(t);
		}
		function o(e) {
			if (!n.o(r, e)) {
				var t = new Error("Cannot find module '" + e + "'");
				throw ((t.code = "MODULE_NOT_FOUND"), t);
			}
			return r[e];
		}
		(a.keys = function () {
			return Object.keys(r);
		}),
			(a.resolve = o),
			(e.exports = a),
			(a.id = "02f7");
	},
	1: function (e, t) {},
	2: function (e, t) {},
	"203b": function (e, t, n) {
		var r = {
			"./ar.js": "5b8b",
			"./bg.js": "c9d2",
			"./ca.js": "8151",
			"./cs.js": "d6d8",
			"./da.js": "8fc3",
			"./de.js": "2d68",
			"./el.js": "0945",
			"./en-gb.js": "932d3",
			"./en-us.js": "3b69",
			"./eo.js": "6321",
			"./es.js": "5815",
			"./fa-ir.js": "e9c4",
			"./fi.js": "122a",
			"./fr.js": "0857",
			"./gn.js": "21d7",
			"./he.js": "ea35",
			"./hr.js": "6e23",
			"./hu.js": "5f15",
			"./id.js": "a7b6",
			"./it.js": "6186",
			"./ja.js": "148e",
			"./km.js": "16a5",
			"./ko-kr.js": "81e9",
			"./lu.js": "8508",
			"./lv.js": "0b80",
			"./ml.js": "6d60",
			"./ms.js": "77e7",
			"./nb-no.js": "0edf",
			"./nl.js": "3f3c",
			"./pl.js": "d080",
			"./pt-br.js": "4f99",
			"./pt.js": "589a",
			"./ro.js": "9e37",
			"./ru.js": "27cd",
			"./sk.js": "c8b6",
			"./sl.js": "fb8d",
			"./sr.js": "3d7c",
			"./sv.js": "f9e5",
			"./th.js": "3d56",
			"./tr.js": "90c8",
			"./uk.js": "ff58",
			"./vi.js": "593a",
			"./zh-hans.js": "bbca",
			"./zh-hant.js": "74ef",
		};
		function a(e) {
			var t = o(e);
			return n(t);
		}
		function o(e) {
			if (!n.o(r, e)) {
				var t = new Error("Cannot find module '" + e + "'");
				throw ((t.code = "MODULE_NOT_FOUND"), t);
			}
			return r[e];
		}
		(a.keys = function () {
			return Object.keys(r);
		}),
			(a.resolve = o),
			(e.exports = a),
			(a.id = "203b");
	},
	"2f0d": function (e, t, n) {
		var r = { "./locale": "c020", "./locale.js": "c020" };
		function a(e) {
			var t = o(e);
			return n(t);
		}
		function o(e) {
			if (!n.o(r, e)) {
				var t = new Error("Cannot find module '" + e + "'");
				throw ((t.code = "MODULE_NOT_FOUND"), t);
			}
			return r[e];
		}
		(a.keys = function () {
			return Object.keys(r);
		}),
			(a.resolve = o),
			(e.exports = a),
			(a.id = "2f0d");
	},
	"2f39": function (e, t, n) {
		"use strict";
		n.r(t);
		var r = {};
		n.r(r),
			n.d(r, "titlebarHeight", function () {
				return O;
			}),
			n.d(r, "toc", function () {
				return _;
			}),
			n.d(r, "rightDrawerOpen", function () {
				return T;
			});
		var a = {};
		n.r(a),
			n.d(a, "titlebarHeight", function () {
				return E;
			}),
			n.d(a, "toc", function () {
				return L;
			}),
			n.d(a, "rightDrawerOpen", function () {
				return C;
			});
		var o = n("967e"),
			i = n.n(o),
			s =
				(n("a481"),
				n("96cf"),
				n("5c7d"),
				n("573e"),
				n("b623"),
				n("7d6e"),
				n("e54f"),
				n("62f2"),
				n("7e6d"),
				n("a1e8"),
				n("46f6"),
				n("97c2"),
				n("a724"),
				n("2b0e")),
			u = n("b05d"),
			c = n("714f"),
			l = n("4396"),
			d = n("7f67"),
			f = n("2a19"),
			p = n("9c64"),
			h = n("b12a");
		s["a"].use(u["a"], {
			config: { dark: !0 },
			directives: { Ripple: c["a"], Scroll: l["a"], ClosePopup: d["a"] },
			plugins: { Notify: f["a"], Meta: p["a"], AppFullscreen: h["a"] },
		});
		var m = function () {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					"div",
					{ attrs: { id: "q-app" } },
					[n("router-view")],
					1,
				);
			},
			b = [],
			v = { name: "App" },
			g = v,
			w = n("2877"),
			y = Object(w["a"])(g, m, b, !1, null, null, null),
			j = y.exports,
			k = n("2f62"),
			x = { titlebarHeight: 0, toc: [], rightDrawerOpen: !1 },
			O = function (e) {
				return e.titlebarHeight;
			},
			_ = function (e) {
				return e.toc;
			},
			T = function (e) {
				return e.rightDrawerOpen;
			},
			S = n("4db1"),
			P = n.n(S),
			E = function (e, t) {
				e.titlebarHeight = t;
			},
			L = function (e, t) {
				var n;
				(n = e.toc).splice.apply(n, [0, e.toc.length].concat(P()(t)));
			},
			C = function (e, t) {
				e.rightDrawerOpen = t;
			},
			D = n("018e"),
			A = {
				namespaced: !0,
				state: x,
				getters: r,
				mutations: a,
				actions: D,
			};
		s["a"].use(k["a"]);
		var M = function () {
				var e = new k["a"].Store({
					modules: { common: A },
					strict: !1,
				});
				return e;
			},
			N = n("8c4f"),
			I = [
				{ path: "/", redirect: "/en" },
				{
					path: "/en",
					component: function () {
						return Promise.all([n.e(0), n.e(2)]).then(
							n.bind(null, "713b"),
						);
					},
					children: [
						{
							path: "",
							name: "landing",
							component: function () {
								return Promise.all([n.e(0), n.e(5)]).then(
									n.bind(null, "eabb"),
								);
							},
							meta: {
								name: "Menu",
								page_title:
									"Tauri Studio - Make smaller, faster more secure native apps with Rust.",
								description:
									"Tauri is a toolchain for building highly secure native apps that have tiny binaries and are very fast. Whether coming from the front-end with Gatsby, Svelte, Vue, Angular or React - Tauri solves the hard problems of safe User Interfaces for all the desktop platforms.",
								tags: "tauri, native-apps, rust, polyglot, vue, svelte, react, gatsby, quasar",
								url: "https://tauri.studio/",
							},
						},
						{
							path: "governance-and-guidance",
							name: "governance-and-guidance",
							component: function () {
								return n.e(8).then(n.bind(null, "cc1d"));
							},
							meta: {
								name: "Governance",
								page_title: "Tauri Governance.",
								description:
									"Tauri seeks to mitigate bus-factor by working in a collective, transparent and accountable way. We follow the greater-good affirmation, maintain our budget at opencollective and seek to comply with the best-practices outlined by the SFOSC.",
								tags: "tauri, SFOSC, open-source, accountability, best-practice",
								url: "https://tauri.studio/governance-and-guidance",
							},
						},
						{
							path: "book",
							name: "book",
							component: function () {
								return n.e(3).then(n.bind(null, "1499"));
							},
							meta: {
								name: "Book",
								page_title: "Tauri - The Book.",
								description:
									"Some may think that Tauri is complex - they would be right. That is why we are writing the book about it. Discover its contents and how to get your hands on an advance copy.",
								tags: "tauri, book, e-book, open-source, native-apps, development, macos, windows, linux",
								url: "https://tauri.studio/book",
							},
						},
						{
							path: "security",
							name: "security",
							component: function () {
								return n.e(7).then(n.bind(null, "5d68"));
							},
							meta: {
								name: "Security",
								page_title: "Tauri - Secure by Design.",
								description:
									"Learn about the current and forthcoming security approaches that Tauri apps leverage and for which your users will thank you.",
								tags: "tauri, open-source, native-apps, development, macos, windows, linux",
								url: "https://tauri.studio/docs/security",
							},
						},
						{
							path: "introduction",
							name: "introduction",
							component: function () {
								return n.e(4).then(n.bind(null, "8eb4"));
							},
							meta: {
								name: "Introduction",
								page_title: "Tauri - The Overview.",
								description:
									"Learn about how Tauri works from a high-level and about the technology under the hood.",
								tags: "open-source, native-apps, development, macos, windows, linux, documentation, tauri",
								url: "https://tauri.studio/docs/introduction",
							},
						},
						{
							path: "patterns",
							name: "patterns",
							component: function () {
								return Promise.all([n.e(0), n.e(6)]).then(
									n.bind(null, "8452"),
								);
							},
							meta: {
								name: "Patterns",
								page_title: "Tauri - Design Patterns",
								description:
									"Learn about the variety of systems you can design with simple configuration changes - now includes flowcharts and grading to make it easier to compare and choose!",
								tags: "tauri, architecture, flowcharts, open-source, native-apps, development, macos, windows, linux",
								url: "https://tauri.studio/docs/patterns",
							},
						},
						{
							path: "partners",
							name: "partners",
							component: function () {
								return Promise.all([n.e(0), n.e(9)]).then(
									n.bind(null, "ccc0"),
								);
							},
							meta: {
								name: "Partners",
								page_title: "Tauri - Partners",
								description:
									"Meet the companies and projects who support Tauri - from early adopters to tech-sponsors.",
								tags: "development, open-source, native-apps, development, macos, windows, linux",
								url: "https://tauri.studio/partners",
							},
						},
					],
				},
				{ path: "*", name: "notfound", redirect: "/en" },
			],
			U = I;
		s["a"].use(N["a"]);
		var F = function () {
			var e = new N["a"]({
				scrollBehavior: function () {
					return { x: 0, y: 0 };
				},
				routes: U,
				mode: "history",
				base: "/",
			});
			return e;
		};
		function B(e) {
			var t, n, r;
			return i.a.async(function (a) {
				while (1)
					switch ((a.prev = a.next)) {
						case 0:
							if ("function" !== typeof M) {
								a.next = 6;
								break;
							}
							return (
								(a.next = 3),
								i.a.awrap(M({ Vue: s["a"], ssrContext: e }))
							);
						case 3:
							(a.t0 = a.sent), (a.next = 7);
							break;
						case 6:
							a.t0 = M;
						case 7:
							if (((t = a.t0), "function" !== typeof F)) {
								a.next = 14;
								break;
							}
							return (
								(a.next = 11),
								i.a.awrap(
									F({ Vue: s["a"], ssrContext: e, store: t }),
								)
							);
						case 11:
							(a.t1 = a.sent), (a.next = 15);
							break;
						case 14:
							a.t1 = F;
						case 15:
							return (
								(n = a.t1),
								(t.$router = n),
								(r = {
									router: n,
									store: t,
									render: function (e) {
										return e(j);
									},
								}),
								u["a"].ssrUpdate({ app: r, ssr: e }),
								a.abrupt("return", {
									app: r,
									store: t,
									router: n,
								})
							);
						case 20:
						case "end":
							return a.stop();
					}
			});
		}
		var H = n("9483");
		Object(H["a"])("/service-worker.js", {
			ready: function () {
				0;
			},
			registered: function () {
				0;
			},
			cached: function () {
				0;
			},
			updatefound: function () {
				0;
			},
			updated: function () {
				0;
			},
			offline: function () {
				0;
			},
			error: function (e) {
				0;
			},
		});
		var q = n("fbdb"),
			V = function (e) {
				var t = e.Vue,
					n = e.app;
				(t.prototype.$mermaid = q),
					(n.mounted = function () {
						q["initialize"]({
							startOnLoad: !0,
							logLevel: "debug",
							theme: "neutral",
							securityLevel: "loose",
							arrowMarkerAbsolute: !0,
							flowchart: {
								useMaxWidth: !0,
								htmlLabels: !0,
								curve: "basis",
							},
						});
					});
			},
			R = n("ad53");
		n("0247");
		s["a"].use(R["a"]);
		var $ = n("4b46"),
			z = n("a670"),
			G = n("4a11"),
			W = n("800e");
		function J() {
			var e, t, n, r, a, o, u, c, l, d;
			return i.a.async(
				function (f) {
					while (1)
						switch ((f.prev = f.next)) {
							case 0:
								return (f.next = 2), i.a.awrap(B());
							case 2:
								(e = f.sent),
									(t = e.app),
									(n = e.store),
									(r = e.router),
									window.__INITIAL_STATE__ &&
										n.replaceState(
											window.__INITIAL_STATE__,
										),
									(a = !0),
									(o = function (e) {
										(a = !1), (window.location.href = e);
									}),
									(u = window.location.href.replace(
										window.location.origin,
										"",
									)),
									(c = [
										V,
										void 0,
										$["default"],
										z["default"],
										G["default"],
										W["a"],
									]),
									(l = 0);
							case 12:
								if (!(!0 === a && l < c.length)) {
									f.next = 30;
									break;
								}
								if ("function" === typeof c[l]) {
									f.next = 15;
									break;
								}
								return f.abrupt("continue", 27);
							case 15:
								return (
									(f.prev = 15),
									(f.next = 18),
									i.a.awrap(
										c[l]({
											app: t,
											router: r,
											store: n,
											Vue: s["a"],
											ssrContext: null,
											redirect: o,
											urlPath: u,
										}),
									)
								);
							case 18:
								f.next = 27;
								break;
							case 20:
								if (
									((f.prev = 20),
									(f.t0 = f["catch"](15)),
									!f.t0 || !f.t0.url)
								) {
									f.next = 25;
									break;
								}
								return (
									(window.location.href = f.t0.url),
									f.abrupt("return")
								);
							case 25:
								return (
									console.error("[Quasar] boot error:", f.t0),
									f.abrupt("return")
								);
							case 27:
								l++, (f.next = 12);
								break;
							case 30:
								if (!1 !== a) {
									f.next = 32;
									break;
								}
								return f.abrupt("return");
							case 32:
								(d = new s["a"](t)),
									r.onReady(function () {
										d.$mount("#q-app");
									});
							case 34:
							case "end":
								return f.stop();
						}
				},
				null,
				null,
				[[15, 20]],
			);
		}
		/iPad|iPhone|iPod/.test(navigator.userAgent) &&
			!window.MSStream &&
			window.navigator.standalone &&
			n.e(0).then(n.t.bind(null, "a0db", 7)),
			J();
	},
	3: function (e, t) {},
	4: function (e, t) {},
	"7e6d": function (e, t, n) {},
});
