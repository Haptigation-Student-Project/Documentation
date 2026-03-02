---
title: Single Wristband Standard
description: Dokumentation über relevante Informationen zum Single-Wristband-Standard-Prototyp
hide_table_of_contents: true
sidebar_position: 2
---

# Single Wristband Standard Prototyp
Aus Gründen der Vertraulichkeit wird kein Code geteilt, sondern nur die verwendeten Muster.

## Musterbeispiel
```python
# Reguläre Muster, die nur auf einem Motor abgespielt werden
single_motor_patterns = {
    "1": (100, 100, 5),    # Sehr kurze, schnelle Impulse - bald abbiegen
    "2": (150, 300, 3),    # Impulse mit Abstand - Abbiegen nähert sich
    "single": (500, 0, 1), # Einzelne lange Vibration - jetzt abbiegen
}

# Spezielle Muster, die gleichzeitig auf beiden Motoren abgespielt werden
dual__motor_patterns = {
    "u-turn": (200, 200, 2),          # Muss gleichzeitig auf beiden Armbändern abgespielt werden
    "wrong": (150, 150, 4),           # Schnelle Impulse zeigen falsche Richtung/Eingabe an
    "recalculating": (250, 150, 2),   # Mittlere Impulse zeigen an, dass das System die Route neu berechnet
}
```
