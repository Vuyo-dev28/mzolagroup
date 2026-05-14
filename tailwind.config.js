/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        brand: {
          DEFAULT: 'rgb(var(--brand) / <alpha-value>)',
          2: 'rgb(var(--brand2) / <alpha-value>)',
        },
        stroke: 'rgb(var(--stroke) / <alpha-value>)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 18px 60px rgba(0,0,0,0.45)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem',
      },
    },
  },
}

