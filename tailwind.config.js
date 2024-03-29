/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*"],
  theme: {
    screens:{
      'ml': {'max': '488px'},
    },
    fontFamily: {
      kumbh: ["Kumbh Sans", "sans-serif"],
    },
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        "pale-orange": "hsl(25, 100%, 94%)",
        "very-dark-blue": "hsl(220, 13%, 13%)",
        "dark-grayish-blue": "hsl(219, 9%, 45%)",
        "grayish-blue": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
      },
      transitionProperty: {
        'border': 'border',
        'height':'height',
        'left':'left'
      },
    },
  },
  plugins: [],
};
