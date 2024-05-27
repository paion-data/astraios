/*
 * Copyright Paion Data
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.paiondata.astraios;

import static com.yahoo.elide.test.graphql.GraphQLDSL.argument;
import static com.yahoo.elide.test.graphql.GraphQLDSL.arguments;
import static com.yahoo.elide.test.graphql.GraphQLDSL.document;
import static com.yahoo.elide.test.graphql.GraphQLDSL.field;
import static com.yahoo.elide.test.graphql.GraphQLDSL.mutation;
import static com.yahoo.elide.test.graphql.GraphQLDSL.selection;
import static com.yahoo.elide.test.graphql.GraphQLDSL.selections;
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.attr;
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.attributes;
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.data;
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.datum;
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.id;
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.resource;
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.type;
import static org.hamcrest.Matchers.equalTo;

import com.yahoo.elide.core.exceptions.HttpStatus;
import com.yahoo.elide.jsonapi.JsonApi;
import com.yahoo.elide.swagger.OpenApiDocument.MediaType;

import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.annotation.DirtiesContext;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import jakarta.validation.constraints.NotNull;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Objects;

/**
 * Integration tests for the H24Springboot application.
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class SpringbootITSpec {

    private static final int OK_CODE = 200;
    private static final String BOOK_ELEMENT = "book";
    private static final String ID_ELEMENT = "id";
    private static final String TITLE_ELEMENT = "title";
    private static final String BOOK_PATH = "book/";
    private static final String PRIDE_PREJUDICE = "Pride & Prejudice";
    private static final String PRIDE_AND_PREJUDICE = "Pride and Prejudice";
    private static final String CREATE_BOOK_JSON = "create-book.json";
    private static final String UPDATE_BOOK_JSON = "update-book.json";
    private static final String PAGE_SORT_JSON = "page-sort.json";
    private static final String BOOK_TITLE_01 = "Book Numero Dos";
    private static final String BOOK_TITLE_02 = "Book Numero Tres";
    private static final String BOOK_TITLE_04 = "Effective Java";
    private static final String BOOK_TITLE_05 = "Critiques of Pure Reason";
    private static final String ASSERT_RESPONSE_01 = "data.book.edges[0]";
    private static final String ASSERT_RESPONSE_02 = "data.book.edges[0].node.id";
    private static final String SORT_FIRST = "1";
    private static final String SORT_AFTER = "0";
    private static final Integer TOTAL_RECORDS = 3;

    @LocalServerPort
    private int port;

    /**
     * Setup the base URI, port, and base path for the tests.
     */
    @BeforeEach
    public void setup() {
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = port;
        RestAssured.basePath = "/v1/data/";
    }

    /**
     * JSON API allows for POSTing, GETing, PATCHing, and DELETing a book.
     */
    @Test
    public void testJsonApiCrud() {
        // Given
        RestAssured
                .given()
                .when()
                .get(BOOK_ELEMENT)
                .then()
                .statusCode(OK_CODE)
                .body(equalTo(data().toJSON()));

        // When: an entity is POSTed via JSON API
        final Response response = RestAssured
                .given()
                .contentType(JsonApi.MEDIA_TYPE)
                .accept(JsonApi.MEDIA_TYPE)
                .body(
                        data(
                                resource(
                                        type(BOOK_ELEMENT),
                                        attributes(
                                                attr(TITLE_ELEMENT, PRIDE_PREJUDICE)
                                        )
                                )
                        )
                )
                .when()
                .post(BOOK_ELEMENT);

        final String bookId = response.jsonPath().get("data.id");
        response.then().statusCode(HttpStatus.SC_CREATED);

        // Then: we can GET that entity next
        RestAssured
                .given()
                .when()
                .get(BOOK_ELEMENT)
                .then()
                .statusCode(OK_CODE)
                .body(equalTo(
                        data(
                                resource(
                                        type(BOOK_ELEMENT),
                                        id(bookId),
                                        attributes(
                                                attr(TITLE_ELEMENT, PRIDE_PREJUDICE)
                                        )
                                )
                        ).toJSON()
                ));

        // When: we update that entity
        RestAssured
                .given()
                .contentType(JsonApi.MEDIA_TYPE)
                .accept(JsonApi.MEDIA_TYPE)
                .body(
                        datum(
                                resource(
                                        type(BOOK_ELEMENT),
                                        id(bookId),
                                        attributes(
                                                attr(TITLE_ELEMENT, PRIDE_AND_PREJUDICE)
                                        )
                                )
                        )
                )
                .when()
                .patch(BOOK_PATH + bookId)
                .then()
                .statusCode(HttpStatus.SC_NO_CONTENT);

        // Then: we can GET that entity with updated attribute
        RestAssured
                .given()
                .when()
                .get(BOOK_ELEMENT)
                .then()
                .statusCode(OK_CODE)
                .body(equalTo(
                        data(
                                resource(
                                        type(BOOK_ELEMENT),
                                        id(bookId),
                                        attributes(
                                                attr(TITLE_ELEMENT, PRIDE_AND_PREJUDICE)
                                        )
                                )
                        ).toJSON()
                ));

        // When: the entity is deleted
        RestAssured
                .given()
                .when()
                .delete(BOOK_PATH + bookId)
                .then()
                .statusCode(HttpStatus.SC_NO_CONTENT);

        // Then: that entity is not found in database anymore
        RestAssured
                .given()
                .when()
                .get(BOOK_ELEMENT)
                .then()
                .statusCode(OK_CODE)
                .body(equalTo(data().toJSON()));
    }

    /**
     * GraphQL API allows for POSTing, GETing, PATCHing, and DELETing a book.
     */
    @Test
    public void testGraphQLCrud() {

        // expect: database is initially empty
        final Response response = RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(toQueryString(document(
                        selection(
                                field(
                                        BOOK_ELEMENT,
                                        selections(
                                                field(ID_ELEMENT),
                                                field(TITLE_ELEMENT)
                                        )
                                )
                        )
                ).toQuery()))
                .when()
                .post();

        response.then()
                .statusCode(OK_CODE);
        Assert.assertNull(response.jsonPath().get(ASSERT_RESPONSE_01));

        // when: an entity is POSTed via GraphQL
        final Response response1 = createBook(BOOK_TITLE_01);
        response1.then()
                .statusCode(OK_CODE);

        final String bookId = response1.jsonPath().get(ASSERT_RESPONSE_02);

        // then: we can retrieve that entity next
        RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(toQueryString(document(
                        selection(
                                field(
                                        BOOK_ELEMENT,
                                        selections(
                                                field(ID_ELEMENT),
                                                field(TITLE_ELEMENT)
                                        )
                                )
                        )
                ).toQuery()))
                .when()
                .post()
                .then()
                .statusCode(OK_CODE)
                .body(equalTo(
                        document(
                                selection(
                                        field(
                                                BOOK_ELEMENT,
                                                selections(
                                                        field(ID_ELEMENT, bookId),
                                                        field(TITLE_ELEMENT, BOOK_TITLE_01)
                                                )
                                        )
                                )
                        ).toResponse()
                ));

        // when: we update that entity
        RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(String.format(payload(UPDATE_BOOK_JSON),
                        BOOK_TITLE_02))
                .when()
                .post()
                .then()
                .statusCode(OK_CODE);

        // then: we can retrieve that entity with updated attribute
        RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(toQueryString(document(
                                selection(
                                        field(
                                                BOOK_ELEMENT,
                                                selections(
                                                        field(ID_ELEMENT),
                                                        field(TITLE_ELEMENT)
                                                )
                                        )
                                )
                        ).toQuery())
                )
                .when()
                .post()
                .then()
                .statusCode(OK_CODE)
                .body(equalTo(
                        document(
                                selection(
                                        field(
                                                BOOK_ELEMENT,
                                                selections(
                                                        field(ID_ELEMENT, bookId),
                                                        field(TITLE_ELEMENT, BOOK_TITLE_02)
                                                )
                                        )
                                )
                        ).toResponse()
                ));

        // when: the entity is deleted
        RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(
                toQueryString(document(
                        mutation(
                                selection(
                                        field(
                                                BOOK_ELEMENT,
                                                arguments(
                                                        argument("op", "DELETE"),
                                                        argument("ids", "[" + bookId + "]")
                                                ),

                                                selections(
                                                        field(ID_ELEMENT),
                                                        field(TITLE_ELEMENT)
                                                )
                                        )

                                ))
                ).toQuery())
                )
                .when()
                .post()
                .then()
                .statusCode(200);

        // then: that entity is not found in database anymore
        final Response response2 = RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(
                toQueryString(document(
                        selection(
                                field(
                                        BOOK_ELEMENT,
                                        selections(
                                                field(ID_ELEMENT),
                                                field(TITLE_ELEMENT)
                                        )
                                )
                        )
                ).toQuery())
                )
                .when()
                .post();

        response2.then()
                .statusCode(OK_CODE);
        Assert.assertNull(response.jsonPath().get(ASSERT_RESPONSE_01));
    }

    /**
     * GraphQL API can sort and paginate (effectively fetching 1 record with some min/max attribute).
     */
    @Test
    public void testGraphQLSortAndPaginate() {
        // given: 3 entities are inserted into the database.
        createBook(PRIDE_PREJUDICE);
        createBook(BOOK_TITLE_04);
        final String maxBookId = createBook(BOOK_TITLE_05)
                .jsonPath()
                .get(ASSERT_RESPONSE_02);

        // expect: sorting by ID in descending order and paginating to get the firsts result returns Kant's work.
        final Response response = RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(payload(PAGE_SORT_JSON))
                .when()
                .post();

        response.then()
                .statusCode(200);

        Assert.assertEquals(maxBookId, response.jsonPath().get(ASSERT_RESPONSE_02));
        Assert.assertEquals(BOOK_TITLE_05, response.jsonPath().get("data.book.edges[0].node.title"));
        Assert.assertEquals(TOTAL_RECORDS, response.jsonPath().get("data.book.pageInfo.totalRecords"));
        Assert.assertEquals(SORT_AFTER, response.jsonPath().get("data.book.pageInfo.startCursor"));
        Assert.assertEquals(SORT_FIRST, response.jsonPath().get("data.book.pageInfo.endCursor"));
        Assert.assertTrue(response.jsonPath().get("data.book.pageInfo.hasNextPage"));
    }

    /**
     * Create a book.
     * @param title the title of the book to be created.
     * @return RestAssured response.
     */
    private Response createBook(@NotNull final String title) {
        return RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(String.format(payload(CREATE_BOOK_JSON),
                        title))
                .when()
                .post();
    }

    /**
     * Loads a resource file, under "payload" resource directory, as a {@code String} object given that resource file
     * name.
     *
     * @param resourceName  The specified resource file name
     *
     * @return the resource file content as a single {@code String}
     *
     * @throws NullPointerException if {@code resourceName} is {@code null}
     * @throws IllegalStateException if an I/O error occurs reading from the resource file stream
     * @throws IllegalArgumentException  if resource path is not formatted strictly according to RFC2396 and cannot be
     * converted to a URI.
     */
    @NotNull
    private String payload(final @NotNull String resourceName) {
        return toResource("payload", resourceName);
    }

    /**
     * Loads a resource file content as a {@code String} object according to a provided resource path.
     * <p>
     * The resource path is defined by two components:
     * <ol>
     *     <li> a relative path under "resource" folder
     *     <li> the name of the resource file
     * </ol>
     * For example, when we would like to read
     * "src/test/resources/payload/metadata/multiple-fields-metadata-request.json", then the relative path is
     * "payload/metadata" and the name of the resource file is "multiple-fields-metadata-request.json"
     *
     * @param resourceDirPath  The relative path under "resource" folder
     * @param resourceFilename  The specified resource file name
     *
     * @return the resource file content as a single {@code String}
     *
     * @throws NullPointerException if {@code resourceFilename} is {@code null}
     * @throws IllegalStateException if an I/O error occurs reading from the resource file stream
     * @throws IllegalArgumentException  if resource path is not formatted strictly according to RFC2396 and cannot be
     * converted to a URI.
     */
    @NotNull
    private String toResource(final @NotNull String resourceDirPath, final @NotNull String resourceFilename) {
        Objects.requireNonNull(resourceDirPath);
        Objects.requireNonNull(resourceFilename);

        final String resource = String.format(
                "%s/%s",
                resourceDirPath.endsWith("/")
                        ? resourceDirPath.substring(0, resourceDirPath.length() - 1)
                        : resourceDirPath,
                resourceFilename
        );

        try {
            return new String(
                    Files.readAllBytes(
                            Paths.get(
                                    Objects.requireNonNull(
                                                    this.getClass()
                                                            .getClassLoader()
                                                            .getResource(resource)
                                            )
                                            .toURI()
                            )
                    )
            );
        } catch (final IOException exception) {
            final String message = String.format("Error reading file stream from '%s'", resource);
            throw new IllegalStateException(message, exception);
        } catch (final URISyntaxException exception) {
            final String message = String.format("'%s' is not a valid URI fragment", resource);
            throw new IllegalArgumentException(message, exception);
        }
    }

    /**
     * Converts a GraphQL query to a JSON string.
     * @param query GraphQL query.
     * @return String representation of the query.
     */
    private String toQueryString(final String query) {
        return String.format("{\"query\": \"%s\"}", query);
    }
}
