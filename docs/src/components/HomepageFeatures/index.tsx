/**
 * Copyright 2024 Paion Data
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common'

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Immutable Infrastructure',
    Svg: require('@site/static/img/hashicorp-logo.svg').default,
    scale: 1,
    id: 'hashicorp-logo',
    description: (
      <>
        Astraios has first-class support for HashiCorp as CI/CD deployment and was designed to be easily deployed and
        maintained to get our webservice up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/business.svg').default,
    scale: 1,
    id: 'not-used',
    description: (
      <>
        Astraios lets us focus on our business logics, and the template will do the chores.
      </>
    ),
  },
  {
    title: 'Production Quality',
    Svg: require('@site/static/img/high-quality.svg').default,
    scale: 0.75,
    id: 'production-quality',
    description: (
      <>
        Quickly build and deploy production quality web services that expose organization data as a service. Our APIs
        support complex filtering rules, sorting, pagination, subscriptions, and text search.
      </>
    ),
  },
  {
    title: 'Open API',
    Svg: require('@site/static/img/openapi-logo.svg').default,
    scale: 0.8,
    id: 'not-used',
    description: (
      <>
        Explore, understand, and compose queries against our CRUD API through generated OpenAPI documentation or GraphQL
        schema.
      </>
    ),
  },
  {
    title: 'Caring for Developers',
    Svg: require('@site/static/img/developer.svg').default,
    scale: 1,
    id: 'not-used',
    description: (
      <>
        We understand a good business product is backed by developers who love their works. We let them free to do what
        they want to: add business value by writing code.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/apache.svg').default,
    scale: 0.7,
    id: 'not-used',
    description: (
      <>
        Astraios is 100% open source and available on <a href="https://github.com/paion-data/astraios">Github</a>. Released
        under the commercial-friendly
        <a href="http://www.apache.org/licenses/LICENSE-2.0.html"> Apache License, Version 2.0.</a>
      </>
    ),
  },
];

function Feature({title, Svg, scale, id, description}: FeatureItem) {
  const {colorMode} = useColorMode()

  let fill = undefined

  if ( id === 'hashicorp-logo' && colorMode === 'light' ) {
    fill = 'black'
  } else if ( id === 'hashicorp-logo' && colorMode === 'dark') {
    fill = 'white'
  }

  if ( id === 'production-quality' && colorMode === 'light' ) {
    fill = 'black'
  } else if ( id === 'production-quality' && colorMode === 'dark') {
    fill = 'white'
  }

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} transform={"scale(" + scale + ")"} fill={fill} id={id} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
