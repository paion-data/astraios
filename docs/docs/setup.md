---
sidebar_position: 2
title: Setup
---

[//]: # (Copyright Paion Data)

[//]: # (Licensed under the Apache License, Version 2.0 &#40;the "License"&#41;;)
[//]: # (you may not use this file except in compliance with the License.)
[//]: # (You may obtain a copy of the License at)

[//]: # (    http://www.apache.org/licenses/LICENSE-2.0)

[//]: # (Unless required by applicable law or agreed to in writing, software)
[//]: # (distributed under the License is distributed on an "AS IS" BASIS,)
[//]: # (WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.)
[//]: # (See the License for the specific language governing permissions and)
[//]: # (limitations under the License.)

This section discusses the one-time setup in order to develop [Astraios].

Prepare for Local Development
-----------------------------

### Installing Java & Maven (on Mac)

```bash
brew update
brew install openjdk@17
```

At the end of the last command prompt, something like the below will show up:

```bash
For the system Java wrappers to find this JDK, symlink it with
  sudo ln -sfn ...openjdk@17/libexec/openjdk.jdk .../JavaVirtualMachines/openjdk-17.jdk

openjdk@17 is keg-only, which means it was not symlinked into /usr/local,
because this is an alternate version of another formula.

If you need to have openjdk@17 first in your PATH, run:
  echo 'export PATH=".../openjdk@17/bin:$PATH"' >> .../.bash_profile

For compilers to find openjdk@17 you may need to set:
  export CPPFLAGS="-I.../openjdk@17/include"
```

Make sure to execute the `sudo ln -sfn`, `echo 'export PATH=...`, and the `export CPPFLAGS=` commands above

:::tip

Maven uses a separate JDK version, which can be seen via `mvn -v`. If it's not JDK 17, we should have Maven point
to our JDK 17 using [JAVA_HOME](https://stackoverflow.com/a/2503679):

```bash
$ /usr/libexec/java_home
/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home

$ export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
```

:::

If we see something similar after typing the command with the version flag below we're good to go

```bash
$ java --version
openjdk 17.0.10 2021-01-19
OpenJDK Runtime Environment (build 17.0.10+9)
OpenJDK 64-Bit Server VM (build 17.0.10+9, mixed mode)
```

### Installing Docker Engine

<!-- markdown-link-check-disable -->
[Astraios] has [Docker-based integration tests]; it also supports
[running in Docker Compose](development#running-astraios-in-docker-compose). Docker can be installed by following its
[official instructions](https://docs.docker.com/desktop/install/mac-install/)
<!-- markdown-link-check-enable -->

Getting Source Code
-------------------

```bash
git clone git@github.com:paion-data/astraios.git
cd astraios
```

### Syncing up with Astraios's Code Styles with IntelliJ

For the moment, we have distilled the most important code style conventions with respect to Astraios' code as
IntelliJ settings. If IntelliJ is used for IDE, we may import these code style settings by importing the
[Astraios-Project-intellij-code-style.xml][style config] file in the root of the repo. The setting for the
project will appear as a new Scheme named "Astraios-Project" under IDE's **Editor** -> **Code Style** section.

Please also enable "remove unused imports" by **Editor -> **General** -> **Auto Import** -> **Optimize Imports on the 
Fly**, which will automatically remove unused imports.

[Astraios]: https://paion-data.github.io/astraios/

[Docker-based integration tests]: https://github.com/paion-data/astraios/blob/master/src/test/groovy/com/paiondata/astraios/application/ResourceConfigITSpec.groovy

[style config]: https://github.com/paion-data/astraios/blob/master/Astraios-Project-intellij-code-style.xml
