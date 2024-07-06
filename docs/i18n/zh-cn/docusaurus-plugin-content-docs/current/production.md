---
sidebar_position: 5
title: 生产
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

本节讨论如何在生产环境中部署[Astraios]。

准备在生产环境上开发
-----------------------------

### 安装Java（在Ubuntu上）

```bash
sudo apt update
sudo apt install openjdk-17-jdk
```

在最后一个命令提示符的末尾，将显示如下内容：

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

输入`Y`完成安装。

:::

如果在输入查看版本的命令后看到类似内容，则表示一切正常

```bash
$ java -version
openjdk version "17.0.11" 2024-04-16
OpenJDK Runtime Environment (build 17.0.11+9-Ubuntu-120.04.2)
OpenJDK 64-Bit Server VM (build 17.0.11+9-Ubuntu-120.04.2, mixed mode, sharing)
```

### 安装Maven

```bash
sudo apt install maven
```

在最后一个命令提示符的末尾，将显示如下内容：

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

输入`Y`完成安装。

:::

如果在输入查看版本的命令后看到类似内容，则表示一切正常

```bash
$ mvn -version
Apache Maven 3.6.3
Maven home: /usr/share/maven
Java version: 17.0.11, vendor: Ubuntu, runtime: /usr/lib/jvm/java-17-openjdk-amd64
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "5.4.0-182-generic", arch: "amd64", family: "unix"
```

### 加载数据模型

```bash
git clone git@github.com:paion-data/astraios-data-models-example.git
cd astraios-data-models-example
mvn clean install
```

现在我们有了一些模型，但是如果没有 API 的话并不是很有用。
需要让 _my-webservice_ 通过 Maven 配置文件来
加载数据模型，即 **~/.m2/settings.xml**：

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

### 打包Astraios

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

[Astraios]由[Springboot](https://spring.io/projects/spring-boot)构建，并具有内置Web容器，我们使用maven将其打包成jar文件。

### 运行JAR包

```bash
java -jar target/astraios-1.0-SNAPSHOT.jar
```

服务将在端口**8080**上运行，您将能够看到您插入的数据。

[Astraios]: https://paion-data.github.io/astraios/
