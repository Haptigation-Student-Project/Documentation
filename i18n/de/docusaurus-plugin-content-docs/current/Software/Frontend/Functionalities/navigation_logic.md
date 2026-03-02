---
title: Listennavigations-Logik
description: Steuerung des Übergangs von MapView zur StepList
sidebar_position: 1
---

# Listennavigations-Logik

Dieser Abschnitt beschreibt die Logik innerhalb von `RouteFragment`, die den Übergang und die Datenbindung für die Navigationsliste handhabt.

## 1. UI-Übergang

Wenn der Benutzer die Navigation startet, schalten wir die Sichtbarkeit der UI-Komponenten um. Dies wird in `startFullNavigation` behandelt.

## 2. Adapter-Integration

Der Adapter rendert die HTML-Anweisungen. Wir verwenden `Html.fromHtml`, um fettgedruckten Text (Straßennamen) anzuzeigen, der von Google bereitgestellt wird.

## 3. Implementierung im Route Fragment

Der Workflow kann durch Drücken der Schaltfläche bznCalculateRoute auf der Route Fragment-Seite ausgelöst werden. 
Dies führt die Funktion startFullNavigation aus, die die Seite neu lädt und die Wegbeschreibungsschritte anzeigt, die Routendaten abruft und den Adapter einrichtet.
