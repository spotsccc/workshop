const { configure, presets } = require('eslint-kit')

module.exports = configure({
  mode: 'only-errors',
  presets: [
    presets.imports(),
    presets.typescript(),
    presets.prettier({
      semi: false,
      trailingComma: 'all',
      singleQuote: true,
      printWidth: 80,
      useTabs: false,
      tabWidth: 2,
    }),
    presets.node(),
    presets.react({ version: '18.0' }),
  ],
  extend: {
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      'unicorn/number-literal-case': 'off',
      'no-case-declarations': 'off',
    },
  },
})
