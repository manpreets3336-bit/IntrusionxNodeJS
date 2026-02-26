/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-bg': '#080d12',
        'cyber-card': '#0f1520',
        'cyber-card-hover': '#141c2b',
        'cyber-accent': '#00e0ff',
        'cyber-purple': '#a855f7',
        'cyber-muted': '#8b9bb4',
        'cyber-text': '#c8d6e8',
      },
      fontFamily: {
        heading: ['Roboto', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': `
          radial-gradient(ellipse 80% 60% at 10% 90%, rgba(0,224,255,0.07) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 90% 10%, rgba(168,85,247,0.06) 0%, transparent 60%)
        `,
      },
    },
  },
  plugins: [],
};
