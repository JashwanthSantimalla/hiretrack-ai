# HireTrack AI

> An AI-powered Applicant Tracking System (ATS) built to help recruiters streamline hiring through intelligent resume analysis, applicant tracking, and interview management.

---

## Overview

HireTrack AI is a modern Applicant Tracking System designed for recruiters, hiring managers, and HR teams.

Unlike job portals, HireTrack AI focuses on what happens **after** applications are received. Recruiters can upload resumes, organize candidates, evaluate AI-generated match scores, manage interview pipelines, and make hiring decisions from a single platform.

The project is being developed following professional software engineering practices with an emphasis on documentation, scalability, and maintainability.

---

## Problem Statement

Recruiters often receive hundreds of resumes from platforms like:

- LinkedIn
- Indeed
- Internshala
- Company Career Pages
- Employee Referrals

Reviewing and shortlisting candidates manually is repetitive and time-consuming.

HireTrack AI aims to simplify this process using AI-assisted resume parsing, candidate management, and hiring workflows.

---

## MVP Features

### Recruiter Authentication

- Secure login
- Role-based access
- Company-based data isolation

### Job Management

- Create job openings
- Manage active positions
- Track hiring status

### Resume Management

- Upload PDF resumes
- Resume parsing
- Candidate creation

### Candidate Management

- Candidate profiles
- Application history
- Recruiter notes

### AI Matching

- Resume analysis
- Job matching
- AI-generated recommendations

### Interview Management

- Interview scheduling
- Interview feedback
- Hiring decisions

---

## Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- Next.js App Router
- Prisma ORM

### Database

- PostgreSQL (Neon)

### Authentication

- Auth.js

### AI

- OpenAI API (planned)

### Storage

- Cloud Object Storage (planned)

---

## Project Architecture

```
Recruiter

↓

Dashboard

↓

Job

↓

Resume Upload

↓

AI Resume Parsing

↓

Candidate

↓

Application

↓

Interview

↓

Hiring Decision
```

---

## Core Domain

The application is built around the following entities:

- Company
- User
- Job
- Candidate
- Application
- Resume
- Match Result
- Interview
- Note

---

## Current Progress

### Completed

- Project foundation
- Documentation
- Product architecture
- Domain model
- Prisma database schema
- PostgreSQL integration
- Database migrations

### In Progress

- Authentication
- Dashboard
- Job management

### Planned

- Resume upload
- AI resume matching
- Candidate pipeline
- Interview management
- Analytics

---

## Documentation

Project documentation can be found inside the `docs` directory.

- Project Context
- Requirements
- Architecture
- Domain Model
- Decisions
- Changelog
- Development Plan

---

## Development Philosophy

This project follows a documentation-first approach.

Every major architectural decision is documented before implementation.

The goal is to build HireTrack AI using the same engineering workflow followed by professional software teams.

---

## Roadmap

- ✅ Milestone 0 – Project Setup
- ✅ Milestone 1 – Core Database Schema
- ⏳ Milestone 2 – Authentication
- ⏳ Milestone 3 – Landing Page
- ⏳ Milestone 4 – Dashboard
- ⏳ Milestone 5 – Job Management
- ⏳ Milestone 6 – Resume Upload
- ⏳ Milestone 7 – AI Resume Analysis
- ⏳ Milestone 8 – Candidate Management
- ⏳ Milestone 9 – Interview Management
- ⏳ Milestone 10 – Search & Filters
- ⏳ Milestone 11 – Analytics
- ⏳ Milestone 12 – Production Deployment

---

## Status

🚧 Active Development

This project is currently under active development.

New features are being implemented incrementally following milestone-based development.

---

## License

This project is developed for educational, portfolio, and research purposes.