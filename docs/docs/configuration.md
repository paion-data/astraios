---
sidebar_position: 6
title: Configuration
---

The configurations in this page can be set from several sources in the following order:

1. a **.properties** file placed under CLASSPATH. This file can be put under `src/main/resources` source directory with
   contents, for example, `OAUTH_ENABLED=true`
2. the [Java system properties]; for example, a Java system property can be set using
   `System.setProperty("OAUTH_ENABLED", "true")`
3. the [operating system's environment variables]; for instance, an environment variable can be set with
   `export OAUTH_ENABLED="true"`

Core Properties
---------------

:::note

The following configurations can be placed in the properties file called **application.properties**

:::

- **MODEL_PACKAGE_NAME**: The fully qualified package name that contains a set of Elide JPA models

OAuth 2
-------

:::note

The following configurations can be placed in the properties file called **oauth.properties**

:::

- **OAUTH_ENABLED**: Whether or not to enable [OAuthFilter] container request filter.
- **JWKS_URL**: (**Required if `OAUTH_ENABLED` is set to `true`**) A standard [JWKS] URL that, on GET, returns a json
  object such as

  ```json
  {
      "keys": [
          {
              "kty": "EC",
              "use": "sig",
              "kid": "eTERknhur9q8gisdaf_dfrqrgdfsg",
              "alg": "ES384",
              "crv": "P-384",
              "x": "sdfrgHGYF...",
              "y": "sdfuUIG&8..."
          }
      ]
  }
  ```

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

[Java system properties]: https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html
[JWKS]: https://datatracker.ietf.org/doc/html/rfc7517

[OAuthFilter]: https://paion-data.github.io/astraios/apidocs/com/paiondata/astraios/web/filters/OAuthFilter.html
[operating system's environment variables]: https://docs.oracle.com/javase/tutorial/essential/environment/env.html
