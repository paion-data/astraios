"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6,title:"Configuration"},i=void 0,s={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"The configurations in this page can be set from several sources in the following order:",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/astraios/zh-cn/docs/configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/astraios/zh-cn/docs/security"}},l={},p=[{value:"Core Properties",id:"core-properties",level:2},{value:"OAuth 2",id:"oauth-2",level:2},{value:"(Elide) JPA DataStore",id:"elide-jpa-datastore",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The configurations in this page can be set from several sources in the following order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/essential/environment/env.html"},"operating system's environment variables"),"; for instance, an environment variable can be set with\n",(0,a.kt)("inlineCode",{parentName:"li"},'export OAUTH_ENABLED="true"')),(0,a.kt)("li",{parentName:"ol"},"the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html"},"Java system properties"),"; for example, a Java system property can be set using\n",(0,a.kt)("inlineCode",{parentName:"li"},'System.setProperty("OAUTH_ENABLED", "true")')),(0,a.kt)("li",{parentName:"ol"},"a ",(0,a.kt)("strong",{parentName:"li"},".properties")," file placed under CLASSPATH. This file can be put under ",(0,a.kt)("inlineCode",{parentName:"li"},"src/main/resources")," source directory with\ncontents, for example, ",(0,a.kt)("inlineCode",{parentName:"li"},"OAUTH_ENABLED=true"))),(0,a.kt)("h2",{id:"core-properties"},"Core Properties"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The following configurations can be placed in the properties file called ",(0,a.kt)("strong",{parentName:"p"},"application.properties"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MODEL_PACKAGE_NAME"),": The fully qualified package name that contains a set of Elide JPA models")),(0,a.kt)("h2",{id:"oauth-2"},"OAuth 2"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The following configurations can be placed in the properties file called ",(0,a.kt)("strong",{parentName:"p"},"oauth.properties"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"OAUTH_ENABLED"),": Whether or not to enable ",(0,a.kt)("a",{parentName:"p",href:"https://paion-data.github.io/astraios/apidocs/com/paiondata/astraios/web/filters/OAuthFilter.html"},"OAuthFilter")," container request filter.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"JWKS_URL"),": (",(0,a.kt)("strong",{parentName:"p"},"Required if ",(0,a.kt)("inlineCode",{parentName:"strong"},"OAUTH_ENABLED")," is set to ",(0,a.kt)("inlineCode",{parentName:"strong"},"true")),") A standard ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7517"},"JWKS")," URL that, on GET, returns a json\nobject such as"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "keys": [\n        {\n            "kty": "EC",\n            "use": "sig",\n            "kid": "eTERknhur9q8gisdaf_dfrqrgdfsg",\n            "alg": "ES384",\n            "crv": "P-384",\n            "x": "sdfrgHGYF...",\n            "y": "sdfuUIG&8..."\n        }\n    ]\n}\n')))),(0,a.kt)("h2",{id:"elide-jpa-datastore"},"(Elide) JPA DataStore"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The following configurations can be placed in the properties file called ",(0,a.kt)("strong",{parentName:"p"},"jpadatastore.properties"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DB_USER"),": Persistence DB username (needs have both Read and Write permissions)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DB_PASSWORD"),": The persistence DB user password."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DB_URL"),': The persistence DB URL, such as "jdbc:mysql://localhost/elide?serverTimezone=UTC".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DB_DRIVER"),': The SQL DB driver class name, such as "com.mysql.jdbc.Driver".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DB_DIALECT"),': The SQL DB dialect name, such as "org.hibernate.dialect.MySQLDialect".')))}m.isMDXComponent=!0}}]);