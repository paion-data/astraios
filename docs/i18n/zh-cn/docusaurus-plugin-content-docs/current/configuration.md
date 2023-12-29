---
sidebar_position: 4
title: 配置
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

此页面中的配置可以按照以下顺序从以下几个来源进行设置，：

1. [操作系统的环境变量]；例如，可以通过 `export OAUTH_ENABLED="true"` 设置环境变量
2. [Java 系统属性]；例如，可以使用 `System.setProperty("OAUTH_ENABLED", "true")` 设置 Java 系统属性
3. 放置在 CLASSPATH 下的 **.properties** 文件。此文件可以放在 `src/main/resources` 源目录下，内容可以是 `OAUTH_ENABLED=true`

主要配置
-------

:::note

以下配置可以放置在名为 **application.properties** 的配置文件中

:::

- **MODEL_PACKAGE_NAME**: 包含了所有 Elide JPA data model 的完全限定 Java 包路径名

OAuth 2
-------

:::note

以下配置可以放置在名为 **oauth.properties** 的配置文件中

:::

- **OAUTH_ENABLED**: 是否启用 [OAuthFilter] 请求过滤器。
- **JWKS_URL**: （**如果将 `OAUTH_ENABLED` 设置为 `true`，则必填**）标准的 [JWKS] URL，浏览器访问后返回一个 JSON 对象，例如：

  ```json
  {
      "keys": [
          {
              "kty": "EC",
              "use": "sig",
              "kid": "eTERknhur9q8gisdaf_dfrqrgdfsg",
              "alg": "ES384",
              "crv": "P-384",
              "x": "sdfrgHGYF...",
              "y": "sdfuUIG&8..."
          }
      ]
  }
  ```

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

CI/CD
-----

需要设置以下[GitHub Action Secrets][GitHub Action - How to set up]：

| **Secret Name**                | **Definition**                                                                                                                                                                     | **How to Get**                                                                                                                                                                                                     |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DOCKERHUB_USERNAME             | 你的 Docker Hub username                                                                                                                                                            | 比如[这个用户](https://hub.docker.com/u/jack20191124)的USERNAME是`jack20191124`                                                                                                                                                  |
| DOCKERHUB_TOKEN                | 用于在 GitHub Action 中进行 Docker CLI 认证的个人访问令牌（PAT）                                                                                    | [创建访问令牌](https://docs.docker.com/security/for-developers/access-tokens/#create-an-access-token)                                                                                                 |
| AWS_WS_PKRVARS_HCL             | HashiCorp Packer 变量 [值文件](https://qubitpi.github.io/hashicorp-packer/packer/guides/hcl/variables#from-a-file) 内容                                           | [hashicorp-aws](https://qubitpi.github.io/hashicorp-aws/docs/webservice)                                                                                                                                           |
| SSL_CERTIFICATE                | 用于通过安全的 HTTPS 公开 Web 服务 API 的 SSL 证书文件                                                                                                                         | [使用运行在 Nginx 上的 Certbot 安装免费 SSL 证书](https://qubitpi.github.io/hashicorp-aws/docs/setup#step-1---store-ssl-certificate-in-github-secrets)                                              |
| SSL_CERTIFICATE_KEY            | 用于通过安全的 HTTPS 公开 Web 服务 API 的 SSL 证书密钥文件                                                                                                                     | [使用运行在 Nginx 上的 Certbot 安装免费 SSL 证书](https://qubitpi.github.io/hashicorp-aws/docs/setup#step-1---store-ssl-certificate-in-github-secrets)                                              |
| NGINX_CONFIG_FILE              | 用作HTTPS反向代理的Nginx配置文件                                                                                                                                     | [定义 Nginx 反向代理配置文件](https://qubitpi.github.io/hashicorp-aws/docs/setup#step-3---define-nginx-reverse-proxy-config-file) |
| AWS_WS_TFVARS                  | HashiCorp Terraform 变量 [值文件](https://qubitpi.github.io/hashicorp-terraform/terraform/language/values/variables#variable-definitions-tfvars-files) 内容       | [hashicorp-aws](https://qubitpi.github.io/hashicorp-aws/docs/webservice)                                                                                                                                           |
| MAVEN_SETTINGS_XML             | Webservice 项目的 [Maven 设置文件](https://maven.apache.org/settings.html)                                                                                         | 包含[这些元标签](https://github.com/QubitPi/jersey-webservice-template/blob/jpa-elide/settings.xml.example)的 `settings.xml` 文件的确切内容                                                            |
| APPLICATION_PROPERTIES         | 上述提到的 `src/main/resources/application.properties` 文件的内容                                                                                                    | 请参阅上述的 [主要配置](#主要配置) 部分                                                                                                                                                              |
| OAUTH_PROPERTIES               | 上述提到的 `src/main/resources/oauth.properties` 文件的内容                                                                                                          | 请参阅上述的 [Security](#oauth-2) 部分                                                                                                                                                                            |
| JPADATASTORE_PROPERTIES        | 上述提到的 `src/main/resources/jpadatastore.properties` 文件的内容                                                                                                   | 请参阅上述的 [JPA DataStore](#elide-jpa-datastore) 部分                                                                                                                                                                  |
| DATA_MODELS_PRIVATE_REPO_TOKEN | 用于访问 Elide Data Model 代码仓库的 GitHub PAT token，至少具有“对代码和元数据的读取权限”                                                | [创建 fine-grained personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) |
| DATA_MODELS_PRIVATE_REPO_ORG   | Elide Data Model 代码仓库的 GitHub 组织或用户名称                                                                                                                         | 对[这个例子](https://github.com/QubitPi/jersey-webservice-template-jpa-data-models)来说，`DATA_MODELS_PRIVATE_REPO_ORG` 的值为 "QubitPi"                                                                               |
| DATA_MODELS_PRIVATE_REPO_NAME  | Elide Data Model 代码仓库的名称                                                                                                                                  | 对[这个例子](https://github.com/QubitPi/jersey-webservice-template-jpa-data-models)来说，`DATA_MODELS_PRIVATE_REPO_NAME` 的值为 "jersey-webservice-template"                                                           |
| AWS_ACCESS_KEY_ID              | 与[配置 AWS CLI 的环境变量](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)中提到的完全相同的 `AWS_ACCESS_KEY_ID`     | [如何为 Amazon Keyspaces 创建和配置 AWS 访问密钥 ID](https://docs.aws.amazon.com/keyspaces/latest/devguide/access.credentials.html)                                                                  |
| AWS_SECRET_ACCESS_KEY          | 与[配置 AWS CLI 的环境变量](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)中提到的完全相同的 `AWS_SECRET_ACCESS_KEY` | [如何为 Amazon Keyspaces 创建和配置 AWS 访问密钥 ID](https://docs.aws.amazon.com/keyspaces/latest/devguide/access.credentials.html)                                                                  |
| AWS_REGION                     | 与[配置 AWS CLI 的环境变量](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)中提到的完全相同的 `AWS_REGION`            | [如何为 Amazon Keyspaces 创建和配置 AWS 访问密钥 ID](https://docs.aws.amazon.com/keyspaces/latest/devguide/access.credentials.html)                                                                  |

[GitHub Action - How to set up]: https://docs.github.com/en/actions/security-guides/encrypted-secrets

[Java 系统属性]: https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html
[JWKS]: https://datatracker.ietf.org/doc/html/rfc7517

[OAuthFilter]: https://paion-data.github.io/astraios/apidocs/com/paiondata/astraios/web/filters/OAuthFilter.html
[操作系统的环境变量]: https://docs.oracle.com/javase/tutorial/essential/environment/env.html
