# HireTrack AI Design System v1.0

> Last Updated: July 2026

---

# Design Philosophy

HireTrack AI is designed as a premium AI-native SaaS platform for recruiters.

The interface should communicate professionalism, speed, intelligence, and clarity without unnecessary visual complexity.

Every UI decision should reinforce one goal:

> Help recruiters make hiring decisions faster.

The experience is inspired by modern SaaS products such as:

- Linear
- Raycast
- Cursor
- Vercel
- Arc Browser

The product should feel calm, modern, premium, and AI-first.

---

# Core Design Principles

The interface should be:

- Minimal
- Professional
- Premium
- Fast
- Consistent
- AI-first
- Accessible
- Scalable

Design should never distract from the user's workflow.

---

# Theme

Dark-first.

The MVP officially supports a premium dark theme.

A light theme may be introduced in future releases.

---

# Color System

## Background

Primary

```
#09090B
```

Secondary Surface

```
#111417
```

Elevated Surface

```
#171A1D
```

Borders

```
#1F262D
```

---

## Typography

Primary Text

```
#F5F7FA
```

Secondary Text

```
#9DA7B2
```

Muted Text

```
#66707B
```

---

## Brand Accent

Primary

```
#22DDB8
```

Hover

```
#38F0D0
```

Focus

```
#73E8DE
```

---

## Semantic Colors

Success

```
#22C55E
```

Warning

```
#FBBF24
```

Danger

```
#EF4444
```

---

# Layout

Sidebar Width

```
264px
```

Navbar Height

```
70px
```

Search Width

```
540px
```

Content Padding

```
32px
```

---

# Border Radius

Cards

```
16px
```

Buttons

```
12px
```

Inputs

```
12px
```

Avatars

```
Full Rounded
```

---

# Typography

Primary Font

```
Geist Sans
```

Monospace

```
Geist Mono
```

Typography should prioritize readability over decoration.

---

# Icons

Lucide React

Icons should remain simple, lightweight, and visually consistent throughout the application.

---

# Motion

Hover Animation

```
200ms
```

Page Transition

```
250ms
```

Easing

```
ease-out
```

Motion should feel subtle and premium.

---

# Navigation

The application shell consists of:

- Left Sidebar
- Top Navbar
- Main Content Area

The sidebar is the primary navigation.

The navbar provides global actions.

---

# Sidebar

The sidebar contains:

- Brand Identity
- Primary Navigation
- Workspace Card

The sidebar intentionally does not contain the user profile.

The sidebar remains visually stable across the application.

---

# Navbar

The navbar contains:

- Global Search
- Notifications
- User Profile

The navbar should appear lightweight and visually separated from the page content.

---

# Workspace Card

The workspace card represents the current organization.

It is not a user profile.

Future functionality may include:

- Workspace switching
- Billing
- Organization settings

---

# Visual Hierarchy

Attention should naturally flow:

```
Navbar

↓

Dashboard Heading

↓

Primary KPI Cards

↓

Hiring Pipeline

↓

AI Insights

↓

Supporting Information
```

---

# Ambient Lighting

A subtle turquoise ambient glow is used to give depth to the dashboard.

The glow should:

- remain extremely subtle
- never compete with content
- enhance focus rather than decoration

---

# Cards

Cards should use:

- elevated dark surfaces
- thin borders
- generous spacing
- subtle hover effects

Cards should never feel heavy.

---

# Buttons

Primary

Filled turquoise.

Secondary

Dark surface with border.

Hover

Brightness increase with smooth transition.

---

# General Rules

- Black dominates the interface.
- Turquoise guides attention.
- Use whitespace generously.
- Borders should remain subtle.
- Avoid unnecessary gradients.
- Avoid excessive shadows.
- Motion should support usability.
- Every interaction should feel intentional.

---

# Shell Status

Application Shell

```
Version 1.0
```

Status

```
Frozen
```

The application shell is considered complete.

Future work should focus on feature development rather than redesigning the shell.

Design refinements should only occur when supported by new product requirements.