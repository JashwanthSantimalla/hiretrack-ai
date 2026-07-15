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

# Domain Model

## Resume Intake Workflow (MVP)

### Supported Input

- PDF Resume Upload

### Workflow

Recruiter Login

↓

Create Job

↓

Upload Resume (PDF)

↓

AI Resume Parsing

↓

Extract Candidate Information

↓

Check for Existing Candidate

↓

Create or Link Candidate

↓

Create Job Application

↓

Generate AI Match Score

↓

Place Candidate in Applicant Pipeline

### Future Extensions

- CSV Import
- Email Integration
- Third-Party Recruitment Platform Integrations

## Company

### Purpose
Represents a customer organization using HireTrack AI to manage its hiring process.

### Business Rules

- A company is the tenant boundary for the application.
- Each company has its own recruiters, jobs, candidates, and hiring data.
- The MVP supports one company per account.
- A company can have multiple users.
- A company can create multiple jobs.
- Users from one company cannot access another company's data.
- All jobs created in the system belong to exactly one company.

### Relationships

Company
├── Users (One-to-Many)
└── Jobs (One-to-Many)

## User

### Purpose

Represents an authenticated employee of a company who uses HireTrack AI to manage the recruitment process.

### Business Rules

- Every user belongs to exactly one company.
- A user cannot belong to multiple companies in the MVP.
- Every user has exactly one role.
- Users authenticate before accessing the platform.
- Users can only access data belonging to their own company.
- Recruiters create and manage jobs.
- Recruiters review candidates and applications.
- Hiring Managers review shortlisted candidates and provide interview feedback.
- Administrators manage company users and system settings.

### Roles

- ADMIN
- RECRUITER
- HIRING_MANAGER

### Relationships

Company
└── Users (One-to-Many)

## Job

### Purpose

Represents an open hiring position created by a company for a specific role.

### Business Rules

- Every job belongs to exactly one company.
- Every job is created by one user.
- A company can create multiple jobs.
- A job can receive multiple applications.
- Jobs progress through their own lifecycle (e.g., Draft, Open, Closed).
- Recruiters manage jobs within their company.
- Jobs are the entry point for candidate applications inside HireTrack AI.

### Relationships

Company
└── Jobs (One-to-Many)

User
└── Jobs (One-to-Many)

Job
└── Applications (One-to-Many)

## Candidate

### Purpose

Represents a person who has applied for one or more job openings managed within HireTrack AI.

### Business Rules

- Candidates do not authenticate into the platform in the MVP.
- Candidates originate from external recruitment channels.
- A candidate may apply to multiple jobs.
- A candidate is represented by a single profile within the system.
- Candidate records are independent of companies.
- Companies access candidates through job applications.
- Candidate information can be updated by recruiters when necessary.

### Relationships

Candidate
└── Applications (One-to-Many)

## Application

### Purpose

Represents a candidate's application for a specific job opening.

The Application is the central entity of HireTrack AI and connects candidates, jobs, resumes, AI analysis, recruiter notes, and interviews into a single recruitment workflow.

### Business Rules

- Every application belongs to exactly one candidate.
- Every application belongs to exactly one job.
- A candidate may apply to multiple jobs.
- A job may receive multiple applications.
- A candidate cannot apply to the same job more than once.
- Every application owns the resume submitted for that specific job.
- Every application progresses through the recruitment pipeline.
- Recruiters interact with applications rather than directly managing candidates.

### Relationships

Application

├── Candidate (Many-to-One)

├── Job (Many-to-One)

├── Resume (One-to-One)

├── AI Match Result (One-to-One)

├── Notes (One-to-Many)

└── Interviews (One-to-Many)