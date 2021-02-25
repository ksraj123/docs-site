(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{424:function(e,t,o){e.exports=o.p+"assets/img/home_struc.5b1dce73.png"},595:function(e,t,o){"use strict";o.r(t);var s=o(18),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"gathering-information-to-troubleshoot-zowe-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gathering-information-to-troubleshoot-zowe-cli"}},[e._v("#")]),e._v(" Gathering information to troubleshoot Zowe CLI")]),e._v(" "),s("p",[e._v("Follow these instructions to gather specific pieces of information to help troubleshoot Zowe™ CLI issues.")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#identify-the-currently-installed-cli-version"}},[e._v("Identify the currently installed CLI version")])]),s("li",[s("a",{attrs:{href:"#identify-the-currently-installed-versions-of-plug-ins"}},[e._v("Identify the currently installed versions of plug-ins")])]),s("li",[s("a",{attrs:{href:"#environment-variables"}},[e._v("Environment variables")]),s("ul",[s("li",[s("a",{attrs:{href:"#log-levels"}},[e._v("Log levels")])]),s("li",[s("a",{attrs:{href:"#home-directory"}},[e._v("Home directory")])])])]),s("li",[s("a",{attrs:{href:"#home-directory-structure"}},[e._v("Home directory structure")]),s("ul",[s("li",[s("a",{attrs:{href:"#location-of-logs"}},[e._v("Location of logs")])]),s("li",[s("a",{attrs:{href:"#profile-configuration"}},[e._v("Profile configuration")])])])]),s("li",[s("a",{attrs:{href:"#node-js-and-npm"}},[e._v("Node.js and npm")]),s("ul",[s("li",[s("a",{attrs:{href:"#npm-configuration"}},[e._v("npm configuration")])]),s("li",[s("a",{attrs:{href:"#npm-log-files"}},[e._v("npm log files")])])])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"identify-the-currently-installed-cli-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#identify-the-currently-installed-cli-version"}},[e._v("#")]),e._v(" Identify the currently installed CLI version")]),e._v(" "),s("p",[e._v("Issue the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("zowe -V\n")])])]),s("p",[e._v("The exact Zowe CLI version may vary depending upon if the "),s("code",[e._v("@latest")]),e._v(" or "),s("code",[e._v("@zowe-v1-lts")]),e._v(", or "),s("code",[e._v("@lts-incremental")]),e._v(" version is installed.")]),e._v(" "),s("p",[e._v("For the "),s("code",[e._v("@zowe-v1-lts")]),e._v(" and the "),s("code",[e._v("@latest")]),e._v(" (forward-development) version tags:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm list -g @zowe/cli\n")])])]),s("p",[e._v("For the "),s("code",[e._v("@lts-incremental")]),e._v(" version tag:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm list -g @brightside/core\n")])])]),s("p",[e._v("More information regarding versioning conventions for Zowe CLI and plug-ins is located in "),s("a",{attrs:{href:"https://github.com/zowe/zowe-cli/blob/master/docs/MaintainerVersioning.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Versioning Guidelines"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"identify-the-currently-installed-versions-of-plug-ins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#identify-the-currently-installed-versions-of-plug-ins"}},[e._v("#")]),e._v(" Identify the currently installed versions of plug-ins")]),e._v(" "),s("p",[e._v("Issue the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("zowe plugins list\n")])])]),s("p",[e._v("The output describes version and the registry information.")]),e._v(" "),s("h2",{attrs:{id:"environment-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment variables")]),e._v(" "),s("p",[e._v("The following settings are configurable via environment variables:")]),e._v(" "),s("h3",{attrs:{id:"log-levels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-levels"}},[e._v("#")]),e._v(" Log levels")]),e._v(" "),s("p",[e._v("Environment variables are available to specify logging level and the CLI home directory.")]),e._v(" "),s("p",[s("strong",[e._v("Important!")]),e._v(' Setting the log level to TRACE or ALL might result in "sensitive" data being logged. For example, command line arguments will be logged when TRACE is set.')]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Environment Variable")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Values")]),e._v(" "),s("th",[e._v("Default")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("ZOWE_APP_LOG_LEVEL")])]),e._v(" "),s("td",[e._v("Zowe CLI logging level")]),e._v(" "),s("td",[e._v("Log4JS log levels (OFF, TRACE, DEBUG, INFO, WARN, ERROR, FATAL)")]),e._v(" "),s("td",[e._v("DEBUG")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("ZOWE_IMPERATIVE_LOG_LEVEL")])]),e._v(" "),s("td",[e._v("Imperative CLI Framework logging level")]),e._v(" "),s("td",[e._v("Log4JS log levels (OFF, TRACE, DEBUG, INFO, WARN, ERROR, FATAL)")]),e._v(" "),s("td",[e._v("DEBUG")])])])]),e._v(" "),s("h3",{attrs:{id:"home-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#home-directory"}},[e._v("#")]),e._v(" Home directory")]),e._v(" "),s("p",[e._v("You can set the location on your computer for the Zowe CLI home directory, which contains log files, profiles, and plug-ins for the product.")]),e._v(" "),s("p",[s("strong",[e._v("Tip!")]),e._v(" The default "),s("code",[e._v(".zowe")]),e._v(" folder is created when you issue your first Zowe CLI command. If you change the location of the folder, you must reinstall plug-ins and recreate or move profiles and log files that you want to retain. In some cases, you might want to maintain a different set of profiles in multiple folders, then switch between them using the environment variable.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Environment Variable")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Values")]),e._v(" "),s("th",[e._v("Default")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("ZOWE_CLI_HOME")])]),e._v(" "),s("td",[e._v("Zowe CLI home directory location")]),e._v(" "),s("td",[e._v("Any valid path on your computer")]),e._v(" "),s("td",[e._v("C:\\Users\\<username>\\.zowe")])])])]),e._v(" "),s("p",[e._v("The values for these variables can be "),s("strong",[e._v("echo")]),e._v("ed.")]),e._v(" "),s("h2",{attrs:{id:"home-directory-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#home-directory-structure"}},[e._v("#")]),e._v(" Home directory structure")]),e._v(" "),s("p",[s("img",{attrs:{src:o(424),alt:"Home Directory"}})]),e._v(" "),s("h3",{attrs:{id:"location-of-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location-of-logs"}},[e._v("#")]),e._v(" Location of logs")]),e._v(" "),s("p",[e._v("There are two sets of logs to be aware of:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Imperative CLI Framework log, which generally contains installation and configuration information.")])]),e._v(" "),s("li",[s("p",[e._v("Zowe CLI log, which contains information about interaction between CLI and the server endpoints.")])])]),e._v(" "),s("p",[e._v("Analyze these logs for any information relevant to your issue.")]),e._v(" "),s("h3",{attrs:{id:"profile-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#profile-configuration"}},[e._v("#")]),e._v(" Profile configuration")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("profiles")]),e._v(" folder stores connnection information.")]),e._v(" "),s("p",[s("strong",[e._v("Important!")]),e._v(' The profile directory might contain "sensitive" information, such as your mainframe password. You should obfuscate any sensitive references before providing configuration files.')]),e._v(" "),s("h2",{attrs:{id:"node-js-and-npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js-and-npm"}},[e._v("#")]),e._v(" Node.js and npm")]),e._v(" "),s("p",[e._v("Zowe CLI is compatible with the currently supported Node.js LTS versions. For an up-to-date list of supported LTS versions, see "),s("a",{attrs:{href:"https://nodejs.org/en/download/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js.org"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("To gather the Node.js and npm versions installed on your computer, issue the following commands:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("node --version\nnpm --version\n")])])]),s("h3",{attrs:{id:"npm-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-configuration"}},[e._v("#")]),e._v(" npm configuration")]),e._v(" "),s("p",[e._v("If you are having trouble installing Zowe CLI from an npm registry, gather your npm configuration to help identify issues with registry settings, global install paths, proxy settings, etc...")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm config ls -l\n")])])]),s("h3",{attrs:{id:"npm-log-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-log-files"}},[e._v("#")]),e._v(" npm log files")]),e._v(" "),s("p",[e._v("In case of errors, npm creates log files in the "),s("code",[e._v("npm_cache\\_logs")]),e._v(" location. To get the "),s("code",[e._v("npm_cache")]),e._v(" location for a specific OS, run the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm config get cache\n")])])]),s("p",[e._v("By default, npm keeps only 10 log files, but sometimes more are needed. Increase the log count by issuing the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm config set logs-max 50\n")])])]),s("p",[e._v("This command increases the log count to 50, so that more log files will be stored on the system. Now you can run tests multiple times and not lose the log files. The logs can be passed to Support for analysis.")]),e._v(" "),s("p",[e._v("As the log files are created only when an npm conmmand fails, but you are interested to see what is executed, you can increase the log level of npm. Issue the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm config set loglevel verbose\n")])])]),s("ul",[s("li",[s("p",[e._v("With this change, you can see all actions taken by npm on the stdout. If the command is successful, it still does not generate a log file.")])]),e._v(" "),s("li",[s("p",[e._v('The available log levels are:\n"silent", "error", "warn", "notice", "http", "timing", "info", "verbose", "silly", and "notice". "Notice" is the default.\n')])]),e._v(" "),s("li",[s("p",[e._v("Alternatively, you can pass "),s("code",[e._v("--loglevel verbose")]),e._v(" on the command line, but this only works with npm related commands. By setting log level in the config, it also works when you issue some "),s("code",[e._v("zowe")]),e._v(" commands that use npm (for example, "),s("code",[e._v("zowe plugins install @zowe/cics")]),e._v(").")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);