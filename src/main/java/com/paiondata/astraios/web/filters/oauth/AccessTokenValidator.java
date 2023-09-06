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
package com.paiondata.astraios.web.filters.oauth;

import jakarta.validation.constraints.NotNull;

/**
 * {@link AccessTokenValidator} validates an OAuth 2 access token.
 *
 * This is a {@link java.util.function functional interface} whose functional method is {@link #validate(String)}.
 */
@FunctionalInterface
public interface AccessTokenValidator {

    /**
     * Returns whether or not a specified access token is valid.
     *
     * @param accessToken  The token to validate
     *
     * @return {@code true} if the token is valid or {@code false} otherwise
     *
     * @throws NullPointerException if {@code accessToken} is {@code null}
     */
    boolean validate(@NotNull String accessToken);
}
