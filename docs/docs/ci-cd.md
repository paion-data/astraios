---
sidebar_position: 4
title: CI/CD
---

![Error loading ci-cd.png](./img/ci-cd.png)

The following [GitHub Secrets][How to set up GitHub Action Secrets] needs to be defined

- [**SONAR_TOKEN**](https://sonarcloud.io/project/overview?id=paion-data_astraios)
- [**AWS_ACCESS_KEY_ID**](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)
- [**AWS_SECRET_ACCESS_KEY**](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)
- [**AWS_REGION**](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)
- **DOCKERHUB_USERNAME** The [Dockerfile][astraios Dockerfile], in [CI/CD][astraios CI/CD], got
  pushed to a [personal DockerHub][docker hub] account. The _DOCKERHUB_USERNAME_ if it needs to go to a different
  account, should be set accordingly
- [**DOCKERHUB_TOKEN**](https://docs.docker.com/docker-hub/access-tokens/) for pushing the
  [aforementioned image][astraios Dockerfile]
<!-- markdown-link-check-disable -->

- [**SENTRY_DSN**](sentry)

<!-- markdown-link-check-enable -->

[docker hub]: https://hub.docker.com/r/jack20191124/astraios/

[astraios CI/CD]: https://github.com/paion-data/astraios/blob/master/.github/workflows/ci-cd.yml
[astraios Dockerfile]: https://github.com/paion-data/astraios/blob/master/Dockerfile
