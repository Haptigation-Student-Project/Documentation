---
title: Icon Decision
description: Documentation on the icon design decision
hide_table_of_contents: false
sidebar_position: 3
---

# Icon Decision

Icons play an important role in guiding users quickly and intuitively through the application.  
Our goal was to design icons that are **easy to understand, minimalistic, and consistent with our overall color system**.

---

## Design Principles

When defining the icon style, we followed these principles:

- **Clarity first** – Icons must communicate meaning instantly.
- **Minimalism** – Avoid unnecessary details or decorative elements.
- **Consistency** – Use the same stroke width, proportions, and visual weight across all icons.
- **Theme Integration** – Reuse the established color scheme to maintain visual harmony.

Instead of introducing additional strong colors, icons adapt to the existing theme (light and dark mode) and use semantic color roles where appropriate.

---

## Color Usage

Icons follow the same semantic color system as the rest of the UI:

- **Primary/Accent color** → Active or highlighted states  
- **Neutral tones** → Default or inactive states  
- **Status colors** → Feedback such as success or error  

This ensures that icons feel like a natural extension of the interface rather than separate decorative elements.

---

## Example: Bluetooth Connection State

A practical example of our icon decision can be found in the onboarding flow.

### Not Connected State

![Not connected bluetooth](/img/not_connected.png)

This image represents the initial state where the mobile device is **not yet connected via Bluetooth**.  
The icon uses a neutral tone and a visually incomplete interaction to communicate that action is still required.

The user immediately understands:
- The connection has not been established
- Further action is needed before continuing

---

### Connected State

![connected bluetooth](/img/connected.png)

This image represents the successful Bluetooth connection.  
Here, the icon switches to an accent or status color to indicate completion and readiness.

The user immediately understands:
- The device is connected
- The setup step is complete
- They can safely proceed

---

## Why Minimalism?

Minimalistic icons:

- Reduce cognitive load  
- Improve scalability across screen sizes  
- Work better in both light and dark themes  
- Maintain clarity even in small navigation bars  

By avoiding complex illustrations and relying on clean geometric shapes, we ensure that icons remain legible and consistent throughout the application.

---

## Summary

Our icon design is intentionally minimalistic and theme-aware.  
By combining:

- Clear symbolism  
- Limited color usage  
- Semantic color integration  
- Consistent stroke and shape design  

we achieve a clean, modern interface that supports usability without distracting from the core functionality of the app.