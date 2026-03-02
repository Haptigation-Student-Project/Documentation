---
title: Teamorganisation
sidebar_position: 4
description: "Informationen und Richtlinien, wie wir uns als Team organisieren"

---

# Teamorganisation

Das Team arbeitet mit einem Scrumban-Framework, um die Arbeit innerhalb des Teams zu organisieren. Im Gegensatz zu reinem Scrum ermöglicht uns dies, flexibler an unserem Projekt zu arbeiten und den Aufwand für regelmäßige Meetings zu reduzieren.

Wir möchten dennoch innerhalb von Sprint-Zeiträumen arbeiten, damit wir den Fortschritt besser messen und dokumentieren können, da die Dokumentation Teil unserer Abschlussnote sein wird. Diese Sprints haben kein definiertes Ziel, um im Kontext eines Universitätsprojekts flexibel zu bleiben.

## Meetings

Es wird wöchentliche Meetings geben, um das Team zu synchronisieren und Hindernisse zu beseitigen.
Im Gegensatz zu Scrum wird es keine dedizierte Retro, Review oder Planung geben. Trotzdem werden wir in unserem wöchentlichen Meeting ähnliche Dinge besprechen, um ein reibungsloses Arbeiten im Team zu gewährleisten.

In Übereinstimmung mit unserem Zeitplan dauern diese Meetings 1 - 1,5 Stunden.

## Richtlinien

### Schätzung

Schätzungen sind bei der Erstellung von Issues nicht obligatorisch. Es wird jedoch empfohlen, um den Arbeitsaufwand für eine bestimmte Aufgabe beurteilen zu können. Dies stellt sicher, dass niemand Arbeit hortet und möglicherweise den Fortschritt behindert.

Die folgende Tabelle hilft bei der Zuordnung einer Schätzung (in Story Points) zu unseren Issues:
| SP | Größe | Zeit | Beschreibung & Beispiele |
| :---: | :--- | :--- | :--- |
| **1** | Trivial | < 1 Std | Schnelle Korrekturen, Dokumentationsaktualisierungen, Recherche. |
| **2** | Einfach | ~ 2 Std | Einfache Code-Integration, Montage eines Teils. |
| **3** | Klein | ~ 4 Std | **Basis-Aufgabe.** Grundlegende Funktion, Entwurf eines Schaltplans. |
| **5** | Mittel | ~ 1 Tag | Hauptmodul, PCB-Layout, komplexe Montage. |
| **8** | Groß | ~ 2 Tage | **Warnzone.** Integrationen oder komplexe Algorithmen. |
| **13** | Episch | > 2 Tage | **STOPP.** Zu groß. Sofort in kleinere Aufgaben aufteilen. |

### Issues erstellen
Wie beschreiben Issues so, dass jeder verstehen kann, warum es existiert und was getan werden muss, indem Sie so viel Kontext wie möglich geben und relevante Dokumentation und Issues verlinken.

Versuchen Sie, sich an das "Als, Ich möchte, Weil"-Framework zu halten:
> *Beispiel:* 
>
> **Als** Mutter **möchte ich**, dass mein Kind gesund isst, **weil** es stark aufwachsen soll

Setzen Sie einen **Typ** entsprechend dessen, was es ist:
- Task: Ein einzelnes Stück Arbeit (das begonnen werden kann)
- Story: Etwas, das eine Idee darstellt (das weitere Arbeit erfordert) oder eine Sammlung von Tasks

### Verwaltung (eigener) Issues
Sie können auch eine praktische Übersicht über das gesamte Team und Ihre eigenen Issues in unserem Projektboard erhalten.
Halten Sie die Issues mit dem aktuellen Fortschritt auf dem neuesten Stand und kommentieren Sie wichtige Informationen wie Entscheidungen, Entdeckungen oder Workarounds, wenn Sie aufhören, an einer Aufgabe zu arbeiten, ohne sie abzuschließen.
Da die Sprints, die wir verwenden, nur grobe Zeiträume zur Dokumentation unseres Fortschritts sind, kann jeder jederzeit mit der Arbeit an Issues beginnen/aufhören. Versuchen Sie natürlich, sich in unseren wöchentlichen Meetings mit anderen Personen abzustimmen.

## Projektboard
Wir organisieren unsere Issues auf einem zentralen Projektboard auf GitHub.
### Status
#### Backlog
Eine Sammlung von Aufgaben, die auf Eis liegen, zukünftige Verbesserungen oder zukünftige Sprint-Sachen.
#### Todo 
Eine Aufgabe, die bereit ist, bearbeitet zu werden. Personen können Issues für sich selbst reservieren (Präferenz), aber jeder kann sie trotzdem aufgreifen und daran arbeiten. Stellen Sie sicher, dass die zugewiesene Person noch nicht mit der Arbeit begonnen hat und vergessen hat, den Status zu aktualisieren!

Reservieren Sie KEINE Aufgaben, wenn Sie viele Dinge zu tun haben und diese nicht bald beginnen werden.
#### In Progress
Es tut sich was! Jemand hat mit der Arbeit an dieser Aufgabe begonnen.
Wenn Sie für einige Zeit abwesend sind, übergeben Sie die Aufgabe bitte an jemand anderen, damit sie von jemand anderem bearbeitet werden kann, während Sie weg sind.
#### Done
Die Aufgabe ist erledigt. Holen Sie sich einen Kaffee ☕
#### Continuous
Alles, was sozusagen immer in Bearbeitung ist. Dient eher als Erinnerung oder so.
### Labels
Diese helfen uns, Dinge in Kategorien aufzuteilen. Denken Sie daran, dass Issues auch zu Repositories gehören, also müssen Sie nicht wirklich etwas als "Dokumentation" kennzeichnen, wenn das Issue im Dokumentations-Repo ist. Verwenden Sie diese Repos als "Domain"

Die folgenden sollten die am häufigsten verwendeten Labels sein, aber Sie können neue einführen, wie Sie es für richtig halten. Versuchen Sie, bestehende so gut wie möglich zu verwenden.
#### Feature
Etwas Neues erstellen.
#### Bug
Etwas funktioniert nicht wie es soll. Zeit, es zu reparieren!
#### Maintenance
Bestehendes verbessern; Refactoring, Aufräumen, Optimierung
#### Research
Etwas muss recherchiert werden. Finden Sie relevante Informationen, damit wir gute Entscheidungen treffen können. Vergessen Sie nicht, Ihre Erkenntnisse irgendwo zu dokumentieren!
#### University
Sachen, die nicht unmittelbar mit dem Projekt zusammenhängen, aber trotzdem erledigt werden müssen
#### Blocked
Es gibt ein Feld "Blocked by" in GitHub. Bitte verwenden Sie es entsprechend