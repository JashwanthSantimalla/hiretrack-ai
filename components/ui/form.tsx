"use client";

import {
  FormProvider,
  useFormContext,
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

export const Form = FormProvider;

export function FormField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>(props: ControllerProps<TFieldValues, TName>) {
  return <Controller {...props} />;
}

export function FormError({
  name,
}: {
  name: string;
}) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  if (!error) return null;

  return (
    <p className="mt-1 text-sm text-destructive">
      {String(error.message)}
    </p>
  );
}