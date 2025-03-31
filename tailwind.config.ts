/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}"
    ],
    theme: {
      extend: {
        animation: {
            'fade-in': 'fadeIn 0.3s ease-out forwards',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: 0, transform: 'scale(0.95)' },
              '100%': { opacity: 1, transform: 'scale(1)' },
            },
          },

        fontFamily: {
          poppins: ['Poppins', 'sans-serif']
        }
      },
    },
    plugins: [],
  }
  