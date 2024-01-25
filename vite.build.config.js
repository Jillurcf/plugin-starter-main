import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { vitePluginParseCss } from "@productgenie/plugin-config-utils";

const loadExternalDeps = () => {
  try {
    const deps = require(process.env.EXT_DEPS);

    return deps;
  } catch {
    try {
      const localDeps = require("./external-deps.json");

      return localDeps;
    } catch {
      console.error(
        new Error(
          `Failed to load module: external-deps.json. Plugin cannot be published without this file.`
        )
      );

      return {};
    }
  }
};

const externalsDeps = Object.keys(loadExternalDeps());

export default defineConfig(() => {
  return {
    plugins: [react()].concat(
      process.env.LIB_ENTRY_NAME === "block"
        ? [
            vitePluginParseCss(),
            cssInjectedByJsPlugin(),
            visualizer({ filename: "./dist/stats.html" })
          ]
        : []
    ),

    build: {
      emptyOutDir: false,
      lib: {
        entry: {
          [process.env.LIB_ENTRY_NAME]: process.env.LIB_ENTRY_PATH
        },
        formats: ["cjs"]
      },

      rollupOptions: {
        external: externalsDeps
      }
    }
  };
});
