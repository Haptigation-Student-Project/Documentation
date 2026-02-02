---
title: Bluetooth data Format
description: Information on what data we send to the ESP32 to control the vibrations
hide_table_of_contents: false
sidebar_position: 1
---

# Bluetooth data Format

|Byte Offset|Field|Type|Description|
|---|---|---|---|
|0|ACTION|uint8|Code for what the ESP is set to do|
|1|TARGET|uint8|Bitmask for motors|
|2|STRENGTH|uint8|PWM Duty cycle (0-255)|
|3-4|DURATION|uint16|Time in milliseconds (0-65535)|

Markdown
## Actions

- `0x00`to `0x0F`: Reserved
- `0x10`: **Foot** - Reserved
- `0x11`: **Foot** - Turn Now (Single long vibration)
- `0x12`: **Foot** - 100m (Rapid pulses)
- `0x13`: **Foot** - 300m (Spaced pulses)
- `0x14`to `0x1F`: **Foot** - Reserved
- `0x20`: **Cycling** - Reserved
- `0x21`: **Cycling** - Turn Now (Single long vibration)
- `0x22`: **Cycling** - 400m (Rapid pulses)
- `0x23`: **Cycling** - 1000m (Spaced pulses)
- `0x24`to `0x2F`: **Foot** - Reserved
- `0x30`: **Motor** - Reserved
- `0x31`: **Motor** - Turn Now (Single long vibration)
- `0x32`: **Motor** - 1km (Rapid pulses)
- `0x33`: **Motor** - 3km (Spaced pulses)
- `0x34`to `0x3F`: **Foot** - Reserved
- `0x40`: **Dual** - Reserved
- `0x41`: **Dual** - U-Turn (Simultaneous)

Compare patterns [here](link/to/patterns)

## Target

- `0x00`: none
- `0x01`: left  (00000001)
- `0x02`: right (00000010)
- `0x03`: both  (00000011)

Up to eight motors are addresible individually.

## Strength
An integer from 0 to 255 indicating the strength of the vibration.
Might not scale linearly to ensure the motors actually output a haptic signal

## Duration
An integer from 0 to 65535 depicting the duration in milliseconds.