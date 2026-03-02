import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, { translate } from '@docusaurus/Translate';

const members = [
  {
    name: 'Sanny64',
    role: translate({
      id: 'team.role.projectLead',
      message: 'Project Lead',
      description: 'Role title for project lead'
    }),
    img: '/img/sanny.jpg',
    desc: translate({
      id: 'team.desc.sanny',
      message: `He doesn't just manage the roadmap; he embodies the product's vision.
    He acts as the project's central nervous system and actively clears the path for his team,
    whether that means rewriting requirements at midnight or coding by himself.`,
      description: 'Description for Sanny'
    }),
  },
  {
    name: 'LightRay15',
    role: translate({
      id: 'team.role.eventManager',
      message: 'Event Manager',
      description: 'Role title for event manager'
    }),
    img: '/img/lightray.jpg',
    desc: translate({
      id: 'team.desc.lightray',
      message: `He doesn't just predict the future; he sketches it.
    To him, a product strategy isn't a spreadsheet of features,
    but a cohesive narrative told through interaction and aesthetics.
    While others rely solely on A/B tests, he relies on trained intuition and empathy.`,
      description: 'Description for LightRay'
    }),
  },
  {
    name: 'josisleben',
    role: translate({
      id: 'team.role.designLead',
      message: 'Design Lead',
      description: 'Role title for design lead'
    }),
    img: '/img/josis.jpg',
    desc: translate({
      id: 'team.desc.josis',
      message: `She doesn't just create designs; she crafts experiences.
    Her work goes beyond aesthetics, focusing on how users feel and interact with the product.
    She believes that good design is invisible, seamlessly integrating into the user's journey.`,
      description: 'Description for josis'
    }),
  },
  {
    name: 'Jack-gits-your-hub',
    role: translate({
      id: 'team.role.frontendDeveloper',
      message: 'Frontend Developer',
      description: 'Role title for frontend developer'
    }),
    img: '/img/jack.jpg',
    desc: translate({
      id: 'team.desc.jack',
      message: `Jack is our frontend wizard, turning complex designs into seamless user experiences.
    With a keen eye for detail and a passion for responsive design, he ensures our applications look stunning on any device.
    When he's not coding, Jack enjoys writing our docusaurus documentation.`,
      description: 'Description for Jack'
    }),
  },
  {
    name: 'Dave-Erge',
    role: translate({
      id: 'team.role.backendDeveloper',
      message: 'Backend Developer',
      description: 'Role title for backend developer'
    }),
    img: '/img/dave.jpg',
    desc: translate({
      id: 'team.desc.dave',
      message: `Dave is the backbone of our development team, specializing in robust and scalable backend solutions.
    His expertise in clustered solutions ensures our systems run smoothly under pressure.
    Outside of work, David is an avid rock climber and enjoys exploring the outdoors.`,
      description: 'Description for Dave'
    }),
  },
  {
    name: 'RoccoHB',
    role: translate({
      id: 'team.role.backendDeveloper',
      message: 'Backend Developer',
      description: 'Role title for backend developer'
    }),
    img: '/img/rocco.jpg',
    desc: translate({
      id: 'team.desc.rocco',
      message: `Rocco is a backend developer with a knack for optimizing server performance and database management.
    He is passionate about building efficient systems that can handle high traffic with ease.
    In his free time, Rocco enjoys training in the fitness center and experimenting with new cooking recipes.`,
      description: 'Description for Rocco'
    }),
  },
];

export default function TeamPage() {
  return (
    <Layout 
      title={translate({ id: 'team.title', message: 'Team', description: 'Team page title' })} 
      description="Team Haptigation">
      <main style={{ padding: '2.5rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ margin: 0 }}>
          <Translate id="team.heading" description="Team page heading">
            Team Haptigation
          </Translate>
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ifm-color-gray-600)' }}>
          <Translate id="team.intro" description="Team page introduction">
            Team Haptigation consists of passionate individuals dedicated to revolutionizing navigation through haptic technology.
          </Translate>
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
