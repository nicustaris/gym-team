import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Access environment variable using import.meta.env
const baseURL = process.env.VITE_BASE_URL || "/";

console.log("Base URL in Vite Config:", baseURL);

export default defineConfig({
  plugins: [react()],
  base: baseURL,
});
