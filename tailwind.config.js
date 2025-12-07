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
        primary: 'hsl(221 83% 53%)',        // Primary blue
        'primary-dark': 'hsl(221 83% 43%)',  // Darker blue for hover states
        accent: '#34A853',         // Google Green for accents
        'accent-secondary': '#FBBC04',  // Google Yellow for secondary highlights
        'light-bg': '#F8F9FA',     // Very light gray background
        'medium-gray': '#5F6368',  // Medium gray text
        'dark-gray': '#202124',    // Dark gray for main text
        'off-white': '#FFFFFF',    // Pure white
        'card-light': '#FFFFFF',   // White cards with shadows
        'border-light': '#DADCE0', // Light borders
        'warning-yellow': '#FFC107', // Yellow for warnings
        'error-red': '#EA4335',    // Google Red for errors
        'success-green': '#34A853', // Google Green for success
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
