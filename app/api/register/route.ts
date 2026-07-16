import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

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

    // Create company + first admin user
    const company = await prisma.company.create({
      data: {
        name: companyName,
      },
    });

    const user = await prisma.user.create({
      data: {
        name: fullName,
        email,
        password: hashedPassword,
        role: "ADMIN",
        companyId: company.id,
      },
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