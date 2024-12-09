<template>
  <div id="menu" class="flex w-[80vw] flex-col items-start justify-center gap-2 rounded-2xl bg-white p-4 md:w-[40rem] md:p-10 dark:bg-neutral-800" @click.stop>
    <h2 class="text-2xl font-bold">Contact</h2>
    <p>The best way to reach me is through Discord!</p>
    <div class="mt-4 flex w-full flex-col items-center justify-center gap-2">
      <div class="flex w-full flex-col items-start justify-center gap-1 md:flex-row md:items-center md:gap-4">
        <p class="w-40 text-nowrap">Infinite Lagrange</p>
        <div class="fo-input-group flex grow rounded-full dark:border-neutral-400 dark:bg-neutral-600 dark:hover:border-neutral-400">
          <span class="fo-input-group-text">
            <img class="size-5 dark:invert" src="/ui/search.svg" aria-hidden="true" />
          </span>
          <div type="search" class="fo-input grow rounded-e-full">
            <p class="w-44 overflow-hidden overflow-ellipsis text-nowrap sm:w-full">DubNubz</p>
          </div>
          <div class="du-tooltip fo-input-group-text p-0" data-tip="Copy">
            <button class="fo-btn fo-btn-circle fo-btn-text" @click="copyText('DubNubz')">
              <img class="size-5 dark:invert" src="/ui/copy.svg" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col items-start justify-center gap-1 md:flex-row md:items-center md:gap-4">
        <p class="w-40 text-nowrap">Discord</p>
        <div class="fo-input-group flex grow rounded-full dark:border-neutral-400 dark:bg-neutral-600 dark:hover:border-neutral-400">
          <span class="fo-input-group-text">
            <img class="size-5 dark:invert" src="/logo/discord.svg" aria-hidden="true" />
          </span>
          <div type="search" class="fo-input grow rounded-e-full">
            <p class="w-44 overflow-hidden overflow-ellipsis text-nowrap sm:w-full">micromidget</p>
          </div>
          <div class="du-tooltip fo-input-group-text p-0" data-tip="Copy">
            <button class="fo-btn fo-btn-circle fo-btn-text" @click="copyText('micromidget')">
              <img class="size-5 dark:invert" src="/ui/copy.svg" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col items-start justify-center gap-1 md:flex-row md:items-center md:gap-4">
        <p class="w-40 text-nowrap">Server</p>
        <div class="fo-input-group flex grow rounded-full dark:border-neutral-400 dark:bg-neutral-600 dark:hover:border-neutral-400">
          <span class="fo-input-group-text">
            <img class="size-5 dark:invert" src="/logo/discord.svg" aria-hidden="true" />
          </span>
          <div type="search" class="fo-input grow rounded-e-full">
            <a class="block w-44 overflow-hidden overflow-ellipsis text-nowrap no-underline hover:underline sm:w-full" href="https://discord.com/invite/9mJ9b2Bbzx" target="_blank"
              >https://discord.gg/9mJ9b2Bbzx</a
            >
          </div>
          <div class="du-tooltip fo-input-group-text p-0" data-tip="Join">
            <a class="fo-btn fo-btn-circle fo-btn-text no-underline" href="https://discord.com/invite/9mJ9b2Bbzx" target="_blank">
              <img class="size-5 dark:invert" src="/ui/arrowRight.svg" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

function copyText(text: string) {
  navigator.clipboard.writeText(text);
  alert("Text copied to clipboard");
}
</script>

<style scoped></style>
