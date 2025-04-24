import { z } from "@hono/zod-openapi";

export const CreateRegulationSchema = z.object({
  description: z.string().openapi({
    description: "Description",
    example:
      "E-Tilang tanggung jawab Penyewa*Body Lecet : Rp.450.000 /Titik, Rp.600.000 /Panel*Kerusakan Parah, Biaya Full menjadi tanggung Jawab Penyewa (Menanggung sewa harian apabila mobil harus menginap di bengkel)*Kehilangan STNK denda Rp.1.000.000)*Kehilangan Aksesoris (USB, Kartu e-Toll, Charger Car) denda sesuai harga per item*Penambahan Waktu Sewa wajib memberitahukan pihak rental / Admin)*Wajib memberitahu tujuan sewa dan tidak boleh dipindah tangankan, ke pemilik pihak penyewa pertama wajib memberitahu terlebih dahulu.",
  }),
});

export type CreateRegulation = z.infer<typeof CreateRegulationSchema>;

export const UpdateRegulationSchema = z.object({
  id: z.number(),
  description: z.string().optional().openapi({
    description: "Description",
    example:
      "E-Tilang tanggung jawab Penyewa*Body Lecet : Rp.450.000 /Titik, Rp.600.000 /Panel*Kerusakan Parah, Biaya Full menjadi tanggung Jawab Penyewa (Menanggung sewa harian apabila mobil harus menginap di bengkel)*Kehilangan STNK denda Rp.1.000.000)*Kehilangan Aksesoris (USB, Kartu e-Toll, Charger Car) denda sesuai harga per item*Penambahan Waktu Sewa wajib memberitahukan pihak rental / Admin)*Wajib memberitahu tujuan sewa dan tidak boleh dipindah tangankan, ke pemilik pihak penyewa pertama wajib memberitahu terlebih dahulu.",
  }),
});

export type UpdateRegulation = z.infer<typeof UpdateRegulationSchema>;
