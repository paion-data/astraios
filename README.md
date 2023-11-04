<div align="center">
<img width="20%" alt="Astraios Logo" src="./docs/static/img/logo.png">
</div>

Astraios <sup>![Java Version Badge][Java Version Badge]</sup>
=============================================================

[![GitHub Workflow Status][GitHub Workflow Status]](https://github.com/paion-data/astraios/actions/workflows/ci-cd.yml)
![Last Commit](https://img.shields.io/github/last-commit/paion-data/astraios/master?logo=github&style=for-the-badge)
[![Apache License Badge]](https://www.apache.org/licenses/LICENSE-2.0)
![GitHub Actions Badge][GitHub Actions Badge]
![HashiCorp Packer Badge][HashiCorp Packer Badge]
![HashiCorp Terraform Badge][HashiCorp Terraform Badge]

<a href="https://sonarcloud.io/summary/new_code?id=paion-data_astraios">
    <img
        align="left"
        width="17%"
        alt="SonarCloud Quality Gate"
        src="https://sonarcloud.io/api/project_badges/quality_gate?project=paion-data_astraios"
    >
</a>

[![Bugs][Sonar Bugs]](https://sonarcloud.io/summary/new_code?id=paion-data_astraios)
[![Vulnerabilities][Sonar Vulnerabilities]](https://sonarcloud.io/summary/new_code?id=paion-data_astraios)
[![Security Rating][Sonar Security Rating]](https://sonarcloud.io/summary/new_code?id=paion-data_astraios)

[![Coverage][Sonar Coverage]](https://sonarcloud.io/summary/new_code?id=paion-data_astraios)
[![Code Smells][Sonar Code Smells]](https://sonarcloud.io/summary/new_code?id=paion-data_astraios)
[![Maintainability Rating][Sonar Maintainability Rating]](https://sonarcloud.io/summary/new_code?id=paion-data_astraios)

[![Lines of Code][Sonar Lines of Code]](https://sonarcloud.io/summary/new_code?id=paion-data_astraios)
[![Duplicated Lines (%)][Sonar Duplicated Lines (%)]](https://sonarcloud.io/summary/new_code?id=paion-data_astraios)
[![Reliability Rating][Sonar Reliability Rating]](https://sonarcloud.io/summary/new_code?id=paion-data_astraios)
[![Technical Debt][Sonar Technical Debt]](https://sonarcloud.io/summary/new_code?id=paion-data_astraios)

[Astraios] is a [JSR 370] web service **template** that lets us spin up model driven GraphQL or JSON API web service
with minimal effort.

https://github.com/paion-data/astraios/assets/16126939/875d50a2-4fc4-4ca3-8e75-c846769686d4

We Believe Binding to Standard Makes the Best Software
------------------------------------------------------

CRUD web services are now widespread, standardizing organizational approaches to the cloud. But as business expand,
web service often struggle to reach the desired levels of scale. Development slows as complexity grows.

By codifying and standardizing a webservice development and compliance rules, developers can be free to do what they
want to: add business value by writing code.

Astraios applies the [Pareto Principle] to webservice design. Use case analysis shows that the vast majority of web
service component need just a handful of inputs to meet most customer requirements. Focusing on this "easy 80%" of use
cases results in neat, concise web service that are simple to understand and use. It also causes web service to become
more opinionated, which guides developers into a standard pattern, bringing consistency around how software is used in
the organization.

Gradually, more than just code can be shared. Best practices start to emerge. [Golden paths] are created.

[The Technology Acceptance Model (TAM)] suggests that adoption is predicted on how much people see something as being
useful and easy to use. Standardization and golden paths address both these factors and make adoption of an open source
project more likely. Astraios does more to make itself easy to use by

- enabling "on-click" experience that goes from nothing to a full-fledged webservice on AWS cloud
- delegating JPA persistence to [Yahoo Elide] so that the API of Astraios help developers use it correctly.

Start Using Astraios
--------------------

- [Documentation]
- [Javadoc]

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

[Documentation]: https://paion-data.github.io/astraios/

[GitHub Actions Badge]: https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white
[GitHub Workflow Status]: https://img.shields.io/github/actions/workflow/status/paion-data/astraios/ci-cd.yml?branch=master&logo=github&style=for-the-badge
[Golden paths]: https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/

[HashiCorp Packer Badge]: https://img.shields.io/badge/Packer-02A8EF?style=for-the-badge&logo=Packer&logoColor=white
[HashiCorp Terraform Badge]: https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white

[Java Version Badge]: https://img.shields.io/badge/Java-17-brightgreen?style=for-the-badge&logo=OpenJDK&logoColor=white
[Javadoc]: https://paion-data.github.io/astraios/apidocs/

[JSR 370]: https://jcp.org/en/jsr/detail?id=370

[Pareto Principle]: https://en.wikipedia.org/wiki/Pareto_principle

[Sonar Bugs]: https://sonarcloud.io/api/project_badges/measure?project=paion-data_astraios&metric=bugs
[Sonar Vulnerabilities]: https://sonarcloud.io/api/project_badges/measure?project=paion-data_astraios&metric=vulnerabilities
[Sonar Security Rating]: https://sonarcloud.io/api/project_badges/measure?project=paion-data_astraios&metric=security_rating
[Sonar Coverage]: https://sonarcloud.io/api/project_badges/measure?project=paion-data_astraios&metric=coverage
[Sonar Code Smells]: https://sonarcloud.io/api/project_badges/measure?project=paion-data_astraios&metric=code_smells
[Sonar Maintainability Rating]: https://sonarcloud.io/api/project_badges/measure?project=paion-data_astraios&metric=sqale_rating
[Sonar Lines of Code]: https://sonarcloud.io/api/project_badges/measure?project=paion-data_astraios&metric=ncloc
[Sonar Duplicated Lines (%)]: https://sonarcloud.io/api/project_badges/measure?project=paion-data_astraios&metric=duplicated_lines_density
[Sonar Reliability Rating]: https://sonarcloud.io/api/project_badges/measure?project=paion-data_astraios&metric=reliability_rating
[Sonar Technical Debt]: https://sonarcloud.io/api/project_badges/measure?project=paion-data_astraios&metric=sqale_index

[The Technology Acceptance Model (TAM)]: https://open.ncl.ac.uk/theories/1/technology-acceptance-model/

[Yahoo Elide]: https://elide.io/
