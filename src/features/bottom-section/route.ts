import { API_TAGS } from "@/config";
import { AppVariables, authMiddleware } from "@/middleware/auth-middleware";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  CreateBottom,
  CreateBottomSchema,
  UpdateBottom,
  UpdateBottomSchema,
} from "./schema";
import {
  createBottomSection,
  deleteBottom,
  getAllBottomSection,
  getBottomSection,
  updateBottomSection,
} from "./service";

const bottomSectionRoute = new OpenAPIHono();

// Get all detail bottom
bottomSectionRoute.openapi(
  {
    method: "get",
    path: "/",
    summary: "Get all bottom section",
    description: "Return all bottom section",
    tags: API_TAGS.BOTTOM,
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
    const response = await getAllBottomSection();

    return c.json({
      success: true,
      message: "get all bottom section successfully",
      data: response,
    });
  }
);

// Get detail bottom
bottomSectionRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    summary: "Get bottom details",
    description: "Return the bottom section details by bottom section ID",
    tags: API_TAGS.BOTTOM,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Review details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      404: { description: "Bottom not found. " },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await getBottomSection(id);

    return c.json({
      success: true,
      message: "get bottom section successfully",
      data: response,
    });
  }
);

// Create Bottom
bottomSectionRoute.openapi(
  {
    method: "post",
    path: "/",
    summary: "Create Bottom Section",
    description: "Bottom Section on Home Page",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.BOTTOM,
    request: {
      body: {
        content: {
          "application/json": {
            schema: CreateBottomSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Cretae Bottom Section on Home Page",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(true),
              message: z.string().default("Create bottom successfully"),
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
    const request = (await c.req.json()) as CreateBottom;

    const response = await createBottomSection(request);

    return c.json(
      {
        success: true,
        message: "Create Bottom Section Successfully",
        data: response,
      },
      201
    );
  }
);

// update botton
bottomSectionRoute.openapi(
  {
    method: "patch",
    path: "/{id}",
    summary: "Updates Bottom Section by id.",
    tags: API_TAGS.BOTTOM,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    middleware: authMiddleware,
    request: {
      params: z.object({ id: z.string() }),
      body: {
        content: {
          "application/json": {
            schema: z.object({
              title: z.string().optional().openapi({
                description: "Title",
                example: "Kendarai Milikmu Hari Ini. Berkendara Lebih Cepat.",
              }),
              description: z.string().optional().openapi({
                description: "Description",
                example:
                  "Dapatkan pemesanan instan untuk mengejar apa pun yang sebenarnya ingin Anda capai hari ini, ya.",
              }),
              imageUrl: z.string().optional().openapi({
                description: "Image URL",
                example:
                  "https://res.cloudinary.com/dvepckgno/image/upload/v1738491272/tp286lieijbzthaoggpu.webp",
              }),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "Bottom Section updated successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const request = (await c.req.json()) as UpdateBottom;
    request.id = id;

    const response = await updateBottomSection(request);

    return c.json({
      success: true,
      message: "Update Bottom section successfully",
      data: response,
    });
  }
);

// delete bottom
bottomSectionRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    summary: "Delete Bottom Section by id.",
    tags: API_TAGS.BOTTOM,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    middleware: authMiddleware,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Bottom Section deleted successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await deleteBottom(id);

    return c.json({
      success: true,
      message: "Delete Bottom section successfully",
      data: response,
    });
  }
);

export default bottomSectionRoute;
