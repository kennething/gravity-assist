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
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxt/test-utils/module", "@formkit/auto-animate/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    base64ServiceAccount: "",
    public: {
      baseUrl: ""
    }
  },
  app: {
    head: {
      title: "Gravity Assist",
      meta: [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "author", content: "DubNubz" },
        { property: "og:title", content: "Gravity Assist" },
        { property: "og:site_name", content: "Gravity Assist" },
        {
          name: "keywords",
          content: "space, infinite, lagrange, rts, game, tool, help, fleet, build, research, module, equipment, blueprint, collection"
        }
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/logo/logo.svg" },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.bubble.css"
        }
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-41RFT8ZEZ8",
          async: true
        },
        {
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
