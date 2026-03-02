---
title: Routendaten Abruf
description: Detaillierte Navigationsschritte aus der Google Maps API extrahieren
sidebar_position: 1
---

# Routendaten Abruf

Um eine Liste von Wegbeschreibungen anzuzeigen, erweitern wir den `MapManager`, um spezifische Abschnittsdetails von der Directions API anzufordern.

## 1. Datenmodell

Wir definieren eine leichtgewichtige Datenklasse, um die notwendigen Anweisungsdetails zu speichern.
Wir erhalten die Anweisungen von Google im HTML-Format. 

```kotlin
data class StepInfo(
    val instruction: String, 
    val distance: String,
    val duration: String
)
``` 

## 2. API-Anfrage-Logik

Die Funktion getRouteSteps ruft das vollständige Routenergebnis ab und ordnet die einzelnen Schritte unserem StepInfo-Modell zu.
