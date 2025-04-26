import { API_TAGS } from "@/config";
import { AppVariables, authMiddleware } from "@/middleware/auth-middleware";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  CreateWithDriver,
  CreateWithDriverSchema,
  UpdateWithDriver,
  UpdateWithDriverSchema,
} from "./schema";
import {
  createWithDriverSection,
  deleteWithDriver,
  getAllWithDriverSection,
  getWithDriverSection,
  updateWithDriverSection,
} from "./service";

const requirementWithDriverSectionRoute = new OpenAPIHono();

// Get all requirementWithDriver
requirementWithDriverSectionRoute.openapi(
  {
    method: "get",
    path: "/",
    summary: "Get all requirementWithDriver section",
    description: "Return all requirementWithDriver section",
    tags: API_TAGS.REQUIREMENTWITHDRIVER,
    responses: {
      200: {
        description: "WithDriver details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const response = await getAllWithDriverSection();

    return c.json({
      success: true,
      message: "get all requirementWithDriver section successfully",
      data: response,
    });
  }
);

// Get detail requirementWithDriver
requirementWithDriverSectionRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    summary: "Get requirementWithDriver details",
    description:
      "Return the requirementWithDriver section details by requirementWithDriver section ID",
    tags: API_TAGS.REQUIREMENTWITHDRIVER,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "WithDriver details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      404: { description: "WithDriver not found. " },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await getWithDriverSection(id);

    return c.json({
      success: true,
      message: "get requirementWithDriver section successfully",
      data: response,
    });
  }
);

// Create WithDriver
requirementWithDriverSectionRoute.openapi(
  {
    method: "post",
    path: "/",
    summary: "Create WithDriver Section",
    description: "WithDriver Section on Home Page",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.REQUIREMENTWITHDRIVER,
    request: {
      body: {
        content: {
          "application/json": {
            schema: CreateWithDriverSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Create WithDriver Section on Home Page",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(true),
              message: z
                .string()
                .default("Create requirementWithDriver successfully"),
              data: z.object({
                description: z.string(),
              }),
            }),
          },
        },
      },
      400: { description: "Validation error." },
      500: { description: "Failed to login due to a server issue" },
    },
  },
  async (c) => {
    const request = (await c.req.json()) as CreateWithDriver;

    const response = await createWithDriverSection(request);

    return c.json(
      {
        success: true,
        message: "Create WithDriver Section Successfully",
        data: response,
      },
      201
    );
  }
);

// update requirementWithDriver
requirementWithDriverSectionRoute.openapi(
  {
    method: "patch",
    path: "/{id}",
    summary: "Updates WithDriver Section by id.",
    tags: API_TAGS.REQUIREMENTWITHDRIVER,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    middleware: authMiddleware,
    request: {
      params: z.object({ id: z.string() }),
      body: {
        content: {
          "application/json": {
            schema: z.object({
              description: z.string().openapi({
                description: "Description of Requirement With Driver",
                example:
                  "Kirim by WA Foto KTP Penyewa * Menginformasikan titik jemput dan tujuan pelayanan * Payment ditransfer diawal sebelum jalan Pelayanan * Pelayanan setelah 12 jam kerja dikenakan cash overtime driver (Perjam 10% dari harga sewa)",
              }),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "WithDriver Section updated successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const request = (await c.req.json()) as UpdateWithDriver;
    request.id = id;

    const response = await updateWithDriverSection(request);

    return c.json({
      success: true,
      message: "Update WithDriver section successfully",
      data: response,
    });
  }
);

// delete requirementWithDriver
requirementWithDriverSectionRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    summary: "Delete WithDriver Section by id.",
    tags: API_TAGS.REQUIREMENTWITHDRIVER,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    middleware: authMiddleware,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "WithDriver Section deleted successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await deleteWithDriver(id);

    return c.json({
      success: true,
      message: "Delete WithDriver section successfully",
      data: response,
    });
  }
);

export default requirementWithDriverSectionRoute;
