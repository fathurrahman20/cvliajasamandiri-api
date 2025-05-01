import { prisma } from "@/lib/prisma";
import { LoginUser, RegisterUser } from "./schema";
import { HTTPException } from "hono/http-exception";
import { sign, verify } from "hono/jwt";
import { AppVariables } from "@/middleware/auth-middleware";
import { User } from "@/generated/prisma";

// Register
export const registerUser = async ({
  name,
  email,
  password,
}: RegisterUser): Promise<Partial<User>> => {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new HTTPException(400, {
      message: "User already exists",
    });
  }

  const hashedPassword = await Bun.password.hash(password, {
    algorithm: "bcrypt",
    cost: 10,
  });

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };
};

// Login
export const loginUser = async ({ email, password }: LoginUser) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new HTTPException(401, {
      message: "Email or password is wrong",
    });
  }

  const isPasswordValid = await Bun.password.verify(
    password,
    user.password,
    "bcrypt"
  );

  if (!isPasswordValid) {
    throw new HTTPException(401, {
      message: "Email or password is wrong",
    });
  }

  const accessTokenPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
    tokenOrigin: "/api/auth/login",
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 1 day
  };

  const refreshTokenPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
    tokenOrigin: "/api/auth/login",
    exp: Math.floor(Date.now() / 1000) + 14 * 24 * 60 * 60, // 7 days
  };

  return { accessTokenPayload, refreshTokenPayload };
};

export const generateNewTokens = async (refreshToken: string) => {
  const payload = (await verify(
    refreshToken,
    Bun.env.REFRESH_TOKEN_SECRET!
  )) as AppVariables;
  const { id, name, email } = payload;

  const payloadAccessToken = {
    id,
    name,
    email,
    tokenOrigin: "/auth/refresh",
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 1 day
  };

  const payloadRefreshToken = {
    id,
    name,
    email,
    tokenOrigin: "/auth/refresh",
    exp: Math.floor(Date.now() / 1000) + 7 * 60 * 60 * 24, // 7 day
  };

  const newAccessToken = await sign(
    payloadAccessToken,
    Bun.env.ACCESS_TOKEN_SECRET!
  );
  const newRefreshToken = await sign(
    payloadRefreshToken,
    Bun.env.REFRESH_TOKEN_SECRET!
  );

  return { newAccessToken, newRefreshToken };
};
