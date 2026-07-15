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