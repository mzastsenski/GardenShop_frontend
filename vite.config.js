import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

const proxyUrl = "https://gardenshop.mzas.de";
const params = {
  target: proxyUrl,
  changeOrigin: true,
};

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/products": params,
      "/category": params,
      "/api": params,
      "/cart": params,
      "/wishlist": params,
      "/orders": params,
      "/editproducts": params,
    },
  },
});
