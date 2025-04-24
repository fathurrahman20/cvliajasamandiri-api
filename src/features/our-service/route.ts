import { API_TAGS } from "@/config";
import { AppVariables, authMiddleware } from "@/middleware/auth-middleware";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  CreateOurService,
  CreateOurServiceSchema,
  UpdateOurService,
  UpdateOurServiceSchema,
} from "./schema";
import {
  createOurServiceSection,
  deleteOurService,
  getAllOurServiceSection,
  getOurServiceSection,
  updateOurServiceSection,
} from "./service";

const ourServiceSectionRoute = new OpenAPIHono();

// Get all detail ourService
ourServiceSectionRoute.openapi(
  {
    method: "get",
    path: "/",
    summary: "Get all ourService section",
    description: "Return all ourService section",
    tags: API_TAGS.OURSERVICE,
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
    const response = await getAllOurServiceSection();

    return c.json({
      success: true,
      message: "get all ourService section successfully",
      data: response,
    });
  }
);

// Get detail ourService
ourServiceSectionRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    summary: "Get ourService details",
    description:
      "Return the ourService section details by ourService section ID",
    tags: API_TAGS.OURSERVICE,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Review details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      404: { description: "OurService not found. " },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await getOurServiceSection(id);

    return c.json({
      success: true,
      message: "get ourService section successfully",
      data: response,
    });
  }
);

// Create OurService
ourServiceSectionRoute.openapi(
  {
    method: "post",
    path: "/",
    summary: "Create OurService Section",
    description: "OurService Section on Home Page",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.OURSERVICE,
    request: {
      body: {
        content: {
          "application/json": {
            schema: CreateOurServiceSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Cretae OurService Section on Home Page",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(true),
              message: z.string().default("Create ourService successfully"),
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
    const request = (await c.req.json()) as CreateOurService;

    const response = await createOurServiceSection(request);

    return c.json(
      {
        success: true,
        message: "Create OurService Section Successfully",
        data: response,
      },
      201
    );
  }
);

// Update ourService
ourServiceSectionRoute.openapi(
  {
    method: "patch",
    path: "/{id}",
    summary: "Updates OurService Section by id.",
    tags: API_TAGS.OURSERVICE,
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
        description: "OurService Section updated successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const request = (await c.req.json()) as UpdateOurService;
    request.id = id;

    const response = await updateOurServiceSection(request);

    return c.json({
      success: true,
      message: "Update ourService section successfully",
      data: response,
    });
  }
);

// delete ourService
ourServiceSectionRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    summary: "Delete OurService Section by id.",
    tags: API_TAGS.OURSERVICE,
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "OurService Section deleted successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await deleteOurService(id);

    return c.json({
      success: true,
      message: "Delete OurService section successfully",
      data: response,
    });
  }
);

export default ourServiceSectionRoute;
