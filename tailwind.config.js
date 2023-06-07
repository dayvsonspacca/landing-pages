/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        home: {
          "primary": "#111160",
          "secondary": "#9AFFFF",
          "text": "#fff"
        }
      },
    },
  },
  plugins: [],
}
