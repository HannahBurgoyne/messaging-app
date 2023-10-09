/** @type {import('tailwindcss').Config} */

export default {
  content: ['./*.html', './client/**/*.[tj]sx'],
  media: false,
  theme: {
    extend: {
      spacing: {
        padding: '40px',
      },
      animation: {
        flip: 'flip 6s infinite steps(2, end)',
        rotate: 'rotate 3s linear infinite both',
      },
      keyframes: {
        flip: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        rotate: {
          to: {
            transform: 'rotate(90deg)',
          },
        },
      },
      colors: {},
      fontFamily: {},
      boxShadow: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-uppercase': {
          textTransform: 'uppercase',
          color: 'white',
          fontWeight: 'bold',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
