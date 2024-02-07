import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@data": "/src/data",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@templates": "/src/templates",
      "@utils": "/src/utils",
      "@": "/src",
    },
  },
});
