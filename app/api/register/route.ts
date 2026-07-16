import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { Prisma } from "@/lib/db/generated/prisma/client";
import { prisma } from "@/lib/db/prisma";
import { registerSchema } from "@/lib/validators/register";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate incoming data
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    const {
      fullName,
      companyName,
      email,
      password,
    } = parsed.data;

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          error: "Email already registered.",
        },
        {
          status: 409,
        }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create company + admin user in a single transaction
    const user = await prisma.$transaction(async (tx) => {
      const company = await tx.company.create({
        data: {
          name: companyName,
        },
      });

      return tx.user.create({
        data: {
          name: fullName,
          email,
          password: hashedPassword,
          role: "ADMIN",
          companyId: company.id,
        },
      });
    });

    return NextResponse.json(
      {
        success: true,
        message: "Workspace created successfully.",
        userId: user.id,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        {
          error: "Email already registered.",
        },
        {
          status: 409,
        }
      );
    }

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}