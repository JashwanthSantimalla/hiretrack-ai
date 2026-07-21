import { DefaultSession } from "next-auth";
import { UserRole } from "@/lib/db/generated/prisma";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      companyId: string;
      role: UserRole;
    };
  }

  interface User {
    id: string;
    companyId: string;
    role: UserRole;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id: string;
    companyId: string;
    role: UserRole;
  }
}