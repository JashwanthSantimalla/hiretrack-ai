import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db/prisma";

import {
  createJobSchema,
  type CreateJobInput,
} from "@/lib/validators/job";

export async function createJob(data: CreateJobInput) {
  const session = await auth();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const validatedData = createJobSchema.parse(data);

  const job = await prisma.job.create({
    data: {
      title: validatedData.title,
      department: validatedData.department || null,

      employmentType: validatedData.employmentType,

      workplaceType: validatedData.workplaceType,

      location: validatedData.location || null,

      experienceLevel: validatedData.experienceLevel,

      minimumExperience: validatedData.minimumExperience,

      salaryMin: validatedData.salaryMin ?? null,

      salaryMax: validatedData.salaryMax ?? null,

      currency: validatedData.currency,

      openings: validatedData.openings,

      applicationDeadline: validatedData.applicationDeadline
        ? new Date(validatedData.applicationDeadline)
        : null,

      description: validatedData.description,

      requiredSkills: validatedData.requiredSkills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),

      preferredSkills: validatedData.preferredSkills
        ? validatedData.preferredSkills
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean)
        : [],

      minimumQualification:
        validatedData.minimumQualification || null,

      status: validatedData.status,

      companyId: session.user.companyId,

      createdById: session.user.id,
    },
  });

  return job;
}

export async function getJobs() {
  const session = await auth();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  return prisma.job.findMany({
    where: {
      companyId: session.user.companyId,
      deletedAt: null,
    },

    include: {
      _count: {
        select: {
          applications: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getJobById(id: string) {
  const session = await auth();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  return prisma.job.findFirst({
    where: {
      id,
      companyId: session.user.companyId,
      deletedAt: null,
    },
  });
}