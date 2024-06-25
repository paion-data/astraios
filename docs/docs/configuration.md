---
sidebar_position: 4
title: Configuration
---

The configurations in this page can be set from several sources in the following order:

1. the [operating system's environment variables]; for instance, an environment variable can be set with
   `export DB_URL="jdbc:mysql://db/elide?serverTimezone=UTC"`
2. the [Java system properties]; for example, a Java system property can be set using
   `System.setProperty("DB_URL", "jdbc:mysql://db/elide?serverTimezone=UTC")`
3. a **.properties** file placed under CLASSPATH. This file can be put under `src/main/resources` source directory with
   contents, for example, `DB_URL=jdbc:mysql://db/elide?serverTimezone=UTC`

Core Properties
---------------

:::note

The following configurations can be placed in the properties file called **application.properties**

:::

- **MODEL_PACKAGE_NAME**: The fully qualified package name that contains a set of Elide JPA models

(Elide) JPA DataStore
---------------------

:::note

The following configurations can be placed in the properties file called **jpadatastore.properties**

:::

- **DB_USER**: Persistence DB username (needs have both Read and Write permissions).
- **DB_PASSWORD**: The persistence DB user password.
- **DB_URL**: The persistence DB URL, such as "jdbc:mysql://localhost/elide?serverTimezone=UTC".
- **DB_DRIVER**: The SQL DB driver class name, such as "com.mysql.jdbc.Driver".
- **DB_DIALECT**: The SQL DB dialect name, such as "org.hibernate.dialect.MySQLDialect".
- **HIBERNATE_HBM2DDL_AUTO**: What to do with existing JPA database when webservice starts; can be one of the 4 values:

  1. _validate_: validate that the schema matches, make no changes to the schema of the database. _This is the default
     value of **HIBERNATE_HBM2DDL_AUTO**_
  2. _update_: update the schema to reflect the entities being persisted
  3. _create_: creates the schema necessary for your entities, destroying any previous data.
  4. _create-drop_: create the schema as in create above, but also drop the schema at the end of the session. This is
     great in development or for testing.

  :::note

  This property is exactly the same as [Hibernate `hibernate.hbm2ddl.auto` property].

  :::

[Hibernate `hibernate.hbm2ddl.auto` property]: https://stackoverflow.com/questions/18077327/hibernate-hbm2ddl-auto-possible-values-and-what-they-do

[Java system properties]: https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html

[operating system's environment variables]: https://docs.oracle.com/javase/tutorial/essential/environment/env.html
