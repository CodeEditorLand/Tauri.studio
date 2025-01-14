(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	[7],
	{
		"4ce1": function (e, n, t) {
			"use strict";
			var a = t("f5f2"),
				i = t.n(a);
			i.a;
		},
		"5d68": function (e, n, t) {
			"use strict";
			t.r(n);
			var a = function () {
					var e = this,
						n = e.$createElement,
						t = e._self._c || n;
					return t(
						"div",
						[
							t("div", {
								staticStyle: { "padding-top": "40px" },
								attrs: { id: "padding" },
							}),
							t("q-markdown", {
								attrs: {
									src: e.markdown,
									toc: "",
									"line-number-alt": "$",
								},
								on: { data: e.onToc },
							}),
						],
						1,
					);
				},
				i = [],
				o =
					"## Security\nThis guide seeks to explain the high level concepts and Security Features at the core of Tauri's design that make you, your apps and your users safer by default.\n\n::: tip Please Note\nWhile we take every opportunity to help you harden your application - there are always underlying threats like BIOS attacks, memory rowhammering and other operating system vulnerabilities that are constantly being discovered and (in the best cases) responsibly disclosed.\nFurthermore, there are many ways that development teams can cut corners and either leak sensitive information or leave doors wide open to any of a range of attacks. Security is a never-ending quest, and your users count on you to keep them safe.\nTherefore, we highly recommend that you take some time to consider the security ramifications of everything that your application does, especially in the context of running on the semi-hostile platform of end-user devices.\nIf you need help or want a review, you are welcome to contact the Tauri team for security consultation.\n:::\n\n### Security Researchers\nIf you feel that there is a security concern or issue with anything in Tauri, please do not publicly comment on your findings. Instead, reach out directly to our security team:\n\n> <center>security@tauri.studio</center>\n\nAlthough we do not currently have a budget for Security Bounties, in some cases we will consider rewarding responsible disclosure with our limited resources.\n\n## No Server Required\nTauri enables you to construct an application that uses web-technology for the user interface without requiring you to use a server to communicate with the backend. Even if you used advanced techniques of dynamic imports and offload work to the backend, no traffic can be sniffed on TCP ports or external processes - because they just aren't there. This reduces not only the physical and virtual footprint of your final binary by a good deal, it also reduces the surface area of potential attack vectors by removing them from the equation.\n\n## Language Features of Rust\nBy turning to the programming language reknowned for its memory-safety and speed, Tauri simply erases whole classes of conventional attacks. `Use after free` just isn't something that can happen with Tauri.\n\n## Dynamic Ahead of Time Compilation (AOT)\nThis process of compilation happens several times during the bootstrapping phase of a Tauri app. By using our default dynamic Ahead of Time compiler, you can generate code references that are unique for every session and are still technically static code units.\n\n## Function Hardening\n### functional ASLR\nFunctional address Space Layout Randomization techniques randomize function names at runtime and can implement OTP hashing so no two sessions are ever the same. We propose a novel type of function naming at boot time and optionally after every execution. Using a UID for each function pointer prevents static attacks.\n\n### Kamikaze Function Injection\nThis advanced type of fASLR using the `EVENT` API endpoint, is a promise wrapped in a closure (with randomized handle) that Rust inserts at runtime into the Webview, where its interface is locked within the promise resolution handler and is nulled after execution.\n\n### Bridge, don't serve\nInstead of passing potentially unsafe functions, an event bridge can be used to pass messages and commands to named brokers at each respective side of the application.\n\n### One Time Pad Tokenization and Hashing\nHashing important messages with a OTP salt, you are able to encrypt messages between the user interface and the Rust backend. We are currently investigating the use of additional sources of entropy such as the amazing [Infinite Noise TRNG](https://13-37.org/en/shop/infinite-noise-trng/).\n\n## System Features\n### API Whitelisting\nYou have the ability to pick and choose which API functions are available to the UI and to Rust. If they are not enabled, the code will not be shipped with your app, which reduces binary size and attack surface. They are opt-in, so you have to consciously choose to progressively enhance your application.\n\n### Content Security Policy Management\nPreventing unauthorized code execution for websites has long since been \"resolved\" by using CSPs. Tauri can inject CSPs into the index.html of the user interface, and when using a localhost server it will also send these headers to the UI or any other clients that connect with it.\n\n### Decompilation is Difficult\nThis means that your apps cannot be easily decompiled as is the case with Electron ASAR  files, which makes the process of reverse engineering your project much more time intensive and requires specialist training.\n\n## Ecosystem\n### Dependency Rescue\nSometimes the Tauri team finds packages in the wild that technically work and are highly valuable, but are out of date and include vulnerabilities. A great example of this is [tauri-inliner](https://github.com/tauri-apps/tauri-inliner). Merely including this module would have introduced over 30 vulnerabilities to our core. So we forked the original library, updated vulnerable modules to the latest versions and modified changed function signatures. Once adopted, we will continue to maintain these libraries.\n\n### Build Pipelines and Artifact Authenticity\nThe process of releasing our source-code artifacts is highly automated, yet mandates kickoff and review from real humans. Our current release strategy uses a combination of Github Actions and IOTO Tangle publication\n\n### Resilient PR and Approval Processes\nOur WG-TECH reviews code changes, tags PRs with scope and make ssure that everything stays up to date. And when its time to publish a new version, one of the maintainers tags a new release on master, which:\n- validates core\n- runs smoke tests\n- audits security for crates and npm\n- generates changelogs\n- creates artifacts\n- publishes checksums to IOTA\n- creates a draft release\nThen the maintainer reviews the release notes, edits if necessary - and a new release is forged.\n\n## Future Work\n### Signed Binaries\nBecause the entire project is shipped within a monolithic binary, code can be signed for all distributables. (Currently using external tooling, but we are actively working on making the bundler a one-stop-shop.) This makes it virtually impossible for hackers to change an installed Application without the operating system noticing. [Reference](https://github.com/electron/asar/issues/123)\n\n### Post-Binary Analysis\nUse industrial-grade pentester-tooling (via our forthcoming Tauri-Frida GUI) to discover and fix security weaknesses in your final binaries.\n\n### Post-Binary Enhancement\nAfter the build is before the delivery, and Tauri will provide you with tools never seen before. Stay tuned!\n\n### Audits\nWe have not yet undertaken an audit, but this is planned for realization before the 1.0 stable release.\n",
				s = {
					name: "PageIndex",
					data: function () {
						return { markdown: o };
					},
					computed: {
						toc: {
							get: function () {
								return this.$store.state.common.toc;
							},
							set: function (e) {
								this.$store.commit("common/toc", e);
							},
						},
					},
					methods: {
						onToc: function (e) {
							this.toc = e;
						},
					},
				},
				r = s,
				c = (t("4ce1"), t("2877")),
				u = Object(c["a"])(r, a, i, !1, null, null, null);
			n["default"] = u.exports;
		},
		f5f2: function (e, n, t) {},
	},
]);
