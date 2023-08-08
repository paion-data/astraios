---
sidebar_position: 5
title: Setting Up Sentry.io
---

Sentry is a developer-first error tracking and performance monitoring platform that helps developers see what actually
matters, solve quicker, and learn continuously about their applications.

<p align="center">
  <img src="https://github.com/getsentry/sentry/raw/master/.github/screenshots/projects.png" width="270" />
  <img src="https://github.com/getsentry/sentry/raw/master/.github/screenshots/issue-details.png" width="270" />
  <img src="https://github.com/getsentry/sentry/raw/master/.github/screenshots/transaction-summary.png" width="270" />
  <img src="https://github.com/getsentry/sentry/raw/master/.github/screenshots/releases.png" width="270" />
</p>

:::note

The logging framework has to be <b>Logback</b>, which is the logging library used in
[jersey-ws-template][jersey-ws-template]

![Error loading setup-sentry-1.png](./img/setup-sentry-1.png)
![Error loading setup-sentry-2.png](./img/setup-sentry-2.png)
![Error loading setup-sentry-3.png](./img/setup-sentry-3.png)

:::

### Hiding [Sentry DSN](https://docs.sentry.io/platforms/java/guides/logback/#dsn-configuration)

It is recommended to simply define **SENTRY_DSN** environment variable via CI/CD so that Sentry SDK can pick it up
automatically

[jersey-ws-template]: https://github.com/QubitPi/jersey-ws-template

[Sentry DSN]: https://docs.sentry.io/platforms/java/guides/logback/#dsn-configuration
