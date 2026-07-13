# HireTrack AI Architecture

## Overview

HireTrack AI is a full-stack web application designed to help users track job applications, manage resumes, prepare for interviews, and leverage AI-powered career assistance.

The application follows a modern web architecture using Next.js, Prisma ORM, and Neon PostgreSQL.

---

## Technology Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### Backend

- Next.js Server Actions
- Prisma ORM

### Database

- PostgreSQL
- Neon Serverless Database

### Version Control

- Git
- GitHub

---

## Current Architecture

```
Browser
    │
    ▼
Next.js Application
    │
    ▼
Prisma ORM
    │
    ▼
Neon PostgreSQL
```

---

## Folder Structure

```
app/
docs/
lib/
prisma/
public/
```

---

## Database Layer

The application communicates with the PostgreSQL database through Prisma ORM.

Prisma Client is generated from the Prisma schema and provides type-safe database access.

---

## Current Status

Current Milestone:
Milestone 0 — Project Initialization

Status:
Completed

Last Updated:
13 July 2026