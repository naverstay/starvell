import type {Config} from "tailwindcss";

const config: Config = {
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
          DEFAULT: '#e6e6e6',
          disabled: '#838383',
          alpha: '#101011',
          beta: '#86868b',
        },
        light: {
          DEFAULT: '#fff',
          alternate: '#fafafa',
        },
        dark: {DEFAULT: '#101011', alternate: '#29281b', black: '#000'},
        purple: {
          light: '#d9c8ef',
          dark: '#9f57fc',
        },
        blue: '#2d79f6',
        grey: '#b9b9b9',
        green: '#e8ffcb',
        text: {
          placeholder: '#b9b9b9',
        },
        action: '#c5c5c5',
        danger: '#ff4e6e',
        orange: '#ff784e',
        divider: {
          DEFAULT: '#f2f2f2',
        },
        chip: {
          light: '#e8ffcb',
          dark: '#373737',
          yellow: 'rgba(255, 232, 23, 0.7)',
          blue: 'rgba(44, 90, 255, 0.7)',
        },
        gray: {
          1: '#e9e9ea',
          2: '#efefef',
          3: '#e7e7e7',
          border: '#f4f4f4',
        },
      },
      fontSize: {
        h2: ['28px', {lineHeight: '124%'}],
        h22: ['44px', {lineHeight: '124%'}],
        h3: ['24px', {lineHeight: '124%'}],
        h4: ['19px', {lineHeight: '124%'}],
        h5: ['16px', {lineHeight: '124%'}],
        body: ['21px', {lineHeight: '124%'}],
        body0: ['18px', {lineHeight: '140%'}],
        body01: ['22px', {lineHeight: '140%'}],
        body11: ['20px', {lineHeight: '140%'}],
        body1: ['19px', {lineHeight: '120%'}],
        body2: ['17px', {lineHeight: '21px'}],
        body3: ['17px', {lineHeight: '130%'}],
        body4: ['15px', {lineHeight: '19px'}],
        body5: ['15px'],
        body6: ['14px', '120%'],
      },
      boxShadow: {
        textCard: '0px 4px 45px rgba(0, 0, 0, 0.1)',
        dropDown: '0px 4px 250px rgba(0, 0, 0, 0.6)',
        overlay: '0px 34px 124px 24px #9f9f9f',
        modal: '0px 34px 124px 24px #9f9f9f',
      },
    },
  },
  plugins: [],
};
export default config;
