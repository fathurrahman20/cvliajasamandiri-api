import { z } from "@hono/zod-openapi";

export const CreateFaqSchema = z.object({
  question: z.string().openapi({
    description: "Question",
    example: "Apa saja syarat yang dibutuhkan?",
  }),
  answer: z.string().openapi({
    description: "Answer",
    example:
      "Syarat dan ketentuan rental mobil bergantung pada jenis layanan yang Anda pilih. Untuk penyewaan mobil dengan sopir, Anda perlu mengirimkan foto KTP penyewa, informasi titik jemput dan tujuan, serta melakukan pembayaran di muka sebelum pelayanan dimulai. Detail lengkapnya bisa dilihat pada bagian",
  }),
});

export type CreateFaq = z.infer<typeof CreateFaqSchema>;

export const UpdateFaqSchema = z.object({
  id: z.number(),
  question: z.string().openapi({
    description: "Question",
    example: "Apa saja syarat yang dibutuhkan?",
  }),
  answer: z.string().openapi({
    description: "Answer",
    example:
      "Syarat dan ketentuan rental mobil bergantung pada jenis layanan yang Anda pilih. Untuk penyewaan mobil dengan sopir, Anda perlu mengirimkan foto KTP penyewa, informasi titik jemput dan tujuan, serta melakukan pembayaran di muka sebelum pelayanan dimulai. Detail lengkapnya bisa dilihat pada bagian",
  }),
});

export type UpdateFaq = z.infer<typeof UpdateFaqSchema>;
