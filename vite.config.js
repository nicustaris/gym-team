import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Access environment variable using process.env
const baseURL = process.env.VITE_BASE_URL || "/";

export default defineConfig({
  plugins: [react()],
  base: baseURL,
});
