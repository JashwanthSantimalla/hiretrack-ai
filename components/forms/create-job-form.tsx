"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import {
  createJobAction,
  type CreateJobState,
} from "@/actions/job";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const initialState: CreateJobState = {
  success: false,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
    type="submit"
    disabled={pending}
    size="sm"
    className="w-full md:w-auto px-8"
>
      {pending ? "Creating Job..." : "Create Job"}
    </Button>
  );
}

export function CreateJobForm() {
  const [state, formAction] = useActionState(
    createJobAction,
    initialState
  );

  return (
    <form action={formAction} className="space-y-6">

      {/* Job Title */}

      <div className="space-y-2">
        <Label className="text-sm font-medium" htmlFor="title">
          Job Title
        </Label>

        <Input
          id="title"
          name="title"
          placeholder="Frontend Developer"
        />

        {state.errors.title && (
          <p className="text-sm text-destructive">
            {state.errors.title}
          </p>
        )}
      </div>

      {/* Department */}

      <div className="space-y-2">
        <Label className="text-sm font-medium" htmlFor="department">
          Department
        </Label>

        <Input
          id="department"
          name="department"
          placeholder="Engineering"
        />

        {state.errors.department && (
          <p className="text-sm text-destructive">
            {state.errors.department}
          </p>
        )}
      </div>

      {/* Employment + Workplace */}

      <div className="grid gap-4 md:grid-cols-2">

        <div className="space-y-2">
          <Label className="text-sm font-medium" >Employment Type</Label>

          <Select name="employmentType">
            <SelectTrigger>
              <SelectValue placeholder="Select employment type" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="FULL_TIME">Full Time</SelectItem>
              <SelectItem value="PART_TIME">Part Time</SelectItem>
              <SelectItem value="CONTRACT">Contract</SelectItem>
              <SelectItem value="INTERNSHIP">Internship</SelectItem>
            </SelectContent>
          </Select>

          {state.errors.employmentType && (
            <p className="text-sm text-destructive">
              {state.errors.employmentType}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium" >
            Workplace Type
          </Label>

          <Select name="workplaceType">
            <SelectTrigger>
              <SelectValue placeholder="Select workplace type" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="ONSITE">Onsite</SelectItem>
              <SelectItem value="HYBRID">Hybrid</SelectItem>
              <SelectItem value="REMOTE">Remote</SelectItem>
            </SelectContent>
          </Select>

          {state.errors.workplaceType && (
            <p className="text-sm text-destructive">
              {state.errors.workplaceType}
            </p>
          )}
        </div>

      </div>

      {/* Location */}

      <div className="space-y-2">
        <Label className="text-sm font-medium" htmlFor="location">Location</Label>

        <Input
          id="location"
          name="location"
          placeholder="Bangalore"
        />

        {state.errors.location && (
          <p className="text-sm text-destructive">
            {state.errors.location}
          </p>
        )}
      </div>

      {/* Experience */}

      <div className="grid gap-4 md:grid-cols-2">

        <div className="space-y-2">
          <Label className="text-sm font-medium" >
            Experience Level
          </Label>

          <Select name="experienceLevel">
            <SelectTrigger>
              <SelectValue placeholder="Select level" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="FRESHER">Fresher</SelectItem>
              <SelectItem value="JUNIOR">Junior</SelectItem>
              <SelectItem value="MID">Mid</SelectItem>
              <SelectItem value="SENIOR">Senior</SelectItem>
              <SelectItem value="LEAD">Lead</SelectItem>
            </SelectContent>
          </Select>

          {state.errors.experienceLevel && (
            <p className="text-sm text-destructive">
              {state.errors.experienceLevel}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium" htmlFor="minimumExperience">
            Minimum Experience (Years)
          </Label>

          <Input
            id="minimumExperience"
            name="minimumExperience"
            type="number"
            min={0}
          />

          {state.errors.minimumExperience && (
            <p className="text-sm text-destructive">
              {state.errors.minimumExperience}
            </p>
          )}
        </div>

      </div>

      {/* Salary */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="space-y-2">
          <Label className="text-sm font-medium" htmlFor="salaryMin">
            Minimum Salary
          </Label>

          <Input
            id="salaryMin"
            name="salaryMin"
            type="number"
            min={0}
          />

          {state.errors.salaryMin && (
            <p className="text-sm text-destructive">
              {state.errors.salaryMin}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium" htmlFor="salaryMax">
            Maximum Salary
          </Label>

          <Input
            id="salaryMax"
            name="salaryMax"
            type="number"
            min={0}
          />

          {state.errors.salaryMax && (
            <p className="text-sm text-destructive">
              {state.errors.salaryMax}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium" >
            Currency
          </Label>

          <Select name="currency">
            <SelectTrigger>
              <SelectValue placeholder="Currency" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="INR">INR</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="GBP">GBP</SelectItem>
            </SelectContent>
          </Select>

          {state.errors.currency && (
            <p className="text-sm text-destructive">
              {state.errors.currency}
            </p>
          )}
        </div>

      </div>

            {/* Openings + Deadline */}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label className="text-sm font-medium" htmlFor="openings">
            Openings
          </Label>

          <Input
            id="openings"
            name="openings"
            type="number"
            min={1}
            defaultValue={1}
          />

          {state.errors.openings && (
            <p className="text-sm text-destructive">
              {state.errors.openings}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium" htmlFor="applicationDeadline">
            Application Deadline
          </Label>

          <Input
            id="applicationDeadline"
            name="applicationDeadline"
            type="date"
          />

          {state.errors.applicationDeadline && (
            <p className="text-sm text-destructive">
              {state.errors.applicationDeadline}
            </p>
          )}
        </div>
      </div>

      {/* Job Description */}

      <div className="space-y-2">
        <Label className="text-sm font-medium" htmlFor="description">
          Job Description
        </Label>

        <Textarea
          id="description"
          name="description"
          rows={6}
          placeholder="Describe the role, responsibilities, technologies, expectations..."
        />

        {state.errors.description && (
          <p className="text-sm text-destructive">
            {state.errors.description}
          </p>
        )}
      </div>

      {/* Required Skills */}

      <div className="space-y-2">
        <Label className="text-sm font-medium" htmlFor="requiredSkills">
          Required Skills
        </Label>

        <Textarea
          id="requiredSkills"
          name="requiredSkills"
          rows={3}
          placeholder="React, Next.js, TypeScript, PostgreSQL..."
        />

        {state.errors.requiredSkills && (
          <p className="text-sm text-destructive">
            {state.errors.requiredSkills}
          </p>
        )}
      </div>

      {/* Preferred Skills */}

      <div className="space-y-2">
        <Label className="text-sm font-medium" htmlFor="preferredSkills">
          Preferred Skills
        </Label>

        <Textarea
          id="preferredSkills"
          name="preferredSkills"
          rows={3}
          placeholder="Docker, AWS, Kubernetes..."
        />

        {state.errors.preferredSkills && (
          <p className="text-sm text-destructive">
            {state.errors.preferredSkills}
          </p>
        )}
      </div>

      {/* Qualification */}

      <div className="space-y-2">
        <Label className="text-sm font-medium" htmlFor="minimumQualification">
          Minimum Qualification
        </Label>

        <Input
          id="minimumQualification"
          name="minimumQualification"
          placeholder="Bachelor's Degree in Computer Science"
        />

        {state.errors.minimumQualification && (
          <p className="text-sm text-destructive">
            {state.errors.minimumQualification}
          </p>
        )}
      </div>

      {/* Status */}

      <div className="space-y-2">
        <Label className="text-sm font-medium" >
          Status
        </Label>

        <Select
          name="status"
          defaultValue="DRAFT"
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="DRAFT">
              Draft
            </SelectItem>

            <SelectItem value="OPEN">
              Open
            </SelectItem>

            <SelectItem value="CLOSED">
              Closed
            </SelectItem>
          </SelectContent>
        </Select>

        {state.errors.status && (
          <p className="text-sm text-destructive">
            {state.errors.status}
          </p>
        )}
      </div>

      {state.errors.form && (
        <p className="text-sm text-destructive">
          {state.errors.form}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}