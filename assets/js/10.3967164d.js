(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{200:function(s,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[s._v("#")]),s._v(" Messages")]),s._v(" "),a("p",[s._v("The messages used in the beacon communication are defined in the "),a("a",{attrs:{href:"https://gitlab.com/tzip/tzip/tree/master/proposals/tzip-10",target:"_blank",rel:"noopener noreferrer"}},[s._v("tzip-10 proposal"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("p",[s._v("Every message contains a unique, random ID that allows use to match request and response. It also contains the ID (public key) of the sender. In the future, this public key can be used to verify the authenticity of a message.")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" BeaconMessageType "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../..'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeaconBaseMessage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" BeaconMessageType\n  version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n  id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ID of the message. The same ID is used in the request and response")]),s._v("\n  senderId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ID of the sender. This is used to identify the sender of the message")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Some of the messages accept a network as input (default is mainnet). This is used to ask for permissions or broadcast a transaction on another network. This can either be a testnet, or a local development setup.")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" NetworkType "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../..'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Network")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" NetworkType\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n  rpcUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("In total, there are request / response messages defined in the "),a("a",{attrs:{href:"https://gitlab.com/tzip/tzip/tree/master/proposals/tzip-10",target:"_blank",rel:"noopener noreferrer"}},[s._v("tzip-10"),a("OutboundLink")],1),s._v(" standard.")]),s._v(" "),a("h2",{attrs:{id:"permission"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permission"}},[s._v("#")]),s._v(" Permission")]),s._v(" "),a("p",[s._v("The permission request is always the first request that has to be sent to the wallet. The user will be able to select which of the following permissions he wants to grant the DApp.")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),s._v(" PermissionScope "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SIGN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sign'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Allows the DApp to send requests to sign arbitrary payload")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OPERATION_REQUEST")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'operation_request'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Allows the DApp to send requests to sign and broadcast Tezos Operations")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("THRESHOLD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'threshold'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Allows the DApp to sign transactions below a certain threshold. This is currently not fully defined and unused")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("The user will also be able to see some additional information about the requesting DApp.")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AppMetadata")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  senderId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n  icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// URL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  BeaconBaseMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  BeaconMessageType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  PermissionScope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  AppMetadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  Network\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../..'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PermissionRequest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeaconBaseMessage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" BeaconMessageType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PermissionRequest\n  appMetadata"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" AppMetadata "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Some additional information about the DApp")]),s._v("\n  network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Network "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Network on which the permissions are requested. Only one network can be specified. In case you need permissions on multiple networks, you need to request permissions multiple times")]),s._v("\n  scopes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PermissionScope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// The permission scopes that the DApp is asking for")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" BeaconBaseMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" BeaconMessageType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" PermissionScope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Threshold "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../..'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PermissionResponse")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeaconBaseMessage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" BeaconMessageType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PermissionResponse\n  publicKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Public Key, because it can be used to verify signatures")]),s._v("\n  network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Network "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Network on which the permissions have been granted")]),s._v("\n  scopes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PermissionScope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Permissions that have been granted for this specific address / account")]),s._v("\n  threshold"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Threshold\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[s._v("#")]),s._v(" Errors")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/beacon/06.errors.html#networknotsupportedbeaconerror"}},[s._v("NetworkNotSupportedBeaconError")])],1),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/beacon/06.errors.html#noaddressbeaconerror"}},[s._v("NoAddressBeaconError")])],1),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/beacon/06.errors.html#unknownbeaconerror"}},[s._v("UnknownBeaconError")])],1),s._v(" "),a("h2",{attrs:{id:"operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[s._v("#")]),s._v(" Operation")]),s._v(" "),a("p",[s._v("After asking for permissions, the user can send an operation request to the wallet. The operation accepts the following object as input")]),s._v(" "),a("h3",{attrs:{id:"request-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" BeaconBaseMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" BeaconMessageType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Network "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../..'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" PartialTezosOperation "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../tezos/PartialTezosOperation'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OperationRequest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeaconBaseMessage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" BeaconMessageType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OperationRequest\n  network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Network "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Network on which the operation will be broadcast")]),s._v("\n  operationDetails"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" PartialTezosOperation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Partial TezosOperation that may lack certain information like counter and fee. Those will be added by the wallet.")]),s._v("\n  sourceAddress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" BeaconBaseMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" BeaconMessageType "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../..'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OperationResponse")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeaconBaseMessage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" BeaconMessageType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OperationResponse\n  transactionHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Hash of the broadcast transaction")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"errors-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors-2"}},[s._v("#")]),s._v(" Errors")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/beacon/06.errors.html#broadcastbeaconerror"}},[s._v("BroadcastBeaconError")])],1),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/beacon/06.errors.html#parametersinvalidbeaconerror"}},[s._v("ParametersInvalidBeaconError")])],1),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/beacon/06.errors.html#toomanyoperationsbeaconerror"}},[s._v("TooManyOperationsBeaconError")])],1),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/beacon/06.errors.html#unknownbeaconerror"}},[s._v("UnknownBeaconError")])],1),s._v(" "),a("h2",{attrs:{id:"sign-payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-payload"}},[s._v("#")]),s._v(" Sign Payload")]),s._v(" "),a("h3",{attrs:{id:"request-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-3"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" BeaconBaseMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" BeaconMessageType "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../..'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SignPayloadRequest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeaconBaseMessage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" BeaconMessageType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SignPayloadRequest\n  payload"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// The payload that will be signed. Can be any string and does not have to be a valid tezos operation")]),s._v("\n  sourceAddress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// The user can specify an address that should be pre-selected in the wallet")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" BeaconBaseMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" BeaconMessageType "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../..'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SignPayloadResponse")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeaconBaseMessage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" BeaconMessageType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SignPayloadResponse\n  signature"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Signature of the payload")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"errors-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors-3"}},[s._v("#")]),s._v(" Errors")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/beacon/06.errors.html#noprivatekeybeaconerror"}},[s._v("NoPrivateKeyBeaconError")])],1),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/beacon/06.errors.html#notgrantedbeaconerror"}},[s._v("NotGrantedBeaconError")])],1),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/beacon/06.errors.html#unknownbeaconerror"}},[s._v("UnknownBeaconError")])],1),s._v(" "),a("h2",{attrs:{id:"broadcast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broadcast"}},[s._v("#")]),s._v(" Broadcast")]),s._v(" "),a("h3",{attrs:{id:"request-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-4"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" BeaconBaseMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" BeaconMessageType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Network "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../..'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BroadcastRequest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeaconBaseMessage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" BeaconMessageType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BroadcastRequest\n  network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Network "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Network on which the transaction will be broadcast")]),s._v("\n  signedTransaction"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Signed transaction that will be broadcast")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"response-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" BeaconBaseMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" BeaconMessageType "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../..'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BroadcastResponse")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeaconBaseMessage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" BeaconMessageType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BroadcastResponse\n  transactionHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Hash of the broadcast transaction")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"errors-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors-4"}},[s._v("#")]),s._v(" Errors")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/beacon/06.errors.html#broadcastbeaconerror"}},[s._v("BroadcastBeaconError")])],1),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/beacon/06.errors.html#transactioninvalidbeaconerror"}},[s._v("TransactionInvalidBeaconError")])],1),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/beacon/06.errors.html#unknownbeaconerror"}},[s._v("UnknownBeaconError")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);