"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[584],{5627:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=a(5893),r=a(1151),o=a(4866),i=a(5162);const s={sidebar_position:5,title:"Data Stores"},l=void 0,d={id:"elide/datastores",title:"Data Stores",description:"[//]: # (Copyright Paion Data)",source:"@site/docs/elide/datastores.mdx",sourceDirName:"elide",slug:"/elide/datastores",permalink:"/docs/elide/datastores",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/astraios/tree/master/docs/docs/elide/datastores.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Data Stores"},sidebar:"tutorialSidebar",previous:{title:"Analytic Query Support",permalink:"/docs/elide/analytics"},next:{title:"Logging & Audit",permalink:"/docs/elide/audit"}},c={},u=[{value:"Included Stores",id:"included-stores",level:2},{value:"JPA Data Store",id:"jpa-data-store",level:3},{value:"Multiplex Data Store",id:"multiplex-data-store",level:3},{value:"Noop Data Store",id:"noop-data-store",level:3},{value:"Search Data Store",id:"search-data-store",level:3},{value:"Aggregation Data Store",id:"aggregation-data-store",level:3},{value:"Overriding the Store",id:"overriding-the-store",level:2},{value:"Custom Stores",id:"custom-stores",level:2},{value:"Enabling In-Memory Filtering, Sorting, or Pagination",id:"enabling-in-memory-filtering-sorting-or-pagination",level:3},{value:"Multiple Stores",id:"multiple-stores",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"A data store is responsible for:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Reading and writing entity models to/from a persistence layer."}),"\n",(0,n.jsx)(t.li,{children:"Providing transactions that make all persistence operations atomic in a single request."}),"\n",(0,n.jsx)(t.li,{children:"Implementing filtering, sorting, and pagination."}),"\n",(0,n.jsx)(t.li,{children:"Declaring the entities it manages persistence for."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If a data store is unable to fully implement filtering, sorting, or pagination, it can instead rely on the Elide\nframework to perform these functions in memory.  By default, however, Elide pushes these responsibilities to the store."}),"\n",(0,n.jsx)(t.h2,{id:"included-stores",children:"Included Stores"}),"\n",(0,n.jsx)(t.p,{children:"Elide comes bundled with a number of data stores:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Hashmap Data Store - Data is persisted in a hash table on the JVM heap."}),"\n",(0,n.jsx)(t.li,{children:"JPA Data Store - A data store that can map operations on a data model to an underlying relational database (ORM) or\nnosql persistence layer (OGM). The JPA Data Store can work with any JPA provider."}),"\n",(0,n.jsx)(t.li,{children:"Multiplex Data Store - A multiplex store that delegates persistence to different underlying stores depending on the\ndata model."}),"\n",(0,n.jsx)(t.li,{children:"Noop Data Store - A store which does nothing, allowing business logic in computed attributes and life cycle hooks to\nentirely implement CRUD operations on the model."}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/yahoo/elide/tree/master/elide-datastore/elide-datastore-search",children:"Search Data Store"})," - A store\nwhich provides full text search on text fields while delegating other requests to another provided store."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"analytics",children:"Aggregation Data Store"})," - A store which provides computation of groupable measures (similar to SQL group\nby). The aggregation store has custom annotations that map an Elide model to native SQL queries against a JDBC\ndatabase."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The Hashmap Data Store is included as part of ",(0,n.jsx)(t.code,{children:"elide-core"})," while other data stores can be included through the\nfollowing artifact dependencies:"]}),"\n",(0,n.jsx)(t.h3,{id:"jpa-data-store",children:"JPA Data Store"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.yahoo.elide</groupId>\n    <artifactId>elide-datastore-jpa</artifactId>\n    <version>${elide.version}</version>\n</dependency>\n"})}),"\n",(0,n.jsx)(t.h3,{id:"multiplex-data-store",children:"Multiplex Data Store"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.yahoo.elide</groupId>\n    <artifactId>elide-datastore-multiplex</artifactId>\n    <version>${elide.version}</version>\n</dependency>\n"})}),"\n",(0,n.jsx)(t.h3,{id:"noop-data-store",children:"Noop Data Store"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.yahoo.elide</groupId>\n    <artifactId>elide-datastore-noop</artifactId>\n    <version>${elide.version}</version>\n</dependency>\n"})}),"\n",(0,n.jsx)(t.h3,{id:"search-data-store",children:"Search Data Store"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.yahoo.elide</groupId>\n    <artifactId>elide-datastore-search</artifactId>\n    <version>${elide.version}</version>\n</dependency>\n"})}),"\n",(0,n.jsx)(t.h3,{id:"aggregation-data-store",children:"Aggregation Data Store"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.yahoo.elide</groupId>\n    <artifactId>elide-datastore-aggregation</artifactId>\n    <version>${elide.version}</version>\n</dependency>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"overriding-the-store",children:"Overriding the Store"}),"\n",(0,n.jsxs)(t.p,{children:["To change the store, one of two possible functions should be overridden depending on whether the ",(0,n.jsx)(t.code,{children:"AggregationDataStore"}),"\nis enabled:"]}),"\n",(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(i.Z,{value:"AggregationDataStore-disabled",label:"AggregationDataStore disabled",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"/**\n * Initializes the Elide {@link DataStore} service with the specified {@link EntityManagerFactory}.\n *\n * @param entityManagerFactory  An object used to initialize JPA\n *\n * @return a new instance\n */\n@NotNull\nprivate DataStore buildDataStore(@NotNull final EntityManagerFactory entityManagerFactory) {\n    return new JpaDataStore(\n            entityManagerFactory::createEntityManager,\n            em -> new NonJtaTransaction(em, TXCANCEL),\n            entityManagerFactory::getMetamodel\n    );\n}\n"})})}),(0,n.jsx)(i.Z,{value:"AggregationDataStore-enabled",label:"AggregationDataStore enabled",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"/**\n * Gets the DataStore for Elide.\n *\n * @param metaDataStore MetaDataStore object.\n * @param aggregationDataStore AggregationDataStore object.\n * @param entityManagerFactory EntityManagerFactory object.\n * @return DataStore object initialized.\n */\n@Override\npublic DataStore getDataStore(MetaDataStore metaDataStore, AggregationDataStore aggregationDataStore,\n        EntityManagerFactory entityManagerFactory) {\n    DataStore jpaDataStore = new JpaDataStore(\n            () -> { return entityManagerFactory.createEntityManager(); },\n            (em) -> { return new NonJtaTransaction(em, ElideStandaloneSettings.TXCANCEL); });\n\n    DataStore dataStore = new MultiplexManager(jpaDataStore, metaDataStore, aggregationDataStore);\n\n    return dataStore;\n}\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"custom-stores",children:"Custom Stores"}),"\n",(0,n.jsxs)(t.p,{children:["Custom stores can be written by implementing the ",(0,n.jsx)(t.code,{children:"DataStore"})," and ",(0,n.jsx)(t.code,{children:"DataStoreTransaction"})," interfaces."]}),"\n",(0,n.jsx)(t.h3,{id:"enabling-in-memory-filtering-sorting-or-pagination",children:"Enabling In-Memory Filtering, Sorting, or Pagination"}),"\n",(0,n.jsx)(t.p,{children:"If a Data Store is unable to fully implement sorting, filtering, or pagination, the Elide framework can perform\nthese functions in-memory instead."}),"\n",(0,n.jsxs)(t.p,{children:["The Data Store Transaction can inform Elide of its capabilities (or lack thereof) by returning a ",(0,n.jsx)(t.code,{children:"DataStoreIterable"})," for\nany collection loaded:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"/**\n * Returns data loaded from a DataStore.   Wraps an iterable but also communicates to Elide\n * if the framework needs to filter, sort, or paginate the iterable in memory before returning to the client.\n * @param <T> The type being iterated over.\n */\npublic interface DataStoreIterable<T> extends Iterable<T> {\n\n    /**\n     * Returns the underlying iterable.\n     * @return The underlying iterable.\n     */\n    Iterable<T> getWrappedIterable();\n\n\n    /**\n     * Whether the iterable should be filtered in memory.\n     * @return true if the iterable needs sorting in memory.  false otherwise.\n     */\n    default boolean needsInMemoryFilter() {\n        return false;\n    }\n\n    /**\n     * Whether the iterable should be sorted in memory.\n     * @return true if the iterable needs sorting in memory.  false otherwise.\n     */\n    default boolean needsInMemorySort() {\n        return false;\n    }\n\n    /**\n     * Whether the iterable should be paginated in memory.\n     * @return true if the iterable needs pagination in memory.  false otherwise.\n     */\n    default boolean needsInMemoryPagination() {\n        return false;\n    }\n}\n\n"})}),"\n",(0,n.jsx)(t.h2,{id:"multiple-stores",children:"Multiple Stores"}),"\n",(0,n.jsx)(t.p,{children:"A common pattern in Elide is the need to support multiple data stores. Typically, one data store manages most models,\nbut some models may require a different persistence backend or have other needs to specialize the behavior of the store."}),"\n",(0,n.jsxs)(t.p,{children:["The Multiplex Data Store (",(0,n.jsx)(t.code,{children:"MultiplexManager"}),") in Elide manages multiple stores - delegating calls to the appropriate\nstore which is responsible for a particular model. By default it will apply compensating transactions to undo failures\nif multiple stores are involved in the multiplex transaction and an error occurs after transactions to some of the\nstores were already committed."]}),"\n",(0,n.jsxs)(t.p,{children:["To set up the Multiplex Data Store, override the ",(0,n.jsx)(t.code,{children:"getDataStore"})," function:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"/**\n * Gets the DataStore for elide when aggregation store is disabled.\n * @param entityManagerFactory EntityManagerFactory object.\n * @return DataStore object initialized.\n */\n@Override\npublic DataStore getDataStore(EntityManagerFactory entityManagerFactory) {\n    //Store 1 manages Book, Author, and Publisher\n    DataStore store1 = new JpaDataStore(\n            () -> { return entityManagerFactory.createEntityManager(); },\n            (em) -> { return new NonJtaTransaction(em, ElideStandaloneSettings.TXCANCEL); },\n            Book.class, Author.class, Publisher.class\n    );\n\n    //Store 2 is a custom store that manages Manufacturer\n    DataStore store2 = new MyCustomDataStore(...);\n\n    //Create the new multiplex store...\n    return new MultiplexManager(store1, store2);\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>i});a(7294);var n=a(6010);const r={tabItem:"tabItem_Ymn6"};var o=a(5893);function i(e){let{children:t,hidden:a,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>j});var n=a(7294),r=a(6010),o=a(2466),i=a(6550),s=a(469),l=a(1980),d=a(7392),c=a(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[d,u]=g({queryString:a,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=d??m;return p({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(5893);function v(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),r=s[a].value;r!==n&&(d(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...o,className:(0,r.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function S(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(x,{...e,...t})]})}function j(e){const t=(0,f.Z)();return(0,y.jsx)(S,{...e,children:u(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>i});var n=a(7294);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);