import {defineConfig} from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  strictPropertyValues: true,
  strictTokens: true,
  jsxFactory: 'box',
  jsxFramework: 'react',
  jsxStyleProps: 'minimal',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  globalCss: {
    ':root': {
      backgroundColor: 'slate.950',
      color: 'slate.50',
    },
    'html, body, #root': {
      height: 'full',
    },
  },

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
