import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const baseURL = process.env.VITE_BASE_URL || "/";

console.log("HEY");
console.log(baseURL);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: baseURL,
});
