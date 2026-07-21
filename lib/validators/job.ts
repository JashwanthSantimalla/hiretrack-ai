import { z } from "zod";

export const createJobSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Job title must be at least 3 characters.")
    .max(100, "Job title cannot exceed 100 characters."),

  description: z
    .string()
    .trim()
    .min(20, "Job description must be at least 20 characters.")
    .max(10000, "Job description cannot exceed 10,000 characters."),
});

export type CreateJobInput = z.infer<typeof createJobSchema>;