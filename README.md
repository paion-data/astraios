<div align="center">
<img width="20%" alt="Astraios Logo" src="./docs/static/img/logo.png">
</div>

<div align="center">

<b>In less than 10 minutes</b>, your colleague went downstairs for a cup of coffee <img src="https://github.com/paion-data/astraios/assets/16126939/414e01bc-082d-4cc1-8478-b53c8c817943" width="45px" />

<b>You, using Astraios, coded up and deployed a production-quality CRUD webservice</b> <img src="https://github.com/paion-data/astraios/assets/16126939/283b3171-d960-4d53-8524-5eb6d97f4185" width="45px" />

</div>

Astraios <sup>![Java Version Badge][Java Version Badge]</sup>
========

[![GitHub Workflow Status][GitHub Workflow Status]](https://github.com/paion-data/astraios/actions/workflows/ci-cd.yml)
![Last Commit](https://img.shields.io/github/last-commit/paion-data/astraios/master?logo=github&style=for-the-badge)
[![Apache License Badge]](https://www.apache.org/licenses/LICENSE-2.0)

[Astraios] is a [JSR 370] web service **template** that lets us _spin up_ and _deploy_ model driven GraphQL or JSON API
web service with minimal effort.

Astraios seamlessly combines development and deployment of a CRUD (Create, Read, Update, Delete) API with

1. a business-oriented approach using [Convention Over Configuration](https://en.wikipedia.org/wiki/Convention_over_configuration), which resulted in a highly opinionated APIs for web & mobile
2. the latest
   [Immutable Infrastructure](https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure)
   DevOp practice that
   [fully automates the API deployment onto
  AWS](https://qubitpi.github.io/hashicorp-aws/)

At the end of the day, Astraios helps organization to **improve the velocity and quality of their teams' work**

Spinning Up the API in 1 Minute
-------------------------------

### Running API From Template <sup>[![Java Version Badge][Java Version Badge]](https://paion-data.github.io/astraios/docs/setup#installing-java--maven-on-mac) ![Maven Badge][Maven Badge] [![Docker Compose Badge][Docker Compose Badge]](https://docs.docker.com/engine/install/)</sup>

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/paion-data/astraios/master/quickstart.sh)"
```

### Writing Data

```curl
curl -X POST "http://localhost:8080/v1/data" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"  \
    -d '{ "query" : "mutation { book(op: UPSERT, data:{title: \"Pride & Prejudice\"}) { edges { node { id title } } } }" }'
```

### Reading Data

<!-- markdown-link-check-disable -->
Simply open up our favorite browser and hit http://localhost:8080/v1/data/book
<!-- markdown-link-check-enable -->

Deploying the API in 5 Minutes
------------------------------

![GitHub Actions Badge][GitHub Actions Badge]
![HashiCorp Packer Badge][HashiCorp Packer Badge]
![HashiCorp Terraform Badge][HashiCorp Terraform Badge]
[![AWS EC2 min size][AWS EC2 min size]](https://aws.amazon.com/ec2/instance-types/)

Coming Soon!

Documentation
-------------

Comprehensive documentation is viewable on our [website][Documentation]

Contributors <sup>[![Update Link Missing!](https://img.shields.io/badge/Click%20To%20Update-00AA00.svg?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/paion-data/astraios/actions/workflows/contributors.yml)</sup>
------------

<!-- readme: collaborators,contributors,bots -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/QubitPi">
            <img src="https://avatars.githubusercontent.com/u/16126939?v=4" width="100;" alt="QubitPi"/>
            <br />
            <sub><b>QubitPi</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Xxy1016">
            <img src="https://avatars.githubusercontent.com/u/125425805?v=4" width="100;" alt="Xxy1016"/>
            <br />
            <sub><b>Xxy1016</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/github-actions[bot]">
            <img src="https://avatars.githubusercontent.com/in/15368?v=4" width="100;" alt="github-actions[bot]"/>
            <br />
            <sub><b>github-actions[bot]</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: collaborators,contributors,bots -end -->

License
-------

The use and distribution terms for [Astraios] are covered by the
[Apache License, Version 2.0][Apache License, Version 2.0].

[Apache License Badge]: https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white
[Apache License, Version 2.0]: http://www.apache.org/licenses/LICENSE-2.0.html
[Astraios]: https://paion-data.github.io/astraios/
[AWS EC2 min size]: https://img.shields.io/badge/EC2-%E2%89%A5t2.small-FF9902?style=for-the-badge&logo=amazonec2&logoColor=white

[Documentation]: https://paion-data.github.io/astraios/
[Docker Compose Badge]: https://img.shields.io/badge/Docker%20Compose-2596EC?style=for-the-badge&logo=docker&logoColor=white

[GitHub Actions Badge]: https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white
[GitHub Workflow Status]: https://img.shields.io/github/actions/workflow/status/paion-data/astraios/ci-cd.yml?branch=master&logo=github&style=for-the-badge
[Golden paths]: https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/

[HashiCorp Packer Badge]: https://img.shields.io/badge/Packer-02A8EF?style=for-the-badge&logo=Packer&logoColor=white
[HashiCorp Terraform Badge]: https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white

[Maven Badge]: https://img.shields.io/badge/Maven-DF5931?style=for-the-badge&logo=apachemaven&logoColor=white

[Java Version Badge]: https://img.shields.io/badge/Java-17-brightgreen?style=for-the-badge&logo=OpenJDK&logoColor=white

[JSR 370]: https://jcp.org/en/jsr/detail?id=370

[Pareto Principle]: https://en.wikipedia.org/wiki/Pareto_principle

[The Technology Acceptance Model (TAM)]: https://open.ncl.ac.uk/theories/1/technology-acceptance-model/

[Yahoo Elide]: https://elide.io/
