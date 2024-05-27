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

import com.paiondata.elide.Elide;
import com.paiondata.elide.ElideSettings;
import com.paiondata.elide.core.audit.Slf4jLogger;
import com.paiondata.elide.core.datastore.DataStore;
import com.paiondata.elide.core.dictionary.EntityDictionary;
import com.paiondata.elide.core.dictionary.Injector;
import com.paiondata.elide.core.filter.dialect.RSQLFilterDialect;
import com.paiondata.elide.core.utils.ClassScanner;
import com.paiondata.elide.core.utils.DefaultClassScanner;
import com.paiondata.elide.core.utils.coerce.CoerceUtil;
import com.paiondata.elide.datastores.jpa.JpaDataStore;
import com.paiondata.elide.datastores.jpa.PersistenceUnitInfoImpl;
import com.paiondata.elide.datastores.jpa.transaction.NonJtaTransaction;
import com.paiondata.elide.jsonapi.JsonApiSettings;
import com.paiondata.elide.spring.config.ElideConfigProperties;

import com.paiondata.astraios.settings.ApplicationConfig;
import com.paiondata.astraios.settings.JpaDatastoreConfig;

import org.aeonbits.owner.ConfigFactory;
import org.hibernate.Session;
import org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl;
import org.hibernate.jpa.boot.internal.PersistenceUnitInfoDescriptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.spi.PersistenceUnitInfo;
import jakarta.validation.constraints.NotNull;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Properties;
import java.util.TimeZone;
import java.util.function.Consumer;
import java.util.stream.Collectors;

/**
 * Elide configuration.
 */
@Configuration
public class ElideConfiguration {

    private static final Consumer<EntityManager> TXCANCEL = em -> em.unwrap(Session.class).cancelQuery();

    private static final ApplicationConfig APPLICATION_CONFIG = ConfigFactory.create(ApplicationConfig.class);
    private static final JpaDatastoreConfig JPA_DATASTORE_CONFIG = ConfigFactory.create(
            JpaDatastoreConfig.class
    );
    private final ClassScanner classScanner = new DefaultClassScanner();

    private final Injector injector;

    /**
     * Constructor.
     * @param injector Injector.
     */
    public ElideConfiguration(final Injector injector) {
        this.injector = injector;
    }

    /**
     * Initializes the Elide {@link DataStore} service with the specified {@link EntityManagerFactory}.
     *
     * @param entityManagerFactory  An object used to initialize JPA
     *
     * @return a new instance
     */
    @Bean
    public DataStore buildDataStore(final EntityManagerFactory entityManagerFactory) {
        return new JpaDataStore(
                entityManagerFactory::createEntityManager,
                em -> new NonJtaTransaction(em, TXCANCEL),
                entityManagerFactory::getMetamodel
        );
    }

    /**
     * Initializes the {@link EntityManagerFactory} service used by Elide JPA.
     *
     * @return a new instance
     */
    @Bean
    public EntityManagerFactory entityManagerFactory() {
        final String modelPackageName = APPLICATION_CONFIG.modelPackageName();

        final ClassLoader classLoader = null;

        final PersistenceUnitInfo persistenceUnitInfo = new PersistenceUnitInfoImpl(
                "astraios",
                getAllEntities(classScanner, modelPackageName),
                getDefaultDbConfigs(),
                classLoader
        );

        return new EntityManagerFactoryBuilderImpl(
                new PersistenceUnitInfoDescriptor(persistenceUnitInfo),
                new HashMap<>(),
                classLoader
        ).build();
    }

    /**
     * Get all entities.
     * @param scanner Class scanner.
     * @param packageName Package name.
     * @return List of entities.
     */
    @NotNull
    public static List<String> getAllEntities(
            @NotNull final ClassScanner scanner,
            @NotNull final String packageName
    ) {
        return scanner.getAnnotatedClasses(packageName, Entity.class).stream()
                .map(Class::getName)
                .collect(Collectors.toList());
    }

    /**
     * Returns a collection of DB configurations, including connecting credentials.
     * <p>
     * In addition, the configurations consumes all configs defined in {@link JpaDatastoreConfig}
     *
     * @return a new instance
     */
    @NotNull
    @SuppressWarnings("MultipleStringLiterals")
    private static Properties getDefaultDbConfigs() {
        final Properties dbProperties = new Properties();

        dbProperties.put("hibernate.show_sql", "true");
        dbProperties.put("hibernate.hbm2ddl.auto", JPA_DATASTORE_CONFIG.hibernateMbm2ddlAuto());
        dbProperties.put("hibernate.dialect", JPA_DATASTORE_CONFIG.dbDialect());
        dbProperties.put("hibernate.current_session_context_class", "thread");
        dbProperties.put("hibernate.jdbc.use_scrollable_resultset", "true");

        // Collection Proxy & JDBC Batching
        dbProperties.put("hibernate.jdbc.batch_size", "50");
        dbProperties.put("hibernate.jdbc.fetch_size", "50");
        dbProperties.put("hibernate.default_batch_fetch_size", "100");

        // Hikari Connection Pool Settings
        dbProperties.putIfAbsent("hibernate.connection.provider_class",
                "com.zaxxer.hikari.hibernate.HikariConnectionProvider");
        dbProperties.putIfAbsent("hibernate.hikari.connectionTimeout", "20000");
        dbProperties.putIfAbsent("hibernate.hikari.maximumPoolSize", "30");
        dbProperties.putIfAbsent("hibernate.hikari.idleTimeout", "30000");

        dbProperties.put("jakarta.persistence.jdbc.driver", JPA_DATASTORE_CONFIG.dbDriver());
        dbProperties.put("jakarta.persistence.jdbc.url", JPA_DATASTORE_CONFIG.dbUrl());
        dbProperties.put("jakarta.persistence.jdbc.user", JPA_DATASTORE_CONFIG.dbUser());
        dbProperties.put("jakarta.persistence.jdbc.password", JPA_DATASTORE_CONFIG.dbPassword());

        return dbProperties;
    }

    /**
     * Initializes the Elide {@link EntityDictionary} service with a given dependency injector.
     *
     * @return a new instance
     *
     */
    @Bean
    public EntityDictionary buildEntityDictionary() {
        return new EntityDictionary(
                new HashMap<>(),
                new HashMap<>(),
                new Injector() {
                    @Override
                    public void inject(final Object entity) {
                        injector.inject(entity);
                    }

                    @Override
                    public <T> T instantiate(final Class<T> cls) {
                        return injector.instantiate(cls);
                    }
                },
                CoerceUtil::lookup,
                new HashSet<>(),
                classScanner
        );
    }

    /**
     * Initializes the Elide {@link Elide} service with the specified {@link ElideConfigProperties}.
     * @param settings ElideConfigProperties
     * @return Elide
     */
    @Bean
    Elide elide(final ElideConfigProperties settings) {
        final ElideSettings.ElideSettingsBuilder builder = ElideSettings.builder()
                .dataStore(buildDataStore(entityManagerFactory()))
                .entityDictionary(buildEntityDictionary())
                .maxPageSize(settings.getMaxPageSize())
                .defaultPageSize(settings.getDefaultPageSize())
                .auditLogger(new Slf4jLogger())
                .settings(JsonApiSettings.builder()
                        .joinFilterDialect(RSQLFilterDialect.builder().dictionary(buildEntityDictionary()).build())
                        .subqueryFilterDialect(RSQLFilterDialect.builder().dictionary(buildEntityDictionary()).build()))
                .serdes(serdes -> serdes.withISO8601Dates("yyyy-MM-dd'T'HH:mm'Z'", TimeZone.getTimeZone("UTC")));
        return new Elide(builder.build());
    }

    /**
     * Getter for Injector.
     * @return Injector.
     */
    public Injector getInjector() {
        return this.injector;
    }
}
