<template>
  <button
    class="flex w-full items-center justify-between gap-2 rounded-xl px-2 py-1 transition duration-500 hover:bg-neutral-200/50 hover:duration-150 dark:hover:bg-neutral-800"
    :class="{ 'bg-neutral-200/75 hover:bg-neutral-200/75 dark:bg-neutral-700 dark:hover:bg-neutral-700': currentShip?.name === ship.name }"
    type="button"
  >
    <img class="h-10" :src="ship.img" :alt="ship.name" />
    <p class="text-medium grow text-left transition duration-500">{{ ship.name }}</p>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  ship: SuperCapitalShip;
  currentShip: SuperCapitalShip | undefined;
}>();
</script>

<style scoped></style>
