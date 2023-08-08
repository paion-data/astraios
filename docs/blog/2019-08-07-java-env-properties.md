---
slug: java-env-properties
title: Java System Properties & Environment Variables API's
authors: jiaqi
tags: [java]
---

System Properties
-----------------

The Java platform uses a **Properties** object to provide information about the local system and configuration, and we
call it **System Properties**.

System Properties include information such as the current user, the current version of the Java runtime, and the file
path-name separator.

In the below code, we use `System.getProperty("log_dir")` to read the value of the property `log_dir`. We also make use
of the default value parameter, so if the property doesn't exist, getProperty returns `/tmp/log`:

```java
String log_dir = System.getProperty("log_dir","/tmp/log");
```

To update System Properties at runtime, we use the **System.setProperty** method:

```java
System.setProperty("log_dir", "/tmp/log");
```

We can pass our own properties or configurations values to the application using the **propertyName** command line
argument:

```java
java -jar jarName -DpropertyName=value
```

For example

```java
java -jar app -Dfoo="bar"
```

Environment Variables
---------------------

Environment Variables are key/value pairs like Properties. Many Operating Systems use Environment Variables to allow
_configuration information to be passed into applications_.

The way to set an environment variable differs from one operating system to another. For example, on Linux, we use

```bash
export MY_ENV_VAR=foo
```

_When creating a process, it inherits a clone environment of its parent process by default_.

To obtain a single environment variable programmatically, we can call **getenv** with the variable name:

```java
String log_dir = System.getenv("log_dir");
```

:::caution

getenv() returns a _read-only_ Map. Trying to add values to the map throws an UnsupportedOperationException.

:::

The Differences
---------------

Although both are essentially maps that provide String values for String keys, let's look at a few differences:

1. We can update Properties at runtime, while Environment Variables are an immutable copy of the Operating System's
   variables.
2. Properties are contained only within the Java platform, while Environment Variables are global at the Operating
   System level, available to all applications running on the same machine.
3. Properties must exist when packaging the application, but we can create Environment Variables on the Operating
   System at almost any point.
