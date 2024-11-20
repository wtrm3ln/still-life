/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00173D',
        secondary: '#8097BE',
        light: '#F5F2EC',
        accent: '#F0FC5A'
      },
      fontFamily: {
        reenie: ['var(--font-reenie-beanie)', 'cursive'],
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
      gridTemplateColumns: {
        // Adds a custom 15-column grid
        15: 'repeat(15, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
