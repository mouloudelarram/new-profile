/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        matte: '#0b0b0c',
        offwhite: '#f6f6f4',
        accent: '#0ea5ff',
        google: {
          blue: '#4285F4',
          red: '#DB4437',
          yellow: '#F4B400',
          green: '#0F9D58'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
