---
sidebar_position: 5
title: Security
---

Core Concepts
-------------

API authentication is largely a solved problem and generally outside the scope of Astraios.
Authorization - the act of verifying data and operation access for an _already authenticated user_ in the Astraios
gets delegated to Elide.

Astraios does, however, adds a layer of security on its own by validating [OAuth 2 access token] on all incoming
request. Each Astraios API request requires a standard **"Authentication": "Bearer <access_token>"** token header:

![Error loading oauth2-filtering.png](./img/oauth2-filtering.png)

[OAuth 2 access token]: https://www.oauth.com/oauth2-servers/access-tokens/
