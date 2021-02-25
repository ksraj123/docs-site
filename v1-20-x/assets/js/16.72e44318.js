(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{425:function(e,t,a){e.exports=a.p+"assets/img/Error.68cb8744.png"},426:function(e,t,a){e.exports=a.p+"assets/img/cipher_mismatch.f7d38343.png"},427:function(e,t,a){e.exports=a.p+"assets/img/cipher_overlap.54e171a9.png"},590:function(e,t,a){"use strict";a.r(t);var o=a(18),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"troubleshooting-api-ml"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-api-ml"}},[e._v("#")]),e._v(" Troubleshooting API ML")]),e._v(" "),o("p",[e._v("As an API Mediation Layer user, you may encounter problems with how the API ML functions. This article presents known API ML issues and their solutions.")]),e._v(" "),o("h2",{attrs:{id:"enable-api-ml-debug-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enable-api-ml-debug-mode"}},[e._v("#")]),e._v(" Enable API ML Debug Mode")]),e._v(" "),o("p",[e._v("Use debug mode to activate the following functions:")]),e._v(" "),o("ul",[o("li",[e._v("Display additional debug messages for API ML")]),e._v(" "),o("li",[e._v("Enable changing log level for individual code components")])]),e._v(" "),o("p",[o("strong",[e._v("Important:")]),e._v(" We highly recommend that you enable debug mode only when you want to troubleshoot issues.\nDisable debug mode when you are not troubleshooting. Running in debug mode while operating API ML can adversely affect\nits performance and create large log files that consume a large volume of disk space.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open the file "),o("code",[e._v("instance.env")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Find the line that contains the "),o("code",[e._v("APIML_DEBUG_MODE_ENABLED=")]),e._v(" parameter and set the value to "),o("code",[e._v("true")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v(" APIML_DEBUG_MODE_ENABLED=true\n")])])]),o("p",[e._v("By default debug mode is disabled, so the "),o("code",[e._v("APIML_DEBUG_MODE_ENABLED")]),e._v(" is set to "),o("code",[e._v("false")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Restart Zowe™.")]),e._v(" "),o("p",[e._v("You enabled debug mode for the API ML core services (API Catalog, API Gateway and Discovery Service).")])]),e._v(" "),o("li",[o("p",[e._v("(Optional) Reproduce a bug that causes issues and review debug messages. If you are unable to resolve the issue, create an issue "),o("a",{attrs:{href:"https://github.com/zowe/api-layer/issues/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")])])]),e._v(" "),o("h2",{attrs:{id:"change-the-log-level-of-individual-code-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#change-the-log-level-of-individual-code-components"}},[e._v("#")]),e._v(" Change the Log Level of Individual Code Components")]),e._v(" "),o("p",[e._v("You can change the log level of a particular code component of the API ML internal service at run time.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Enable API ML Debug Mode as described in Enable API ML Debug Mode.\nThis activates the application/loggers endpoints in each API ML internal service (Gateway, Discovery Service, and Catalog).")])]),e._v(" "),o("li",[o("p",[e._v("List the available loggers of a service by issuing the GET request for the given service URL:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("GET scheme://hostname:port/application/loggers\n")])])]),o("p",[e._v("Where:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("scheme")])]),e._v(" "),o("p",[e._v("API ML service scheme (http or https)")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("hostname")])]),e._v(" "),o("p",[e._v("API ML service hostname")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("port")])]),e._v(" "),o("p",[e._v("TCP port where API ML service listens on. The port is defined by the configuration parameter MFS_GW_PORT for the Gateway,\nMFS_DS_PORT for the Discovery Service (by default, set to gateway port + 1), and MFS_AC_PORT for the Catalog\n(by default, set to gateway port + 2).")])])]),e._v(" "),o("p",[o("strong",[e._v("Exception:")]),e._v(" For the catalog you will able to get list the available loggers by issuing the GET request for the given service URL:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("GET [gateway-scheme]://[gateway-hostname]:[gateway-port]/api/v1/apicatalog/application/loggers\n")])])]),o("p",[o("strong",[e._v("Tip:")]),e._v(" One way to issue REST calls is to use the http command in the free HTTPie tool: https://httpie.org/.")]),e._v(" "),o("p",[o("strong",[e._v("Example:")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('HTTPie command:\nhttp GET https://lpar.ca.com:10000/application/loggers\n\nOutput:\n{"levels":["OFF","ERROR","WARN","INFO","DEBUG","TRACE"],\n "loggers":{\n   "ROOT":{"configuredLevel":"INFO","effectiveLevel":"INFO"},\n   "com":{"configuredLevel":null,"effectiveLevel":"INFO"},\n   "com.ca":{"configuredLevel":null,"effectiveLevel":"INFO"},\n   ...\n }\n}\n')])])])]),e._v(" "),o("li",[o("p",[e._v("Alternatively, you extract the configuration of a specific logger using the extended "),o("strong",[e._v("GET")]),e._v(" request:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("GET scheme://hostname:port/application/loggers/{name}\n")])])]),o("p",[e._v("Where:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("{name}")])]),e._v(" "),o("p",[e._v("is the logger name")])])])]),e._v(" "),o("li",[o("p",[e._v("Change the log level of the given component of the API ML internal service. Use the POST request for the given service URL:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("POST scheme://hostname:port/application/loggers/{name}\n")])])]),o("p",[e._v("The POST request requires a new log level parameter value that is provided in the request body:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('{\n\n"configuredLevel": "level"\n\n}\n')])])]),o("p",[e._v("Where:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("level")])]),e._v(" "),o("p",[e._v("is the new log level: "),o("strong",[e._v("OFF")]),e._v(", "),o("strong",[e._v("ERROR")]),e._v(", "),o("strong",[e._v("WARN")]),e._v(", "),o("strong",[e._v("INFO")]),e._v(", "),o("strong",[e._v("DEBUG")]),e._v(", "),o("strong",[e._v("TRACE")])])])]),e._v(" "),o("p",[o("strong",[e._v("Example:")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("http POST https://hostname:port/application/loggers/org.zowe.apiml.enable.model configuredLevel=WARN\n")])])])])]),e._v(" "),o("h2",{attrs:{id:"known-issues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known Issues")]),e._v(" "),o("h3",{attrs:{id:"api-ml-stops-accepting-connections-after-z-os-tcp-ip-stack-is-recycled"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#api-ml-stops-accepting-connections-after-z-os-tcp-ip-stack-is-recycled"}},[e._v("#")]),e._v(" API ML stops accepting connections after z/OS TCP/IP stack is recycled")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")])]),e._v(" "),o("p",[e._v("When z/OS TCP/IP stack is restarted, it is possible that the internal services of API Mediation Layer\n(Gateway, Catalog, and Discovery Service) stop accepting all incoming connections, go into a continuous loop,\nand write a numerous error messages in the log.")]),e._v(" "),o("p",[o("strong",[e._v("Sample message:")])]),e._v(" "),o("p",[e._v("The following message is a typical error message displayed in STDOUT:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("2018-Sep-12 12:17:22.850. org.apache.tomcat.util.net.NioEndpoint -- Socket accept failed java.io.IOException: EDC5122I Input/output error.\n\n.at sun.nio.ch.ServerSocketChannelImpl.accept0(Native Method) ~.na:1.8.0.\n.at sun.nio.ch.ServerSocketChannelImpl.accept(ServerSocketChannelImpl.java:478) ~.na:1.8.0.\n.at sun.nio.ch.ServerSocketChannelImpl.accept(ServerSocketChannelImpl.java:287) ~.na:1.8.0.\n.at org.apache.tomcat.util.net.NioEndpoint$Acceptor.run(NioEndpoint.java:455) ~.tomcat-coyote-8.5.29.jar!/:8.5.29.\n.at java.lang.Thread.run(Thread.java:811) .na:2.9 (12-15-2017).\n")])])]),o("p",[o("strong",[e._v("Solution:")])]),e._v(" "),o("p",[e._v("Restart API Mediation Layer.")]),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v("  To prevent this issue from occurring, it is strongly recommended not to restart the TCP/IP stack while API ML is running.")]),e._v(" "),o("h3",{attrs:{id:"sec0002-error-when-logging-in-to-api-catalog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sec0002-error-when-logging-in-to-api-catalog"}},[e._v("#")]),e._v(" SEC0002 error when logging in to API Catalog")]),e._v(" "),o("p",[e._v("SEC0002 error typically appears when users fail to log in to API Catalog. The following image shows the API Catalog login page with the SEC0002 error.")]),e._v(" "),o("img",{attrs:{src:a(425),alt:"SEC0002 Error",title:"SEC0002 Error",width:"450",height:"350"}}),e._v(" "),o("p",[e._v("The error is caused by failed z/OSMF authentication. To determine the reason authentication failed, open the ZWESVSTC joblog and look for a message that contains "),o("code",[e._v("ZosmfAuthenticationProvider")]),e._v(". The following is an example of the message that contains "),o("code",[e._v("ZosmfAuthenticationProvider")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("2019-08-05 11:25:03.431 ERROR 5 --- .0.0-7552-exec-3. c.c.m.s.l.ZosmfAuthenticationProvider    : Can not access z/OSMF service. Uri 'https://ABC12.slv.broadcom.net:1443' returned: I/O error on GET request for \"https://ABC12.slv.broadcom.net:1443/zosmf/info\": ... \n")])])]),o("p",[e._v("Check the rest of the message, and identify the cause of the problem. The following list provides the possible reasons and solutions for the z/OSMF authentication issue:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#connection-refused"}},[e._v("Connection refused")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#missing-z-osmf-host-name-in-subject-alternative-names"}},[e._v("Missing z/OSMF host name in subject alternative names")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#invalid-z-osmf-host-name-in-subject-alternative-names"}},[e._v("Invalid z/OSMF host name in subject alternative names")])])]),e._v(" "),o("h4",{attrs:{id:"connection-refused"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connection-refused"}},[e._v("#")]),e._v(" Connection refused")]),e._v(" "),o("p",[e._v("In the following message, failure to connect to API Catalog occurs when connection is refused:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Connect to ABC12.slv.broadcom.net:1443 .ABC12.slv.broadcom.net/127.0.0.1. failed: EDC8128I Connection refused.; nested exception is org.apache.http.conn.HttpHostConnectException: \n")])])]),o("p",[e._v("The reason for the refused connection message is either invalid z/OSMF configuration or z/OSMF being unavailable. The preceding message indicates that z/OSMF is not on the 127.0.0.1:1443 interface.")]),e._v(" "),o("p",[o("strong",[e._v("Solution:")])]),e._v(" "),o("h4",{attrs:{id:"configure-z-osmf"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-z-osmf"}},[e._v("#")]),e._v(" Configure z/OSMF")]),e._v(" "),o("p",[e._v("Make sure that z/OSMF is running and is on 127.0.0.1:1443 interface, and try to log in to API Catalog again. If you get the same error message, change z/OSMF configuration.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Locate the z/OSMF PARMLIB member IZUPRMxx.")]),e._v(" "),o("p",[e._v("For example, locate IZUPRM00 member in SYS1.PARMLIB.")])]),e._v(" "),o("li",[o("p",[e._v("Change the current "),o("code",[e._v("HOSTNAME")]),e._v(" configuration to "),o("code",[e._v("HOSTNAME('*')")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Change the current "),o("code",[e._v("HTTP_SSL_PORT")]),e._v(" configuration to "),o("code",[e._v("HTTP_SSL_PORT('1443')")]),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Important!")]),e._v(" If you change the port in the z/OSMF configuration file, all your applications lose connection to z/OSMF.")])])]),e._v(" "),o("p",[e._v("For more information, see "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/izuconfig_IZUPRMxx.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Syntax rules for IZUPRMxx"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("If changing the z/OSMF configuration does not fix the issue, reconfigure Zowe.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[e._v("Open "),o("code",[e._v(".zowe_profile")]),e._v(" in the home directory of the user who installed Zowe.")]),e._v(" "),o("li",[e._v("Modify the value of the "),o("code",[e._v("ZOWE_ZOSMF_PORT")]),e._v(" variable.")]),e._v(" "),o("li",[e._v("Reinstall Zowe.")])]),e._v(" "),o("h4",{attrs:{id:"missing-z-osmf-host-name-in-subject-alternative-names"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#missing-z-osmf-host-name-in-subject-alternative-names"}},[e._v("#")]),e._v(" Missing z/OSMF host name in subject alternative names")]),e._v(" "),o("p",[e._v("In following message, failure to connect to API Catalog is caused by a missing z/OSMF host name in the subject alternative names:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Certificate for <ABC12.slv.broadcom.net> doesn't match any of the subject alternative names: ..; nested exception is javax.net.ssl.SSLPeerUnverifiedException: Certificate for <ABC12.slv.broadcom.net> doesn't match any of the subject alternative names: ..\n")])])]),o("p",[o("strong",[e._v("Solutions:")])]),e._v(" "),o("p",[e._v("Fix the missing z/OSMF host name in subject alternative names using the following methods:")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" Apply the insecure fix only if you use API Catalog for testing purposes.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#Secure-fix"}},[e._v("Secure fix")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#insecure-fix"}},[e._v("Insecure fix")])])]),e._v(" "),o("h4",{attrs:{id:"secure-fix"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#secure-fix"}},[e._v("#")]),e._v(" Secure fix")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[e._v("Obtain a valid certificate for z/OSMF and place it in the z/OSMF keyring. For more information, see "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/izuconfig_KeyringAndCertificate.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configure the z/OSMF Keyring and Certificate"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Re-create the Zowe keystore by deleting it and re-creating it. For more information, see "),o("RouterLink",{attrs:{to:"/user-guide/configure-certificates.html"}},[e._v("Configuring Zowe certificates")]),e._v(".  The Zowe keystore directory is the value of the "),o("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(" variable in the "),o("code",[e._v("instance.env")]),e._v(" file in the instance directory that is used to launch Zowe. See "),o("RouterLink",{attrs:{to:"/user-guide/configure-instance-directory.html#keystore-configuration"}},[e._v("Creating and configuring the Zowe instance directory")]),e._v(" for more information.")],1)]),e._v(" "),o("h4",{attrs:{id:"insecure-fix"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#insecure-fix"}},[e._v("#")]),e._v(" Insecure fix")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[e._v("Re-create the Zowe keystore by deleting it and re-creating it. For more information, see "),o("RouterLink",{attrs:{to:"/user-guide/configure-certificates.html"}},[e._v("Configuring Zowe certificates")]),e._v(". In the "),o("code",[e._v("zowe-setup-certificates.env")]),e._v(" file that is used to generate the keystore, ensure that the property "),o("code",[e._v("VERIFY_CERTIFICATES")]),e._v(" is set to "),o("code",[e._v("FALSE")]),e._v(".")],1)]),e._v(" "),o("h4",{attrs:{id:"invalid-z-osmf-host-name-in-subject-alternative-names"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#invalid-z-osmf-host-name-in-subject-alternative-names"}},[e._v("#")]),e._v(" Invalid z/OSMF host name in subject alternative names")]),e._v(" "),o("p",[e._v("In the following message, failure to connect to API Catalog is caused by an invalid z/OSMF host name in the subject alternative names:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Certificate for <ABC12.slv.broadcom.net> doesn't match any of the subject alternative names: [abc12.ca.com, abc12, localhost, abc12-slck, abc12-slck.ca.com, abc12-slck1, abc12-slck1.ca.com, abc12-slck2, abc12-slck2.ca.com, usilabc12, usilabc12.ca.com]; \nnested exception is javax.net.ssl.SSLPeerUnverifiedException: Certificate for <ABC12.slv.broadcom.net> doesn't match any of the subject alternative names: [abc12.ca.com, abc12, localhost, abc12-slck, abc12-slck.ca.com, abc12-slck1, abc12-slck1.ca.com, abc12-slck2, abc12-slck2.ca.com, usilabc12, usilabc12.ca.com]\n")])])]),o("p",[o("strong",[e._v("Solutions:")])]),e._v(" "),o("p",[e._v("Fix the invalid z/OSMF host name in the subject alternative names using the following methods:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#request-a-new-certificate"}},[e._v("Request a new certificate")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#re-create-the-zowe-keystore"}},[e._v("Re-create the Zowe keystore")])])]),e._v(" "),o("h4",{attrs:{id:"request-a-new-certificate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#request-a-new-certificate"}},[e._v("#")]),e._v(" Request a new certificate")]),e._v(" "),o("p",[e._v("Request a new certificate that contains a valid z/OSMF host name in the subject alternative names.")]),e._v(" "),o("h4",{attrs:{id:"re-create-the-zowe-keystore"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#re-create-the-zowe-keystore"}},[e._v("#")]),e._v(" Re-create the Zowe keystore")]),e._v(" "),o("p",[e._v("Re-create the Zowe keystore by deleting it and re-creating it. For more information, see "),o("RouterLink",{attrs:{to:"/user-guide/configure-certificates.html"}},[e._v("Configuring Zowe certificates")]),e._v(".  The Zowe keystore directory is the value of the "),o("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(" variable in the "),o("code",[e._v("instance.env")]),e._v(" file in the instance directory that is used to launch Zowe. See "),o("RouterLink",{attrs:{to:"/user-guide/configure-instance-directory.html#keystore-configuration"}},[e._v("Creating and configuring the Zowe instance directory")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"api-ml-throws-i-o-error-on-get-request-and-cannot-connect-to-other-services"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#api-ml-throws-i-o-error-on-get-request-and-cannot-connect-to-other-services"}},[e._v("#")]),e._v(" API ML throws I/O error on GET request and cannot connect to other services")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")])]),e._v(" "),o("p",[e._v("The API ML services are running but they are in DOWN state and not working properly. The following exceptions can be found in the log: "),o("code",[e._v("java.net.UnknownHostException")]),e._v(" and "),o("code",[e._v("java.net.NoRouteToHostException")]),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Sample message:")])]),e._v(" "),o("p",[e._v("See the following message for full exceptions.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('org.springframework.web.client.ResourceAccessException: I/O error on GET request for "https://USILCA32.lvn.broadcom.net:7553/eureka/apps/apicatalog": USILCA32.lvn.broadcom.net; nested exception is java.net.UnknownHostException: USILCA32.lvn.broadcom.net\n\n.at org.springframework.web.client.RestTemplate.doExecute(RestTemplate.java:732) ~Ýspring-web-5.0.8.RELEASE.jar!/:5.0.8.RELEASE¨\n\n.at org.springframework.web.client.RestTemplate.execute(RestTemplate.java:680) ~Ýspring-web-5.0.8.RELEASE.jar!/:5.0.8.RELEASE¨\n\n.at org.springframework.web.client.RestTemplate.exchange(RestTemplate.java:600) ~Ýspring-web-5.0.8.RELEASE.jar!/:5.0.8.RELEASE¨\n\n.at com.ca.mfaas.apicatalog.services.initialisation.InstanceRetrievalService.queryDiscoveryForInstances(InstanceRetrievalService.java:276) Ýclasses!/:na¨\n\n.at com.ca.mfaas.apicatalog.services.initialisation.InstanceRetrievalService.getInstanceInfo(InstanceRetrievalService.java:158) Ýclasses!/:na¨\n\n.at com.ca.mfaas.apicatalog.services.initialisation.InstanceRetrievalService.retrieveAndRegisterAllInstancesWithCatalog(InstanceRetrievalService.java:90) Ýclas\n\n….\n\nmain¨ o.a.http.impl.client.DefaultHttpClient   : I/O exception (java.net.NoRouteToHostException) caught when connecting to {s}->https://localhost:7553: EDC8130I Host cannot be reached. (Host unreachable)\n\nmain¨ o.a.http.impl.client.DefaultHttpClient   : Retrying connect to {s}->https://localhost:7553 \n')])])]),o("p",[o("strong",[e._v("Solution:")])]),e._v(" "),o("p",[e._v("The Zowe started task needs to run under the same user ID as z/OSMF (typically IZUSVR). This is stated in the "),o("RouterLink",{attrs:{to:"/user-guide/configure-zos-system.html#grant-users-permission-to-access-z-osmf"}},[e._v("installation documentation")]),e._v(".")],1),e._v(" "),o("p",[e._v("The hostname that is displayed in the details of the exception is a valid hostname. You can validate that the hostname is valid by using "),o("code",[e._v("ping")]),e._v(" command on the same mainframe system. For example, "),o("code",[e._v("ping USILCA32.lvn.broadcom.net")]),e._v(". If it is valid, then the problem can be caused by insufficient privileges of your started task that is not allowed to do network access.")]),e._v(" "),o("p",[e._v("You can fix it by setting up the security environment as described in the "),o("RouterLink",{attrs:{to:"/user-guide/configure-zos-system.html#configure-security-environment-switching"}},[e._v("Zowe documentation")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"certificate-error-when-using-both-an-external-certificate-and-single-sign-on-to-deploy-zowe"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#certificate-error-when-using-both-an-external-certificate-and-single-sign-on-to-deploy-zowe"}},[e._v("#")]),e._v(" Certificate error when using both an external certificate and Single Sign-On to deploy Zowe")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")])]),e._v(" "),o("p",[e._v("You used an external certificate and Single Sign-On to deploy Zowe. When you log in to the Zowe Desktop, you encounter an error similar to the following:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("2020-07-28 02:13:43.203 <ZWED:262486> IZUSVR WARN (org.zowe.zlux.auth.safsso,apimlHandler.js:263) APIML query error: self signed certificate in certificate chain\n2020-07-28 02:13:43.288 <ZWED:262486> IZUSVR WARN (org.zowe.zlux.auth.safsso,apimlHandler.js:337) APIML login has failed:\n2020-07-28 02:13:43.288 <ZWED:262486> IZUSVR WARN (org.zowe.zlux.auth.safsso,apimlHandler.js:338)  Error: self signed certificate in certificate chain\n   at TLSSocket.onConnectSecure (_tls_wrap.js:1321:34)\n   at TLSSocket.emit (events.js:210:5)\n   at TLSSocket._finishInit (_tls_wrap.js:794:8)\n   at TLSWrap.ssl.onhandshakedone (_tls_wrap.js:608:12) {\n code: 'SELF_SIGNED_CERT_IN_CHAIN'\n}\n")])])]),o("p",[o("strong",[e._v("Solution:")])]),e._v(" "),o("p",[e._v("This issue might occur when you use a Zowe version of 1.12.0 or later. To resolve the issue, you can download your external root certificate and intermediate certificates in PEM format. Then, add the following parameter in the Zowe "),o("code",[e._v("instance.env")]),e._v(" file.")]),e._v(" "),o("p",[o("code",[e._v('ZWED_node_https_certificateAuthorities="/path/to/zowe/keystore/local_ca/localca.cer-ebcdic","/path/to/carootcert.pem","/path/to/caintermediatecert.pem"')])]),e._v(" "),o("p",[e._v("Recycle your Zowe server. You should be able to log in to the Zowe Desktop successfully now.")]),e._v(" "),o("h3",{attrs:{id:"browser-unable-to-connect-due-to-a-cipher-error"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#browser-unable-to-connect-due-to-a-cipher-error"}},[e._v("#")]),e._v(" Browser unable to connect due to a CIPHER error")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")])]),e._v(" "),o("p",[e._v("When connecting to the API Mediation Layer, the web browser throws an error saying that the site is unable to provide a secure connection because of an error with ciphers.")]),e._v(" "),o("p",[e._v("The error shown varies depending on the browser. For example,")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("For Google Chrome:")]),e._v(" "),o("img",{attrs:{src:a(426),alt:"CIPHER_MISMATCH",title:"CIPHER_MISMATCH Error"}})]),e._v(" "),o("li",[o("p",[e._v("For Mozilla Firefox:")]),e._v(" "),o("img",{attrs:{src:a(427),alt:"CIPHER_OVERLAP",title:"CIPHER_OVERLAP Error"}})])]),e._v(" "),o("p",[o("strong",[e._v("Solution:")])]),e._v(" "),o("p",[e._v("Remove "),o("code",[e._v("GCM")]),e._v(" as a disabled "),o("code",[e._v("TLS")]),e._v(" algorithm from the Java runtime being used by Zowe.")]),e._v(" "),o("p",[e._v("To do this, first locate the "),o("code",[e._v("$JAVA_HOME/lib/security/java.security")]),e._v(" file. You can find the value of "),o("code",[e._v("$JAVA_HOME")]),e._v(" in one of the following ways.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Method 1: By looking at the "),o("code",[e._v("JAVA_HOME=")]),e._v(" value in the "),o("code",[e._v("instance.env")]),e._v(" file used to start Zowe.")]),e._v(" "),o("p",[e._v("For example, if the "),o("code",[e._v("instance.env")]),e._v(" file contains the following line,")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("JAVA_HOME=`/usr/lpp/java/J8.0_64/\n")])])]),o("p",[e._v("then, the "),o("code",[e._v("$JAVA_HOME/lib/security/java.security")]),e._v(" file will be "),o("code",[e._v("/usr/lpp/java/J8.0_64/lib/security/java.security")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Method 2: By inspecting the "),o("code",[e._v("STDOUT")]),e._v(" JES spool file for the "),o("code",[e._v("ZWESVSTC")]),e._v(" started task that launches the API Mediation Layer.")])])]),e._v(" "),o("p",[e._v("In the "),o("code",[e._v("java.security")]),e._v(" file, there is a parameter value for "),o("code",[e._v("jdk.tls.disabledAlgorithms")]),e._v(", for example,")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("jdk.tls.disabledAlgorithms=SSLv3, RC4, MD5withRSA, DH keySize < 1024, 3DES_EDE_CBC, DESede, EC keySize < 224, GCM\n")])])]),o("p",[o("strong",[e._v("Note:")]),e._v(" This line may have a continuation character "),o("code",[e._v("\\")]),e._v(" and be split across two lines due to its length.")]),e._v(" "),o("p",[e._v("Edit the parameter value for "),o("code",[e._v("jdk.tls.disabledAlgorithms")]),e._v(" to remove "),o("code",[e._v("GCM")]),e._v(". If as shown above the line ends "),o("code",[e._v("<224, GCM")]),e._v(", remove the preceding comma so the values remain a well-formed list of comma-separated algorithms:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("jdk.tls.disabledAlgorithms=SSLv3, RC4, MD5withRSA, DH keySize < 1024, 3DES_EDE_CBC, DESede, EC keySize < 224\n")])])]),o("p",[o("strong",[e._v("Note:")]),e._v(" The file permissions of "),o("code",[e._v("java.security")]),e._v(" might be restricted for privileged users at most z/OS sites.")]),e._v(" "),o("p",[e._v("After you remove "),o("code",[e._v("GCM")]),e._v(", restart the "),o("code",[e._v("ZWESVSTC")]),e._v(" started task for the change to take effect.")])])}),[],!1,null,null,null);t.default=n.exports}}]);