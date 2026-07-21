import { z } from "zod";

export const createJobSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Job title must be at least 3 characters.")
    .max(100, "Job title cannot exceed 100 characters."),

  department: z
    .string()
    .trim()
    .max(100, "Department cannot exceed 100 characters.")
    .optional(),

  employmentType: z.enum([
    "FULL_TIME",
    "PART_TIME",
    "CONTRACT",
    "INTERNSHIP",
  ]),

  workplaceType: z.enum([
    "ONSITE",
    "HYBRID",
    "REMOTE",
  ]),

  location: z
    .string()
    .trim()
    .max(100, "Location cannot exceed 100 characters.")
    .optional(),

  experienceLevel: z.enum([
    "FRESHER",
    "JUNIOR",
    "MID",
    "SENIOR",
    "LEAD",
  ]),

  minimumExperience: z.coerce
    .number()
    .int()
    .min(0, "Experience cannot be negative."),

  salaryMin: z.coerce
    .number()
    .int()
    .min(0)
    .optional(),

  salaryMax: z.coerce
    .number()
    .int()
    .min(0)
    .optional(),

  currency: z.enum([
    "INR",
    "USD",
    "EUR",
    "GBP",
  ]),

  openings: z.coerce
    .number()
    .int()
    .min(1, "At least one opening is required."),

  applicationDeadline: z
    .string()
    .optional(),

  description: z
    .string()
    .trim()
    .min(20, "Job description must be at least 20 characters.")
    .max(10000, "Job description cannot exceed 10,000 characters."),

  requiredSkills: z
    .string()
    .trim()
    .min(2, "Required skills are required."),

  preferredSkills: z
    .string()
    .trim()
    .optional(),

  minimumQualification: z
    .string()
    .trim()
    .optional(),

  status: z.enum([
    "DRAFT",
    "OPEN",
    "CLOSED",
  ]),
});

export type CreateJobInput = z.infer<typeof createJobSchema>;