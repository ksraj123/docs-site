(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{666:function(s,e,a){"use strict";a.r(e);var t=a(18),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"api-mediation-layer-message-service-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-mediation-layer-message-service-component"}},[s._v("#")]),s._v(" API Mediation Layer Message Service Component")]),s._v(" "),a("p",[s._v("The API ML Message Service component unifies and stores REST API error messages and log messages in a single file. The Message Service component enables users to mitigate the problem of message definition redundancy which helps to optimize the development process.")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#message-definition"}},[s._v("Message Definition")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#creating-a-message"}},[s._v("Creating a message")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#mapping-a-message"}},[s._v("Mapping a message")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#api-ml-logger"}},[s._v("API ML Logger")])])]),s._v(" "),a("h2",{attrs:{id:"message-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-definition"}},[s._v("#")]),s._v(" Message Definition")]),s._v(" "),a("p",[s._v("API ML uses a customizable infrastructure to format both REST API error messages and log messages. "),a("code",[s._v("yaml")]),s._v(" files make it possible to centralize both API error messages and log messages. Messages have the following definitions:")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Message "),a("code",[s._v("key")]),s._v(" - a unique ID in the form of a dot-delimited string that describes the reason for the message. The "),a("code",[s._v("key")]),s._v(" enables the UI or the console to show a meaningful and localized message.")]),s._v(" "),a("p",[a("strong",[s._v("Tips:")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("We recommend using the format "),a("code",[s._v("org.zowe.sample.apiservice.{TYPE}.greeting.empty")]),s._v(" to define the message key. "),a("code",[s._v("{TYPE}")]),s._v(" can be the api or log keyword.")])]),s._v(" "),a("li",[a("p",[s._v("Use the message "),a("code",[s._v("key")]),s._v(" and not the message "),a("code",[s._v("number")]),s._v(". The message "),a("code",[s._v("number")]),s._v(" makes the code less readable, and increases the possibility of errors when renumbering values inside the "),a("code",[s._v("number")]),s._v(".")])])])]),s._v(" "),a("li",[a("p",[s._v("Message "),a("code",[s._v("number")]),s._v(" - a typical mainframe message ID (excluding the severity code)")])]),s._v(" "),a("li",[a("p",[s._v("Message "),a("code",[s._v("type")]),s._v(" - There are two Massage types:")]),s._v(" "),a("ul",[a("li",[s._v("REST API error messages: "),a("code",[s._v("ERROR")])]),s._v(" "),a("li",[s._v("Log messages: "),a("code",[s._v("ERROR")]),s._v(", "),a("code",[s._v("WARNING")]),s._v(", "),a("code",[s._v("INFO")]),s._v(", "),a("code",[s._v("DEBUG")]),s._v(", or "),a("code",[s._v("TRACE")])])])]),s._v(" "),a("li",[a("p",[s._v("Message "),a("code",[s._v("text")]),s._v(" - a description of the issue")])])]),s._v(" "),a("p",[s._v("The following example shows the message definition.")]),s._v(" "),a("p",[a("strong",[s._v("Example:")])]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("messages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" org.zowe.sample.apiservice."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("TYPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(".greeting.empty\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ZWEASA001\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ERROR\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"The provided '%s' name is empty.\"")]),s._v("\n")])])]),a("h2",{attrs:{id:"creating-a-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-message"}},[s._v("#")]),s._v(" Creating a message")]),s._v(" "),a("p",[s._v("Use the following classes when you create a message:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("org.zowe.apiml.message.core.MessageService")]),s._v(" - lets you create a message from a file.")]),s._v(" "),a("li",[a("code",[s._v("org.zowe.apiml.message.yaml.YamlMessageService")]),s._v(" - implements "),a("code",[s._v("org.zowe.apiml.message.core.MessageService")]),s._v(" so that "),a("code",[s._v("org.zowe.apiml.message.yaml.YamlMessageService")]),s._v(" can read message information from a "),a("code",[s._v("yaml")]),s._v(" file, and create a message with message parameters.")])]),s._v(" "),a("p",[s._v("Use the following process to create a message.")]),s._v(" "),a("p",[a("strong",[s._v("Follow these steps:")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Load messages from the "),a("code",[s._v("yaml")]),s._v(" file.")]),s._v(" "),a("p",[a("strong",[s._v("Example:")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MessageService")]),s._v(" messageService "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("YamlMessageService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmessageService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadMessages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/api-messages.yml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmessageService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadMessages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/log-messages.yml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("Use the "),a("code",[s._v("Message createMessage(String key, Object... parameters);")]),s._v(" method to create a message.")]),s._v(" "),a("p",[a("strong",[s._v("Example:")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Message")]),s._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" messageService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.zowe.sample.apiservice.{TYPE}.greeting.empty"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"mapping-a-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapping-a-message"}},[s._v("#")]),s._v(" Mapping a message")]),s._v(" "),a("p",[s._v("You can map the "),a("code",[s._v("Message")]),s._v(" either to a REST API response or to a log message.")]),s._v(" "),a("p",[s._v("When you map a REST API response,  use the following methods:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("mapToView")]),s._v(" - returns a UI model as a list of API Message, and can be used for Rest API error messages")]),s._v(" "),a("li",[a("code",[s._v("mapToApiMessage")]),s._v(" - returns a UI model as a single API Message")])]),s._v(" "),a("p",[s._v("The following example is a result of using the "),a("code",[s._v("mapToView")]),s._v(" method.")]),s._v(" "),a("p",[a("strong",[s._v("Example:")])]),s._v(" "),a("div",{staticClass:"language-JSON extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"messages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"messageKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.zowe.sample.apiservice.{TYPE}.greeting.empty"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"messageType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ERROR"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"messageNumber"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ZWEASA001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"messageContent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"The provided 'test' name is empty.\"")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("The following example is the result of using the "),a("code",[s._v("mapToApiMessage")]),s._v(" method.")]),s._v(" "),a("p",[a("strong",[s._v("Example:")])]),s._v(" "),a("div",{staticClass:"language-JSON extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"messageKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.zowe.sample.apiservice.{TYPE}.greeting.empty"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"messageType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ERROR"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"messageNumber"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ZWEASA001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"messageContent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"The provided 'test' name is empty.\"")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"api-ml-logger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-ml-logger"}},[s._v("#")]),s._v(" API ML Logger")]),s._v(" "),a("p",[s._v("The "),a("code",[s._v("org.zowe.apiml.message.log.ApimLogger")]),s._v(" component controls messages through the Message Service component.")]),s._v(" "),a("p",[s._v("The following example uses the "),a("code",[s._v("log")]),s._v(" message definition in a "),a("code",[s._v("yaml")]),s._v(" file.")]),s._v(" "),a("p",[a("strong",[s._v("Example:")])]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("messages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" org.zowe.sample.apiservice.log.greeting.empty\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ZWEASA001\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" DEBUG\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"The provided '%s' name is empty.\"")]),s._v("\n")])])]),a("p",[s._v("When you map a log message, use "),a("code",[s._v("mapToLogMessage")]),s._v(" to return a log message as text.\nThe following example is the output of the "),a("code",[s._v("mapToLogMessage")]),s._v(".")]),s._v(" "),a("p",[a("strong",[s._v("Example:")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ZWEASA001D The provided ‘test’ name is empty. {43abb594-3415-4ed5-a0b5-23e306a91124}\n")])])]),a("p",[s._v("Use the "),a("code",[s._v("ApimlLogger")]),s._v(" to log messages which are defined in the yaml file.")]),s._v(" "),a("p",[a("strong",[s._v("Example:")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zowe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apiml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zowe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apiml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MessageService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zowe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apiml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MessageType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zowe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apiml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ApimlLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SampleClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ApimlLogger")]),s._v(" logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SampleClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MessageService")]),s._v(" messageService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ApimlLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("of")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SampleClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" messageService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("“org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zowe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sample"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apiservice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("empty”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" “test”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("The following example shows the output of a successful "),a("code",[s._v("ApimlLogger")]),s._v(" usage.")]),s._v(" "),a("p",[a("strong",[s._v("Example:")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DEBUG "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c.c.m.c.c.SampleClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ZWEASA001D The provided "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(" name  is empty. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("43abb594-3415-4ed5-a0b5-23e306a91124"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);