(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["0d820e6b"],{"8b24":function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("hero",[t("div",{staticStyle:{"padding-top":"260px"},attrs:{id:"padding"}}),t("q-markdown",{attrs:{src:n.markdown,toc:""},on:{data:n.onToc}}),t("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[t("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"primary"}})],1)],1)},a=[],r=t("2514"),i=t("fa2a"),c=t("d152"),s={name:"PageIndex",components:{Hero:r["a"]},data:function(){return{markdown:i["a"],json:c}},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(n){this.$store.commit("common/toc",n)}}},methods:{onToc:function(n){n.push({id:"Tauri-API",label:"Tauri API",level:1,children:Array(0)}),n.push({id:"Donate",label:"Donate",level:1,children:Array(0)}),this.toc=n}}},u=s,d=t("2877"),l=Object(d["a"])(u,o,a,!1,null,null,null);e["default"]=l.exports},fa2a:function(n,e,t){"use strict";e["a"]="## Technical Details\nThe current user interface in Tauri apps leverages Cocoa/WebKit on macOS, gtk-webkit2 on Linux and MSHTML (IE10/11) or Webkit via EdgeHTML / Chakra on Windows. **Tauri** is based on the MIT licensed prior work known as [webview](https://github.com/zserge/webview) and [web-view]().\n\n## Organizational Structure\nTauri apps is governed by the community and work is done in the context of public working groups. Each working group has a dedicated channel on the Discord server as well as a Team on GitHub. Other than that, each WG is free to use whatever type of organizational model it chooses.\n \n The current working groups are: \n- WG Governance & Guidance\n- WG Tech\n- WG Education\n- WG Media\n- WG Security\n\nWith the exception of the security working group, which is by invite only and convenes privately, all other working groups are public and open to any and all participants.\n\n## Roadmap\n\n\n\n\n"}}]);