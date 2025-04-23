import { z } from "@hono/zod-openapi";

export const CreateHeroSchema = z.object({
  title: z.string().openapi({
    description: "Title",
    example: "Sewa & Rental Mobil Terbaik di kawasan Cikarang Selatan",
  }),
  description: z.string().openapi({
    description: "Description",
    example:
      "Selamat datang di Lia Jasa Mandiri. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam",
  }),
  imageUrl: z.string().optional().openapi({
    description: "Image URL",
    example:
      "https://res.cloudinary.com/dvepckgno/image/upload/v1738491272/tp286lieijbzthaoggpu.webp",
  }),
});

export type CreateHero = z.infer<typeof CreateHeroSchema>;

export const UpdateHeroSchema = z.object({
  id: z.number(),
  title: z.string().optional().openapi({
    description: "Title",
    example: "Sewa & Rental Mobil Terbaik di kawasan Cikarang Selatan",
  }),
  description: z.string().optional().openapi({
    description: "Description",
    example:
      "Selamat datang di Lia Jasa Mandiri. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam",
  }),
  imageUrl: z.string().optional().openapi({
    description: "Image URL",
    example:
      "https://res.cloudinary.com/dvepckgno/image/upload/v1738491272/tp286lieijbzthaoggpu.webp",
  }),
});

export type UpdateHero = z.infer<typeof UpdateHeroSchema>;
