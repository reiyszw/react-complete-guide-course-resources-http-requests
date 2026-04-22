import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // 未使用の変数に赤線を出す設定
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
);
