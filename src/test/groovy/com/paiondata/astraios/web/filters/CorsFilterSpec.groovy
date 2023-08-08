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
package com.paiondata.astraios.web.filters

import jakarta.ws.rs.container.ContainerRequestContext
import jakarta.ws.rs.container.ContainerResponseContext
import jakarta.ws.rs.core.MultivaluedHashMap
import jakarta.ws.rs.core.MultivaluedMap
import spock.lang.Specification

class CorsFilterSpec extends Specification {

    def "Cross-origin header gets attached"() {
        given:
        ContainerResponseContext response = Mock(ContainerResponseContext)
        MultivaluedMap headers = Mock(MultivaluedMap)
        response.getHeaders() >>> [
                headers,
                new MultivaluedHashMap<>([:]),
                new MultivaluedHashMap<>([:]),
                new MultivaluedHashMap<>([:])
        ]

        when:
        new CorsFilter().filter(Mock(ContainerRequestContext), response)

        then:
        1 * headers.add("Access-Control-Allow-Origin", "*")
    }
}

