import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

// Prisma 7 requires a driver adapter — there is no built-in engine.
// We use the pooled connection string here (DATABASE_URL); the CLI
// uses the direct connection (DIRECT_URL) separately, via prisma.config.ts.
const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// Reuse the client across Next.js dev hot-reloads to avoid exhausting
// the connection pool — each `new PrismaClient()` opens a new pool.
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}