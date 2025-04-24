import { API_TAGS } from "@/config";
import { AppVariables, authMiddleware } from "@/middleware/auth-middleware";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  CreateOurAdvantage,
  CreateOurAdvantageSchema,
  UpdateOurAdvantage,
  UpdateOurAdvantageSchema,
} from "./schema";
import {
  createOurAdvantageSection,
  deleteOurAdvantage,
  getAllOurAdvantageSection,
  getOurAdvantageSection,
  updateOurAdvantageSection,
} from "./service";

const ourAdvantageSectionRoute = new OpenAPIHono();

// Get all detail ourAdvantage
ourAdvantageSectionRoute.openapi(
  {
    method: "get",
    path: "/",
    summary: "Get all ourAdvantage section",
    description: "Return all ourAdvantage section",
    tags: API_TAGS.OURADVANTAGE,
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
    const response = await getAllOurAdvantageSection();

    return c.json({
      success: true,
      message: "get all ourAdvantage section successfully",
      data: response,
    });
  }
);

// Get detail ourAdvantage
ourAdvantageSectionRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    summary: "Get ourAdvantage details",
    description:
      "Return the ourAdvantage section details by ourAdvantage section ID",
    tags: API_TAGS.OURADVANTAGE,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Review details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      404: { description: "OurAdvantage not found. " },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await getOurAdvantageSection(id);

    return c.json({
      success: true,
      message: "get ourAdvantage section successfully",
      data: response,
    });
  }
);

// Create OurAdvantage
ourAdvantageSectionRoute.openapi(
  {
    method: "post",
    path: "/",
    summary: "Create OurAdvantage Section",
    description: "OurAdvantage Section on Home Page",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.OURADVANTAGE,
    request: {
      body: {
        content: {
          "application/json": {
            schema: CreateOurAdvantageSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Cretae OurAdvantage Section on Home Page",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(true),
              message: z.string().default("Create ourAdvantage successfully"),
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
    const request = (await c.req.json()) as CreateOurAdvantage;

    const response = await createOurAdvantageSection(request);

    return c.json(
      {
        success: true,
        message: "Create OurAdvantage Section Successfully",
        data: response,
      },
      201
    );
  }
);

// Update ourAdvantage
ourAdvantageSectionRoute.openapi(
  {
    method: "patch",
    path: "/{id}",
    summary: "Updates OurAdvantage Section by id.",
    tags: API_TAGS.OURADVANTAGE,
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
                example: "Armada Mobil Berkualitas",
              }),
              description: z.string().optional().openapi({
                description: "Description",
                example:
                  "Lia Jasa Mandiri memiliki armada mobil yang terdiri dari berbagai jenis dan merek yang selalu terawat dengan baik. Setiap mobil kami menjalani pemeriksaan rutin dan pemeliharaan berkala untuk memastikan kelaikan berkendara dan keamanan pelanggan.",
              }),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "OurAdvantage Section updated successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const request = (await c.req.json()) as UpdateOurAdvantage;
    request.id = id;

    const response = await updateOurAdvantageSection(request);

    return c.json({
      success: true,
      message: "Update ourAdvantage section successfully",
      data: response,
    });
  }
);

// delete ourAdvantage
ourAdvantageSectionRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    summary: "Delete OurAdvantage Section by id.",
    tags: API_TAGS.OURADVANTAGE,
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "OurAdvantage Section deleted successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await deleteOurAdvantage(id);

    return c.json({
      success: true,
      message: "Delete OurAdvantage section successfully",
      data: response,
    });
  }
);

export default ourAdvantageSectionRoute;
