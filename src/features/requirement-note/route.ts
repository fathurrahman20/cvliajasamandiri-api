import { API_TAGS } from "@/config";
import { AppVariables, authMiddleware } from "@/middleware/auth-middleware";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  CreateRequirementNote,
  CreateRequirementNoteSchema,
  UpdateRequirementNote,
  UpdateRequirementNoteSchema,
} from "./schema";
import {
  createRequirementNoteSection,
  deleteRequirementNote,
  getAllRequirementNoteSection,
  getRequirementNoteSection,
  updateRequirementNoteSection,
} from "./service";

const requirementNoteSectionRoute = new OpenAPIHono();

// Get all requirementNote
requirementNoteSectionRoute.openapi(
  {
    method: "get",
    path: "/",
    summary: "Get all requirementNote section",
    description: "Return all requirementNote section",
    tags: API_TAGS.REQUIREMENTNOTE,
    responses: {
      200: {
        description: "RequirementNote details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const response = await getAllRequirementNoteSection();

    return c.json({
      success: true,
      message: "get all requirementNote section successfully",
      data: response,
    });
  }
);

// Get detail requirementNote
requirementNoteSectionRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    summary: "Get requirementNote details",
    description:
      "Return the requirementNote section details by requirementNote section ID",
    tags: API_TAGS.REQUIREMENTNOTE,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "RequirementNote details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      404: { description: "RequirementNote not found. " },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await getRequirementNoteSection(id);

    return c.json({
      success: true,
      message: "get requirementNote section successfully",
      data: response,
    });
  }
);

// Create RequirementNote
requirementNoteSectionRoute.openapi(
  {
    method: "post",
    path: "/",
    summary: "Create RequirementNote Section",
    description: "RequirementNote Section on Home Page",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.REQUIREMENTNOTE,
    request: {
      body: {
        content: {
          "application/json": {
            schema: CreateRequirementNoteSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Create RequirementNote Section on Home Page",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(true),
              message: z
                .string()
                .default("Create requirementNote successfully"),
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
    const request = (await c.req.json()) as CreateRequirementNote;

    const response = await createRequirementNoteSection(request);

    return c.json(
      {
        success: true,
        message: "Create RequirementNote Section Successfully",
        data: response,
      },
      201
    );
  }
);

// update requirementNote
requirementNoteSectionRoute.openapi(
  {
    method: "patch",
    path: "/{id}",
    summary: "Updates RequirementNote Section by id.",
    tags: API_TAGS.REQUIREMENTNOTE,
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
        description: "RequirementNote Section updated successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const request = (await c.req.json()) as UpdateRequirementNote;
    request.id = id;

    const response = await updateRequirementNoteSection(request);

    return c.json({
      success: true,
      message: "Update RequirementNote section successfully",
      data: response,
    });
  }
);

// delete requirementNote
requirementNoteSectionRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    summary: "Delete RequirementNote Section by id.",
    tags: API_TAGS.REQUIREMENTNOTE,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    middleware: authMiddleware,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "RequirementNote Section deleted successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await deleteRequirementNote(id);

    return c.json({
      success: true,
      message: "Delete RequirementNote section successfully",
      data: response,
    });
  }
);

export default requirementNoteSectionRoute;
