import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reportsDirectory: "./.coverage",
      reporter: ["lcov", "json", "json-summary"],
    },
  },
});
