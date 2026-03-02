---
title: Single Wristband Standard
description: Documentation about relevant information on the single wristband standard prototype
hide_table_of_contents: true
sidebar_position: 2
---

# Single Wristband Standard Prototype
For confidentiality reasons, no code will be shared but the used patterns.

## Example patterns
```python
# Regular patterns to play on only one motor
single_motor_patterns = {
    "1": (100, 100, 5),    # Very short, rapid pulses - turn very soon
    "2": (150, 300, 3),    # Spaced pulses - turn approaching
    "single": (500, 0, 1), # Single long vibration - turn now
}

# Special patterns to play on both motors simulataneously
dual__motor_patterns = {
    "u-turn": (200, 200, 2),          # Needs to be simultaneously played on both wristbands
    "wrong": (150, 150, 4),           # Rapid pulses indicate wrong direction/input
    "recalculating": (250, 150, 2),   # Medium pulses indicate system is recalculating route
}
``` 