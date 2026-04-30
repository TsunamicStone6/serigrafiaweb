import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:     '#0D0D0D',
        surface: '#161616',
        card:    '#1C1C1C',
        border:  'rgba(255,255,255,0.07)',
        brand: {
          red:   '#C51D34',
          hover: '#E0253D',
          gray:  '#888888',
          muted: '#AAAAAA',
          light: '#F0F0F0',
        },
        // Override red scale
        red: {
          400: '#E8506A',
          500: '#E0253D',
          600: '#C51D34',
          700: '#A51829',
          800: '#8A1422',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '8xl':  ['6rem',   { lineHeight: '1' }],
        '9xl':  ['8rem',   { lineHeight: '1' }],
        '10xl': ['10rem',  { lineHeight: '0.9' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
