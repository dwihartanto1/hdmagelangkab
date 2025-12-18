module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './src/components/**/*.{astro,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};