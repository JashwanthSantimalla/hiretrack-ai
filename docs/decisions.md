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

---

# Decision 004

## Title

HireTrack AI Product Direction

## Date

13 July 2026

## Decision

HireTrack AI will be developed as an internal Applicant Tracking System (ATS) for recruiters rather than a public job marketplace.

## Rationale

Recruiters receive applications from external platforms such as LinkedIn, Indeed, Internshala, referrals, and company career pages.

HireTrack AI begins managing candidates after applications have been received.

This allows the platform to focus on:

- Applicant Pipeline
- AI Resume Parsing
- AI Candidate Scoring
- Interview Scheduling
- Hiring Workflow

instead of competing with job marketplaces.

## Consequences

- Recruiters are the primary users.
- Companies are tenants within the platform.
- Candidates do not require accounts in the MVP.
- Future versions may introduce a candidate portal if business requirements evolve.

---

# Decision 005

## Title

Candidate Data Ownership

## Date

13 July 2026

## Decision

Candidates are independent entities and do not belong directly to a company.

Companies access candidates through job applications rather than owning candidate records.

## Rationale

A candidate may apply to multiple companies over time.

Keeping candidates independent prevents duplicate records and allows the system to maintain a single candidate profile while preserving company-specific application history.

Applications act as the relationship between a candidate and a company's job opening.

## Consequences

- Candidate records remain reusable.
- Companies only access candidates through applications.
- Duplicate candidate records are minimized.
- The data model better supports future platform expansion.