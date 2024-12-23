import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      primary: '#018380',
      secondary: '#00DAD4',
      accent: {
        1: '#D0F2F3', // Shade 1
        2: '#E3FFFE', // Shade 2
        3: '#F0FFFF', // Shade 3
      },
      background: '#F8FFFF',
      text: {
        primaryDark: '#121212',
        secondaryDark: '#505050',
        primaryLight: '#FAF9F6',
        secondaryLight: '#EEEEEE',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fontSize: {
      'custom-48': ['48px', { lineHeight: '72px', fontWeight: '600' }],
      'custom-20': ['20px', { lineHeight: '30px', fontWeight: '500' }],
      'custom-28': ['28px', { lineHeight: '42px', fontWeight: '500' }],
      'custom-20-bold': ['20px', { lineHeight: '30px', fontWeight: '700' }],
      'custom-48-bold': ['48px', { lineHeight: '72px', fontWeight: '700' }],
      'custom-40': ['40px', { lineHeight: '60px', fontWeight: '700' }],
      'custom-40-2': ['40px', { lineHeight: '48px', fontWeight: '700' }],
      'custom-24': ['24px', { lineHeight: '36px', fontWeight: '700' }],
      'custom-32': ['32px', { lineHeight: '48px', fontWeight: '700' }],
      'custom-64': ['64px', { lineHeight: '96px', fontWeight: '700' }],
      'custom-16-bold': ['16px', { lineHeight: '24px', fontWeight: '700' }],
      'custom-14': ['14px', { lineHeight: '21px', fontWeight: '400' }],
      'custom-20-2': ['20px', { lineHeight: '32px', fontWeight: '400' }],
      'custom-16': ['16px', { lineHeight: '24px', fontWeight: '400' }],
      'custom-96': ['96px', { lineHeight: '144px', fontWeight: '900' }],
    },
  },
  plugins: [],
} satisfies Config;
