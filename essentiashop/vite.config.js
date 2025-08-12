import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Asegúrate de que la salida se genera en la carpeta 'dist'
    assetsDir: "assets", // Los archivos estáticos como imágenes o fuentes
  },
});
