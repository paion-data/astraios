---
sidebar_position: 3
title: 开发
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

运行测试
-------

以下命令运行单元测试和集成测试：

```bash
mvn clean verify
```

对于IT测试，我们使用 [Testcontainers] 而不是 [jcabi-mysql]，因为后者很难配置和调试，并且 [Testcontainers] 支持更多类型的数据库，例如
mongo

打包
----

```bash
mvn clean package
```

在 target 目录下会生成一个名为 astraios-1.0-SNAPSHOT.jar 的 [JAR 文件](https://en.m.wikipedia.org/wiki/JAR_(file_format))，

运行 Webservice (生产环境)
-------------------------------------------

### 运行 JAR 包

```bash
java -jar astraios-1.0-SNAPSHOT.jar
```

Webservice 将在 **8080** 端口上运行，您将看到您插入的数据

[Docker Compose]: https://docs.docker.com/compose/

[jcabi-mysql]: https://mysql.jcabi.com/

[Testcontainers]: https://qubitpi.github.io/testcontainers-java/
