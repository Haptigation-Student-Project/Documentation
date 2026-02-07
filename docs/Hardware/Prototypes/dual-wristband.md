---
title: Dual Wristband Prototype
description: Documentation about relevant information on the dual wristband prototype
hide_table_of_contents: true
sidebar_position: 1
---

# Dual Wristband Prototype
For confidentiality reasons, no code will be shared but the used patterns.

# Example patterns
```python
# GROUP 1: FOOT (Walking ~5 km/h)
# Distance-based vibration patterns for pedestrian navigation
foot_patterns = {
    "100m": (100, 100, 5),    # Very short, rapid pulses - turn very soon
    "300m": (150, 300, 3),    # Spaced pulses - turn approaching
    "single": (500, 0, 1),    # Single long vibration - turn now
}

# GROUP 2: CYCLING (Biking ~20 km/h, 4x faster than walking)
# Longer distances due to higher speed
cycling_patterns = {
    "400m": (100, 100, 5),    # Very short, rapid pulses - turn very soon
    "1000m": (150, 300, 3),   # Spaced pulses - turn approaching
    "single": (500, 0, 1),    # Single long vibration - turn now
}

# GROUP 3: MOTOR (Driving ~50 km/h, 10x faster than walking)
# Much longer distances for motorized vehicle navigation
motor_patterns = {
    "1km": (100, 100, 5),     # Very short, rapid pulses - turn very soon
    "3km": (150, 300, 3),     # Spaced pulses - turn approaching
    "single": (500, 0, 1),    # Single long vibration - turn now
}

dual_patterns = {
    "u-turn": (200, 200, 2) # Needs to be simultaneously played on both wristbands
}
``` 