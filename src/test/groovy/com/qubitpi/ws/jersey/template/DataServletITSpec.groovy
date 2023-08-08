/*
 * Copyright Jiaqi Liu
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
package com.qubitpi.ws.jersey.template

import org.testcontainers.containers.GenericContainer
import org.testcontainers.images.PullPolicy
import org.testcontainers.images.builder.ImageFromDockerfile
import org.testcontainers.spock.Testcontainers

import io.restassured.RestAssured
import spock.lang.IgnoreIf
import spock.lang.Shared
import spock.lang.Specification
import spock.lang.Subject
import spock.lang.Unroll

import java.nio.file.Paths

/**
 * Integration tests for WS running in Dockerfile.
 *
 * It uses testcontainers to orchestrate lifecycle of the test container through @Testcontainers annotation
 *
 * see https://www.testcontainers.org/quickstart/spock_quickstart/
 * see https://www.testcontainers.org/test_framework_integration/spock/#testcontainers-class-annotation
 */
@Testcontainers
@IgnoreIf({ isLocal() })
class DataServletITSpec extends Specification {

    static final int SUCCESS = 0
    static final List<String> LOCAL_ENVS = ["Mac OS X", "windows"]
    static final String CHECK_DOCKER_INSTALLED_COMMAND = "docker -v"
    static final String DOCKERFILE_ABS_PATH = String.format("%s/Dockerfile", System.getProperty("user.dir"))

    @Deprecated
    @SuppressWarnings('GroovyUnusedCatchParameter')
    private static boolean dockerNotInstalled() {
        try {
            return Runtime.getRuntime().exec(CHECK_DOCKER_INSTALLED_COMMAND).waitFor() != SUCCESS
        } catch (Exception exception) {
            return true // I hate this
        }
    }

    private static boolean isLocal() {
        return System.properties['os.name'] as String in LOCAL_ENVS
    }

    @Shared
    @Subject
    GenericContainer container = new GenericContainer<>(
            new ImageFromDockerfile().withDockerfile(Paths.get(DOCKERFILE_ABS_PATH))
    )
            .withExposedPorts(8080)
            .withImagePullPolicy(PullPolicy.defaultPolicy())

    def setupSpec() {
        RestAssured.baseURI = "http://" + container.host
        RestAssured.port = container.firstMappedPort
        RestAssured.basePath = "/v1"
    }

    @Unroll
    def "Dockerized WS responds to healthcheck request 200 SUCCESS"() {
        expect:
        RestAssured.given()
                .when()
                .get("/data/healthcheck")
                .then()
                .statusCode(200)
    }
}
