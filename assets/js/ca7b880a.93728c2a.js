"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[762],{9196:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=i(5893),t=i(1151);const s={sidebar_position:8,title:"OpenAPI"},o=void 0,a={id:"elide/openapi",title:"OpenAPI",description:"[//]: # (Copyright Paion Data)",source:"@site/docs/elide/openapi.md",sourceDirName:"elide",slug:"/elide/openapi",permalink:"/docs/elide/openapi",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/astraios/tree/master/docs/docs/elide/openapi.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"OpenAPI"},sidebar:"tutorialSidebar",previous:{title:"Async API",permalink:"/docs/elide/clientapis/asyncapi"},next:{title:"Performance",permalink:"/docs/elide/performance"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Features Supported",id:"features-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Converting OpenAPI to JSON or YAML",id:"converting-openapi-to-json-or-yaml",level:3},{value:"Configure JAX-RS Endpoint",id:"configure-jax-rs-endpoint",level:3},{value:"Supporting OAuth",id:"supporting-oauth",level:3},{value:"Adding a global parameter",id:"adding-a-global-parameter",level:3},{value:"Adding a global response code",id:"adding-a-global-response-code",level:3},{value:"Performance",id:"performance",level:2},{value:"Path Generation",id:"path-generation",level:3},{value:"Document Size",id:"document-size",level:3},{value:"Model Properties",id:"model-properties",level:3},{value:"Attribute Properties",id:"attribute-properties",level:3},{value:"API Versions",id:"api-versions",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["Elide supports the generation of ",(0,r.jsx)(n.a,{href:"https://www.openapis.org/",children:"OpenAPI"})," documentation from Elide annotated beans.\nSpecifically, it generates a JSON or YAML document conforming to the OpenAPI specification that can be used by tools\nlike ",(0,r.jsx)(n.a,{href:"http://swagger.io/",children:"Swagger UI"})," (among others) to explore, understand, and compose queries against our Elide API."]}),"\n",(0,r.jsxs)(n.p,{children:["Only JSON-API endpoints are documented. The GraphQL API schema can be explored directly with tools like\n",(0,r.jsx)(n.a,{href:"https://github.com/graphql/graphiql",children:"Graphiql"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"features-supported",children:"Features Supported"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"JaxRS Endpoint"})," - Elide ships with a customizable JaxRS endpoints that can publish one or more OpenAPI documents\nin both JSON or YAML."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Path Discovery"})," - Given a set of entities to explore, Elide will generate the minimum, cycle-free, de-duplicated\nset of URL paths in the OpenAPI document."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Filter by Primitive Attributes"})," - All ",(0,r.jsx)(n.em,{children:"GET"})," requests on entity collections include filter parameters for each\nprimitive attribute."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Prune Fields"})," - All ",(0,r.jsx)(n.em,{children:"GET"})," requests support JSON-API sparse fields query parameter."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Include Top Level Relationships"})," - All ",(0,r.jsx)(n.em,{children:"GET"})," requests support the ability to include direct relationships."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Sort by Attribute"})," - All ",(0,r.jsx)(n.em,{children:"GET"})," requests support sort query parameters."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Pagination"})," - All ",(0,r.jsx)(n.em,{children:"GET"})," requests support pagination query parameters."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Permission Exposition"})," - Elide permissions are exported as documentation for entity schemas."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Model & Attribute Properties"})," - The ",(0,r.jsx)(n.em,{children:"required"}),", ",(0,r.jsx)(n.em,{children:"readOnly"}),", ",(0,r.jsx)(n.em,{children:"example"}),", ",(0,r.jsx)(n.em,{children:"value"}),", ",(0,r.jsx)(n.em,{children:"description"}),", ",(0,r.jsx)(n.em,{children:"title"}),",\n",(0,r.jsx)(n.em,{children:"accessMode"}),", ",(0,r.jsx)(n.em,{children:"requiredMode"})," fields are extracted from ",(0,r.jsx)(n.code,{children:"Schema"})," annotations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"API Version Support"})," - Elide can create separate documents for different API versions."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(n.p,{children:"Create and initialize an entity dictionary."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"EntityDictionary dictionary = EntityDictionary.builder().build();\n\ndictionary.bindEntity(Book.class);\ndictionary.bindEntity(Author.class);\ndictionary.bindEntity(Publisher.class);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create a Info object."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Info info = new Info().title("My Service").version("1");\n'})}),"\n",(0,r.jsx)(n.p,{children:"Initialize a OpenAPI builder."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"OpenApiBuilder builder = new OpenApiBuilder(dictionary);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Build the OpenAPI document"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"OpenAPI document = builder.build().info(info);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"converting-openapi-to-json-or-yaml",children:"Converting OpenAPI to JSON or YAML"}),"\n",(0,r.jsx)(n.p,{children:"We can directly convert to JSON:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'OpenApiDocument openApiDocument = new OpenApiDocument(document, OpenApiDocument.Version.from("3.0"));\nString jsonOutput = openApiDocument.of(OpenApiDocument.MediaType.APPLICATION_JSON);\n'})}),"\n",(0,r.jsx)(n.p,{children:"We can directly convert to YAML as well:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'OpenApiDocument openApiDocument = new OpenApiDocument(document, OpenApiDocument.Version.from("3.0"));\nString jsonOutput = openApiDocument.of(OpenApiDocument.MediaType.APPLICATION_YAML);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"configure-jax-rs-endpoint",children:"Configure JAX-RS Endpoint"}),"\n",(0,r.jsxs)(n.p,{children:["Or we can use the OpenAPI document directly to configure the ",(0,r.jsx)(n.a,{href:"https://github.com/yahoo/elide/blob/master/elide-swagger/src/main/java/com/yahoo/elide/swagger/resources/ApiDocsEndpoint.java",children:"provided JAX-RS Endpoint"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'List<ApiDocsEndpoint.ApiDocsRegistration> apiDocs = new ArrayList<>();\nOpenAPI openApi = new OpenAPI();\napiDocs.add(new ApiDocsEndpoint.ApiDocsRegistration("test", () -> openApi, "3.0", ""));\n\n//Dependency Inject the ApiDocsEndpoint JAX-RS resource\nbind(apiDocs).named("apiDocs").to(new TypeLiteral<List<ApiDocsEndpoint.ApiDocsRegistration>>() { });\n'})}),"\n",(0,r.jsx)(n.h3,{id:"supporting-oauth",children:"Supporting OAuth"}),"\n",(0,r.jsx)(n.p,{children:"If we want Swagger UI to acquire & use a bearer token from an OAuth identity provider, we can configure\nthe OpenAPI document similar to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SecurityScheme oauthDef = new SecurityScheme()\n    .name("bearerAuth")\n    .type(SecurityScheme.Type.HTTP)\n    .bearerFormat("JWT")\n    .scheme("bearer");\nSecurityRequirement oauthReq = new SecurityRequirement().addList("bearerAuth");\n\nOpenApiBuilder builder = new OpenApiBuilder(entityDictionary);\nOpenAPI document = builder.build();\ndocument.addSecurityItem(oauthReq);\ndocument.getComponents().addSecuritySchemes("bearerAuth", oauthDef);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"adding-a-global-parameter",children:"Adding a global parameter"}),"\n",(0,r.jsx)(n.p,{children:"A query or header parameter can be added globally to all Elide API endpoints:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Parameter oauthParam = new Parameter()\n        .in("Header")\n        .name("Authorization")\n        .schema(new StringSchema())\n        .description("OAuth bearer token")\n        .required(false);\n\nOpenApiBuilder builder = new OpenApiBuilder(dictionary).globalParameter(oauthParam);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"adding-a-global-response-code",children:"Adding a global response code"}),"\n",(0,r.jsx)(n.p,{children:"An HTTP response can be added globally to all Elide API endpoints:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'ApiResponse rateLimitedResponse = new ApiResponse().description("Too Many Requests");\n\nOpenApiBuilder builder = new OpenApiBuilder(dictionary).globalResponse(429, rateLimitedResponse);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,r.jsx)(n.h3,{id:"path-generation",children:"Path Generation"}),"\n",(0,r.jsx)(n.p,{children:"The Swagger UI is very slow when the number of generated URL paths exceeds a few dozen. For large, complex data models,\nit is recommended to generate separate OpenAPI documents for subgraphs of the model."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Set<Type<?>> entities = Set.of(\n    ClassType.of(Book.class),\n    ClassType.of(Author.class),\n    ClassType.of(Publisher.class)\n);\n\nOpenApiBuilder builder = new OpenApiBuilder(dictionary).managedClasses(entities);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example above, the ",(0,r.jsx)(n.code,{children:"OpenApiBuilder"})," will only generate paths that exclusively traverse the provided set of\nentities."]}),"\n",(0,r.jsx)(n.h3,{id:"document-size",children:"Document Size"}),"\n",(0,r.jsx)(n.p,{children:"The size of the OpenAPI document can be reduced significantly by limiting the number of filter operators that are used\nto generate query parameter documentation."}),"\n",(0,r.jsxs)(n.p,{children:["In this example, filter query parameters are only generated for the ",(0,r.jsx)(n.em,{children:"IN"})," operator."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"OpenApiBuilder builder = new OpenApiBuilder(dictionary).filterOperators(Set.of(Operator.IN));\n"})}),"\n",(0,r.jsx)(n.h3,{id:"model-properties",children:"Model Properties"}),"\n",(0,r.jsxs)(n.p,{children:["Elide extracts the model description and title from the ",(0,r.jsx)(n.code,{children:"Schema"})," and ",(0,r.jsx)(n.code,{children:"Include"})," annotations and adds them to the OpenAPI\ndocumentation. ",(0,r.jsx)(n.code,{children:"Schema"})," has precedence over ",(0,r.jsx)(n.code,{children:"Include"})," if both are present."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Schema(description = "A book model description", title = "Book")\nclass Book {\n\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"Schema"})," only the ",(0,r.jsx)(n.em,{children:"description"})," and ",(0,r.jsx)(n.em,{children:"title"})," property is extracted. For the ",(0,r.jsx)(n.code,{children:"Include"})," annotation, the ",(0,r.jsx)(n.em,{children:"friendlyName"}),"\nis used as the ",(0,r.jsx)(n.em,{children:"title"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"attribute-properties",children:"Attribute Properties"}),"\n",(0,r.jsxs)(n.p,{children:["Elide extracts properties from the ",(0,r.jsx)(n.code,{children:"Schema"})," annotation and adds them to the OpenAPI documentation."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"class Book {\n\n    @Schema(requiredMode = RequiredMode.REQUIRED)\n    public String title;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Only the ",(0,r.jsx)(n.em,{children:"required"}),", ",(0,r.jsx)(n.em,{children:"value"}),", ",(0,r.jsx)(n.em,{children:"example"}),", ",(0,r.jsx)(n.em,{children:"readOnly"}),", ",(0,r.jsx)(n.em,{children:"writeOnly"}),", ",(0,r.jsx)(n.em,{children:"requiredProperties"}),", ",(0,r.jsx)(n.em,{children:"requiredMode"})," and ",(0,r.jsx)(n.em,{children:"accessMode"}),"\nproperties are extracted. This is currently only supported for attributes on Elide models."]}),"\n",(0,r.jsx)(n.h2,{id:"api-versions",children:"API Versions"}),"\n",(0,r.jsx)(n.p,{children:"OpenAPI documents are tied to an explicit API version. When constructing a OpenAPI document, the API version must be set\nto match the API version of the models it will describe:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'OpenApiBuilder builder = new OpenApiBuilder(dictionary).apiVersion("1");\nOpenAPI openApi = builder.build();\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var r=i(7294);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);