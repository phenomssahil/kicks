/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
],
  theme: {
    extend: { 
      ridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
    },
  },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

