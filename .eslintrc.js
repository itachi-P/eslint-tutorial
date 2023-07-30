module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // rules: {
  //   // console.log()をコードに残しておいてはいけない
  //   'no-console': 'error',
  //   // プロパティ名に限ってはキャメルケースを強制しない(_を許容する)
  //   'camelcase': ['error', { properties: 'never' }],
  //   // セミコロンを強制する(文末のセミコロンを省略できない)
  //   'semi': ['error', 'always'],
  //   // 文字列はシングルクォーテーションで囲む（エラーにはならないが警告を出す）
  //   'quotes': ['warn', 'single'],
  // },

  // rulesの代わりに有名なShareable config(ルールのプリセット)を導入する
  extends: ["airbnb-base"],
  // Shareable configのルールを上書きする場合はrulesを使う
  rules: {
    // デフォルトimportを強制せず、名前付きimportを許容する
    "import/prefer-default-export": "off",
    // 文字列リテラルはダブルクォートのほうを使いたい
    quotes: ["error", "double"],
  },
};
