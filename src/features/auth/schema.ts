import { z } from "@hono/zod-openapi";

export const RegisterUserSchema = z.object({
  email: z.string().email().openapi({
    description: "User's email address",
    example: "example@gmail.com",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters long",
    })
    .openapi({
      description: "Password for the user account",
      example: "examplepassword",
    }),
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .openapi({
      description: "Name of the user",
      example: "Example User",
    }),
});

export type RegisterUser = z.infer<typeof RegisterUserSchema>;

export const LoginUserSchema = z.object({
  email: z.string().email().openapi({
    description: "Full name of the user",
    example: "example",
  }),
  password: z.string().openapi({
    description: "Password for the user account",
    example: "examplepassword",
  }),
});

export type LoginUser = z.infer<typeof LoginUserSchema>;
