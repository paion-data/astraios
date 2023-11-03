---
sidebar_position: 3
title: Development
---

Running Tests
-------------

The following commands runs both unit and integration tests

```bash
mvn clean verify
```

For IT tests, we use [Testcontainers] instead of [jcabi-mysql] because the latter is hard to configure and debug and
[Testcontainers] support more types of db, such as mongo

Packaging
---------

```bash
mvn clean package
```

A [WAR file](https://en.wikipedia.org/wiki/WAR_(file_format)) named **astraios-1.0-SNAPSHOT.war** will
be generated under _target_ directory for [running in Jetty](#running-in-standalone-jetty)

Running Webservice in Docker Compose
------------------------------------

### Step 1: Defining Data Models

To inject [Elide model package](https://github.com/yahoo/elide/tree/master/elide-standalone#create-models), simply put
the models in a separate JAR and include it as a dependency in POM. If the model package is internal and cannot be
visible publicly, either make the astraios project private or public with model package dependency info
[injected via settings.xml](https://maven.apache.org/examples/injecting-properties-via-settings.html), for example:

```xml
<project>

    ...

    <dependencies>
        <dependency>
            <groupId>${astraios.model.package.jar.group.id}</groupId>
            <artifactId>${astraios.model.package.jar.artifact.id}</artifactId>
            <version>${astraios.model.package.jar.version}</version>
        </dependency>
    </dependencies>

    ...

    <repositories>
        <repository>
            <id>${astraios.model.package.repo.id}</id>
            <name>Astraios model pacakge JAR repository</name>
            <url>${astraios.model.package.repo.url}</url>
        </repository>
    </repositories>

    ...

</project>
```

with a corresponding `~/.m2/settings.xml`:

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

    <profiles>
        <profile>
            <id>astraios-config-properties</id>
            <properties>
                <astraios.model.package.jar.group.id>com.mycompnay</astraios.model.package.jar.group.id>
                <astraios.model.package.jar.artifact.id>my-model-package</astraios.model.package.jar.artifact.id>
                <astraios.model.package.jar.version>1.0.7</astraios.model.package.jar.version>
                <astraios.model.package.repo.id>mycompany-maven-repo-id</astraios.model.package.repo.id>
                <astraios.model.package.repo.url>
                    https://private.mvnrepository.com/artifact/com.company/my-model-package
                </astraios.model.package.repo.url>
            </properties>
        </profile>
    </profiles>


    <activeProfiles>
        <activeProfile>astraios-config-properties</activeProfile>
    </activeProfiles>

    <servers>
        ...
    </servers>
</settings>
```

Lastly, if IntelliJ IDE is used for developing Astraios, please make sure to let IDE pick up the `~/.m2/settings.xml` by
unchecking the _Use settings from .mvn/maven.config_:

![Error loading load-m2-settings.png](./img/load-m2-settings.png)

### Step 2: Spinning Up Docker Compose

Astraios can run in [Docker Compose] for the following purposes

1. Decoupling frontend and backend developments
2. Making it easy to run E2E testing of Astraios-backed application in CI/CD

:::caution

Docker Compose designed here is intended for local development and testing purposes ONLY! _It is strongly discouraged
to run this Docker Compose in production!_

:::

![Error Loading docker-compose.png](./img/docker-compose.png)

Simply run:

```bash
git clone git@github.com:paion-data/astraios.git
cd astraios
mvn clean package
MODEL_PACKAGE_NAME=$TEST_MODEL_PACKAGE_NAME docker compose up --build --force-recreate
```

where `$TEST_MODEL_PACKAGE_NAME` is the package in config JAR that contains all
[elide models](https://elide.io/pages/guide/v7/02-data-model.html). It can be set, for example, at command line with:

```bash
export $TEST_MODEL_PACKAGE_NAME=com.mycompany.models
```

The variable will be [passed](https://stackoverflow.com/a/58900415) into Docker Compose file.

### Troubleshooting

#### Database Does Not Have My Model Packages's Bean Table

_If tests is running in IntelliJ IDE_, make sure the model package JAR it is in IDE's **External Libraries**

Otherwise, the dependency injection didn't find a bean class under the package specified by
[$TEST_MODEL_PACKAGE_NAME](#step-1-defining-data-models)

### Entity Missing Default Constructor

```bash
[main] INFO  o.h.m.i.EntityInstantiatorPojoStandard - HHH000182: No default (no-argument) constructor for
class: ... (class must be instantiated by Interceptor)
```

Simply add a no-args constructor to the bean class.

### How to Exclude GraphQL Feature

To optionally disable GraphQL endpoints, exclude corresponding dependencies in POM. For example:

```xml
        <dependency>
            <groupId>com.yahoo.elide</groupId>
            <artifactId>elide-core</artifactId>
            <version>7.0.0-pr6</version>
            <exclusions>
                <exclusion>
                    <groupId>com.yahoo.elide</groupId>
                    <artifactId>elide-graphql</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
```

Running Webservice in Standalone Jetty (Production)
---------------------------------------------------

### Download Jetty

For JDK **17**, which is Astraios' Java version, it's been tested that Jetty _11.0.15_ worked. Hence, we will use
["11.0.15" release](https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-home/11.0.15/jetty-home-11.0.15.tar.gz) as
an example:

![Error loading download-jetty.png](./img/download-jetty.png)

Put the `tar.gz` file into a location of your choice as the installation path and extract the Jetty binary using

```bash
tar -xzvf jetty-home-11.0.15.tar.gz
```

The extracted directory *jetty-home-11.0.15* is the Jetty distribution. We call this directory **$JETTY_HOME**, which
should not be modified.

### Setting Up Standalone Jetty

Our [WAR file](#packaging) will be dropped to a directory where Jetty can pick up and run. We call this directory
**$JETTY_BASE**, which is usually different from the _$JETTY_HOME_. The _$JETTY_BASE_ also contains container runtime
configs. In short, the Standalone Jetty container will be setup with

```bash
export JETTY_HOME=/path/to/jetty-home-11.0.15
mkdir -p /path/to/jetty-base
cd /path/to/jetty-base
java -jar $JETTY_HOME/start.jar --add-module=annotations,server,http,deploy,servlet,webapp,resources,jsp
```

where `/path/to/` is the _absolute_ path to the directory containing the `jetty-home-11.0.15` directory

The `--add-module=annotations,server,http,deploy,servlet,webapp,resources,jsp` is how we configure the Jetty
container.

Lastly, drop the [WAR file](#packaging) into **/path/to/jetty-base/webapps** directory and rename the WAR file to
**ROOT.war**:

```bash
mv /path/to/war-file /path/to/jetty-base/webapps/ROOT.war
```

### Running Webservice

```bash
java -jar $JETTY_HOME/start.jar
```

The webservice will run on port **8080**, and you will see the data you inserted

[jcabi-mysql]: https://mysql.jcabi.com/

[Testcontainers]: https://qubitpi.github.io/testcontainers-java/
