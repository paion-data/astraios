---
sidebar_position: 4
title: CI/CD
---

![Error loading ci-cd.png](./img/ci-cd.png)

The following [GitHub Secrets][How to set up GitHub Action Secrets] needs to be defined

- [**SONAR_TOKEN**](https://sonarcloud.io/project/overview?id=QubitPi_jersey-ws-template)
- **SSL_CERTIFICATE** SSL certificate file content (for [exposing webservice endpoints over HTTPS][Nginx SSL Config])
- **SSL_CERTIFICATE_KEY** SSL certificate key file content (for
  [exposing webservice endpoints over HTTPS][Nginx SSL Config])
- [**AWS_ACCESS_KEY_ID**](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)
- [**AWS_SECRET_ACCESS_KEY**](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)
- [**AWS_REGION**](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)
- **ZONE_ID** AWS Route 53 hosted zone ID (DNS routing)
- **DOCKERHUB_USERNAME** The [Dockerfile][jersey-ws-template Dockerfile], in [CI/CD][jersey-ws-template CI/CD], got
  pushed to a [personal DockerHub][docker hub] account. The _DOCKERHUB_USERNAME_ if it needs to go to a different
  account, should be set accordingly
- [**DOCKERHUB_TOKEN**](https://docs.docker.com/docker-hub/access-tokens/) for pushing the
  [aforementioned image][jersey-ws-template Dockerfile]
<!-- markdown-link-check-disable -->

- [**SENTRY_DSN**](sentry)

<!-- markdown-link-check-enable -->

[docker hub]: https://hub.docker.com/r/jack20191124/jersey-ws-template/

[jersey-ws-template CI/CD]: https://github.com/QubitPi/jersey-ws-template/blob/master/.github/workflows/ci-cd.yml
[jersey-ws-template Dockerfile]: https://github.com/QubitPi/jersey-ws-template/blob/master/Dockerfile

[Nginx SSL Config]: https://github.com/QubitPi/jersey-ws-template/blob/master/hashicorp/images/nginx-ssl.conf
