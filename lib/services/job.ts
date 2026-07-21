import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db/prisma";

import {
  createJobSchema,
  type CreateJobInput,
} from "@/lib/validators/job";

export async function createJob(data: CreateJobInput) {
  const session = await auth();

  console.log("SESSION:", session);
  console.log("USER:", session?.user);
  console.log("USER ID:", session?.user?.id);
  console.log("COMPANY ID:", session?.user?.companyId);

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const validatedData = createJobSchema.parse(data);

  const job = await prisma.job.create({
    data: {
      title: validatedData.title,
      description: validatedData.description,
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
    orderBy: {
      createdAt: "desc",
    },
  });
}