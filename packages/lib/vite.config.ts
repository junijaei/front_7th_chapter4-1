import { createViteConfig } from "../../createViteConfig";
import react from "@vitejs/plugin-react-oxc";

export default createViteConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "lib",
      fileName: (format) => `lib.${format}.js`,
      formats: ["es", "cjs", "umd"],
    },
  },
});
