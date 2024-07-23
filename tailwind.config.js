/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'gray-1': '#C8C8C8',
      'gray-2': '#F3F3F3',
      'gray-3': '#FBFBFB',
      'gray-4': '#BDBDBD',
      'gray-9': '#333333',
      'gray-10': '#2C2C2C',
      white: '#FFFFFF',
    },
    animation: {
      slideInRight: 'slideInRight 1s ease-in-out 1',
    },
  },
  plugins: [],
};
