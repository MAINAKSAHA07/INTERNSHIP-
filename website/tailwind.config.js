module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js", "./src/**/*.{js,jsx,ts,tsx}", './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'diwali-1': "url('../public/images/TLN_Diwali offer_Websitebanner2.svg')",
        'diwali-2': "url('../public/images/Diwalidecor@300x1.svg')",
      },

      fontFamily:{
        BerkshireSwash:["Berkshire Swash"]
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin'), require('flowbite/plugin')],
}
// 'tw-elements/dist/plugin',