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
package com.paiondata.astraios.application;

import com.yahoo.elide.Elide;

import com.paiondata.astraios.web.filters.CorsFilter;

import org.glassfish.hk2.api.ServiceLocator;
import org.glassfish.hk2.utilities.Binder;

import jakarta.inject.Inject;
import jakarta.servlet.ServletContext;
import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Context;
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

/**
 * The resource configuration for the web applications.
 */
@Immutable
@ThreadSafe
@ApplicationPath("/v1/data/")
public class ResourceConfig extends org.glassfish.jersey.server.ResourceConfig {

    private static final String ENDPOINT_PACKAGE = "com.yahoo.elide.jsonapi.resources";

    /**
     * DI Constructor.
     *
     * @param injector  A standard HK2 service locator
     * @param servletContext  Currently unused
     */
    @Inject
    public ResourceConfig(final ServiceLocator injector, @Context final ServletContext servletContext) {
        packages(ENDPOINT_PACKAGE);

        register(new CorsFilter());
        register(new BinderFactory().buildBinder(injector));

        // Bind api docs to given endpoint
        // This looks strange, but Jersey binds its Abstract binders first, and then later it binds 'external'
        // binders (like this HK2 version).  This allows breaking dependency injection into two phases.
        // Everything bound in the first phase can be accessed in the second phase.
        register(new org.glassfish.hk2.utilities.binding.AbstractBinder() {
            @Override
            protected void configure() {
                final Elide elide = injector.getService(Elide.class, "elide");

                elide.doScans();
            }
        });
    }
}
