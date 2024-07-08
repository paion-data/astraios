---
sidebar_position: 5
title: Deployment
description: Astraios deployment guide
---

[//]: # (Copyright 2024 Paion Data)

[//]: # (Licensed under the Apache License, Version 2.0 &#40;the "License"&#41;;)
[//]: # (you may not use this file except in compliance with the License.)
[//]: # (You may obtain a copy of the License at)

[//]: # (    http://www.apache.org/licenses/LICENSE-2.0)

[//]: # (Unless required by applicable law or agreed to in writing, software)
[//]: # (distributed under the License is distributed on an "AS IS" BASIS,)
[//]: # (WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.)
[//]: # (See the License for the specific language governing permissions and)
[//]: # (limitations under the License.)

This section discusses deploying [Astraios] in production.

Prepare for Production Development
----------------------------------

### Installing Java (on Ubuntu)

```bash
sudo apt update
sudo apt install openjdk-17-jdk
```

At the end of the last command prompt, something like the below will show up:

```bash
The following additional packages will be installed:
  ...
Suggested packages:
  ...
The following NEW packages will be installed:
  ...
Need to get 170 MB of archives.
After this operation, 877 MB of additional disk space will be used.
Do you want to continue? [Y/n]
```

Enter `Y` to complete the installation.

:::

If we see something similar after typing the command with the version flag below we're good to go

```bash
$ java -version
openjdk version "17.0.11" 2024-04-16
OpenJDK Runtime Environment (build 17.0.11+9-Ubuntu-120.04.2)
OpenJDK 64-Bit Server VM (build 17.0.11+9-Ubuntu-120.04.2, mixed mode, sharing)
```

### Installing Maven

```bash
sudo apt install maven
```

At the end of the last command prompt, something like the below will show up:

```bash
The following additional packages will be installed:
  ...
Suggested packages:
  ...
The following NEW packages will be installed:
  ...
Need to get 9,657 kB of archives.
After this operation, 12.6 MB of additional disk space will be used.
Do you want to continue? [Y/n]
```

Enter `Y` to complete the installation.

:::

If we see something similar after typing the command with the version flag below we're good to go

```bash
$ mvn -version
Apache Maven 3.6.3
Maven home: /usr/share/maven
Java version: 17.0.11, vendor: Ubuntu, runtime: /usr/lib/jvm/java-17-openjdk-amd64
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "5.4.0-182-generic", arch: "amd64", family: "unix"
```

In the example, Maven is obviously using the correct JDK, so there is no need to set the JAVA_HOME environment variable
extra. However, if you want to explicitly set JAVA_HOME, or in some cases (for example, when there are multiple JDK
installations) make sure Maven always uses a specific JDK 17, You can add the following lines to your shell
configuration file (such as.bashrc,.zshrc, or.profile) :

```bash
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
```

### Loading Data Models

```bash
git clone git@github.com:paion-data/astraios-data-models-example.git
cd astraios-data-models-example
mvn clean install
```

Now that we have the model installed locally, we need to get astraios to load the model through the maven configuration
file, add the following configuration information via **~/.m2/settings.xml** ~/.m2/settings.xml:

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

    <profiles>
        <profile>
            <id>astraios-data-models</id>
            <properties>
                <model.package.jar.group.id>com.paiondata</model.package.jar.group.id>
                <model.package.jar.artifact.id>astraios-data-models-example</model.package.jar.artifact.id>
                <model.package.jar.version>1.0.0</model.package.jar.version>
            </properties>
        </profile>
    </profiles>

    <activeProfiles>
        <activeProfile>astraios-data-models</activeProfile>
    </activeProfiles>
</settings>
```

### Packaging Astraios

```bash
git clone git@github.com:paion-data/astraios.git
export MODEL_PACKAGE_NAME=com.paiondata.astraios.data.models
export DB_USER=YOUR_DB_USER
export DB_PASSWORD=YOUR_DB_PASSWORD
export DB_URL=YOUR_DB_URL
export DB_DRIVER=YOUR_DB_DRIVER
export DB_DIALECT=YOUR_DB_DIALECT
mvn clean package
```

[Astraios] is built on [Springboot](https://spring.io/projects/spring-boot) and has a built-in web container, which we
used maven to package into a jar file.

### Running the JAR Package

```bash
java -jar target/astraios-1.0-SNAPSHOT.jar
```

The webservice will run on port **8080**, and you will be able to see the data you inserted.

[Astraios]: https://paion-data.github.io/astraios/
