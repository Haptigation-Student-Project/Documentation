---
sidebar_position: 5
---

# Ihre Seite bereitstellen

Docusaurus ist ein **Static-Site-Generator** (auch **[Jamstack](https://jamstack.org/)** genannt).

Es erstellt Ihre Seite als einfache **statische HTML-, JavaScript- und CSS-Dateien**.

## Bauen Sie Ihre Seite

Erstellen Sie Ihre Seite **für die Produktion**:

```bash
npm run build
```

Die statischen Dateien werden im `build`-Ordner generiert.

## Stellen Sie Ihre Seite bereit

Testen Sie Ihren Produktions-Build lokal:

```bash
npm run serve
```

Der `build`-Ordner wird jetzt unter [http://localhost:3000/](http://localhost:3000/) bereitgestellt.

Sie können den `build`-Ordner jetzt **fast überall** einfach, **kostenlos** oder zu sehr geringen Kosten bereitstellen (lesen Sie den **[Deployment Guide](https://docusaurus.io/docs/deployment)**).
