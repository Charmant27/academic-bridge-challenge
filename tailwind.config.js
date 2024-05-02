/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    container: {
      screens: {
        '2xl': '1400px',
      }
    },
    colors: {
      gray: {
        100: '#f6f8fa',
        200: '#8c95a1',
      },

      purple: {
        100: '#5046c2',
      },

      brown: {
        100: '#f9f4ed',
        200: '#cd7a30',
      },

      green: {
        100: '#edf9f5',
        200: '#48a686',
      },

      blue: {
        100: '#edf4f8',
        200: '#4ba3c1',
      }
    }
  },
};
export const plugins = [];