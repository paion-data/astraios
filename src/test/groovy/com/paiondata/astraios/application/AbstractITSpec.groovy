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

import io.restassured.RestAssured
import spock.lang.Specification

class AbstractITSpec extends Specification {

    static final int WS_PORT = 8080

    def setupSpec() {
        RestAssured.baseURI = "http://localhost"
        RestAssured.port = WS_PORT
        RestAssured.basePath = "/v1/data/"
    }

    def cleanupSpec() {
        RestAssured.reset()
    }
}
