(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{611:function(e,t,o){"use strict";o.r(t);var i=o(18),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"zowe-server-component-runtime-lifecycle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zowe-server-component-runtime-lifecycle"}},[e._v("#")]),e._v(" Zowe server component runtime lifecycle")]),e._v(" "),o("h2",{attrs:{id:"zowe-runtime-lifecycle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zowe-runtime-lifecycle"}},[e._v("#")]),e._v(" Zowe runtime lifecycle")]),e._v(" "),o("p",[e._v("This topic describes the runtime lifecycle of Zowe core components and how an offering that provides a Zowe extension can set up runtime lifecycle for their component.")]),e._v(" "),o("p",[e._v("The Zowe UNIX System Services (USS) components are run as part of the started task "),o("code",[e._v("ZWESVSTC")]),e._v(". For more information, see "),o("RouterLink",{attrs:{to:"/user-guide/configure-zowe-server.html#option-1-starting-zowe-from-a-uss-shell"}},[e._v("Starting Zowe from a USS shell")]),e._v(". There are two key USS directories that play different roles when launching Zowe.")],1),e._v(" "),o("ul",[o("li",[o("p",[e._v("The Zowe runtime directory "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(" that contains the executable files is an immutable set of directories and files that are replaced each time a new release is applied.  The initial release or an upgrade is installed either with UNIX shell scripts (see "),o("RouterLink",{attrs:{to:"/user-guide/install-zowe-zos-convenience-build.html"}},[e._v("Installing Zowe runtime from a convenience build")]),e._v("), or SMP/E where the runtime directory is laid down initially as FMID AZWE001 and then upgraded through rollup PTF builds (see "),o("RouterLink",{attrs:{to:"/user-guide/install-zowe-smpe.html"}},[e._v("Installing Zowe SMP/E")]),e._v(").  The Zowe runtime directory is not altered during operation of Zowe, so no data is written to it and no customization is performed on its contents.")],1)]),e._v(" "),o("li",[o("p",[e._v("The Zowe instance directory "),o("code",[e._v("<INSTANCE_DIR>")]),e._v(" contains information that is specific to a launch of Zowe.  It contains configuration settings that determine how an instance of the Zowe server is started, such as ports that are used or paths to dependent Java and Node.js runtimes.  The instance directory also contains log directory where different 'microservices' write trace data for diagnosis, as well as a workspace and shell scripts to start and stop Zowe.  More than one Zowe instance directory can be created to allow multiple launches of a Zowe runtime, each one isolated from each other and starting Zowe depending on how the instance directory has been configured. For more information, see "),o("RouterLink",{attrs:{to:"/user-guide/configure-instance-directory.html"}},[e._v("Creating and configuring the Zowe instance directory")]),e._v(".")],1)])]),e._v(" "),o("p",[e._v("To start Zowe, the script "),o("code",[e._v("<INSTANCE_DIR>/bin/zowe-start.sh")]),e._v(" is run from a USS shell.  This uses a REXX program to launch the started task "),o("code",[e._v("ZWESVSTC")]),e._v(", passing the instance directory path as a parameter.  It is the equivalent of using the TSO command "),o("code",[e._v("/S ZWESVSTC,INSTANCE='<INSTANCE_DIR>',JOBNAME='<JOBNAME>'")]),e._v(".  The "),o("code",[e._v("ZWESVSTC")]),e._v(" PROCLIB uses the program that creates a USS process and starts the script "),o("code",[e._v("<INSTANCE_DIR>/bin/internal/run-zowe.sh")]),e._v(".  By using "),o("code",[e._v("BPXATSL")]),e._v(" to start the USS process, all of the address spaces started under this shell are managed by SDSF.  If the "),o("code",[e._v("zowe-start.sh")]),e._v(" run "),o("code",[e._v("run-zowe.sh")]),e._v(" directly, the USS processes will not run as a started task and will run under the user ID of whoever ran the "),o("code",[e._v("run-zowe.sh")]),e._v(" script rather than the Zowe user ID of "),o("code",[e._v("ZWESVUSR")]),e._v(", likely leading to permission errors accessing the contents of the "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(" as well as the Zowe certificate. For these reasons, the "),o("code",[e._v("zowe-start.sh")]),e._v(" script launches Zowe's USS process beneath the started task "),o("code",[e._v("ZWESVSTC")]),e._v(".")]),e._v(" "),o("p",[e._v("When "),o("code",[e._v("run-zowe.sh")]),e._v(" is run in the USS shell that "),o("code",[e._v("BPXBATSL")]),e._v(" creates, it executes the file "),o("code",[e._v("<INSTANCE_DIR>/instance.env")]),e._v(".  This file sets a number of shell variables, such as "),o("code",[e._v("ROOT_DIR")]),e._v(" that points to the directory with the "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(", variables for all of the ports used by the Zowe components, and other configuration data. For more information, see "),o("RouterLink",{attrs:{to:"/user-guide/configure-instance-directory.html#reviewing-the-instance.env-file"}},[e._v("Reviewing the instance.env file")]),e._v(".")],1),e._v(" "),o("p",[o("strong",[e._v("Note:")])]),e._v(" "),o("p",[e._v("The scripts of core Zowe components and some extensions use the helper library "),o("code",[e._v("<RUNTIME_DIR>/bin/utils")]),e._v(".  Currently, these are not publicly supported. Future releases of Zowe might provide these as supported system programming interfaces (SPIs) and include their usage in the Zowe documentation.")]),e._v(" "),o("h2",{attrs:{id:"zowe-component-runtime-lifecycle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zowe-component-runtime-lifecycle"}},[e._v("#")]),e._v(" Zowe component runtime lifecycle")]),e._v(" "),o("p",[e._v("Each Zowe component will be installed with its own USS directory, which contains its executable files. Within each component's USS directory, a "),o("code",[e._v("bin")]),e._v(" directory is recommended to contain scripts that are used for the lifecycle of the component.  When Zowe is started, it identifies the components that are configured to launch and then execute the scripts of those components in the cycle of "),o("a",{attrs:{href:"#validate"}},[e._v("validate")]),e._v(", "),o("a",{attrs:{href:"#configure"}},[e._v("configure")]),e._v(", and "),o("a",{attrs:{href:"#start"}},[e._v("start")]),e._v(".  All components are validated, then all are configured, and finally all are started. This technique is used as follows:")]),e._v(" "),o("ul",[o("li",[e._v("Used for the base Zowe components that are included with the core Zowe runtime.")]),e._v(" "),o("li",[e._v("Applies to extensions to allow vendor offerings to be able to have the lifecycle of their 'microservices' within the Zowe USS shell and be included as address spaces under the "),o("code",[e._v("ZWESVSTC")]),e._v(" started task.")])]),e._v(" "),o("h3",{attrs:{id:"validate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#validate"}},[e._v("#")]),e._v(" Validate")]),e._v(" "),o("p",[e._v("Each component can optionally instruct Zowe runtime to validate itself with a USS command defined in manifest "),o("code",[e._v("commands.validate")]),e._v(". If this is not defined, for backward compatible purpose, a call to its "),o("code",[e._v("/bin/validate.sh")]),e._v(" script will be executed if it exists.")]),e._v(" "),o("p",[e._v("If present, the "),o("code",[e._v("validate")]),e._v(" script performs tasks such as:")]),e._v(" "),o("ul",[o("li",[e._v("Check that the shell has the correct prerequisites.")]),e._v(" "),o("li",[e._v("Validate that ports are available.")]),e._v(" "),o("li",[e._v("Perform other steps to ensure that the component is able to be launched successfully.")])]),e._v(" "),o("p",[e._v("During execution of the "),o("code",[e._v("validate")]),e._v(" script, if an error is detected, then a component should echo a message that contains information to assist a user diagnosing the problem.")]),e._v(" "),o("h3",{attrs:{id:"configure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure"}},[e._v("#")]),e._v(" Configure")]),e._v(" "),o("p",[e._v("Each component can optionally instruct Zowe runtime to configure itself with a USS command defined in manifest "),o("code",[e._v("commands.configure")]),e._v(". If this is not defined, for backward compatible purpose, a call to its "),o("code",[e._v("/bin/configure.sh")]),e._v(" script will be executed if it exists.")]),e._v(" "),o("p",[e._v("If the component has manifest defined, some configure actions will be performed automatically based on manifest definition:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("apimlServices.static")]),e._v(": Zowe runtime will automatically parse and add your static definition to API Mediation Layer.")])]),e._v(" "),o("p",[e._v("For backward compatible purpose, you can choose to configure component by yourself with "),o("code",[e._v("/bin/configure.sh")]),e._v(". An example configuration step is if a component wants to install applications into the Zowe desktop as iframes, or add API endpoints statically into the API Mediation Layer.  Because a component's "),o("code",[e._v("configure.sh")]),e._v(" script is run inside the USS shell that the "),o("code",[e._v("instance.env")]),e._v(" has initialized, it will have all of the shell variables for prerequisites set, so the configure step can be used to query these in order to prepare the component ready for launch.")]),e._v(" "),o("h3",{attrs:{id:"start"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[e._v("#")]),e._v(" Start")]),e._v(" "),o("p",[e._v("Each component can optionally instruct Zowe runtime to start itself with a USS command defined in manifest "),o("code",[e._v("commands.start")]),e._v(". If this is not defined, for backward compatible purpose, a call to its "),o("code",[e._v("/bin/start.sh")]),e._v(" script will be executed if it exists. If your component is not supposed to be started by itself, for example, the component is a shared library, you can skip this instruction.")]),e._v(" "),o("p",[e._v("It is up to each component to start itself based on how it has been written.  We recommend that any variables that someone who configure Zowe may need to vary, such as timeout values, port numbers, or similar, are specified as variables in the "),o("code",[e._v("instance.env")]),e._v(" file and then referenced as shell variables in the "),o("code",[e._v("start.sh")]),e._v(" script to be passed into the component runtime.")])])}),[],!1,null,null,null);t.default=s.exports}}]);