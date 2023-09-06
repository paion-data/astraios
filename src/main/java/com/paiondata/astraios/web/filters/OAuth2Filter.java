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
package com.paiondata.astraios.web.filters;

import com.paiondata.astraios.web.filters.oauth.AccessTokenValidator;

import jakarta.annotation.Priority;
import jakarta.inject.Inject;
import jakarta.validation.constraints.NotNull;
import jakarta.ws.rs.Priorities;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.Provider;
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

import java.io.IOException;
import java.util.Objects;

@Provider
@Immutable
@ThreadSafe
@Priority(Priorities.AUTHENTICATION)
public class OAuth2Filter implements ContainerRequestFilter {

    /**
     * The header key for OAuth 2 access token.
     */
    public static final String AUTHORIZATION_HEADER = "Authorization";

    /**
     * The token scheme.
     */
    public static final String AUTHORIZATION_SCHEME = "Bearer";

    private final AccessTokenValidator accessTokenValidator;

    /**
     * DI constructor.
     *
     * @param accessTokenValidator  An abstraction layer responsible for validating an OAuth2 access token
     */
    @Inject
    public OAuth2Filter(final AccessTokenValidator accessTokenValidator) {
        this.accessTokenValidator = Objects.requireNonNull(accessTokenValidator);
    }

    @Override
    public void filter(final ContainerRequestContext containerRequestContext) throws IOException {
        if (!containerRequestContext.getHeaders().containsKey(AUTHORIZATION_HEADER)) {
            containerRequestContext.abortWith(
                    Response.status(Response.Status.UNAUTHORIZED).entity("Authorization header is missing").build()
            );
            return;
        }

        final String accessToken = getAccessToken(containerRequestContext);

        if (!isValidToken(accessToken)) {
            containerRequestContext.abortWith(
                    Response.status(Response.Status.UNAUTHORIZED).entity("Invalid access token").build()
            );
        }
    }

    /**
     * Retrieves the access token from container request context.
     *
     * For example, when an HTTP request comes with header "Authorization": "Bearer 43rgfgef43ewfg4gergeg43g34g", this
     * method returns "43rgfgef43ewfg4gergeg43g34g".
     *
     * @param containerRequestContext  The request context that is ASSUMED to contain the "Authorization" header
     *
     * @return the bare access token
     */
    @NotNull
    private static String getAccessToken(@NotNull final ContainerRequestContext containerRequestContext) {
        return containerRequestContext
                .getHeaders()
                .get(AUTHORIZATION_HEADER)
                .get(0)
                .replaceFirst(AUTHORIZATION_SCHEME + " ", "");
    }

    /**
     * Returns whether or not a specified access token is valid.
     *
     * @param accessToken  The token to validate
     *
     * @return {@code true} if the token is valid or {@code false} otherwise
     *
     * @throws NullPointerException if {@code accessToken} is {@code null}
     */
    private boolean isValidToken(@NotNull final String accessToken) {
        return getTokenValidator().validate(accessToken);
    }

    @NotNull
    private AccessTokenValidator getTokenValidator() {
        return accessTokenValidator;
    }
}
