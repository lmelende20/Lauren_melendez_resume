module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightPink: '#EDC7B7',
        whitePink: '#EEE2DC',
        grayPink: '#BAB2B5',
        navyBlue: '#123C69',
        maroonRed: '#AC3B61',
        buttonHover: '#CB6789',
        dropDownHover: '#EFD8CE'
      },
      fontFamily: {
        'Lora' : ['Lora', 'serif'],
        'Nunito' : ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}
