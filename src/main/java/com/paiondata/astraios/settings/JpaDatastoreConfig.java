/*
 * Copyright 2024 Paion Data
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
package com.paiondata.astraios.settings;

import org.aeonbits.owner.Config;

import jakarta.validation.constraints.NotNull;
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

/**
 * {@link JpaDatastoreConfig} is responsible for all configs related to Elide JPA middleware.
 * <p>
 * {@link JpaDatastoreConfig} tries to load the configurations from several sources in the following order:
 * <ol>
 *     <li> the <a href="https://docs.oracle.com/javase/tutorial/essential/environment/env.html">
 *          operating system's environment variables</a>; for instance, an environment variable can be set with
 *          {@code export DB_USER="foo"}
 *     <li> the <a href="https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html">
 *          Java system properties</a>; for example, a Java system property can
 *          be set using {@code System.setProperty("DB_USER", "foo")}
 *     <li> a file named <b>jpadatastore.properties</b> placed under CLASSPATH. This file can be put under
 *          {@code src/main/resources} source directory with contents, for example, {@code DB_USER=foo}
 * </ol>
 * Note that environment config has higher priority than Java system properties. Java system properties have higher
 * priority than file based configuration.
 */
@Immutable
@ThreadSafe
@Config.LoadPolicy(Config.LoadType.MERGE)
@Config.Sources({"system:env", "system:properties", "classpath:jpadatastore.properties"})
public interface JpaDatastoreConfig extends Config {

    /**
     * Persistence DB username (needs have both Read and Write permissions).
     *
     * @return a credential
     */
    @NotNull
    @Key("DB_USER")
    String dbUser();

    /**
     * The persistence DB user password.
     *
     * @return a credential
     */
    @NotNull
    @Key("DB_PASSWORD")
    String dbPassword();

    /**
     * The persistence DB URL, such as "jdbc:mysql://localhost/elide?serverTimezone=UTC".
     *
     * @return a JDBC connection URL
     */
    @NotNull
    @Key("DB_URL")
    String dbUrl();

    /**
     * The SQL DB driver class name, such as "com.mysql.cj.jdbc.Driver".
     *
     * @return a DB config string
     */
    @NotNull
    @Key("DB_DRIVER")
    String dbDriver();

    /**
     * The SQL DB dialect name, such as "org.hibernate.dialect.MySQLDialect".
     *
     * @return a DB config string
     */
    @NotNull
    @Key("DB_DIALECT")
    String dbDialect();

    /**
     * What to do with existing JPA database when webservice starts.
     * <p>
     * Can be one of the 4 values:
     * <ol>
     *     <li> validate - validate that the schema matches, make no changes to the schema of the database. This is the
     *     default value
     *     <li> update - update the schema to reflect the entities being persisted
     *     <li> create - creates the schema necessary for your entities, destroying any previous data.
     *     <li> create-drop - create the schema as in create above, but also drop the schema at the end of the session.
     *          This is great in development or for testing.
     * </ol>
     * See https://stackoverflow.com/questions/18077327/hibernate-hbm2ddl-auto-possible-values-and-what-they-do for more
     * details.
     *
     * @return a DB config string
     */
    @NotNull
    @DefaultValue("validate")
    @Key("HIBERNATE_HBM2DDL_AUTO")
    String hibernateMbm2ddlAuto();
}
