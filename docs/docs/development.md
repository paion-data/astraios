---
sidebar_position: 3
title: Development
---

- **MODEL_PACKAGE_NAME**: Model package in CLASSPATH
- **DB_USER**: Username of the local database
- **DB_PASSWORD** The password of the local database



Running Astraios in Docker Compose
----------------------------------

### Defining Data Models

This page is a description on how to create CRUD data models (create, read, update, and delete) in Astraios.

Astraios can run in [Docker Compose] for the following purposes

1. Decoupling frontend and backend development
2. Easily integrating Astraios-backed application testing in CI/CD

![Error Loading docker-compose.png](./img/docker-compose.png)

```bash
cd astraios
mvn clean package
MODEL_PACKAGE_NAME=$ASTRAIOS_MODEL_PACKAGE_NAME docker compose up --build --force-recreate
```

where `$ASTRAIOS_MODEL_PACKAGE_NAME` is the package in config JAR that contains all
[elide models](https://elide.io/pages/guide/v7/02-data-model.html)

#### Static Configuration 



Running Tests
-------------

```bash
mvn clean verify
```

Packaging
---------

```bash
mvn clean package
```

A [**WAR** file](https://en.wikipedia.org/wiki/WAR_(file_format)) named `astraios-1.0-SNAPSHOT.war` will
be generated under _target_ directory for [running in Jetty](#running-in-standalone-jetty)

Running Webservice in Docker (Development)
------------------------------------------

:::caution

Support [running this template webservice in Docker][astraios Dockerfile] is NOT for production deployment.
It's intended usage is for **development** where developer can easily stand up a webservice instance for dev and
testing purpose.

Production deployment for [astraios][astraios] assumes
[Jetty-based scheme](#running-webservice-in-standalone-jetty-production)

:::

### Getting Image

#### Docker Hub

We can pull the image from [its docker hub][docker hub]:

```bash
docker pull jack20191124/astraios
```

#### GitHub

We could also build the image from [source][astraios Dockerfile]:

```bash
https://github.com/paion-data/astraios.git
cd astraios
docker build -t paiondata/astraios
```

:::tip

If we need to pass one or more runtime environment variables into docker image, we can do

```bash
export MY_ENV_VARIABLE=foo
export MY_OTHER_ENV_VARIABLE=bar

docker build -t paiondata/astraios \
  --build-arg MY_ENV_VARIABLE=$MY_ENV_VARIABLE \
  --build-arg MY_OTHER_ENV_VARIABLE=$MY_OTHER_ENV_VARIABLE \
  .
```

where the _Dockerfile_ contains

```dockerfile
ARG MY_ENV_VARIABLE
ARG MY_OTHER_ENV_VARIABLE

ENV MY_ENV_VARIABLE $MY_ENV_VARIABLE
ENV MY_OTHER_ENV_VARIABLE $MY_OTHER_ENV_VARIABLE
```

:::

### Standup a Container

When image is on our machine (either by pulling or building), we can spin up an instance using

```bash
docker run -d --name=astraios -p 8080:8080 paiondata/astraios
```

At this moment, the healthcheck endpoint `GET localhost:8080/v1/data/healthcheck` should return 200 status code
properly.

### Importing the JPA model

Importing the JPA model requires installing the dependencies associated with the JAR

Add them to your **pom.xml** file:

```bash
<dependency>
     <groupId>${env.ASTRAIOS_MODEL_PACKAGE_JAR_GROUP_ID}</groupId>
     <artifactId>${env.ASTRAIOS_MODEL_PACKAGE_JAR_ARTIFACT_ID}</artifactId>
     <version>${env.ASTRAIOS_MODEL_PACKAGE_JAR_VERSION}</version>
</dependency>
```

And specify the URL of your repository

```bash
<dependency>
     <groupId>${env.ASTRAIOS_MODEL_PACKAGE_JAR_GROUP_ID}</groupId>
     <artifactId>${env.ASTRAIOS_MODEL_PACKAGE_JAR_ARTIFACT_ID}</artifactId>
     <version>${env.ASTRAIOS_MODEL_PACKAGE_JAR_VERSION}</version>
</dependency>
```

Configure environment variables in the project:

- **ASTRAIOS_MODEL_PACKAGE_JAR_GROUP_ID**: The groupId of the group in which the JAR is stored in your repository
- **ASTRAIOS_MODEL_PACKAGE_JAR_ARTIFACT_ID**: The artifactId of the JAR you want to use
- **ASTRAIOS_MODEL_PACKAGE_JAR_VERSION**: JAR version
- **ASTRAIOS_MODEL_PACKAGE_REPO_ID**: The repository id that contains the JAR
- **ASTRAIOS_MODEL_PACKAGE_REPO_URL**: The URL of your repository resource

Execute `mvn clean package` in your project to package.

### Start the local database

This project depend on **MySQL@5.7**, if you don't have it, please install it first:

```bash
brew install mysql@5.7
brew install mysql-client@5.7
```

Set the password of the root account based on the log information:

```bash
mysql_secure_installation
mysql -h localhost -u root -p
```

Next, enter the password you want to set, and then we will complete the configuration of the database.

Running Webservice in Standalone Jetty (Production)
---------------------------------------------------

### Download Jetty

At [download page](https://www.eclipse.org/jetty/download.php), pick up a `.tgz` distribution. **It is very important
to pick up Jetty server version that matches JDK version**. For JDK **17**, it's been tested that Jetty _11.0.15_ works

:::note

During testing, the embedded Jetty version is also 11.0.15

:::

Hence, we will use "11.0.15" release as an example:

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
java -jar $JETTY_HOME/start.jar --add-module=annotations,server,http,deploy,servlet,webapp,resources,jsp,websocket
```

where `/path/to/` is the _absolute_ path to the directory containing the `jetty-home-11.0.15` directory

The `--add-module=annotations,server,http,deploy` is how we configure the Jetty container.

Lastly, drop the [WAR file](#packaging) into **/path/to/jetty-base/webapps** directory and rename the WAR file to
**ROOT.war**:

```bash
mv /path/to/war-file /path/to/jetty-base/webapps/ROOT.war
```

### Setting Environment Variables

- **MODEL_PACKAGE_NAME**: Model package in CLASSPATH
- **DB_USER**: Username of the local database
- **DB_PASSWORD** The password of the local database

### Running Astraios

```bash
java -jar $JETTY_HOME/start.jar
```

You can insert some data by following the template below

```bash
curl -X POST http://localhost:8080/v1/data/book \
  -H "Content-Type: application/vnd.api+json" \
  -H "Accept: application/vnd.api+json" \
  -d '{"data": {"type": "book", "id": "elide-demo", "attributes": {"title": "Pride & Prejudice"}}}'
```

The webservice will run on port **8080**, and you will see the data you inserted

[Docker Compose]: https://docs.docker.com/compose/

[astraios]: https://github.com/paion-data/astraios
[astraios Dockerfile]: https://github.com/paion-data/astraios/blob/master/Dockerfile
