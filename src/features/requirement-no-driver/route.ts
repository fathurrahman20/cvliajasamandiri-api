import { API_TAGS } from "@/config";
import { AppVariables, authMiddleware } from "@/middleware/auth-middleware";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  CreateRequirementNoDriver,
  CreateRequirementNoDriverSchema,
  UpdateRequirementNoDriver,
  UpdateRequirementNoDriverSchema,
} from "./schema";
import {
  createRequirementNoDriverSection,
  deleteRequirementNoDriver,
  getAllRequirementNoDriverSection,
  getRequirementNoDriverSection,
  updateRequirementNoDriverSection,
} from "./service";

const requirementNoDriverSectionRoute = new OpenAPIHono();

// Get all detail requirementNoDriver
requirementNoDriverSectionRoute.openapi(
  {
    method: "get",
    path: "/",
    summary: "Get all requirementNoDriver section",
    description: "Return all requirementNoDriver section",
    tags: API_TAGS.REQUIREMENTNODRIVER,
    responses: {
      200: {
        description: "Review details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const response = await getAllRequirementNoDriverSection();

    return c.json({
      success: true,
      message: "get all requirementNoDriver section successfully",
      data: response,
    });
  }
);

// Get detail requirementNoDriver
requirementNoDriverSectionRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    summary: "Get requirementNoDriver details",
    description:
      "Return the requirementNoDriver section details by requirementNoDriver section ID",
    tags: API_TAGS.REQUIREMENTNODRIVER,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Review details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      404: { description: "RequirementNoDriver not found. " },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await getRequirementNoDriverSection(id);

    return c.json({
      success: true,
      message: "get requirementNoDriver section successfully",
      data: response,
    });
  }
);

// Create RequirementNoDriver
requirementNoDriverSectionRoute.openapi(
  {
    method: "post",
    path: "/",
    summary: "Create RequirementNoDriver Section",
    description: "RequirementNoDriver Section on Home Page",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.REQUIREMENTNODRIVER,
    request: {
      body: {
        content: {
          "application/json": {
            schema: CreateRequirementNoDriverSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Cretae RequirementNoDriver Section on Home Page",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(true),
              message: z
                .string()
                .default("Create requirementNoDriver successfully"),
              data: z.object({
                id: z.string(),
                title: z.string(),
                description: z.string(),
                imageUrl: z.string(),
                refreshToken: z.string(),
              }),
            }),
          },
        },
      },
      400: { description: "Failed to login because of invalid credentials" },
      500: { description: "Failed to login due to a server issue" },
    },
  },
  async (c) => {
    const request = (await c.req.json()) as CreateRequirementNoDriver;

    const response = await createRequirementNoDriverSection(request);

    return c.json(
      {
        success: true,
        message: "Create RequirementNoDriver Section Successfully",
        data: response,
      },
      201
    );
  }
);

// Update requirementNoDriver
requirementNoDriverSectionRoute.openapi(
  {
    method: "patch",
    path: "/{id}",
    summary: "Updates RequirementNoDriver Section by id.",
    tags: API_TAGS.REQUIREMENTNODRIVER,
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    request: {
      params: z.object({ id: z.string() }),
      body: {
        content: {
          "application/json": {
            schema: z.object({
              title: z.string().openapi({
                description: "Title",
                example: "PRIBADI / PERSEORANGAN",
              }),
              description: z.string().openapi({
                description: "Description",
                example:
                  "Minimal Sewa 3 Hari (Hitungan sewa adalah per Day /Cut Off jam 24:00 WIB ) * KTP suami Istri [Berkeluarga] * KK [Kartu keluarga] * Foto Copy Rekening Listrik/Telephone Rumah * PBB [Pajak Bumi dan Bangunan]/Tanda Bukti kepemilikan Rumah * Identitas Pegawai (Id Card Kantor) * Ijazah Terakhir (Minimal SMK / SMA Sederajat) * SIM A * NPWP * Jaminan Motor + STNK /atau uang 10jt atau menyesuaikan Mobil yang disewa [Waktu ambil mobil] * Bersedia disurvei untuk verifikasi data * Foto Dokumen asli wajib di kirim via Email/Whatsapp (Aslinya dibawa /diserahkan sebagai Jaminan)",
              }),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "RequirementNoDriver Section updated successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const request = (await c.req.json()) as UpdateRequirementNoDriver;
    request.id = id;

    const response = await updateRequirementNoDriverSection(request);

    return c.json({
      success: true,
      message: "Update requirementNoDriver section successfully",
      data: response,
    });
  }
);

// delete requirementNoDriver
requirementNoDriverSectionRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    summary: "Delete RequirementNoDriver Section by id.",
    tags: API_TAGS.REQUIREMENTNODRIVER,
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "RequirementNoDriver Section deleted successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await deleteRequirementNoDriver(id);

    return c.json({
      success: true,
      message: "Delete RequirementNoDriver section successfully",
      data: response,
    });
  }
);

export default requirementNoDriverSectionRoute;
