<template>
  <button
    class="flex w-full items-center justify-between gap-2 rounded-xl px-2 py-1 transition hover:bg-neutral-200/50"
    :class="{ 'bg-neutral-200/75 hover:bg-neutral-200/75': currentShip?.name === ship.name }"
    type="button"
  >
    <img class="h-10" :src="ship.img" :alt="ship.name" />
    <p class="text-medium grow text-left">{{ ship.name }}</p>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  ship: SuperCapitalShip;
  currentShip: SuperCapitalShip | undefined;
}>();
</script>

<style scoped></style>
