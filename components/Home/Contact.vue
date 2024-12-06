<template>
  <div id="menu" class="flex w-[40rem] flex-col items-start justify-center gap-2 rounded-2xl bg-white p-10 dark:bg-neutral-800" @click.stop>
    <h2 class="text-2xl font-bold dark:text-white">Contact</h2>
    <p class="dark:text-white">The best way to reach me is through Discord!</p>
    <div class="mt-4 flex w-full flex-col items-center justify-center gap-2">
      <div class="flex w-full items-center justify-center gap-4">
        <p class="w-40 text-nowrap dark:text-white">Infinite Lagrange</p>
        <div class="fo-input-group hidden grow rounded-full sm:flex dark:border-neutral-400 dark:bg-neutral-600 dark:hover:border-neutral-400">
          <span class="fo-input-group-text">
            <img class="size-5 dark:invert" src="/ui/search.svg" aria-hidden="true" />
          </span>
          <div type="search" class="fo-input grow rounded-e-full">
            <p class="dark:text-white">DubNubz</p>
          </div>
          <div class="du-tooltip fo-input-group-text p-0" data-tip="Copy">
            <button class="fo-btn fo-btn-circle fo-btn-text" @click="copyText('DubNubz')">
              <img class="size-5 dark:invert" src="/ui/copy.svg" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div class="flex w-full items-center justify-center gap-4">
        <p class="w-40 text-nowrap dark:text-white">Discord</p>
        <div class="fo-input-group hidden grow rounded-full sm:flex dark:border-neutral-400 dark:bg-neutral-600 dark:hover:border-neutral-400">
          <span class="fo-input-group-text">
            <img class="size-5 dark:invert" src="/logo/discord.svg" aria-hidden="true" />
          </span>
          <div type="search" class="fo-input grow rounded-e-full">
            <p class="dark:text-white">@micromidget</p>
          </div>
          <div class="du-tooltip fo-input-group-text p-0" data-tip="Copy">
            <button class="fo-btn fo-btn-circle fo-btn-text" @click="copyText('micromidget')">
              <img class="size-5 dark:invert" src="/ui/copy.svg" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div class="flex w-full items-center justify-center gap-4">
        <p class="w-40 text-nowrap dark:text-white">Server</p>
        <div class="fo-input-group hidden grow rounded-full sm:flex dark:border-neutral-400 dark:bg-neutral-600 dark:hover:border-neutral-400">
          <span class="fo-input-group-text">
            <img class="size-5 dark:invert" src="/logo/discord.svg" aria-hidden="true" />
          </span>
          <div type="search" class="fo-input grow rounded-e-full">
            <a class="no-underline hover:underline dark:text-white" href="https://discord.com/invite/9mJ9b2Bbzx" target="_blank">https://discord.gg/9mJ9b2Bbzx</a>
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
