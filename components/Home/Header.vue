<template>
  <nav class="fo-navbar sticky top-0 z-10 w-screen justify-between gap-4 shadow transition duration-500 dark:bg-body dark:shadow-neutral-700">
    <div class="fo-navbar-start">
      <button type="button" class="fo-btn fo-btn-circle fo-btn-text" @click="emit('toggle')">
        <img class="size-8 transition duration-500 dark:invert" src="/ui/menu.svg" alt="Toggle side menu" />
      </button>
    </div>
    <div class="fo-navbar-center flex items-center">
      <NuxtLink to="/home">
        <img class="h-10 transition duration-500 dark:invert" src="/logo/gravityAssist.svg" aria-hidden="true" />
      </NuxtLink>
    </div>
    <div class="fo-navbar-end items-center gap-4">
      <label class="fo-input-group hidden max-w-56 rounded-full transition duration-500 md:flex dark:border-neutral-400 dark:bg-neutral-700 dark:hover:border-neutral-400">
        <span class="fo-input-group-text">
          <img class="size-5 transition duration-500 dark:invert" src="/ui/search.svg" aria-hidden="true" />
        </span>
        <input type="text" class="fo-input grow rounded-e-full transition duration-500 dark:text-white dark:placeholder:text-neutral-300" placeholder="Search" />
      </label>
      <label class="du-swap du-swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" class="theme-controller hidden" :checked="isDarkMode" @click="isDarkMode = !isDarkMode" />
        <img class="du-swap-off size-8" src="/ui/sun.svg" aria-hidden="true" />
        <img class="du-swap-on size-8 invert" src="/ui/moon.svg" aria-hidden="true" />
      </label>
    </div>
  </nav>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  toggle: [void];
}>();

const store = useUserStore();
const { isDarkMode } = storeToRefs(store);
</script>

<style scoped></style>
