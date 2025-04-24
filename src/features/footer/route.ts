import { API_TAGS } from "@/config";
import { AppVariables, authMiddleware } from "@/middleware/auth-middleware";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  CreateFooter,
  CreateFooterSchema,
  UpdateFooter,
  UpdateFooterSchema,
} from "./schema";
import {
  createFooterSection,
  deleteFooter,
  getAllFooterSection,
  getFooterSection,
  updateFooterSection,
} from "./service";

const footerSectionRoute = new OpenAPIHono();

// Get all footer
footerSectionRoute.openapi(
  {
    method: "get",
    path: "/",
    summary: "Get all footer section",
    description: "Return all footer section",
    tags: API_TAGS.FOOTER,
    responses: {
      200: {
        description: "Footer details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const response = await getAllFooterSection();

    return c.json({
      success: true,
      message: "get all footer section successfully",
      data: response,
    });
  }
);

// Get detail footer
footerSectionRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    summary: "Get footer details",
    description: "Return the footer section details by footer section ID",
    tags: API_TAGS.FOOTER,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Footer details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      404: { description: "Footer not found. " },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await getFooterSection(id);

    return c.json({
      success: true,
      message: "get footer section successfully",
      data: response,
    });
  }
);

// Create Footer
footerSectionRoute.openapi(
  {
    method: "post",
    path: "/",
    summary: "Create Footer Section",
    description: "Footer Section on Home Page",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.FOOTER,
    request: {
      body: {
        content: {
          "application/json": {
            schema: CreateFooterSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Create Footer Section on Home Page",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(true),
              message: z.string().default("Create footer successfully"),
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
    const request = (await c.req.json()) as CreateFooter;

    const response = await createFooterSection(request);

    return c.json(
      {
        success: true,
        message: "Create Footer Section Successfully",
        data: response,
      },
      201
    );
  }
);

// update footer
footerSectionRoute.openapi(
  {
    method: "patch",
    path: "/{id}",
    summary: "Updates Footer Section by id.",
    tags: API_TAGS.FOOTER,
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
                example: "© 2025 Lia Jasa Mandiri - Solusi Transportasi",
              }),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "Footer Section updated successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const request = (await c.req.json()) as UpdateFooter;
    request.id = id;

    const response = await updateFooterSection(request);

    return c.json({
      success: true,
      message: "Update Footer section successfully",
      data: response,
    });
  }
);

// delete footer
footerSectionRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    summary: "Delete Footer Section by id.",
    tags: API_TAGS.FOOTER,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    middleware: authMiddleware,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Footer Section deleted successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await deleteFooter(id);

    return c.json({
      success: true,
      message: "Delete Footer section successfully",
      data: response,
    });
  }
);

export default footerSectionRoute;
