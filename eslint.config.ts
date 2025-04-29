import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
  },
  ignores:
    [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      '**/node_modules/**',
      '**/public/**',
      '**/src/assets/**',
      'typed-router.d.ts',
    ],
})
