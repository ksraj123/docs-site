(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{663:function(t,e,a){"use strict";a.r(e);var s=a(18),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"enabling-passticket-creation-for-api-services-that-accept-passtickets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-passticket-creation-for-api-services-that-accept-passtickets"}},[t._v("#")]),t._v(" Enabling PassTicket creation for API Services that Accept PassTickets ")]),t._v(" "),a("p",[t._v("As system programmer, you can configure Zowe to use PassTickets for API services that are compatible to accept them to authenticate your service with the API Mediation Layer.")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview ")]),t._v(" "),a("p",[t._v("API clients can use a Zowe JWT token to access an API service even if the API service itself does not support the JWT token.\nThe Zowe JWT token is available through the API Gateway "),a("a",{attrs:{href:"https://docs.zowe.org/stable/extend/extend-apiml/api-mediation-security.html#authentication-for-api-ml-services",target:"_blank",rel:"noopener noreferrer"}},[t._v("authentication endpoint"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("When an API client provides a valid Zowe JWT token to the API ML, the API Gateway then generates a valid PassTicket for any API service that supports PassTickets.\nThe API Gateway then uses the PassTicket to access that API service.\nThe API Gateway provides the user ID and password in the Authorization header of the HTTP requests using the\n"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#Basic_authentication_scheme",target:"_blank",rel:"noopener noreferrer"}},[t._v("Basic authentication scheme"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#outline-for-enabling-passticket-support"}},[t._v("Outline for enabling PassTicket support")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#security-configuration-that-allows-the-zowe-api-gateway-to-generate-passtickets-for-an-api-service"}},[t._v("Security configuration that allows the Zowe API Gateway to generate PassTickets for an API service")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#ca-acf2"}},[t._v("CA ACF2")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#ca-top-secret"}},[t._v("CA Top Secret")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#racf"}},[t._v("RACF")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#api-services-that-support-passtickets"}},[t._v("API services that support PassTickets")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#api-services-that-register-dynamically-with-api-ml-that-provide-authentication-information"}},[t._v("API Services that register dynamically with API ML that provide authentication information")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#api-services-that-register-dynamically-with-api-ml-but-do-not-provide-metadata"}},[t._v("API Services that register dynamically with API ML but do not provide metadata")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#api-services-that-are-defined-using-a-static-yaml-definition"}},[t._v("API services that are defined using a static YAML definition")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#adding-yaml-configuration-to-api-services-that-register-dynamically-with-api-ml"}},[t._v("Adding YAML configuration to API services that register dynamically with API ML")])])]),t._v(" "),a("h2",{attrs:{id:"outline-for-enabling-passticket-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outline-for-enabling-passticket-support"}},[t._v("#")]),t._v(" Outline for enabling PassTicket support")]),t._v(" "),a("p",[t._v("The following steps outline the procedure for enabling PassTicket Support:")]),t._v(" "),a("ol",[a("li",[t._v("Follow the API service documentation that explains how to activate support for PassTickets.\n"),a("ul",[a("li",[t._v("The PassTickets for the API service must have the replay protection switched off. The PassTickets are exchanged between Zowe API Gateway and the API Service in a secure mainframe environment.")])])]),t._v(" "),a("li",[t._v("Record the value of the APPLID of the API service.")]),t._v(" "),a("li",[t._v("Enable the Zowe started task user ID to generate PassTickets for the API service.")]),t._v(" "),a("li",[t._v("Enable PassTicket support in the API Gateway for your API service.")])]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v("\nPassTickets must be enabled for every user who requires access to the API service.")]),t._v(" "),a("h2",{attrs:{id:"security-configuration-that-allows-the-zowe-api-gateway-to-generate-passtickets-for-an-api-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-configuration-that-allows-the-zowe-api-gateway-to-generate-passtickets-for-an-api-service"}},[t._v("#")]),t._v(" Security configuration that allows the Zowe API Gateway to generate PassTickets for an API service")]),t._v(" "),a("p",[t._v("Consult with your security administrator to issue security commands to allow the Zowe started task user ID to generate PassTickets for the API service.")]),t._v(" "),a("p",[t._v("Use the following variables to generate PassTickets for the API service to enable the Zowe started task user ID:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("<applid>")]),t._v(" is the APPLID value used by the API service for PassTicket support (e.g. "),a("code",[t._v("OMVSAPPL")]),t._v(")")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("<zowesrv>")]),t._v(" is Zowe started task user ID used during the Zowe installation")])])]),t._v(" "),a("p",[t._v("Replace the variables in the following examples with actual values.")]),t._v(" "),a("h3",{attrs:{id:"ca-acf2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ca-acf2"}},[t._v("#")]),t._v(" CA ACF2")]),t._v(" "),a("p",[t._v("Grant the Zowe started task user ID permission to generate PassTickets for users of that API service.\nThe following code is an example of security commands that need to be issued.")]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-txt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ACF\nSET RESOURCE(PTK)\nRECKEY IRRPTAUTH ADD(<applid>.- UID(<zowesrv>) SERVICE(UPDATE,READ) ALLOW)\nF ACF2,REBUILD(PTK),CLASS(P)\nEND\n")])])]),a("h3",{attrs:{id:"ca-top-secret"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ca-top-secret"}},[t._v("#")]),t._v(" CA Top Secret")]),t._v(" "),a("p",[t._v("Grant the Zowe started task user ID permission to generate PassTickets for users of that API service.")]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-txt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("TSS PERMIT(<zowesrv>) PTKTDATA(IRRPTAUTH.<applid>.) ACCESS(READ,UPDATE)\nTSS REFRESH\n")])])]),a("h3",{attrs:{id:"racf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#racf"}},[t._v("#")]),t._v(" RACF")]),t._v(" "),a("p",[t._v("To enable PassTicket creation for API service users, define the profile "),a("code",[t._v("IRRPTAUTH.<applid>.*")]),t._v(" in the "),a("code",[t._v("PTKTDATA")]),t._v(" class and set the universal access authority to "),a("code",[t._v("NONE")]),t._v(".")]),t._v(" "),a("p",[t._v("Grant the Zowe started task user ID permission to generate PassTickets for users of that API service.")]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-txt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("RDEFINE PTKTDATA IRRPTAUTH.<applid>.* UACC(NONE)\nPERMIT IRRPTAUTH.<applid>.* CL(PTKTDATA) ID(<zowesrv>) ACCESS(UPDATE)\nSETROPTS RACLIST(PTKTDATA) REFRESH\n")])])]),a("h2",{attrs:{id:"api-services-that-support-passtickets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-services-that-support-passtickets"}},[t._v("#")]),t._v(" API services that support PassTickets")]),t._v(" "),a("p",[t._v("The following types of API services support PassTickets:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#api-services-that-register-dynamically-with-api-ml-that-provide-authentication-information"}},[t._v("API Services that register dynamically with API ML that provide authentication information")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#api-services-that-register-dynamically-with-api-ml-but-do-not-provide-metadata"}},[t._v("API Services that register dynamically with API ML but do not provide metadata")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#api-services-that-are-defined-using-a-static-yaml-definition"}},[t._v("API services that are defined using a static YAML definition")])])]),t._v(" "),a("h3",{attrs:{id:"api-services-that-register-dynamically-with-api-ml-that-provide-authentication-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-services-that-register-dynamically-with-api-ml-that-provide-authentication-information"}},[t._v("#")]),t._v(" API Services that register dynamically with API ML that provide authentication information")]),t._v(" "),a("p",[t._v("API services that support Zowe API Mediation Layer and use dynamic registration to the Discovery Service already provide metadata that enables PassTicket support.")]),t._v(" "),a("p",[t._v("As a system programmer, you are not required to do anything in this case. All required information is provided by the API service automatically.")]),t._v(" "),a("h3",{attrs:{id:"api-services-that-register-dynamically-with-api-ml-but-do-not-provide-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-services-that-register-dynamically-with-api-ml-but-do-not-provide-metadata"}},[t._v("#")]),t._v(" API Services that register dynamically with API ML but do not provide metadata")]),t._v(" "),a("p",[t._v("Some services can use PassTickets but the API ML does not recognize that the service can accept PassTickets.\nFor such services, you can provide additional service metadata externally in the same file that contains the static YAML definiton. The static YAML definitions are described in "),a("RouterLink",{attrs:{to:"/extend/extend-apiml/onboard-static-definition.html"}},[t._v("REST APIs without code changes required")]),t._v(".")],1),t._v(" "),a("p",[t._v("Add the following section to the YAML file with a static definition:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("additionalServiceMetadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <serviceId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UPDATE\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authentication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" httpBasicPassTicket\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("applid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <applid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("where:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("<serviceId>")])]),t._v(" "),a("p",[t._v("is the service ID of the service to which you want to add metadata.")])])]),t._v(" "),a("h3",{attrs:{id:"api-services-that-are-defined-using-a-static-yaml-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-services-that-are-defined-using-a-static-yaml-definition"}},[t._v("#")]),t._v(" API services that are defined using a static YAML definition")]),t._v(" "),a("p",[t._v("Add the following metadata to the same level as the "),a("code",[t._v("serviceId")]),t._v(":")]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authentication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" httpBasicPassTicket\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("applid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TSTAPPL\n")])])]),a("p",[a("strong",[t._v("Note:")]),t._v(" The fields in this example are explained later in this article.")]),t._v(" "),a("h2",{attrs:{id:"adding-yaml-configuration-to-api-services-that-register-dynamically-with-api-ml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-yaml-configuration-to-api-services-that-register-dynamically-with-api-ml"}},[t._v("#")]),t._v(" Adding YAML configuration to API services that register dynamically with API ML")]),t._v(" "),a("p",[t._v("As a developer of an API service that registers dynamically with the API ML, you need to provide additional metadata to tell the API Gateway to use PassTickets.\nAdditional metadata tells the API Gateway how to generate them. The following code shows an example of the YAML configuration that contains this metadata.")]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authentication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" httpBasicPassTicket\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("applid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <applid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("where:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("httpBasicPassTicket")])]),t._v(" "),a("p",[t._v("is the value that indicates that the HTTP Basic authentication scheme is used with PassTickets.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("<applid>")])]),t._v(" "),a("p",[t._v("is the "),a("code",[t._v("APPLID")]),t._v(" value that is used by the API service for PassTicket support (e.g. "),a("code",[t._v("OMVSAPPL")]),t._v(").")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);