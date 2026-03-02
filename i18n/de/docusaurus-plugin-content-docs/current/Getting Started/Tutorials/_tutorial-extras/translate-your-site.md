---
sidebar_position: 2
---

# Ihre Seite übersetzen

Lassen Sie uns `docs/intro.md` ins Französische übersetzen.

## i18n konfigurieren

Ändern Sie `docusaurus.config.js`, um Unterstützung für die `fr`-Locale hinzuzufügen:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## Ein Dokument übersetzen

Kopieren Sie die Datei `docs/intro.md` in den `i18n/fr`-Ordner:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Übersetzen Sie `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` ins Französische.

## Starten Sie Ihre lokalisierte Seite

Starten Sie Ihre Seite auf der französischen Locale:

```bash
npm run start -- --locale fr
```

Ihre lokalisierte Seite ist unter [http://localhost:3000/fr/](http://localhost:3000/fr/) erreichbar und die `Getting Started`-Seite ist übersetzt.

:::caution

In der Entwicklung können Sie nur eine Locale gleichzeitig verwenden.

:::

## Ein Locale-Dropdown hinzufügen

Um nahtlos zwischen Sprachen zu navigieren, fügen Sie ein Locale-Dropdown hinzu.

Ändern Sie die Datei `docusaurus.config.js`:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

Das Locale-Dropdown erscheint jetzt in Ihrer "Navbar":

![Locale Dropdown](./img/localeDropdown.png)

## Bauen Sie Ihre lokalisierte Seite

Erstellen Sie Ihre Seite für eine bestimmte Locale:

```bash
npm run build -- --locale fr
```

Oder erstellen Sie Ihre Seite, um alle Locales auf einmal einzuschließen:

```bash
npm run build
```
