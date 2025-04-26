import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import authRoute from "./features/auth/route";
import heroRoute from "./features/hero-section/route";
import bottomRoute from "./features/bottom-section/route";
import footerRoute from "./features/footer/route";
import faqRoute from "./features/faq/route";
import ourAdvantageRoute from "./features/our-advantage/route";
import ourServiceRoute from "./features/our-service/route";
import regulationRoute from "./features/regulation/route";
import requirementWithDriverRoute from "./features/requirement-with-driver/route";
import requirementNoDriverRoute from "./features/requirement-no-driver/route";
import requirementNoteRoute from "./features/requirement-note/route";
import { HTTPException } from "hono/http-exception";
import { ZodError } from "zod";

const app = new OpenAPIHono();

app.use(
  "/*",
  cors({
    origin: [Bun.env.FRONTEND_URL!, Bun.env.BACKEND_URL!],
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(logger());

app.doc("/openapi.json", {
  openapi: "3.1.0",
  info: {
    version: "0.0.1",
    title: "Lia Jasa Mandiri API",
    description: "API for cvliajasamandiri.com",
  },
});

app.get(
  "/",
  Scalar({
    pageTitle: "Lia Jasa Mandiri API",
    theme: "kepler",
    spec: {
      url: "/openapi.json",
    },
  })
);

app.route("/auth", authRoute);
app.route("/hero", heroRoute);
app.route("/bottom", bottomRoute);
app.route("/footer", footerRoute);
app.route("/faq", faqRoute);
app.route("/advantage", ourAdvantageRoute);
app.route("/service", ourServiceRoute);
app.route("/regulation", regulationRoute);
app.route("/requirement-with-driver", requirementWithDriverRoute);
app.route("/requirement-no-driver", requirementNoDriverRoute);
app.route("/requirement-note", requirementNoteRoute);

// Error handling
app.onError(async (err, c) => {
  if (err instanceof HTTPException) {
    c.status(err.status);
    return c.json({
      success: false,
      message: err.message,
    });
  } else if (err instanceof ZodError) {
    c.status(400);
    return c.json({
      success: false,
      message: err,
    });
  } else {
    c.status(500);
    return c.json({
      success: false,
      message: err.message,
    });
  }
});

export default app;
