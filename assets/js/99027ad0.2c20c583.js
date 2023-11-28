"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[607],{7001:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=i(5893),t=i(1151),r=i(4866),a=i(5162);const o={sidebar_position:4,title:"GraphQL Subscriptions"},l=void 0,c={id:"elide/clientapis/subscriptions",title:"GraphQL Subscriptions",description:"Decorate an Elide Model",source:"@site/docs/elide/clientapis/subscriptions.mdx",sourceDirName:"elide/clientapis",slug:"/elide/clientapis/subscriptions",permalink:"/astraios/docs/elide/clientapis/subscriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/astraios/tree/master/docs/docs/elide/clientapis/subscriptions.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"GraphQL Subscriptions"},sidebar:"tutorialSidebar",previous:{title:"GraphQL Queries & Mutations",permalink:"/astraios/docs/elide/clientapis/graphql"},next:{title:"Async API",permalink:"/astraios/docs/elide/clientapis/asyncapi"}},u={},d=[{value:"Decorate an Elide Model",id:"decorate-an-elide-model",level:2},{value:"Running Queries",id:"running-queries",level:2},{value:"Simple Query",id:"simple-query",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Security",id:"security",level:2},{value:"Configuration",id:"configuration",level:2},{value:"JMS Message Broker",id:"jms-message-broker",level:3},{value:"Global Settings",id:"global-settings",level:3},{value:"Authentication",id:"authentication",level:2},{value:"JMS Message Settings",id:"jms-message-settings",level:2},{value:"Custom Subscriptions",id:"custom-subscriptions",level:2},{value:"Recommendations",id:"recommendations",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"decorate-an-elide-model",children:"Decorate an Elide Model"}),"\n",(0,s.jsxs)(n.p,{children:["A subscription can be made from any Elide model simply by annotating it with ",(0,s.jsx)(n.code,{children:"Subscription"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'@Subscription\n@Include(name = "group")\npublic class ArtifactGroup {\n\n    @Id\n    public String name;\n\n    @SubscriptionField\n    public String commonName;\n\n    @SubscriptionField\n    public String description;\n\n    @SubscriptionField\n    @OneToMany(mappedBy = "group")\n    public List<ArtifactProduct> products;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The subscription annotation takes zero or more ",(0,s.jsx)(n.em,{children:"operations"})," which correspond to different topics."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"@Include\n@Subscription(operation = { CREATE, UPDATE, DELETE });\npublic class Book {\n\n    ...\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Whenever a model is manipulated (created, deleted, or updated), elide will post a JSON serialized model to a JMS topic\nfor that operation. Only the fields decorated with ",(0,s.jsx)(n.code,{children:"@SubscriptionField"})," will be serialized (and hence available to be\nconsumed in the subscription). It is also possible to define ",(0,s.jsx)(n.a,{href:"#custom-subscriptions",children:"custom operations"})," that are\ntriggered by our service business logic."]}),"\n",(0,s.jsx)(n.h2,{id:"running-queries",children:"Running Queries"}),"\n",(0,s.jsxs)(n.p,{children:["Elide subscriptions are implemented using websockets. Websockets require a protocol to send and receive messages. Elide\nsupports the ",(0,s.jsx)(n.a,{href:"https://github.com/enisdenjo/graphql-ws",children:"graphql-ws"})," protocol.  This protocol works both with the\n",(0,s.jsx)(n.a,{href:"https://www.apollographql.com/docs/react/data/subscriptions/",children:"Apollo GraphQL"})," client as well as\n",(0,s.jsx)(n.a,{href:"https://github.com/graphql/graphiql",children:"Graphiql"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Elide's subscription API is similar to its API for queries and mutations, but there are some notable differences:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Each Elide model annotated with ",(0,s.jsx)(n.code,{children:"Subscription"})," is a root field in the GraphQL schema."]}),"\n",(0,s.jsxs)(n.li,{children:["Each root model supports a topic (ADDED, DELETED, UPDATED) variable and an optional ",(0,s.jsx)(n.a,{href:"#filtering",children:"filter variable"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Responses are not wrapped in 'edges' and 'node' because there is no pagination."}),"\n",(0,s.jsx)(n.li,{children:"The API is read only."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"simple-query",children:"Simple Query"}),"\n",(0,s.jsx)(n.p,{children:"Query for newly added 'groups' returning their name and description:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"subscription { group(topic : ADDED) { name description } }\n"})}),"\n",(0,s.jsx)(n.p,{children:"The response will look like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "group": {\n            "name": "new group",\n            "description": "foo"\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"If there are errors, they will get reported in an errors field:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "data":{\n        "group":{\n            "name":"new group",\n            "commonName":"",\n            "nope":null\n        }\n    },\n    "errors":[\n        {\n            "message":"Exception while fetching data (/group/nope) : ReadPermission Denied",\n            "locations":[\n                {\n                    "line":2,\n                    "column":53\n                }\n            ],\n            "path":[\n                "group",\n                "nope"\n            ],\n            "extensions":{\n                "classification":"DataFetchingException"\n            }\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"filtering",children:"Filtering"}),"\n",(0,s.jsxs)(n.p,{children:["All Elide subscriptions support RSQL filtering that is identical to\n",(0,s.jsx)(n.a,{href:"graphql#filtering",children:"filtering for queries and mutations"}),". The following query filters artifact group creation events by\nthe name 'com.yahoo.elide':"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"subscription { group(topic : ADDED, filter: \"name='com.yahoo.elide'\") { name description } }\n"})}),"\n",(0,s.jsx)(n.h2,{id:"security",children:"Security"}),"\n",(0,s.jsxs)(n.p,{children:["Elide honors ",(0,s.jsx)(n.a,{href:"security#read",children:"ReadPermission annotations"})," for all subscription fields in the model. Subscriptions are\nautomatically filtered by any ",(0,s.jsx)(n.a,{href:"security#filter-expression-checks",children:"FilterExpressionChecks"}),". Client requests to\nunauthorized fields will result in errors returned in the subscription response payload."]}),"\n",(0,s.jsxs)(n.p,{children:["See the section on ",(0,s.jsx)(n.a,{href:"#authentication",children:"Authentication"})," for details on how to build an Elide user principal."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.h3,{id:"jms-message-broker",children:"JMS Message Broker"}),"\n",(0,s.jsx)(n.p,{children:"Elide leverages JMS to post and consume subscription messages."}),"\n",(0,s.jsx)(n.h3,{id:"global-settings",children:"Global Settings"}),"\n",(0,s.jsx)(n.p,{children:"Elide subscriptions support the following, global configuration settings:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"enabled"})," - Turn on/off the subscription websocket."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"path"})," - The HTTP root path of the subscription websocket."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"idleTimeout"})," - How long in milliseconds the websocket can remain idle before the server closes it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"maxMessageSize"})," - Maximum size in bytes of any message sent to the websocket (or it will be closed in error)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"maxSubscriptions"})," - The maximum number of concurrent subscriptions per websocket."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"connectionTimeout"})," - The time in milliseconds for the client to initiate a connection handshake before the server\ncloses the socket."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsxs)(n.p,{children:["There is no well-defined standard for how user credentials are passed via websockets. Instead, Elide allows developers\nto provide a function that maps a\n",(0,s.jsx)(n.a,{href:"https://jakarta.ee/specifications/websocket/2.0/apidocs/jakarta/websocket/session",children:"JSR-356 Session"})," to and Elide\n",(0,s.jsx)(n.a,{href:"security#user",children:"User object"}),". The session contains the HTTP request headers, path parameter, query parameters, and\nwebsocket parameters that can be leveraged to construct a user principal."]}),"\n",(0,s.jsx)(n.h2,{id:"jms-message-settings",children:"JMS Message Settings"}),"\n",(0,s.jsx)(n.p,{children:"It is possible to override some of the default settings for messages published to JMS topics"}),"\n",(0,s.jsx)(n.h2,{id:"custom-subscriptions",children:"Custom Subscriptions"}),"\n",(0,s.jsxs)(n.p,{children:["While Elide makes it easy to subscribe to model manipulations (create, update, and delete), it is also possible to add a\nsubscription topic for another event tied to our business logic. A custom subscription is simply an Elide model\nannotated with the ",(0,s.jsx)(n.code,{children:"@Subscription"})," annotation that explicitly sets the list of operations to empty:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"@Include\n@Subscription(operations = {}) //This is a custom subscription\npublic class Chat {\n\n    @Id\n    long id;\n\n    @SubscriptionField\n    String message;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To publish to our subscription, we can create a lifecycle hook on another model that posts ",(0,s.jsx)(n.code,{children:"Chat"})," messages."]}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(a.Z,{value:"ChatBot.java",label:"ChatBot.java",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"@Include\n@LifeCycleHookBinding(\n        hook = ChatBotCreateHook.class,\n        operation = LifeCycleHookBinding.Operation.CREATE,\n        phase = LifeCycleHookBinding.TransactionPhase.POSTCOMMIT\n)\npublic class ChatBot {\n\n    @Id\n    long id;\n\n    String name;\n}\n"})})}),(0,s.jsx)(a.Z,{value:"ChatBotCreateHook.java",label:"ChatBotCreateHook.java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'public class ChatBotCreateHook implements LifeCycleHook<ChatBot> {\n\n    @Inject\n    ConnectionFactory connectionFactory;\n\n    @Override\n    public void execute(\n            LifeCycleHookBinding.Operation operation,\n            LifeCycleHookBinding.TransactionPhase phase,\n            ChatBot bot,\n            RequestScope requestScope,\n            Optional<ChangeSpec> changes\n    ) {\n        NotifyTopicLifeCycleHook<Chat> publisher = new NotifyTopicLifeCycleHook<>(\n                connectionFactory,\n                new ObjectMapper(),\n                JMSContext::createProducer\n        );\n\n        publisher.publish(new Chat(1, "Hello!"), CHAT);\n        publisher.publish(new Chat(2, "How is your day?"), CHAT);\n        publisher.publish(new Chat(3, "My name is " + bot.getName()), CHAT);\n    }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"recommendations",children:"Recommendations"}),"\n",(0,s.jsx)(n.p,{children:"It is highly recommended that subscriptions run as a separate service. Because websockets are long lived and stateful,\nthey impose different resource constraints and performance characteristics from queries and mutations."}),"\n",(0,s.jsx)(n.p,{children:"Running websockets as a standalone service is as simple as disabling JSON-API and GraphQL HTTP endpoints:"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},5162:(e,n,i)=>{i.d(n,{Z:()=>a});i(7294);var s=i(6010);const t={tabItem:"tabItem_Ymn6"};var r=i(5893);function a(e){let{children:n,hidden:i,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,a),hidden:i,children:n})}},4866:(e,n,i)=>{i.d(n,{Z:()=>w});var s=i(7294),t=i(6010),r=i(2466),a=i(6550),o=i(469),l=i(1980),c=i(7392),u=i(12);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:i}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:i,attributes:s,default:t}}=e;return{value:n,label:i,attributes:s,default:t}}))}(i);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function h(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:i}=e;const t=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function b(e){const{defaultValue:n,queryString:i=!1,groupId:t}=e,r=p(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,d]=m({queryString:i,groupId:t}),[b,g]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,u.Nk)(i);return[t,(0,s.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:t}),f=(()=>{const e=c??b;return h({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=i(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=i(5893);function j(e){let{className:n,block:i,selectedValue:s,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const n=e.currentTarget,i=l.indexOf(n),t=o[i].value;t!==s&&(c(n),a(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":i},n),children:o.map((e=>{let{value:n,label:i,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,t.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===n}),children:i??n},n)}))})}function v(e){let{lazy:n,children:i,selectedValue:t}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var s=i(7294);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);