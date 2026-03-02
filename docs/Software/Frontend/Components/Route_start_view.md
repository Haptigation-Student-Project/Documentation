---
title: Google Maps List Navigation
description: Implementation of a text-based navigation list replacing the MapView
hide_table_of_contents: false
sidebar_position: 2
---

# Google Maps List Navigation

This guide covers how the map-based navigation was extended to a list-based view using the Google Directions API and a `RecyclerView`.

---

## 1. UI Architecture

To switch between the map and the navigation list, we use a `RecyclerView` that overlaps the `FragmentContainerView`.

### Layout Integration (`fragment_route.xml`)

The `RecyclerView` is placed inside the `ConstraintLayout` and is hidden by default (`visibility="gone"`).

```xml
<androidx.recyclerview.widget.RecyclerView
    android:id="@+id/rvNavigationSteps"
    android:layout_width="match_parent"
    android:layout_height="0dp"
    android:visibility="gone"
    app:layout_constraintBottom_toBottomOf="parent"
    app:layout_constraintTop_toBottomOf="@id/searchCard" />