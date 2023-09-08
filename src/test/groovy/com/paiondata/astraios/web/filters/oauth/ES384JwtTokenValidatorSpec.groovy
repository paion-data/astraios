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
package com.paiondata.astraios.web.filters.oauth

import com.auth0.jwk.InvalidPublicKeyException
import com.auth0.jwk.Jwk
import com.auth0.jwk.JwkException
import com.auth0.jwk.JwkProvider
import com.auth0.jwt.exceptions.SignatureVerificationException

import spock.lang.Specification

class ES384JwtTokenValidatorSpec extends Specification {

    def "ES384 JWT token can be decoded and its signature can be verified"() {
        when: "a validator is verifying with a real valid JWK"
        AccessTokenValidator validator = new ES384JwtTokenValidator("https://u4v5ne.logto.app/oidc/jwks")

        then: "the validator is validating a good token"
        boolean isValid = validator.validate(validToken())

        and: "validation passes without error"
        isValid
        noExceptionThrown()
    }

    def "Invalid token triggers error"() {
        when: "a token gets tamperred"
        new ES384JwtTokenValidator("https://u4v5ne.logto.app/oidc/jwks").validate(invalidToken())

        then: "token signature verification fails and error is thrown"
        thrown(SignatureVerificationException)
    }

    @SuppressWarnings('GroovyAccessibility')
    def "Expensive JwkProviderBuilder operation is an one-time load"() {
        expect:
        ES384JwtTokenValidator.getJwkProvider("https://www.this-is-a-test-JWKS.com") != null
    }

    @SuppressWarnings('GroovyAccessibility')
    def "Invalid URL does not produce a JwkProviderBuilder instance"() {
        when: "URL has no protocol"
        ES384JwtTokenValidator.getJwkProvider("www.url-with-no-protocol.com")

        then: "error is thrown to indicate the invalid protocol"
        Exception exception = thrown(IllegalStateException)
        exception.message == "Invalid JWKS URL: 'www.url-with-no-protocol.com'"
    }

    @SuppressWarnings('GroovyAccessibility')
    def "When token key ID is not associated with the JWK, verification process throws error"() {
        setup: "JWK Provider never finds a JWK set for any token"
        JwkProvider jwkProvider = Mock(JwkProvider)
        jwkProvider.get(_ as String) >> { throw new JwkException("") }

        when: "a JWK set is to be found in the provider"
        ES384JwtTokenValidator.getJwk(jwkProvider, validToken())

        then: "exception gets caught and got checked out as IllegalStateException"
        Exception exception = thrown(IllegalStateException)
        exception.message == "The key ID in the access token does not match any JWK"
    }

    @SuppressWarnings('GroovyAccessibility')
    def "When public key, which used for verification, cannot be obtained from JWK, verification process throws error"() {
        setup: "a JWK never gives a good public key for verification"
        Jwk jwk = Mock(Jwk)
        jwk.getPublicKey() >> { throw new InvalidPublicKeyException("") }

        when: "a public key is to be retrieved from the JWK set"
        ES384JwtTokenValidator.getVerificationAlgorithm(jwk)

        then: "exception gets caught and got checked out as IllegalStateException"
        Exception exception = thrown(IllegalStateException)
        exception.message == "The public key cannot be build from JWK"
    }

    /**
     * This token is valid until around year 2091.
     *
     * @return a valid ES384 token that can be verified by keys from "https://u4v5ne.logto.app/oidc/jwks"
     */
    String validToken() {
        "eyJhbGciOiJFUzM4NCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlR2WEQ5dkM3SU4tQ3IwRWhGWUlfemZselVMVXZEYnN0TTFuSWVibDJlNncifQ.eyJqdGkiOiJXZkNqX3Z0OWpjamNZcHBMMVVsOFEiLCJzdWIiOiJ2ajhqbXBzYnJjYjkiLCJpYXQiOjE2OTQwNzQyOTgsImV4cCI6Mzg0MTU1Nzk0NSwic2NvcGUiOiIiLCJjbGllbnRfaWQiOiJ5cG9uODl6OHJ0cmpkZzV0YTY2OWwiLCJpc3MiOiJodHRwczovL3U0djVuZS5sb2d0by5hcHAvb2lkYyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92MS9kYXRhIn0.NUpvIX1iHq06S0G3swreoc7ixBxQfcGfd8jvqmMeBbnUaTQJ-Ap-UYwJkiZ0ojuOjG2_gETG0HcNcrugo6VKNmyU0-woh2-eA9ROqNNOjkHC41hDOdnBCzB-2__Qo_Xd"
    }

    String invalidToken() {
        return validToken() + "Hobbs & Shaw are funny!"
    }
}
