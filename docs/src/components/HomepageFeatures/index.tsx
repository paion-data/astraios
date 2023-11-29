import clsx from 'clsx';
import Heading from '@theme/Heading';
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
    title: 'Production Quality',
    Svg: require('@site/static/img/high-quality.svg').default,
    description: (
      <>
        Quickly build and deploy production quality web services that expose organization data as a service. Our APIs
        support complex filtering rules, sorting, pagination, subscriptions, and text search.
      </>
    ),
  },
  {
    title: 'Security Comes Standard',
    Svg: require('@site/static/img/security.svg').default,
    description: (
      <>
        Controlling access to our data is as simple as defining our rules and annotating our models.
      </>
    ),
  },
  {
    title: 'Caring for Developers',
    Svg: require('@site/static/img/developer.svg').default,
    description: (
      <>
        We understand a good business product is backed by developers who love their works. We let them free to do what
        they want to: add business value by writing code.
      </>
    ),
  },
  {
    title: 'Open API',
    Svg: require('@site/static/img/openapi-logo.svg').default,
    description: (
      <>
        Explore, understand, and compose queries against our CRUD API through generated OpenAPI documentation or GraphQL
        schema.
      </>
    ),
  }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
