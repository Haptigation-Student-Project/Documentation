---
title: Benutzerdaten löschen
description: Dokumentation zur automatischen Löschung von Benutzerdaten in Gmail und Google Contacts
hide_table_of_contents: true
sidebar_position: 4
---

# Benutzerdaten-Löschungs-Automatisierung
## Überblick
Dieses Google Apps Script ermöglicht die vollständige Löschung aller Daten, die mit einer E-Mail-Adresse in Ihrem Gmail-Konto und Google Contacts verknüpft sind. Bei Ausführung wird automatisch:
- Eine Bestätigungs-E-Mail an den Benutzer gesendet
- Alle Kontakte mit dieser E-Mail-Adresse gelöscht
- Alle E-Mail-Threads von/an diese Adresse in den Papierkorb verschoben
- Der gesamte Prozess protokolliert (mit anonymisierten E-Mails)

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
Zugriff auf Google Contacts erforderlich
Das "Script" durchsucht alle gespeicherten Kontakte nach der zu löschenden E-Mail-Adresse
### 3. Gmail
Vollzugriff auf Gmail erforderlich
Das "Script" durchsucht und löscht E-Mails von/an die angegebene Adresse

---
## Setup-Anleitung

### Schritt 1: Bestätigungs-E-Mail-"Draft" erstellen

Erstellen Sie einen neuen "Draft" in Gmail mit Ihrer Löschbestätigung (unterstützt HTML-Formatierung und "Inline Images")

**WICHTIG:**
- Setzen Sie den Betreff auf exakt:

```javascript
Confirm User Data Deletion Draft - DO NOT DELETE
```

**Personalisierung:**
- Verwenden Sie `{EMAIL}` als "Platzhalter" im Text
- Es wird automatisch durch die tatsächliche E-Mail-Adresse ersetzt
- Beispiel: "Ihre Daten für `{EMAIL}` wurden vollständig gelöscht."

**HTML und "Inline Images":**
- Unterstützt HTML-Formatierung und "Inline Images"
- "Inline Images" können direkt im Gmail-"Draft" hinzugefügt werden
- Nur URL-basierte "Inline Images" werden unterstützt

**ACHTUNG:**
- NICHT SENDEN - Nur als "Draft" speichern
- Niemals löschen - das "Script" benötigt diesen "Draft"

### Schritt 2: Konfiguration anpassen
Öffnen Sie das "Script" und passen Sie die "CONFIG"-Einstellungen an:

```javascript
const CONFIG = {
  DEBUG_MODE: false,                                     // Set to true for full email display in logs
  MAX_THREADS_PER_BATCH: 500,                            // Maximum number of threads per batch deletion
  EMAIL: "beispiel@gmail.com",                           // Replace with the real email to be deleted
  TESTMAIL: "test@gmail.com",                            // Replace with the real email you want to test with
  DRAFT_SUBJECT: 'Confirm User Data Deletion Draft - DO NOT DELETE',  // Draft subject in Gmail
  FINAL_EMAIL_SUBJECT: 'Wir haben ihre Nutzerdaten gelöscht',         // Subject of the sent email
  ADMINEMAIL: "haptigation@gmail.com"                    // Admin email for error notifications
};
```

**Einstellungen erklärt:**
- **DEBUG_MODE**: Wenn `true`, werden vollständige E-Mails protokolliert (nur zum Testen!) - zeigt vollständige E-Mail-Adressen statt anonymisierter
- **MAX_THREADS_PER_BATCH**: Maximale Anzahl von E-Mail-"Threads", die pro "Batch"-Löschung verarbeitet werden (Standard: 500, erhöhen für viele E-Mails)
* **`EMAIL`**: Die E-Mail-Adresse, deren Daten gelöscht werden sollen (muss vor der Ausführung gesetzt werden!)
* **TESTMAIL**: Test-E-Mail-Adresse für Funktionen wie `testConfirmationEmail()` und `listContactsForEmail()`
* **DRAFT_SUBJECT**: Betreff der "Draft"-Vorlage für Bestätigungs-E-Mail (NICHT ändern!)
* **FINAL_EMAIL_SUBJECT**: Betreffzeile der Bestätigungs-E-Mail, die an den Benutzer gesendet wird
* **ADMINEMAIL**: E-Mail-Adresse des Administrators, der bei Fehlern automatisch benachrichtigt wird
* **DEBUG_MODE**: Wenn `true`, werden vollständige E-Mails protokolliert (nur zum Testen!) - zeigt vollständige E-Mail-Adressen statt anonymisierter; nach dem Testen zurück auf "false" setzen

### Schritt 3: "Script" speichern
Klicken Sie auf das Speichern-Symbol (💾) oder drücken Sie Strg+S / Cmd+S
<img width="1230" height="141" alt="save icon" src="https://github.com/user-attachments/assets/54b4e907-aac5-48b8-9eaa-e87428e4a31b" />

### Schritt 4: E-Mail-Adresse festlegen

**WICHTIG:** Vor jeder Ausführung muss die zu löschende E-Mail-Adresse in "CONFIG" gesetzt werden:

```javascript
CONFIG.EMAIL = "user@example.com"  // Ersetzen Sie dies durch die echte E-Mail
```

**Sicherheitsprüfung:**
- Das "Script" prüft, ob eine gültige E-Mail-Adresse angegeben wurde
- Wenn die E-Mail fehlt oder ungültig ist, wird die Ausführung abgebrochen
- 3-Sekunden-Warnung vor Beginn des Löschvorgangs

### Schritt 5: Löschvorgang starten
Wählen Sie "deleteByEmail" im Funktions-Dropdown (oben in der Mitte)

Klicken Sie auf den "Run"-Button (▶️)

Beim ersten Ausführen müssen Sie das "Script" autorisieren:
- Klicken Sie auf "Review permissions"
- Wählen Sie Ihr Google-Konto aus
- Klicken Sie auf "Advanced" → "Go to [Project name] (unsafe)"
- Klicken Sie auf "Allow"
 
**Das "Script" führt dann automatisch aus:**
1. 3-Sekunden-Warnung (Zeit zum Abbrechen!)
2. Bestätigungs-E-Mail senden
3. Kontakte suchen und löschen
4. E-Mails suchen und in den Papierkorb verschieben
5. Abschlussbericht im "Log"

### Schritt 6: Löschvorgang überprüfen
Prüfen Sie das "Execution Log" (View → Logs)

Sie sollten sehen:
- "✅ Deletion process completed for: [email]"
- Anzahl der gelöschten Kontakte
- Anzahl der gelöschten E-Mail-"Threads"
 
Manuell überprüfen:
- Google Contacts: Kontakt sollte nicht mehr existieren
- Gmail: E-Mails sollten im Papierkorb sein

---
## Workflow
### Standard-Ablauf
Administrator setzt E-Mail-Adresse in "CONFIG"

Administrator führt `deleteByEmail()` aus

**3-Sekunden-Warnung** erscheint im "Log"

Das "Script" führt folgende Schritte aus:

**Schritt 1: Bestätigungs-E-Mail senden**
- "Draft" mit Betreff "Confirm User Data Deletion Draft - DO NOT DELETE" wird gesucht
- \{EMAIL\}-"Platzhalter" wird durch die tatsächliche E-Mail ersetzt
- E-Mail mit HTML-Formatierung, "Inline Images" und Anhängen wird gesendet
- Bei Fehler: Warnung im "Log", aber Löschung wird fortgesetzt (kein Blocker)
 
**Schritt 2: Kontakte suchen**
- Alle Google Contacts werden durchsucht
- Kontakte mit übereinstimmender E-Mail-Adresse werden identifiziert
- Jeder gefundene Kontakt wird gelöscht
- Anzahl der gelöschten Kontakte wird protokolliert
 
**Schritt 3: E-Mails suchen**
- Such-Query: `from:[email] OR to:[email]`
- E-Mails werden in "Batches" verarbeitet (Standard: 500 "Threads" pro "Batch")
- Jeder "Thread" wird in den Papierkorb verschoben
- Anzahl der gelöschten "Threads" wird protokolliert
- Wird über "Batches" fortgesetzt, bis keine weiteren "Threads" gefunden werden
 
**Schritt 4: Abschlussbericht**
- Zusammenfassung im "Log":
  - Gelöschte Kontakte
  - Gelöschte E-Mail-"Threads"
  - Alle E-Mails anonymisiert
  - Alle E-Mails anonymisiert

### Bei Fehlern
- Fehler werden protokolliert (E-Mails anonymisiert)
- Löschung wird wo möglich fortgesetzt
- Bestätigungs-E-Mail-Fehler stoppen die Löschung nicht
- Detaillierte Fehler-"Logs" für "Debugging"
- **Automatische Admin-Benachrichtigung**: Bei kritischen Fehlern wird der Administrator (konfiguriert in `ADMINEMAIL`) automatisch per E-Mail benachrichtigt mit:
  - Zeitstempel des Fehlers
  - Anonymisierte E-Mail-Adresse des betroffenen Benutzers
  - Fehlermeldung und Stack Trace
  - Hinweis zur manuellen Überprüfung

---
## DSGVO-Konformität
### Automatische Anonymisierung
Alle E-Mail-Adressen werden automatisch in "Logs" anonymisiert:
- **Vollständige Anonymisierung**: `max@gmail.com` → `m...@g....com`
- **Teilweise Anonymisierung**: `max@gmail.com` → `m...@g...`
- Schützt personenbezogene Daten in "Logs"
- Kann im "Debug-Modus" deaktiviert werden (nur zum Testen!)
 
**Anonymisierungsformat:**
```javascript
// Standard (DEBUG_MODE: false)
"max.mustermann@gmail.com" → "m...@g....com"
// Debug-Modus (DEBUG_MODE: true)
"max.mustermann@gmail.com" → "max.mustermann@gmail.com"
```
### Vollständige Datenlöschung
- **Kontakte**: Dauerhaft aus Google Contacts gelöscht
- **E-Mails**: In den Papierkorb verschoben (können manuell dauerhaft gelöscht werden)
- **Logs**: Automatisch anonymisiert, keine personenbezogenen Daten

### Recht auf Vergessenwerden (DSGVO Art. 17)
Dieses "Script" hilft bei der Einhaltung des "Rechts auf Vergessenwerden":
- Vollständige Löschung aller Benutzerdaten
- Bestätigung an den Benutzer
- Protokollierung des Löschvorgangs (anonymisiert)
- Prüfbare Compliance

### "Debug-Modus"
**NUR ZUM TESTEN AKTIVIEREN:**
```javascript
DEBUG_MODE: true  // Zeigt vollständige E-Mails in Logs
```

**WICHTIG:** Nach dem Testen zurück auf `false` setzen!

### Admin-Benachrichtigungen
Bei kritischen Fehlern während des Löschvorgangs wird automatisch eine Benachrichtigung an den konfigurierten Administrator gesendet.

**Funktionsweise:**
- Automatischer Versand bei schwerwiegenden Fehlern in `deleteAllDataForEmail()`
- E-Mail-Adresse des Admins wird in `CONFIG.ADMINEMAIL` konfiguriert
- Benachrichtigung enthält:
  - Zeitstempel des Fehlers
  - Anonymisierte E-Mail-Adresse (Datenschutz auch bei Fehlermeldungen)
  - Vollständige Fehlermeldung und Stack Trace
  - Aufforderung zur manuellen Überprüfung der Löschung

**Admin-E-Mail konfigurieren:**
```javascript
CONFIG.ADMINEMAIL = "admin@example.com"  // Ihre Admin-E-Mail
```

**Hinweis:** Wenn die Admin-Benachrichtigung selbst fehlschlägt, wird dies im Log vermerkt, aber der Löschvorgang wird nicht abgebrochen.

---

## Testfunktionen
### 1. Anonymisierung testen
Wählen Sie "testAnonymization" im Funktions-Dropdown

Klicken Sie auf "Run" (▶️)

Das "Log" zeigt Anonymisierungsbeispiele:
- Mit DEBUG_MODE: false
- Mit DEBUG_MODE: true

### 2. Bestätigungs-E-Mail testen

**Vorbereitung:**
- Setzen Sie `TESTMAIL` in "CONFIG" auf Ihre Test-E-Mail:

TESTMAIL: "your-test-email@example.com"

Wählen Sie "testConfirmationEmail" im Dropdown

Klicken Sie auf "Run" (▶️)

Prüfen Sie das "Log" auf Erfolgsmeldungen

Überprüfen Sie in Ihrem Posteingang:
- E-Mail erhalten?
- \{EMAIL\}-"Platzhalter" ersetzt?
- HTML-Formatierung korrekt?
- "Inline Images" sichtbar?

### 3. Kontakte auflisten
**Vorbereitung:**
- Setzen Sie `TESTMAIL` in "CONFIG" auf die zu suchende E-Mail

Wählen Sie "listContactsForEmail" im Dropdown

Klicken Sie auf "Run" (▶️)

Das "Log" zeigt:
- Anzahl der gefundenen Kontakte
- Details für jeden Kontakt (anonymisiert)
- Im "Debug-Modus": vollständige Kontaktdetails

### 4. E-Mail-Validierung
- Das "Script" validiert das E-Mail-Format über `isValidEmail()`, bevor die Löschung gestartet wird
- Wenn die E-Mail fehlt oder ungültig ist, wird die Ausführung mit einem Fehler-"Log" abgebrochen
- Stellen Sie sicher, dass `EMAIL` gesetzt und gültig ist, bevor Sie `deleteByEmail()` ausführen

**WICHTIG:** Diese Funktion löscht nichts - nur zur Ansicht!

---
## Konfigurationsoptionen
### "Batch"-Größe anpassen

Standard: 500 "Threads" pro "Batch"

Für viele E-Mails erhöhen:

```javascript
MAX_THREADS_PER_BATCH: 500 //Dies ist maximal

```

Für langsame Verbindungen verringern:

```javascript
MAX_THREADS_PER_BATCH: 250
```

### Bestätigungs-E-Mail-Betreff ändern
Ändern Sie `FINAL_EMAIL_SUBJECT` in "CONFIG":

```javascript
FINAL_EMAIL_SUBJECT: 'Your data has been deleted'
```

**WICHTIG:** Ändern Sie NICHT `DRAFT_SUBJECT` - muss exakt sein!

### "Debug-Modus" aktivieren
Nur für Entwicklung und Tests:

```
DEBUG_MODE: true
```

**Zeigt dann:**
- Vollständige E-Mail-Adressen in "Logs"
- Detaillierte Fehlerinformationen
- Zusätzliche "Debug"-Ausgabe

**ACHTUNG:** Niemals in der Produktion aktivieren!

---
## Fehlerbehebung
### "Please enter a valid email address!"

- Prüfen Sie die `EMAIL`-Variable in "CONFIG"
- Stellen Sie sicher, dass sie nicht leer oder "example@gmail.com" ist
- Format muss gültig sein: `user@domain.tld`

### "Invalid email address"

- E-Mail-Format wird validiert: Muss ```@``` enthalten

### "Draft not found"

- Stellen Sie sicher, dass der "Draft"-Betreff genau lautet:
```
Confirm User Data Deletion Draft - DO NOT DELETE
```
- Achten Sie auf Leerzeichen und Tippfehler
- Stellen Sie sicher, dass der "Draft" nicht versehentlich gelöscht wurde

### "Confirmation email could not be sent"
- Prüfen Sie den "Draft"-Betreff (siehe oben)
- Stellen Sie sicher, dass der \{EMAIL\}-"Platzhalter" im "Draft" vorhanden ist
- Überprüfen Sie Gmail-Berechtigungen

**Hinweis:** Löschung wird trotzdem fortgesetzt

### Keine Kontakte gefunden
- "People API" muss aktiviert sein (siehe Voraussetzungen)
- E-Mail-Adresse existiert möglicherweise nicht in Contacts
- Führen Sie `listContactsForEmail()` zur Überprüfung aus
- Groß-/Kleinschreibung wird ignoriert - kein Problem

### Keine E-Mails gefunden
- E-Mail-Adresse hat möglicherweise keine E-Mails in Ihrem Konto
- Manuell in Gmail prüfen: `from:[email] OR to:[email]`
- Bereits gelöschte E-Mails werden nicht gefunden

### "Script timeout" bei vielen E-Mails
- Google Apps Script hat ein 6-Minuten-Zeitlimit
- Reduzieren Sie `MAX_THREADS_PER_BATCH` auf 250-300
- Führen Sie das "Script" mehrmals für große Mengen aus
- Für sehr viele E-Mails (>5000): erwägen Sie manuelle Batch-Verarbeitung

### "Inline Images" fehlen in E-Mail
- Bilder müssen als "Inline Images" im "Draft" eingebettet sein
- Gmail blockiert manchmal Bilder - Empfänger muss möglicherweise auf "Bilder anzeigen" klicken
- Verwenden Sie externe URLs als Alternative
- Testen Sie mit `testConfirmationEmail()`

---
## Erweiterte Funktionen
### Mehrere E-Mail-Adressen löschen

**Option 1: Sequenziell**
- Ändern Sie `EMAIL` in "CONFIG"
- Führen Sie `deleteByEmail()` aus
- Warten Sie auf Abschluss
- Wiederholen Sie für nächste E-Mail

**Option 2: Batch-Funktion erstellen**
```javascript
function deleteMultipleEmails() {
  const emailsToDelete = [
    "email1@example.com",
    "email2@example.com",
    "email3@example.com"
  ];
  
  emailsToDelete.forEach(email => {
    CONFIG.EMAIL = email;
    Utilities.sleep(5000); // 5 seconds pause between deletions
  });
}
```

### Benutzerdefiniertes Logging erweitern
Das Logging-System verwendet Zeitstempel und Level:

```javascript
log('INFO', 'Your info message');
log('WARNING', 'Your warning');
log('ERROR', 'Your error');
log('SUCCESS', 'Your success message');
```

**"Logs" anzeigen:**
showLogs(); // Zeigt alle Logs in der Konsole

### Löschung ohne Bestätigungs-E-Mail
Kommentieren Sie den folgenden Block in `deleteAllDataForEmail()` aus:
```javascript
// Step 1: Send confirmation email
// log('INFO', 'STEP 1: Sending confirmation email...');
// const emailSent = sendConfirmationEmail(email);
```

**WICHTIG:** Der Benutzer erhält keine Benachrichtigung!

---

## Sicherheitshinweise
### Produktivumgebung

**Vor jeder Ausführung:**
- Setzen Sie `DEBUG_MODE: false`
- Geben Sie die korrekte E-Mail-Adresse in `EMAIL` ein
- Bestätigungs-"Draft" vorhanden und korrekt

**Nach der Ausführung:**
- Prüfen Sie "Logs" auf Fehler
- Überprüfen Sie manuell in Gmail und Contacts
- Bei Problemen: führen Sie `showLogs()` aus

### Testumgebung
**Empfohlene Einrichtung:**
- Verwenden Sie ein separates Test-Google-Konto
- Erstellen Sie Test-Kontakte mit bekannten E-Mails
- Bereiten Sie Test-E-Mails vor
- `DEBUG_MODE: true` für detaillierte "Logs"
- Nach Tests: setzen Sie `DEBUG_MODE: false`

### Datenschutz
**Automatischer Schutz:**
- "Logs" werden automatisch anonymisiert
- Keine personenbezogenen Daten in dauerhafter Speicherung
- E-Mails im Papierkorb (können manuell geleert werden)

**Best Practice:**
- Löschen Sie regelmäßig "Logs"
- Leeren Sie den Papierkorb nach der Löschung
- Prüfen Sie Bestätigungs-"Draft" auf sensible Informationen

### Berechtigungen
**Erforderliche Berechtigungen:**
- Gmail: Vollzugriff (lesen, löschen, senden)
- Contacts: Vollzugriff (lesen, löschen)
- "People API": Kontakte verwalten

**Sicherheit:**
- Nur vertrauenswürdige Personen sollten Zugriff haben
- "Script"-Projekt sollte privat bleiben
- Niemals "API Keys" oder Passwörter im Code speichern

---
## Best Practices
### Vor der Ausführung

- Testen Sie immer mit einer Test-E-Mail: `testConfirmationEmail()`
- Prüfen Sie Kontakte: `listContactsForEmail()`
- Überprüfen Sie Korrektheit des Bestätigungs-"Drafts" (Betreff, HTML, "Inline Images" und \{EMAIL\}-"Platzhalter")
- Stellen Sie sicher, dass `DEBUG_MODE: false`

### Während der Ausführung
- Warten Sie auf die 3-Sekunden-Warnung (Zeit zum Abbrechen!)
- Führen Sie nicht mehrere Löschungen parallel aus
- Für viele E-Mails (>1000): beachten Sie das Zeitlimit
- Überwachen Sie die "Log"-Ausgabe während der Ausführung

### Nach der Ausführung
- Lesen Sie das "Execution Log" gründlich
- Überprüfen Sie manuell in Gmail und Contacts
- Bei Fehlern: verwenden Sie `showLogs()` für Details
- Leeren Sie den Papierkorb bei Bedarf

### Dokumentation
Dokumentieren Sie Löschvorgänge (DSGVO-Konformität):

- Datum und Uhrzeit
- E-Mail-Adresse (extern dokumentieren)
- Anzahl der gelöschten Kontakte
- Anzahl der gelöschten E-Mails

Dokumentieren Sie Änderungen an "CONFIG"

Erstellen Sie ein Backup des Bestätigungs-"Drafts"

---
Letztes Update: 26. Februar 2025

Version: 1.0