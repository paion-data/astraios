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

import org.hamcrest.Matchers
import org.testcontainers.containers.DockerComposeContainer
import org.testcontainers.containers.wait.strategy.Wait
import org.testcontainers.spock.Testcontainers

import io.restassured.RestAssured

@Testcontainers
class DockerComposeITSpec extends AbstractITSpec {

    final DockerComposeContainer COMPOSE = new DockerComposeContainer(new File("docker-compose.yml"))
            .withEnv("MODEL_PACKAGE_NAME", System.getenv().get("ASTRAIOS_MODEL_PACKAGE_NAME"))
            .withExposedService(
                    "web",
                    WS_PORT,
                    Wait.forHttp("/v1/data/note")
                            .withHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
                            .forStatusCode(200)
            )

    def "JSON API allows for POSTing and GETing an entity"() {
        expect: "database is initially empty"
        RestAssured
                .given()
                .when()
                .get("note")
                .then()
                .statusCode(200
                )
                .body("data", Matchers.equalTo([]))
    }
}
