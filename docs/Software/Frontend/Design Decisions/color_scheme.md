---
title: Color Scheme
description: Documentation on the color scheme design decision
hide_table_of_contents: false
sidebar_position: 2
---

# Color Scheme

This document describes the color system used in the application, including design goals, theme structure, color roles, and implementation guidelines.  
The color scheme is designed to provide **clarity, accessibility, and visual consistency** across both light and dark modes while reinforcing the product’s navigation-focused identity.

---

## Design Goals

The color system was created with the following principles:

- **Consistency** — unified visual language across all screens
- **Accessibility** — sufficient contrast for readability
- **Theme Awareness** — seamless switching between light and dark mode
- **Hierarchy** — clear distinction between primary actions, content, and background
- **Brand Identity** — modern navigation-inspired gradients and cool tones

---

## Theme Modes

The application supports two themes:

### Light Mode
Optimized for daytime usage and high ambient light environments.

Characteristics:
- Bright neutral backgrounds
- Soft contrast between surfaces
- Dark text for readability
- Subtle shadows and elevation

#### Example – Light Mode

![Light Mode](/img/profile_lightmode.png)

### Dark Mode
Optimized for low-light environments and reduced eye strain.

Characteristics:
- Deep background tones
- Reduced glare
- Elevated elements through color instead of shadow
- Muted secondary colors

#### Example – Dark Mode

![Dark Mode](/img/profile_darkmode.png)
---

## Core Color Roles

Instead of assigning colors directly to UI elements, the system uses **semantic color roles**.

### Primary

Used for branding and key UI highlights.

**Usage**
- Header gradients
- Device cards
- Active navigation indicators
- Primary accents

#### Example – Primary Gradient Usage

![Primary Gradient](/img/onboarding.png)
---

### Background

Defines layout structure.

| Role | Light Mode | Dark Mode | Usage |
|------|------------|-----------|-------|
| `backgroundPrimary` | Light gray | Near black | App background |
| `backgroundSecondary` | White | Dark surface | Cards & panels |
| `backgroundElevated` | Slight tint | Soft contrast surface | Navigation bars |

---

### Text Colors

Text colors adapt automatically to theme contrast.

| Role | Purpose |
|------|---------|
| `textPrimary` | Main readable content |
| `textSecondary` | Supporting information |
| `textMuted` | Metadata and labels |

Guideline:
- Never use pure black or pure white.
- Use semantic tokens to maintain accessibility.

---

### Status Colors

Used sparingly for system feedback.

| Status | Meaning |
|--------|---------|
| Success | Connected / good signal |
| Warning | Attention required |
| Error | Failure or disconnection |
| Info | Neutral system feedback |

Status colors must always meet contrast requirements.

---

## Gradient Usage

Gradients are a defining visual element of the app.

### Primary Gradient

Used on:
- Device information cards
- Highlighted containers
- Key visual surfaces

Design intent:
- Suggest motion and navigation flow
- Provide visual focus without overwhelming the interface

Guidelines:
- Use gradients only for **high-importance components**
- Avoid gradients for backgrounds or long reading areas

---

## Component Application

### Device Card

- Uses primary gradient background
- White or high-contrast text
- Represents an active connected device

Purpose:
- Immediate visual recognition
- Status visibility at a glance

---

### Toggles & Controls

| State | Behavior |
|-------|----------|
| Enabled | Uses accent color |
| Disabled | Neutral gray |
| Background | Matches surface color |

Controls should remain visually subtle unless active.

---

### Navigation Bar

- Uses elevated background color
- Active tab highlighted with accent tone
- Icons remain readable in both themes

---

## Accessibility

Accessibility is a core requirement.

Rules:
- Maintain WCAG contrast ratios where possible
- Avoid color-only communication (combine with icons or text)
- Test components in both themes
- Ensure toggle states are distinguishable without color perception

---

## Implementation Strategy

The color system should be implemented using **design tokens**.

Example structure:
