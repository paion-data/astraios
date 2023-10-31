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
 * {@link ApplicationConfig} provides an interface for retrieving configuration values, allowing for implicit type
 * conversion, defaulting, and use of a runtime properties interface to override configured settings.
 * <p>
 * {@link ApplicationConfig} tries to load the configurations from several sources in the following order:
 * <ol>
 *     <li> the <a href="https://docs.oracle.com/javase/tutorial/essential/environment/env.html">
 *          operating system's environment variables</a>; for instance, an environment variable can be set with
 *          {@code export EXAMPLE_CONFIG_KEY_NAME="foo"}
 *     <li> the <a href="https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html">
 *          Java system properties</a>; for example, a Java system property can
 *          be set using {@code System.setProperty("EXAMPLE_CONFIG_KEY_NAME", "foo")}
 *     <li> a file named <b>oauth.properties</b> placed under CLASSPATH. This file can be put under
 *          {@code src/main/resources} source directory with contents, for example, {@code EXAMPLE_CONFIG_KEY_NAME=foo}
 * </ol>
 * Note that environment config has higher priority than Java system properties. Java system properties have higher
 * priority than file based configuration.
 */
@Immutable
@ThreadSafe
@Config.LoadPolicy(Config.LoadType.MERGE)
@Config.Sources({"classpath:application.properties", "system:properties", "system:env"})
public interface ApplicationConfig extends Config {

    /**
     * The fully qualified package name that contains a set of Elide JPA models.
     *
     * @return a standard package name under which each class is a JPA entity class
     */
    @NotNull
    @Key("MODEL_PACKAGE_NAME")
    String modelPackageName();
}
