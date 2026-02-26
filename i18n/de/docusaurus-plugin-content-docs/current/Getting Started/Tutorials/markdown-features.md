---
sidebar_position: 4
---

# Markdown-Funktionen

Docusaurus unterstützt **[Markdown](https://daringfireball.net/projects/markdown/syntax)** und einige **zusätzliche Funktionen**.

## "Front Matter"

Markdown-Dokumente haben Metadaten am Anfang, die [Front Matter](https://jekyllrb.com/docs/front-matter/) genannt werden:

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
// highlight-end

## Markdown heading

Markdown text mit [links](./hello.md)
```

## Links

Reguläre Markdown-Links werden unterstützt, mit URL-Pfaden oder relativen Dateipfaden.

```md
Let's see how to [Create a page](/create-a-page).
```

```md
Let's see how to [Create a page](./create-a-page.md).
```

**Ergebnis:** Let's see how to [Create a page](./create-a-page.md).

## Bilder

Reguläre Markdown-Bilder werden unterstützt.

Sie können absolute Pfade verwenden, um auf Bilder im "static"-Verzeichnis zu verweisen (`static/img/docusaurus.png`):

```md
![Docusaurus logo](/img/docusaurus.png)
```

![Docusaurus logo](/img/docusaurus.png)

Sie können auch Bilder relativ zur aktuellen Datei referenzieren. Dies ist besonders nützlich, um Bilder in der Nähe der Markdown-Dateien zu platzieren, die sie verwenden:

```md
![Docusaurus logo](./img/docusaurus.png)
```

## Code-Blöcke

Markdown-Code-Blöcke werden mit Syntax-Highlighting unterstützt.

````md
```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```
````

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## "Admonitions"

Docusaurus hat eine spezielle Syntax zum Erstellen von "Admonitions" und "Callouts":

```md
:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::
```

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

## MDX und React-Komponenten

[MDX](https://mdxjs.com/) kann Ihre Dokumentation **interaktiver** machen und erlaubt die Verwendung von **React-Komponenten innerhalb von Markdown**:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
