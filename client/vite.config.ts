import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php",
        changeOrigin: true,
      },
    },
  },
});
