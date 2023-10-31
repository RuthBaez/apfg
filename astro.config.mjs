import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  server: {
    host: true
  }
});