import { z } from "@hono/zod-openapi";

export const CreateBrandSchema = z.object({
  name: z.string().openapi({
    description: "Brand Name",
    example: "Toyota",
  }),
});

export type CreateBrand = z.infer<typeof CreateBrandSchema>;

export const UpdateBrandSchema = z.object({
  id: z.number(),
  name: z.string().optional().openapi({
    description: "Brand Name",
    example: "Toyota",
  }),
});

export type UpdateBrand = z.infer<typeof UpdateBrandSchema>;
