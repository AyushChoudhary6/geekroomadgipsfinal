/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          50: '#0A0A1E',
          100: '#0F0F23',
        },
        secondary: {
          DEFAULT: '#A0FF8F',
          50: '#7FE65A',
        },
        accent: {
          DEFAULT: '#22C55E',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}