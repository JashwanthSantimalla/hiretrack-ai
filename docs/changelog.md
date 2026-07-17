# Changelog

All significant changes made during the development of HireTrack AI are recorded in this document.

---

# Milestone 0 — Project Initialization

Date:
13 July 2026

## Added

- Initialized HireTrack AI repository
- Installed project dependencies
- Added Prisma ORM
- Created Prisma configuration
- Created Prisma schema
- Connected Neon PostgreSQL database
- Generated Prisma Client
- Configured environment variables
- Verified local development server
- Connected GitHub repository

## Commands Executed

```bash
npm install

npm run db:generate

npm run lint

npm run dev

git add .

git commit -m "Milestone 0: Set up Prisma with Neon"

git push
```

## Verification

- Prisma Client generated successfully
- Database connection established
- Next.js development server running
- Changes pushed to GitHub

Status:
Completed

# Changelog

## Milestone 1 – Core Database Schema (2026-07-15)

### Added
- Designed and implemented the core HireTrack AI database schema using Prisma ORM.
- Added Company, User, Job, Candidate, Application, Resume, MatchResult, Note, and Interview models.
- Implemented role-based access with UserRole enum.
- Added application pipeline workflow using PipelineStatus.
- Added interview scheduling models and enums.
- Implemented relationships between all core entities.
- Added database indexes for commonly queried fields.
- Added soft-delete support for Company, Job, and Candidate models.

### Database
- Generated Prisma Client successfully.
- Created and applied the initial database migration (`milestone-1-core-schema`).
- Successfully validated the schema and synchronized it with the Neon PostgreSQL database.

### Documentation
- Updated architecture documentation.
- Updated domain model documentation.
- Finalized business rules for the MVP.
- Documented candidate-company ownership and recruitment workflow.

## Milestone 2 – Authentication Foundation (2026-07-15)

### Added
- Installed Auth.js v5 with Prisma Adapter.
- Added authentication models (`Account`, `Session`, `VerificationToken`) to the Prisma schema.
- Extended the `User` model for Auth.js compatibility (`image`, `emailVerified`).
- Created and applied the `milestone_2_auth` Prisma migration.
- Added `lib/auth.ts` and `lib/auth.config.ts`.
- Configured the Auth.js API route at `app/api/auth/[...nextauth]/route.ts`.
- Generated and configured `AUTH_SECRET`.

### Verified
- Prisma schema formats and validates successfully.
- Authentication migration applied successfully.
- `/api/auth/session` endpoint returns `null` when unauthenticated, confirming Auth.js is correctly configured.

---

# Milestone 3 – Application Shell v1 (2026-07-17)

## Added

### Layout

- Built the reusable `AppShell` layout component.
- Implemented a persistent application shell with Sidebar, Navbar, and content area.
- Established the layout foundation for all authenticated pages.

### Sidebar

- Built a modular sidebar architecture consisting of:
  - SidebarHeader
  - SidebarNavigation
  - SidebarFooter
- Moved branding into a centralized configuration file.
- Implemented configuration-driven navigation.
- Added a dedicated workspace card.
- Removed the user profile from the sidebar to separate workspace and personal settings.

### Navbar

- Implemented a floating glass navbar.
- Added a centered global search bar.
- Added notification actions.
- Added the authenticated user profile section.

### Styling

- Introduced a centralized design token system.
- Added reusable animation utilities.
- Added reusable utility classes.
- Added custom scrollbar styling.
- Added a subtle ambient dashboard glow to improve depth while maintaining a clean interface.

### Design

- Finalized the HireTrack AI visual identity.
- Updated product subtitle to **AI Recruitment Platform**.
- Standardized spacing, sizing, and navigation hierarchy.
- Refined sidebar density and workspace card proportions.
- Finalized the premium dark-first design language.

### Documentation

- Updated:
  - Architecture
  - Design System
  - Project Decisions

## Status

Application Shell v1

**Completed**

The application shell is now considered stable and frozen.

Future development will focus on implementing product features rather than redesigning the application shell.