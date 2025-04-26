import { API_TAGS } from "@/config";
import { AppVariables, authMiddleware } from "@/middleware/auth-middleware";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  CreateCar,
  CreateCarSchema,
  UpdateCar,
  UpdateCarSchema,
} from "./schema";
import {
  createCarSection,
  deleteCar,
  getAllCarSection,
  getCarSection,
  updateCarSection,
} from "./service";

const carSectionRoute = new OpenAPIHono();

// Get all detail car
carSectionRoute.openapi(
  {
    method: "get",
    path: "/",
    summary: "Get all car section",
    description: "Return all car section",
    tags: API_TAGS.CAR,
    responses: {
      200: {
        description: "Car details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const response = await getAllCarSection();

    return c.json({
      success: true,
      message: "get all car section successfully",
      data: response,
    });
  }
);

// Get detail car
carSectionRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    summary: "Get car details",
    description: "Return the car section details by car section ID",
    tags: API_TAGS.CAR,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Car details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      404: { description: "Car not found. " },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await getCarSection(id);

    return c.json({
      success: true,
      message: "get car section successfully",
      data: response,
    });
  }
);

// Create Car
carSectionRoute.openapi(
  {
    method: "post",
    path: "/",
    summary: "Create Car Section",
    description: "Car Section on Home Page",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.CAR,
    request: {
      body: {
        content: {
          "application/json": {
            schema: CreateCarSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Create Car Section on Home Page",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(true),
              message: z.string().default("Create car successfully"),
              data: CreateCarSchema,
            }),
          },
        },
      },
      400: { description: "Failed to login because of invalid credentials" },
      500: { description: "Failed to login due to a server issue" },
    },
  },
  async (c) => {
    const request = (await c.req.json()) as CreateCar;

    const response = await createCarSection(request);

    return c.json(
      {
        success: true,
        message: "Create Car Section Successfully",
        data: response,
      },
      201
    );
  }
);

// Update car
carSectionRoute.openapi(
  {
    method: "patch",
    path: "/{id}",
    summary: "Updates Car Section by id.",
    tags: API_TAGS.CAR,
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    request: {
      params: z.object({ id: z.string() }),
      body: {
        content: {
          "application/json": {
            schema: z.object({
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
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "Car Section updated successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Car not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const request = (await c.req.json()) as UpdateCar;
    request.id = id;

    const response = await updateCarSection(request);

    return c.json({
      success: true,
      message: "Update car section successfully",
      data: response,
    });
  }
);

// delete car
carSectionRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    summary: "Delete Car Section by id.",
    tags: API_TAGS.CAR,
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Car Section deleted successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Car not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await deleteCar(id);

    return c.json({
      success: true,
      message: "Delete Car section successfully",
      data: response,
    });
  }
);

export default carSectionRoute;
