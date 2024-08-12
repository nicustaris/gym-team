import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

console.log("VITE_BASE_URL:", process.env.VITE_BASE_URL);
console.log("import.meta.env.VITE_BASE_URL:", import.meta.env.VITE_BASE_URL);

const baseURL = import.meta.env.VITE_BASE_URL || "/";

export default defineConfig({
  plugins: [react()],
  base: "/gym-team/",
});
