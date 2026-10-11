import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import pluginQuery from "@tanstack/eslint-plugin-query";

const noCommentsPlugin = {
  rules: {
    "no-comments": {
      meta: {
        type: "suggestion",
        messages: { forbidden: "Comments are not allowed. Express intent through naming." },
        schema: [],
      },
      create(context) {
        return {
          Program() {
            for (const comment of context.sourceCode.getAllComments()) {
              if (comment.type !== "Shebang") {
                context.report({ loc: comment.loc, messageId: "forbidden" });
              }
            }
          },
        };
      },
    },
  },
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...pluginQuery.configs["flat/recommended"],
  {
    plugins: { workspace: noCommentsPlugin },
    linterOptions: { noInlineConfig: true },
    rules: { "workspace/no-comments": "error" },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
