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

import com.yahoo.elide.jsonapi.JsonApi

import org.apache.http.HttpStatus
import org.eclipse.jetty.server.Server
import org.eclipse.jetty.servlet.ServletContextHandler
import org.eclipse.jetty.servlet.ServletHolder
import org.glassfish.jersey.servlet.ServletContainer
import org.hamcrest.Matchers
import org.testcontainers.containers.MySQLContainer
import org.testcontainers.spock.Testcontainers

import io.restassured.RestAssured
import spock.lang.Shared

@Testcontainers
class ResourceConfigITSpec extends AbstractITSpec {

    static final int WS_PORT = 8080

    final Server jettyEmbeddedServer = new Server(WS_PORT)

    @Shared
    final MySQLContainer MYSQL = new MySQLContainer("mysql:5.7.43").withDatabaseName("elide")

    def setupSpec() {
        RestAssured.baseURI = "http://localhost"
        RestAssured.port = WS_PORT
        RestAssured.basePath = "/"

        System.setProperty(
                "DB_URL",
                String.format("jdbc:mysql://localhost:%s/elide?serverTimezone=UTC", MYSQL.firstMappedPort)
        )
    }

    def cleanupSpec() {
        RestAssured.reset()
    }

    @SuppressWarnings('GroovyAccessibility')
    def setup() {
        ServletContextHandler servletContextHandler = new ServletContextHandler()
        servletContextHandler.setContextPath("/")

        jettyEmbeddedServer.setHandler(servletContextHandler)

        ServletHolder jsonApiServlet = servletContextHandler.addServlet(ServletContainer.class, "/v1/data/*")
        jsonApiServlet.setInitOrder(0)
        jsonApiServlet.setInitParameter("jersey.config.server.provider.packages", ResourceConfig.ENDPOINT_PACKAGE)
        jsonApiServlet.setInitParameter("jakarta.ws.rs.Application", ResourceConfig.class.getCanonicalName())

        jettyEmbeddedServer.start()
    }

    def cleanup() {
        jettyEmbeddedServer.stop()
        jettyEmbeddedServer.destroy()
    }

    def "JSON API allows for POSTing and GETing a book"() {
        expect: "database is initially empty"
        RestAssured
                .given()
                .when()
                .get("/v1/data/book")
                .then()
                .statusCode(200)
                .body("data", Matchers.equalTo([]))

        when: "an entity is POSTed via JSON API"
        RestAssured
                .given()
                .contentType(JsonApi.MEDIA_TYPE)
                .accept(JsonApi.MEDIA_TYPE)
                .body("""
                    {"data": {"type": "book", "id": "elide-demo", "attributes": {"title": "Pride & Prejudice"}}}
                """)
                .when()
                .post("/v1/data/book")
                .then()
                .statusCode(HttpStatus.SC_CREATED)

        then: "we can GET that entity next"
        RestAssured
                .given()
                .when()
                .get("/v1/data/book")
                .then()
                .statusCode(200)
                .body("data", Matchers.equalTo([
                        [
                                type: "book",
                                id: "elide-demo",
                                attributes: [
                                        title: "Pride & Prejudice"
                                ]
                        ]
                ]))
    }
}
