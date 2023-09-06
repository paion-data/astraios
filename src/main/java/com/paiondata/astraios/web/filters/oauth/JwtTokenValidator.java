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
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

/**
 * {@link JwtTokenValidator} validates an OAuth 2 access token in <a href="https://jwt.io/">JWT</a> format.
 *
 * It validates the access token by verifying the integrity of the header and payload to ensure that they have not been
 * altered by using token's signature section.
 */
@Immutable
@ThreadSafe
public class JwtTokenValidator implements AccessTokenValidator {

    @Override
    public boolean validate(@NotNull final String accessToken) {
        // TODO: (Minghui) 使用 jjwt Java library 校验一个 access token
        // 【GitHub】jjwt 项目地址: https://github.com/jwtk/jjwt
        // 【教程】如何使用 jjwt 校验（validate）一个 JWT token: https://www.baeldung.com/java-jwt-token-decode#verifying-jwt
        // 如果 accessToken 是合法的，则该方法返回 true，否则返回 false
        return true;
    }
}
