---
sidebar_position: 2
title: 设置
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

本节讨论开发 [Astraios] 的一次性设置。

为本地开发做好准备
---------------

### 安装 Java & Maven (Mac版)

```bash
brew update
brew install openjdk@17
```

在最后一个命令提示符的末尾，将显示如下内容：

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

确保执行上面的 `sudo ln -sfn`、 `echo 'export PATH=...`、 和 `export CPPFLAGS=` 命令

:::tip

Maven 使用单独的 JDK 版本，可以通过 `mvn -v` 查看。如果不是 JDK 17，我们应该使用
[JAVA_HOME](https://stackoverflow.com/a/2503679) 让 Maven 指定我们的 JDK 17 ：

```bash
$ /usr/libexec/java_home
/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home

$ export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
```

:::

如果我们在输入查看版本的命令后看到类似的内容，我们就可以开始了

```bash
$ java --version
openjdk 17.0.10 2021-01-19
OpenJDK Runtime Environment (build 17.0.10+9)
OpenJDK 64-Bit Server VM (build 17.0.10+9, mixed mode)
```

### 安装 Docker Engine

<!-- markdown-link-check-disable -->
[Astraios] 有基于 [Docker 的集成测试]；它还支持在 [Docker Compose](development#running-astraios-in-docker-compose) 中运行。
Docker 可以按照[官方说明](https://docs.docker.com/desktop/install/mac-install/)进行安装
<!-- markdown-link-check-enable -->

获取源代码
---------

```bash
git clone git@github.com:paion-data/astraios.git
cd astraios
```

### 与 IntelliJ 同步 Astraios 的代码风格

目前，我们已经提炼了与Astraios的代码相关的最重要的代码风格约定，作为IntelliJ的设置。如果IntelliJ用于IDE，我们可以通过导入repo根目录下的
[Astraios-Project-intellij-code-style.xml][style config] 文件来导入这些代码风格设置。项目的设置将在IDE的 `编辑器->代码样式`
部分下显示为名为 “Astraios-Project” 的新方案。

[Astraios]: https://paion-data.github.io/astraios/

[Docker 的集成测试]: https://github.com/paion-data/astraios/blob/master/src/test/groovy/com/paiondata/astraios/application/ResourceConfigITSpec.groovy

[style config]: https://github.com/paion-data/astraios/blob/master/Astraios-Project-intellij-code-style.xml
