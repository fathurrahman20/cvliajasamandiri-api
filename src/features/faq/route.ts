import { API_TAGS } from "@/config";
import { AppVariables, authMiddleware } from "@/middleware/auth-middleware";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  CreateFaq,
  CreateFaqSchema,
  UpdateFaq,
  UpdateFaqSchema,
} from "./schema";
import {
  createFaqSection,
  deleteFaq,
  getAllFaqSection,
  getFaqSection,
  updateFaqSection,
} from "./service";

const faqSectionRoute = new OpenAPIHono();

// Get all detail faq
faqSectionRoute.openapi(
  {
    method: "get",
    path: "/",
    summary: "Get all faq section",
    description: "Return all faq section",
    tags: API_TAGS.FAQ,
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
    const response = await getAllFaqSection();

    return c.json({
      success: true,
      message: "get all faq section successfully",
      data: response,
    });
  }
);

// Get detail faq
faqSectionRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    summary: "Get faq details",
    description: "Return the faq section details by faq section ID",
    tags: API_TAGS.FAQ,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Review details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      404: { description: "Faq not found. " },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await getFaqSection(id);

    return c.json({
      success: true,
      message: "get faq section successfully",
      data: response,
    });
  }
);

// Create Faq
faqSectionRoute.openapi(
  {
    method: "post",
    path: "/",
    summary: "Create Faq Section",
    description: "Faq Section on Home Page",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.FAQ,
    request: {
      body: {
        content: {
          "application/json": {
            schema: CreateFaqSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Cretae Faq Section on Home Page",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(true),
              message: z.string().default("Create faq successfully"),
              data: z.object({
                id: z.string(),
                question: z.string(),
                answer: z.string(),
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
    const request = (await c.req.json()) as CreateFaq;

    const response = await createFaqSection(request);

    return c.json(
      {
        success: true,
        message: "Create Faq Section Successfully",
        data: response,
      },
      201
    );
  }
);

// Update faq
faqSectionRoute.openapi(
  {
    method: "patch",
    path: "/{id}",
    summary: "Updates Faq Section by id.",
    tags: API_TAGS.FAQ,
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    request: {
      params: z.object({ id: z.string() }),
      body: {
        content: {
          "application/json": {
            schema: z.object({
              question: z.string().openapi({
                description: "Question",
                example: "Apa saja syarat yang dibutuhkan?",
              }),
              answer: z.string().openapi({
                description: "Answer",
                example:
                  "Syarat dan ketentuan rental mobil bergantung pada jenis layanan yang Anda pilih. Untuk penyewaan mobil dengan sopir, Anda perlu mengirimkan foto KTP penyewa, informasi titik jemput dan tujuan, serta melakukan pembayaran di muka sebelum pelayanan dimulai. Detail lengkapnya bisa dilihat pada bagian",
              }),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "Faq Section updated successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const request = (await c.req.json()) as UpdateFaq;
    request.id = id;

    const response = await updateFaqSection(request);

    return c.json({
      success: true,
      message: "Update faq section successfully",
      data: response,
    });
  }
);

// delete faq
faqSectionRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    summary: "Delete Faq Section by id.",
    tags: API_TAGS.FAQ,
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Faq Section deleted successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await deleteFaq(id);

    return c.json({
      success: true,
      message: "Delete Faq section successfully",
      data: response,
    });
  }
);

export default faqSectionRoute;
