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

import com.paiondata.astraios.web.filters.OAuthFilter

import org.eclipse.jetty.server.Server
import org.eclipse.jetty.servlet.ServletContextHandler
import org.eclipse.jetty.servlet.ServletHolder
import org.glassfish.jersey.servlet.ServletContainer
import org.testcontainers.containers.MySQLContainer
import org.testcontainers.spock.Testcontainers

import io.restassured.RestAssured
import io.restassured.builder.RequestSpecBuilder
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
}
