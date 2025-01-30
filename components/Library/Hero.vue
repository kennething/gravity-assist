<template>
  <div class="relative flex w-full items-center justify-center rounded-2xl bg-neutral-100/25 p-4 transition duration-500 dark:bg-neutral-900">
    <aside class="absolute left-0 top-0 rounded-br-2xl rounded-tl-2xl px-10 py-4">
      <h5 class="text-lg font-medium transition duration-500">{{ currentShip.name }}</h5>
      <p class="transition duration-500">{{ currentShip.type }}</p>
    </aside>

    <img class="h-32 select-none sm:h-40" :src="currentShip.img" :alt="currentShip.name" />

    <aside class="absolute bottom-0 right-0 rounded-br-2xl rounded-tl-2xl px-10 py-4">
      <p class="transition duration-500">{{ currentShip.modules.length }} Modules</p>
      <NuxtLink
        :to="`/modules/research-agreement-helper?shn=${currentShip.name}&shv=A`"
        class="fo-btn w-full border-yellow-300 bg-yellow-300 text-black transition duration-500 hover:border-yellow-200 hover:bg-yellow-200 dark:border-yellow-600 dark:bg-yellow-600 dark:text-white dark:hover:border-yellow-500 dark:hover:bg-yellow-500"
      >
        View in RA Helper
      </NuxtLink>
    </aside>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentShip: SuperCapitalShip;
}>();
</script>

<style scoped></style>
