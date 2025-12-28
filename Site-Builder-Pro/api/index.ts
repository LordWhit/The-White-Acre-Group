import express from "express";
import { registerRoutes } from "../server/routes";   // Fixed path
import { serveStatic } from "../server/static";       // Fixed path
import type { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();

app.set("trust proxy", true);

app.use(
  express.json({
    verify: (req: any, _res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(express.urlencoded({ extended: false }));

// Logging middleware (exactly as in your original)
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      console.log(logLine);
    }
  });

  next();
});

// Main setup
(async () => {
  // Fake httpServer for registerRoutes (in case it uses WebSockets)
  const fakeHttpServer = { on: () => {}, addListener: () => {} } as any;

  await registerRoutes(fakeHttpServer, app);

  // Global error handler
  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  // Serve the built React files from dist
  serveStatic(app);

  // Critical fallback: serve index.html for all non-API routes (React Router)
  app.get("*", (req, res) => {
    res.sendFile("index.html", {
      root: "dist",
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  });
})();

// Vercel serverless function handler
export default function handler(req: VercelRequest, res: VercelResponse) {
  app(req, res);
}