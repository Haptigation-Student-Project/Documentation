---
title: Projektübersicht
sidebar_position: 1
description: "Hier möchten wir Ihnen einen Überblick über das gesamte Projekt geben."
---

# Projektübersicht

## Überblick

Haptigation ist ein **haptisches Navigationssystem**, das Schritt-für-Schritt-Anweisungen durch Vibrationsfeedback bereitstellt und es Benutzern ermöglicht, zu navigieren, ohne sich auf visuelle oder akustische Hinweise zu verlassen. Das System besteht aus einem oder zwei **Vibrations-Armbändern**, die mit einer mobilen Anwendung gekoppelt sind, und bietet eine **intuitive und zugängliche Navigationslösung** für Biker, Radfahrer, sehbehinderte und hörbehinderte Personen sowie andere Benutzer, die ihre Augen und Ohren für sicherheitskritische Aufgaben beim Navigieren frei haben müssen.

**Kernkonzept:** "Vibriert links, geh nach links. Vibriert rechts, geh nach rechts."

---

## Problemstellung

### Aktuelle Navigationsbeschränkungen

Moderne Navigationssysteme stellen in bestimmten Kontexten erhebliche Sicherheitsherausforderungen dar:

- **Visuelle Navigation** erfordert ständige Aufmerksamkeit auf Bildschirme und lenkt den Blick von der Straße ab.
- **Akustische Navigation** erfordert Hörfähigkeit und blockiert wichtige Umgebungsgeräusche.
- **Verkehrssicherheit** erfordert vollständige sensorische Aufmerksamkeit, wenn man auf der Straße unterwegs ist.

### Die kritische Lücke

Radfahrer und Biker stehen vor einem gefährlichen Dilemma: Sie benötigen Navigationsführung und gleichzeitig vollständige visuelle und akustische Wahrnehmung ihrer Umgebung. Aktuelle Lösungen zwingen Benutzer dazu, ihre Sicherheit zu gefährden, indem sie die Aufmerksamkeit auf Bildschirme lenken oder Umgebungsgeräusche mit Kopfhörern blockieren.

Sehbehinderte und hörbehinderte Personen haben eine besondere Herausforderung bei der Navigation:

Sie benötigen oft externe Hilfe, die wir teilweise bereitstellen können.

---

## Lösung

### Haptisches Navigationssystem

Haptigation bietet eine dritte Modalität für die Navigation durch haptisches Feedback:

- **Zwei Vibrations-Armbänder:** Bilaterales System, das an beiden Handgelenken getragen wird
- **Mobile Anwendung:** Routenplanung und Navigations-Engine (läuft mit Google Maps)
- **Intuitives Feedback:** Einfache Vibrationsmuster zeigen die Richtung an
- **Freihändige Bedienung:** Keine Notwendigkeit, auf Bildschirme zu schauen oder Audio zu hören
- Alternativ bieten wir auch Navigation mit einem einzelnen Armband an und arbeiten derzeit an einem bilateralen System mit Smartwatches.

---

## Zielgruppen

**Primäre Zielgruppe:** Radfahrer und Biker
- Größter adressierbarer Markt
- Höchstes Sicherheitsrisiko bei traditioneller Navigation
- Starker Bedarf an freihändiger, augenfreier Navigation

**Sekundäre Zielgruppe:** Sehbehinderte oder hörbehinderte Personen
- Barrierefreie Lösung für Navigationsherausforderungen
- Alternative sensorische Modalität für Führung

**Tertiäre Zielgruppe:** Allgemein interessierte Benutzer
- Läufer, Wanderer und Outdoor-Enthusiasten
- Alle, die diskrete Navigation suchen

---

## Technische Umsetzung 

### Systemarchitektur

Das Haptigation-System besteht aus drei Hauptkomponenten:

1. **Mobile Anwendung**
   - Navigations-Engine und Routenberechnung
   - Bluetooth-Kommunikation mit Armbändern
   - Benutzeroberfläche für Zieleingabe und Einstellungen

2. **Vibrations-Armbänder (Hardware)**
   - Tragbare Geräte
   - Bluetooth-Konnektivität
   - Vibrationsmotoren für haptisches Feedback
   - Batteriemanagement

3. **Kommunikationsprotokoll**
   - Echtzeit-Positionsverfolgung über Google Maps SDK
   - Richtungsberechnung und Befehlsübertragung
   - Haptische Mustergenerierung

### Funktionale Anforderungen

**FA1: Routennavigation**
- Das System soll Schritt-für-Schritt-Navigationsführung bereitstellen
- Das System soll optimale Routen basierend auf Benutzerpräferenzen berechnen
- Das System soll mehrere Navigationsmodi unterstützen (Radfahren, Gehen usw.)

**FA2: Haptisches Feedback**
- Das System soll Richtungshinweise durch Vibrationsmuster liefern
- Vibration des linken Armbands soll linke Abbiegungen anzeigen
- Vibration des rechten Armbands soll rechte Abbiegungen anzeigen
- Das System soll unterschiedliche Muster für verschiedene Navigationsereignisse bereitstellen

**FA3: Positionsverfolgung**
- Das System soll die Benutzerposition in Echtzeit über GPS und Google Maps verfolgen
- Das System soll Navigationsanweisungen basierend auf der aktuellen Position aktualisieren
- Das System soll erkennen, wenn Benutzer von geplanten Routen abweichen

**FA4: Benutzeroberfläche**
- Die Anwendung soll Benutzern ermöglichen, Ziele einzugeben
- Die Anwendung soll die aktuelle Route und den Fortschritt anzeigen
- Die Anwendung soll manuelle Steuerungen zum Testen der Armbänder bereitstellen

**FA5: Geräteverwaltung**
- Das System soll gleichzeitig mit zwei Armbändern koppeln
- Das System soll mit Smartwatches oder einzelnen Armbändern koppeln
- Das System soll den Batteriestand der Armbänder überwachen
- Das System soll Anpassungen ermöglichen

**FA6: Barrierefreiheit**
- Das System soll alternatives Feedback für Benutzer mit sensorischen Beeinträchtigungen bereitstellen
- Die Anwendungsoberfläche soll Barrierefreiheitsstandards erfüllen
- Das System soll anpassbare Vibrationsintensitäten unterstützen

### Nicht-funktionale Anforderungen

**NFA1: Benutzerfreundlichkeit**
- Vibrationsmuster sollen intuitiv sein und minimales Lernen erfordern
- Die Kopplung der Armbänder soll innerhalb von 10 Sekunden abgeschlossen sein
- Die Benutzeroberfläche soll mit minimaler visueller Aufmerksamkeit bedienbar sein

**NFA2: Leistung**
- Navigations-Updates sollen mit einer Latenz unter 500ms erfolgen
- Das System soll eine stabile Bluetooth-Verbindung bis zu 10 Metern aufrechterhalten
- Die GPS-Positionsgenauigkeit soll unter normalen Bedingungen innerhalb von 5 Metern liegen

**NFA3: Zuverlässigkeit**
- Das System soll während der aktiven Navigation eine Betriebszeit von 99% aufrechterhalten
- Die Batterielebensdauer soll mindestens 8 Stunden kontinuierliche Nutzung unterstützen
- Das System soll GPS-Signalverlust elegant bewältigen

**NFA4: Kosteneffizienz**
- Die gesamten Hardwarekosten pro Armband sollen 25 € nicht überschreiten
- Das System soll wo möglich handelsübliche Komponenten verwenden
- Die Herstellung soll für die Massenproduktion skalierbar sein

**NFA5: Sicherheit**
- Das System soll Benutzer nicht von der Umgebungswahrnehmung ablenken
- Die Vibrationsintensität soll für Komfort anpassbar sein
- Das System soll eine Notfall-Stopp-Funktionalität bereitstellen

**NFA6: Portabilität**
- Armbänder sollen leicht sein (unter 50g pro Stück)
- Das System soll wetterfest sein (mindestens IP54-Zertifizierung)
- Armbänder sollen für längeres Tragen bequem sein

**NFA7: Wartbarkeit**
- Die Systemarchitektur soll modulare Updates unterstützen
- Die Anwendung soll Over-the-Air-Firmware-Updates unterstützen
- Der Code soll etablierten Design-Mustern und Dokumentationsstandards folgen

**NFA8: Skalierbarkeit**
- Das System soll mehrere gleichzeitige Benutzer ohne Infrastruktur unterstützen
- Die Anwendung soll Routen unterschiedlicher Komplexität effizient handhaben
- Die Architektur soll zukünftige Funktionserweiterungen ermöglichen

---

## Marktpositionierung

### Wettbewerbsvorteil

Im Vergleich zu bestehenden Lösungen:

| Merkmal | Wayband | Haptigation |
|---------|---------|-------------|
| Preis | 100+ € | Max. 25 € pro Armband |
| Konfiguration | Einzelnes Armband | Bilateral (zwei Armbänder) |
| Bedienung | Komplex, mehrschichtig | Einfach und intuitiv |
| Zielmarkt | Nur Sehbehinderte | Mehrere Segmente |

### Alleinstellungsmerkmale

- **Bilaterales System:** Zwei Armbänder bieten klarere Richtungshinweise
- **Einfachheit:** Intuitive Bedienung mit minimalem Schulungsaufwand
- **Erschwinglichkeit:** Wir möchten das Produkt für alle sozialen Schichten zugänglich machen
- **Agilität:** Kleines, praktisch arbeitendes Team ermöglicht schnelle Iteration und Verbesserung
- **Vielseitigkeit:** Bedient mehrere Zielgruppen mit einer einzigen Lösung

---

## Entwicklungsstatus

**Aktueller Stand:** Validierung von Benutzerfeedback aus [Menti-Umfragen](https://www.menti.com/alx5ib81p2uv)

**Zukünftige Schritte:** Bitte schauen Sie sich unsere [Roadmap](/docs/General%20Info/roadmap) für zusätzliche Informationen an.

**Team-Merkmale:**
- Praktische technische Umsetzung
- Schnelle Iterationsfähigkeiten
- Benutzerzentrierter Designansatz

---

## Datennutzung

Wir haben kein Interesse daran, Ihnen durch die Ausnutzung Ihrer Daten Schaden zuzufügen.

Daher werden wir alles in unserer Macht Stehende tun, um Ihre Daten zu sichern.

Wenn Sie möchten, dass Ihre Daten entfernt werden, kontaktieren Sie uns unter **haptigation@gmail.com**. Wir werden dies umgehend tun.

Wenn Sie detaillierte Informationen darüber wünschen, wie wir Ihre Daten verwenden, sehen Sie sich unsere [Dokumentation](/docs/General%20Info/data-usage) an.

Wir möchten in Bezug auf die Verwendung Ihrer Daten vollständig transparent sein. Daher sind alle [Programme](https://github.com/Haptigation-Student-Project/Google-Apps-Script), die Ihre Daten verarbeiten, öffentlich und können von Ihnen eingesehen werden.

## Google

Wir verwenden viele Funktionen von Google, um unser Projekt zu realisieren.
Abgesehen davon sind wir in keiner Weise mit Google verbunden und vollständig unabhängig.

## Kontakt

Für weitere Informationen über Haptigation können Sie uns gerne kontaktieren:

**E-Mail:** haptigation@gmail.com

**Newsletter:** Abonnieren Sie unseren Newsletter, indem Sie Ihre E-Mail in unseren [Menti-Umfragen](https://www.menti.com/alx5ib81p2uv) hinterlassen oder uns eine E-Mail an haptigation@gmail.com mit Interessensbestätigung senden. 

---

*Zuletzt aktualisiert: 5. Februar 2025*
