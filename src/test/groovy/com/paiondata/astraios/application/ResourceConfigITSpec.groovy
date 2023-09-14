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
package com.paiondata.astraios.application

import static com.yahoo.elide.test.graphql.GraphQLDSL.arguments
import static com.yahoo.elide.test.graphql.GraphQLDSL.document
import static com.yahoo.elide.test.graphql.GraphQLDSL.field
import static com.yahoo.elide.test.graphql.GraphQLDSL.selection
import static com.yahoo.elide.test.graphql.GraphQLDSL.selections
import static com.yahoo.elide.test.graphql.GraphQLDSL.argument
import static org.hamcrest.Matchers.equalTo
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.attr
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.attributes
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.data
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.datum
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.resource
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.type
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.id
import static com.yahoo.elide.test.graphql.GraphQLDSL.mutation

import com.paiondata.astraios.models.Book;

import com.yahoo.elide.jsonapi.JsonApi

import com.paiondata.astraios.web.filters.OAuthFilter

import org.apache.http.HttpStatus
import org.eclipse.jetty.server.Server
import org.eclipse.jetty.servlet.ServletContextHandler
import org.eclipse.jetty.servlet.ServletHolder
import org.glassfish.jersey.servlet.ServletContainer
import org.testcontainers.containers.MySQLContainer
import org.testcontainers.spock.Testcontainers

import io.restassured.RestAssured
import io.restassured.builder.RequestSpecBuilder
import io.restassured.response.Response
import spock.lang.Shared

@Testcontainers
class ResourceConfigITSpec extends AbstractITSpec {

    final Server jettyEmbeddedServer = new Server(WS_PORT)

    @Shared
    final MySQLContainer MYSQL = new MySQLContainer("mysql:5.7.43").withDatabaseName("elide")

    @Override
    def childSetupSpec() {
        RestAssured.requestSpecification = new RequestSpecBuilder()
                .addHeader(OAuthFilter.AUTHORIZATION_HEADER, OAuthFilter.AUTHORIZATION_SCHEME + " " + VALID_TOKEN)
                .build()

        System.setProperty("OAUTH_ENABLED", "true")
        System.setProperty("JWKS_URL", "https://u4v5ne.logto.app/oidc/jwks")

        System.setProperty(
                "DB_URL",
                String.format("jdbc:mysql://localhost:%s/elide?serverTimezone=UTC", MYSQL.firstMappedPort)
        )
    }

    @Override
    def childCleanupSpec() {
        System.clearProperty("DB_URL")
        System.clearProperty("JWKS_URL")
        System.clearProperty("OAUTH_ENABLED")
    }


    @SuppressWarnings('GroovyAccessibility')
    def setup() {
        ServletContextHandler servletContextHandler = new ServletContextHandler()
        servletContextHandler.setContextPath("/")

        jettyEmbeddedServer.setHandler(servletContextHandler)

        ServletHolder jerseyServlet = servletContextHandler.addServlet(ServletContainer.class, "/v1/data/*")
        jerseyServlet.setInitOrder(0)
        jerseyServlet.setInitParameter(
                "jersey.config.server.provider.packages",
                [ResourceConfig.JAON_API_ENDPOINT_PACKAGE, ResourceConfig.GRAPHQL_ENDPOINT_PACKAGE].join(";")
        )
        jerseyServlet.setInitParameter("jakarta.ws.rs.Application", ResourceConfig.class.getCanonicalName())

        jettyEmbeddedServer.start()
    }

    def cleanup() {
        jettyEmbeddedServer.stop()
        jettyEmbeddedServer.destroy()
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
                                                attr("title", "Pride & Prejudice")
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
                .contentType("application/json")
                .accept("application/json")
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
        Response response = RestAssured
                .given()
                .contentType("application/json")
                .accept("application/json")
                .body(
                        query:
                         document(
                                 mutation(
                                         selection(
                                                field(
                                                "book",
                                                        arguments(
                                                                argument("op", "UPSERT"),
                                                                argument("data", new Book(title: "Book Numero Dos"))
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

        response.then()
                .statusCode(200)

        final String bookId = response.jsonPath().get("data.book.edges[0].node.id")

        then: "we can retrieve that entity next"
        RestAssured
                .given()
                .contentType("application/json")
                .accept("application/json")
                .body(query: document(
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
                .contentType("application/json")
                .accept("application/json")
                .body(
                        query:
                                document(
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

        then: "we can retrieve that entity with updated"
        RestAssured
                .given()
                .contentType("application/json")
                .accept("application/json")
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
                .contentType("application/json")
                .accept("application/json")
                .body(
                        query:
                                document(
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
                .contentType("application/json")
                .accept("application/json")
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
}
