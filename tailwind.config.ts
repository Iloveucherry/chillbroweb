import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#070B1A',
        night: '#121A2D',
        accent: '#7C3AED',
        mint: '#34D399',
        rose: '#FB7185',
        golden: '#FBBF24'
      },
      boxShadow: {
        neon: '0 0 40px rgba(124, 58, 237, 0.35)'
      }
    }
  },
  plugins: [require('daisyui')]
};

export default config;
