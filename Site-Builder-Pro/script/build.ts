import { build as viteBuild } from "vite";
import { build as esbuildBuild } from "esbuild";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Remove existing dist
if (fs.existsSync("dist")) {
  fs.rmSync("dist", { recursive: true, force: true });
}

// Always build the client (Vite frontend)
await viteBuild();

// Only build/bundle the server if NOT on Vercel
// (On Vercel, we want pure static deploy for the frontend)
if (!process.env.VERCEL) {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));

  // Server dependencies to bundle (improve cold starts)
  const serverDeps = Object.keys(pkg.dependencies || {});

  await esbuildBuild({
    entryPoints: ["server/index.ts"],
    outfile: "dist/index.cjs",
    bundle: true,
    platform: "node",
    format: "cjs",
    minify: true,
    external: [], // Bundle everything for smaller functions if needed
    define: {
      "process.env.NODE_ENV": '"production"',
    },
  });

  console.log("Server bundled to dist/index.cjs");
}

console.log("Build complete!");