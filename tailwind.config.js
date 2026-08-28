export default {
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050506',
          900: '#0a0a0b',
          850: '#0f1012',
          800: '#15161a',
          700: '#1d1f24',
          600: '#2a2d34',
        },
        brand: {
          50: '#eaf5fe',
          100: '#cfe9fd',
          300: '#7cc4f7',
          400: '#4aaef3',
          500: '#1e93e8',
          600: '#1179c6',
          700: '#0d5f9c',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
