import { API_TAGS } from "@/config";
import { AppVariables, authMiddleware } from "@/middleware/auth-middleware";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  CreateBrand,
  CreateBrandSchema,
  UpdateBrand,
  UpdateBrandSchema,
} from "./schema";
import {
  createBrandSection,
  deleteBrand,
  getAllBrandSection,
  getBrandSection,
  updateBrandSection,
} from "./service";

const brandSectionRoute = new OpenAPIHono();

// Get all detail brand
brandSectionRoute.openapi(
  {
    method: "get",
    path: "/",
    summary: "Get all brand section",
    description: "Return all brand section",
    tags: API_TAGS.BRAND,
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
    const response = await getAllBrandSection();

    return c.json({
      success: true,
      message: "get all brand section successfully",
      data: response,
    });
  }
);

// Get detail brand
brandSectionRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    summary: "Get brand details",
    description: "Return the brand section details by brand section ID",
    tags: API_TAGS.BRAND,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Review details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      404: { description: "Brand not found. " },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await getBrandSection(id);

    return c.json({
      success: true,
      message: "get brand section successfully",
      data: response,
    });
  }
);

// Create Brand
brandSectionRoute.openapi(
  {
    method: "post",
    path: "/",
    summary: "Create Brand Section",
    description: "Brand Section on Home Page",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.BRAND,
    request: {
      body: {
        content: {
          "application/json": {
            schema: CreateBrandSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Cretae Brand Section on Home Page",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(true),
              message: z.string().default("Create brand successfully"),
              data: z.object({
                id: z.string(),
                title: z.string(),
                description: z.string(),
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
    const request = (await c.req.json()) as CreateBrand;

    const response = await createBrandSection(request);

    return c.json(
      {
        success: true,
        message: "Create Brand Section Successfully",
        data: response,
      },
      201
    );
  }
);

// Update brand
brandSectionRoute.openapi(
  {
    method: "patch",
    path: "/{id}",
    summary: "Updates Brand Section by id.",
    tags: API_TAGS.BRAND,
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    request: {
      params: z.object({ id: z.string() }),
      body: {
        content: {
          "application/json": {
            schema: z.object({
              title: z.string().optional().openapi({
                description: "Title",
                example: "Rental Harian/Mingguan/Bulanan/Pertahun",
              }),
              description: z.string().optional().openapi({
                description: "Description",
                example:
                  "Kami menyediakan layanan rental mobil untuk berbagai keperluan, baik itu untuk perjalanan sehari-hari, liburan, atau kegiatan lainnya. Dengan beragam pilihan mobil dari merek terkemuka, kami memastikan Anda mendapatkan kendaraan yang sesuai dengan kebutuhan dan anggaran Anda.",
              }),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "Brand Section updated successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const request = (await c.req.json()) as UpdateBrand;
    request.id = id;

    const response = await updateBrandSection(request);

    return c.json({
      success: true,
      message: "Update brand section successfully",
      data: response,
    });
  }
);

// delete brand
brandSectionRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    summary: "Delete Brand Section by id.",
    tags: API_TAGS.BRAND,
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Brand Section deleted successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await deleteBrand(id);

    return c.json({
      success: true,
      message: "Delete Brand section successfully",
      data: response,
    });
  }
);

export default brandSectionRoute;
