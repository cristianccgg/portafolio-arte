import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Cambia 'repo-name' por el nombre de tu repositorio
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-arte/", // Asegúrate de poner el nombre correcto de tu repositorio
});
