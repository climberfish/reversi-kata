module.exports = {
  root: true,
  env: {
    node: true,
    
  },
  plugins: [
    "only-warn"
  ],
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "max-len": [2, {"code": 120, "tabWidth": 4, "ignoreUrls": true}]
  },
};
