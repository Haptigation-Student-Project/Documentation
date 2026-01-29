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

## Actions

Will be defined later

- `0x00`: TBD
- `0x01`: TBD
- `0x02`: TBD
- `0x03`: TBD

## Target

- `0x00`: none
- `0x01`: left  (00000001)
- `0x02`: right (00000010)
- `0x03`: both  (00000011)

Up to eight motors are addresible individually

## Strength
An integer from 0 to 255 indicating the strength of the vibration.
Might not scale linearly to ensure the motors actually output a haptic signal

## Duration
An integer from 0 to 65535 depicting the duration in milliseconds.