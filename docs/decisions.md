# Project Decisions

This document records major product, architectural, and design decisions made during the development of HireTrack AI.

Each decision captures **what was decided**, **why it was decided**, and **its long-term impact**.

---

# Decision 001

## Title

Project Direction

## Date

13 July 2026

## Decision

HireTrack AI will be developed as an AI-powered Applicant Tracking System (ATS) rather than a public job marketplace.

## Rationale

The product focuses on improving the internal recruitment workflow after applications have already been received.

Applications originate from external platforms such as:

- LinkedIn
- Indeed
- Internshala
- Company Career Pages
- Referrals

HireTrack AI begins where those platforms end.

## Consequences

Primary users are:

- Recruiters
- Hiring Managers
- HR Administrators

Candidates are not authenticated users during the MVP.

---

# Decision 002

## Title

Technology Stack

## Date

13 July 2026

## Decision

Use:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Prisma ORM
- Neon PostgreSQL
- Auth.js

## Rationale

The selected stack provides:

- Type safety
- Scalability
- Excellent developer experience
- Strong Next.js integration
- Easy deployment

## Status

Approved

---

# Decision 003

## Title

Candidate Ownership

## Date

13 July 2026

## Decision

Candidates remain independent entities.

Companies access candidates through Applications rather than owning candidate records directly.

## Rationale

A candidate may apply to multiple companies.

Maintaining one candidate profile avoids duplication while preserving application history.

## Consequences

Applications become the central business entity of the system.

---

# Decision 004

## Title

AI Product Strategy

## Date

13 July 2026

## Decision

Artificial Intelligence exists to assist recruiters—not replace them.

## Rationale

The objective is to improve recruiter productivity while keeping hiring decisions under human control.

AI responsibilities include:

- Resume parsing
- Candidate matching
- Skill gap analysis
- Match explanations
- Hiring recommendations

Recruiters always make the final decision.

---

# Decision 005

## Title

Documentation-First Development

## Date

14 July 2026

## Decision

Product and architectural decisions are finalized before implementation begins.

## Rationale

Documentation-first development reduces unnecessary refactoring and keeps implementation aligned with the product vision.

Documentation serves as the project's single source of truth.

---

# Decision 006

## Title

Configuration-Driven UI

## Date

16 July 2026

## Decision

Static product information and navigation should live in configuration files rather than components.

Examples include:

- Product name
- Tagline
- Navigation
- Branding

## Rationale

Separating configuration from UI components improves maintainability and allows branding changes without modifying component logic.

---

# Decision 007

## Title

Application Shell v1

## Date

17 July 2026

## Decision

The application shell was finalized before dashboard development.

The shell consists of:

- AppShell
- Sidebar
- Navbar
- Design Tokens
- Global Styling
- Layout Components

## Rationale

A stable shell provides a consistent foundation for every future feature and page.

Building features before stabilizing navigation and layout would lead to repeated redesign work.

## Finalized Decisions

Branding

- Product Name: HireTrack AI
- Subtitle: AI Recruitment Platform

Layout

- Sidebar Width: 264px
- Navbar Height: 70px
- Search Width: 540px

Sidebar

- Workspace card only
- User profile removed
- Workspace settings separated from user settings

Navbar

- Floating glass appearance
- Global search
- Notifications
- User profile

Visual Design

- Dark-first
- Turquoise accent
- Premium AI-native SaaS style
- Subtle dashboard ambient glow

Status

Shell v1 Frozen

---

# Decision 008

## Title

Dashboard-First Feature Development

## Date

17 July 2026

## Decision

Once the application shell is frozen, development effort shifts toward product functionality rather than further UI redesign.

## Rationale

Additional value now comes from:

- Dashboard
- Jobs
- Candidates
- Applicant Pipeline
- AI Insights
- Interview Management

Future shell refinements should occur only when justified by new product requirements.

---

# Guiding Principles

Every new feature should satisfy at least one of the following:

- Reduce recruiter workload.
- Improve hiring quality.
- Save recruiter time.
- Deliver meaningful AI assistance.
- Maintain a premium user experience.

If a feature does not contribute toward these objectives, it should be reconsidered before implementation.