/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom right, #1e40af, #1e3a8a, #312e81)',
        'gradient-card': 'linear-gradient(to bottom right, #1d4ed8, #4338ca)',
      },
      colors: {
        // Corporate palette - темный navy
        navy: {
          950: '#0a1628',  // Corporate Dark - самый темный
          900: '#0f1f36',  // Darker
          800: '#1a365d',  // Corporate Navy - основной фон
          700: '#1e4175',  // Medium-dark
          600: '#234e8a',  // Dark blue - кнопки
          500: '#2d5a96',  // Medium - акценты
          400: '#4070a8',  // Light accent
          300: '#5c8bc0',  // Lighter
          200: '#8baed5',  // Ultra light
          100: '#c5d5e8',  // Background tint
          50: '#e8eff6',   // Lightest
        },
        primary: '#2563eb',           // Corporate Blue
        'primary-dark': '#1a365d',    // Corporate Navy
        accent: '#3b82f6',            // Corporate Light
        'accent-secondary': '#60a5fa', // Light blue
        'light-bg': '#F8F9FA',
        'medium-gray': '#5F6368',
        'dark-gray': '#202124',
        'off-white': '#FFFFFF',
        'card-light': '#FFFFFF',
        'border-light': '#DADCE0',
        'warning-yellow': '#FFC107',
        'error-red': '#EA4335',
        'success-green': '#34A853',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
