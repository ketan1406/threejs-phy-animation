import { defineConfig } from "vite";
export default defineConfig({
  base: '/threejs-phy-animation/',  // Replace with the correct repo name
  build: {
    target: 'esnext',  // Target modern JavaScript, enabling top-level await
  },
});