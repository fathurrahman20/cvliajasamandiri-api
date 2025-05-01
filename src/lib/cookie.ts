import { Context } from "hono";
import { deleteCookie, setSignedCookie } from "hono/cookie";

const isProduction = Bun.env.NODE_ENV === "production";

export const setAuthCookies = async (
  c: Context,
  accessToken: string,
  refreshToken: string,
  cookieSecret: string
) => {
  await setSignedCookie(c, "access_token", accessToken, cookieSecret, {
    path: "/",
    httpOnly: true,
    maxAge: 24 * 60 * 60, // 1 day in seconds
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day/24 hours
    secure: isProduction, // wajib true di production
    sameSite: isProduction ? "None" : "Lax",
  });

  await setSignedCookie(c, "refresh_token", refreshToken, cookieSecret, {
    path: "/",
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    secure: isProduction, // wajib true di production
    sameSite: isProduction ? "None" : "Lax",
  });
};

export const clearAuthCookies = (c: Context) => {
  deleteCookie(c, "access_token", {
    path: "/",
    httpOnly: true,
  });

  deleteCookie(c, "refresh_token", {
    path: "/",
    httpOnly: true,
  });
};
