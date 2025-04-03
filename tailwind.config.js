/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
       
      },
      colors: {
        bodyColor: "white",
        lightText: "black",
        boxBg: "linear-gradient(145deg,rgb(207, 223, 255),rgb(206, 214, 223))",
        designColor: "black",
      },
      boxShadow: {
        shadowOne: "10px 10px 19pxrgb(183, 191, 209), -10px -10px 19pxrgb(225, 234, 243)",
},
   },
},
       plugins: [],
};