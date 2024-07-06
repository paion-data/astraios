---
sidebar_position: 4
title: 配置
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

此页面中的配置可以按照以下顺序从以下几个来源进行设置，：

1. [操作系统的环境变量]；例如，可以通过 `export DB_URL="jdbc:mysql://db/elide?serverTimezone=UTC"` 设置环境变量
2. [Java 系统属性]；例如，可以使用 `System.setProperty("DB_URL", "jdbc:mysql://db/elide?serverTimezone=UTC")` 设置 Java 系统属性
3. 放置在 CLASSPATH 下的 **.properties** 文件。此文件可以放在 `src/main/resources` 源目录下，内容可以是 `DB_URL=jdbc:mysql://db/elide?serverTimezone=UTC`

主要配置
-------

:::note

以下配置可以放置在名为 **application.properties** 的配置文件中

:::

- **MODEL_PACKAGE_NAME**: 包含了所有 Elide JPA data model 的完全限定 Java 包路径名

(Elide) JPA数据存储
---------------------

:::note

以下配置可以放置在名为**jpadatastore.properties**的属性文件中

:::

- **DB_USER**: 持久性数据库用户名（需要有读写权限）。
- **DB_PASSWORD**: 持久性数据库用户密码。
- **DB_URL**: 持久性数据库URL，如"jdbc:mysql://localhost/elide?serverTimezone=UTC"。
- **DB_DRIVER**: SQL数据库驱动类名，如"com.mysql.jdbc.Driver"。
- **DB_DIALECT**: SQL数据库方言名称，如"org.hibernate.dialect.MySQLDialect"。
- **HIBERNATE_HBM2DDL_AUTO**: Web服务启动时对现有JPA数据库的处理方式；可以是四个值之一：

    1. _validate_: 验证模式是否匹配，不对数据库的模式做任何更改。_这是**HIBERNATE_HBM2DDL_AUTO**的默认值_
    2. _update_: 更新模式以反映要持久化的实体
    3. _create_: 为您的实体创建必要的模式，销毁以前的任何数据。
    4. _create-drop_: 如同在create中一样创建模式，但在会话结束时也删除模式。这非常适合开发或测试。

  :::note

  此属性与[Hibernate `hibernate.hbm2ddl.auto`属性]完全相同。

  :::

[Hibernate `hibernate.hbm2ddl.auto`属性]: https://stackoverflow.com/questions/18077327/hibernate-hbm2ddl-auto-possible-values-and-what-they-do

[Java系统属性]: https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html

[操作系统环境变量]: https://docs.oracle.com/javase/tutorial/essential/environment/env.html
