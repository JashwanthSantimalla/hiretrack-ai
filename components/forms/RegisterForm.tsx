"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  type RegisterSchema,
} from "@/lib/validators/register";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterSchema) => {
    console.log(data);
  try {
    setIsLoading(true);

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error || "Something went wrong.");
      return;
    }

    alert("Workspace created successfully!");

    console.log(result);

    form.reset();

    // Later:
    // router.push("/verify-email");
    // or router.push("/dashboard");
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-primary">
            HireTrack AI
          </p>

          {/* Logo placeholder */}
          <div className="h-8 w-8 rounded-md bg-muted" />
        </div>

        <CardTitle className="text-3xl font-bold">
          Create your workspace
        </CardTitle>

        <CardDescription>
          Create your company workspace and start hiring with HireTrack AI.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <Button
            type="button"
            variant="outline"
            className="w-full"
            size="lg"
          >
            Continue with Google
          </Button>

          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">
              OR
            </span>
            <Separator className="flex-1" />
          </div>

          {/* Email */}

          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>

            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              {...form.register("email")}
            />

            {form.formState.errors.email && (
              <p className="text-sm text-red-500">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          {/* Full Name */}

          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>

            <Input
              id="fullName"
              placeholder="John Doe"
              {...form.register("fullName")}
            />

            {form.formState.errors.fullName && (
              <p className="text-sm text-red-500">
                {form.formState.errors.fullName.message}
              </p>
            )}
          </div>

          {/* Company */}

          <div className="space-y-2">
            <Label htmlFor="companyName">
              Company Name
            </Label>

            <Input
              id="companyName"
              placeholder="Acme Inc."
              {...form.register("companyName")}
            />

            {form.formState.errors.companyName && (
              <p className="text-sm text-red-500">
                {form.formState.errors.companyName.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...form.register("password")}
            />

            {form.formState.errors.password && (
              <p className="text-sm text-red-500">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              Confirm Password
            </Label>

            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              {...form.register("confirmPassword")}
            />

            {form.formState.errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {form.formState.errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isLoading}
          >
            {isLoading
              ? "Creating Workspace..."
              : "Create Workspace"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}