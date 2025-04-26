import { API_TAGS } from "@/config";
import { AppVariables, authMiddleware } from "@/middleware/auth-middleware";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  CreateCompanyAbout,
  CreateCompanyAboutSchema,
  UpdateCompanyAbout,
  UpdateCompanyAboutSchema,
} from "./schema";
import {
  createCompanyAboutSection,
  deleteCompanyAbout,
  getAllCompanyAboutSection,
  getCompanyAboutSection,
  updateCompanyAboutSection,
} from "./service";

const companyAboutSectionRoute = new OpenAPIHono();

// Get all detail companyAbout
companyAboutSectionRoute.openapi(
  {
    method: "get",
    path: "/",
    summary: "Get all companyAbout section",
    description: "Return all companyAbout section",
    tags: API_TAGS.COMPANYABOUT,
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
    const response = await getAllCompanyAboutSection();

    return c.json({
      success: true,
      message: "get all companyAbout section successfully",
      data: response,
    });
  }
);

// Get detail companyAbout
companyAboutSectionRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    summary: "Get companyAbout details",
    description:
      "Return the companyAbout section details by companyAbout section ID",
    tags: API_TAGS.COMPANYABOUT,
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "Review details retrieved sucessfully",
        content: { "application/json": { schema: z.object({}) } },
      },
      404: { description: "CompanyAbout not found. " },
      500: {
        description: "Internal server error.",
      },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await getCompanyAboutSection(id);

    return c.json({
      success: true,
      message: "get companyAbout section successfully",
      data: response,
    });
  }
);

// Create CompanyAbout
companyAboutSectionRoute.openapi(
  {
    method: "post",
    path: "/",
    summary: "Create CompanyAbout Section",
    description: "CompanyAbout Section on Home Page",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.COMPANYABOUT,
    request: {
      body: {
        content: {
          "application/json": {
            schema: CreateCompanyAboutSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Cretae CompanyAbout Section on Home Page",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(true),
              message: z.string().default("Create companyAbout successfully"),
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
    const request = (await c.req.json()) as CreateCompanyAbout;

    const response = await createCompanyAboutSection(request);

    return c.json(
      {
        success: true,
        message: "Create CompanyAbout Section Successfully",
        data: response,
      },
      201
    );
  }
);

// Update companyAbout
companyAboutSectionRoute.openapi(
  {
    method: "patch",
    path: "/{id}",
    summary: "Updates CompanyAbout Section by id.",
    tags: API_TAGS.COMPANYABOUT,
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
        description: "CompanyAbout Section updated successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const request = (await c.req.json()) as UpdateCompanyAbout;
    request.id = id;

    const response = await updateCompanyAboutSection(request);

    return c.json({
      success: true,
      message: "Update companyAbout section successfully",
      data: response,
    });
  }
);

// delete companyAbout
companyAboutSectionRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    summary: "Delete CompanyAbout Section by id.",
    tags: API_TAGS.COMPANYABOUT,
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    request: {
      params: z.object({ id: z.string() }),
    },
    responses: {
      200: {
        description: "CompanyAbout Section deleted successfully",
      },
      400: { description: "Validation error." },
      404: { description: "Review not found." },
      500: { description: "Internal server error. Failed to update a review." },
    },
  },

  async (c) => {
    const id = Number(c.req.param("id"));

    const response = await deleteCompanyAbout(id);

    return c.json({
      success: true,
      message: "Delete CompanyAbout section successfully",
      data: response,
    });
  }
);

export default companyAboutSectionRoute;
