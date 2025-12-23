import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

// Configuration for HD Magelang Directory
// https://astro.build/config
export default defineConfig({
  // Aktifkan mode server agar konten otomatis update di Vercel
  output: "server",

  adapter: vercel()
});