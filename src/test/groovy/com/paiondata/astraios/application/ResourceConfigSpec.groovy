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
package com.paiondata.astraios.application

import com.yahoo.elide.jsonapi.resources.JsonApiEndpoint

import com.paiondata.astraios.config.OAuthConfig
import com.paiondata.astraios.web.filters.CorsFilter
import com.paiondata.astraios.web.filters.OAuthFilter

import org.aeonbits.owner.ConfigFactory
import org.glassfish.hk2.api.ServiceLocator
import org.glassfish.jersey.internal.inject.Binder

import spock.lang.Specification
import spock.lang.Unroll

class ResourceConfigSpec extends Specification {

    static final OAuthConfig OAUTH_CONFIG = ConfigFactory.create(OAuthConfig.class)
    static final Set<Class> ALWAYS_REGISTERED_FILTERS = [CorsFilter, JsonApiEndpoint] as Set

    @SuppressWarnings('GroovyAccessibility')
    def "Instantiation triggers initialization and binding lifecycles"() {
        setup:
        BinderFactory binderFactory = Mock(BinderFactory)
        binderFactory.buildBinder(_ as ServiceLocator) >> Mock(Binder)

        when:
        org.glassfish.jersey.server.ResourceConfig resourceConfig = new ResourceConfig(
                Mock(ServiceLocator),
                binderFactory,
                OAUTH_CONFIG.authEnabled()
        )

        then:
        resourceConfig.classes.containsAll(ALWAYS_REGISTERED_FILTERS)
    }

    @Unroll
    @SuppressWarnings('GroovyAccessibility')
    def "When OAUTH_ENABLED = #oauthTurnedOn, OAuth filter is #registered"() {
        setup:
        BinderFactory binderFactory = Mock(BinderFactory)
        binderFactory.buildBinder(_ as ServiceLocator) >> Mock(Binder)

        when:
        org.glassfish.jersey.server.ResourceConfig resourceConfig = new ResourceConfig(
                Mock(ServiceLocator),
                binderFactory,
                oauthTurnedOn
        )

        then:
        resourceConfig.classes.contains(OAuthFilter) == containsOAuthFilter

        where:
        oauthTurnedOn || containsOAuthFilter
        true          || true
        false         || false

        registered = oauthTurnedOn ? "registered" : "not registered"
    }
}
