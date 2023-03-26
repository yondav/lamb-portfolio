/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        button: '0px 12px 12px rgba(12, 19, 81, 0.12)',
        nav: '0px 6px 6px rgba(12,19,81,0.05)',
      },
      colors: {
        brand: {
          black: 'var(--brand-black)',
          white: 'var(--brand-white)',
          surface: 'var(--brand-surface)',
          peony: 'var(--brand-peony)',
          aegean: 'var(--brand-aegean)',
          lapis: 'var(--brand-lapis)',
          cerise: {
            100: 'var(--brand-cerise-100)',
            200: 'var(--brand-cerise-200)',
            300: 'var(--brand-cerise-300)',
          },
        },
      },
      fontFamily: {
        header: ['var(--header-font)', 'serif'],
        copy: ['var(--copy-font)', 'serif'],
      },
      fontSize: {
        'h1-lg': ['4em', { lineHeight: '140%' }],
        'h1-md': ['3em', { lineHeight: '140%' }],
        'h1-sm': ['1.75em', { lineHeight: '140%' }],
        'h2-lg': ['3em', { lineHeight: '140%' }],
        'h2-md': ['2.375em', { lineHeight: '140%' }],
        'h2-sm': ['1.5em', { lineHeight: '140%' }],
        'h3-lg': ['1.5em', { lineHeight: '140%', letterSpacing: '2%' }],
        'h3-md': ['1.5em', { lineHeight: '140%', letterSpacing: '2%' }],
        'h3-sm': ['1em', { lineHeight: '140%', letterSpacing: '2%' }],
        'p-lg': ['1.25em', { lineHeight: '140%', letterSpacing: '2%' }],
        'p-md': ['1.125em', { lineHeight: '140%', letterSpacing: '2%' }],
        'p-sm': ['1em', { lineHeight: '140%', letterSpacing: '2%' }],
        'o-lg': ['1em', { lineHeight: '140%', letterSpacing: '12%' }],
        'o-md': ['0.875em', { lineHeight: '140%', letterSpacing: '12%' }],
        'o-sm': ['0.875em', { lineHeight: '140%', letterSpacing: '12%' }],
        helper: ['0.875em', { lineHeight: '120%', letterSpacing: '2%' }],
        'button-sm': ['1em', { lineHeight: '140%', letterSpacing: '2%' }],
        'button-md': ['1.125em', { lineHeight: '140%', letterSpacing: '2%' }],
        'button-lg': ['1.5em', { lineHeight: '140%', letterSpacing: '2%' }],
      },
    },
  },
  plugins: [],
};
