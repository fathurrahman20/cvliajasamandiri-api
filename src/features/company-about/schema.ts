import { z } from "@hono/zod-openapi";

export const CreateCompanyAboutSchema = z.object({
  description: z.string().openapi({
    description: "Description",
    example:
      "CV Lia Jasa Mandiri adalah perusahaan rental mobil yang beroperasi sejak tahun 2021. Sebagai perusahaan yang telah berpengalaman dalam industri layanan transportasi, Lia Jasa Mandiri telah memperoleh reputasi sebagai penyedia layanan rental mobil yang terpercaya, handal, dan berkualitas. Kami berkomitmen untuk memberikan pengalaman berkendara yang aman, nyaman, dan menyenangkan bagi setiap pelanggan kami. Dengan layanan yang terus ditingkatkan dan armada mobil yang terawat dengan baik, Lia Jasa Mandiri siap menghadirkan solusi mobilitas yang terpercaya bagi pelanggan di area Bekasi. CV Lia Jasa Mandiri juga telah resmi terdaftar dan diakui oleh pemerintah melalui Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia dengan nomor AHU-0012312-AH.01.14 Tahun 2021. Ini adalah bukti komitmen kami untuk menjalankan bisnis secara transparan, profesional, dan sesuai dengan peraturan yang berlaku.",
  }),
  imageUrl: z.string().optional().openapi({
    description: "Image URL",
    example:
      "https://res.cloudinary.com/dvepckgno/image/upload/v1738491272/tp286lieijbzthaoggpu.webp",
  }),
  vision: z.string().openapi({
    description: "Vision",
    example:
      "Menjadi Perusahaan Rental Mobil Terbaik Dengan Mengedepankan Kualitas Pelayanan dan Kepercayaan Pelanggan",
  }),
  mission: z.string().openapi({
    description: "Mision",
    example:
      "Menjadi mitra yang baik, bertanggung jawab dan dapat dipercaya * Memberikan pelayanan prima dengan unit terbaru dan menyesuaikan kebutuhan customer * Jasa rental dengan pelayanan berkualitas",
  }),
  address: z.string().openapi({
    description: "Address",
    example:
      "Perum. TCI 2 Blk. E6 No.12, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530",
  }),
  phone: z.string().openapi({
    description: "Phone Number",
    example: "081234567890",
  }),
  email: z.string().openapi({
    description: "Email",
    example: "cvliajasamandiri@gmail.com | liarentcar@gmail.com",
  }),
  website: z.string().openapi({
    description: "Website URL",
    example: "www.cvliajasamandiri.com",
  }),
});

export type CreateCompanyAbout = z.infer<typeof CreateCompanyAboutSchema>;

export const UpdateCompanyAboutSchema = z.object({
  id: z.number(),
  description: z.string().optional().openapi({
    description: "Description",
    example:
      "CV Lia Jasa Mandiri adalah perusahaan rental mobil yang beroperasi sejak tahun 2021. Sebagai perusahaan yang telah berpengalaman dalam industri layanan transportasi, Lia Jasa Mandiri telah memperoleh reputasi sebagai penyedia layanan rental mobil yang terpercaya, handal, dan berkualitas. Kami berkomitmen untuk memberikan pengalaman berkendara yang aman, nyaman, dan menyenangkan bagi setiap pelanggan kami. Dengan layanan yang terus ditingkatkan dan armada mobil yang terawat dengan baik, Lia Jasa Mandiri siap menghadirkan solusi mobilitas yang terpercaya bagi pelanggan di area Bekasi. CV Lia Jasa Mandiri juga telah resmi terdaftar dan diakui oleh pemerintah melalui Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia dengan nomor AHU-0012312-AH.01.14 Tahun 2021. Ini adalah bukti komitmen kami untuk menjalankan bisnis secara transparan, profesional, dan sesuai dengan peraturan yang berlaku.",
  }),
  imageUrl: z.string().optional().openapi({
    description: "Image URL",
    example:
      "https://res.cloudinary.com/dvepckgno/image/upload/v1738491272/tp286lieijbzthaoggpu.webp",
  }),
  vision: z.string().optional().openapi({
    description: "Vision",
    example:
      "Menjadi Perusahaan Rental Mobil Terbaik Dengan Mengedepankan Kualitas Pelayanan dan Kepercayaan Pelanggan",
  }),
  mission: z.string().optional().openapi({
    description: "Mission",
    example:
      "Menjadi mitra yang baik, bertanggung jawab dan dapat dipercaya * Memberikan pelayanan prima dengan unit terbaru dan menyesuaikan kebutuhan customer * Jasa rental dengan pelayanan berkualitas",
  }),
  address: z.string().optional().openapi({
    description: "Address",
    example:
      "Perum. TCI 2 Blk. E6 No.12, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530",
  }),
  phone: z.string().optional().openapi({
    description: "Phone Number",
    example: "081234567890",
  }),
  email: z.string().optional().openapi({
    description: "Email",
    example: "cvliajasamandiri@gmail.com | liarentcar@gmail.com",
  }),
  website: z.string().optional().openapi({
    description: "Website URL",
    example: "www.cvliajasamandiri.com",
  }),
});

export type UpdateCompanyAbout = z.infer<typeof UpdateCompanyAboutSchema>;
