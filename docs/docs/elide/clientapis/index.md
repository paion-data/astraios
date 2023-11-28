---
sidebar_position: 1
title: Client APIs
description: JSON API and GraphQL Client APIs
---

Supported APIs
--------------

Elide supports the two most widely adopted standards for graph APIs:

<!-- markdown-link-check-disable -->

- [JSON-API](jsonapi)
- [GraphQL](graphql)

<!-- markdown-link-check-enable -->

:::tip

Graph APIs are an evolution of web service APIs that serve and manipulate data for mobile & web applications. They have
a number of characteristics that make them well suited to this task:

1. Most notably, they present a **data model** as an entity relationship graph and an **accompanying schema**.

   - A well-defined model allows for a consistent view of the data and a centralized way to manipulate an instance of
     the model or to cache it.
   - The schema provides powerful introspection capabilities that can be used to build tools to help developers
     understand and navigate the model.

2. The API allows the client to **fetch or mutate as much or as little information in single roundtrip** between client
   and server. This also shrinks payload sizes and simplifies the process of schema evolution.
3. There is a **well-defined standard** for the API that fosters a community approach to development of supporting
   tools & best practices.
:::

Common Concepts
---------------

All Elide APIs share a common set of concepts:

1. The API exposes a set of related data models as an entity relationship graph.
2. All models have a unique identifier.
3. Models have attributes and relationships.

   - Relationships are links to other models. They can be traversed in the API. If the relationship represents a
     collection, it can be sorted, filtered, and paginated.
   - Attributes are properties of the model. They can be simple or complex (objects or collections).

4. Filtering, sorting, and pagination share common languages and expressions.
5. Text and numeric representation of complex attributes is common.
6. API versioning works in the same manner.
7. Custom error responses have the same configuration mechanism.

### API Versioning

Elide allows multiple versions of the same models to coexist and for clients to request a particular instance. Elide
JAX-RS endpoints support an API version that can be set to match the model annotation (`@ApiVersion`) version.

If no version is specified by the client, Elide only exposes the models that lack an `@ApiVersion` annotation.

OpenAPI endpoints (JSON-API) and GraphQL schemas are also scoped by the `ApiVersion` header. They only return the
schema corresponding to the requested API version.

Elide includes implementations for the following API Versioning Strategies

- Path
- Header
- Parameters
- Media Type Profile

This can be customized by implementing and registering a `com.yahoo.elide.core.request.route.RouteResolver`.

```java
@Override
public RouteResolver getRouteResolver() {
    new HeaderRouteResolver("ApiVersion");
}
```

<!-- markdown-link-check-disable -->
Details of how to version Elide models can be found [here](data-model#api-versions). Details of how to configure
versioned OpenAPI documents can be found [here](openapi#api-versions).
<!-- markdown-link-check-enable -->

### Type Coercion

Elide attempts to deserialize and coerce fields in the client payload into the underlying type defined in the data
model. Similarly, Elide will serialize the data model fields into the text format defined by the schema of the client
payload.

Beyond primitive, numeric, and String types, Elide can serialize and deserialize complex and user defined types.

#### User Type Registration

To register a new type for serialization and deserialization, define a `Serde` (short for Serializer/Deserializer):

```java
/**
 * Bidirectional conversion from one type to another.
 *
 * @param <S> The serialized type
 * @param <T> The deserialized type
 */
public interface Serde<S, T> {

    /**
     * Deserialize an instance of type S to type T.
     * @param val The thing to deserialize
     * @return The deserialized value
     */
    T deserialize(S val);

    /**
     * Serializes an instance of type T as type S.
     * @param val The thing to serialize
     * @return The serialized value
     */
    S serialize(T val);
}
```

At startup, Elide will automatically discover any `Serde` classes annotated with `ElideTypeConverter`:

```java
@ElideTypeConverter(type = OffsetDateTime.class, name = "OffsetDateTime")
public class OffsetDateTimeSerde implements Serde<String, OffsetDateTime> {

    @Override
    public OffsetDateTime deserialize(String val) {
        return OffsetDateTime.parse(val, DateTimeFormatter.ISO_OFFSET_DATE_TIME);
    }

    @Override
    public String serialize(OffsetDateTime val) {
        return val.format(DateTimeFormatter.ISO_OFFSET_DATE_TIME);
    }
}
```

#### Date Coercion

Elide has built-in support for either:

- Epoch based dates (serialized as a long)
- [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) based dates (serialized as a String
  `yyyy-MM-dd'T'HH:mm'Z')

Elide defaults to ISO8601 dates. This can be toggled by overriding the following binding

```java
/**
 * Whether Dates should be ISO8601 strings (true) or epochs (false).
 * @return
 */
public boolean enableISO8601Dates() {
    return true;
}
```

##### Elide Library Configuration

The following date serdes can be registered:

1. [ISO8601 Serde](https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/core/utils/coerce/converters/ISO8601DateSerde.java)
2. [Epoch Serde](https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/core/utils/coerce/converters/EpochToDateConverter.java)

#### UUID Coercion

Elide has built in support for converting between String and UUIDs. The conversion leverages `UUID.fromString`.

#### Enum Coercion

Elide has built in support for converting between Strings or Integers to enumeration types (by name or value
respectively).

### Custom Error Responses

For normal error handling, Elide throws runtime exceptions which are mapped to error responses. We can override any
error response in Elide by providing a custom `ExceptionMapper`:

```java
/**
 * Maps an exception to an {@link ElideErrorResponse}.
 *
 * @param <E> exception type
 * @param <T> response body type
 */
@FunctionalInterface
public interface ExceptionMapper<E extends Throwable, T> {

    /**
     * Map the exception to an {@link ElideErrorResponse}.
     *
     * @param exception the exception to map.
     * @param errorContext the error context
     * @return the mapped ElideErrorResponse or null if you do not want to map this error
     */
    @Nullable
    ElideErrorResponse<? extends T> toErrorResponse(E exception, ErrorContext errorContext);
}
```

The mapper returns a `ElideErrorResponse` which allows the developer complete control over the error objects returned
in the 'errors' array for both JSON-API and GraphQL.

```java
public class InvalidEntityBodyExceptionMapper implements ExceptionMapper<InvalidEntityBodyException, ElideErrors> {
    public ElideErrorResponse<ElideErrors> toErrorResponse(
            InvalidEntityBodyException exception,
            ErrorContext errorContext
    ) {
        return ElideErrorResponse.badRequest()
                .errors(errors -> errors
                        // Add the first error
                        .error(error -> error
                                .message(errorContext.isVerbose() ? exception.getMessage() : "Invalid entity body")
                                .attribute("code", "InvalidEntityBody")
                                .attribute("body", ""))
                        // Add the second error
                        .error(error -> error
                                .message("Item 1 cannot be empty")
                                .attribute("code", "NotEmpty")
                                .attribute("item", "1"))
                        // Add the third error
                        .error(error -> error
                                .message("Item 2 cannot be null")
                                .attribute("code", "NotNull")
                                .attribute("item", "2")));
    }
}
```

The `ElideErrors` will be mapped to the corresponding `JsonApiErrors` and `GraphQLErrors`. The
[`JsonApiError`](https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/jsonapi/serialization/JsonApiErrorSerializer.java)
and
[`GraphQLError`](https://github.com/yahoo/elide/blob/master/elide-graphql/src/main/java/com/yahoo/elide/graphql/serialization/GraphQLErrorSerializer.java)
are what is serialized as a response.

This mapping of `ElideErrors` happens in the
[`DefaultJsonApiExceptionHandler`](https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/jsonapi/DefaultJsonApiExceptionHandler.java)
and
[`DefaultGraphQLExceptionHandler`](https://github.com/yahoo/elide/blob/master/elide-graphql/src/main/java/com/yahoo/elide/graphql/DefaultGraphQLExceptionHandler.java)
using the `JsonApiErrorMapper` and `GraphQLErrorMapper`.

You can configure a custom `ExceptionMapper` as follows:

```java
@Override
public ExceptionMappers getExceptionMappers() {
    return BasicExceptionMappers.builder().register(new InvalidEntityBodyExceptionMapper()).build();
}
```

The following is the relationship between `ElideError` and `JsonApiError` and `GraphQLError`.

|Elide Error            |JsonApi Error          |GraphQL Error          |
|-----------------------|-----------------------|-----------------------|
|`message`              |`details`              |`message`              |
|`attributes`           |`meta`                 |`extensions`           |
|`attributes.id`        |`id`                   |`extensions.id`        |
|`attributes.status`    |`status`               |`extensions.status`    |
|`attributes.code`      |`code`                 |`extensions.code`      |
|`attributes.title`     |`title`                |`extensions.title`     |
|`attributes.source`    |`source`               |`extensions.source`    |
|`attributes.links`     |`links`                |`extensions.links`     |
|`attributes.path`      |`meta.path`            |`path`                 |
|`attributes.locations` |`meta.locations`       |`locations`            |
