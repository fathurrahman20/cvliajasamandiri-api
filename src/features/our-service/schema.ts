import { z } from "@hono/zod-openapi";

export const CreateOurServiceSchema = z.object({
  title: z.string().openapi({
    description: "Title",
    example: "Rental Harian/Mingguan/Bulanan/Pertahun",
  }),
  description: z.string().openapi({
    description: "Description",
    example:
      "Kami menyediakan layanan rental mobil untuk berbagai keperluan, baik itu untuk perjalanan sehari-hari, liburan, atau kegiatan lainnya. Dengan beragam pilihan mobil dari merek terkemuka, kami memastikan Anda mendapatkan kendaraan yang sesuai dengan kebutuhan dan anggaran Anda.",
  }),
});

export type CreateOurService = z.infer<typeof CreateOurServiceSchema>;

export const UpdateOurServiceSchema = z.object({
  id: z.number(),
  title: z.string().optional().openapi({
    description: "Title",
    example: "Rental Harian/Mingguan/Bulanan/Pertahun",
  }),
  description: z.string().optional().openapi({
    description: "Description",
    example:
      "Kami menyediakan layanan rental mobil untuk berbagai keperluan, baik itu untuk perjalanan sehari-hari, liburan, atau kegiatan lainnya. Dengan beragam pilihan mobil dari merek terkemuka, kami memastikan Anda mendapatkan kendaraan yang sesuai dengan kebutuhan dan anggaran Anda.",
  }),
});

export type UpdateOurService = z.infer<typeof UpdateOurServiceSchema>;
