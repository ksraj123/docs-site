(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{557:function(e,s,a){"use strict";a.r(s);var r=a(18),t=Object(r.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"zowe-auxiliary-address-space"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zowe-auxiliary-address-space"}},[e._v("#")]),e._v(" Zowe Auxiliary Address space")]),e._v(" "),a("p",[e._v("The cross memory server runs as a started task "),a("code",[e._v("ZWESISTC")]),e._v(" that uses the load module "),a("code",[e._v("ZWESIS01")]),e._v(".")]),e._v(" "),a("p",[e._v("In some use cases, the Zowe cross memory server has to spawn child address spaces, which are known as auxiliary (AUX) address spaces.  The auxiliary address spaces run as the started task "),a("code",[e._v("ZWESASTC")]),e._v(" using the load module "),a("code",[e._v("ZWESAUX")]),e._v(" and are started, controlled, and stopped by the cross memory server.")]),e._v(" "),a("p",[e._v("An example of when an auxiliary address space is used is for a system service that requires supervisor state but cannot run in cross-memory mode. The service can be run in an AUX address space which is invoked by the Cross Memory Server acting as a proxy for unauthorized users of the service.")]),e._v(" "),a("p",[e._v("Do not install the Zowe auxiliary address space unless a Zowe extension product's installation guide explicitly asks for it to be done.  This will occur if the extension product requires services of Zowe that cannot be performed by the cross memory server and an auxiliary address space needs to be started.")]),e._v(" "),a("p",[e._v("A default installation of Zowe does not require auxiliary address spaces to be configured.")]),e._v(" "),a("p",[e._v("You do not start or stop the ZWESASTC manually.")])])}),[],!1,null,null,null);s.default=t.exports}}]);