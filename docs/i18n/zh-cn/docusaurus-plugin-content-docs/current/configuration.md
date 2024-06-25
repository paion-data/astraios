---
sidebar_position: 4
title: 配置
---

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

(Elide) JPA DataStore
---------------------

:::note

以下配置可以放置在名为 **jpadatastore.properties** 的配置文件中

:::

- **DB_USER**: 持久化数据库用户名（需要具有读写权限）。
- **DB_PASSWORD**: 持久化数据库用户密码。
- **DB_URL**: 持久化数据库 URL，比如 "jdbc:mysql://localhost/elide?serverTimezone=UTC"。
- **DB_DRIVER**: SQL 数据库驱动类名，例如 "com.mysql.jdbc.Driver"。
- **DB_DIALECT**: SQL 数据库语法类名，例如 "org.hibernate.dialect.MySQLDialect"。

[Java 系统属性]: https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html

[操作系统的环境变量]: https://docs.oracle.com/javase/tutorial/essential/environment/env.html
