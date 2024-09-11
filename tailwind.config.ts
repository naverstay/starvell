import type {Config} from "tailwindcss";

const config: Config = {
  // important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'var(--font-primary)'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        100: '100',
      },
      animation: {
        popup: 'wiggle .25s ease-in-out',
        popdown: 'wiggledown .25s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%': {transform: 'translateY(100vh)'},
          '100%': {transform: 'translateY(0)'},
        },
        wiggledown: {
          '0%': {transform: 'translateY(0)'},
          '100%': {transform: 'translateY(100vh)'},
        },
      },
      colors: {
        primary: {
          DEFAULT: '#6e7076',
          disabled: '#e8ebf0',
          border: '#f1f3f4',
        },
        blue: '#5c80fd',
        green: '#1db462',
        gray: '#36394a',
        danger: '#ff5c5c',
        orange: '#ff8e26',
        text: {
          icon: '#9a9ba3',
          placeholder: '#9e9da4',
        },
      },
      fontSize: {
        h2: ['28px', {lineHeight: '124%'}],
      },
      boxShadow: {
        textCard: '0px 4px 45px rgba(0, 0, 0, 0.1)',
        dropDown: '0px 4px 250px rgba(0, 0, 0, 0.6)',
        overlay: '0px 34px 124px 24px #9f9f9f',
        modal: '0px 34px 124px 24px #9f9f9f',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
};
export default config;

