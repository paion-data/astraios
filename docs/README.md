Astraios Documentation
======================

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

Installation
------------

```bash
yarn
```

Local Development
-----------------

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

### Translation

Astraios documentation comes with [internationalization][Docusaurus i18n] supporting both **English** and
**Chinese**. The location of Chinese translation is in [i18n/zh-cn](./i18n/zh-cn) directory

To start the localized site in dev mode, use:

```bash
yarn start --locale zh-cn
```

Your site is accessible at `http://localhost:3000/astraios/zh-cn/`

Build
-----

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service. Docusaurus will build one single-page application per locale:

- **build**: for the default, English language
- **build/zh-cn**: for the Chinese language

### Troubleshooting

#### Docusaurus Blogs Relative Linking is Treated False-Negative by CI Markdown Link check

[CI check for Markdown link](../.github/workflows/ci-cd.yml) (`markdown-link-check`) is turned on and it's not smart
enough to detect relative linking by Docusaurus. The workaround is to disable the link check at the relevant line. For
example:

```markdown
<!-- markdown-link-check-disable -->
known. Additionally, this process makes it easy to implement a [blue-green deployment](continuous-delivery) or
<!-- markdown-link-check-enable -->
```

[Docusaurus i18n]: https://docusaurus.io/docs/next/i18n/tutorial
