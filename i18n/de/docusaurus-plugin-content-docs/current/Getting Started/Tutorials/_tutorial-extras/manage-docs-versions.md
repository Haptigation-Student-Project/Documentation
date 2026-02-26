---
sidebar_position: 1
---

# Dokumentversionen verwalten

Docusaurus kann mehrere Versionen Ihrer Dokumentation verwalten.

## Eine Dokumentversion erstellen

Veröffentlichen Sie eine Version 1.0 Ihres Projekts:

```bash
npm run docusaurus docs:version 1.0
```

Der `docs`-Ordner wird in `versioned_docs/version-1.0` kopiert und `versions.json` wird erstellt.

Ihre Dokumentation hat jetzt 2 Versionen:

- `1.0` unter `http://localhost:3000/docs/` für die Version 1.0-Dokumentation
- `current` unter `http://localhost:3000/docs/next/` für die **kommende, unveröffentlichte Dokumentation**

## Ein Versions-Dropdown hinzufügen

Um nahtlos zwischen Versionen zu navigieren, fügen Sie ein Versions-Dropdown hinzu.

Ändern Sie die Datei `docusaurus.config.js`:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

Das Dokumentversions-Dropdown erscheint in Ihrer "Navbar":

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## Eine vorhandene Version aktualisieren

Es ist möglich, versionierte Dokumentation in ihrem jeweiligen Ordner zu bearbeiten:

- `versioned_docs/version-1.0/hello.md` aktualisiert `http://localhost:3000/docs/hello`
- `docs/hello.md` aktualisiert `http://localhost:3000/docs/next/hello`
