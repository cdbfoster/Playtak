module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'max-len': ['error', 160, { ignoreTrailingComments: true }],
    'linebreak-style': ['error', 'windows'],
    'func-names': ['off'],
    'object-shorthand': ['off'],
    curly: ['off'],
    'nonblock-statement-body-position': ['off'],
    'no-unused-vars': ['off'],
    'no-alert': ['off'],
    'no-console': ['off'],
    'prefer-destructuring': ['off'],
    'brace-style': ['off'],
  },
  globals: {
    server: 'readonly',
    output: 'readonly',
    $: 'readonly',
    board: 'readonly',
    stopTime: 'readonly',
    getZero: 'readonly',
    chathandler: 'readonly',
    botlist: 'readonly',
    startTime: 'readonly',
    lastWt: 'writeable',
    lastBt: 'writeable',
    lastTimeUpdate: 'writeable',
    generateCamera: 'readonly',
    fixedcamera: 'readonly',
  },
};
