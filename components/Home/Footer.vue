<template>
  <footer class="fo-footer w-full bg-base-200/60 px-10 py-4 dark:bg-neutral-800">
    <div class="flex w-full items-center justify-center">
      <div class="flex w-1/6 items-center justify-start gap-1 text-xl font-bold sm:w-1/4 md:w-1/3 lg:w-1/4">
        <img class="size-8" src="/logo/logo.svg" aria-hidden="true" />
        <img class="hidden h-8 transition duration-500 sm:block dark:invert" src="/logo/gravityAssist.svg" aria-hidden="true" />
      </div>
      <aside class="flex w-4/6 items-center justify-center sm:w-1/2 md:w-1/3 lg:w-1/2">
        <p class="text-center transition duration-500 dark:text-white">
          Gravity Assist
          <button
            @click="footerOpenChangelog"
            class="fo-link fo-link-neutral text-lg font-semibold text-base-content/90 no-underline transition duration-500 hover:underline hover:duration-150 dark:text-white dark:hover:text-white"
          >
            v{{ changelog[changelog.length - 1].version }}
          </button>
          by DubNubz
        </p>
      </aside>
      <div class="flex h-5 w-1/6 justify-end gap-4 sm:w-1/4 md:w-1/3 lg:w-1/4">
        <!-- <a href="https://github.com/DubNubz/gravity-assist" target="_blank" class="fo-link" aria-label="GitHub Link">
          <img class="size-6 transition duration-500 dark:invert" src="/logo/github.svg" aria-hidden="true" />
        </a> -->
        <a href="https://discord.com/invite/9mJ9b2Bbzx" target="_blank" class="fo-link" aria-label="Discord Link">
          <img class="size-6 transition duration-500 dark:invert" src="/logo/discord.svg" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const router = useRouter();

function footerOpenChangelog() {
  router.push({ query: { v: changelog[changelog.length - 1].version } });
}
</script>

<style scoped>
footer {
  transition:
    sliding 0.75s ease-in-out,
    background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
