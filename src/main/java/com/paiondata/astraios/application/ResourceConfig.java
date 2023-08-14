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
import com.yahoo.elide.ElideSettings;
import com.yahoo.elide.annotation.Include;
import com.yahoo.elide.core.TransactionRegistry;
import com.yahoo.elide.core.datastore.DataStore;
import com.yahoo.elide.core.dictionary.EntityDictionary;
import com.yahoo.elide.modelconfig.DynamicConfiguration;
import com.yahoo.elide.standalone.Util;
import com.yahoo.elide.standalone.config.ElideStandaloneSettings;

import org.glassfish.hk2.api.ServiceLocator;
import org.glassfish.jersey.internal.inject.AbstractBinder;

import jakarta.inject.Inject;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.servlet.ServletContext;
import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Context;
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

import java.io.IOException;
import java.util.Optional;
import java.util.Properties;

/**
 * The resource configuration for the web applications.
 */
@Immutable
@ThreadSafe
@ApplicationPath("v1")
public class ResourceConfig extends org.glassfish.jersey.server.ResourceConfig {

    private final ServiceLocator injector;

    @Entity
    @Table(name="ArtifactGroup")
    @Include(rootLevel = true, name = "group", friendlyName = "group", description = "group desc")
    public class ArtifactGroup {
        @Id
        public String name = "";

        public String description = "";
    }

    public class AstraiosBinder extends AbstractBinder {

        @Override
        protected void configure() {
            ElideStandaloneSettings settings = new ElideStandaloneSettings() {
                @Override
                public String getModelPackageName() {
                    return ArtifactGroup.class.getPackage().getName();
                }

                @Override
                public Properties getDatabaseProperties() {
                    Properties options = new Properties();

                    options.put("hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");
                    options.put("javax.persistence.jdbc.driver", "com.mysql.jdbc.Driver");
                    options.put("javax.persistence.jdbc.url", "jdbc:mysql://localhost:3306/testDB");
                    options.put("javax.persistence.jdbc.user", "root");
                    options.put("javax.persistence.jdbc.password", "root");

                    return options;
                }
            };

            EntityManagerFactory entityManagerFactory = Util.getEntityManagerFactory(
                    settings.getClassScanner(),
                    settings.getModelPackageName(),
                    false,
                    settings.getDatabaseProperties()
            );
            DataStore dataStore = settings.getDataStore(entityManagerFactory);

            Optional<DynamicConfiguration> dynamicConfiguration;
            try {
                dynamicConfiguration = settings.getDynamicConfiguration(settings.getClassScanner());
            } catch (IOException exception) {
                throw new IllegalStateException(exception);
            }
            EntityDictionary entityDictionary = settings.getEntityDictionary(
                    injector,
                    settings.getClassScanner(),
                    dynamicConfiguration,
                    settings.getEntitiesToExclude()
            );

            ElideSettings elideSettings = settings.getElideSettings(entityDictionary, dataStore, settings.getObjectMapper());
            Elide elide = new Elide(
                    elideSettings,
                    new TransactionRegistry(),
                    elideSettings.getDictionary().getScanner(),
                    false
            );

            // All Elide bindings
            bind(elide).to(Elide.class).named("elide");
            bind(elideSettings).to(ElideSettings.class);
            bind(elideSettings.getDictionary()).to(EntityDictionary.class);
            bind(elideSettings.getDataStore()).to(DataStore.class).named("elideDataStore");
        }
    }

    /**
     * DI Constructor.
     */
    @Inject
    public ResourceConfig(ServiceLocator injector, @Context ServletContext servletContext) {
        this.injector = injector;
        register(new AstraiosBinder());
    }
}
