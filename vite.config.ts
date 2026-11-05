import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Netlify plugin only on Netlify builds: loading it elsewhere crashes the preview server.
const plugins = process.env.NETLIFY
  ? [(await import("@netlify/vite-plugin-tanstack-start")).default()]
  : [];

export default defineConfig({
  plugins,
});
