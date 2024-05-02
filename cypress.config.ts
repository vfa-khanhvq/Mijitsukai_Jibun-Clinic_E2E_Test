import { defineConfig } from "cypress";

export default defineConfig({
  // watchForFileChanges: false,
  video: true,
  videoCompression: false,
  defaultCommandTimeout: 40000,
  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    baseUrl: "https://www.aletheia-clinic.com"
  },
  component: {
    specPattern: "src/**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}",
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
