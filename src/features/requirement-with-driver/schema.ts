import { z } from "@hono/zod-openapi";

export const CreateWithDriverSchema = z.object({
  description: z.string().openapi({
    description: "Description of Requirement With Driver",
    example:
      "Kirim by WA Foto KTP Penyewa * Menginformasikan titik jemput dan tujuan pelayanan * Payment ditransfer diawal sebelum jalan Pelayanan * Pelayanan setelah 12 jam kerja dikenakan cash overtime driver (Perjam 10% dari harga sewa)",
  }),
});

export type CreateWithDriver = z.infer<typeof CreateWithDriverSchema>;

export const UpdateWithDriverSchema = z.object({
  id: z.number(),
  description: z.string().optional().openapi({
    description: "Description of Requirement With Driver",
    example:
      "Kirim by WA Foto KTP Penyewa * Menginformasikan titik jemput dan tujuan pelayanan * Payment ditransfer diawal sebelum jalan Pelayanan * Pelayanan setelah 12 jam kerja dikenakan cash overtime driver (Perjam 10% dari harga sewa)",
  }),
});

export type UpdateWithDriver = z.infer<typeof UpdateWithDriverSchema>;
