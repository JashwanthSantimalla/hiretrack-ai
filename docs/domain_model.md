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

---

# Core Entities

## Company

### Purpose

Represents a customer organization using HireTrack AI.

### Business Rules

- A company is the tenant boundary.
- A company owns its users and job postings.
- The MVP supports one company per account.
- Users cannot access another company's data.

---

## User

### Purpose

Represents an authenticated employee using HireTrack AI.

### Roles

- Admin
- Recruiter
- Hiring Manager

### Business Rules

- Every user belongs to exactly one company.
- Every user has exactly one role.
- Users authenticate before accessing the platform.
- Recruiters create and manage jobs.
- Hiring Managers review candidates and provide interview feedback.
- Administrators manage company users.

---

## Job

### Purpose

Represents a hiring position created by a company.

### Business Rules

- Every job belongs to one company.
- Every job is created by one user.
- A company can have multiple jobs.
- Jobs receive applications.
- Jobs move through their own lifecycle (Draft, Open, Closed).

---

## Candidate

### Purpose

Represents an individual applying for one or more jobs.

### Business Rules

- Candidates do not authenticate in the MVP.
- Candidates originate from external recruitment platforms.
- A candidate may apply to multiple jobs.
- Candidates are independent entities.
- Candidate records are never identified solely by name.
- Resume uploads drive candidate creation.
- Recruiters decide whether to link a resume to an existing candidate or create a new one.

---

## Application

### Purpose

Represents a candidate's application for a specific job.

This is the central business entity of HireTrack AI.

### Business Rules

- Every application belongs to one candidate.
- Every application belongs to one job.
- A candidate cannot apply to the same job twice.
- Every application owns its submitted resume.
- Every application progresses through the hiring pipeline.
- Recruiters primarily work with applications instead of candidate records.

---

## Resume

### Purpose

Represents the resume submitted for a specific job application.

### Business Rules

- Every resume belongs to exactly one application.
- Every application owns one submitted resume.
- Resume files are stored in object storage.
- The database stores only metadata and the file reference.
- The original resume remains associated with the application for historical accuracy.
- Resume parsing extracts structured candidate information for AI analysis.

---

## AI Match Result

### Purpose

Represents the AI-generated evaluation of a candidate against a specific job.

### Business Rules

- Every AI Match Result belongs to one application.
- An application has at most one current AI Match Result.
- AI analysis is generated after successful resume parsing.
- AI Match Results are recommendations only.
- Recruiters always make the final hiring decisions.

---

## Interview

### Purpose

Represents a scheduled interview associated with an application.

### Business Rules

- Every interview belongs to one application.
- An application may have multiple interviews.
- An interview may be assigned to one interviewer.
- Interviews store scheduling information, status, and recruiter feedback.
- Interview records are independent of the application's pipeline status.

---

## Note

### Purpose

Represents comments, observations, and feedback recorded during the hiring process.

### Business Rules

- Every note belongs to one application.
- Notes may be created by recruiters, hiring managers, or the AI system.
- Notes provide historical context throughout the recruitment process.
- Notes cannot exist without an application.

---

# Entity Relationships

Company
├── Users
└── Jobs

User
├── Company
└── Interviews (Interviewer)

Job
├── Company
└── Applications

Candidate
└── Applications

Application
├── Candidate
├── Job
├── Resume
├── AI Match Result
├── Notes
└── Interviews

Resume
└── Application

AI Match Result
└── Application

Interview
├── Application
└── User (Interviewer)

Note
└── Application

---

# Guiding Principles

The following principles guide all future development of HireTrack AI.

- Business requirements drive technical implementation.
- Documentation is the single source of truth.
- Product decisions are finalized before implementation.
- Simplicity is preferred over unnecessary complexity.
- Features are introduced only when supported by clear business requirements.
- Recruiters remain the primary users of the MVP.
- AI assists decision-making but never replaces recruiter judgment.