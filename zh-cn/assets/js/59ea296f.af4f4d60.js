"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[635],{3162:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(5893),t=n(1151);const i={sidebar_position:2,title:"Features"},o=void 0,a={id:"elide/features",title:"Features",description:"The following guide provides an overview of Elide features and links to their respective documentation.",source:"@site/docs/elide/features.md",sourceDirName:"elide",slug:"/elide/features",permalink:"/astraios/zh-cn/docs/elide/features",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/astraios/tree/master/docs/docs/elide/features.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Features"},sidebar:"tutorialSidebar",previous:{title:"JPA through Elide Middleware",permalink:"/astraios/zh-cn/docs/elide/"},next:{title:"Data Models",permalink:"/astraios/zh-cn/docs/elide/data-model"}},l={},d=[{value:"Common API Features",id:"common-api-features",level:2},{value:"Data Modeling Features",id:"data-modeling-features",level:2},{value:"JSON-API Features",id:"json-api-features",level:2},{value:"GraphQL Features",id:"graphql-features",level:2},{value:"Persistence Features",id:"persistence-features",level:2},{value:"Analytic Features",id:"analytic-features",level:2},{value:"Operability Features",id:"operability-features",level:2}];function c(e){const s={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"The following guide provides an overview of Elide features and links to their respective documentation."}),"\n",(0,r.jsx)(s.h2,{id:"common-api-features",children:"Common API Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Rich Filter Support"})," - Support for complex filter predicates including conjunction (logical and), disjunction\n(logical OR) and parenthetic expressions for both ",(0,r.jsx)(s.a,{href:"graphql#filtering",children:"GraphQL"})," and ",(0,r.jsx)(s.a,{href:"jsonapi#filtering",children:"JSON-API"}),".\nSupport for filtering models on fields nested in other models (relationship traversal) or attribute object\nhierarchies (complex attribute types)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Collection Sorting"})," - Sort collections by one or more fields in the current or related models in\n",(0,r.jsx)(s.a,{href:"graphql#sorting",children:"GraphQL"})," and ",(0,r.jsx)(s.a,{href:"jsonapi#sorting",children:"JSON-API"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Pagination"})," - Support to paginate collections and request the total number of pages or records in\n",(0,r.jsx)(s.a,{href:"graphql#pagination",children:"GraphQL"})," and ",(0,r.jsx)(s.a,{href:"jsonapi#pagination",children:"JSON-API"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Type Coercion"})," - Support to ",(0,r.jsx)(s.a,{href:"clientapis#type-coercion",children:"type coerce"})," fields between the API representation and\nthe model representation by registering one's own custom data type serializers/deserializers."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Synchronous or Asynchronous API"})," - Elide supports both synchronous and asynchronous APIs for short and long-running\nqueries."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"data-modeling-features",children:"Data Modeling Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Lifecycle Hooks"})," - Register ",(0,r.jsx)(s.a,{href:"data-model#lifecycle-hooks",children:"custom functions & business logic"})," that get invoked\nwhenever our data model is read or manipulated."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Security"})," - Assign ",(0,r.jsx)(s.a,{href:"security",children:"permission rules"})," to fields and entities in our data model using a custom security\nDSL.  Bind rules to in-memory functions or security filters that are pushed to the persistence layer."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Computed Attributes & Relationships"})," - Define ",(0,r.jsx)(s.a,{href:"data-model#computed-attributes",children:"custom fields and relationships"}),"\nthat are computed at query time."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"API Versioning"})," - ",(0,r.jsx)(s.a,{href:"data-model#api-versions",children:"Version our models"})," to support schema evolution without breaking our\nclient contracts."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Composite Identifiers"})," - Support both simple and complex ",(0,r.jsx)(s.a,{href:"data-model#model-identifiers",children:"model identifiers"}),"\nincluding compound types."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"json-api-features",children:"JSON-API Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"OpenAPI"})," - Elide can automatically generate ",(0,r.jsx)(s.a,{href:"openapi",children:"OpenAPI documentation"})," for Elide APIS for schema\nintrospection."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Test DSL"})," - Elide includes a ",(0,r.jsx)(s.a,{href:"test",children:"test DSL"})," that works with ",(0,r.jsx)(s.a,{href:"https://rest-assured.io/",children:"Rest Assured"})," for writing\nreadable integration tests."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"graphql-features",children:"GraphQL Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"GraphQL Schemas"})," - The GraphQL specification includes type introspection that integrates with tools like ",(0,r.jsx)(s.a,{href:"https://github.com/graphql/graphiql",children:"Graphiql"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Subscription Suport"})," - Elide supports ",(0,r.jsx)(s.a,{href:"subscriptions",children:"model driven subscriptions"})," backed by any JMS message broker\nthat can be consumed over websockets."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Test DSL"})," - Elide includes a ",(0,r.jsx)(s.a,{href:"test",children:"test DSL"})," that works with ",(0,r.jsx)(s.a,{href:"https://rest-assured.io/",children:"Rest Assured"})," for\nwriting readable integration tests."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"persistence-features",children:"Persistence Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"JPA Store"})," - The ",(0,r.jsx)(s.a,{href:"datastores#jpa-store",children:"JPA store"})," persists Elide models decorated with JPA annotations."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"In-Memory Store"})," - The ",(0,r.jsx)(s.a,{href:"datastores#in-memory-store",children:"in-memory store"})," persists Elide models locally in the server's\nmemory."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Search Store"})," - The ",(0,r.jsx)(s.a,{href:"datastores#search-store",children:"search store"})," provides full text search on annotated fields in Elide\nmodels.  It works in conjunction with the JPA store."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Multiple Stores"})," - Elide services can be configured with ",(0,r.jsx)(s.a,{href:"datastores#multiple-stores",children:"multiple data stores"})," - each\nmanaging a different set of models."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Custom Stores"})," - Elide can be extended to talk to web services or other persistence layers by writing\n",(0,r.jsx)(s.a,{href:"datastores#custom-stores",children:"custom stores"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Server Side Filtering, Sorting, & Pagination"})," - For custom stores that cannot filter, sort, or paginate natively,\nElide can optionally perform these functions on the server."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"analytic-features",children:"Analytic Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Analytic Query Support"})," - Elide's ",(0,r.jsx)(s.a,{href:"analytics",children:"aggregation store"})," exposes read-only models that support data\nanalytic queries.  Model attributes represent either metrics (for aggregating, filtering, and sorting) and\ndimensions (for grouping, filtering, and sorting)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Virtual Semantic Layer"})," - Analytic models are configured with a\n",(0,r.jsx)(s.a,{href:"analytics.html#model-configuration",children:"semantic modeling language"})," that allows non-developers the ability to define\nmetrics and dimensions by writing templated native SQL fragments. The fragments are assembled into complete SQL\nstatements at query time."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Caching"})," - The aggregation store includes a ",(0,r.jsx)(s.a,{href:"performance#aggregationdatastore-cache",children:"customizable cache"}),". The\ncache supports time and version based strategies for expunging stale data."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Async API"})," - Elide includes an asynchronous API for long-running queries on analytic models."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Data Export"})," - Elide includes a data export API for streaming large query results in JSON or CSV formats."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"operability-features",children:"Operability Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Logging"})," - Elide supports rich ",(0,r.jsx)(s.a,{href:"audit",children:"native logging"})," for query generation and security rules."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var r=n(7294);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);