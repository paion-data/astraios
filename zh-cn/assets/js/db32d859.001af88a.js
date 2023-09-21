"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[653],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5,title:"Security"},i=void 0,s={unversionedId:"security",id:"security",title:"Security",description:"Core Concepts",source:"@site/docs/security.md",sourceDirName:".",slug:"/security",permalink:"/astraios/zh-cn/docs/security",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Security"},sidebar:"tutorialSidebar",previous:{title:"\u901a\u8fc7 Elide \u4e2d\u95f4\u4ef6\u5b9e\u73b0 JPA \u6a21\u578b",permalink:"/astraios/zh-cn/docs/elide"},next:{title:"Configuration",permalink:"/astraios/zh-cn/docs/configuration"}},c={},p=[{value:"Core Concepts",id:"core-concepts",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"core-concepts"},"Core Concepts"),(0,a.kt)("p",null,"API authentication is largely a solved problem and generally outside the scope of Astraios.\nAuthorization - the act of verifying data and operation access for an ",(0,a.kt)("em",{parentName:"p"},"already authenticated user")," in the Astraios\ngets delegated to Elide."),(0,a.kt)("p",null,"Astraios does, however, adds a layer of security on its own by validating ",(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/access-tokens/"},"OAuth 2 access token")," on all incoming\nrequest. Each Astraios API request requires a standard ",(0,a.kt)("strong",{parentName:"p"},'"Authentication": "Bearer <access_token>"')," token header:"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The validator is working exclusively for ES384 JWT token and can be turned on by setting ",(0,a.kt)("strong",{parentName:"p"},"OAUTH_ENABLED")," to ",(0,a.kt)("em",{parentName:"p"},"true"),".\nThere are 3 ways to do so (with the priority in the following order):"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Putting an ",(0,a.kt)("strong",{parentName:"p"},"oauth.properties")," file under ",(0,a.kt)("em",{parentName:"p"},"src/main/resources")," directory with the following content"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"OAUTH_ENABLED=true\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Setting an OS environment variable using, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"export OAUTH_ENABLED=true"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Define a JVM system property by"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'System.setProperty("OAUTH_ENABLED", "true");\n')))),(0,a.kt)("p",{parentName:"admonition"},"In addition, JWKs URL needs to be set with ",(0,a.kt)("strong",{parentName:"p"},"JWKS_URL")," using the same approach above. The URL should display something\nlike the following"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "keys": [\n        {\n            "kty": "EC",\n            "use": "sig",\n            "kid": "eTERknhur9q8gisdaf_dfrqrgdfsg",\n            "alg": "ES384",\n            "crv": "P-384",\n            "x": "sdfrgHGYF...",\n            "y": "sdfuUIG&8..."\n        }\n    ]\n}\n'))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Error loading oauth2-filtering.png",src:r(7854).Z,width:"1600",height:"1528"})))}d.isMDXComponent=!0},7854:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/oauth2-filtering-101f1d2fba9f07b01a5ce3ba32d70008.png"}}]);