(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{544:function(e,t,o){"use strict";o.r(t);var s=o(18),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"creating-and-configuring-the-zowe-instance-directory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-configuring-the-zowe-instance-directory"}},[e._v("#")]),e._v(" Creating and configuring the Zowe instance directory")]),e._v(" "),o("p",[e._v("The Zowe instance directory or "),o("code",[e._v("<INSTANCE_DIRECTORY>")]),e._v(" contains configuration data required to launch a Zowe runtime.  This includes port numbers, location of dependent runtimes such as Java, Node, z/OSMF, as well as log files. When Zowe is started, configuration data will be read from files in the instance directory and logs will be written to files in the instance directory.")]),e._v(" "),o("p",[o("strong",[e._v("Note: The creation of an instance directory will set default values for users who want to run all Zowe z/OS components. If you are using Docker, you must make a small configuration change to disable the components on z/OS that will instead run in Docker.")])]),e._v(" "),o("p",[e._v("The instance directory "),o("code",[e._v("<INSTANCE_DIRECTORY>/bin")]),e._v(" contains a number of key scripts")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("zowe-start.sh")]),e._v(" is used to start the Zowe runtime by launching the "),o("code",[e._v("ZWESVSTC")]),e._v(" started task.")]),e._v(" "),o("li",[o("code",[e._v("zowe-stop.sh")]),e._v(" is used to stop the Zowe runtime by terminating the "),o("code",[e._v("ZWESVSTC")]),e._v(" started task.")]),e._v(" "),o("li",[o("code",[e._v("zowe-support.sh")]),e._v(" can be used to capture diagnostics around the Zowe runtime for troubleshooting and off-line problem determination, see "),o("RouterLink",{attrs:{to:"/troubleshoot/troubleshoot-diagnostics.html"}},[e._v("Capturing diagnostics to assist problem determination")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),o("p",[e._v("Before creating an instance directory, ensure that you have created a keystore directory that contains the Zowe certificate. For more information about how to create a keystore directory, see "),o("RouterLink",{attrs:{to:"/user-guide/configure-certificates.html"}},[e._v("Creating Zowe certificates")]),e._v(".  Also, ensure that you have already configured the z/OS environment. For information about how to configure the z/OS environment, see "),o("RouterLink",{attrs:{to:"/user-guide/configure-zos-system.html"}},[e._v("Configuring the z/OS system for Zowe")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"creating-an-instance-directory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-instance-directory"}},[e._v("#")]),e._v(" Creating an instance directory")]),e._v(" "),o("p",[e._v("To create an instance directory, use the "),o("code",[e._v("zowe-configure-instance.sh")]),e._v(" script.")]),e._v(" "),o("p",[e._v("Navigate to the Zowe runtime directory "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(" and execute the following commands:")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("RUNTIME_DIR"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/bin/zowe-configure-instance.sh -c "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PATH_TO_INSTANCE_DIR"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),o("p",[e._v("Multiple instance directories can be created and used to launch independent Zowe runtimes from the same Zowe runtime directory.")]),e._v(" "),o("p",[e._v("The Zowe instance directory contains a file "),o("code",[e._v("instance.env")]),e._v(" that stores configuration data. The data is read each time Zowe is started.")]),e._v(" "),o("p",[e._v("The purpose of the instance directory is to hold information in the z/OS File System (zFS) that is created (such as log files) or modified (such as preferences) or configured (such as port numbers) away from the zFS runtime directory for Zowe.  This allows the runtime directory to be read-only and to be replaced when a new Zowe release is installed, with customizations being preserved in the instance directory.")]),e._v(" "),o("p",[e._v("If you have an instance directory that is created from a previous release of Zowe 1.8 or later and are installing a newer release of Zowe, then you should run "),o("code",[e._v("zowe-configure-instance.sh -c <PATH_TO_INSTANCE_DIR>")]),e._v(" pointing to the existing instance directory to have it updated with any new values.  The release documentation for each new release will specify when this is required, and the file "),o("code",[e._v("manifest.json")]),e._v(" within each instance directory contains information for which Zowe release it was created from.")]),e._v(" "),o("p",[e._v("In order to allow the "),o("code",[e._v("ZWESVSTC")]),e._v(" started task to have permission to acces the contents of the "),o("code",[e._v("<INSTANCE_DIR>")]),e._v(" the "),o("code",[e._v("zowe-configure-instance.sh")]),e._v(" script sets the group ownership of the top level directory and its child to be "),o("code",[e._v("ZWEADMIN")]),e._v(".  If a different group is used for the "),o("code",[e._v("ZWESVSTC")]),e._v(" started task you can specify this with the optional "),o("code",[e._v("-g")]),e._v(" argument, for example.")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("RUNTIME_DIR"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/bin/zowe-configure-instance.sh -c "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PATH_TO_INSTANCE_DIR"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -g "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("GROUP"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),o("h2",{attrs:{id:"reviewing-the-instance-env-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reviewing-the-instance-env-file"}},[e._v("#")]),e._v(" Reviewing the instance.env file")]),e._v(" "),o("p",[e._v("To operate Zowe, a number of zFS folders need to be located for prerequisites on the platform. Default values are selected when you run "),o("code",[e._v("zowe-configure-instance.sh")]),e._v(". You might want to modify the values.")]),e._v(" "),o("h3",{attrs:{id:"component-groups"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-groups"}},[e._v("#")]),e._v(" Component groups")]),e._v(" "),o("p",[o("code",[e._v("LAUNCH_COMPONENT_GROUPS")]),e._v(": This is a comma-separated list of which z/OS microservice groups are started when Zowe launches.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("GATEWAY")]),e._v(" will start the API mediation layer that includes the API catalog, the API gateway, and the API discovery service.  These three address spaces are Apache Tomcat servers and use the version of Java on z/OS as determined by the "),o("code",[e._v("JAVA_HOME")]),e._v(" value.  In addition to the mediation layer, the z/OS Explorer services are included here as well.")]),e._v(" "),o("li",[o("code",[e._v("DESKTOP")]),e._v(" will start the Zowe desktop that is the browser GUI for hosting Zowe applications such as the 3270 Terminal emulator or the File Explorer.  It will also start ZSS. The Zowe desktop is a node application and uses the version specified by the "),o("code",[e._v("NODE_HOME")]),e._v(" value.")]),e._v(" "),o("li",[o("code",[e._v("ZSS")]),e._v(" will start the ZSS server without including the Desktop and Application Framework server. This can be used with Docker so that you do not run servers on z/OS that will already be running within Docker. This may also be useful if you want to utilize ZSS core features or plug-ins without needing the Desktop. ZSS is a pre-requisite for the Zowe desktop, so when the "),o("code",[e._v("DESKTOP")]),e._v(" group is specified then the zss server will be implicitly started. For more information on the zssServer and the technology stack of the Zowe servers see "),o("RouterLink",{attrs:{to:"/getting-started/zowe-architecture.html"}},[e._v("Zowe architecture")]),e._v(".")],1),e._v(" "),o("li",[e._v("Vendor products may extend Zowe with their own component group that they want to be lifecycled by the Zowe "),o("code",[e._v("ZWESVSTC")]),e._v(" started task and run as a Zowe sub address space.  To do this, specify the fully qualified directory provided by the vendor that contains their Zowe extension scripts.  This directory will contain a "),o("code",[e._v("start.sh")]),e._v(" script "),o("strong",[e._v("(required)")]),e._v(" that is called when the "),o("code",[e._v("ZWESVSTC")]),e._v(" started task is launched, a "),o("code",[e._v("configure.sh")]),e._v(" script "),o("strong",[e._v("(optional)")]),e._v(" that performs any configuration steps such as adding iFrame plug-ins to the Zowe desktop, and a "),o("code",[e._v("validate.sh")]),e._v(" script "),o("strong",[e._v("(optional)")]),e._v(" that can be used to perform any pre-launch validation such as checking system prerequisites. For more information about how a vendor can extend Zowe with a sub address space, see the "),o("RouterLink",{attrs:{to:"/extend/extend-apiml/onboard-overview.html"}},[e._v("Extending")]),e._v(" section.")],1)]),e._v(" "),o("p",[o("strong",[e._v("Note: If you are using Docker, it is recommended to remove GATEWAY and DESKTOP from LAUNCH_COMPONENT_GROUPS by setting "),o("code",[e._v("LAUNCH_COMPONENT_GROUPS=ZSS")]),e._v(". This will prevent duplication of servers running both in Docker and on z/OS.")]),e._v(" "),o("Badge",{attrs:{text:"Technical Preview"}})],1),e._v(" "),o("h3",{attrs:{id:"component-prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-prerequisites"}},[e._v("#")]),e._v(" Component prerequisites")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("JAVA_HOME")]),e._v(":  The path where 64-bit Java 8 or later is installed.  Only needs to be specified if not already set as a shell variable.  Defaults to "),o("code",[e._v("/usr/lpp/java/J8.0_64")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("NODE_HOME")]),e._v(":  The path to the Node.js runtime.  Only needs to be specified if not already set as a shell variable.")]),e._v(" "),o("li",[o("code",[e._v("SKIP_NODE")]),e._v(" : When Zowe starts, it checks whether the "),o("code",[e._v("NODE_HOME")]),e._v(" path is a valid node runtime. If not, it will prompt for the location of where node can be located.  Specify a value of "),o("code",[e._v("1")]),e._v(" to bypass this step, or "),o("code",[e._v("0")]),e._v(" for the check to occur. This may be useful in an automation scenario where the "),o("code",[e._v("zowe-start.sh")]),e._v(" script is run unattended and the makeup of the components being launched does not require a node runtime.")]),e._v(" "),o("li",[o("code",[e._v("ROOT_DIR")]),e._v(": The directory where the Zowe runtime is located, also referred to as the "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(".  Defaults to the location of where "),o("code",[e._v("zowe-configure-instance")]),e._v(" was executed.")]),e._v(" "),o("li",[o("code",[e._v("ZOSMF_PORT")]),e._v(": The port used by z/OSMF REST services.  Defaults to value determined through running "),o("code",[e._v("netstat")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("ZOSMF_HOST")]),e._v(": The host name of the z/OSMF REST API services.")]),e._v(" "),o("li",[o("code",[e._v("ZOWE_EXPLORER_HOST")]),e._v(": The hostname of where the Explorer servers are launched from.  Defaults to running "),o("code",[e._v("hostname -c")]),e._v(".  Ensure that this host name is externally accessible from clients who want to use Zowe as well as internally accessible from z/OS itself.")]),e._v(" "),o("li",[o("code",[e._v("ZOWE_IP_ADDRESS")]),e._v(":  The IP address of your z/OS system which must be externally accessible to clients who want to use Zowe.  This is important to verify for IBM Z Development & Test Environment and cloud systems, where the default that is determined through running "),o("code",[e._v("ping")]),e._v(" and "),o("code",[e._v("dig")]),e._v(" on z/OS returns a different IP address from the external address.")]),e._v(" "),o("li",[o("code",[e._v("APIML_ENABLE_SSO")]),e._v(": Define whether single sign-on should be enabled. Use a value of "),o("code",[e._v("true")]),e._v(" or "),o("code",[e._v("false")]),e._v(". Defaults to "),o("code",[e._v("false")]),e._v(".")])]),e._v(" "),o("h3",{attrs:{id:"keystore-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#keystore-configuration"}},[e._v("#")]),e._v(" Keystore configuration")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(": This is a path to a zFS directory containing the certificate that Zowe uses to identify itself and encrypt https:// traffic to its clients accessing REST APIs or web pages.  This also contains a truststore used to hold the public keys of any z/OS services that Zowe is communicating to, such as z/OSMF.  The keystore directory must be created the first time Zowe is installed onto a z/OS system and it can be shared between different Zowe runtimes.   For more information about how to create a keystore directory, see "),o("RouterLink",{attrs:{to:"/user-guide/configure-certificates.html"}},[e._v("Configuring Zowe certificates")]),e._v(".")],1)]),e._v(" "),o("h3",{attrs:{id:"address-space-names"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#address-space-names"}},[e._v("#")]),e._v(" Address space names")]),e._v(" "),o("p",[e._v("Individual address spaces for different Zowe instances and their subcomponents can be distinguished from each other in RMF records or SDSF views by specifying how they are named.  Address space names are 8 characters long and made up of a prefix "),o("code",[e._v("ZOWE_PREFIX")]),e._v(", instance "),o("code",[e._v("ZOWE_INSTANCE")]),e._v(" followed by an identifier for each subcomponent.")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("ZOWE_PREFIX")]),e._v(": This defines a prefix for Zowe address space STC names.  Defaults to "),o("code",[e._v("ZWE")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("ZOWE_INSTANCE")]),e._v(": This is appended to the "),o("code",[e._v("ZOWE_PREFIX")]),e._v(" to build up the address space name.  Defaults to "),o("code",[e._v("1")])])]),e._v(" "),o("li",[o("p",[e._v("A subcomponent will be one of the following values:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("AC")]),e._v(" - API ML Catalog")]),e._v(" "),o("li",[o("strong",[e._v("AD")]),e._v(" - API ML Discovery Service")]),e._v(" "),o("li",[o("strong",[e._v("AG")]),e._v(" - API ML Gateway")]),e._v(" "),o("li",[o("strong",[e._v("DS")]),e._v(" - App Server")]),e._v(" "),o("li",[o("strong",[e._v("EF")]),e._v(" - Explorer API Data Sets")]),e._v(" "),o("li",[o("strong",[e._v("EJ")]),e._v(" - Explorer API Jobs")]),e._v(" "),o("li",[o("strong",[e._v("SZ")]),e._v(" - ZSS Server")]),e._v(" "),o("li",[o("strong",[e._v("UD")]),e._v(" - Explorer UI Data Sets")]),e._v(" "),o("li",[o("strong",[e._v("UJ")]),e._v(" - Explorer UI Jobs")]),e._v(" "),o("li",[o("strong",[e._v("UU")]),e._v(" - Explorer UI USS")])])])]),e._v(" "),o("p",[e._v("The STC name of the main started task is "),o("code",[e._v("ZOWE_PREFIX")]),e._v("+"),o("code",[e._v("ZOWE_INSTANCE")]),e._v("+"),o("code",[e._v("SV")]),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Example:")])]),e._v(" "),o("div",{staticClass:"language-yaml extra-class"},[o("pre",{pre:!0,attrs:{class:"language-yaml"}},[o("code",[e._v("ZOWE_PREFIX=ZWE\nZOWE_INSTANCE=X\n")])])]),o("p",[e._v("the first instance of Zowe API ML Gateway identifier will be as follows:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ZWEXAG\n")])])]),o("p",[o("strong",[e._v("Note:")]),e._v(" If the address space names are not assigned correctly for each subcomponents, check that the step "),o("RouterLink",{attrs:{to:"/user-guide/configure-zos-system.html#configure-address-space-job-naming"}},[e._v("Configure address space job naming")]),e._v(" has been performed correctly for the z/OS user ID "),o("code",[e._v("ZWESVUSR")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"ports"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ports"}},[e._v("#")]),e._v(" Ports")]),e._v(" "),o("p",[e._v("When Zowe starts, a number of its microservices need to be given port numbers that these microservices use to provide access to their services.  You can leave default values for components that are not in use. The two most important port numbers are the "),o("code",[e._v("GATEWAY_PORT")]),e._v(" which is for access to the API Gateway through which REST APIs can be viewed and accessed, and "),o("code",[e._v("ZOWE_ZLUX_SERVER_HTTPS_PORT")]),e._v(" which is used to deliver content to client web browsers logging in to the Zowe desktop.  All of the other ports are not typically used by clients and used for intra-service communication by Zowe.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("CATALOG_PORT")]),e._v(": The port the API Catalog service will use. Used when "),o("code",[e._v("LAUNCH_COMPONENT_GROUPS")]),e._v(" includes "),o("code",[e._v("GATEWAY")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("DISCOVERY_PORT")]),e._v(": The port the discovery service will use. Used when "),o("code",[e._v("LAUNCH_COMPONENT_GROUPS")]),e._v(" includes "),o("code",[e._v("GATEWAY")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("GATEWAY_PORT")]),e._v(": The port the API gateway service will use. Used when "),o("code",[e._v("LAUNCH_COMPONENT_GROUPS")]),e._v(" includes "),o("code",[e._v("GATEWAY")]),e._v(". This port is used by REST API clients to access z/OS services through the API mediation layer, so should be accessible to these clients.  This is also the port used to log on to the API catalog web page through a browser.")]),e._v(" "),o("li",[o("code",[e._v("JOBS_API_PORT")]),e._v(": The port the jobs API service will use. Used when "),o("code",[e._v("LAUNCH_COMPONENT_GROUPS")]),e._v(" includes "),o("code",[e._v("GATEWAY")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("FILES_API_PORT")]),e._v(": The port the files API service will use. Used when "),o("code",[e._v("LAUNCH_COMPONENT_GROUPS")]),e._v(" includes "),o("code",[e._v("GATEWAY")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("JES_EXPLORER_UI_PORT")]),e._v(": The port the jes-explorer UI service will use. Used when "),o("code",[e._v("LAUNCH_COMPONENT_GROUPS")]),e._v(" includes "),o("code",[e._v("GATEWAY")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("MVS_EXPLORER_UI_PORT")]),e._v(": The port the mvs-explorer UI service will use. Used when "),o("code",[e._v("LAUNCH_COMPONENT_GROUPS`` includes GATEWAY")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("USS_EXPLORER_UI_PORT")]),e._v(": The port the uss-explorer UI service will use. Used when "),o("code",[e._v("LAUNCH_COMPONENT_GROUPS")]),e._v(" includes "),o("code",[e._v("GATEWAY")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("ZOWE_ZLUX_SERVER_HTTPS_PORT")]),e._v(": The port used by the Zowe desktop.  Used when "),o("code",[e._v("LAUNCH_COMPONENT_GROUPS")]),e._v(" includes "),o("code",[e._v("DESKTOP")]),e._v(". It should be accessible to client machines with browsers wanting to log on to the Zowe desktop.")]),e._v(" "),o("li",[o("code",[e._v("ZOWE_ZSS_SERVER_PORT")]),e._v(": This port is used by the ZSS server. Used when "),o("code",[e._v("LAUNCH_COMPONENT_GROUPS")]),e._v(" includes "),o("code",[e._v("DESKTOP")]),e._v(" or "),o("code",[e._v("ZSS")]),e._v(".")])]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" If all of the default port values are acceptable, the ports do not need to be changed. To allocate ports for the Zowe runtime servers, ensure that the ports are not in use.")]),e._v(" "),o("p",[e._v("To determine which ports are not available, follow these steps:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Display the list of ports that are in use with the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("TSO NETSTAT\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Display the list of reserved ports with the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("TSO NETSTAT PORTLIST\n")])])])])]),e._v(" "),o("h4",{attrs:{id:"terminal-ports"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#terminal-ports"}},[e._v("#")]),e._v(" Terminal ports")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" Unlike the ports needed by the Zowe runtime for its Zowe Application Framework and z/OS Services which must be unused, the terminal ports are expected to be in use.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("ZOWE_ZLUX_SSH_PORT")]),e._v(": The Zowe desktop contains an application "),o("em",[e._v("VT Terminal")]),e._v(" which opens a terminal to z/OS inside the Zowe desktop web page.  This port is the number used by the z/OS SSH service and defaults to 22.  The USS command "),o("code",[e._v("netstat -b | grep SSHD1")]),e._v(" can be used to display the SSH port used on a z/OS system.")]),e._v(" "),o("li",[o("code",[e._v("ZOWE_ZLUX_TELNET_PORT")]),e._v(": The Zowe desktop contains an application "),o("em",[e._v("3270 Terminal")]),e._v(" which opens a 3270 emulator inside the Zowe desktop web page.  This port is the number used by the z/OS telnet service and defaults to 23. The USS command "),o("code",[e._v("netstat -b | grep TN3270")]),e._v(" can be used to display the telnet port used on a z/OS system.")]),e._v(" "),o("li",[o("code",[e._v("ZOWE_ZLUX_SECURITY_TYPE")]),e._v(": The "),o("em",[e._v("3270 Terminal")]),e._v(" application needs to know whether the telnet service is using "),o("code",[e._v("tls")]),e._v(" or "),o("code",[e._v("telnet")]),e._v(" for security.  The default value is blank for "),o("code",[e._v("telnet")]),e._v(".")])]),e._v(" "),o("h3",{attrs:{id:"gateway-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gateway-configuration"}},[e._v("#")]),e._v(" Gateway configuration")]),e._v(" "),o("p",[e._v("The following parameters can be set to customize the configuration of the Gateway:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("APIML_ALLOW_ENCODED_SLASHES")]),e._v(": When this parameter is set to "),o("code",[e._v("true")]),e._v(", the Gateway allows encoded characters to be part of URL requests redirected through the Gateway.")]),e._v(" "),o("li",[o("code",[e._v("APIML_CORS_ENABLED")]),e._v(": When this parameter is set to "),o("code",[e._v("true")]),e._v(", CORS are enabled in the API Gateway for Gateway routes "),o("code",[e._v("api/v1/gateway/**")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("APIML_PREFER_IP_ADDRESS")]),e._v(": Set this parameter to "),o("code",[e._v("true")]),e._v("  to advertise a service IP address instead of its hostname.")]),e._v(" "),o("li",[o("code",[e._v("APIML_GATEWAY_TIMEOUT_MILLIS")]),e._v(": Spcifies the timeout for connection to the services in milliseconds.")]),e._v(" "),o("li",[o("code",[e._v("APIML_SECURITY_X509_ENABLED")]),e._v(": Set this parameter to "),o("code",[e._v("true")]),e._v(", to enable the client certificate authentication functionality through ZSS.")]),e._v(" "),o("li",[o("code",[e._v("APIML_SECURITY_ZOSMF_APPLID")]),e._v(": The z/OSMF APPLID used for PassTicket.")]),e._v(" "),o("li",[o("code",[e._v("APIML_SECURITY_AUTH_PROVIDER")]),e._v(": The authentication provider used by the API Gateway. By default, the API Gateway uses z/OSMF as an authentication provider. It is possible to switch to SAF as the authentication provider instead of z/OSMF.")]),e._v(" "),o("li",[o("code",[e._v("APIML_DEBUG_MODE_ENABLED")]),e._v(" : When this parameter is set to "),o("code",[e._v("true")]),e._v(", detailed logging of activity by the API mediation layer occurs. This can be useful to diagnose unexpected behavior of the API gateway, API discovery, or API catalog services.  Default value is "),o("code",[e._v("false")]),e._v(".")])]),e._v(" "),o("p",[e._v("Refer to detailed section about "),o("RouterLink",{attrs:{to:"/user-guide/api-mediation/api-gateway-configuration.html"}},[e._v("API Gateway configuration")])],1),e._v(" "),o("h3",{attrs:{id:"cross-memory-server"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cross-memory-server"}},[e._v("#")]),e._v(" Cross memory server")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("ZOWE_ZSS_XMEM_SERVER_NAME")]),e._v(": For the Zowe Desktop to operate communication with the Zowe cross memory server.  The default procedure name "),o("code",[e._v("ZWESIS_STD")]),e._v(" is used for the cross memory server. However, this can be changed in the "),o("code",[e._v("ZWESISTC")]),e._v(" PROBLIC member.  This might occur to match local naming standards, or to allow isolated testing of a new version of the cross memory server while an older version is running concurrently.  The Zowe desktop that runs under the "),o("code",[e._v("ZWESVSTC")]),e._v(" started task will locate the appropriate cross memory server running under its started task "),o("code",[e._v("ZWESISTC")]),e._v(" using the "),o("code",[e._v("ZOWE_ZSS_XMEM_SERVER_NAME")]),e._v(" value.  If this handshake cannot occur, users will be unable to log in to the Zowe desktop. See "),o("RouterLink",{attrs:{to:"/troubleshoot/app-framework/app-troubleshoot.html#zss-server-unable-to-communicate-with-x-mem"}},[e._v("Troubleshooting: ZSS server unable to communicate with X-MEM")]),e._v(".")],1),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("//ZWESISTC  PROC NAME='ZWESIS_STD',MEM=00,RGN=0M\n")])])])])]),e._v(" "),o("h3",{attrs:{id:"extensions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#extensions"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("ZWEAD_EXTERNAL_STATIC_DEF_DIRECTORIES")]),e._v(":  Full USS path to the directory that contains static API Mediation Layer .yml definition files.  For more information, see "),o("RouterLink",{attrs:{to:"/extend/extend-apiml/onboard-static-definition.html#add-a-definition-in-the-api-mediation-layer-in-the-zowe-runtime"}},[e._v("Onboard a REST API without code changes required")]),e._v(".  Multiple paths should be semicolon separated. This value allows a Zowe instance to be configured so that the API Mediation Layer can be extended by third party REST API and web UI servers.")],1)]),e._v(" "),o("li",[o("p",[o("code",[e._v("EXTERNAL_COMPONENTS")]),e._v(": For third-party extenders to add the full path to the directory that contains their component lifecycle scripts.  For more information, see "),o("RouterLink",{attrs:{to:"/extend/lifecycling-with-zwesvstc.html#zowe-extensions"}},[e._v("Zowe lifecycle - Zowe extensions")]),e._v(".")],1)])]),e._v(" "),o("h3",{attrs:{id:"high-availability"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#high-availability"}},[e._v("#")]),e._v(" High Availability")]),e._v(" "),o("p",[e._v("The high availability (HA) feature of Zowe is under development and has not been fully delivered.  The following values are work in progress towards HA capability. They are not used and will be documented in more detail once HA support is finalized in a future Zowe release.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("ZWE_DISCOVERY_SERVICES_LIST")]),e._v(": "),o("em",[e._v("(Work in progress)")]),e._v(" "),o("strong",[e._v("Do not modify this value")]),e._v(" from its supplied default of "),o("code",[e._v("https://${ZOWE_EXPLORER_HOST}:${DISCOVERY_PORT}/eureka/")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("ZWE_CACHING_SERVICE_PORT=7555")]),e._v(": "),o("em",[e._v("(Work in progress)")]),e._v(" This port is not yet used so the value does not need to be availale.")]),e._v(" "),o("li",[o("code",[e._v("ZWE_CACHING_SERVICE_PERSISTENT=VSAM")]),e._v(": "),o("em",[e._v("(Work in progress)")])]),e._v(" "),o("li",[o("code",[e._v("ZWE_CACHING_SERVICE_VSAM_DATASET")]),e._v(": "),o("em",[e._v("(Work in progress)")])])]),e._v(" "),o("h2",{attrs:{id:"configuring-a-zowe-instance-via-instance-env-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-a-zowe-instance-via-instance-env-file"}},[e._v("#")]),e._v(" Configuring a Zowe instance via "),o("code",[e._v("instance.env")]),e._v(" file")]),e._v(" "),o("p",[e._v("When configuring a Zowe instance through the "),o("code",[e._v("instance.env")]),e._v(" file, "),o("code",[e._v("ZOWE_IP_ADDRESS")]),e._v(" and "),o("code",[e._v("ZOWE_EXPLORER_HOST")]),e._v(" are used to specify where the Zowe servers can be reached.")]),e._v(" "),o("p",[e._v("However, these values may not reflect the website name that you access Zowe from. This is especially true in the following cases:")]),e._v(" "),o("ul",[o("li",[e._v("You are using a proxy")]),e._v(" "),o("li",[e._v("The URL is a derivative of the value of "),o("code",[e._v("ZOWE_EXPLORER_HOST")]),e._v(", such as "),o("code",[e._v("myhost")]),e._v(" versus "),o("code",[e._v("myhost.mycompany.com")])])]),e._v(" "),o("p",[e._v("In these cases, it may be necessary to specify a value for "),o("code",[e._v("ZWE_EXTERNAL_HOSTS")]),e._v(" in the form of a comma-separated list of the addresses from which you want to access Zowe in your browser.")]),e._v(" "),o("p",[e._v("In the previous example, "),o("code",[e._v("ZWE_EXTERNAL_HOSTS")]),e._v(" could include both "),o("code",[e._v("myhost")]),e._v(" and "),o("code",[e._v("myhost.mycompany.com")]),e._v(". In the "),o("code",[e._v("instance.env")]),e._v(", this would look like: "),o("code",[e._v("ZWE_EXTERNAL_HOSTS=myhost,myhost.mycompany.com")])]),e._v(" "),o("p",[e._v("This configuration value maybe used for multiple purposes, including referrer-based security checks. In the case that the values are not specified, referrer checks will use the default values of "),o("code",[e._v("ZOWE_IP_ADDRESS")]),e._v(", "),o("code",[e._v("ZOWE_EXPLORER_HOST")]),e._v(", and the system's hostname. Therefore, if these values are not what you put into your browser, you will want to specify "),o("code",[e._v("ZWE_EXTERNAL_HOSTS")]),e._v(" to set the correct value.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("ZOWE_EXPLORER_FRAME_ANCESTORS")]),e._v(": The MVS, USS, and JES Explorer are served by their respective explorer UI address spaces.  These are accessed through the Zowe desktop where they are hosted as iFrames.  To protect against double iFrame security vulnerabilities, browsers all of the valid address that may be used by the browser must be explicitly declared in this property.  The default values are: "),o("code",[e._v('"${ZOWE_EXPLORER_HOST}:*,${ZOWE_IP_ADDRESS}:*"')]),e._v(". If there are any other URLs by which the Zowe Explorers can be served, then these should be appended to the preceding comma-separated list.")])]),e._v(" "),o("h2",{attrs:{id:"hints-and-tips"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hints-and-tips"}},[e._v("#")]),e._v(" Hints and tips")]),e._v(" "),o("p",[e._v("Learn about some hints and tips that you might find useful when you create and configure the Zowe instance.")]),e._v(" "),o("p",[e._v("When you are configuring Zowe on z/OS, you need to "),o("RouterLink",{attrs:{to:"/user-guide/configure-certificates.html"}},[e._v("create certificates")]),e._v(", and then create the Zowe instance.")],1),e._v(" "),o("p",[e._v("The creation of a Zowe instance is controlled by the "),o("a",{attrs:{href:"#reviewing-the-instanceenv-file"}},[o("code",[e._v("instance.env")]),e._v(" file")]),e._v(" in your instance directory "),o("code",[e._v("INSTANCE_DIR")]),e._v(".")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Keystore")]),e._v(" "),o("p",[e._v("Edit the "),o("code",[e._v("instance.env")]),e._v(" file to set the keystore directory to the one you created when you ran "),o("code",[e._v("zowe-setup-certificates.sh")]),e._v(".")]),e._v(" "),o("p",[e._v("The keyword and value in "),o("code",[e._v("instance.env")]),e._v(" should be the same as in "),o("code",[e._v("zowe-setup-certificates.env")]),e._v(", as shown below")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v(" KEYSTORE_DIRECTORY=/my/zowe/instance/keystore\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Hostname and IP address")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("zowe-configure-instance.sh")]),e._v(" script handles the IP address and hostname the same way "),o("code",[e._v("zowe-setup-certificates.sh")]),e._v(" does.")]),e._v(" "),o("p",[e._v("In "),o("code",[e._v("instance.env")]),e._v(",  you specify the IP address and hostname using the following keywords:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ZOWE_EXPLORER_HOST=\nZOWE_IP_ADDRESS= \n")])])]),o("p",[e._v("The "),o("code",[e._v("ZOWE_EXPLORER_HOST")]),e._v(" value must resolve to the external IP address, otherwise you should use the external IP address as the value for "),o("code",[e._v("ZOWE_EXPLORER_HOST")]),e._v(".")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("zowe-configure-instance.sh")]),e._v(" script will attempt to discover the IP address and hostname of your system if you leave these unset.")]),e._v(" "),o("p",[e._v("When the script cannot determine the hostname or the IP address, it will ask you to enter the IP address manually during the dialog.  If you have not specified a value for "),o("code",[e._v("ZOWE_EXPLORER_HOST")]),e._v(", then the script will use the IP address as the hostname.")]),e._v(" "),o("p",[e._v("The values of "),o("code",[e._v("ZOWE_EXPLORER_HOST")]),e._v(" and "),o("code",[e._v("ZOWE_IP_ADDRESS")]),e._v(" that the script discovered are appended to the "),o("code",[e._v("instance.env")]),e._v(" file unless they were already set in that file or as shell environment variables before you ran the script.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);