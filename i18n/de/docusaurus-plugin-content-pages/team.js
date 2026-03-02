import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

const members = [
  {
    name: 'Sanny64',
    role: 'Projektleiter',
    img: '/img/sanny.jpg',
    desc: `Er verwaltet nicht nur die Roadmap; er verkörpert die Vision des Produkts. Er fungiert als zentrales Nervensystem des Projekts und räumt aktiv den Weg für sein Team frei, sei es durch das Umschreiben von Anforderungen um Mitternacht oder eigenständiges Programmieren.`,
  },
  {
    name: 'LightRay15',
    role: 'Event Manager',
    img: '/img/lightray.jpg',
    desc: `Er sagt nicht nur die Zukunft voraus; er skizziert sie. Für ihn ist eine Produktstrategie keine Tabelle mit Funktionen, sondern eine zusammenhängende Erzählung, die durch Interaktion und Ästhetik vermittelt wird. Während andere sich nur auf A/B-Tests verlassen, verlässt er sich auf geschulte Intuition und Empathie.`,
  },
  {
    name: 'josisleben',
    role: 'Design-Leiter',
    img: '/img/josis.jpg',
    desc: `Sie erstellt nicht nur Designs; sie kreiert Erlebnisse. Ihre Arbeit geht über Ästhetik hinaus und konzentriert sich darauf, wie Benutzer sich fühlen und mit dem Produkt interagieren. Sie glaubt, dass gutes Design unsichtbar ist und sich nahtlos in die Reise des Benutzers einfügt.`,
  },
  {
    name: 'Jack-gits-your-hub',
    role: 'Frontend-Entwickler',
    img: '/img/jack.jpg',
    desc: `Jack ist unser Frontend-Zauberer und verwandelt komplexe Designs in nahtlose Benutzererfahrungen. Mit einem scharfen Auge fürs Detail und einer Leidenschaft für responsives Design stellt er sicher, dass unsere Anwendungen auf jedem Gerät beeindruckend aussehen. Wenn er nicht gerade programmiert, schreibt Jack gerne unsere Docusaurus-Dokumentation.`,
  },
  {
    name: 'Dave-Erge',
    role: 'Backend-Entwickler',
    img: '/img/dave.jpg',
    desc: `Dave ist das Rückgrat unseres Entwicklungsteams und spezialisiert sich auf robuste und skalierbare Backend-Lösungen. Seine Expertise in Cluster-Lösungen stellt sicher, dass unsere Systeme unter Druck reibungslos laufen. Außerhalb der Arbeit ist David ein begeisterter Kletterer und liebt es, die Natur zu erkunden.`,
  },
  {
    name: 'RoccoHB',
    role: 'Backend-Entwickler',
    img: '/img/rocco.jpg',
    desc: `Rocco ist ein Backend-Entwickler mit einem Händchen für die Optimierung der Server-Performance und Datenbankverwaltung. Er ist leidenschaftlich daran interessiert, effiziente Systeme zu bauen, die hohen Traffic problemlos bewältigen können. In seiner Freizeit trainiert Rocco gerne im Fitnessstudio und experimentiert mit neuen Kochrezepten.`,
  },
];

export default function TeamPage() {
  return (
    <Layout title="Team" description="Team Haptigation">
      <main style={{ padding: '2.5rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ margin: 0 }}>Team Haptigation</h1>
        <p style={{ marginTop: 8, color: 'var(--ifm-color-gray-600)' }}>
          Team Haptigation besteht aus leidenschaftlichen Personen, die sich der Revolution der Navigation durch haptische Technologie verschrieben haben.
        </p>

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
