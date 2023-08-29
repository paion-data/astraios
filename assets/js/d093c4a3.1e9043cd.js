"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4,title:"JPA through Elide Middleware"},i=void 0,l={unversionedId:"elide",id:"elide",title:"JPA through Elide Middleware",description:"[Astraios] delegates JPA capabilities to [Elide]. JWT configures Elide through 2  required Elide",source:"@site/docs/elide.md",sourceDirName:".",slug:"/elide",permalink:"/astraios/docs/elide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/elide.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"JPA through Elide Middleware"},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/astraios/docs/development"}},s={},p=[{value:"Running Webservice in Docker Compose",id:"running-webservice-in-docker-compose",level:2},{value:"Step 1: Defining Data Models",id:"step-1-defining-data-models",level:3},{value:"Step 1: Spinning Up Docker Compose",id:"step-1-spinning-up-docker-compose",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Database Does Not Have My Model Packages&#39;s Bean Table",id:"database-does-not-have-my-model-packagess-bean-table",level:4},{value:"Entity Missing Default Constructor",id:"entity-missing-default-constructor",level:3},{value:"How to Exclude GraphQL Feature",id:"how-to-exclude-graphql-feature",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://paion-data.github.io/astraios/"},"Astraios")," delegates JPA capabilities to ",(0,r.kt)("a",{parentName:"p",href:"https://elide.io/"},"Elide"),". JWT configures Elide through 2  required Elide\n",(0,r.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/jersey/ioc.html"},"bindings"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/Elide.java"},"Elide")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/ElideSettings.java"},"ElideSettings"))," with 2 extra sub-bindings:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EntityDictionary")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DataStore"))))),(0,r.kt)("p",null,"The binding is referencing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yahoo/elide/tree/master/elide-standalone"},"Elide Standalone")," in the following way:"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Although the Jersey binder wraps HK2 binder, we\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paion-data/astraios/pull/10/files#diff-7633fbf494dcb17a51964f179a341b02c328a7214fa3c2c01ba28b1f4cc4dc4aR39-R40"},"must pick the ",(0,r.kt)("em",{parentName:"a"},"Jersey binder")," for binding Elide resources"),",\notherwise, dependency injection will flaky and not right.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Error loading resource-binding.png",src:n(4229).Z,width:"4614",height:"1326"})),(0,r.kt)("h2",{id:"running-webservice-in-docker-compose"},"Running Webservice in Docker Compose"),(0,r.kt)("h3",{id:"step-1-defining-data-models"},"Step 1: Defining Data Models"),(0,r.kt)("p",null,"To inject ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yahoo/elide/tree/master/elide-standalone#create-models"},"Elide model package"),", simply put\nthe models in a separate JAR and include it as a dependency in POM. If the model package is internal and cannot be\nvisible publicly, either make the webservice project private or public with env variable masking, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependencies>\n        <dependency>\n            <groupId>${env.MODEL_PACKAGE_JAR_GROUP_ID}</groupId>\n            <artifactId>${env.MODEL_PACKAGE_JAR_ARTIFACT_ID}</artifactId>\n            <version>${env.MODEL_PACKAGE_JAR_VERSION}</version>\n        </dependency>\n    </dependencies>\n\n    ...\n\n    <repositories>\n        <repository>\n            <id>${env.MODEL_PACKAGE_REPO_ID}</id>\n            <name>JPA model pacakge JAR repository</name>\n            <url>${env.MODEL_PACKAGE_REPO_URL}</url>\n        </repository>\n    </repositories>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export MODEL_PACKAGE_JAR_GROUP_ID=com.mycompnay\nexport MODEL_PACKAGE_JAR_ARTIFACT_ID=my-model-package\nexport MODEL_PACKAGE_JAR_VERSION=1.0.7\n\nexport MODEL_PACKAGE_REPO_ID=my-repo-id\nexport MODEL_PACKAGE_REPO_URL=https://private.mvnrepository.com/artifact/com.company/my-model-package\n")),(0,r.kt)("h3",{id:"step-1-spinning-up-docker-compose"},"Step 1: Spinning Up Docker Compose"),(0,r.kt)("p",null,"Astraios can run in ","[Docker Compose]"," for the following purposes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Decoupling frontend and backend developments"),(0,r.kt)("li",{parentName:"ol"},"Making it easy to run E2E testing of Astraios-backed application in CI/CD")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Docker Compose designed here is intended for local development and testing purposes ONLY! ",(0,r.kt)("em",{parentName:"p"},"It is strongly discouraged\nto run this Docker Compose in production!"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Error Loading docker-compose.png",src:n(3386).Z,width:"732",height:"492"})),(0,r.kt)("p",null,"Simply run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:paion-data/astraios.git\ncd astraios\nmvn clean package\nMODEL_PACKAGE_NAME=$ASTRAIOS_MODEL_PACKAGE_NAME docker compose up --build --force-recreate\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"$ASTRAIOS_MODEL_PACKAGE_NAME")," is the package in config JAR that contains all\n",(0,r.kt)("a",{parentName:"p",href:"https://elide.io/pages/guide/v7/02-data-model.html"},"elide models"),". It can be set, for example, at command line with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export $ASTRAIOS_MODEL_PACKAGE_NAME=com.mycompany.jwt.models\n")),(0,r.kt)("p",null,"The variable will be ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/58900415"},"passed")," into Docker Compose file."),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h4",{id:"database-does-not-have-my-model-packagess-bean-table"},"Database Does Not Have My Model Packages's Bean Table"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"If tests is running in IntelliJ IDE"),", make sure the model package JAR it is in IDE's ",(0,r.kt)("strong",{parentName:"p"},"External Libraries")),(0,r.kt)("p",null,"Otherwise, the dependency injection didn't find a bean class under the package specified by\n",(0,r.kt)("a",{parentName:"p",href:"#step-1-defining-data-models"},"$ASTRAIOS_MODEL_PACKAGE_NAME")),(0,r.kt)("h3",{id:"entity-missing-default-constructor"},"Entity Missing Default Constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[main] INFO  o.h.m.i.EntityInstantiatorPojoStandard - HHH000182: No default (no-argument) constructor for\nclass: ... (class must be instantiated by Interceptor)\n")),(0,r.kt)("p",null,"Simply add a no-args constructor to the bean class."),(0,r.kt)("h3",{id:"how-to-exclude-graphql-feature"},"How to Exclude GraphQL Feature"),(0,r.kt)("p",null,"To optionally disable GraphQL endpoints, exclude corresponding dependencies in POM. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.yahoo.elide</groupId>\n            <artifactId>elide-core</artifactId>\n            <version>7.0.0-pr6</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>com.yahoo.elide</groupId>\n                    <artifactId>elide-graphql</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n")))}u.isMDXComponent=!0},3386:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/docker-compose-c901c60cce997d66d07b7b62b7678287.png"},4229:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/resource-binding-2533e561b79d9ea06fb735525b6077df.png"}}]);