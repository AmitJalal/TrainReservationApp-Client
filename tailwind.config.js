/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Heebo', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        sm: '0.5rem',
        lg: '8rem',
        xl: '8rem',
        '2xl': '10rem',
      },
    },
    screens: {
      xxsm: '280px', // Small devices
      xsm: '360px', // Small devices
      sm: '640px', // Small devices
      md: '768px', // Medium devices
      lg: '1024px', // Large devices
      xl: '1280px', // Extra large devices
      '2xl': '1536px', // Extra extra large devices
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'odd'],
      colors: {
        'dark-overlay': 'rgba(0, 0, 0, 0.6)',
      },
    },
  },

  plugins: [],
};
