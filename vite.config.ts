// GitHub Pages deployment configuration for Bhakti's Portfolio.
// The Lovable TanStack config wrapper provides the project plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/Bhakti-s_Portfolio/",
  },
  tanstackStart: {
    server: { entry: "server" },
    spa: {
      enabled: true,
      prerender: {
        outputPath: "index.html",
        crawlLinks: true,
        retryCount: 2,
      },
    },
  },
});
