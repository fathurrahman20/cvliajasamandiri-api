import { API_TAGS } from "@/config";
import { AppVariables, authMiddleware } from "@/middleware/auth-middleware";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  CreateRegulation,
  CreateRegulationSchema,
  UpdateRegulation,
  UpdateRegulationSchema,
} from "./schema";
import {
  createRegulationSection,
  deleteRegulation,
  getAllRegulationSection,
  getRegulationSection,
  updateRegulationSection,
} from "./service";

const regulationSectionRoute = new OpenAPIHono();

// Get all regulation
regulationSectionRoute.openapi(
  {
    method: "get",
    path: "/",
    summary: "Get all regulation section",
    description: "Return all regulation section",
    tags: API_TAGS.REGULATION,
    responses: {
      200: {
        description: "Regulation details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const response = await getAllRegulationSection();

    return c.json({
      success: true,
      message: "get all regulation section successfully",
      data: response,
    });
  }
);

// Get detail regulation
regulationSectionRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    summary: "Get regulation details",
    description:
      "Return the regulation section details by regulation section ID",
    tags: API_TAGS.REGULATION,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Regulation details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      404: { description: "Regulation not found. " },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await getRegulationSection(id);

    return c.json({
      success: true,
      message: "get regulation section successfully",
      data: response,
    });
  }
);

// Create Regulation
regulationSectionRoute.openapi(
  {
    method: "post",
    path: "/",
    summary: "Create Regulation Section",
    description: "Regulation Section on Home Page",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.REGULATION,
    request: {
      body: {
        content: {
          "application/json": {
            schema: CreateRegulationSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Create Regulation Section on Home Page",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(true),
              message: z.string().default("Create regulation successfully"),
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
    const request = (await c.req.json()) as CreateRegulation;

    const response = await createRegulationSection(request);

    return c.json(
      {
        success: true,
        message: "Create Regulation Section Successfully",
        data: response,
      },
      201
    );
  }
);

// update regulation
regulationSectionRoute.openapi(
  {
    method: "patch",
    path: "/{id}",
    summary: "Updates Regulation Section by id.",
    tags: API_TAGS.REGULATION,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    middleware: authMiddleware,
    request: {
      params: z.object({ id: z.string() }),
      body: {
        content: {
          "application/json": {
            schema: z.object({
              description: z.string().optional().openapi({
                description: "Description",
                example:
                  "E-Tilang tanggung jawab Penyewa*Body Lecet : Rp.450.000 /Titik, Rp.600.000 /Panel*Kerusakan Parah, Biaya Full menjadi tanggung Jawab Penyewa (Menanggung sewa harian apabila mobil harus menginap di bengkel)*Kehilangan STNK denda Rp.1.000.000)*Kehilangan Aksesoris (USB, Kartu e-Toll, Charger Car) denda sesuai harga per item*Penambahan Waktu Sewa wajib memberitahukan pihak rental / Admin)*Wajib memberitahu tujuan sewa dan tidak boleh dipindah tangankan, ke pemilik pihak penyewa pertama wajib memberitahu terlebih dahulu.",
              }),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "Regulation Section updated successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const request = (await c.req.json()) as UpdateRegulation;
    request.id = id;

    const response = await updateRegulationSection(request);

    return c.json({
      success: true,
      message: "Update Regulation section successfully",
      data: response,
    });
  }
);

// delete regulation
regulationSectionRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    summary: "Delete Regulation Section by id.",
    tags: API_TAGS.REGULATION,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    middleware: authMiddleware,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Regulation Section deleted successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await deleteRegulation(id);

    return c.json({
      success: true,
      message: "Delete Regulation section successfully",
      data: response,
    });
  }
);

export default regulationSectionRoute;
