import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // atau bisa juga pakai '0.0.0.0'
    port: 5173, // atau port lain jika dibutuhkan
  },
});
