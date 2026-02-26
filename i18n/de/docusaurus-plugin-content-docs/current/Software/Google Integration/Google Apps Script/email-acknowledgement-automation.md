---
title: E-Mail-Bestätigung
description: Dokumentation zur E-Mail-Bestätigungs-Automatisierungslogik über Google Apps Script
hide_table_of_contents: true
sidebar_position: 1
---

# E-Mail-Bestätigungs-Automatisierung

## Überblick
Dieses Google Apps Script antwortet automatisch auf eingehende ungelesene E-Mails in Ihrem Gmail-Posteingang. Es überwacht neue Nachrichten und sendet eine vorgefertigte Antwort aus einem E-Mail-Entwurf, wobei sichergestellt wird, dass jeder Absender nur eine automatische Antwort erhält.

Sie finden es hier: [Github](https://github.com/Haptigation-Student-Project/Google-Apps-Script/)

---

## Voraussetzungen
### 1. Gmail API-Zugriff aktivieren

- Gehen Sie zu [Google Apps Script](https://script.google.com)
- Öffnen Sie Ihr Projekt (oder erstellen Sie ein neues)
- Klicken Sie auf das "Services"-Symbol (⊕) in der linken Seitenleiste
- Suchen Sie nach "Gmail API" und klicken Sie auf "Add"

### 2. Gmail-Einstellungen

Stellen Sie sicher, dass Ihr Gmail-Konto über ein ausreichendes tägliches Sendekontingent verfügt (normalerweise 500 E-Mails/Tag für reguläres Gmail, 2000/Tag für Google Workspace)

Das "Script" läuft mit Ihren Google-Konto-Berechtigungen (keine zusätzlichen Einstellungen erforderlich)

---

## Setup-Anleitung
### Schritt 1: Antwort-"Draft" in Gmail erstellen

Erstellen Sie in Gmail einen neuen E-Mail-"Draft" mit Ihrer automatischen Antwortnachricht (unterstützt HTML-Formatierung und URL-basierte "Inline Images")

**WICHTIG:**
- Setzen Sie die Betreffzeile auf exakt:
```E-Mail Response Automation Draft - DO NOT DELETE```

**ACHTUNG:**
- NICHT SENDEN - Nur als "Draft" speichern
- Löschen Sie diesen "Draft" niemals - das "Script" benötigt ihn

### Schritt 2: Google Apps Script öffnen

Gehen Sie zu [Google Apps Script](https://script.google.com)

### Schritt 3: Einstellungen konfigurieren (Optional)
Sie können die "CONFIG"-Einstellungen am Anfang des "Scripts" anpassen:

```javascript
const CONFIG = {
  DRAFT_SUBJECT: 'E-Mail Response Automation Draft - DO NOT DELETE',      // Draft subject (must match exactly)
  FEEDBACK_DRAFT_SUBJECT: 'Feedback E-Mail Response Automation Draft - DO NOT DELETE',  // Feedback draft subject
  TEST_SUBJECT_PREFIXES: ['[TEST]', '[Test]', '[test]', 'TEST:', 'Test:', 'test:'],     // Prefixes for test emails
  FEEDBACK_SUBJECT_PREFIX: 'Feedback zum App-Design',                     // Prefix for feedback emails
  FEEDBACK_REPLY_SUBJECT: 'Vielen Dank für Ihr Feedback',                 // Reply subject for feedback
  MAX_EMAILS_PER_RUN: 50,                                                 // Max emails processed per check
  CHECK_INTERVAL_MINUTES: 1,                                              // How often to check (in minutes)
  LABEL_NAME: 'AutoResponded'                                             // Label for processed emails
};
```

**Einstellungen erklärt:**
- **DRAFT_SUBJECT**: Der exakte Betreff Ihres Standard-Antwort-"Drafts"
- **FEEDBACK_DRAFT_SUBJECT**: Separater "Draft" für Feedback-E-Mails (optional)
- **TEST_SUBJECT_PREFIXES**: Array von Präfixen für Test-E-Mails, die ignoriert werden sollen (z.B. `[TEST]`, `TEST:`, etc.)
- **FEEDBACK_SUBJECT_PREFIX**: E-Mails mit diesem Präfix erhalten eine separate Feedback-Antwort
- **FEEDBACK_REPLY_SUBJECT**: Betreffzeile für Feedback-Antworten
- **MAX_EMAILS_PER_RUN**: Begrenzt die Anzahl der E-Mails pro Prüfung (verhindert Kontingent-Probleme)
- **CHECK_INTERVAL_MINUTES**: Häufigkeit der Prüfungen (1 = jede Minute, 5 = alle 5 Minuten, etc.)
- **LABEL_NAME**: Gmail-"Label", das auf verarbeitete E-Mails angewendet wird (verhindert Duplikate)

### Schritt 4: "Script" speichern
Klicken Sie auf das Disketten-Symbol (💾) oder drücken Sie Strg+S / Cmd+S, um Ihre Änderungen zu speichern.

<img width="1302" height="127" alt="save icon" src="https://github.com/user-attachments/assets/9f713499-f400-4042-8c1b-537d62180816" />

### Schritt 5: Automatischen "Trigger" einrichten

Wählen Sie im Funktions-Dropdown (oben in der Mitte) "setupTrigger" aus
Klicken Sie auf den "Run"-Button (▶️)

<img width="1223" height="141" alt="run function setup" src="https://github.com/user-attachments/assets/1fa2cedf-4218-4e49-bcb0-c0d7946974e2" />

Beim ersten Ausführen autorisieren Sie das "Script":

- Klicken Sie auf "Review permissions"
- Wählen Sie Ihr Google-Konto aus
- Klicken Sie auf "Advanced" → "Go to [Project Name] (unsafe)"
- Klicken Sie auf "Allow"

Prüfen Sie das "Execution Log" - Sie sollten sehen: "Trigger erfolgreich eingerichtet"

### Schritt 6: Setup überprüfen
Der Auto-Responder ist jetzt aktiv! Er wird:

- Alle X Minuten auf ungelesene E-Mails prüfen (wie konfiguriert)
- Ihre "Draft"-Antwort an jeden neuen Absender senden
- Das "AutoResponded"-"Label" anwenden, um Duplikate zu verhindern
- Automatisch weiterlaufen

---

## Workflow

Alle X Minuten (Standard: 1 Minute) prüft das "Script" Ihren Posteingang
Sucht nach ungelesenen E-Mails ohne das "AutoResponded"-"Label"

Für jede neue E-Mail:
- Liest die Absenderadresse
- Sendet Ihre "Draft"-Nachricht als Antwort
- Wendet das "AutoResponded"-"Label" an
- Protokolliert die Aktion

Verhindert Duplikate: Sobald ein "Label" angewendet wurde, antwortet das "Script" nicht erneut auf diese E-Mail

---

## Intelligente Funktionen

- **Dual Draft System**: Unterstützung für Standard- und Feedback-spezifische Antwort-"Drafts"
- **Emoji-Reaktions-Filter**: Überspringt automatisch Emoji-Reaktionen (zählen nicht als Nachrichten, auf die geantwortet werden muss)
- **Feedback-Erkennung**: Verwendet automatisch einen speziellen Antwort-"Draft" für Feedback-E-Mails
- **Test-E-Mail-Filter**: E-Mails, die mit Test-Präfixen beginnen (`[TEST]`, `TEST:`, etc.), werden automatisch ignoriert (verhindert Schleifen)
- **"Inline Images"**: Unterstützt eingebettete Bilder in Ihrem "Draft" - Unterstützt nur Bilder, die über URL hinzugefügt wurden (z.B. [imgur](https://imgur.com)-Bilder)
- **HTML-Formatierung**: Behält die Rich-Text-Formatierung aus Ihrem "Draft" bei
- **"Thread-Safe"**: Funktioniert mit E-Mail-"Threads"/Konversationen
- **Duplikat-Prävention**: Verwendet Gmail-"Labels", um beantwortete E-Mails zu verfolgen
- **"Rate Limiting"**: Verarbeitet standardmäßig maximal 50 E-Mails pro Durchlauf
- **Automatisches Überspringen**: Emoji-Reaktionen und Test-E-Mails umgehen das Antwortsystem

---

## Verwaltung des Auto-Responders
### "Trigger" Aktiv-Status prüfen

Klicken Sie in Google Apps Script auf das Uhr-Symbol (⏰) in der linken Seitenleiste
Sie sollten "autoResponseToEmails" mit seinem Zeitplan aufgelistet sehen

<img width="366" height="406" alt="trigger icon" src="https://github.com/user-attachments/assets/e68ba06e-6fba-4c1f-a721-9042d59b4796" />

### Vorübergehend deaktivieren

Wählen Sie "removeTrigger" aus dem Funktions-Dropdown
Klicken Sie auf "Run" (▶️)
Überprüfen Sie im "Execution Log": "Trigger entfernt"

<img width="1227" height="137" alt="run function remove" src="https://github.com/user-attachments/assets/21a86e3f-8425-453f-9fb3-1490296bdf72" />

### Wieder aktivieren

Wählen Sie "setupTrigger" aus dem Funktions-Dropdown
Klicken Sie auf "Run" (▶️)

<img width="1223" height="141" alt="run function setup" src="https://github.com/user-attachments/assets/1fa2cedf-4218-4e49-bcb0-c0d7946974e2" />

### Antwortnachricht aktualisieren

Bearbeiten Sie Ihren "Draft" in Gmail (den mit "E-Mail Response Automation Draft - DO NOT DELETE" im Betreff)

Speichern Sie die Änderungen - das "Script" wird automatisch die aktualisierte Version verwenden

Kein "Trigger"-Neustart erforderlich

---

## Testen
1. Testen Sie vor dem Einrichten des "Triggers" manuell:
2. Senden Sie sich selbst eine Test-E-Mail (von einem anderen Konto)
3. Wählen Sie in Google Apps Script "autoResponseToEmails" aus
4. Klicken Sie auf "Run" (▶️)
5. Prüfen Sie das "Execution Log" auf "Auto-Response gesendet an: [your-email]"
6. Überprüfen Sie, ob Sie die Antwort erhalten haben
7. Verarbeitete E-Mails prüfen
    - In Gmail: Suchen Sie nach dem "Label" "AutoResponded", um alle E-Mails zu sehen, die Auto-Antworten erhalten haben

---

## Konfigurationsoptionen
### Prüfhäufigkeit ändern
Passen Sie "CHECK_INTERVAL_MINUTES" an:

```
1 = Jede Minute (am reaktionsschnellsten, nutzt mehr Kontingent)
5 = Alle 5 Minuten (empfohlen für mittleres Volumen)
15 = Alle 15 Minuten (für geringes Volumen)
60 = Jede Stunde (minimale Kontingent-Nutzung)
``` 

Führen Sie nach der Änderung "setupTrigger" erneut aus, um die Änderung anzuwenden.

### Separaten Feedback-Antwort-"Draft" verwenden (Optional)
Das "Script" unterstützt einen separaten "Draft" für Feedback-E-Mails:

1. Erstellen Sie einen zweiten "Draft" mit dem Betreff: `Feedback E-Mail Response Automation Draft - DO NOT DELETE`
2. Passen Sie ihn für Feedback-Antworten an (z.B. "Vielen Dank für Ihr Feedback!")
3. E-Mails mit "Feedback zum App-Design" im Betreff verwenden automatisch diesen "Draft"
4. Passen Sie das Präfix in "CONFIG" bei Bedarf an:
   ```javascript
   FEEDBACK_SUBJECT_PREFIX: 'Feedback zum App-Design'  // Emails starting with this use feedback draft
   FEEDBACK_REPLY_SUBJECT: 'Vielen Dank für Ihr Feedback'  // Response subject for feedback
   ```

### Test-E-Mails herausfiltern
E-Mails, die mit Test-Präfixen beginnen, werden automatisch ignoriert:
- Unterstützt mehrere Präfixe: `[TEST]`, `[Test]`, `[test]`, `TEST:`, `Test:`, `test:`
- Es wird keine Antwort gesendet
- Sie erhalten nicht das "AutoResponded"-"Label"
- Nützlich zum Testen Ihres "Drafts", ohne Antworten auszulösen

Um die Test-Präfixe anzupassen:
```javascript
TEST_SUBJECT_PREFIXES: ['[TEST]', '[Test]', '[test]', 'TEST:', 'Test:', 'test:']  // Add or remove prefixes as needed
```

### Emoji-Reaktionen überspringen
Das "Script" erkennt und überspringt Emoji-Reaktionen automatisch:
- Ein-Emoji-Nachrichten werden herausgefiltert
- Dies verhindert unnötige Antworten auf schnelles Emoji-Feedback
- Basiert auf Nachrichteninhaltsanalyse

### Antwort-Betreff anpassen

Standardmäßig fügt das "Script" "Re: " zum ursprünglichen Betreff hinzu:
- "Ursprünglicher Betreff" → "Re: Ursprünglicher Betreff"
- "Re: Ursprünglicher Betreff" → "Re: Re: Ursprünglicher Betreff" (beabsichtigt - zeigt an, dass es eine Antwort auf eine Antwort ist)

Für Feedback-E-Mails wird ein benutzerdefinierter Betreff verwendet:
- Betreff wird gesetzt auf: "Vielen Dank für Ihr Feedback" (konfiguriert in `FEEDBACK_REPLY_SUBJECT`)

### Maximale E-Mails pro Durchlauf anpassen
Wenn Sie hohes E-Mail-Volumen erhalten:

Erhöhen Sie "MAX_EMAILS_PER_RUN" auf 100 oder 200

Achten Sie auf Gmails tägliche Sendegrenzen

---

## Fehlerbehebung
### "No Draft Found" Fehler

- Überprüfen Sie, ob der Betreff Ihres "Drafts" genau lautet: E-Mail Response Automation Draft - DO NOT DELETE
- Prüfen Sie auf zusätzliche Leerzeichen oder Tippfehler
- Stellen Sie sicher, dass der "Draft" nicht versehentlich gelöscht wurde

### Keine Antworten werden gesendet

- Prüfen Sie, ob der "Trigger" aktiv ist (Uhr-Symbol im "Script"-Editor)
- Überprüfen Sie, ob Sie ungelesene E-Mails ohne "AutoResponded"-"Label" haben
- Prüfen Sie das "Execution Log" auf Fehler (View → Executions)
- Testen Sie manuell mit der Funktion "autoResponseToEmails"

### Doppelte Antworten

- Sollte aufgrund des "Label"-Systems nicht passieren
- Falls doch, prüfen Sie, ob sich "LABEL_NAME" geändert hat
- Überprüfen Sie, ob das "Label" angewendet wird (prüfen Sie in Gmail)

### Emoji-Reaktionen lösen Antworten aus

Dies sollte nicht passieren - sie werden automatisch gefiltert:
- Prüfen Sie das "Execution Log" auf "Emoji-Reaktion übersprungen"-Meldungen
- Überprüfen Sie, ob die Funktion "isEmojiReaction()" funktioniert
- Falls Probleme bestehen bleiben, erhöhen Sie "CHECK_INTERVAL_MINUTES"

### Tägliche Sendegrenze erreicht

- Reguläres Gmail: 500 E-Mails/Tag
- Google Workspace: 2.000 E-Mails/Tag
- Reduzieren Sie "CHECK_INTERVAL_MINUTES" oder "MAX_EMAILS_PER_RUN"
- Erwägen Sie ein Upgrade auf Google Workspace

### Bilder werden nicht angezeigt

- Stellen Sie sicher, dass Bilder im "Draft" über "URL" eingebettet sind (nicht als Dateien angehängt)
- Gmail blockiert manchmal "Inline Images" - Empfänger müssen möglicherweise auf "Bilder anzeigen" klicken

---

## Erweiterte Funktionen
### E-Mails als gelesen markieren (Optional)
Kommentieren Sie diese Zeile im "Script" aus:

```javascript
// latestMessage.markRead();
```
Entfernen Sie die //, um das automatische Markieren als gelesen zu aktivieren.

### E-Mail-Datenschutz
Alle E-Mail-Adressen werden automatisch in "Logs" anonymisiert:
- `max.mustermann@gmail.com` → `m...@g...com`
- Dies schützt die Privatsphäre der Benutzer in "Execution Logs"
- Keine Konfiguration erforderlich - immer aktiv

---
Last updated: February 26, 2026

Version: 1.3