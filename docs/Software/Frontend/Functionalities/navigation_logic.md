---
title: List Navigation Logic
description: Controlling the transition from MapView to StepList
sidebar_position: 1
---

# List Navigation Logic

This section describes the logic within `RouteFragment` that handles the transition and data binding for the navigation list.

## 1. UI Transition

When the user starts the navigation, we toggle the visibility of the UI components. This is handled in `startFullNavigation`.

## 2. Adapter Integration

The adapter renders the HTML instructions. We use `Html.fromHtml` to display bold text (street names) provided by Google.

## 3. Implementation in Route Fragment. 

The Workflow can be triggerd by pressing the button bznCalculateRoute in the Route Fragement Page. 
This will run the function startFullNavigation, which reloads the Page and shows the Direction Steps, fetches the Route Data and Setups the Adapter.