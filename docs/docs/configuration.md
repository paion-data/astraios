---
sidebar_position: 4
title: Configuration
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

The configurations in this page can be set from several sources in the following order:

1. the [operating system's environment variables]; for instance, an environment variable can be set with
   `export OAUTH_ENABLED="true"`
2. the [Java system properties]; for example, a Java system property can be set using
   `System.setProperty("OAUTH_ENABLED", "true")`
3. a **.properties** file placed under CLASSPATH. This file can be put under `src/main/resources` source directory with
   contents, for example, `OAUTH_ENABLED=true`

Core Properties
---------------

:::note

The following configurations can be placed in the properties file called **application.properties**

:::

- **MODEL_PACKAGE_NAME**: The fully qualified package name that contains a set of Elide JPA models

OAuth 2
-------

:::note

The following configurations can be placed in the properties file called **oauth.properties**

:::

- **OAUTH_ENABLED**: Whether or not to enable [OAuthFilter] container request filter.
- **JWKS_URL**: (**Required if `OAUTH_ENABLED` is set to `true`**) A standard [JWKS] URL that, on GET, returns a json
  object such as

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

The following configurations can be placed in the properties file called **jpadatastore.properties**

:::

- **DB_USER**: Persistence DB username (needs have both Read and Write permissions).
- **DB_PASSWORD**: The persistence DB user password.
- **DB_URL**: The persistence DB URL, such as "jdbc:mysql://localhost/elide?serverTimezone=UTC".
- **DB_DRIVER**: The SQL DB driver class name, such as "com.mysql.jdbc.Driver".
- **DB_DIALECT**: The SQL DB dialect name, such as "org.hibernate.dialect.MySQLDialect".

CI/CD
-----

The following [GitHub Action Secrets][GitHub Action - How to set up] needs to be setup:

| **Secret Name**                | **Definition**                                                                                                                                                                     | **How to Get**                                                                                                                                                                                                     |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SONAR_TOKEN                    | SonarCloud token used for running analyses on codebase                                                                                                                             | [SonarCloud](https://sonarcloud.io/account/security)                                                                                                                                                               |
| DOCKERHUB_USERNAME             | You Docker Hub username                                                                                                                                                            | For example, [this user](https://hub.docker.com/u/jack20191124)'s                                                                                                                                                  |
| DOCKERHUB_TOKEN                | A personal access token (PAT) to use as an Docker CLI authentication from within GitHub Action                                                                                     | [Creating an access token](https://docs.docker.com/security/for-developers/access-tokens/#create-an-access-token)                                                                                                  |
| AWS_WS_PKRVARS_HCL             | The HashiCorp Packer variable [values file](https://qubitpi.github.io/hashicorp-packer/packer/guides/hcl/variables#from-a-file) contents                                           | [hashicorp-aws](https://qubitpi.github.io/hashicorp-aws/docs/webservice)                                                                                                                                           |
| SSL_CERTIFICATE                | SSL cert file for exposing webservice API via secure HTTPS                                                                                                                         | [Installing Free SSL Certificates with Certbot running on Nginx](https://qubitpi.github.io/hashicorp-aws/docs/setup#step-1---store-ssl-certificate-in-github-secrets)                                              |
| SSL_CERTIFICATE_KEY            | SSL cert key file for exposing webservice API via secure HTTPS                                                                                                                     | [Installing Free SSL Certificates with Certbot running on Nginx](https://qubitpi.github.io/hashicorp-aws/docs/setup#step-1---store-ssl-certificate-in-github-secrets)                                              |
| NGINX_CONFIG_FILE              | Config file for Nginx as a HTTPS reverse proxy                                                                                                                                     | [Define Nginx Reverse Proxy Config File](https://qubitpi.github.io/hashicorp-aws/docs/setup#step-3---define-nginx-reverse-proxy-config-file)                                                                       |
| AWS_WS_TFVARS                  | The HashiCorp Terraform variable [values file](https://qubitpi.github.io/hashicorp-terraform/terraform/language/values/variables#variable-definitions-tfvars-files) contents       | [hashicorp-aws](https://qubitpi.github.io/hashicorp-aws/docs/webservice)                                                                                                                                           |
| MAVEN_SETTINGS_XML             | A [Maven settings file](https://maven.apache.org/settings.html) for the Webservice project                                                                                         | The exact settings.xml contents containing [these meta tags](https://github.com/QubitPi/jersey-webservice-template/blob/jpa-elide/settings.xml.example)                                                            |
| APPLICATION_PROPERTIES         | The contents of the `src/main/resources/application.properties` mentioned above                                                                                                    | See [Core Properties](#core-properties) section above                                                                                                                                                              |
| OAUTH_PROPERTIES               | The contents of the `src/main/resources/oauth.properties` mentioned above                                                                                                          | See [Security](#security) section above                                                                                                                                                                            |
| JPADATASTORE_PROPERTIES        | The contents of the `src/main/resources/jpadatastore.properties` mentioned above                                                                                                   | See [JPA DataStore](#jpa-datastore) section above                                                                                                                                                                  |
| DATA_MODELS_PRIVATE_REPO_TOKEN | The GitHub Fine-grained token with at least "Read access to code and metadata" repository permissions to the Elide data models repo                                                | [Creating a fine-grained personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) |
| DATA_MODELS_PRIVATE_REPO_ORG   | The org/user name of the GitHub repo for Elide data models                                                                                                                         | For [this example](https://github.com/QubitPi/jersey-webservice-template-jpa-data-models), DATA_MODELS_PRIVATE_REPO_ORG is "QubitPi"                                                                               |
| DATA_MODELS_PRIVATE_REPO_NAME  | The name of the GitHub repo for Elide data models                                                                                                                                  | For [this example](https://github.com/QubitPi/jersey-webservice-template-jpa-data-models), DATA_MODELS_PRIVATE_REPO_NAME is "jersey-webservice-template"                                                           |
| AWS_ACCESS_KEY_ID              | The exact same AWS_ACCESS_KEY_ID as mentioned in [Environment variables to configure the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)     | [How to create and configure AWS credentials for Amazon Keyspaces](https://docs.aws.amazon.com/keyspaces/latest/devguide/access.credentials.html)                                                                  |
| AWS_SECRET_ACCESS_KEY          | The exact same AWS_SECRET_ACCESS_KEY as mentioned in [Environment variables to configure the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html) | [How to create and configure AWS credentials for Amazon Keyspaces](https://docs.aws.amazon.com/keyspaces/latest/devguide/access.credentials.html)                                                                  |
| AWS_REGION                     | The exact same AWS_REGION as mentioned in [Environment variables to configure the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)            | [How to create and configure AWS credentials for Amazon Keyspaces](https://docs.aws.amazon.com/keyspaces/latest/devguide/access.credentials.html)                                                                  |

[GitHub Action - How to set up]: https://docs.github.com/en/actions/security-guides/encrypted-secrets

[Java system properties]: https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html
[JWKS]: https://datatracker.ietf.org/doc/html/rfc7517

[OAuthFilter]: https://paion-data.github.io/astraios/apidocs/com/paiondata/astraios/web/filters/OAuthFilter.html
[operating system's environment variables]: https://docs.oracle.com/javase/tutorial/essential/environment/env.html
