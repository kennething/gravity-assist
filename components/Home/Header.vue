<template>
  <nav class="fo-navbar sticky top-0 z-10 w-screen justify-between gap-4 bg-body shadow transition duration-500 dark:shadow-neutral-700">
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
