<template>
  <div id="menu" class="flex w-[80vw] flex-col items-start justify-center gap-2 rounded-2xl md:w-[40rem]" :class="{ 'bg-white p-4 md:p-10 dark:bg-neutral-800': !isBlock }" @click.stop>
    <h2 v-if="!isBlock" class="text-2xl font-bold transition duration-500">Contact</h2>
    <p class="transition duration-500">The best way to reach me is through Discord!</p>
    <div class="mt-4 flex flex-col items-center justify-center gap-2" :class="isBlock ? 'w-full md:w-[25rem] lg:w-[35rem] xl:w-full' : 'w-full'">
      <div class="flex w-full flex-col items-start justify-center gap-1 md:flex-row md:items-center md:gap-4">
        <p class="w-40 text-nowrap text-left transition duration-500">Infinite Lagrange</p>
        <div class="fo-input-group flex grow rounded-full bg-body transition duration-500 dark:border-neutral-400 dark:bg-neutral-600 dark:hover:border-neutral-400">
          <span class="fo-input-group-text">
            <img class="size-5 select-none transition duration-500 dark:invert" src="/ui/search.svg" aria-hidden="true" />
          </span>
          <div type="search" class="fo-input grow rounded-e-full">
            <p class="w-44 overflow-hidden overflow-ellipsis text-nowrap text-left transition duration-500 sm:w-full">DubNubz</p>
          </div>
          <div class="du-tooltip fo-input-group-text p-0" data-tip="Copy">
            <button class="fo-btn fo-btn-circle fo-btn-text" type="button" @click="copyText('DubNubz')">
              <img class="size-5 select-none transition duration-500 dark:invert" src="/ui/copy.svg" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col items-start justify-center gap-1 md:flex-row md:items-center md:gap-4">
        <p class="w-40 text-nowrap text-left transition duration-500">Discord</p>
        <div class="fo-input-group flex grow rounded-full bg-body transition duration-500 dark:border-neutral-400 dark:bg-neutral-600 dark:hover:border-neutral-400">
          <span class="fo-input-group-text">
            <img class="size-5 select-none transition duration-500 dark:invert" src="/logo/discord.svg" aria-hidden="true" />
          </span>
          <div type="search" class="fo-input grow rounded-e-full">
            <p class="w-44 overflow-hidden overflow-ellipsis text-nowrap text-left transition duration-500 sm:w-full">micromidget</p>
          </div>
          <div class="du-tooltip fo-input-group-text p-0" data-tip="Copy">
            <button class="fo-btn fo-btn-circle fo-btn-text" type="button" @click="copyText('micromidget')">
              <img class="size-5 select-none transition duration-500 dark:invert" src="/ui/copy.svg" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col items-start justify-center gap-1 md:flex-row md:items-center md:gap-4">
        <p class="w-40 text-nowrap text-left transition duration-500">Server</p>
        <div class="fo-input-group flex grow rounded-full bg-body transition duration-500 dark:border-neutral-400 dark:bg-neutral-600 dark:hover:border-neutral-400">
          <span class="fo-input-group-text">
            <img class="size-5 select-none transition duration-500 dark:invert" src="/logo/discord.svg" aria-hidden="true" />
          </span>
          <div type="search" class="fo-input grow rounded-e-full">
            <a
              class="block w-44 overflow-hidden overflow-ellipsis text-nowrap text-left no-underline transition duration-500 hover:underline sm:w-full"
              href="https://discord.com/invite/9mJ9b2Bbzx"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://discord.gg/9mJ9b2Bbzx
            </a>
          </div>
          <div class="du-tooltip fo-input-group-text p-0" data-tip="Join">
            <a class="fo-btn fo-btn-circle fo-btn-text no-underline" href="https://discord.com/invite/9mJ9b2Bbzx" target="_blank" rel="noopener noreferrer">
              <img class="size-5 select-none transition duration-500 dark:invert" src="/ui/arrowRight.svg" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isBlock?: boolean;
}>();

function copyText(text: string) {
  void navigator.clipboard.writeText(text);
}
</script>

<style scoped></style>
