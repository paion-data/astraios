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
import jakarta.ws.rs.container.ContainerResponseContext;
import jakarta.ws.rs.container.ContainerResponseFilter;

public class CorsFilter implements ContainerResponseFilter {

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
