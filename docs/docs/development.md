---
sidebar_position: 3
title: Development
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
