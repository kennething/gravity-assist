<template>
  <div class="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start gap-4 p-8">
    <div v-for="ship in ships">
      <p>{{ ship.name }} ({{ ship.variant }})</p>
      <p class="text-sm">{{ ship.img }}</p>
      <img class="h-10" :src="ship.img" aria-hidden="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore();
const ships = computed(() => userStore.shipData);
</script>

<style scoped></style>
