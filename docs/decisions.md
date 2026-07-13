# Project Decisions

## Project Name

**HireTrack AI**

The name represents a modern Applicant Tracking System (ATS) enhanced with Artificial Intelligence to help recruiters make faster and smarter hiring decisions.

---

## Why This Project?

Recruiters often spend hours manually reviewing resumes to identify suitable candidates.

Existing Applicant Tracking Systems help organize applications but still require significant manual effort to compare candidates against job requirements.

HireTrack AI aims to automate the initial screening process by intelligently matching resumes with job descriptions.

---

## Target Audience

Our primary users are:

- Small and Medium-sized Businesses (SMBs)
- Startups
- HR Teams
- Recruiters
- Hiring Managers

These organizations frequently hire talent but may not have access to expensive enterprise recruitment software.

---

## Design Goals

The product should be:

- Simple and intuitive
- Fast and responsive
- Mobile-friendly
- Professional
- Easy to navigate
- Scalable for future growth

---

## Success Criteria

A recruiter should be able to:

1. Create a job opening.
2. Paste a job description.
3. Upload one or more resumes.
4. Instantly view AI-generated Match Scores.
5. Understand why a candidate is a good or poor fit.
6. Shortlist the best candidates within minutes.

---

## AI Strategy

Our AI focuses on solving one core business problem:

**Helping recruiters identify the best candidates for a specific job.**

Instead of acting as a generic resume summarizer, the AI will:

- Extract skills and experience from resumes.
- Understand job requirements from the job description.
- Calculate a Candidate Match Score.
- Highlight missing skills.
- Explain the reasoning behind each score.
- Recommend the most suitable candidates.

Resume summaries will remain a supporting feature rather than the primary focus.

---

## 13 July 2026

### Decision

Use Prisma ORM with Neon PostgreSQL.

### Reason

- Excellent integration with Next.js
- Type-safe database access
- Serverless PostgreSQL
- Suitable free tier
- Easy deployment on Vercel

### Alternatives Considered

- Supabase
- Railway PostgreSQL

### Result

Approved.