import express from "express";
import { registerRoutes } from "../routes";  // Change "../routes" if your routes file is in a different spot (e.g. "../server/routes")
import { serveStatic } from "../static";    // Same — adjust if needed (e.g. "../server/static")
import type { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();

app.set("trust proxy", true);

app.use(express.json({
  verify: (req: any, _res, buf) => {
    req.rawBody = buf;
  },
}));
app.use(express.urlencoded({ extended: false }));

// Your logging middleware (copy-paste it here exactly as in your original server file)
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
      console.log(logLine);  // Simple log for Vercel
    }
  });
  next();
});

// Setup routes
(async () => {
  const fakeHttpServer = { on: () => {}, addListener: () => {} } as any;  // Fake for WebSockets if you use them
  await registerRoutes(fakeHttpServer, app);

  // Error handler
  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  // Serve static React files in production
  serveStatic(app);

  // Important: Fallback for React Router (all non-API routes go to index.html)
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root: "./dist" });
  });
})();

// Vercel serverless export — THIS IS REQUIRED
export default function handler(req: VercelRequest, res: VercelResponse) {
  app(req, res);
}
