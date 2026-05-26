"use client";
import { registerSchema } from "@/app/schemas/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
export default function Page() {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    await authClient.signUp.email({
      email: data.email,
      name: data.name,
      password: data.password,
    });
  };
  return (
    <div className="flex h-screen w-full items-center justify-center p-6 md:p-10 overflow-hidden">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
              Enter your information below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor="name">Full Name</FieldLabel>
                      <Input
                        aria-invalid={fieldState.invalid}
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        {...field}
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        aria-invalid={fieldState.invalid}
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        {...field}
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <Input
                        aria-invalid={fieldState.invalid}
                        id="password"
                        type="password"
                        {...field}
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <FieldGroup>
                  <Field>
                    <Button type="submit">Create Account</Button>
                    <FieldDescription className="px-6 text-center">
                      Already have an account?{" "}
                      <Link href="/auth/login">Log in</Link>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
