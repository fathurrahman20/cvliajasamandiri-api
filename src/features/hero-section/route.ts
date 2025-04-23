import { API_TAGS } from "@/config";
import { AppVariables, authMiddleware } from "@/middleware/auth-middleware";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  CreateHero,
  CreateHeroSchema,
  UpdateHero,
  UpdateHeroSchema,
} from "./schema";
import {
  createHeroSection,
  getAllHeroSection,
  getHeroSection,
  updateHeroSection,
} from "./service";

const heroSectionRoute = new OpenAPIHono();

// Get all detail hero
heroSectionRoute.openapi(
  {
    method: "get",
    path: "/",
    summary: "Get all hero section",
    description: "Return all hero section",
    tags: API_TAGS.HERO,
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
    const response = await getAllHeroSection();

    return c.json({
      success: true,
      message: "get all hero section successfully",
      data: response,
    });
  }
);

// Get detail hero
heroSectionRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    summary: "Get hero details",
    description: "Return the hero section details by hero section ID",
    tags: API_TAGS.HERO,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Review details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      404: { description: "Hero not found. " },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await getHeroSection(id);

    return c.json({
      success: true,
      message: "get hero section successfully",
      data: response,
    });
  }
);

// Create Hero
heroSectionRoute.openapi(
  {
    method: "post",
    path: "/",
    summary: "Create Hero Section",
    description: "Hero Section on Home Page",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.HERO,
    request: {
      body: {
        content: {
          "application/json": {
            schema: CreateHeroSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Cretae Hero Section on Home Page",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(true),
              message: z.string().default("Create hero successfully"),
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
    const request = (await c.req.json()) as CreateHero;

    const response = await createHeroSection(request);

    return c.json(
      {
        success: true,
        message: "Create Hero Section Successfully",
        data: response,
      },
      201
    );
  }
);

heroSectionRoute.openapi(
  {
    method: "patch",
    path: "/{id}",
    summary: "Updates Hero Section by id.",
    tags: API_TAGS.HERO,
    security: [{ AuthorizationBearer: [] }],
    middleware: authMiddleware,
    request: {
      params: z.object({ id: z.string() }),
      body: {
        content: {
          "application/json": {
            schema: z.object({
              title: z.string().optional().openapi({
                description: "Title",
                example:
                  "Sewa & Rental Mobil Terbaik di kawasan Cikarang Selatan",
              }),
              description: z.string().optional().openapi({
                description: "Description",
                example:
                  "Selamat datang di Lia Jasa Mandiri. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam",
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
        description: "Hero Section updated successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const request = (await c.req.json()) as UpdateHero;
    request.id = id;

    const response = await updateHeroSection(request);

    return c.json({
      success: true,
      message: "Update hero section successfully",
      data: response,
    });
  }
);

export default heroSectionRoute;
