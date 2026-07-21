"use server";

import { revalidatePath } from "next/cache";

import { createJob } from "@/lib/services/job";
import { createJobSchema } from "@/lib/validators/job";

export interface CreateJobState {
  success: boolean;
  errors: {
    title?: string;
    description?: string;
    form?: string;
  };
}

export async function createJobAction(
  _previousState: CreateJobState,
  formData: FormData
): Promise<CreateJobState> {
  const parsed = createJobSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;

    return {
      success: false,
      errors: {
        title: fieldErrors.title?.[0],
        description: fieldErrors.description?.[0],
      },
    };
  }

  try {
    await createJob(parsed.data);

    revalidatePath("/dashboard");
    revalidatePath("/jobs");

    return {
      success: true,
      errors: {},
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      errors: {
        form: "Something went wrong while creating the job.",
      },
    };
  }
}