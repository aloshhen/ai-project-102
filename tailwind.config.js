/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Clash Display', 'sans-serif']
      },
      colors: {
        'coffee': {
          50: '#F5E6D3',
          100: '#E8D0B3',
          200: '#DBBA93',
          300: '#CFA474',
          400: '#C38E54',
          500: '#B77835',
          600: '#9C652D',
          700: '#815225',
          800: '#663E1C',
          900: '#4B2A14'
        }
      },
      backgroundImage: {
        'coffee-gradient': 'linear-gradient(135deg, #B77835 0%, #4B2A14 100%)'
      },
      boxShadow: {
        'coffee-soft': '0 10px 30px -15px rgba(183, 120, 53, 0.3)',
        'coffee-intense': '0 15px 50px -20px rgba(183, 120, 53, 0.5)'
      }
    },
  },
  plugins: [],
}