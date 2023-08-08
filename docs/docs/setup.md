---
sidebar_position: 2
title: Setup
---

Prepare for Local Development
-----------------------------

### Installing Java & Maven (on Mac)

```bash
brew update
brew install java11
sudo ln -sfn /usr/local/opt/openjdk@11/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-11.jdk
brew install maven
```

:::tip

Maven uses a separate JDK version, which can be seen via `mvn -v`. If it's not JDK 11, we should have Maven point
to our JDK 11 using [JAVA_HOME](https://stackoverflow.com/a/2503679):

```bash
$ /usr/libexec/java_home
/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home

$ export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home
```

:::

If we see something similar after typing the command with the version flag below we're good to go

```bash
$ java --version
openjdk 11.0.10 2021-01-19
OpenJDK Runtime Environment (build 11.0.10+9)
OpenJDK 64-Bit Server VM (build 11.0.10+9, mixed mode)
```

### Installing Docker Engine

[Astraios][astraios] has [Docker-based integration tests][Docker-based integration tests];
it also supports [running template webserivce in Docker][astraios Dockerfile]. Docker can be installed by
following its [official instructions](https://docs.docker.com/desktop/install/mac-install/)

Getting Source Code
-------------------

```bash
https://github.com/paiondata/astraios.git
cd astraios
```

### Syncing up with astraios's Code Styles with IntelliJ

For the moment, we have distilled the most important code style conventions with respect to astraios's code as
IntelliJ settings. If IntelliJ is used for IDE, we may import these code style settings by importing the
[Astraios-Project-intellij-code-style.xml][style config] file in the root of the repo. The setting for the
project will appear as a new Scheme named Astraios-Project under IDE's `Editor -> Code Style` section.


Modifying Templates
-------------------

- Update [endpoint package] accordingly

[Docker-based integration tests]: https://github.com/paion-data/astraios/blob/master/src/test/groovy/com/paiondata/ws/jersey/template/DataServletITSpec.groovy

[endpoint package]: https://github.com/paion-data/astraios/blob/master/src/main/java/com/paiondata/ws/jersey/template/application/ResourceConfig.java

[astraios]: https://github.com/paion-data/astraios
[astraios Dockerfile]: https://github.com/paion-data/astraios/blob/master/Dockerfile

[style config]: https://github.com/paion-data/astraios/blob/master/Astraios-Project-intellij-code-style.xml
