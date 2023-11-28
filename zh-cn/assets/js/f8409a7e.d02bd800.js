"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[206],{9325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=t(5893),i=t(1151),r=t(4866),s=t(5162);const o={sidebar_position:1,title:"Getting Started"},l=void 0,d={id:"intro",title:"Getting Started",description:"Before proceeding, it is important to note that we DO NOT support Spring/Spring Boot paradigm. Astraios runs as a",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/astraios/zh-cn/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/astraios/tree/master/docs/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started"},sidebar:"tutorialSidebar",next:{title:"Features",permalink:"/astraios/zh-cn/docs/features"}},c={},u=[{value:"So You Want An API?",id:"so-you-want-an-api",level:2},{value:"Instantiating the Template",id:"instantiating-the-template",level:2},{value:"Creating Models",id:"creating-models",level:2},{value:"Loading Data Models",id:"loading-data-models",level:2},{value:"Running",id:"running",level:2},{value:"Writing Data",id:"writing-data",level:2},{value:"Inserting Data",id:"inserting-data",level:3},{value:"Looking at Our Data",id:"looking-at-our-data",level:3},{value:"Modifying Data",id:"modifying-data",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Before proceeding, it is important to note that ",(0,a.jsx)(n.strong,{children:"we DO NOT support Spring/Spring Boot paradigm"}),". Astraios runs as a\n",(0,a.jsx)(n.strong,{children:"Jetty/Jersey"})," webservice."]})}),"\n",(0,a.jsx)(n.h2,{id:"so-you-want-an-api",children:"So You Want An API?"}),"\n",(0,a.jsx)(n.admonition,{title:"Please make sure JDK 17, Maven, and Docker Engine have been installed \ud83e\udd17",type:"info",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["We offer ",(0,a.jsx)(n.a,{href:"setup#installing-java--maven-on-mac",children:"instruction"})," on how to install JDK 17 and Maven"]}),"\n",(0,a.jsxs)(n.li,{children:["We also offer ",(0,a.jsx)(n.a,{href:"setup#installing-docker-engine",children:"links to Docker Engine installation"})]}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"instantiating-the-template",children:"Instantiating the Template"}),"\n",(0,a.jsxs)(n.p,{children:["Please visit ",(0,a.jsx)(n.a,{href:"https://github.com/paion-data/astraios",children:"Astraios GitHub"})," and either"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["clone the repo with ",(0,a.jsx)(n.code,{children:"git clone https://github.com/paion-data/astraios.git"}),", or"]}),"\n",(0,a.jsx)(n.li,{children:"make it a template instantiation with our own webservice name by doing the following:"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"Error loading instantiation-1.png",src:t(328).Z+"",width:"3546",height:"927"}),"\n",(0,a.jsx)(n.img,{alt:"Error loading instantiation-2.png",src:t(7589).Z+"",width:"3550",height:"1682"})]}),"\n",(0,a.jsx)(n.h2,{id:"creating-models",children:"Creating Models"}),"\n",(0,a.jsxs)(n.p,{children:["Astraios models are some of the most important code in any webservice project. Our models are the view of our data that\nwe wish to expose. In this example we will be modeling a ",(0,a.jsx)(n.em,{children:"book"})," since most people have a high-level familiarity with\nbooks in life."]}),"\n",(0,a.jsxs)(n.p,{children:["Our ",(0,a.jsx)(n.em,{children:"Book"})," model looks something like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import com.yahoo.elide.annotation.Include;\n\nimport jakarta.persistence.Entity;\nimport jakarta.persistence.GeneratedValue;\nimport jakarta.persistence.Id;\nimport jakarta.persistence.Table;\n\n@Entity\n@Table(name = "Book")\n@Include(rootLevel = true, name = "book", description = "book entity", friendlyName = "book")\npublic class Book {\n\n    @Id\n    @GeneratedValue\n    public long id;\n\n    public String title = "";\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Models are usually packaged as ",(0,a.jsx)(n.strong,{children:"JAR"})," file in a separate Maven project. Here is a complete\n",(0,a.jsx)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-template-jpa-data-models",children:"example"})]})}),"\n",(0,a.jsxs)(n.p,{children:["In the end, run ",(0,a.jsx)(n.code,{children:"mvn clean install"})," to install our model"]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["From this point on, we assume ",(0,a.jsx)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-template-jpa-data-models",children:"this example data model"})," is used"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/QubitPi/jersey-webservice-template-jpa-data-models.git\ncd jersey-webservice-template-jpa-data-models\nmvn clean install\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"loading-data-models",children:"Loading Data Models"}),"\n",(0,a.jsxs)(n.p,{children:["So now we have some models, but without an API it is not very useful. Now we need to instruct our ",(0,a.jsx)(n.em,{children:"my-webservice"})," to\nload ",(0,a.jsx)(n.a,{href:"#creating-models",children:"data models"})," via Maven config file, i.e. ",(0,a.jsx)(n.strong,{children:"~/.m2/settings.xml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"\n          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0\n                      http://maven.apache.org/xsd/settings-1.0.0.xsd">\n\n    <profiles>\n        <profile>\n            <id>astraios-data-models</id>\n            <properties>\n                <model.package.jar.group.id>com.qubitpi</model.package.jar.group.id>\n                <model.package.jar.artifact.id>jersey-webservice-template-jpa-data-models</model.package.jar.artifact.id>\n                <model.package.jar.version>1.0.0</model.package.jar.version>\n            </properties>\n        </profile>\n    </profiles>\n\n    <activeProfiles>\n        <activeProfile>astraios-data-models</activeProfile>\n    </activeProfiles>\n</settings>\n'})}),"\n",(0,a.jsx)(n.h2,{id:"running",children:"Running"}),"\n",(0,a.jsxs)(n.p,{children:["With data models defined, can run ",(0,a.jsx)(n.em,{children:"my-webservice"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd my-webservice\nmvn clean package\nMODEL_PACKAGE_NAME=$MODEL_PACKAGE_NAME docker compose up --build --force-recreate\n"})}),"\n",(0,a.jsx)(n.h2,{id:"writing-data",children:"Writing Data"}),"\n",(0,a.jsx)(n.h3,{id:"inserting-data",children:"Inserting Data"}),"\n",(0,a.jsx)(n.p,{children:"We have defined our views on the database and exposed those views over HTTP. Next let's use cURL to put data in the\ndatabase."}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(s.Z,{value:"jsonapi",label:"JSON-API",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8080/v1/data/book \\\n    -H "Content-Type: application/vnd.api+json" \\\n    -H "Accept: application/vnd.api+json" \\\n    -d \'{"data": {"type": "book", "attributes": { "title": "Pride and Prejudice" }}}\'\n'})})}),(0,a.jsx)(s.Z,{value:"graphql",label:"GraphQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/v1/data" \\\n    -H "Content-Type: application/json" \\\n    -H "Accept: application/json"  \\\n    -d \'{ "query" : "mutation { book(op: UPSERT, data:{title: \\"Pride & Prejudice\\"}) { edges { node { id title } } } }" }\'\n'})})}),(0,a.jsx)(s.Z,{value:"graphql-query",label:"(GraphQL) Query",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  book(op: UPSERT, data:{title: "Pride & Prejudice"}) {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"When we run that cURL call we should see a bunch of JSON returned, that is our newly inserted object!"}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(s.Z,{value:"jsonapi",label:"JSON-API",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n   "data":{\n      "type":"book",\n      "id":"1",\n      "attributes":{\n         "title":"Pride and Prejudice"\n      }\n   }\n}\n'})})}),(0,a.jsx)(s.Z,{value:"graphql",label:"GraphQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n   "data":{\n      "book":{\n         "edges":[\n            {\n               "node":{\n                  "id":"4",\n                  "title":"Pride & Prejudice"\n               }\n            }\n         ]\n      }\n   }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"looking-at-our-data",children:"Looking at Our Data"}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{value:"browser",label:"Web Browser",default:!0,children:[(0,a.jsxs)(n.p,{children:["Simply open up our favorite browser and hit ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"http://localhost:8080/v1/data/book",children:"http://localhost:8080/v1/data/book"})})]}),(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["It is recommended to view result with some\n",(0,a.jsx)(n.a,{href:"https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa",children:"JSON formatter"})," browser\nextension for better viewing experience"]})})]}),(0,a.jsx)(s.Z,{value:"json-api",label:"JSON-API",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl "http://localhost:8080/v1/data/book"\n'})})}),(0,a.jsx)(s.Z,{value:"graphql",label:"GraphQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/v1/data" \\\n    -H "Content-Type: application/json" \\\n    -H "Accept: application/json"  \\\n    -d \'{ "query" : "{ book { edges { node { id title } } } }" }\'\n'})})}),(0,a.jsx)(s.Z,{value:"graphql-query",label:"(GraphQL) Query",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"{\n  book {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"modifying-data",children:"Modifying Data"}),"\n",(0,a.jsx)(n.p,{children:"Notice that, when we created it, we did not set any of the attributes of our new book record. Updating our data to help\nour users is just as easy as it is to add new data. Let's update our model with the following cURL call."}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(s.Z,{value:"jsonapi",label:"JSON-API",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH http://localhost:8080/v1/data/book/1 \\\n    -H "Content-Type: application/vnd.api+json" \\\n    -H "Accept: application/vnd.api+json" \\\n    -d \'{"data": {"type": "book", "id": "1", "attributes": { "title": "Emma" }}}\'\n'})})}),(0,a.jsx)(s.Z,{value:"graphql",label:"GraphQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/v1/data" \\\n    -H "Content-Type: application/json" \\\n    -H "Accept: application/json"  \\\n    -d \'{ "query" : "mutation { book(op: UPSERT, data: {id: \\"1\\", title: \\"Emma\\"}) { edges { node { id title } } } }" }\'\n'})})}),(0,a.jsx)(s.Z,{value:"graphql-query",label:"(GraphQL) Query",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  book(op: UPSERT, data: {id: "1", title: "Emma"}) {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var a=t(6010);const i={tabItem:"tabItem_Ymn6"};var r=t(5893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,s),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(7294),i=t(6010),r=t(2466),s=t(6550),o=t(469),l=t(1980),d=t(7392),c=t(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[d,u]=m({queryString:t,groupId:i}),[g,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Nk)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),b=(()=>{const e=d??g;return p({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function v(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==a&&(d(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...r,className:(0,i.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(f,{...e,...n})]})}function y(e){const n=(0,j.Z)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(n))}},328:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/instantiation-1-3eebb23ee267bd1c83058b51788498e3.png"},7589:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/instantiation-2-f29299127b714ee6fcd3de442e3ded49.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var a=t(7294);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);