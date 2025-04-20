import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',  
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}', 
      './app/**/*.{js,ts,jsx,tsx}',

    ],
    theme: {
      extend: {
        colors:{
          backgroundbg: "#F5F6F8",
        }
      },
    },
    plugins: [],
  }
  
  export default config;