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

import com.paiondata.astraios.web.filters.oauth.AccessTokenValidator

import jakarta.ws.rs.container.ContainerRequestContext
import jakarta.ws.rs.core.MultivaluedHashMap
import jakarta.ws.rs.core.MultivaluedMap
import jakarta.ws.rs.core.Response
import spock.lang.Specification
import spock.lang.Unroll

class OAuthFilterSpec extends Specification {

    def "When request is missing 'Authorization' header, request is aborted"() {
        given: "incoming request is missing auth header"
        ContainerRequestContext requestContext = Mock(ContainerRequestContext)
        requestContext.getHeaders() >> new MultivaluedHashMap()

        when: "filter is trying to validate some token"
        new OAuthFilter(Mock(AccessTokenValidator)).filter(requestContext)

        then: "non-existing token header aborts the request"
        1 * requestContext.abortWith(_ as Response)
    }

    @Unroll
    def "When request comes with #tokenKind access token, request is #abort"() {
        given: "a mocked token validator that declares both a valid and invalid token in 2 sequential calls"
        AccessTokenValidator validator = Mock(AccessTokenValidator)
        validator.validate(_ as String) >> validToken

        and: "request always comes with a access token in header"
        MultivaluedMap<String, String> headers = new MultivaluedHashMap<>()
        headers.put(OAuthFilter.AUTHORIZATION_HEADER, [OAuthFilter.AUTHORIZATION_SCHEME + " " + "some_token"])

        and: "the header is in request context"
        ContainerRequestContext requestContext = Mock(ContainerRequestContext)
        requestContext.getHeaders() >> headers

        when: "filter validates token with the mocked validator"
        new OAuthFilter(validator).filter(requestContext)

        then: "invalid token aborts the request while valid token does not"
        (validToken? 0 : 1) * requestContext.abortWith(_ as Response)

        where:
        tokenKind | validToken
        "valid"   | true
        "invalid" | false

        abort = validToken ? "not aborted" : "aborted"
    }

    @SuppressWarnings('GroovyAccessibility')
    def "Filter can extract access token from request header"() {
        given: "a header set with a access token in it"
        MultivaluedMap<String, String> headers = new MultivaluedHashMap<>()
        headers.put(
                OAuthFilter.AUTHORIZATION_HEADER,
                [OAuthFilter.AUTHORIZATION_SCHEME + " " + "43rgfgef43ewfg4gergeg43g34g"]
        )

        and: "the header is in request context"
        ContainerRequestContext requestContext = Mock(ContainerRequestContext)
        requestContext.getHeaders() >> headers

        expect: "filter retrieves the token"
        OAuthFilter.getAccessToken(requestContext) == "43rgfgef43ewfg4gergeg43g34g"
    }
}
