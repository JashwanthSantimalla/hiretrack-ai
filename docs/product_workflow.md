# HireTrack AI Product Workflow

> Version: 1.0
> Status: Frozen
> Last Updated: July 2026

---

# Purpose

This document defines the complete recruiter workflow for Version 1 of HireTrack AI.

Unlike the Architecture document, which describes how the application is built, this document describes how recruiters interact with the platform from the moment they visit the website until a hiring decision is made.

This document serves as the single source of truth for product flow, navigation, and recruiter experience.

Every future feature should fit into this workflow unless an approved product decision changes it.

---

# Product Philosophy

HireTrack AI is an AI-powered Applicant Tracking System (ATS) designed to help recruiters identify the best candidates faster.

Artificial Intelligence assists recruiters by analyzing resumes, matching candidates to job requirements, and generating recommendations.

Artificial Intelligence never makes hiring decisions.

Recruiters remain responsible for every hiring decision.

---

# Primary Users

Version 1 is designed for:

- Recruiters
- Hiring Managers
- HR Administrators

Candidates are not authenticated users during the MVP.

Applications originate from external recruitment platforms such as:

- LinkedIn
- Indeed
- Internshala
- Company Career Page
- Employee Referrals

HireTrack AI begins after applications have already been received.

---

# Complete Product Workflow

Landing Page
        ↓
Sign Up
        ↓
Email Verification
        ↓
Dashboard
        ↓
Create Job
        ↓
Add Job Description
        ↓
Upload Candidate Resumes
        ↓
AI Resume Processing
        ↓
Candidate Classification

        ├── AI Recommended
        ├── Worth Reviewing
        └── Below Recommended Threshold

        ↓

Candidate Profile

        ├── AI Summary
        ├── Resume
        ├── Candidate Details
        ├── Match Score
        ├── Skills
        └── Recruiter Notes

        ↓

Schedule Interview

        ↓

Choose Interviewer

        ├── Myself
        └── Another Employee

        ↓

Interview Type

        ├── Online
        └── Offline

        ↓

Interview Invitation Sent

        ↓

Interview Conducted

        ↓

Interview Feedback Submitted

        ↓

Recruiter Reviews Feedback

        ↓

Final Decision

        ├── Hire
        └── Reject

---

# Workflow Breakdown

## 1. Landing Page

Purpose

Introduce HireTrack AI and encourage organizations to create an account.

Primary Actions

- Learn about product
- Create Workspace
- Login

---

## 2. Sign Up

Purpose

Create a company workspace and administrator account.

Collected Information

- Full Name
- Company Name
- Email
- Password

Result

Workspace is created.

---

## 3. Email Verification

Purpose

Verify account ownership before granting access.

Result

User can access the platform.

---

## 4. Dashboard

Purpose

Provide recruiters with an overview of current hiring activity.

The dashboard acts as the central navigation point for the application.

Recruiters can quickly understand:

- Hiring progress
- Open jobs
- Candidate activity
- Pending interviews
- AI insights

---

## 5. Create Job

Purpose

Create a new hiring position.

Recruiters define:

- Job Title
- Department
- Location
- Employment Type
- Experience Required

---

## 6. Add Job Description

Purpose

Provide the AI with the hiring requirements.

This becomes the reference used for candidate evaluation.

---

## 7. Upload Candidate Resumes

Purpose

Upload one or more candidate resumes.

Supported

- Single PDF
- Multiple PDFs

Each uploaded resume becomes a new application.

---

## 8. AI Resume Processing

Purpose

Analyze every uploaded resume.

Operations include:

- Resume Parsing
- Skill Extraction
- Experience Extraction
- Education Extraction
- Job Description Analysis
- Candidate Matching
- Match Score Generation

---

## 9. Candidate Classification

Purpose

Organize candidates automatically based on AI evaluation.

Categories

### AI Recommended

Candidates who strongly satisfy job requirements.

---

### Worth Reviewing

Candidates with potential but requiring recruiter review.

---

### Below Recommended Threshold

Candidates with significant skill or experience gaps.

Recruiters may still review any candidate.

AI never automatically rejects candidates.

---

## 10. Candidate Profile

Purpose

Provide recruiters with every piece of information required to evaluate a candidate.

Includes

- Resume
- AI Summary
- Match Score
- Skills
- Missing Skills
- Experience
- Education
- Recruiter Notes
- Application Status

Primary Actions

- Add Notes
- Schedule Interview
- Reject Candidate

---

## 11. Schedule Interview

Purpose

Schedule an interview for promising candidates.

Recruiter chooses

- Interviewer
- Date
- Time
- Interview Type

---

## 12. Choose Interviewer

Available Options

- Myself
- Another Employee

Future versions may support interviewer pools.

---

## 13. Interview Type

Supported

- Online
- Offline

Online interviews may later integrate with Google Meet or Microsoft Teams.

---

## 14. Interview Invitation

Purpose

Notify interviewer and candidate.

Future versions may automate invitation emails.

---

## 15. Interview Conducted

Purpose

Interview takes place.

---

## 16. Interview Feedback

Purpose

Record structured interviewer feedback.

May include

- Technical Skills
- Communication
- Problem Solving
- Culture Fit
- Overall Recommendation

---

## 17. Recruiter Review

Purpose

Recruiter reviews interview feedback together with AI analysis before making the final hiring decision.

---

## 18. Final Decision

Available Decisions

- Hire
- Reject

Only recruiters can perform this action.

Artificial Intelligence cannot hire or reject candidates.

---

# Product Principles

The following principles govern every feature inside HireTrack AI.

- AI assists recruiters.
- Recruiters make hiring decisions.
- Every application belongs to exactly one job.
- Every application owns exactly one submitted resume.
- Every workflow should reduce recruiter effort.
- Every workflow should improve hiring quality.
- Simplicity is preferred over unnecessary complexity.
- Features should remain consistent with the Architecture, Requirements, and Design System documents.
- Future features should extend this workflow rather than replace it.

---

# Version 1 Scope

Included

- Authentication
- Dashboard
- Job Creation
- Resume Upload
- AI Screening
- Candidate Classification
- Candidate Profile
- Interview Scheduling
- Interview Feedback
- Hiring Decision

Not Included

- Candidate Portal
- Job Marketplace
- LinkedIn Integration
- Email Automation
- Calendar Integration
- Team Collaboration
- Advanced Analytics

---

# Workflow Status

Version

1.0

Status

Frozen

This workflow defines the approved Version 1 recruiter experience.

Any future changes should be documented before implementation begins.