import { z } from "@hono/zod-openapi";

export const CreateRequirementNoDriverSchema = z.object({
  title: z.string().openapi({
    description: "Title",
    example: "PRIBADI / PERSEORANGAN",
  }),
  description: z.string().openapi({
    description: "Description",
    example:
      "Minimal Sewa 3 Hari (Hitungan sewa adalah per Day /Cut Off jam 24:00 WIB ) * KTP suami Istri [Berkeluarga] * KK [Kartu keluarga] * Foto Copy Rekening Listrik/Telephone Rumah * PBB [Pajak Bumi dan Bangunan]/Tanda Bukti kepemilikan Rumah * Identitas Pegawai (Id Card Kantor) * Ijazah Terakhir (Minimal SMK / SMA Sederajat) * SIM A * NPWP * Jaminan Motor + STNK /atau uang 10jt atau menyesuaikan Mobil yang disewa [Waktu ambil mobil] * Bersedia disurvei untuk verifikasi data * Foto Dokumen asli wajib di kirim via Email/Whatsapp (Aslinya dibawa /diserahkan sebagai Jaminan)",
  }),
});

export type CreateRequirementNoDriver = z.infer<
  typeof CreateRequirementNoDriverSchema
>;

export const UpdateRequirementNoDriverSchema = z.object({
  id: z.number(),
  title: z.string().openapi({
    description: "Title",
    example: "PRIBADI / PERSEORANGAN",
  }),
  description: z.string().optional().openapi({
    description: "Description",
    example:
      "Minimal Sewa 3 Hari (Hitungan sewa adalah per Day /Cut Off jam 24:00 WIB ) * KTP suami Istri [Berkeluarga] * KK [Kartu keluarga] * Foto Copy Rekening Listrik/Telephone Rumah * PBB [Pajak Bumi dan Bangunan]/Tanda Bukti kepemilikan Rumah * Identitas Pegawai (Id Card Kantor) * Ijazah Terakhir (Minimal SMK / SMA Sederajat) * SIM A * NPWP * Jaminan Motor + STNK /atau uang 10jt atau menyesuaikan Mobil yang disewa [Waktu ambil mobil] * Bersedia disurvei untuk verifikasi data * Foto Dokumen asli wajib di kirim via Email/Whatsapp (Aslinya dibawa /diserahkan sebagai Jaminan)",
  }),
});

export type UpdateRequirementNoDriver = z.infer<
  typeof UpdateRequirementNoDriverSchema
>;
