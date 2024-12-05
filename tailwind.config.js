/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app.vue", "./pages/**/*.{vue,js,ts,jsx,tsx}", "./components/**/*.{vue,js,ts,jsx,tsx}", "./layouts/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      body: "var(--bg-color)"
    }
  },
  plugins: [require("daisyui"), require("flowbite/plugin"), require("flyonui")],
  daisyui: {
    prefix: "du-",
    logs: false
  },
  flyonui: {
    prefix: "fo-",
    logs: false
  },
  darkMode: "selector",
  future: {
    // mobile support for hover until tailwind v4 is out and this is default behavior
    hoverOnlyWhenSupported: true
  }
};
