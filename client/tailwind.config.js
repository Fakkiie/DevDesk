// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add the path to your components
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
