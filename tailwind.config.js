const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-50': '#fdf9f8',
        'primary-100': '#faebe9',
        'primary-200': '#f8e1df',
        'primary-300': '#f4d3d0',
        'primary-400': '#f2cbc7',
        'primary-500': '#efbeb9',
        'primary-600': '#d9ada8',
        'primary-700': '#aa8783',
        'primary-800': '#836966',
        'primary-900': '#64504e',
        'secondary-50': '#f6fbfa',
        'secondary-100': '#e2f3ef',
        'secondary-200': '#d5ede7',
        'secondary-300': '#c1e4dc',
        'secondary-400': '#b5dfd5',
        'secondary-500': '#a3d7cb',
        'secondary-600': '#94c4b9',
        'secondary-700': '#749990',
        'secondary-800': '#5a7670',
        'secondary-900': '#445a55',
        'background-dark': '#1d1918',
        'background-light': '#fdf9f8',
        dark: '#1d1918',
        black: '#1d1918'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)']
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
