/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#F59E0B",
        light:{
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
        }
      }
    },
  },
  plugins: [],
}