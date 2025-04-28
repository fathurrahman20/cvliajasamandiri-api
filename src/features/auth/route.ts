import { API_TAGS } from "@/config";
import { AppVariables, authMiddleware } from "@/middleware/auth-middleware";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import { LoginUserSchema, RegisterUserSchema } from "./schema";
import { generateNewTokens, loginUser, registerUser } from "./service";
import { sign } from "hono/jwt";
import { clearAuthCookies, setAuthCookies } from "@/lib/cookie";
import { User } from "@/generated/prisma";
import { getSignedCookie } from "hono/cookie";
import { HTTPException } from "hono/http-exception";

const authRoute = new OpenAPIHono<{ Variables: AppVariables }>();

// Register User
authRoute.openapi(
  {
    method: "post",
    path: "/register",
    summary: "Register User",
    description:
      "Register a new user by providing required details such as name, email, and password. Returns the newly created user's information upon successful registration.",
    tags: API_TAGS.AUTH,
    request: {
      body: {
        content: {
          "application/json": { schema: RegisterUserSchema },
        },
      },
    },
    responses: {
      201: {
        description: "User registered successfully",
        content: {
          "application/json": {
            schema: z.object({
              id: z.string(),
              name: z.string().default("Fathur"),
              email: z.string().default("fathur@mail.com"),
            }),
          },
        },
      },
      400: { description: "Failed to register user due to invalid input" },
      500: { description: "Failed to register user due to a server issue" },
    },
  },
  async (c) => {
    const result = await registerUser(c.req.valid("json"));
    return c.json(
      {
        success: true,
        message: "Admin registered successfully",
        data: result,
      },
      201
    );
  }
);

// Login
authRoute.openapi(
  {
    method: "post",
    path: "/login",
    summary: "Login User",
    description:
      "Authenticates a user by validating their credentials (email and password). If successful, generates an access token and a refresh token. The access token is short-lived (1 day) and is used for authenticated requests, while the refresh token is long-lived (7 days) and can be used to obtain a new access token. Both tokens are returned as secure HTTP-only cookies.",
    tags: API_TAGS.AUTH,
    request: {
      body: {
        content: {
          "application/json": {
            schema: LoginUserSchema,
          },
        },
      },
    },
    responses: {
      200: {
        description:
          "User logged in successfully. The response includes user details such as ID, name and email.",
        content: {
          "application/json": {
            schema: z.object({
              id: z.string(),
              name: z.string().default("Fathur"),
              email: z.string().default("fathur@mail.com"),
              accessToken: z.string(),
              refreshToken: z.string(),
            }),
          },
        },
      },
      400: { description: "Failed to login because of invalid credentials" },
      500: { description: "Failed to login due to a server issue" },
    },
  },
  async (c) => {
    const { accessTokenPayload, refreshTokenPayload } = await loginUser(
      c.req.valid("json")
    );

    const accessToken = await sign(
      accessTokenPayload,
      Bun.env.ACCESS_TOKEN_SECRET!
    );

    const refreshToken = await sign(
      refreshTokenPayload,
      Bun.env.REFRESH_TOKEN_SECRET!
    );

    await setAuthCookies(c, accessToken, refreshToken, Bun.env.COOKIE_SECRET!);

    return c.json({
      success: true,
      message: "Logged in successfully",
      data: {
        id: accessTokenPayload.id,
        name: accessTokenPayload.name,
        email: accessTokenPayload.email,
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    });
  }
);

// Get Current User
authRoute.openapi(
  {
    method: "get",
    path: "/me",
    summary: "Get current User",
    description:
      "Returns the authenticated user's data, including their ID, name and email. This endpoint requires a valid auth token cookie for authentication.",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.AUTH,
    responses: {
      200: {
        content: {
          "application/json": {
            schema: z.object({
              id: z.string(),
              name: z.string().default("Fathur"),
              email: z.string().default("fathur@mail.com"),
            }),
          },
        },
        description: "Successfully retrieved the authenticated user's data.",
      },
      401: {
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(false),
              message: z.string().default("Unauthorized"),
            }),
          },
        },
        description: "Unauthorized",
      },
      500: {
        description: "Internal server error.",
      },
    },
  },
  async (c) => {
    const user = c.get("user") as User;
    return c.json({
      success: true,
      message: "",
      data: { id: user.id, name: user.name, email: user.email },
    });
  }
);

// Refresh Token
authRoute.openapi(
  {
    method: "get",
    path: "/refresh",
    summary: "Refresh access token",
    description:
      "Generates a new access token using a valid refresh token. This endpoint is used to maintain user sessions without requiring re-authentication. It requires a valid refresh token cookie.",
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.AUTH,
    responses: {
      200: {
        content: {
          "application/json": {
            schema: z.boolean().default(true),
          },
        },
        description:
          "Access token refreshed successfully. New access and refresh tokens have been set in cookies.",
      },
      401: {
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(false),
              message: z.string().default("Unauthorized"),
            }),
          },
        },
        description: "Unauthorized",
      },
      500: {
        description:
          "Internal server error. Failed to register user due to a server issue.",
      },
    },
  },
  async (c) => {
    // Get ref_token from cookie
    const refreshToken = await getSignedCookie(
      c,
      Bun.env.COOKIE_SECRET!,
      "refresh_token"
    );

    if (!refreshToken) {
      throw new HTTPException(401, {
        message: "No refresh token",
      });
    }

    const { newAccessToken, newRefreshToken } = await generateNewTokens(
      refreshToken
    );

    await setAuthCookies(
      c,
      newAccessToken,
      newRefreshToken,
      Bun.env.COOKIE_SECRET!
    );

    return c.json({
      success: true,
      message: "Access token refreshed successfully",
      data: true,
    });
  }
);

// Logout User
authRoute.openapi(
  {
    method: "delete",
    path: "/logout",
    summary: "Log out the current user",
    description:
      "Logs out the current user by clearing the access token and refresh token cookies. This effectively invalidates the user's session, and they will need to log in again to access protected routes.",
    middleware: authMiddleware,
    security: [{ accessTokenCookie: [] }, { refreshTokenCookie: [] }],
    tags: API_TAGS.AUTH,
    responses: {
      200: {
        content: {
          "application/json": {
            schema: z.boolean().default(true),
          },
        },
        description:
          "User logged out successfully. Access and refresh token cookies have been cleared.",
      },
      401: {
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean().default(false),
              message: z.string().default("Unauthorized"),
            }),
          },
        },
        description: "Unauthorized",
      },
      500: {
        description:
          "Internal server error. Failed to register user due to a server issue.",
      },
    },
  },
  async (c) => {
    const accessToken = await getSignedCookie(
      c,
      Bun.env.COOKIE_SECRET!,
      "access_token"
    );
    const refreshToken = await getSignedCookie(
      c,
      Bun.env.COOKIE_SECRET!,
      "refresh_token"
    );

    if (!accessToken || !refreshToken) {
      throw new HTTPException(401, { message: "Unauthorized" });
    }

    clearAuthCookies(c);

    return c.json({
      success: true,
      message: "Logged out successfully",
    });
  }
);

export default authRoute;
