import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "primary-color":"#219C90",
        "secondary-color":"#E9B824",
        "tertiary-color":"#EE9322",
        "quaternary-color":"#D83F31",
        "basic-color":"#FBECB2"
      }
    },
  },
  plugins: [],
}
export default config
