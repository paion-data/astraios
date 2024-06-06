/*
 * Copyright 2024 Paion Data
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
package com.paiondata.astraios.config

import com.paiondata.elide.jsonapi.JsonApi

import com.paiondata.astraios.models.Book

import org.apache.http.HttpStatus

import static com.paiondata.elide.test.graphql.GraphQLDSL.argument
import static com.paiondata.elide.test.graphql.GraphQLDSL.arguments
import static com.paiondata.elide.test.graphql.GraphQLDSL.document
import static com.paiondata.elide.test.graphql.GraphQLDSL.field
import static com.paiondata.elide.test.graphql.GraphQLDSL.mutation
import static com.paiondata.elide.test.graphql.GraphQLDSL.selection
import static com.paiondata.elide.test.graphql.GraphQLDSL.selections
import static com.paiondata.elide.test.jsonapi.JsonApiDSL.attr
import static com.paiondata.elide.test.jsonapi.JsonApiDSL.attributes
import static com.paiondata.elide.test.jsonapi.JsonApiDSL.data
import static com.paiondata.elide.test.jsonapi.JsonApiDSL.datum
import static com.paiondata.elide.test.jsonapi.JsonApiDSL.id
import static com.paiondata.elide.test.jsonapi.JsonApiDSL.resource
import static com.paiondata.elide.test.jsonapi.JsonApiDSL.type

import com.paiondata.elide.swagger.OpenApiDocument.MediaType

import groovy.json.JsonBuilder
import io.restassured.RestAssured
import io.restassured.response.Response
import jakarta.validation.constraints.NotNull
import static org.hamcrest.Matchers.equalTo
import spock.lang.Specification

abstract class AbstractITSpec extends Specification {

    static final int WS_PORT = 8080

    def childSetupSpec() {
        // intentionally left blank
    }

    def childCleanupSpec() {
        // intentionally left blank
    }

    def setupSpec() {
        childSetupSpec()

        RestAssured.baseURI = "http://localhost"
        RestAssured.port = WS_PORT
        RestAssured.basePath = "/v1/data/"

        System.setProperty("HIBERNATE_HBM2DDL_AUTO", "create")
    }

    def cleanupSpec() {
        RestAssured.reset()

        childCleanupSpec()

        System.clearProperty("HIBERNATE_HBM2DDL_AUTO")
    }

    def "JSON API allows for POSTing, GETing, PATCHing, and DELETing a book"() {
        expect: "database is initially empty"
        RestAssured
                .given()
                .when()
                .get("book")
                .then()
                .statusCode(200)
                .body(equalTo(data().toJSON()))

        when: "an entity is POSTed via JSON API"
        Response response = RestAssured
                .given()
                .contentType(JsonApi.MEDIA_TYPE)
                .accept(JsonApi.MEDIA_TYPE)
                .body(
                        data(
                                resource(
                                        type("book"),
                                        attributes(
                                                attr("title", "Pride & Prejudice")
                                        )
                                )
                        )
                )
                .when()
                .post("book")

        String bookId = response.jsonPath().get("data.id")
        response.then().statusCode(HttpStatus.SC_CREATED)

        then: "we can GET that entity next"
        RestAssured
                .given()
                .when()
                .get("book")
                .then()
                .statusCode(200)
                .body(equalTo(
                        data(
                                resource(
                                        type("book"),
                                        id(bookId),
                                        attributes(
                                                attr("title", "Pride & Prejudice")
                                        )
                                )
                        ).toJSON()
                ))

        when: "we update that entity"
        RestAssured
                .given()
                .contentType(JsonApi.MEDIA_TYPE)
                .accept(JsonApi.MEDIA_TYPE)
                .body(
                        datum(
                                resource(
                                        type("book"),
                                        id(bookId),
                                        attributes(
                                                attr("title", "Pride and Prejudice")
                                        )
                                )
                        )
                )
                .when()
                .patch("book/${bookId}")
                .then()
                .statusCode(HttpStatus.SC_NO_CONTENT)

        then: "we can GET that entity with updated attribute"
        RestAssured
                .given()
                .when()
                .get("book")
                .then()
                .statusCode(200)
                .body(equalTo(
                        data(
                                resource(
                                        type("book"),
                                        id(bookId),
                                        attributes(
                                                attr("title", "Pride and Prejudice")
                                        )
                                )
                        ).toJSON()
                ))

        when: "the entity is deleted"
        RestAssured
                .given()
                .when()
                .delete("book/${bookId}")
                .then()
                .statusCode(HttpStatus.SC_NO_CONTENT)

        then: "that entity is not found in database anymore"
        RestAssured
                .given()
                .when()
                .get("book")
                .then()
                .statusCode(200)
                .body(equalTo(data().toJSON()))
    }

    def "GraphQL API allows for POSTing, GETing, PATCHing, and DELETing a book"() {
        expect: "database is initially empty"
        RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(
                        query: document(
                                selection(
                                        field(
                                                "book",
                                                selections(
                                                        field("id"),
                                                        field("title")
                                                )
                                        )
                                )
                        ).toQuery()
                )
                .when()
                .post()
                .then()
                .statusCode(200)
                .body("data", equalTo(
                        [
                                book: [
                                        edges: []
                                ]
                        ] as HashMap
                ))

        when: "an entity is POSTed via GraphQL"
        Response response = createBook(new Book(title: "Book Numero Dos"))
        response.then()
                .statusCode(200)

        final String bookId = response.jsonPath().get("data.book.edges[0].node.id")

        then: "we can retrieve that entity next"
        RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(
                        query: document(
                                selection(
                                        field(
                                                "book",
                                                selections(
                                                        field("id"),
                                                        field("title")
                                                )
                                        )
                                )
                        ).toQuery()
                )
                .when()
                .post()
                .then()
                .statusCode(200)
                .body(equalTo(
                        document(
                                selection(
                                        field(
                                                "book",
                                                selections(
                                                        field("id", bookId),
                                                        field("title", "Book Numero Dos")
                                                )
                                        )
                                )
                        ).toResponse()
                ))

        Book book = new Book(id: bookId as long, title: "Book Updated")
        when: "we update that entity"
        RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(
                        query: document(
                                mutation(
                                        selection(
                                                field(
                                                        "book",
                                                        arguments(
                                                                argument("op", "UPSERT"),
                                                                argument("data", book)
                                                        ),

                                                        selections(
                                                                field("id"),
                                                                field("title")
                                                        )
                                                )

                                        ))
                        ).toQuery()
                )
                .when()
                .post()
                .then()
                .statusCode(200)

        then: "we can retrieve that entity with updated attribute"
        RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(
                        query: document(
                                selection(
                                        field(
                                                "book",
                                                selections(
                                                        field("id"),
                                                        field("title")
                                                )
                                        )
                                )
                        ).toQuery()
                )
                .when()
                .post()
                .then()
                .statusCode(200)
                .body(equalTo(
                        document(
                                selection(
                                        field(
                                                "book",
                                                selections(
                                                        field("id", bookId),
                                                        field("title", "Book Updated")
                                                )
                                        )
                                )
                        ).toResponse()
                ))

        when: "the entity is deleted"
        RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(
                        query: document(
                                mutation(
                                        selection(
                                                field(
                                                        "book",
                                                        arguments(
                                                                argument("op", "DELETE"),
                                                                argument("ids", [bookId])
                                                        ),

                                                        selections(
                                                                field("id"),
                                                                field("title")
                                                        )
                                                )

                                        ))
                        ).toQuery()
                )
                .when()
                .post()
                .then()
                .statusCode(200)

        then: "that entity is not found in database anymore"
        RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(
                        query: document(
                                selection(
                                        field(
                                                "book",
                                                selections(
                                                        field("id"),
                                                        field("title")
                                                )
                                        )
                                )
                        ).toQuery()
                )
                .when()
                .post()
                .then()
                .statusCode(200)
                .body("data", equalTo(
                        [
                                book: [
                                        edges: []
                                ]
                        ] as HashMap
                ))
    }

    def "GraphQL API can sort and paginate (effectively fetching 1 record with some min/max attribute)"() {
        given: "3 entities are inserted into the database"
        createBook(new Book(title: "Pride & Prejudice"))
        createBook(new Book(title: "Effective Java"))
        final String maxBookId = createBook(new Book(title: "Critiques of Pure Reason"))
                .jsonPath()
                .get("data.book.edges[0].node.id")

        expect: "sorting by ID in descending order and paginating to get the firsts result returns Kant's work"
        RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(
                        query: """
                                {
                                    book(sort: "-id", first: "1", after: "0") {
                                        edges {
                                            node {
                                                id
                                                title
                                            }
                                        }
                                        pageInfo {
                                            totalRecords
                                            startCursor
                                            endCursor
                                            hasNextPage
                                        }
                                    }
                                }

                        """
                )
                .when().post().then()
                .statusCode(200)
                .body(equalTo(
                        new JsonBuilder(
                                data: [
                                        book: [
                                                edges:[[
                                                               node: [
                                                                       id: "${maxBookId}",
                                                                       title:"Critiques of Pure Reason"
                                                               ]
                                                       ]],
                                                pageInfo: [
                                                        totalRecords: 3,
                                                        startCursor: "0",
                                                        endCursor: "1",
                                                        hasNextPage:true
                                                ]
                                        ]
                                ]
                        ).toString()
                ))
    }

    static Response createBook(@NotNull final Book book) {
        RestAssured
                .given()
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(
                        query: document(
                                mutation(
                                        selection(
                                                field(
                                                        "book",
                                                        arguments(
                                                                argument("op", "UPSERT"),
                                                                argument("data", book)
                                                        ),
                                                        selections(
                                                                field("id"),
                                                                field("title")
                                                        )
                                                )
                                        )
                                )
                        ).toQuery()
                )
                .when()
                .post()
    }
}
