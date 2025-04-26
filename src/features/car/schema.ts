import { z } from "@hono/zod-openapi";

export const CreateCarSchema = z.object({
  name: z.string().openapi({
    description: "Name of Car",
    example: "All New Avanza",
  }),
  imageId: z.string().openapi({
    description: "Image ID",
    example: "ldajbflsdbfsfv",
  }),
  imageUrl: z.string().openapi({
    description: "Image URL",
    example:
      "https://res.cloudinary.com/dvepckgno/image/upload/v1738491272/tp286lieijbzthaoggpu.webp",
  }),
  brandId: z.number().openapi({
    description: "Brand ID",
    example: 1,
  }),
  priceFullDay: z.number().openapi({
    description: "Price full day",
    example: 250000,
  }),
  priceHalfDay: z.number().optional().openapi({
    description: "Price full day",
    example: 150000,
  }),
  priceFullDayOutCity: z.number().optional().openapi({
    description: "Price full day out city",
    example: 150000,
  }),
  priceHalfDayOutCity: z.number().optional().openapi({
    description: "Price half day out city",
    example: 150000,
  }),
  year: z.number().openapi({
    description: "Year the car was made",
    example: 2024,
  }),
  fuelType: z.string().openapi({
    description: "Fuel of car",
    example: "Bensin",
  }),
  transmission: z.string().openapi({
    description: "Transmission of car",
    example: "Automatic",
  }),
  maxPassengers: z.number().openapi({
    description: "Year the car was made",
    example: 2024,
  }),
  payloadCapacity: z.number().optional().openapi({
    description: "capacity in ton",
    example: 30,
  }),
});

export type CreateCar = z.infer<typeof CreateCarSchema>;

export const UpdateCarSchema = z.object({
  id: z.number(),
  name: z.string().optional().openapi({
    description: "Name of Car",
    example: "All New Avanza",
  }),
  imageId: z.string().optional().openapi({
    description: "Image ID",
    example: "ldajbflsdbfsfv",
  }),
  imageUrl: z.string().optional().openapi({
    description: "Image URL",
    example:
      "https://res.cloudinary.com/dvepckgno/image/upload/v1738491272/tp286lieijbzthaoggpu.webp",
  }),
  brandId: z.number().optional().openapi({
    description: "Brand ID",
    example: 1,
  }),
  priceFullDay: z.number().optional().openapi({
    description: "Price full day",
    example: 250000,
  }),
  priceHalfDay: z.number().optional().optional().openapi({
    description: "Price full day",
    example: 150000,
  }),
  priceFullDayOutCity: z.number().optional().optional().openapi({
    description: "Price full day out city",
    example: 150000,
  }),
  priceHalfDayOutCity: z.number().optional().optional().openapi({
    description: "Price half day out city",
    example: 150000,
  }),
  year: z.number().optional().openapi({
    description: "Year the car was made",
    example: 2024,
  }),
  fuelType: z.string().optional().openapi({
    description: "Fuel of car",
    example: "Bensin",
  }),
  transmission: z.string().optional().openapi({
    description: "Transmission of car",
    example: "Automatic",
  }),
  maxPassengers: z.number().optional().openapi({
    description: "Year the car was made",
    example: 2024,
  }),
  payloadCapacity: z.number().optional().openapi({
    description: "capacity in ton",
    example: 30,
  }),
});

export type UpdateCar = z.infer<typeof UpdateCarSchema>;
