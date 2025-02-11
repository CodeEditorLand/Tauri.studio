(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	[9],
	{
		ccc0: function (t, e, a) {
			"use strict";
			a.r(e);
			var s = function () {
					var t = this,
						e = t.$createElement,
						a = t._self._c || e;
					return a(
						"div",
						[
							a("div", {
								staticStyle: { "padding-top": "40px" },
								attrs: { id: "padding" },
							}),
							a(
								"div",
								{
									staticClass:
										"text-h4 text-center text-weight-thin q-ma-sm",
								},
								[t._v("Sponsors")],
							),
							a(
								"div",
								{
									staticClass:
										"row justify-center q-gutter-md",
								},
								t._l(t.partners.sponsors, function (e) {
									return a("PartnerCard", {
										key: e.id,
										staticClass:
											"col-lg-3 col-md-4 col-sm-6 col-xs-12 q-ma-md",
										attrs: {
											title: e.title,
											tags: e.tags,
											url: e.url,
											logoUrl: t.$q.dark.isActive
												? e.logoUrl[0]
												: e.logoUrl[1],
											description: e.description,
											flair: e.flair,
										},
									});
								}),
								1,
							),
							a("q-separator", { staticClass: "q-my-lg" }),
							a(
								"div",
								{
									staticClass:
										"text-h4 text-weight-thin text-center q-ma-sm",
								},
								[t._v("Collaborators")],
							),
							a(
								"div",
								{ staticClass: "row justify-center" },
								t._l(t.partners.collaborators, function (e) {
									return a("PartnerCard", {
										key: e.id,
										staticClass:
											"col-lg-3 col-md-4 col-sm-6 col-xs-12 q-ma-md",
										attrs: {
											title: e.title,
											tags: e.tags,
											url: e.url,
											logoUrl: t.$q.dark.isActive
												? e.logoUrl[0]
												: e.logoUrl[1],
											description: e.description,
											flair: e.flair,
										},
									});
								}),
								1,
							),
							a("q-separator", { staticClass: "q-my-lg" }),
							a(
								"div",
								{
									staticClass:
										"text-h4 text-center text-weight-thin q-ma-sm",
								},
								[t._v("Patrons")],
							),
							a(
								"div",
								{ staticClass: "row justify-center" },
								[
									a(
										"q-list",
										t._l(t.partners.patrons, function (e) {
											return a("q-item", { key: e.id }, [
												e.link
													? a(
															"a",
															{
																attrs: {
																	href: e.link,
																	rel: "noopener",
																	target: "_blank",
																},
															},
															[
																a("q-icon", {
																	attrs: {
																		name: "fas fa-star",
																	},
																}),
																t._v(
																	"\n            " +
																		t._s(
																			e.name,
																		) +
																		" ",
																),
															],
															1,
														)
													: a("span", [
															t._v(
																" " +
																	t._s(
																		e.name,
																	) +
																	" ",
															),
														]),
											]);
										}),
										1,
									),
								],
								1,
							),
						],
						1,
					);
				},
				r = [],
				o = function () {
					var t = this,
						e = t.$createElement,
						a = t._self._c || e;
					return a(
						"a",
						{
							attrs: {
								href: t.url,
								rel: "noopener",
								target: "_blank",
							},
						},
						[
							a(
								"q-card",
								{
									staticClass: "no-shadow",
									attrs: { flat: "", bordered: "" },
								},
								[
									t.flair
										? a(
												"q-ribbon",
												{
													staticStyle: {
														"margin-top": "10px",
													},
													attrs: {
														position: "right",
														"leaf-color": "#55ADE4",
														"background-color":
															"#BAE5F2",
													},
												},
												[
													a(
														"small",
														{
															staticClass:
																"q-pa-md text-black text-weight-bold",
														},
														[t._v(t._s(t.flair))],
													),
												],
											)
										: t._e(),
									a(
										"q-card-section",
										[
											a(
												"q-item",
												[
													a(
														"q-item-section",
														{
															staticStyle: {
																height: "80px",
															},
															attrs: {
																avatar: "",
															},
														},
														[
															a("img", {
																staticStyle: {
																	"max-width":
																		"80px",
																},
																attrs: {
																	src: t.logoUrl,
																},
															}),
														],
													),
													a(
														"q-item-section",
														[
															a("q-item-label", [
																a(
																	"a",
																	{
																		staticClass:
																			"q-ml-sm text-h5 text-weight-bold",
																		attrs: {
																			href: t.url,
																			rel: "noopener",
																			target: "_blank",
																		},
																	},
																	[
																		t._v(
																			t._s(
																				t.title,
																			),
																		),
																	],
																),
															]),
															a(
																"div",
																{
																	staticClass:
																		"row",
																},
																t._l(
																	t.tags,
																	function (
																		t,
																	) {
																		return a(
																			"q-badge",
																			{
																				key: t.id,
																				staticClass:
																					"q-ma-xs",
																				attrs: {
																					label: t,
																				},
																			},
																		);
																	},
																),
																1,
															),
														],
														1,
													),
												],
												1,
											),
										],
										1,
									),
									a(
										"q-card-section",
										[
											a("q-item-label", {
												domProps: {
													innerHTML: t._s(
														t.description,
													),
												},
											}),
										],
										1,
									),
								],
								1,
							),
						],
						1,
					);
				},
				i = [],
				n = {
					name: "SponsorCard",
					props: {
						title: String,
						tags: Array,
						url: String,
						logoUrl: String,
						description: String,
						flair: String,
					},
				},
				l = n,
				c = a("2877"),
				p = a("eebe"),
				g = a.n(p),
				d = a("f09f"),
				u = a("a370"),
				m = a("66e5"),
				h = a("4074"),
				f = a("0170"),
				b = a("58a8"),
				v = Object(c["a"])(l, o, i, !1, null, null, null),
				y = v.exports;
			g()(v, "components", {
				QCard: d["a"],
				QCardSection: u["a"],
				QItem: m["a"],
				QItemSection: h["a"],
				QItemLabel: f["a"],
				QBadge: b["a"],
			});
			var w = {
					sponsors: [
						{
							title: "Digital Ocean",
							tags: ["testing", "JS/TS"],
							url: "https://m.do.co/c/40f468c2e493",
							logoUrl: [
								"statics/partnerLogos/DO_Logo_Vertical_Blue.png",
								"statics/partnerLogos/DO_Logo_Vertical_Blue.png",
							],
							description:
								"This project is supported by Digital Ocean. Click this card to visit their website and get $100 credit that you can use over 60 days.",
							flair: "TECH SPONSOR",
						},
						{
							title: "wallaby.js",
							tags: ["testing", "JS/TS"],
							url: "https://wallabyjs.com",
							logoUrl: [
								"statics/partnerLogos/wallabyjs.png",
								"statics/partnerLogos/wallabyjs.png",
							],
							description:
								"The awesome folks at wallaby.js comped the core team of Tauri with their futuristic <strong>REPL in the IDE</strong> test runner. If you avoid testing your JS because it takes so long - with wallaby you'll appreciate the immediate inline feedback. We do...",
							flair: "TECH SPONSOR",
						},
					],
					collaborators: [
						{
							title: "GUIJS",
							tags: ["Dev Toolkit", "early-adopter"],
							url: "https://guijs.dev/",
							logoUrl: [
								"statics/partnerLogos/guijs-round.svg",
								"statics/partnerLogos/guijs-round.svg",
							],
							description:
								"GUIJS is a toolkit for making your devlife easier. This collaboration enabled the extension of Tauri to have a new mode, the sidecar.",
							flair: "COLLABORATOR",
						},
						{
							title: "PureOS",
							tags: ["FLOSS OS", "app store"],
							url: "https://www.pureos.net",
							logoUrl: [
								"statics/partnerLogos/pureos.png",
								"statics/partnerLogos/pureos.png",
							],
							description:
								"It can be argued that the humble beginnings of Tauri stretch back to a conversation where PureOS explained that Electron apps will never ship on the official PureOS store, and something else would be needed.",
							flair: "COLLABORATOR",
						},
						{
							title: "IOTA",
							tags: ["app dev", "early-adopter"],
							url: "https://iota.org",
							logoUrl: [
								"statics/partnerLogos/IOTA_Logo_white_100px.png",
								"statics/partnerLogos/IOTA_Logo_black_100px.png",
							],
							description:
								"The first adopter of Tauri, close collaborators with common interests. IOTA is a permissionless distributed ledger technology, without miners and suited for low power devices.",
							flair: "COLLABORATOR",
						},
						{
							title: "Amethyst",
							tags: ["games", "early-adopter"],
							url: "https://amethyst.rs",
							logoUrl: [
								"statics/partnerLogos/amethyst-white.svg",
								"statics/partnerLogos/amethyst-standard.svg",
							],
							description:
								"A data-driven game engine, in Rust - committed to nuturing an open source community.",
							flair: "COLLABORATOR",
						},
						{
							title: "Meros",
							tags: ["app dev", "early-adopter"],
							url: "https://meroscrypto.io",
							logoUrl: [
								"statics/partnerLogos/meros.png",
								"statics/partnerLogos/meros.png",
							],
							description:
								"If PureOS planted the seed of Tauri, Kayaba from Meros really kicked the can down the road with a perfectly timed question.",
							flair: "COLLABORATOR",
						},
						{
							title: "Tensor",
							tags: ["education", "videos"],
							url: "https://youtube.com/c/tensorprogramming",
							logoUrl: [
								"statics/partnerLogos/tensor.png",
								"statics/partnerLogos/tensor.png",
							],
							description:
								"One of the most polyglot professionals out there, TensorProgramming shares his knowledge and excitement about dozens of different programming languages on his YouTube channel.",
							flair: "COLLABORATOR",
						},
					],
					patrons: [
						{
							name: "Virtual Inspiration",
							link: "https://virtual-inspiration.com",
						},
						{ name: "anonymous" },
						{ name: "Robin van Boven" },
						{ name: "Jonathan Baginski" },
						{ name: "Allan Gaunt" },
					],
				},
				O = {
					name: "Partners",
					components: { PartnerCard: y },
					data: function () {
						return { partners: w };
					},
					computed: {
						toc: {
							get: function () {
								return this.$store.state.common.toc;
							},
							set: function (t) {
								this.$store.commit("common/toc", t);
							},
						},
					},
					methods: {
						onToc: function (t) {
							this.toc = t;
						},
					},
				},
				L = O,
				_ = a("eb85"),
				S = a("1c1c"),
				C = a("0016"),
				k = Object(c["a"])(L, s, r, !1, null, null, null);
			e["default"] = k.exports;
			g()(k, "components", {
				QSeparator: _["a"],
				QList: S["a"],
				QItem: m["a"],
				QIcon: C["a"],
			});
		},
	},
]);
