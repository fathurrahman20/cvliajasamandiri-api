import { z } from "@hono/zod-openapi";

export const CreateBottomSchema = z.object({
  title: z.string().openapi({
    description: "Title",
    example: "Kendarai Milikmu Hari Ini. Berkendara Lebih Cepat.",
  }),
  description: z.string().openapi({
    description: "Description",
    example:
      "Dapatkan pemesanan instan untuk mengejar apa pun yang sebenarnya ingin Anda capai hari ini, ya.",
  }),
  imageUrl: z.string().optional().openapi({
    description: "Image URL",
    example:
      "https://res.cloudinary.com/dvepckgno/image/upload/v1738491272/tp286lieijbzthaoggpu.webp",
  }),
});

export type CreateBottom = z.infer<typeof CreateBottomSchema>;

export const UpdateBottomSchema = z.object({
  id: z.number(),
  title: z.string().optional().openapi({
    description: "Title",
    example: "Kendarai Milikmu Hari Ini. Berkendara Lebih Cepat.",
  }),
  description: z.string().optional().openapi({
    description: "Description",
    example:
      "Dapatkan pemesanan instan untuk mengejar apa pun yang sebenarnya ingin Anda capai hari ini, ya.",
  }),
  imageUrl: z.string().optional().openapi({
    description: "Image URL",
    example:
      "https://res.cloudinary.com/dvepckgno/image/upload/v1738491272/tp286lieijbzthaoggpu.webp",
  }),
});

export type UpdateBottom = z.infer<typeof UpdateBottomSchema>;
