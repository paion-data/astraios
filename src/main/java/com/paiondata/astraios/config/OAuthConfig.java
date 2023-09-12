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
package com.paiondata.astraios.config;

import org.aeonbits.owner.Config;

import jakarta.validation.constraints.NotNull;
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

/**
 * {@link OAuthConfig} is responsible for all configs related to OAuth 2 aspects of the template.
 * <p>
 * {@link OAuthConfig} tries to load the configurations from several sources in the following order:
 * <ol>
 *     <li> the <a href="https://docs.oracle.com/javase/tutorial/essential/environment/env.html">
 *          operating system's environment variables</a>; for instance, an environment variable can be set with
 *          {@code export OAUTH_ENABLED="true"}
 *     <li> the <a href="https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html">
 *          Java system properties</a>; for example, a Java system property can
 *          be set using {@code System.setProperty("OAUTH_ENABLED", "true")}
 *     <li> a file named <b>oauth.properties</b> placed under CLASSPATH. This file can be put under
 *          {@code src/main/resources} source directory with contents, for example, {@code OAUTH_ENABLED=true}
 * </ol>
 * Note that environment config has higher priority than Java system properties. Java system properties have higher
 * priority than file based configuration.
 */
@Immutable
@ThreadSafe
@Config.LoadPolicy(Config.LoadType.MERGE)
@Config.Sources({"system:env", "system:properties", "classpath:oauth.properties"})
public interface OAuthConfig extends Config {

    /**
     * Whether or not to enable {@link com.qubitpi.ws.jersey.template.web.filters.OAuthFilter} container request filter.
     *
     * @return {@code true} if enabling the OAuth filter or {@code false}, otherwise
     */
    @NotNull
    @Key("OAUTH_ENABLED")
    boolean authEnabled();

    /**
     * A standard <a href="https://datatracker.ietf.org/doc/html/rfc7517">JWKS</a> URL that, on GET, returns a json
     * object.
     * <p>
     * For example:
     * <pre>
     * {@code
     * {
     *     "keys": [
     *         {
     *             "kty": "EC",
     *             "use": "sig",
     *             "kid": "eTERknhur9q8gisdaf_dfrqrgdfsg",
     *             "alg": "ES384",
     *             "crv": "P-384",
     *             "x": "sdfrgHGYF...",
     *             "y": "sdfuUIG&8..."
     *         }
     *     ]
     * }
     * }
     * </pre>
     *
     * @return a valid URL
     */
    @NotNull
    @Key("JWKS_URL")
    String jwksUrl();
}
