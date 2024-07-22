---
sidebar_position: 3
title: Development
---

Running Tests
-------

The following command runs unit tests and integration tests:

```bash
mvn clean verify
```

For IT tests, we use [Testcontainers] instead of [jcabi-mysql], because the latter is difficult to configure and debug, and [Testcontainers] supports more types of databases, such as mongo.

Packaging
----

```bash
mvn clean package
```

A [JAR file](https://en.m.wikipedia.org/wiki/JAR_(file_format)) named astraios-1.0-SNAPSHOT.jar will be generated in the target directory.

Running Webservice (Production Environment)
-------------------------------------------

### Running the JAR Package

```bash
java -jar astraios-1.0-SNAPSHOT.jar
```

The webservice will run on port **8080**, and you will be able to see the data you inserted.

[Docker Compose]: https://docs.docker.com/compose/

[jcabi-mysql]: https://mysql.jcabi.com/

[Testcontainers]: https://qubitpi.github.io/testcontainers-java/
