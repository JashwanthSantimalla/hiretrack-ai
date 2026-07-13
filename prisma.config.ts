import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  // Prisma CLI (migrate, studio, introspection) needs a direct connection,
  // not the pooled one the app uses at runtime. See lib/db/prisma.ts for
  // the runtime client, which uses DATABASE_URL (pooled) via the adapter.
  datasource: {
    url: env("DIRECT_URL"),
  },
});