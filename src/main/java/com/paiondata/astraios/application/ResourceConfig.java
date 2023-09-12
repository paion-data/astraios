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

import com.paiondata.astraios.config.OAuthConfig;
import com.paiondata.astraios.web.filters.CorsFilter;
import com.paiondata.astraios.web.filters.OAuthFilter;

import org.aeonbits.owner.ConfigFactory;
import org.glassfish.hk2.api.ServiceLocator;

import jakarta.inject.Inject;
import jakarta.validation.constraints.NotNull;
import jakarta.ws.rs.ApplicationPath;
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
    private static final OAuthConfig OAUTH_CONFIG = ConfigFactory.create(OAuthConfig.class);

    /**
     * DI Constructor.
     *
     * @param injector  A standard HK2 service locator
     */
    @Inject
    public ResourceConfig(@NotNull final ServiceLocator injector) {
        this(injector, new BinderFactory(), OAUTH_CONFIG.authEnabled());
    }

    /**
     * Constructor that allows for finer dependency injection control.
     *
     * @param injector  A standard HK2 service locator
     * @param binderFactory  An object that produces resource binder
     * @param oauthEnabled  Flag on whether or not to enable auth feature, mainly for differentiating dev/test and prod
     */
    private ResourceConfig(
            @NotNull final ServiceLocator injector,
            @NotNull final BinderFactory binderFactory,
            final boolean oauthEnabled
    ) {
        packages(ENDPOINT_PACKAGE);

        register(CorsFilter.class);

        if (oauthEnabled) {
            register(OAuthFilter.class);
        }

        register(binderFactory.buildBinder(injector));

        // Bind api docs to given endpoint
        // This looks strange, but Jersey binds its Abstract binders first, and then later it binds 'external'
        // binders (like this HK2 version). This allows breaking dependency injection into two phases.
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
