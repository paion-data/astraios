Astraios Documentation
========================================

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

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

Build
-----

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

Deployment
----------

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the
`gh-pages` branch.

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
