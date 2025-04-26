import { z } from "@hono/zod-openapi";

export const CreateRequirementNoteSchema = z.object({
  description: z.string().openapi({
    description: "Description",
    example:
      "Denda 20 Juta apabila dengan sengaja melakukan tindakan Kriminal pemutusan per GPS yang dipasang dalam unit * Mobil keluar bersih kembali bersih (tambahan 50K apabila tidak ada waktu untuk mencuci mobil) * Segala bentuk pelanggaran dan kerusakan yang terjadi ditanggung oleh pihak penyewa * Mobil akan ditarik oleh Kami secara personal langsung apabila tidak digunakan sebagaimana mestinya rental atau dipindahkan tangankan ke Pihak lain yang bukan penyewa",
  }),
});

export type CreateRequirementNote = z.infer<typeof CreateRequirementNoteSchema>;

export const UpdateRequirementNoteSchema = z.object({
  id: z.number(),
  description: z.string().optional().openapi({
    description: "Description",
    example:
      "Denda 20 Juta apabila dengan sengaja melakukan tindakan Kriminal pemutusan per GPS yang dipasang dalam unit * Mobil keluar bersih kembali bersih (tambahan 50K apabila tidak ada waktu untuk mencuci mobil) * Segala bentuk pelanggaran dan kerusakan yang terjadi ditanggung oleh pihak penyewa * Mobil akan ditarik oleh Kami secara personal langsung apabila tidak digunakan sebagaimana mestinya rental atau dipindahkan tangankan ke Pihak lain yang bukan penyewa",
  }),
});

export type UpdateRequirementNote = z.infer<typeof UpdateRequirementNoteSchema>;
