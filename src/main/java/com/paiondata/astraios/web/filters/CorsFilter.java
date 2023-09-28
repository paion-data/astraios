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

import jakarta.validation.constraints.NotNull;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.container.ContainerResponseContext;
import jakarta.ws.rs.container.ContainerResponseFilter;
import jakarta.ws.rs.core.Response;

/**
 * {@link CorsFilter} prevents corss-origin request error in local dev environment.
 */
public class CorsFilter implements ContainerRequestFilter, ContainerResponseFilter {

    @Override
    public void filter(
            @NotNull final ContainerRequestContext request
    ) {
        if (isPreflightRequest(request)) {
            request.abortWith(Response.ok().build());
        }
    }

    /**
     * A preflight request is an OPTIONS request with an Origin header.
     *
     * @param request  A preflight request
     *
     * @return A judgment result of the boolean type
     */
    private static boolean isPreflightRequest(
            @NotNull final ContainerRequestContext request
    ) {
        return request.getHeaderString("Origin") != null
                && request.getMethod().equalsIgnoreCase("OPTIONS");
    }

    @Override
    public void filter(
            @NotNull final ContainerRequestContext request,
            @NotNull final ContainerResponseContext response
    ) {
        response.getHeaders().add("Access-Control-Allow-Origin", "*");
        response.getHeaders().add(
                "Access-Control-Allow-Headers",
                "CSRF-Token, X-Requested-By, Authorization, Content-Type"
        );
        response.getHeaders().add("Access-Control-Allow-Credentials", "true");
        response.getHeaders().add(
                "Access-Control-Allow-Methods",
                "GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD"
        );
    }
}
