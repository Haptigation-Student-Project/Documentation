---
title: Newsletter-Abmeldung
description: Dokumentation zur automatischen Newsletter-Abmeldung über Google Apps Script
hide_table_of_contents: true
sidebar_position: 2
---

# Newsletter-Abmeldungs-Automatisierung

## Überblick
Dieses Google Apps Script automatisiert die Abmeldung von Newsletter-Abonnenten. Wenn jemand das Google-Formular zur Abmeldung ausfüllt, wird automatisch:
- Der Kontakt aus der Newsletter-Gruppe entfernt
- Eine Bestätigungs-E-Mail gesendet
- Die Formularantwort gelöscht (DSGVO-konform)

Das Skript ist vollständig DSGVO-konform: E-Mail-Adressen werden in allen Protokollen automatisch anonymisiert.

Finden Sie es hier: [GitHub](https://github.com/Haptigation-Student-Project/Google-Apps-Script/)

---

## Voraussetzungen
### 1. "People API" aktivieren

- Gehen Sie zu [Google Apps Script](https://script.google.com)
- Öffnen Sie Ihr Projekt (oder erstellen Sie ein neues)
- Klicken Sie auf das "Services"-Symbol (⊕) in der linken Seitenleiste
- Suchen Sie nach "People API" und klicken Sie auf "Add"

### 2. Google Contacts

Stellen Sie sicher, dass Sie eine Kontaktgruppe/"Label" für Ihre Newsletter-Abonnenten haben (z.B. "Newsletter Subscriber")

Kontakte müssen in Google Contacts gespeichert sein

### 3. Google Form

Erstellen Sie ein Google-Formular mit einer E-Mail-Feld-Frage zur Abmeldung

---

## Setup-Anleitung
### Schritt 1: Bestätigungs-E-Mail-"Draft" erstellen

Erstellen Sie einen neuen "Draft" in Gmail mit Ihrer Abmeldebestätigung (unterstützt HTML-Formatierung und URL-basierte "Inline Images")

**WICHTIG:**
- Setzen Sie den Betreff auf exakt:
```
Unsubscribe Newsletter Draft - DO NOT DELETE
```

**Personalisierung:**
- Verwenden Sie `[EMAIL]` als "Platzhalter" im Text
- Es wird automatisch durch die tatsächliche E-Mail-Adresse ersetzt
- Beispiel: "Diese Bestätigung wird an: [EMAIL] gesendet"

**HTML und "Inline Images":**
- Unterstützt HTML-Formatierung und "Inline Images" (via URL)
- Bilder müssen als "Inline Images" eingebettet sein, nicht als separate Anhänge
- Die Formatierung wird in der Bestätigungs-E-Mail beibehalten

**ACHTUNG:**
- NICHT SENDEN - Nur als "Draft" speichern
- Niemals löschen - das "Script" benötigt diesen "Draft"

### Schritt 2: Konfiguration anpassen

Öffnen Sie das "Script" und passen Sie die "CONFIG"-Einstellungen an:

```javascript
const CONFIG = {
  contactLabel: "Newsletter Subscriber",      // Your newsletter label in Google Contacts
  formID: "{your form ID}",                   // Google Form ID
  confirmationSubject: "Haptigation Newsletter-Abmeldung bestätigt",  // Email subject
  senderName: "Haptigation Team",             // Sender name
  debugMode: false                            // Set to true only for testing!
};
```

**Einstellungen erklärt:**
- **contactLabel**: Name Ihrer Newsletter-Kontaktgruppe in Google Contacts (muss genau übereinstimmen!)
- **formID**: Die ID Ihres Google-Formulars (siehe unten, wie Sie sie finden)
- **confirmationSubject**: Betreff der Bestätigungs-E-Mail, die an den Benutzer gesendet wird
- **senderName**: Name, der als Absender erscheint
- **debugMode**: Wenn `true`, werden vollständige E-Mails protokolliert (nur zum Testen!)

**Formular-ID finden:**
1. Öffnen Sie Ihr Google-Formular
2. Sehen Sie sich die URL an: `https://docs.google.com/forms/d/FORM_ID_HERE/edit`
3. Kopieren Sie die ID zwischen `/d/` und `/edit`

### Schritt 3: "Script" speichern

Klicken Sie auf das Speichern-Symbol (💾) oder drücken Sie Strg+S / Cmd+S

<img width="1222" height="140" alt="save icon" src="https://github.com/user-attachments/assets/98219f3c-a5d6-4209-ab6c-5ecf8cab1471" />

### Schritt 4: "Trigger" einrichten

Wählen Sie "setupFormTrigger" im Funktions-Dropdown (oben in der Mitte)

Klicken Sie auf den "Run"-Button (▶️)

<img width="1262" height="135" alt="run function setup" src="https://github.com/user-attachments/assets/e3403182-3f40-412a-bd85-8ffd3a148921" />

Beim ersten Ausführen müssen Sie das "Script" autorisieren:
- Klicken Sie auf "Review permissions"
- Wählen Sie Ihr Google-Konto aus
- Klicken Sie auf "Advanced" → "Go to [Project name] (unsafe)"
- Klicken Sie auf "Allow"

Prüfen Sie das "Execution Log" - Sie sollten sehen: "✓ Trigger successfully created!"

### Schritt 5: Überprüfung

Die Automatisierung ist jetzt aktiv! Für jede Formularübermittlung:
- Der Kontakt wird aus der Newsletter-Gruppe entfernt
- Der Benutzer erhält eine Bestätigungs-E-Mail
- Die Formularantwort wird gelöscht (Datenschutz)
- Alles wird protokolliert (mit anonymisierten E-Mails)

---

## Workflow

Benutzer füllt das Abmeldeformular mit seiner E-Mail-Adresse aus

Das Formular löst automatisch die Funktion "onFormSubmit()" aus

Die folgenden Schritte erfolgen automatisch:
1. E-Mail-Adresse aus der Formularantwort extrahieren
2. E-Mail-Adresse validieren und normalisieren
3. Kontaktgruppe nach übereinstimmender E-Mail durchsuchen
4. Kontakt aus der Newsletter-Gruppe entfernen
5. Personalisierte Bestätigungs-E-Mail senden (mit [EMAIL] ersetzt)
6. Formularantwort sofort löschen (DSGVO-Konformität)
7. Gesamten Prozess protokollieren (mit anonymisierten E-Mails)

---

## DSGVO-Konformität

### Automatische Anonymisierung
Alle E-Mail-Adressen werden automatisch in "Logs" anonymisiert:
- Beispiel: `test@gmail.com` → `t***@g***.com`
- Schützt personenbezogene Daten in "Logs"
- Kann im "Debug-Modus" deaktiviert werden (nur zum Testen!)

### Automatische Datenlöschung
- Formularantworten werden sofort nach der Verarbeitung gelöscht
- Keine dauerhafte Speicherung von Abmeldeanfragen
- Nur die Entfernung aus der Newsletter-Gruppe bleibt erfasst

### "Debug-Modus"
**NUR ZUM TESTEN AKTIVIEREN:**
```javascript
debugMode: true  // Zeigt vollständige E-Mails in Logs
```
**WICHTIG:** Nach dem Testen zurück auf `false` setzen!

---

## Verwaltung der Automatisierung
### "Trigger"-Status prüfen

Klicken Sie in Google Apps Script auf das Uhr-Symbol (⏰) in der linken Seitenleiste

Sie sollten "onFormSubmit" mit dem zugehörigen Formular sehen

<img width="1300" height="389" alt="trigger" src="https://github.com/user-attachments/assets/b0dd5e15-da57-4df9-b22e-b5ef68b83d0e" />

### Vorübergehend deaktivieren

Wählen Sie "removeTrigger" im Funktions-Dropdown

Klicken Sie auf "Run" (▶️)

<img width="1220" height="132" alt="run function remove" src="https://github.com/user-attachments/assets/f1484a30-633c-4e13-b597-5ebba7e86ceb" />

Prüfen Sie das "Log": "✓ Trigger removed"

### Wieder aktivieren

Wählen Sie "setupFormTrigger" im Funktions-Dropdown

Klicken Sie auf "Run" (▶️)

<img width="1262" height="135" alt="run function setup" src="https://github.com/user-attachments/assets/e3403182-3f40-412a-bd85-8ffd3a148921" />

### Bestätigungs-E-Mail aktualisieren

Bearbeiten Sie Ihren "Draft" in Gmail (mit "Unsubscribe Newsletter Draft - DO NOT DELETE" im Betreff)

Speichern Sie die Änderungen - das "Script" wird automatisch die aktualisierte Version verwenden

Kein "Trigger"-Neustart erforderlich

---

## Testfunktionen
### Manuelle Abmeldung testen

Öffnen Sie das "Script"

Bearbeiten Sie die Funktion `testUnsubscribe()`:  
```javascript
const testEmail = "test@gmx.de";  // Ändern Sie dies auf Ihre Test-E-Mail
```

Wählen Sie "testUnsubscribe" im Dropdown

Klicken Sie auf "Run" (▶️)

Prüfen Sie das "Log" auf:
- Erfolgsmeldungen ("✓ Abmeldung erfolgreich")
- Fehlermeldungen, falls welche auftreten
- Wie viele Kontakte gefunden wurden

Überprüfen Sie, dass:
- Die E-Mail aus der Newsletter-Gruppe entfernt wurde
- Eine Bestätigungs-E-Mail empfangen wurde (prüfen Sie den Spam-Ordner)

### Newsletter-Kontakte auflisten

Wählen Sie "listNewsletterContacts" im Dropdown

Klicken Sie auf "Run" (▶️)

Das "Log" zeigt:
- Alle verfügbaren Kontaktgruppen
- Newsletter-Gruppen-Details
- Alle Kontakte in der Newsletter-Gruppe (standardmäßig anonymisiert)
- Im "Debug-Modus": vollständige Kontaktdetails einschließlich E-Mails

---

## Konfigurationsoptionen
### "Label"-Namen ändern

Passen Sie `contactLabel` in "CONFIG" an:
```javascript
contactLabel: "My Newsletter Label"
```

Stellen Sie sicher, dass das "Label" in Google Contacts existiert

Kein Neustart nach Änderung erforderlich

### Admin-Benachrichtigungen

Bei Fehlern erhält der Admin automatisch eine E-Mail

Ändern Sie die Admin-E-Mail in der Funktion `notifyAdminAboutError()`:
```javascript
CONFIG.adminEmail = "admin@example.com"
```

### Absendernamen anpassen

Ändern Sie `senderName` in "CONFIG":
```javascript
senderName: "Your Company Name"
```

Erscheint als Absender der Bestätigungs-E-Mail

---

## Fehlerbehebung
### "No Contact Groups found"
- Prüfen Sie, ob Sie die "People API" aktiviert haben (Services > + > People API)
- Stellen Sie sicher, dass Sie mindestens eine Kontaktgruppe in Google Contacts haben
- Prüfen Sie, dass `contactLabel` genau mit Ihrem "Label"-Namen übereinstimmt (auf Groß-/Kleinschreibung achten!)

### "Label not found"
- Gehen Sie zu Google Contacts und überprüfen Sie, ob das "Label" existiert
- Der Name muss exakt mit `contactLabel` in "CONFIG" übereinstimmen
- Führen Sie `listNewsletterContacts()` aus, um verfügbare "Labels" zu sehen
- Prüfen Sie Rechtschreibung und Groß-/Kleinschreibung sorgfältig

### "No draft found"
- Stellen Sie sicher, dass der "Draft"-Betreff genau lautet: `Unsubscribe Newsletter Draft - DO NOT DELETE`
- Achten Sie auf zusätzliche Leerzeichen oder Tippfehler
- Stellen Sie sicher, dass der "Draft" nicht versehentlich gelöscht wurde

### Keine Bestätigungs-E-Mail erhalten
- Prüfen Sie den Spam-Ordner
- Überprüfen Sie die E-Mail-Adresse im Testlauf
- Stellen Sie sicher, dass der "Draft" korrekt formatiert ist
- Aktivieren Sie `debugMode: true` für detaillierte "Logs"

### "Contact not found in newsletter list"
- E-Mail muss exakt übereinstimmen (Groß-/Kleinschreibung spielt keine Rolle, aber Leerzeichen schon)
- Kontakt muss in der angegebenen Kontaktgruppe sein
- Führen Sie `listNewsletterContacts()` aus, um alle Mitglieder zu sehen
- Prüfen Sie, ob der Kontakt mehrere E-Mail-Adressen hat
- Versuchen Sie, manuell in Google Contacts zu suchen

### Formularantwort nicht gelöscht
- Dies wird als Warnung protokolliert, stoppt aber nicht die Abmeldung
- Stellen Sie sicher, dass `formID` in "CONFIG" korrekt ist
- Prüfen Sie, ob das "Script" Berechtigungen für das Formular hat
- Nicht kritisch für die Funktionalität - Abmeldung funktioniert trotzdem

### Bilder werden in Bestätigungs-E-Mail nicht angezeigt
- Bilder müssen über URL eingebettet sein (nicht als Dateianhänge)
- Gmail blockiert manchmal "Inline Images" - Benutzer müssen möglicherweise auf "Bilder anzeigen" klicken
- Testen Sie mit `testUnsubscribe()`, um die Formatierung zu überprüfen

### Mehrere Abmeldeanfragen von derselben E-Mail
- "Script" wird versuchen, erneut zu entfernen, aber keinen Fehler verursachen
- Bereits bei der ersten Anfrage entfernter Kontakt wird bei der zweiten nicht gefunden
- Protokolliert als "Kontakt mit E-Mail X nicht in der Newsletter-Liste gefunden"

---

## Erweiterte Funktionen
### Mehrere Newsletter-Listen

Duplizieren Sie das "Script" für jede Liste

Verwenden Sie unterschiedliche `contactLabel` in "CONFIG"

Erstellen Sie separate Formulare für jede Liste

### Benutzerdefiniertes Logging

Fügen Sie Ihre eigenen "Log"-Ausgaben hinzu:
```javascript
log("Your message here", false);  // Immer protokolliert
log("Sensitive Info", true);      // Nur im Debug-Modus
```

### Fehlerbehandlung erweitern

Passen Sie die Funktion `notifyAdminAboutError()` an

Fügen Sie zusätzliche Benachrichtigungsmethoden hinzu (Slack, SMS, etc.)

---

## Sicherheitshinweise

**Produktivumgebung:**
- Setzen Sie `debugMode: false`
- Setzen Sie Admin-E-Mail auf Ihre echte E-Mail
- Prüfen Sie regelmäßig die "Logs"

**Testumgebung:**
- `debugMode: true` nur während Tests
- Verwenden Sie eine separate Test-Kontaktgruppe
- Verwenden Sie Test-E-Mails, keine echten Kontakte

**Datenschutz:**
- "Logs" werden automatisch anonymisiert
- Formularantworten werden automatisch gelöscht
- Keine personenbezogenen Daten in dauerhafter Speicherung

---

## Best Practices

Testen Sie immer mit `testUnsubscribe()` vor der Live-Schaltung

Verwenden Sie beschreibende "Label"-Namen

Halten Sie die Bestätigungs-E-Mail kurz und klar

Prüfen Sie regelmäßig die "Execution Logs" auf Fehler

Dokumentieren Sie Änderungen an "CONFIG"

Erstellen Sie ein Backup Ihres Bestätigungs-"Drafts"

---

Last updated: February 26, 2025

Version: 1.0