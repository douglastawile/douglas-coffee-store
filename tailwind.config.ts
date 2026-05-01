import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        coffee: {
          50: '#faf7f3',
          100: '#f5f0e8',
          200: '#e8dcc8',
          300: '#d4bfa0',
          400: '#a68a6e',
          500: '#8b7355',
          600: '#6b5847',
          700: '#4f4437',
          800: '#3d332c',
          900: '#2d2622',
        },
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-right': 'env(safe-area-inset-right)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
      },
    },
  },
  plugins: [],
}

export default config
