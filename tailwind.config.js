/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Simple Black, Blue, White palette
        primary: {
          black: '#000000',
          blue: '#0066ff',
          'blue-dark': '#0052cc',
          'blue-light': '#3385ff',
          white: '#ffffff',
          gray: '#f5f5f5',
          'gray-dark': '#333333',
          'gray-medium': '#666666',
          'gray-light': '#cccccc'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.8s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'counter': 'counter 2s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 102, 255, 0.6)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        counter: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}