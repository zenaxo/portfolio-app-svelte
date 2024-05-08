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
        hover: "var(--hover)",
        accentHover: "var(--accent-hover)",
        accentAlt: "var(--accent-alt)",
      },
      blur: {
        xs: '2px',
        px: '1px',
      },
    },
  },
  plugins: [],
}

