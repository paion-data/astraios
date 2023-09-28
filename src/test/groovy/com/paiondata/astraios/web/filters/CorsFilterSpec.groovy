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
import jakarta.ws.rs.core.Response
import spock.lang.Specification
import spock.lang.Unroll

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

    def "#requestType was #abort"() {
        given:
        ContainerRequestContext request = Mock(ContainerRequestContext)
        request.getHeaderString("Origin") >> requestHeader
        request.getMethod() >>  requestMethod

        when:
        new CorsFilter().filter(request)

        then:
        callTimes * request.abortWith(_ as Response)

        where:
        requestHeader  || requestMethod || callTimes
        "*"            ||   "OPTIONS"   || 1
        null           ||     "POST"    || 0

        requestType = callTimes == 1 ? "Preflight request" : "Other requests"
        abort = callTimes == 1 ? "abort" : "not abort"
    }

    @Unroll
    def "The request #judgment a flight request"() {
        given:
        ContainerRequestContext request = Mock(ContainerRequestContext)
        request.getHeaderString("Origin") >> requestHeader
        request.getMethod() >> requestMethod

        expect:
        CorsFilter.isPreflightRequest(request) == result

        where:
        requestHeader  || requestMethod || result
        "*"            ||   "OPTIONS"   || true
        null           ||     "POST"    || false

        judgment = result ? "is" : "not"
    }
}
