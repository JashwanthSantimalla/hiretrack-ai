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

const initialState: CreateJobState = {
  success: false,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
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
      <div className="space-y-2">
        <Label htmlFor="title">Job Title</Label>

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

      <div className="space-y-2">
        <Label htmlFor="description">Job Description</Label>

        <Textarea
          id="description"
          name="description"
          placeholder="Describe the role, responsibilities, and required skills..."
        />

        {state.errors.description && (
          <p className="text-sm text-destructive">
            {state.errors.description}
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