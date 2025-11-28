---
title: Pitch
sidebar_position: 1
---

# Pitch

## Goal
### Basic
Enable navigation of real world via haptic feedback through a glove.
### Ultimate
Assist visually impaired people by offering haptic guidance when navigating or using everyday objects.

## Functionality
### Idea

By creating a glove lined with vibration motors, a user is able to receive/interpret different messages based on the haptic feedback given. The glove may be connected via Bluetooth to a Smartphone or operated standalone via voice input, similar to a smart-home assistant.

### Requirements

#### Functional
- Connect to Smartphone via Bluetooth
- Take information from google maps (or other navigation app)
- Send info on direction and distance to next turn via bluetooth
- Vibrate according to recieved data
- How to know if connected?
- Make sure navigation works with phone in pocket

#### Non-functional
- Low-latency: < 500ms from turn instruction to vibration
- Distinct vibration patterns
- Battery life: > 2h
- Fit within glove, do not restrict movement
- Enclosed electronics

## Resources
- ESP32 (or other bluetooth-powered microcontroller) (we already own)
- Vibration Motors (coin)
- (transistors, diodes: for motor operation)
- LiPo Battery with charging circuit
- Android app
