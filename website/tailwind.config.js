/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //"./app/**/*.{js,ts,jsx,tsx,mdx}",
    //"./pages/**/*.{js,ts,jsx,tsx,mdx}",
    //"./components/**/*.{js,ts,jsx,tsx,mdx}",
    //"./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/about/**/*.{js,ts,jsx,tsx,mdx}",
    //"!./node_modules",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px', // => @media (min-width: 640px) { ... }
      'md': '768px', // => @media (min-width: 768px) { ... }
      'lg': '1024px', // => @media (min-width: 1024px) { ... }
      'xl': '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
    extend: {
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        hover: 'var(--color-text-hover)',
        button: {
          filled: 'var(--color-text-button-filled)',
          outlined: 'var(--color-text-button-outlined)',
          inverted: 'var(--color-text-button-inverted)',
          'filled-hover': 'var(--color-text-button-filled-hover)',
          'outlined-hover': 'var(--color-text-button-outlined-hover)',
          'inverted-hover': 'var(--color-text-button-inverted-hover)',
        },
        modal: {
          date: 'var(--color-text-modal-date)',
          link: 'var(--color-text-modal-link)',
          'link-hover': 'var(--color-text-modal-link-hover)',
        }
      },
      backgroundColor: {
        primary: 'var(--background-color-primary)',
        secondary: 'var(--background-color-secondary)',
        nav: 'var(--border-color-nav)',
        'card-company-icon': 'var(--background-color-card-company-icon)',
        button: {
          filled: 'var(--background-color-button-filled)',
          outlined: 'var(--background-color-button-outlined)',
          inverted: 'var(--background-color-button-inverted)',
          'filled-hover': 'var(--background-color-button-filled-hover)',
          'outlined-hover': 'var(--background-color-button-outlined-hover)',
          'inverted-hover': 'var(--background-color-button-inverted-hover)',
        },
        modal: {
          primary: 'var(--background-color-modal-primary)',
          secondary: 'var(--background-color-modal-secondary)',
          hover: 'var(--background-color-modal-hover)',
        }
      },
      borderColor: {
        navBorder: 'var(--border-color-nav-border)',
        card: 'var(--border-color-card-border)',
        'card-company-icon': 'var(--border-color-card-company-icon)',
        button: {
          filled: 'var(--border-color-button-filled)',
          outlined: 'var(--border-color-button-outlined)',
          inverted: 'var(--border-color-button-inverted)',
          'filled-hover': 'var(--border-color-button-filled-hover)',
          'outlined-hover': 'var(--border-color-button-outlined-hover)',
          'inverted-hover': 'var(--border-color-button-inverted-hover)',
        },
        modal: {
          date: 'var(--border-color-modal-date)',
        }
      },
      //keyframes: {
        //fadeIn: {
        //  '0%': { opacity: '0'},
        //  '50%': { opacity: '0.5'},
        //  '100%': { opacity: '1'}
        //},
        //wiggle: {
        //  '0%, 100%': { transform: 'rotate(-15deg)'},
        //  '50%': { transform: 'rotate(15deg)'},
        //  }
      //},
      //animation: {
      //  'fading-in': 'fadeIn 10s linear infinite',
      //  'wiggle': 'wiggle 1s infinite',
      //},
    },
  },
  plugins: [],
}

