/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%',
      },
      zIndex: {
        'top': '999',
      },
      screens: {
        'mobile': {'max': '690px'},
        'normal': {'min': '691px'},
        'betterhover': {'raw': '(hover: hover)'},
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        accentDark: "var(--accentDark)",
        hover: "var(--hover)",
        accentHover: "var(--accent-hover)",
        accentAlt: "var(--accent-alt)",

        'zenaxo': {
          '50': '#f0f7ff',
          '100': '#e0effe',
          '200': '#b9dffe',
          '300': '#7cc6fd',
          '400': '#36aafa',
          '500': '#0c8feb',
          '600': '#0073cf',
          '700': '#0158a3',
          '800': '#064c86',
          '900': '#0b406f',
          '950': '#07284a',
      },
      },
      blur: {
        xs: '2px',
        px: '1px',
      },
    },
  },
  plugins: [],
}

