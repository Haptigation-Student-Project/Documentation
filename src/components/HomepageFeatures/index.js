import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is Haptigation?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Haptigation is our vision for intuitive, hands-free navigation. 
        With wearable wristbands or gloves equipped with vibration motors and Bluetooth, 
        directions are delivered straight to your sense of touch — no screen, no sound, no hassle.
      </>
    ),
  },
  {
    title: 'Why Haptic Navigation?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We believe navigation should blend seamlessly into everyday life. 
        Subtle vibrations tell you when to turn or adjust your path, 
        so you stay focused on the world around you, not on your phone.
      </>
    ),
  },
  {
    title: 'How it works',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Your wearable connects to your smartphone&apos;s navigation app. 
        When it&apos;s time to turn left, the left band vibrates. 
        Time to go right? The right band responds. <b>It&apos;s simple, natural, and instantly understood.</b>
      </>
    ),
  },
  {
    title: 'Designed for real-world use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Haptigation wearables are built to be <strong>comfortable, durable, and unobtrusive</strong>. 
        Whether worn as wristbands or integrated into gloves, they deliver clear haptic signals you can trust — 
        all while staying lightweight and easy to forget you&apos;re even wearing them.
      </>
    ),
  },
  {
    title: 'Built for movement',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Whether you&apos;re <strong>biking, running, walking, or exploring a new city</strong>, 
        Haptigation keeps you oriented without breaking your flow.
      </>
    ),
  },
  {
    title: 'A new layer of awareness',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Haptic cues give you discreet, real-time navigation. Feel every turn coming — 
        even in noisy streets or bright sunlight, all while your phone stays in your pocket.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
