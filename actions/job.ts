"use server";

import { revalidatePath } from "next/cache";

import { createJob } from "@/lib/services/job";
import { createJobSchema } from "@/lib/validators/job";

export interface CreateJobState {
  success: boolean;
  errors: {
    title?: string;
    department?: string;
    employmentType?: string;
    workplaceType?: string;
    location?: string;
    experienceLevel?: string;
    minimumExperience?: string;
    salaryMin?: string;
    salaryMax?: string;
    currency?: string;
    openings?: string;
    applicationDeadline?: string;
    description?: string;
    requiredSkills?: string;
    preferredSkills?: string;
    minimumQualification?: string;
    status?: string;
    form?: string;
  };
}

export async function createJobAction(
  _previousState: CreateJobState,
  formData: FormData
): Promise<CreateJobState> {
  const parsed = createJobSchema.safeParse({
    title: formData.get("title"),
    department: formData.get("department"),
    employmentType: formData.get("employmentType"),
    workplaceType: formData.get("workplaceType"),
    location: formData.get("location"),
    experienceLevel: formData.get("experienceLevel"),
    minimumExperience: formData.get("minimumExperience"),
    salaryMin: formData.get("salaryMin"),
    salaryMax: formData.get("salaryMax"),
    currency: formData.get("currency"),
    openings: formData.get("openings"),
    applicationDeadline: formData.get("applicationDeadline"),
    description: formData.get("description"),
    requiredSkills: formData.get("requiredSkills"),
    preferredSkills: formData.get("preferredSkills"),
    minimumQualification: formData.get("minimumQualification"),
    status: formData.get("status"),
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;

    return {
      success: false,
      errors: {
        title: fieldErrors.title?.[0],
        department: fieldErrors.department?.[0],
        employmentType: fieldErrors.employmentType?.[0],
        workplaceType: fieldErrors.workplaceType?.[0],
        location: fieldErrors.location?.[0],
        experienceLevel: fieldErrors.experienceLevel?.[0],
        minimumExperience: fieldErrors.minimumExperience?.[0],
        salaryMin: fieldErrors.salaryMin?.[0],
        salaryMax: fieldErrors.salaryMax?.[0],
        currency: fieldErrors.currency?.[0],
        openings: fieldErrors.openings?.[0],
        applicationDeadline: fieldErrors.applicationDeadline?.[0],
        description: fieldErrors.description?.[0],
        requiredSkills: fieldErrors.requiredSkills?.[0],
        preferredSkills: fieldErrors.preferredSkills?.[0],
        minimumQualification: fieldErrors.minimumQualification?.[0],
        status: fieldErrors.status?.[0],
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