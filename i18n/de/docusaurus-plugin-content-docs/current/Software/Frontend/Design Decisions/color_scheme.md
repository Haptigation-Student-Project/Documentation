---
title: Farbschema
description: Dokumentation zur Designentscheidung des Farbschemas
hide_table_of_contents: false
sidebar_position: 2
---

# Farbschema

Dieses Dokument beschreibt das in der Anwendung verwendete Farbsystem, einschließlich Designzielen, Themenstruktur, Farbrollen und Implementierungsrichtlinien.  
Das Farbschema wurde entwickelt, um **Klarheit, Zugänglichkeit und visuelle Konsistenz** über Hell- und Dunkelmodus hinweg zu bieten und gleichzeitig die navigationsorientierte Identität des Produkts zu verstärken.

---

## Designziele

Das Farbsystem wurde mit folgenden Prinzipien erstellt:

- **Konsistenz** — einheitliche visuelle Sprache über alle Bildschirme hinweg
- **Zugänglichkeit** — ausreichender Kontrast für Lesbarkeit
- **Theme-Bewusstsein** — nahtloses Umschalten zwischen Hell- und Dunkelmodus
- **Hierarchie** — klare Unterscheidung zwischen primären Aktionen, Inhalten und Hintergrund
- **Markenidentität** — moderne navigationsinspirierte Verläufe und kühle Töne

---

## Theme-Modi

Die Anwendung unterstützt zwei Themes:

### Hell-Modus
Optimiert für die Nutzung bei Tageslicht und in hellen Umgebungen.

Merkmale:
- Helle neutrale Hintergründe
- Sanfter Kontrast zwischen Oberflächen
- Dunkler Text für bessere Lesbarkeit
- Subtile Schatten und Elevation

### Dunkel-Modus
Optimiert für Umgebungen mit wenig Licht und zur Reduzierung der Augenbelastung.

Merkmale:
- Tiefe Hintergrundtöne
- Reduzierte Blendung
- Erhöhte Elemente durch Farbe statt durch Schatten
- Gedämpfte Sekundärfarben

---

## Kernfarbrollen

Anstatt Farben direkt UI-Elementen zuzuweisen, verwendet das System **semantische Farbrollen**.

### Primär

Wird für Branding und wichtige UI-Highlights verwendet.

**Verwendung**
- Header-Verläufe
- Gerätekarten
- Aktive Navigationsindikatoren
- Primäre Akzente

Beispiel:
- Verlauf von Blau → Türkis kommuniziert Konnektivität und Bewegung.

---

### Hintergrund

Definiert die Layout-Struktur.

| Rolle | Hell-Modus | Dunkel-Modus | Verwendung |
|------|------------|--------------|------------|
| `backgroundPrimary` | Hellgrau | Fast Schwarz | App-Hintergrund |
| `backgroundSecondary` | Weiß | Dunkle Oberfläche | Karten & Panels |
| `backgroundElevated` | Leichter Farbton | Sanfte Kontrastoberfläche | Navigationsleisten |

---

### Textfarben

Textfarben passen sich automatisch an den Theme-Kontrast an.

| Rolle | Zweck |
|-------|-------|
| `textPrimary` | Hauptlesbarer Inhalt |
| `textSecondary` | Unterstützende Informationen |
| `textMuted` | Metadaten und Labels |

Richtlinie:
- Niemals reines Schwarz oder reines Weiß verwenden.
- Verwenden Sie semantische Tokens, um Zugänglichkeit zu gewährleisten.

---

### Statusfarben

Werden sparsam für System-Feedback verwendet.

| Status | Bedeutung |
|--------|-----------|
| Erfolg | Verbunden / gutes Signal |
| Warnung | Aufmerksamkeit erforderlich |
| Fehler | Fehler oder Verbindungstrennung |
| Info | Neutrales System-Feedback |

Statusfarben müssen immer Kontrastanforderungen erfüllen.

---

## Verlaufsverwendung

Verläufe sind ein charakteristisches visuelles Element der App.

### Primärer Verlauf

Verwendet bei:
- Geräteinformationskarten
- Hervorgehobenen Containern
- Wichtigen visuellen Oberflächen

Designabsicht:
- Bewegung und Navigationsfluss suggerieren
- Visuellen Fokus bieten ohne das Interface zu überwältigen

Richtlinien:
- Verläufe nur für **hoch priorisierte Komponenten** verwenden
- Verläufe für Hintergründe oder lange Lesebereiche vermeiden

---

## Komponentenanwendung

### Gerätekarte

- Verwendet primären Verlaufshintergrund
- Weißer oder kontrastreicher Text
- Repräsentiert ein aktives verbundenes Gerät

Zweck:
- Sofortige visuelle Erkennung
- Status auf einen Blick sichtbar

---

### Schalter & Steuerelemente

| Status | Verhalten |
|--------|-----------|
| Aktiviert | Verwendet Akzentfarbe |
| Deaktiviert | Neutrales Grau |
| Hintergrund | Entspricht Oberflächenfarbe |

Steuerelemente sollten visuell zurückhaltend bleiben, es sei denn, sie sind aktiv.

---

### Navigationsleiste

- Verwendet erhöhte Hintergrundfarbe
- Aktiver Tab mit Akzentton hervorgehoben
- Icons bleiben in beiden Themes lesbar

---

## Barrierefreiheit

Barrierefreiheit ist eine Kernanforderung.

Regeln:
- WCAG-Kontrastverhältnisse wo möglich einhalten
- Kommunikation nicht nur über Farbe (kombinieren mit Icons oder Text)
- Komponenten in beiden Themes testen
- Sicherstellen, dass Schaltzustände ohne Farbwahrnehmung unterscheidbar sind

---

## Implementierungsstrategie

Das Farbsystem sollte mit **Design-Tokens** implementiert werden.

Beispielstruktur:

```typescript
const colors = {
  light: {
    backgroundPrimary: '#F5F5F5',
    backgroundSecondary: '#FFFFFF',
    textPrimary: '#1A1A1A',
    // ...
  },
  dark: {
    backgroundPrimary: '#121212',
    backgroundSecondary: '#1E1E1E',
    textPrimary: '#E0E0E0',
    // ...
  }
};
```

Dies ermöglicht:
- Zentrale Wartung
- Konsistente Theme-Schaltung
- Einfache Testbarkeit
- Skalierbarkeit für zukünftige Themes