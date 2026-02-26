---
title: Newsletter-Automatisierung
description: Dokumentation zur Newsletter-Automatisierungslogik über Google Apps Script
hide_table_of_contents: true
sidebar_position: 3
---

# Newsletter-Automatisierung

## Überblick
Dieses Google Apps Script automatisiert den Prozess des Versendens personalisierter Newsletter über Gmail. Es liest einen Entwurf, der "Haptigation Newsletter" im Betreff enthält, und sendet ihn an alle Kontakte mit einem bestimmten Label, wobei jede E-Mail mit dem Namen des Empfängers personalisiert wird.
Durch diese Implementierung wird die Datensicherheit gewährleistet und Personalisierung im Newsletter ermöglicht.

Sie finden es hier: [Github](https://github.com/Haptigation-Student-Project/Google-Apps-Script/)

---

## Voraussetzungen
### 1. Gmail API-Zugriff aktivieren

- Gehen Sie zu [Google Apps Script](https://script.google.com)
- Öffnen Sie Ihr Projekt (oder erstellen Sie ein neues)
- Klicken Sie auf das "Services"-Symbol (⊕) in der linken Seitenleiste
- Suchen Sie nach "Gmail API" und klicken Sie auf "Add"

### 2. "People API" aktivieren

- Im selben Google Apps Script-Projekt
- Klicken Sie auf das "Services"-Symbol (⊕) in der linken Seitenleiste
- Suchen Sie nach "People API"
- Klicken Sie auf "Add", um es zu aktivieren
- Dies ermöglicht dem "Script" den Zugriff auf Ihre Gmail-Kontakte und "Labels"

### 3. Gmail-Einstellungen (falls erforderlich)

- Überprüfen Sie, ob in Ihren Gmail-Kontoeinstellungen IMAP aktiviert ist.
- Stellen Sie sicher, dass "Allow less secure apps" NICHT für Google Apps Script erforderlich ist (es läuft mit Ihren Google-Konto-Berechtigungen)
- Stellen Sie sicher, dass Ihr Gmail-Konto über ein ausreichendes tägliches Sendekontingent verfügt (normalerweise 500 E-Mails/Tag für reguläres Gmail, 2000/Tag für Google Workspace)

---

## Setup-Anleitung
### Schritt 1: Zugriff auf Gmail und Google Apps Script

Öffnen Sie [Gmail](https://mail.google.com) und [Google Apps Script](https://script.google.com/home) für Ihr Konto.

### Schritt 2: Newsletter-"Draft" in Gmail erstellen

Erstellen Sie in Gmail einen neuen E-Mail-"Draft" mit Ihrem vollständigen Newsletter-Inhalt

#### WICHTIG: 
Die Betreffzeile MUSS irgendwo `Update zu Haptigation` enthalten (z.B. "Dein Update zu Haptigation - Dezember 2025")

**Personalisierungs-"Platzhalter":**
- Verwenden Sie `[NAME]` oder `[Name]` oder `[name]`, wo Sie möchten, dass der Name des Empfängers erscheint
- Wenn ein Kontakt keinen gespeicherten Namen hat oder der Name "unbekannt" ist, wird er stattdessen durch "LeserIn" ersetzt

Beispieltext: "Hallo [NAME], hier ist dein monatlicher Newsletter..."

**NICHT SENDEN - Nur als "Draft" speichern**

### Schritt 3: Einstellungen konfigurieren

Ersetzen Sie die "CONFIG"-Variablen durch Ihre tatsächlichen Werte:

```javascript
const CONFIG = {
  contactLabel: "Newsletter Subscriber",    // The label of your newsletter contacts
  senderName: "{Name} von {Company}",       // Shows as "Name von Company via company@gmail.com"
  testMode: true,                           // Set to true for testing, false for live sending
  scheduledDate: "2026-02-21",              // YYYY-MM-DD format for scheduled sends 
  scheduledTime: "16:00"                    // HH:MM 24h format for scheduled sends
  // If either of both scheduledVariables is not set scheduleNewsletter will not work, sendNewsletter will work regardless though.)
};
```

**Einstellungen erklärt:**
- **contactLabel**: Der genaue Name Ihrer Kontaktgruppe/"Label" in Google Contacts
- **senderName**: Ihr Name, der als Absender erscheint (wird ergänzt mit "via [your email]")
- **testMode**: Wenn `true`, werden E-Mails nur an Ihr eigenes Konto zum Testen gesendet
- **scheduledDate**: Datum für geplante Newsletter-Sendungen (YYYY-MM-DD Format, z.B. "2026-02-21")
- **scheduledTime**: Uhrzeit für geplante Newsletter-Sendungen (HH:MM 24h Format, z.B. "16:00")

### Schritt 4: "Script" speichern
Klicken Sie auf das Disketten-Symbol (💾) oder drücken Sie Strg+S / Cmd+S, um Ihre Änderungen zu speichern.

<img width="1227" height="134" alt="image" src="https://github.com/user-attachments/assets/d5c373b4-24ea-4bc5-aea0-cbb9c12048b4" />

### Schritt 5: "Script" ausführen

Wählen Sie im Funktions-Dropdown (oben in der Mitte) "sendNewsletter" aus

Klicken Sie auf den "Run"-Button (▶️) links

<img width="1227" height="144" alt="image" src="https://github.com/user-attachments/assets/d0c9576f-31a4-489e-b2e4-4e1a9b0df6c7" />

Beim ersten Ausführen müssen Sie das "Script" autorisieren:

1. Klicken Sie auf "Review permissions"
2. Wählen Sie Ihr Google-Konto aus
3. Klicken Sie auf "Advanced" → "Go to [Project Name] (unsafe)"
4. Klicken Sie auf "Allow"

### Schritt 6: Sicherheitseinstellungen zurücksetzen
Nach erfolgreichem Versenden:

- Ändern Sie "testMode" zurück auf "true"
- Ändern Sie "contactLabel" zurück auf "safetyFirst"
- Dies verhindert versehentliches Versenden

### Schritt 7: Erneut speichern
Klicken Sie auf das Disketten-Symbol (💾) oder drücken Sie Strg+S / Cmd+S, um Ihre Änderungen zu speichern.

<img width="1227" height="134" alt="image" src="https://github.com/user-attachments/assets/d5c373b4-24ea-4bc5-aea0-cbb9c12048b4" />

### Schritt 8: Aufräumen

Überprüfen Sie, ob der Newsletter erfolgreich gesendet wurde (prüfen Sie Ihren "Gesendet"-Ordner)

Löschen Sie den "Draft" oder ändern Sie den Betreff so, dass er NICHT `Update zu Haptigation` enthält

Sie können die Betreffzeile wiederherstellen, wenn Sie die nächste Newsletter-Ausgabe vorbereiten

---

## Funktionen

### Geplantes Versenden

- Planen Sie Newsletter-Sendungen für bestimmtes Datum und Uhrzeit
- Verwenden Sie `scheduleNewsletter()`, um automatisches Versenden einzurichten
- Zeigen Sie geplante Sendungen mit `showScheduledNewsletters()` an
- Brechen Sie geplante Sendungen mit `deleteAllNewsletterTriggers()` ab
- "Triggers" werden nach erfolgreichem Versenden automatisch gelöscht

### Personalisierung

Verwenden Sie [NAME], [Name], oder [name] in Ihrem "Draft"

Empfänger mit gespeicherten Namen: "Hallo [NAME]" → "Hallo Max"

Empfänger mit gespeichertem Namen "unbekannt" oder leer: "Hallo [NAME]" → "Hallo LeserIn"

### Testmodus
Wenn "testMode: true", sendet das "Script" nur an Ihre eigene E-Mail-Adresse zum Testen.

### "Rate Limiting"
Das "Script" pausiert automatisch alle 50 E-Mails für einen Zyklus (Standard 1min), um Gmails Ratenbegrenzungen zu vermeiden.

### Hilfreiche Funktionen
**Ihre Kontakte prüfen**
- Vor dem Versenden, überprüfen Sie Ihre Kontakte:
  - Wählen Sie im Funktions-Dropdown **"showContacts"** aus und klicken Sie auf "Run"

**Alle Kontaktgruppen auflisten**
- Um alle verfügbaren Kontakt-"Labels" zu sehen:
  - Wählen Sie im Funktions-Dropdown **"listAllContactGroups"** aus und klicken Sie auf "Run"

---

## Fehlerbehebung
### "No Newsletter Draft Found"

- Stellen Sie sicher, dass der Betreff Ihres "Drafts" "Update zu Haptigation" enthält
- Prüfen Sie das "Execution Log" auf verfügbare "Draft"-Betreffe

### "No Contacts Found"

- Überprüfen Sie, ob der Kontakt-"Label"-Name genau übereinstimmt (auf Groß-/Kleinschreibung achten!)
- Stellen Sie sicher, dass Kontakte das angegebene "Label" in Gmail Contacts haben
- Prüfen Sie, ob die "People API" aktiviert ist
- Führen Sie "listAllContactGroups" aus, um verfügbare "Labels" zu sehen

### "Permission Denied"

- Führen Sie den Autorisierungsprozess erneut aus
- Stellen Sie sicher, dass sowohl "Gmail API" als auch "People API" in "Services" aktiviert sind

### E-Mails nicht mit Namen personalisiert

- Stellen Sie sicher, dass Kontakte Namen in Google Contacts gespeichert haben
- Prüfen Sie, dass Namen nicht leer oder auf "unbekannt" gesetzt sind
- Falls kein Name: "Script" verwendet "LeserIn" als Fallback

### Tägliche Sendegrenzen

- Reguläres Gmail: 500 E-Mails/Tag
- Google Workspace: 2.000 E-Mails/Tag
- Wenn Sie die Grenzen überschreiten, warten Sie 24 Stunden

---

## Sicherheit & Datenschutz
**⚠️ WICHTIG - SORGFÄLTIG LESEN:**

- Sie arbeiten mit sensiblen personenbezogenen Daten
- Kontaktinformationen DÜRFEN NICHT außerhalb Ihrer Organisation geteilt werden
- Exportieren oder teilen Sie niemals Kontaktlisten
- Nur autorisiertes Personal sollte Zugriff auf dieses "Script" haben
- Behalten Sie "testMode: true" immer bei, wenn Sie nicht aktiv versenden
- Verwenden Sie "contactLabel: \"safetyFirst\"" als Standard, um versehentliches Versenden zu verhindern

---

## Kontaktverwaltung
Bearbeiten Sie Kontakte NICHT manuell - designiertes Personal wird die Integrität der Kontaktdaten pflegen.

Wenn Sie es dennoch tun, bedenken Sie bitte alle Konsequenzen Ihrer Handlung (z.B. falsche Namen, versehentliches Abmelden von Newslettern, etc.)

---

## Wie man eine gut formatierte E-Mail erstellt
- Besorgen Sie sich eine HTML-Datei, die Ihren Newsletter repräsentiert (Sie können KI, [Topol](https://topol.io/) oder Ähnliches verwenden). 
- Sie kann "Inline Styling", Links, Buttons, Bilder enthalten, was immer Sie möchten (außer Emojis aus irgendeinem Grund)
- Speichern Sie Ihre HTML-Datei und öffnen Sie sie in Ihrem Browser, indem Sie sie doppelt im Datei-Explorer anklicken (Verwenden Sie Chrome)
- Wenn Sie auf der Seite sind, klicken Sie STRG + A und dann STRG + C (Es könnte so aussehen, als würde es nur Text kopieren, aber das ist nicht so) 
- Klicken Sie in Ihrem Gmail-"Draft" STRG + V 
  - Das Styling sollte automatisch erscheinen
- Verwenden Sie das "Script" wie beschrieben

### Wichtig 
In der Fußzeile der E-Mail müssen Sie die Möglichkeit einschließen, den Newsletter abzubestellen.

Bitte verwenden Sie das folgende Google-Formular, um Benutzern dies zu ermöglichen.

Das Formular ist mit einem "Script" verbunden, das den Abmeldeprozess vollständig automatisiert.

Weitere Informationen finden Sie hier: 
- [Docusaurus](/docs/Software/Google%20Integration/Google%20Apps%20Script/unsubscribe-newsletter-automation)
- [Github](https://github.com/Haptigation-Student-Project/Google-Apps-Script)

Bitte fügen Sie auch die Links zu unserem [Docusaurus](/), [Github](https://github.com/Haptigation-Student-Project) und [Menti Surveys](https://www.menti.com/alx5ib81p2uv) und vielleicht bald auch zur Website (??) ein

---

## Support
Wenn Sie auf Probleme stoßen:

- Prüfen Sie das "Execution Log" (View → Logs oder Strg+Enter)
- Überprüfen Sie alle Konfigurationseinstellungen
- Stellen Sie sicher, dass "APIs" aktiviert sind
- Testen Sie zuerst mit "testMode: true"

### E-Mail-Datenschutz
Alle E-Mail-Adressen werden automatisch in "Logs" anonymisiert:
- `max.mustermann@gmail.com` → `m...@g...com`
- Dies schützt die Privatsphäre der Benutzer in "Execution Logs"
- Keine Konfiguration erforderlich - immer aktiv

---
Last updated: February 26, 2026

Version: 1.3