---
title: Route Data Fetching
description: Extracting detailed navigation steps from Google Maps API
sidebar_position: 1
---

# Route Data Fetching

To display a list of directions, we extend the `MapManager` to request specific leg details from the Directions API.

## 1. Data Model

We define a lightweight data class to store the necessary instruction details.

```kotlin
data class StepInfo(
    val instruction: String, // HTML-formatted instruction from Google
    val distance: String,
    val duration: String
)

## 2. API Request Logic

The getRouteSteps function fetches the full route result and maps the individual steps into our StepInfo model.