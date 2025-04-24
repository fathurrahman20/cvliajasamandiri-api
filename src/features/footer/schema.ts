import { z } from "@hono/zod-openapi";

export const CreateFooterSchema = z.object({
  description: z.string().openapi({
    description: "Description",
    example: "© 2025 Lia Jasa Mandiri - Solusi Transportasi",
  }),
});

export type CreateFooter = z.infer<typeof CreateFooterSchema>;

export const UpdateFooterSchema = z.object({
  id: z.number(),
  description: z.string().optional().openapi({
    description: "Description",
    example: "© 2025 Lia Jasa Mandiri - Solusi Transportasi",
  }),
});

export type UpdateFooter = z.infer<typeof UpdateFooterSchema>;
