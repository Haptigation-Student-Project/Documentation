---
title: Pitch
sidebar_position: 1
description: "Here we would like to give you an overview of the entire project."
---

# Pitch

## Overview

Haptigation is a **haptic navigation system** designed to provide turn-by-turn directions through vibration feedback, allowing users to navigate without relying on visual or auditory cues. The system consists of two **vibration wristbands** paired with a mobile application, offering an **intuitive and accessible navigation** solution for bikers, cyclists, visually and hearing impaired persons and other users who need their eyes and ears free for safety-critical tasks while navigating.

**Core Concept:** "Buzz left, go left. Buzz right, go right."

---

## Problem Statement

### Current Navigation Limitations

Modern navigation systems present significant safety challenges in certain contexts:

- **Visual Navigation** requires constant attention to screens, taking eyes away from the road
- **Auditory Navigation** requires hearing capacity, blocking out important environmental sounds
- **Traffic Safety** demands full sensory awareness from of you if you're on the road

### The Critical Gap

Cyclists and bikers, in particular, face a dangerous dilemma: they need navigation guidance while simultaneously requiring complete visual and auditory awareness of their surroundings. Current solutions force users to compromise their safety by diverting attention to screens or blocking environmental sounds with headphones.

Visually and hearing impaired individuals have a special challenge in navigating as well: 

They often require external help, which we can partially provide.

---

## Solution

### Haptic Navigation System

Haptigation provides a third modality for navigation through haptic feedback:

- **Two Vibration Wristbands:** Bilateral system worn on both wrists
- **Mobile Application:** Route planning and navigation engine (running with google maps)
- **Intuitive Feedback:** Simple vibration patterns indicate direction
- **Hands-Free Operation:** No need to look at screens or listen to audio

---

## Target Groups

**Primary Target:** Cyclists and Bikers
- Largest addressable market
- Highest safety risk with traditional navigation
- Strong need for hands-free, eyes-free navigation

**Secondary Target:** Visually or Hearing-Impaired Individuals
- Accessibility solution for navigation challenges
- Alternative sensory modality for guidance

**Tertiary Target:** General Interested Users
- Runners, hikers, and outdoor enthusiasts
- Anyone seeking discrete navigation

---

## Technical Implementation

### System Architecture

The Haptigation system comprises three main components:

1. **Mobile Application**
   - Navigation engine and route calculation
   - Bluetooth communication with wristbands
   - User interface for destination input and settings

2. **Vibration Wristbands (Hardware)**
   - Bilateral wearable devices (left and right wrist)
   - Bluetooth connectivity
   - Vibration motors for haptic feedback
   - Battery power management

3. **Communication Protocol**
   - Real-time position tracking
   - Direction calculation and command transmission
   - Haptic pattern generation

### Functional Requirements

**FR1: Route Navigation**
- The system shall provide turn-by-turn navigation guidance
- The system shall calculate optimal routes based on user preferences
- The system shall support multiple navigation modes (cycling, walking, etc.)

**FR2: Haptic Feedback**
- The system shall deliver directional cues through vibration patterns
- Left wristband vibration shall indicate left turns
- Right wristband vibration shall indicate right turns
- The system shall provide distinct patterns for different navigation events

**FR3: Position Tracking**
- The system shall track user location in real-time via GPS
- The system shall update navigation instructions based on current position
- The system shall detect when users deviate from planned routes

**FR4: User Interface**
- The application shall allow users to input destinations
- The application shall display current route and progress
- The application shall provide manual controls for wristband testing

**FR5: Device Management**
- The system shall pair with two wristbands simultaneously
- The system shall monitor wristband battery levels
- The system shall allow customization

**FR6: Accessibility**
- The system shall provide alternative feedback for users with sensory impairments
- The application interface shall meet accessibility standards
- The system shall support customizable vibration intensities

### Non-Functional Requirements

**NFR1: Usability**
- Vibration patterns shall be intuitive and require minimal learning
- Wristband pairing shall complete within 10 seconds
- The user interface shall be operable with minimal visual attention

**NFR2: Performance**
- Navigation updates shall occur with latency under 500ms
- The system shall maintain stable Bluetooth connection up to 10 meters
- GPS position accuracy shall be within 5 meters under normal conditions

**NFR3: Reliability**
- The system shall maintain 99% uptime during active navigation
- Battery life shall support at least 8 hours of continuous use
- The system shall gracefully handle GPS signal loss

**NFR4: Cost Efficiency**
- Total hardware cost per wristband shall not exceed €25
- The system shall use commodity components where possible
- Manufacturing shall be scalable for mass production

**NFR5: Safety**
- The system shall not distract users from environmental awareness
- Vibration intensity shall be adjustable for comfort
- The system shall provide emergency stop functionality

**NFR6: Portability**
- Wristbands shall be lightweight (under 50g each)
- The system shall be weather-resistant (IP54 rating minimum)
- Wristbands shall be comfortable for extended wear

**NFR7: Maintainability**
- The system architecture shall support modular updates
- The application shall support over-the-air firmware updates
- Code shall follow established design patterns and documentation standards

**NFR8: Scalability**
- The system shall support multiple simultaneous users without infrastructure
- The application shall handle routes of varying complexity efficiently
- The architecture shall accommodate future feature additions

---

## Market Positioning

### Competitive Advantage

Compared to existing solutions like Wayband (Wear Works):

| Feature | Wayband | Haptigation |
|---------|---------|-------------|
| Price | €100+ | Max. €25 per wristband |
| Configuration | Single wristband | Bilateral (two wristbands) |
| Operation | Complex, multi-layered | Simple and intuitive |
| Target Market | Visually impaired only | Multi-segment |

### Unique Selling Points

- **Bilateral System:** Two wristbands provide clearer directional cues
- **Simplicity:** Intuitive operation requiring minimal training
- **Affordability:** We aim to make the product accessible to all social classes
- **Agility:** Small, hands-on team enables rapid iteration and improvement
- **Versatility:** Serves multiple target groups with single solution

---

## Development Status

**Current Stage:** Validating User Feedback from [Menti Surveys](https://www.menti.com/alx5ib81p2uv)

**Future Steps:** Please check out our [Roadmap](https://haptigation-student-project.github.io/Documentation/docs/Organisation/roadmap) for additional infos.

**Team Characteristics:**
- Agile development methodology
- Hands-on technical implementation
- Fast iteration capabilities
- User-centered design approach

---

## Data Usage

We are not interested in harming you in any way.

Therefore we will do everything in our power to secure your data.

If you wish to have your data removed contact us at **haptigation@gmail.com**

We will do so immediately.

If you want more info on how we process your data please see our detailed [Documentation](https://haptigation-student-project.github.io/Documentation/docs/General%20Info/data-usage).

## Contact

For more information about Haptigation feel free to reach out:

**Email:** haptigation@gmail.com

**Newsletter:** Subscribe our Newsletter by leaving your email in our [Menti Surveys](https://www.menti.com/alx5ib81p2uv) or send us a mail confirming interest. 

---

*Last Updated: Dezember 06, 2025*