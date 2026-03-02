---
title: Start
description: Einführung in die Dokumentationsseiten
sidebar_position: 1
---

# Willkommen bei der Haptigation Dokumentation

Hier sammeln wir:

- [Allgemeine Informationen](/docs/category/general-info)
- [Hardware-Dokumentation](/docs/category/hardware)
- [Software-Dokumentation](/docs/category/software)

---

## Unser Projekt in Kürze

Haptigation ist ein **haptisches Navigationssystem**, das durch Vibrationsfeedback eine Schritt-für-Schritt-Routenführung bietet und es Nutzern ermöglicht, zu navigieren, ohne auf visuelle oder auditive Hinweise angewiesen zu sein. Das System besteht aus einem oder zwei **Vibrationsarmbändern**, die mit einer mobilen Anwendung gekoppelt sind, und bietet eine **intuitive und zugängliche Navigationslösung** für Radfahrer, Fahrradfahrer, sehbehinderte und hörbehinderte Personen sowie andere Nutzer, die bei sicherheitskritischen Aufgaben ihre Augen und Ohren frei haben müssen.

**Kernkonzept:** "Summ links, geh links. Summ rechts, geh rechts."

---

## Problemstellung

### Aktuelle Navigationsbeschränkungen

Moderne Navigationssysteme stellen in bestimmten Kontexten erhebliche Sicherheitsherausforderungen dar:

- **Visuelle Navigation** erfordert ständige Aufmerksamkeit auf Bildschirme und nimmt die Augen von der Straße.
- **Auditive Navigation** erfordert Hörkapazität und blockiert wichtige Umgebungsgeräusche.
- **Verkehrssicherheit** erfordert vollständige sensorische Aufmerksamkeit, wenn man auf der Straße unterwegs ist.

### Die kritische Lücke

Radfahrer und Biker stehen vor einem gefährlichen Dilemma: Sie benötigen Navigationsführung, während sie gleichzeitig vollständige visuelle und auditive Aufmerksamkeit für ihre Umgebung benötigen. Aktuelle Lösungen zwingen Nutzer dazu, ihre Sicherheit zu gefährden, indem sie die Aufmerksamkeit auf Bildschirme lenken oder Umgebungsgeräusche mit Kopfhörern blockieren.

Sehbehinderte und hörbehinderte Personen stehen ebenfalls vor besonderen Herausforderungen bei der Navigation:

Sie benötigen oft externe Hilfe, die wir teilweise bereitstellen können.

---

## Lösung

### Haptisches Navigationssystem

Haptigation bietet eine dritte Modalität für die Navigation durch haptisches Feedback:

- **Zwei Vibrationsarmbänder:** Bilaterales System, das an beiden Handgelenken getragen wird
- **Mobile Anwendung:** Routenplanung und Navigationsengine (läuft mit Google Maps)
- **Intuitives Feedback:** Einfache Vibrationsmuster zeigen die Richtung an
- **Freihändige Bedienung:** Keine Notwendigkeit, auf Bildschirme zu schauen oder Audio zu hören
- Alternativ bieten wir auch Navigation mit nur einem Armband an und arbeiten derzeit an einem bilateralen System mit Smartwatches.

---

## Zielgruppen

**Primäre Zielgruppe:** Radfahrer und Biker
- Größter adressierbarer Markt
- Höchstes Sicherheitsrisiko bei traditioneller Navigation
- Starker Bedarf an freihändiger, augenfreier Navigation

**Sekundäre Zielgruppe:** Sehbehinderte oder hörbehinderte Personen
- Barrierefreiheitslösung für Navigationsherausforderungen
- Alternative sensorische Modalität für Führung

**Tertiäre Zielgruppe:** Allgemein interessierte Nutzer
- Läufer, Wanderer und Outdoor-Enthusiasten
- Jeder, der diskrete Navigation sucht

---

## Technische Umsetzung

### Systemarchitektur

Das Haptigation-System besteht aus drei Hauptkomponenten:

1. **Mobile Anwendung**
   - Navigationsengine und Routenberechnung
   - Bluetooth-Kommunikation mit Armbändern
   - Benutzeroberfläche für Zieleingabe und Einstellungen

2. **Vibrationsarmbänder (Hardware)**
   - Tragbare Geräte
   - Bluetooth-Konnektivität
   - Vibrationsmotoren für haptisches Feedback
   - Batterieverwaltung

3. **Kommunikationsprotokoll**
   - Echtzeit-Positionsverfolgung über Google Maps SDK
   - Richtungsberechnung und Befehlsübertragung
   - Generierung haptischer Muster

### Funktionale Anforderungen

**FR1: Routennavigation**
- Das System soll Schritt-für-Schritt-Navigationsführung bieten
- Das System soll optimale Routen basierend auf Benutzerpräferenzen berechnen
- Das System soll mehrere Navigationsmodi unterstützen (Radfahren, Gehen, etc.)

**FR2: Haptisches Feedback**
- Das System soll Richtungshinweise durch Vibrationsmuster liefern
- Die Vibration des linken Armbands soll Linksabbiegen anzeigen
- Die Vibration des rechten Armbands soll Rechtsabbiegen anzeigen
- Das System soll unterschiedliche Muster für verschiedene Navigationsereignisse bieten

**FR3: Positionsverfolgung**
- Das System soll die Benutzerposition in Echtzeit über GPS und Google Maps verfolgen
- Das System soll Navigationsanweisungen basierend auf der aktuellen Position aktualisieren
- Das System soll erkennen, wenn Benutzer von geplanten Routen abweichen

**FR4: Benutzeroberfläche**
- Die Anwendung soll Benutzern ermöglichen, Ziele einzugeben
- Die Anwendung soll die aktuelle Route und den Fortschritt anzeigen
- Die Anwendung soll manuelle Steuerungen zum Testen der Armbänder bieten

**FR5: Geräteverwaltung**
- Das System soll gleichzeitig mit zwei Armbändern koppeln
- Das System soll mit Smartwatches oder einzelnen Armbändern koppeln
- Das System soll Armbandbatterieniveaus überwachen
- Das System soll Anpassungen ermöglichen

**FR6: Barrierefreiheit**
- Das System soll alternatives Feedback für Benutzer mit sensorischen Beeinträchtigungen bieten
- Die Anwendungsschnittstelle soll Barrierefreiheitsstandards erfüllen
- Das System soll anpassbare Vibrationsintensitäten unterstützen

### Nicht-funktionale Anforderungen

**NFR1: Benutzerfreundlichkeit**
- Vibrationsmuster sollen intuitiv sein und minimales Lernen erfordern
- Das Koppeln der Armbänder soll innerhalb von 10 Sekunden abgeschlossen sein
- Die Benutzeroberfläche soll mit minimaler visueller Aufmerksamkeit bedienbar sein

**NFR2: Leistung**
- Navigationsaktualisierungen sollen mit einer Latenz unter 500 ms erfolgen
- Das System soll eine stabile Bluetooth-Verbindung bis zu 10 Meter aufrechterhalten
- Die GPS-Positionsgenauigkeit soll unter normalen Bedingungen innerhalb von 5 Metern liegen

**NFR3: Zuverlässigkeit**
- Das System soll während aktiver Navigation eine Betriebszeit von 99% aufrechterhalten
- Die Akkulaufzeit soll mindestens 8 Stunden kontinuierliche Nutzung unterstützen
- Das System soll Verlust des GPS-Signals elegant handhaben

**NFR4: Kosteneffizienz**
- Die Gesamthardwarekosten pro Armband sollen 25 € nicht überschreiten
- Das System soll wo möglich Standardkomponenten verwenden
- Die Fertigung soll für Massenproduktion skalierbar sein

**NFR5: Sicherheit**
- Das System soll Benutzer nicht von der Umgebungswahrnehmung ablenken
- Die Vibrationsintensität soll für Komfort einstellbar sein
- Das System soll eine Notaus-Funktionalität bieten

**NFR6: Tragbarkeit**
- Armbänder sollen leicht sein (unter 50g jeweils)
- Das System soll wetterbeständig sein (mindestens IP54-Schutzklasse)
- Armbänder sollen für längeres Tragen bequem sein

**NFR7: Wartbarkeit**
- Die Systemarchitektur soll modulare Updates unterstützen
- Die Anwendung soll Over-the-Air-Firmware-Updates unterstützen
- Code soll etablierten Design-Mustern und Dokumentationsstandards folgen

**NFR8: Skalierbarkeit**
- Das System soll mehrere gleichzeitige Benutzer ohne Infrastruktur unterstützen
- Die Anwendung soll Routen unterschiedlicher Komplexität effizient handhaben
- Die Architektur soll zukünftige Funktionserweiterungen ermöglichen

---

## Marktpositionierung

### Wettbewerbsvorteile

Im Vergleich zu bestehenden Lösungen:

| Merkmal | Wayband | Haptigation |
|---------|---------|-------------|
| Preis | 100€+ | Max. 25€ pro Armband |
| Konfiguration | Einzelarmband | Bilateral (zwei Armbänder) |
| Bedienung | Komplex, mehrschichtig | Einfach und intuitiv |
| Zielmarkt | Nur Sehbehinderte | Multi-Segment |

### Alleinstellungsmerkmale

- **Bilaterales System:** Zwei Armbänder bieten klarere Richtungshinweise
- **Einfachheit:** Intuitive Bedienung erfordert minimales Training
- **Erschwinglichkeit:** Wir wollen das Produkt für alle sozialen Schichten zugänglich machen
- **Agilität:** Kleines, praktisches Team ermöglicht schnelle Iteration und Verbesserung
- **Vielseitigkeit:** Bedient mehrere Zielgruppen mit einer einzigen Lösung

---

## Entwicklungsstatus

**Aktueller Stand:** Validierung des Benutzerfeedbacks aus [Menti-Umfragen](https://www.menti.com/alx5ib81p2uv)

**Nächste Schritte:** Bitte sehen Sie unsere [Roadmap](/docs/General%20Info/roadmap) für weitere Informationen.

**Team-Merkmale:**
- Praktische technische Umsetzung
- Schnelle Iterationsfähigkeiten
- Benutzerzentrierter Design-Ansatz

---

## Datennutzung

Wir sind nicht daran interessiert, Ihnen durch die Ausnutzung Ihrer Daten zu schaden.

Daher werden wir alles in unserer Macht Stehende tun, um Ihre Daten zu sichern.

Wenn Sie möchten, dass Ihre Daten gelöscht werden, kontaktieren Sie uns unter **haptigation@gmail.com**. Wir werden dies umgehend tun.

Wenn Sie detaillierte Informationen darüber möchten, wie wir Ihre Daten verwenden, sehen Sie unsere [Dokumentation](/docs/General%20Info/data-usage).

Wir möchten in Bezug auf die Verwendung Ihrer Daten vollständig transparent sein, und daher sind alle [Programme](https://github.com/Haptigation-Student-Project/Google-Apps-Script), die Ihre Daten verarbeiten, öffentlich und können von Ihnen eingesehen werden.

## Google

Haptigation ist ein unabhängiges Studentenprojekt, das auf privaten Sponsorings basiert.

Wir sind kein Startup und keine Organisation.

Wir nutzen viele Dienste von Google LLC, da wir auf diese angewiesen sind.
Wir sind in keiner Weise rechtlich mit Google LLC verbunden.

Danke Google, dass du unser Projekt möglich machst!

## Kontakt

Für weitere Informationen über Haptigation wenden Sie sich gerne an:

**E-Mail:** haptigation@gmail.com

**Newsletter:** Abonnieren Sie unseren Newsletter, indem Sie Ihre E-Mail in unseren [Menti-Umfragen](https://www.menti.com/alx5ib81p2uv) hinterlassen oder uns eine E-Mail an haptigation@gmail.com senden und Ihr Interesse bestätigen.

---

*Zuletzt aktualisiert: 26. Februar 2025*
