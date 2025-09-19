/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        neutral: {
          0: 'hsl(0, 0%, 100%)',
          20: 'hsl(250, 6%, 84%)',
          30: 'hsl(240, 6%, 70%)',
          60: 'hsl(243, 23%, 30%)',
          70: 'hsl(243, 23%, 24%)',
          80: 'hsl(243, 27%, 20%)',
          90: 'hsl(243, 96%, 9%)',
        },
        blue: {
          50: 'hsl(233, 67%, 56%)',
          70: 'hsl(248, 70%, 36%)',
        },
        orange: {
          50: 'hsl(28, 100%, 52%)',
        },
      },
    },
  },
  plugins: [],
}
