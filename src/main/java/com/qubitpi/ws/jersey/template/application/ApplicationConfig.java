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
package com.qubitpi.ws.jersey.template.application;

import org.aeonbits.owner.Config;

import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

/**
 * {@link ApplicationConfig} provides an interface for retrieving configuration values, allowing for implicit type
 * conversion, defaulting, and use of a runtime properties interface to override configured settings.
 * <p>
 * {@link ApplicationConfig} supports overriding between properties:
 * <ol>
 *     <li> It will try to load the given property from the
 *          <a href="https://docs.oracle.com/javase/tutorial/essential/environment/env.html">operating system's
 *          environment variables</a>; if an environment variable with the same name is found, its value will be
 *          returned. For instance, an environment variable can be set with
 *          {@code export EXAMPLE_CONFIG_KEY_NAME="some-value"}
 *     <li> Otherwise, it will try to load the given property from the
 *          <a href="https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html">Java system properties
 *          </a>; if such property is defined, the associated value is returned. For example, a Java system property can
 *          be set using {@code System.setProperty("EXAMPLE_CONFIG_KEY_NAME", "some-value")}
 *     <li> <b>The first resource defining the property will prevail.</b>
 * </ol>
 */
@Immutable
@ThreadSafe
@Config.LoadPolicy(Config.LoadType.MERGE)
@Config.Sources({"system:env", "system:properties"})
public interface ApplicationConfig extends Config {

    @Key("EXAMPLE_CONFIG_KEY_NAME")
    String exampleConfigKey();
}
