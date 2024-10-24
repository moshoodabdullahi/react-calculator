module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['Spartan', 'sans-serif'],
      },
      colors: {
        customRed: '#93261a',
        customRedCheckedHover: '#cf3f2f',
      },
    },
  },
  plugins: [],
};
