"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[484],{7857:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var i=r(5893),s=r(1151);const t={sidebar_position:1,title:"Client APIs",description:"JSON API and GraphQL Client APIs"},o=void 0,d={id:"elide/clientapis/index",title:"Client APIs",description:"JSON API and GraphQL Client APIs",source:"@site/docs/elide/clientapis/index.md",sourceDirName:"elide/clientapis",slug:"/elide/clientapis/",permalink:"/zh-cn/docs/elide/clientapis/",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/astraios/tree/master/docs/docs/elide/clientapis/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Client APIs",description:"JSON API and GraphQL Client APIs"},sidebar:"tutorialSidebar",previous:{title:"Client APIs",permalink:"/zh-cn/docs/category/client-apis"},next:{title:"JSON API",permalink:"/zh-cn/docs/elide/clientapis/jsonapi"}},l={},a=[{value:"Supported APIs",id:"supported-apis",level:2},{value:"Common Concepts",id:"common-concepts",level:2},{value:"API Versioning",id:"api-versioning",level:3},{value:"Type Coercion",id:"type-coercion",level:3},{value:"User Type Registration",id:"user-type-registration",level:4},{value:"Date Coercion",id:"date-coercion",level:4},{value:"Elide Library Configuration",id:"elide-library-configuration",level:5},{value:"UUID Coercion",id:"uuid-coercion",level:4},{value:"Enum Coercion",id:"enum-coercion",level:4},{value:"Custom Error Responses",id:"custom-error-responses",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"supported-apis",children:"Supported APIs"}),"\n",(0,i.jsx)(n.p,{children:"Elide supports the two most widely adopted standards for graph APIs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"jsonapi",children:"JSON-API"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"graphql",children:"GraphQL"})}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Graph APIs are an evolution of web service APIs that serve and manipulate data for mobile & web applications. They have\na number of characteristics that make them well suited to this task:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Most notably, they present a ",(0,i.jsx)(n.strong,{children:"data model"})," as an entity relationship graph and an ",(0,i.jsx)(n.strong,{children:"accompanying schema"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A well-defined model allows for a consistent view of the data and a centralized way to manipulate an instance of\nthe model or to cache it."}),"\n",(0,i.jsx)(n.li,{children:"The schema provides powerful introspection capabilities that can be used to build tools to help developers\nunderstand and navigate the model."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The API allows the client to ",(0,i.jsx)(n.strong,{children:"fetch or mutate as much or as little information in single roundtrip"})," between client\nand server. This also shrinks payload sizes and simplifies the process of schema evolution."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["There is a ",(0,i.jsx)(n.strong,{children:"well-defined standard"})," for the API that fosters a community approach to development of supporting\ntools & best practices."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"common-concepts",children:"Common Concepts"}),"\n",(0,i.jsx)(n.p,{children:"All Elide APIs share a common set of concepts:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The API exposes a set of related data models as an entity relationship graph."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"All models have a unique identifier."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Models have attributes and relationships."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Relationships are links to other models. They can be traversed in the API. If the relationship represents a\ncollection, it can be sorted, filtered, and paginated."}),"\n",(0,i.jsx)(n.li,{children:"Attributes are properties of the model. They can be simple or complex (objects or collections)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Filtering, sorting, and pagination share common languages and expressions."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Text and numeric representation of complex attributes is common."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"API versioning works in the same manner."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Custom error responses have the same configuration mechanism."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"api-versioning",children:"API Versioning"}),"\n",(0,i.jsxs)(n.p,{children:["Elide allows multiple versions of the same models to coexist and for clients to request a particular instance. Elide\nJAX-RS endpoints support an API version that can be set to match the model annotation (",(0,i.jsx)(n.code,{children:"@ApiVersion"}),") version."]}),"\n",(0,i.jsxs)(n.p,{children:["If no version is specified by the client, Elide only exposes the models that lack an ",(0,i.jsx)(n.code,{children:"@ApiVersion"})," annotation."]}),"\n",(0,i.jsxs)(n.p,{children:["OpenAPI endpoints (JSON-API) and GraphQL schemas are also scoped by the ",(0,i.jsx)(n.code,{children:"ApiVersion"})," header. They only return the\nschema corresponding to the requested API version."]}),"\n",(0,i.jsx)(n.p,{children:"Elide includes implementations for the following API Versioning Strategies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Path"}),"\n",(0,i.jsx)(n.li,{children:"Header"}),"\n",(0,i.jsx)(n.li,{children:"Parameters"}),"\n",(0,i.jsx)(n.li,{children:"Media Type Profile"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This can be customized by implementing and registering a ",(0,i.jsx)(n.code,{children:"com.yahoo.elide.core.request.route.RouteResolver"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Override\npublic RouteResolver getRouteResolver() {\n    new HeaderRouteResolver("ApiVersion");\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Details of how to version Elide models can be found ",(0,i.jsx)(n.a,{href:"data-model#api-versions",children:"here"}),". Details of how to configure\nversioned OpenAPI documents can be found ",(0,i.jsx)(n.a,{href:"openapi#api-versions",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"type-coercion",children:"Type Coercion"}),"\n",(0,i.jsx)(n.p,{children:"Elide attempts to deserialize and coerce fields in the client payload into the underlying type defined in the data\nmodel. Similarly, Elide will serialize the data model fields into the text format defined by the schema of the client\npayload."}),"\n",(0,i.jsx)(n.p,{children:"Beyond primitive, numeric, and String types, Elide can serialize and deserialize complex and user defined types."}),"\n",(0,i.jsx)(n.h4,{id:"user-type-registration",children:"User Type Registration"}),"\n",(0,i.jsxs)(n.p,{children:["To register a new type for serialization and deserialization, define a ",(0,i.jsx)(n.code,{children:"Serde"})," (short for Serializer/Deserializer):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"/**\n * Bidirectional conversion from one type to another.\n *\n * @param <S> The serialized type\n * @param <T> The deserialized type\n */\npublic interface Serde<S, T> {\n\n    /**\n     * Deserialize an instance of type S to type T.\n     * @param val The thing to deserialize\n     * @return The deserialized value\n     */\n    T deserialize(S val);\n\n    /**\n     * Serializes an instance of type T as type S.\n     * @param val The thing to serialize\n     * @return The serialized value\n     */\n    S serialize(T val);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["At startup, Elide will automatically discover any ",(0,i.jsx)(n.code,{children:"Serde"})," classes annotated with ",(0,i.jsx)(n.code,{children:"ElideTypeConverter"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@ElideTypeConverter(type = OffsetDateTime.class, name = "OffsetDateTime")\npublic class OffsetDateTimeSerde implements Serde<String, OffsetDateTime> {\n\n    @Override\n    public OffsetDateTime deserialize(String val) {\n        return OffsetDateTime.parse(val, DateTimeFormatter.ISO_OFFSET_DATE_TIME);\n    }\n\n    @Override\n    public String serialize(OffsetDateTime val) {\n        return val.format(DateTimeFormatter.ISO_OFFSET_DATE_TIME);\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"date-coercion",children:"Date Coercion"}),"\n",(0,i.jsx)(n.p,{children:"Elide has built-in support for either:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Epoch based dates (serialized as a long)"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.iso.org/iso-8601-date-and-time-format.html",children:"ISO8601"})," based dates (serialized as a String\n`yyyy-MM-dd'T'HH",":mm","'Z')"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Elide defaults to ISO8601 dates. This can be toggled by overriding the following binding"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"/**\n * Whether Dates should be ISO8601 strings (true) or epochs (false).\n * @return\n */\npublic boolean enableISO8601Dates() {\n    return true;\n}\n"})}),"\n",(0,i.jsx)(n.h5,{id:"elide-library-configuration",children:"Elide Library Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The following date serdes can be registered:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/core/utils/coerce/converters/ISO8601DateSerde.java",children:"ISO8601 Serde"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/core/utils/coerce/converters/EpochToDateConverter.java",children:"Epoch Serde"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"uuid-coercion",children:"UUID Coercion"}),"\n",(0,i.jsxs)(n.p,{children:["Elide has built in support for converting between String and UUIDs. The conversion leverages ",(0,i.jsx)(n.code,{children:"UUID.fromString"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"enum-coercion",children:"Enum Coercion"}),"\n",(0,i.jsx)(n.p,{children:"Elide has built in support for converting between Strings or Integers to enumeration types (by name or value\nrespectively)."}),"\n",(0,i.jsx)(n.h3,{id:"custom-error-responses",children:"Custom Error Responses"}),"\n",(0,i.jsxs)(n.p,{children:["For normal error handling, Elide throws runtime exceptions which are mapped to error responses. We can override any\nerror response in Elide by providing a custom ",(0,i.jsx)(n.code,{children:"ExceptionMapper"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"/**\n * Maps an exception to an {@link ElideErrorResponse}.\n *\n * @param <E> exception type\n * @param <T> response body type\n */\n@FunctionalInterface\npublic interface ExceptionMapper<E extends Throwable, T> {\n\n    /**\n     * Map the exception to an {@link ElideErrorResponse}.\n     *\n     * @param exception the exception to map.\n     * @param errorContext the error context\n     * @return the mapped ElideErrorResponse or null if you do not want to map this error\n     */\n    @Nullable\n    ElideErrorResponse<? extends T> toErrorResponse(E exception, ErrorContext errorContext);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The mapper returns a ",(0,i.jsx)(n.code,{children:"ElideErrorResponse"})," which allows the developer complete control over the error objects returned\nin the 'errors' array for both JSON-API and GraphQL."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class InvalidEntityBodyExceptionMapper implements ExceptionMapper<InvalidEntityBodyException, ElideErrors> {\n    public ElideErrorResponse<ElideErrors> toErrorResponse(\n            InvalidEntityBodyException exception,\n            ErrorContext errorContext\n    ) {\n        return ElideErrorResponse.badRequest()\n                .errors(errors -> errors\n                        // Add the first error\n                        .error(error -> error\n                                .message(errorContext.isVerbose() ? exception.getMessage() : "Invalid entity body")\n                                .attribute("code", "InvalidEntityBody")\n                                .attribute("body", ""))\n                        // Add the second error\n                        .error(error -> error\n                                .message("Item 1 cannot be empty")\n                                .attribute("code", "NotEmpty")\n                                .attribute("item", "1"))\n                        // Add the third error\n                        .error(error -> error\n                                .message("Item 2 cannot be null")\n                                .attribute("code", "NotNull")\n                                .attribute("item", "2")));\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ElideErrors"})," will be mapped to the corresponding ",(0,i.jsx)(n.code,{children:"JsonApiErrors"})," and ",(0,i.jsx)(n.code,{children:"GraphQLErrors"}),". The\n",(0,i.jsx)(n.a,{href:"https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/jsonapi/serialization/JsonApiErrorSerializer.java",children:(0,i.jsx)(n.code,{children:"JsonApiError"})}),"\nand\n",(0,i.jsx)(n.a,{href:"https://github.com/yahoo/elide/blob/master/elide-graphql/src/main/java/com/yahoo/elide/graphql/serialization/GraphQLErrorSerializer.java",children:(0,i.jsx)(n.code,{children:"GraphQLError"})}),"\nare what is serialized as a response."]}),"\n",(0,i.jsxs)(n.p,{children:["This mapping of ",(0,i.jsx)(n.code,{children:"ElideErrors"})," happens in the\n",(0,i.jsx)(n.a,{href:"https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/jsonapi/DefaultJsonApiExceptionHandler.java",children:(0,i.jsx)(n.code,{children:"DefaultJsonApiExceptionHandler"})}),"\nand\n",(0,i.jsx)(n.a,{href:"https://github.com/yahoo/elide/blob/master/elide-graphql/src/main/java/com/yahoo/elide/graphql/DefaultGraphQLExceptionHandler.java",children:(0,i.jsx)(n.code,{children:"DefaultGraphQLExceptionHandler"})}),"\nusing the ",(0,i.jsx)(n.code,{children:"JsonApiErrorMapper"})," and ",(0,i.jsx)(n.code,{children:"GraphQLErrorMapper"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can configure a custom ",(0,i.jsx)(n.code,{children:"ExceptionMapper"})," as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"@Override\npublic ExceptionMappers getExceptionMappers() {\n    return BasicExceptionMappers.builder().register(new InvalidEntityBodyExceptionMapper()).build();\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The following is the relationship between ",(0,i.jsx)(n.code,{children:"ElideError"})," and ",(0,i.jsx)(n.code,{children:"JsonApiError"})," and ",(0,i.jsx)(n.code,{children:"GraphQLError"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Elide Error"}),(0,i.jsx)(n.th,{children:"JsonApi Error"}),(0,i.jsx)(n.th,{children:"GraphQL Error"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"message"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"details"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"message"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"meta"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"extensions"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.id"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"id"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"extensions.id"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.status"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"status"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"extensions.status"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.code"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"code"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"extensions.code"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.title"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"title"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"extensions.title"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.source"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"source"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"extensions.source"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.links"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"links"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"extensions.links"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.path"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"meta.path"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"path"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.locations"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"meta.locations"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"locations"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>o});var i=r(7294);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);