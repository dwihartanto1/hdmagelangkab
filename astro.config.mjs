import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  // Aktifkan mode server agar konten otomatis update di Vercel
  output: "server",

  adapter: vercel()
});