---
sidebar_position: 1
---

# Seite und Dokument erstellen

Fügen Sie **Markdown- oder React-Dateien** zu `src/pages` hinzu, um eine **eigenständige Seite** zu erstellen:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Erstellen Sie Ihre erste React-Seite

Erstellen Sie eine Datei unter `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

Eine neue Seite ist jetzt verfügbar unter [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Erstellen Sie Ihre erste Markdown-Seite

Erstellen Sie eine Datei unter `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

Eine neue Seite ist jetzt verfügbar unter [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).



---

Dokumente sind **Gruppen von Seiten**, die verbunden sind durch:

- eine **Sidebar**
- **vorherige/nächste Navigation**
- **Versionierung**

## Erstellen Sie Ihr erstes Dokument

Erstellen Sie eine Markdown-Datei unter `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

Ein neues Dokument ist jetzt verfügbar unter [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Konfigurieren Sie die Sidebar

Docusaurus erstellt automatisch **eine Sidebar** aus dem `docs`-Ordner.

Fügen Sie Metadaten hinzu, um das Sidebar-"Label" und die Position anzupassen:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

Es ist auch möglich, Ihre Sidebar explizit in `sidebars.js` zu erstellen:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
