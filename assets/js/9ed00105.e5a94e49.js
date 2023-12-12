"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4],{8373:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=s(5893),i=s(1151);const t={sidebar_position:4,title:"Configuration"},o=void 0,a={id:"configuration",title:"Configuration",description:"The configurations in this page can be set from several sources in the following order:",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/astraios/tree/master/docs/docs/configuration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/docs/development"},next:{title:"Elide Library",permalink:"/docs/category/elide-library"}},l={},c=[{value:"Core Properties",id:"core-properties",level:2},{value:"OAuth 2",id:"oauth-2",level:2},{value:"(Elide) JPA DataStore",id:"elide-jpa-datastore",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The configurations in this page can be set from several sources in the following order:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["the ",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/javase/tutorial/essential/environment/env.html",children:"operating system's environment variables"}),"; for instance, an environment variable can be set with\n",(0,r.jsx)(n.code,{children:'export OAUTH_ENABLED="true"'})]}),"\n",(0,r.jsxs)(n.li,{children:["the ",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html",children:"Java system properties"}),"; for example, a Java system property can be set using\n",(0,r.jsx)(n.code,{children:'System.setProperty("OAUTH_ENABLED", "true")'})]}),"\n",(0,r.jsxs)(n.li,{children:["a ",(0,r.jsx)(n.strong,{children:".properties"})," file placed under CLASSPATH. This file can be put under ",(0,r.jsx)(n.code,{children:"src/main/resources"})," source directory with\ncontents, for example, ",(0,r.jsx)(n.code,{children:"OAUTH_ENABLED=true"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"core-properties",children:"Core Properties"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The following configurations can be placed in the properties file called ",(0,r.jsx)(n.strong,{children:"application.properties"})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"MODEL_PACKAGE_NAME"}),": The fully qualified package name that contains a set of Elide JPA models"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"oauth-2",children:"OAuth 2"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The following configurations can be placed in the properties file called ",(0,r.jsx)(n.strong,{children:"oauth.properties"})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OAUTH_ENABLED"}),": Whether or not to enable ",(0,r.jsx)(n.a,{href:"https://paion-data.github.io/astraios/apidocs/com/paiondata/astraios/web/filters/OAuthFilter.html",children:"OAuthFilter"})," container request filter."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"JWKS_URL"}),": (",(0,r.jsxs)(n.strong,{children:["Required if ",(0,r.jsx)(n.code,{children:"OAUTH_ENABLED"})," is set to ",(0,r.jsx)(n.code,{children:"true"})]}),") A standard ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7517",children:"JWKS"})," URL that, on GET, returns a json\nobject such as"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "keys": [\n        {\n            "kty": "EC",\n            "use": "sig",\n            "kid": "eTERknhur9q8gisdaf_dfrqrgdfsg",\n            "alg": "ES384",\n            "crv": "P-384",\n            "x": "sdfrgHGYF...",\n            "y": "sdfuUIG&8..."\n        }\n    ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"elide-jpa-datastore",children:"(Elide) JPA DataStore"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The following configurations can be placed in the properties file called ",(0,r.jsx)(n.strong,{children:"jpadatastore.properties"})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DB_USER"}),": Persistence DB username (needs have both Read and Write permissions)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DB_PASSWORD"}),": The persistence DB user password."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DB_URL"}),': The persistence DB URL, such as "jdbc:mysql://localhost/elide?serverTimezone=UTC".']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DB_DRIVER"}),': The SQL DB driver class name, such as "com.mysql.jdbc.Driver".']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DB_DIALECT"}),': The SQL DB dialect name, such as "org.hibernate.dialect.MySQLDialect".']}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var r=s(7294);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);