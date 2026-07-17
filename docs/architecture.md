# HireTrack AI Architecture

> Last Updated: July 2026

---

# Overview

HireTrack AI is a modern AI-powered Applicant Tracking System (ATS) built using a documentation-first and modular architecture.

The application is designed around a clear separation of responsibilities between the user interface, business logic, data layer, and infrastructure.

The architecture prioritizes:

- Scalability
- Maintainability
- Reusability
- Type Safety
- Developer Experience

---

# Technology Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

## Backend

- Next.js Server Actions
- Route Handlers

## Database

- PostgreSQL
- Prisma ORM
- Neon Serverless Database

## Authentication

- Auth.js v5

## Version Control

- Git
- GitHub

---

# High-Level Architecture

```
Browser

↓

Next.js Application

↓

Server Actions / Route Handlers

↓

Prisma ORM

↓

Neon PostgreSQL
```

---

# Application Layers

```
Presentation Layer

↓

Business Logic

↓

Data Access

↓

Database
```

Each layer has a single responsibility and should not unnecessarily depend on unrelated layers.

---

# UI Architecture

The user interface follows a shell-based architecture.

```
AppShell

├── Sidebar
│   ├── SidebarHeader
│   ├── SidebarNavigation
│   └── SidebarFooter
│
├── Navbar
│
└── Page Content
```

The shell remains persistent while individual pages change inside the content area.

---

# Configuration Layer

Application configuration is separated from UI components.

Configuration includes:

- Product branding
- Navigation
- Future application settings

This allows UI components to remain reusable and presentation-focused.

---

# Styling Architecture

Styling is organized into reusable layers.

```
styles/

├── globals.css
├── tokens.css
├── utilities.css
├── animations.css
└── scrollbar.css
```

Responsibilities:

**tokens.css**

Design tokens including colors, spacing, borders, and semantic values.

**globals.css**

Global application styling and ambient background effects.

**utilities.css**

Reusable utility classes.

**animations.css**

Shared motion and transition definitions.

**scrollbar.css**

Custom scrollbar styling.

---

# Folder Structure

```
app/
components/
config/
docs/
lib/
prisma/
public/
styles/
```

---

# Database Layer

Prisma ORM provides type-safe communication with the PostgreSQL database.

Responsibilities include:

- Database schema
- Migrations
- Type-safe queries
- Relationship management

---

# Authentication Layer

Authentication is handled using Auth.js.

Responsibilities include:

- User authentication
- Session management
- Secure route protection
- Role-based access

---

# Design System

The application uses a centralized design system.

The design system defines:

- Colors
- Typography
- Spacing
- Border radius
- Motion
- Layout
- Component consistency

All UI should follow the documented design system.

---

# Development Workflow

HireTrack AI follows a documentation-first workflow.

The standard development cycle is:

```
Requirements

↓

Planning

↓

Documentation

↓

Architecture

↓

Implementation

↓

Verification

↓

Documentation Update
```

Major implementation should never begin before the relevant documentation has been finalized.

---

# Current Architecture Status

## Completed

- Project foundation
- Documentation system
- Database architecture
- Domain model
- Prisma integration
- Authentication foundation
- Application Shell v1
- Configuration-driven navigation
- Centralized design system

---

## In Progress

- Recruiter Dashboard

---

## Planned

- Job Management
- Candidate Management
- Applicant Pipeline
- AI Resume Parsing
- AI Match Scoring
- Interview Management
- Analytics
- Production Deployment

---

# Architectural Principles

The following principles guide all future development:

- Documentation is the source of truth.
- Prefer composition over duplication.
- Keep components focused on a single responsibility.
- Separate configuration from presentation.
- Prefer reusable solutions over one-off implementations.
- Build features on top of the stable application shell.
- Optimize for long-term maintainability rather than short-term speed.