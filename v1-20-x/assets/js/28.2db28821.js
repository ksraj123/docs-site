(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{446:function(e,t,i){e.exports=i.p+"assets/img/zowe-ssl.65da4767.png"},447:function(e,t,i){e.exports=i.p+"assets/img/zowe-directories-keys.859d60d8.png"},553:function(e,t,i){"use strict";i.r(t);var r=i(18),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"configuring-zowe-certificates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuring-zowe-certificates"}},[e._v("#")]),e._v(" Configuring Zowe certificates")]),e._v(" "),r("p",[e._v("Zowe uses a certificate to encrypt data for communication across secure sockets. An instance of Zowe references a USS directory referred to as a KEYSTORE_DIRECTORY which contains information about where the certificate is located.")]),e._v(" "),r("p",[e._v("Learn more about the key concepts of Zowe certificates in the following sections.")]),e._v(" "),r("h2",{attrs:{id:"northbound-certificate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#northbound-certificate"}},[e._v("#")]),e._v(" Northbound Certificate")]),e._v(" "),r("p",[e._v("The Zowe certificate is used by the API Mediation Layer on its northbound edge when identifying itself and encrypting "),r("code",[e._v("https://")]),e._v(" traffic to web browsers or REST client applications.  If the Zowe Command Line Interface (CLI) has been configured to use the Zowe API Mediation Layer then the CLI is a client of the Zowe certificate. For more information, see "),r("RouterLink",{attrs:{to:"/user-guide/cli-usingcli.html#integrating-with-api-mediation-layer"}},[e._v("Using the Zowe Command Line Interface, Integrating with the API Mediation Layer")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"southbound-certificate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#southbound-certificate"}},[e._v("#")]),e._v(" Southbound Certificate")]),e._v(" "),r("p",[e._v("As well as being a server, Zowe itself is a client to services on the southbound edge of its API Mediation Layer that it communicates to over secure sockets.  These southbound services use certificates to encrypt their data, and Zowe uses a trust store to store its relationship to these certificates.  The southbound services that are started by Zowe itself and run as address spaces under its "),r("code",[e._v("ZWESVSTC")]),e._v(" started task (such as the API discovery service, the explorer JES REST API server) re-use the same Zowe certificate used by the API Mediation Layer on its northbound client edge.")]),e._v(" "),r("h2",{attrs:{id:"trust-store"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trust-store"}},[e._v("#")]),e._v(" Trust store")]),e._v(" "),r("p",[e._v("As well as Zowe using its certificates intra-address space, to encrypt messages between its servers, Zowe uses external services on z/OS (such as z/OSMF or Zowe conformant extensions that have registered themselves with the API Mediation Layer).  These services will present their own certificate to the API Mediation Layer, in which case the trust store is used to capture the relationship between Zowe's southbound edge and these external certificates.")]),e._v(" "),r("p",[e._v("If you wish to disable the trust store validation of southbound certificates, you can set the value "),r("code",[e._v("VERIFY_CERTIFICATES=true")]),e._v(" to "),r("code",[e._v("false")]),e._v(" in the "),r("code",[e._v("zowe-setup-certificates.env")]),e._v(" file in the "),r("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(".  A scenario when this is recommended is if certificate being presented to the API Mediation Layer is self-signed (that is, from an unknown certificate authority).  For example, the z/OSMF certificate may be self-signed in which case the Zowe API Mediation Layer will not recognize the signing authority.")]),e._v(" "),r("h2",{attrs:{id:"certificates-in-the-zowe-architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#certificates-in-the-zowe-architecture"}},[e._v("#")]),e._v(" Certificates in the Zowe architecture")]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/getting-started/zowe-architecture.html"}},[e._v("Zowe architecture diagram")]),e._v(" shows the Zowe API Mediation Layer positioned on the client-server boundary between applications such as web browsers or the Zowe CLI accessing z/OS services.  The following diagram is a section of the architecture annotated to describe the role of certificates and trust stores.")],1),e._v(" "),r("img",{attrs:{src:i(446),alt:"Zowe SSL",width:"700px"}}),e._v(" "),r("p",[e._v("The lines shown in bold red are communication over a TCP/IP connection that is encrypted with the Zowe certificate.")]),e._v(" "),r("ul",[r("li",[e._v("On the northbound edge of the API gateway, the certificate is used between client applications such as web browsers, Zowe CLI, or any other application wishing to access Zowe's REST APIs.")]),e._v(" "),r("li",[e._v("On the southbound edge of the API Gateway, there are a number of Zowe micro services providing HTML GUIs for the Zowe desktop or REST APIs for the API Catalog.  These also use the Zowe certificate for data encryption.")])]),e._v(" "),r("p",[e._v("The lines in bold green are external certificates for servers that are not managed by Zowe, such as z/OSMF itself or any Zowe conformant REST API or App Framework servers that are registered with the API Mediation Layer.  For the API Mediation Layer to be able to accept these certificates, they either need to be signed by a recognized certificate authority, or else the API Mediation Layer needs to be configured to accept unverified certificates.  Even if the API Mediation Layer is configured to accept certificates signed by unverified CAs on its southbound edge, client applications on the northbound edge of the API gateway will be presented with the Zowe certificate.")]),e._v(" "),r("h2",{attrs:{id:"keystore-versus-key-ring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keystore-versus-key-ring"}},[e._v("#")]),e._v(" Keystore versus key ring")]),e._v(" "),r("p",[e._v("Zowe supports certificates that are stored in a USS directory "),r("strong",[e._v("Java KeyStore")]),e._v(" format.")]),e._v(" "),r("p",[e._v("Beginning with release 1.15, Zowe is including the ability to work with certificates held in a "),r("strong",[e._v("z/OS Keyring")]),e._v(".  Support for Keyring certificates is currently incomplete and being provided as a beta technical preview for early preview by customers.  If you have any feedback using keyrings please create an issue in the "),r("a",{attrs:{href:"https://github.com/zowe/zowe-install-packaging/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("zowe-install-packaging repo"),r("OutboundLink")],1),e._v(".  It is expected that in a future release keyring support will be made available as a fully supported feature.")]),e._v(" "),r("h2",{attrs:{id:"keystore-directory-creation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keystore-directory-creation"}},[e._v("#")]),e._v(" Keystore directory creation")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(" is created by running the script "),r("code",[e._v("<RUNTIME_DIR>/bin/zowe-setup-certificates.sh")]),e._v(".  This script has a number of input parameters that are specified in a configuration file whose location is passed as an argument to the "),r("code",[e._v("-p")]),e._v(" parameter.")]),e._v(" "),r("p",[e._v("The configuration file "),r("code",[e._v("<RUNTIME_DIR>/bin/zowe-setup-certificates.env")]),e._v(" is provided for setting up a Keystore directory that contains the Zowe certificate in JavaKeystore format.  The configuration file "),r("code",[e._v("<RUNTIME_DIR>/bin/zowe-setup-certificates-keyring.env")]),e._v(" is provided for setting up a Keystore directory that references the Zowe certificate held in a z/OS keyring.")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v(".env")]),e._v(" configuration file should be customized based on security rules and practices for the z/OS environment.  Once the script has been successfully executed and the "),r("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(" is created successfully, it is referenced by a Zowe launch "),r("code",[e._v("instance.env")]),e._v(" file. A "),r("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(" can be used by more than one instance of Zowe. See "),r("RouterLink",{attrs:{to:"/user-guide/configure-instance-directory.html#keystore-configuration"}},[e._v("Creating and configuring the Zowe instance directory")]),e._v(" for more information.")],1),e._v(" "),r("p",[e._v("The Zowe launch diagram shows the relationship between a Zowe instance directory, a Zowe runtime directory, the Zowe keystore directory, and (if used to store the Zowe certificate) the z/OS keyring.")]),e._v(" "),r("img",{attrs:{src:i(447),alt:"Zowe Directories",width:"700"}}),e._v(" "),r("p",[e._v("You create a "),r("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(" in USS by using the script "),r("code",[e._v("zowe-setup-certificates.sh")]),e._v(" (1) with a "),r("code",[e._v("-p")]),e._v(" argument that specifies a "),r("code",[e._v(".env")]),e._v(" configuration file.")]),e._v(" "),r("ul",[r("li",[e._v("If the "),r("code",[e._v("-p")]),e._v(" argument file "),r("code",[e._v("zowe-setup-certificates.env")]),e._v(" (2) is used, the "),r("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(" will contain the certificate, the certificate authority, the trust store, and the JWT Secret.")]),e._v(" "),r("li",[e._v("If the "),r("code",[e._v("-p")]),e._v(" argument file "),r("code",[e._v("zowe-setup-keyring-certificates.env")]),e._v(" (3) is used, the "),r("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(" contains no certificates and is a pass-through to configure a Zowe instance to use a z/OS keyring.")])]),e._v(" "),r("p",[e._v("The JCL member "),r("code",[e._v("ZWEKRING")]),e._v(" (4) is used to create a z/OS Keyring to hold the Zowe certificate and its signing certificate authority.")]),e._v(" "),r("p",[e._v("At launch time, a Zowe instance is started using the script "),r("code",[e._v("<INSTANCE_DIR>/bin/zowe-start.sh")]),e._v(" which takes configuration arguments from "),r("code",[e._v("<INSTANCE_DIR>/instance.env")]),e._v(".  The argument (5)  "),r("code",[e._v("KEYSTORE_DIRECTORY=<KEYSTORE_DIRECTORY>")]),e._v(" specifies the path to the keystore directory that Zowe will use.")]),e._v(" "),r("p",[e._v("For more information on the Zowe launch topology, see "),r("RouterLink",{attrs:{to:"/user-guide/installandconfig.html#topology-of-the-zowe-z-os-launch-process"}},[e._v("Topology of the Zowe z/OS launch process")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);