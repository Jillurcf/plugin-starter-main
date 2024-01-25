import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vitePluginParseCss } from "@productgenie/plugin-config-utils";

export default defineConfig({
  plugins: [
    react({ jsxImportSource: "@emotion/react" }),
    vitePluginParseCss(require("css"))
  ]
});
