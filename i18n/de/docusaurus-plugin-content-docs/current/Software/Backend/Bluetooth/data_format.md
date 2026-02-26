---
title: Bluetooth-Datenformat
description: Informationen darüber, welche Daten wir an den ESP32 senden, um die Vibrationen zu steuern
hide_table_of_contents: false
sidebar_position: 2
---

# Bluetooth-Datenformat

|Byte-Offset|Feld|Typ|Beschreibung|
|---|---|---|---|
|0|ACTION|uint8|Code dafür, was der ESP tun soll|
|1|TARGET|uint8|Bitmaske für Motoren|
|2|STRENGTH|uint8|PWM-Tastverhältnis (0-255)|
|3-4|DURATION|uint16|Zeit in Millisekunden (0-65535)|

Markdown
## Aktionen

- `0x00`bis `0x0F`: Reserviert
- `0x10`: **Fuß** - Reserviert
- `0x11`: **Fuß** - Jetzt abbiegen (Einzelne lange Vibration)
- `0x12`: **Fuß** - 100m (Schnelle Impulse)
- `0x13`: **Fuß** - 300m (Abstandsimpulse)
- `0x14`bis `0x1F`: **Fuß** - Reserviert
- `0x20`: **Radfahren** - Reserviert
- `0x21`: **Radfahren** - Jetzt abbiegen (Einzelne lange Vibration)
- `0x22`: **Radfahren** - 400m (Schnelle Impulse)
- `0x23`: **Radfahren** - 1000m (Abstandsimpulse)
- `0x24`bis `0x2F`: **Fuß** - Reserviert
- `0x30`: **Motorrad** - Reserviert
- `0x31`: **Motorrad** - Jetzt abbiegen (Einzelne lange Vibration)
- `0x32`: **Motorrad** - 1km (Schnelle Impulse)
- `0x33`: **Motorrad** - 3km (Abstandsimpulse)
- `0x34`bis `0x3F`: **Fuß** - Reserviert
- `0x40`: **Dual** - Reserviert
- `0x41`: **Dual** - U-Turn (Gleichzeitig)

Vergleichen Sie Muster [hier](/docs/Hardware/dual-wristband)

## Ziel

- `0x00`: keines
- `0x01`: links  (00000001)
- `0x02`: rechts (00000010)
- `0x03`: beide  (00000011)

Bis zu acht Motoren sind individuell adressierbar.

## Stärke
Eine Ganzzahl von 0 bis 255, die die Stärke der Vibration angibt.
Skaliert möglicherweise nicht linear, um sicherzustellen, dass die Motoren tatsächlich ein haptisches Signal ausgeben

## Dauer
Eine Ganzzahl von 0 bis 65535, die die Dauer in Millisekunden angibt.