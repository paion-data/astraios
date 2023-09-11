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

import io.restassured.RestAssured
import io.restassured.builder.RequestSpecBuilder
import spock.lang.Specification

class AbstractITSpec extends Specification {

    static final int WS_PORT = 8080
    static final String VALID_TOKEN = "eyJhbGciOiJFUzM4NCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlR2WEQ5dkM3SU4tQ3IwRWhGWUlfemZselVMVXZEYnN0TTFuSWVibDJlNncifQ.eyJqdGkiOiJXZkNqX3Z0OWpjamNZcHBMMVVsOFEiLCJzdWIiOiJ2ajhqbXBzYnJjYjkiLCJpYXQiOjE2OTQwNzQyOTgsImV4cCI6Mzg0MTU1Nzk0NSwic2NvcGUiOiIiLCJjbGllbnRfaWQiOiJ5cG9uODl6OHJ0cmpkZzV0YTY2OWwiLCJpc3MiOiJodHRwczovL3U0djVuZS5sb2d0by5hcHAvb2lkYyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92MS9kYXRhIn0.NUpvIX1iHq06S0G3swreoc7ixBxQfcGfd8jvqmMeBbnUaTQJ-Ap-UYwJkiZ0ojuOjG2_gETG0HcNcrugo6VKNmyU0-woh2-eA9ROqNNOjkHC41hDOdnBCzB-2__Qo_Xd"

    def childSetupSpec() {
        // intentionally left blank
    }

    def childCleanupSpec() {
        // intentionally left blank
    }

    def setupSpec() {
        RestAssured.baseURI = "http://localhost"
        RestAssured.port = WS_PORT
        RestAssured.basePath = "/v1/data/"
        RestAssured.requestSpecification = new RequestSpecBuilder()
                .addHeader(OAuthFilter.AUTHORIZATION_HEADER, OAuthFilter.AUTHORIZATION_SCHEME + " " + VALID_TOKEN)
                .build()

        System.setProperty("OAUTH_ENABLED", "true")
        System.setProperty("JWKS_URL", "https://u4v5ne.logto.app/oidc/jwks")

        childSetupSpec()
    }

    def cleanupSpec() {
        RestAssured.reset()
        System.clearProperty("OAUTH_ENABLED")

        childCleanupSpec()
    }
}
