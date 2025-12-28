import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../routes";        // Adjust path if routes is elsewhere
import { serveStatic } from "../static";            // Adjust path if static is elsewhere
import type { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();

// Trust Vercel’s proxy (required for correct IP, etc.)
app.set("trust proxy", true);

declare module "express-serve-static-core" {
  interface Request {
    rawBody?: Buffer;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      (req as any).rawBody = buf;
    },
  })
);

app.use(express.urlencoded({ extended: false }));

// Simple logging middleware
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

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
      log(logLine);
    }
  });

  next();
});

// Main setup
(async () => {
  // Create a fake httpServer object just to keep registerRoutes happy
  // (it only needs addListener for WebSocket upgrades if you use them)
  const httpServer = {
    addListener: () => {},
    on: () => {},
    removeListener: () => {},
  } as any;

  await registerRoutes(httpServer, app);

  // Global error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  // In production on Vercel: serve the built static files
  // (your serveStatic function should do express.static('dist') or similar)
  if (process.env.NODE_ENV === "production" || process.env.VERCEL) {
    serveStatic(app);
  }

  // Add a catch-all route for React Router (important!)
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root: "dist" });
  });
})();

// Export as Vercel serverless function — THIS IS THE KEY PART
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Vercel re-uses the app instance across invocations
  // So we just forward the request to Express
  await app(req, res);
}
