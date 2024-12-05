// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-12-04",
  devtools: { enabled: true },
  css: ["assets/main.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern"
        }
      }
    }
  },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      title: "Gravity Assist",
      meta: [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          hid: "description",
          name: "description",
          content: "Create colored text, search modules and research paths, design custom fleets, and more. Gravity Assist is an all-in-one tool for anything you may need in Infinite Lagrange."
        },
        {
          name: "keywords",
          content: "space, infinite, lagrange, rts, game, tool, help, fleet, build, research, module, equipment, blueprint"
        }
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/ui/radiant.svg" }],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-41RFT8ZEZ8",
          async: true
        },
        {
          hid: "gtag",
          innerHTML: `
			window.dataLayer = window.dataLayer || [];
			function gtag(){ dataLayer.push(arguments); }
			gtag('js', new Date());
			gtag('config', 'G-41RFT8ZEZ8');
		  `,
          type: "text/javascript"
        }
      ]
    }
  }
});
