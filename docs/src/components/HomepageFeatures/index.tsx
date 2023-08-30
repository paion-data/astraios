import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Immutable Infrastructure',
    Svg: require('@site/static/img/hashicorp-logo.svg').default,
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
    description: (
      <>
        Astraios lets us focus on our business logics, and the template will do the chores.
      </>
    ),
  },
  {
    title: 'Powered by Jetty',
    Svg: require('@site/static/img/jetty-logo.svg').default,
    description: (
      <>
        Astraios runs in standalone Jetty container, which standardize webservice runtime.
      </>
    ),
  },
  {
    title: 'Swagger Documentation',
    Svg: require('@site/static/img/swagger-logo.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Docker-based Dev Environment & Integration Tests',
    Svg: require('@site/static/img/docker.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Easy Config Environment',
    Svg: require('@site/static/img/config.svg').default,
    description: (
      <>

      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
