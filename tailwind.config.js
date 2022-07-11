module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      usuyuki_white: "#f4f5f7",
      usuyuki_black: "#37393d",
      u_c_1: "#d7bd57",
      u_c_2: "#f2ee93",
      u_c_3: "#d8e4ee" /*この色は使ってないので空き枠 */,
      u_c_4: "#bae8bb",
      u_c_5: "#7e937f",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
