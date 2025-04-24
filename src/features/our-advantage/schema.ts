import { z } from "@hono/zod-openapi";

export const CreateOurAdvantageSchema = z.object({
  title: z.string().openapi({
    description: "Title",
    example: "Armada Mobil Berkualitas",
  }),
  description: z.string().openapi({
    description: "Description",
    example:
      "Lia Jasa Mandiri memiliki armada mobil yang terdiri dari berbagai jenis dan merek yang selalu terawat dengan baik. Setiap mobil kami menjalani pemeriksaan rutin dan pemeliharaan berkala untuk memastikan kelaikan berkendara dan keamanan pelanggan.",
  }),
});

export type CreateOurAdvantage = z.infer<typeof CreateOurAdvantageSchema>;

export const UpdateOurAdvantageSchema = z.object({
  id: z.number(),
  title: z.string().optional().openapi({
    description: "Title",
    example: "Armada Mobil Berkualitas",
  }),
  description: z.string().optional().openapi({
    description: "Description",
    example:
      "Lia Jasa Mandiri memiliki armada mobil yang terdiri dari berbagai jenis dan merek yang selalu terawat dengan baik. Setiap mobil kami menjalani pemeriksaan rutin dan pemeliharaan berkala untuk memastikan kelaikan berkendara dan keamanan pelanggan.",
  }),
});

export type UpdateOurAdvantage = z.infer<typeof UpdateOurAdvantageSchema>;
