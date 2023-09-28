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
 * {@link CorsFilter} prevents corss-origin request error in local dev environment, and abort the preflight request and
 * make the request successful.
 */
public class CorsFilter implements ContainerRequestFilter, ContainerResponseFilter {

    static final String originHeader = "Origin";

    @Override
    public void filter(@NotNull final ContainerRequestContext request) {
        if (isPreflightRequest(request)) {
            request.abortWith(Response.ok().build());
        }
    }

    @Override
    public void filter(
            @NotNull final ContainerRequestContext request,
            @NotNull final ContainerResponseContext response
    ) {
        if (request.getHeaderString(originHeader) == null) {
            return;
        }

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

    /**
     * Returns whether or not a request is a preflight request.
     * <p>
     * A request is considered preflight if
     * <ul>
     *     <li> the request contains
     *          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin">"Origin"</a> header, and
     *     <li> the request method is "OPTIONS"
     * </ul>
     *
     * @param request  a pre-checked HTTP request
     *
     * @return {@code true} if the request is a preflight request or {@code false}, otherwise
     */
    private static boolean isPreflightRequest(@NotNull final ContainerRequestContext request) {
        return request.getHeaderString(originHeader) != null
                && request.getMethod().equalsIgnoreCase("OPTIONS");
    }
}
