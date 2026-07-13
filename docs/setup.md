# Local Development Setup

This document describes how to set up HireTrack AI on a new development machine.

---

## Prerequisites

Install the following software before starting:

- Node.js
- npm
- Git
- Visual Studio Code
- Neon Account

---

## Clone Repository

```bash
git clone <repository-url>

cd hiretrack-ai
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file in the project root.

Add the following variables:

```env
DATABASE_URL=

DIRECT_URL=
```

Obtain both connection strings from the Neon dashboard.

---

## Generate Prisma Client

```bash
npm run db:generate
```

---

## Verify Code Quality

```bash
npm run lint
```

---

## Start Development Server

```bash
npm run dev
```

Application URL:

```
http://localhost:3000
```

---

## Verified Environment

Operating System:
Windows

Package Manager:
npm

Database:
Neon PostgreSQL

ORM:
Prisma

Status:
Verified