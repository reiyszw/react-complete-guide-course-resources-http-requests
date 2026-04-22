import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks"; // 1. インポートを追加

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      // 未使用の変数に赤線を出す設定
      "@typescript-eslint/no-unused-vars": "error",
      ...reactHooks.configs.recommended.rules,

      // もし個別に厳しさを変えたい場合は以下のように書けます
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn", // 依存配列のチェックを有効化
    },
  },
);
