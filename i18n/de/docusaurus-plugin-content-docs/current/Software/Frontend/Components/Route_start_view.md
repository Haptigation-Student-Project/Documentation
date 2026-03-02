---
title: Google Maps Listennavigation
description: Implementierung einer textbasierten Navigationsliste als Ersatz für die MapView
hide_table_of_contents: false
sidebar_position: 2
---

# Google Maps Listennavigation

Dieser Leitfaden beschreibt, wie die kartenbasierte Navigation zu einer listenbasierten Ansicht erweitert wurde, unter Verwendung der Google Directions API und einer `RecyclerView`.

---

## 1. UI-Architektur

Um zwischen der Karte und der Navigationsliste zu wechseln, verwenden wir eine `RecyclerView`, die die `FragmentContainerView` überlagert.

### Layout-Integration

Die `RecyclerView` wird innerhalb des `ConstraintLayout` platziert und ist standardmäßig ausgeblendet (`visibility="gone"`).

```xml
<androidx.recyclerview.widget.RecyclerView
    android:id="@+id/rvNavigationSteps"
    android:layout_width="match_parent"
    android:layout_height="0dp"
    android:visibility="gone"
    app:layout_constraintBottom_toBottomOf="parent"
    app:layout_constraintTop_toBottomOf="@id/searchCard" />
```
