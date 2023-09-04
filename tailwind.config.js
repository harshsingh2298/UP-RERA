/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx}",
  "./node_modules/flowbite-react/**/*.js",],
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        "from":"#a99ba4",
        "to": "#506a9d",
        "fromgrad":"#c6e9e1",
        "tograd": "#e5e7eb"
        
      },
      backgroundImage: {
        'hero': "url('./banner-1.jpg')",
      },
  }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}



