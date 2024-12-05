<template>
  <nav class="fo-navbar sticky top-0 z-10 w-screen justify-between gap-4 shadow">
    <div class="fo-navbar-start">
      <button type="button" class="fo-btn fo-btn-circle fo-btn-text" @click="emit('toggle')">
        <img class="size-8" src="/ui/menu.svg" alt="Toggle side menu" />
      </button>
    </div>
    <div class="fo-navbar-center flex items-center">
      <NuxtLink to="/home">
        <img class="h-10" src="/logo/gravityAssist.svg" aria-hidden="true" />
      </NuxtLink>
    </div>
    <div class="fo-navbar-end items-center gap-4">
      <button class="fo-btn fo-btn-circle fo-btn-text fo-btn-sm size-[2.125rem] sm:hidden">
        <span class="icon-[tabler--search] size-[1.375rem]"></span>
      </button>
      <label class="fo-input-group hidden max-w-56 rounded-full sm:flex">
        <span class="fo-input-group-text">
          <span class="icon-[tabler--search] size-5 text-base-content/80"></span>
        </span>
        <input type="search" class="fo-input grow rounded-e-full" placeholder="Search" />
      </label>
      <label class="du-swap du-swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" class="theme-controller hidden" value="synthwave" />
        <img class="du-swap-off size-8" src="/ui/sun.svg" aria-hidden="true" />
        <img class="du-swap-on size-8" src="/ui/moon.svg" aria-hidden="true" />
      </label>
    </div>
  </nav>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  toggle: [void];
}>();
</script>

<style scoped></style>
