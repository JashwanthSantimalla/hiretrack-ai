import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db/prisma";

export async function getDashboardData() {
  const session = await auth();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const companyId = session.user.companyId;

  const jobCount = await prisma.job.count({
    where: {
      companyId,
      deletedAt: null,
    },
  });

  return {
    jobCount,
    isFirstTimeUser: jobCount === 0,
  };
}