import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

const members = [
  {
    name: 'Sanny64',
    role: 'Project Lead',
    img: '/img/sanny.jpg',
    desc: `He doesn't just manage the roadmap; he embodies the product's vision.
    He acts as the project's central nervous system and actively clears the path for his team,
    whether that means rewriting requirements at midnight or coding by himself.`,
  },
  {
    name: 'LightRay15',
    role: 'Event Manager',
    img: '/img/lightray.jpg',
    desc: `He doesn't just predict the future; he sketches it.
    To him, a product strategy isn't a spreadsheet of features,
    but a cohesive narrative told through interaction and aesthetics.
    While others rely solely on A/B tests, he relies on trained intuition and empathy.`,
  },
  {
    name: 'josisleben',
    role: 'Design Lead',
    img: '/img/josis.jpg',
    desc: `She doesn't just create designs; she crafts experiences.
    Her work goes beyond aesthetics, focusing on how users feel and interact with the product.
    She believes that good design is invisible, seamlessly integrating into the user's journey.`,
  },
  {
    name: 'Jack-gits-your-hub',
    role: 'Frontend Developer',
    img: '/img/jack.jpg',
    desc: `Jack is our frontend wizard, turning complex designs into seamless user experiences.
    With a keen eye for detail and a passion for responsive design, he ensures our applications look stunning on any device.
    When he's not coding, Jack enjoys writing our docusaurus documentation.`,
  },
  {
    name: 'Dave-Erge',
    role: 'Backend Developer',
    img: '/img/dave.jpg',
    desc: `Dave is the backbone of our development team, specializing in robust and scalable backend solutions.
    His expertise in clustered solutions ensures our systems run smoothly under pressure.
    Outside of work, David is an avid rock climber and enjoys exploring the outdoors.`,
  },
  {
    name: 'RoccoHB',
    role: 'Backend Developer',
    img: '/img/rocco.jpg',
    desc: `Rocco is a backend developer with a knack for optimizing server performance and database management.
    He is passionate about building efficient systems that can handle high traffic with ease.
    In his free time, Rocco enjoys training in the fitness center and experimenting with new cooking recipes.`,
  },
];

export default function TeamPage() {
  return (
    <Layout title="Team" description="Team Haptigation">
      <main style={{ padding: '2.5rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ margin: 0 }}>Team Haptigation</h1>
        <p style={{ marginTop: 8, color: 'var(--ifm-color-gray-600)' }}>
          Team Haptigation consists of passionate individuals dedicated to revolutionizing navigation through haptic technology.
        </p>

        {/* Responsive Grid: so viele Spalten nebeneinander wie der Bildschirm zulässt,
            mindestens 1, maximal breitenverteilend. Sobald der Platz nicht ausreicht,
            wird in weitere Reihen umgebrochen. */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
            marginTop: '1.5rem',
          }}
        >
          {members.map((m) => (
            <article
              key={m.name}
              style={{
                background: 'var(--ifm-background-surface)',
                borderRadius: 12,
                padding: '1rem',
                boxShadow: 'var(--ifm-shadows-elevation-1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
              }}
            >
              <div style={{ width: '100%', borderRadius: 8, overflow: 'hidden' }}>
                <img
                  src={useBaseUrl(m.img)}
                  alt={`${m.name} — ${m.role}`}
                  style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
                />
              </div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ margin: '0 0 4px 0' }}>{m.name}</h3>
                <div style={{ fontSize: 14, marginBottom: 8, color: 'var(--ifm-color-muted)' }}>{m.role}</div>
                <p style={{ margin: 0 }}>{m.desc}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}
