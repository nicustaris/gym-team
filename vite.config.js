import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const baseURL = process.env.VITE_BASE_URL || "/";

export default defineConfig({
  plugins: [react()],
  base: baseURL,
});
