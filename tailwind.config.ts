import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D6DE31',
        dark: '#302F26',
        orange: '#F26135',
      },
    },
    fontFamily: {
      dazzed: ['Dazzed', 'sans-serif'],
      tobias: ['Tobias', 'serif'],
    },
  },
  plugins: [],
}
export default config
