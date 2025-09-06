// eslint.config.ts
import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint/config"
import prettierConfig from "eslint-config-prettier"
import prettierPlugin from "eslint-plugin-prettier"

export default defineConfig([
  {
    ignores: ["dist", "node_modules"],
  },

  // Config JS recomendada
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // Configs TS recomendadas
  ...tseslint.configs.recommended,

  // Configs React recomendadas
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },

  // Desativa conflitos com Prettier
  prettierConfig,

  // Executa Prettier como regra
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
])
