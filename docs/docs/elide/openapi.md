---
sidebar_position: 8
title: OpenAPI
description: JSON API documentations
---

[//]: # (Copyright Paion Data)

[//]: # (Licensed under the Apache License, Version 2.0 &#40;the "License"&#41;;)
[//]: # (you may not use this file except in compliance with the License.)
[//]: # (You may obtain a copy of the License at)

[//]: # (    http://www.apache.org/licenses/LICENSE-2.0)

[//]: # (Unless required by applicable law or agreed to in writing, software)
[//]: # (distributed under the License is distributed on an "AS IS" BASIS,)
[//]: # (WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.)
[//]: # (See the License for the specific language governing permissions and)
[//]: # (limitations under the License.)

Overview
--------

Elide supports the generation of [OpenAPI](https://www.openapis.org/) documentation from Elide annotated beans.
Specifically, it generates a JSON or YAML document conforming to the OpenAPI specification that can be used by tools
like [Swagger UI](http://swagger.io/) (among others) to explore, understand, and compose queries against our Elide API.

Only JSON-API endpoints are documented. The GraphQL API schema can be explored directly with tools like
[Graphiql](https://github.com/graphql/graphiql).

Features Supported
------------------

- **JaxRS Endpoint** - Elide ships with a customizable JaxRS endpoints that can publish one or more OpenAPI documents
  in both JSON or YAML.
- **Path Discovery** - Given a set of entities to explore, Elide will generate the minimum, cycle-free, de-duplicated
  set of URL paths in the OpenAPI document.
- **Filter by Primitive Attributes** - All _GET_ requests on entity collections include filter parameters for each
  primitive attribute.
- **Prune Fields** - All _GET_ requests support JSON-API sparse fields query parameter.
- **Include Top Level Relationships** - All _GET_ requests support the ability to include direct relationships.
- **Sort by Attribute** - All _GET_ requests support sort query parameters.
- **Pagination** - All _GET_ requests support pagination query parameters.
- **Permission Exposition** - Elide permissions are exported as documentation for entity schemas.
- **Model & Attribute Properties** - The _required_, _readOnly_, _example_, _value_, _description_, _title_,
  _accessMode_, _requiredMode_ fields are extracted from `Schema` annotations.
- **API Version Support** - Elide can create separate documents for different API versions.

Getting Started
---------------

Create and initialize an entity dictionary.

```java
EntityDictionary dictionary = EntityDictionary.builder().build();

dictionary.bindEntity(Book.class);
dictionary.bindEntity(Author.class);
dictionary.bindEntity(Publisher.class);
```

Create a Info object.

```java
Info info = new Info().title("My Service").version("1");
```

Initialize a OpenAPI builder.

```java
OpenApiBuilder builder = new OpenApiBuilder(dictionary);
```

Build the OpenAPI document

```java
OpenAPI document = builder.build().info(info);
```

### Converting OpenAPI to JSON or YAML

We can directly convert to JSON:

```java
OpenApiDocument openApiDocument = new OpenApiDocument(document, OpenApiDocument.Version.from("3.0"));
String jsonOutput = openApiDocument.of(OpenApiDocument.MediaType.APPLICATION_JSON);
```

We can directly convert to YAML as well:

```java
OpenApiDocument openApiDocument = new OpenApiDocument(document, OpenApiDocument.Version.from("3.0"));
String jsonOutput = openApiDocument.of(OpenApiDocument.MediaType.APPLICATION_YAML);
```

### Configure JAX-RS Endpoint

Or we can use the OpenAPI document directly to configure the [provided JAX-RS Endpoint](https://github.com/yahoo/elide/blob/master/elide-swagger/src/main/java/com/yahoo/elide/swagger/resources/ApiDocsEndpoint.java):

```java
List<ApiDocsEndpoint.ApiDocsRegistration> apiDocs = new ArrayList<>();
OpenAPI openApi = new OpenAPI();
apiDocs.add(new ApiDocsEndpoint.ApiDocsRegistration("test", () -> openApi, "3.0", ""));

//Dependency Inject the ApiDocsEndpoint JAX-RS resource
bind(apiDocs).named("apiDocs").to(new TypeLiteral<List<ApiDocsEndpoint.ApiDocsRegistration>>() { });
```

### Supporting OAuth

If we want Swagger UI to acquire & use a bearer token from an OAuth identity provider, we can configure
the OpenAPI document similar to:

```java
SecurityScheme oauthDef = new SecurityScheme()
    .name("bearerAuth")
    .type(SecurityScheme.Type.HTTP)
    .bearerFormat("JWT")
    .scheme("bearer");
SecurityRequirement oauthReq = new SecurityRequirement().addList("bearerAuth");

OpenApiBuilder builder = new OpenApiBuilder(entityDictionary);
OpenAPI document = builder.build();
document.addSecurityItem(oauthReq);
document.getComponents().addSecuritySchemes("bearerAuth", oauthDef);
```

### Adding a global parameter

A query or header parameter can be added globally to all Elide API endpoints:

```java
Parameter oauthParam = new Parameter()
        .in("Header")
        .name("Authorization")
        .schema(new StringSchema())
        .description("OAuth bearer token")
        .required(false);

OpenApiBuilder builder = new OpenApiBuilder(dictionary).globalParameter(oauthParam);
```

### Adding a global response code

An HTTP response can be added globally to all Elide API endpoints:

```java
ApiResponse rateLimitedResponse = new ApiResponse().description("Too Many Requests");

OpenApiBuilder builder = new OpenApiBuilder(dictionary).globalResponse(429, rateLimitedResponse);
```

Performance
-----------

### Path Generation

The Swagger UI is very slow when the number of generated URL paths exceeds a few dozen. For large, complex data models,
it is recommended to generate separate OpenAPI documents for subgraphs of the model.

```java
Set<Type<?>> entities = Set.of(
    ClassType.of(Book.class),
    ClassType.of(Author.class),
    ClassType.of(Publisher.class)
);

OpenApiBuilder builder = new OpenApiBuilder(dictionary).managedClasses(entities);
```

In the example above, the `OpenApiBuilder` will only generate paths that exclusively traverse the provided set of
entities.

### Document Size

The size of the OpenAPI document can be reduced significantly by limiting the number of filter operators that are used
to generate query parameter documentation.

In this example, filter query parameters are only generated for the _IN_ operator.

```java
OpenApiBuilder builder = new OpenApiBuilder(dictionary).filterOperators(Set.of(Operator.IN));
```

### Model Properties

Elide extracts the model description and title from the `Schema` and `Include` annotations and adds them to the OpenAPI
documentation. `Schema` has precedence over `Include` if both are present.

```java
@Schema(description = "A book model description", title = "Book")
class Book {

}
```

For `Schema` only the _description_ and _title_ property is extracted. For the `Include` annotation, the _friendlyName_
is used as the _title_.

### Attribute Properties

Elide extracts properties from the `Schema` annotation and adds them to the OpenAPI documentation.

```java
class Book {

    @Schema(requiredMode = RequiredMode.REQUIRED)
    public String title;
}
```

Only the _required_, _value_, _example_, _readOnly_, _writeOnly_, _requiredProperties_, _requiredMode_ and _accessMode_
properties are extracted. This is currently only supported for attributes on Elide models.

API Versions
------------

OpenAPI documents are tied to an explicit API version. When constructing a OpenAPI document, the API version must be set
to match the API version of the models it will describe:

```java
OpenApiBuilder builder = new OpenApiBuilder(dictionary).apiVersion("1");
OpenAPI openApi = builder.build();
```
