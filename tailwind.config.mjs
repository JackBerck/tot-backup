/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        nunito: "Nunito",
      },
      colors: {
        "dark-base": "#020617",
        "light-base": "#f1f5f9",
        "blue-base": "#1d4ed8",
        "green-base": "#22c525",
      },
    },
  },
  plugins: [],
};
