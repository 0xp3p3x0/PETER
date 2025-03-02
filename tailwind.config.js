/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/img/background.png')",
      },
      textStroke: {
        DEFAULT: '1px', // Default stroke width
        sm: '0.5px',    // Small stroke
        lg: '2px',      // Large stroke
      },
      boxShadow: {
        'text': '2px 2px 4px rgba(0, 0, 0, 0.5)', // Custom text shadow
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0%) " },
          to: { transform: "translateX(-50%) " },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      rotate: {
        '1.1': '1.1deg',
      },
    },
  },
  plugins: [require('tailwindcss-text-fill-stroke'),],
};



