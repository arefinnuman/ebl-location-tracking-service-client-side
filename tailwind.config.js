/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#82ffec",

          secondary: "#f4ee73",

          accent: "#a268f9",

          neutral: "#141a24",

          "base-100": "#f1f3f3",

          info: "#476de1",

          success: "#1ba172",

          warning: "#cd9e04",

          error: "#f46548",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
