<template>
  <div
    class="relative flex w-[90vw] flex-col items-center justify-center gap-2 rounded-xl border-transparent p-4 transition duration-500 sm:w-96"
    :class="{ 'bg-neutral-200 dark:bg-neutral-800': chance === -1, 'bg-neutral-100/50 dark:bg-neutral-900': chance !== -1, 'border-2 border-yellow-300': isBestPath }"
  >
    <div class="flex w-full flex-col items-center justify-center" v-if="ship">
      <h3 class="text-xl font-bold transition duration-500">{{ ship.name }}</h3>
      <p class="transition duration-500">
        {{ ship.variantName }} <span class="transition duration-500" v-if="ship.hasVariants">({{ ship.variant }})</span>
      </p>
      <img class="my-2.5 h-32" :src="ship.img" :alt="ship.name" />
      <p class="text-xl font-medium transition duration-500" :class="{ 'text-red-600': chance === -1 }">{{ chance === -1 ? "Not found in this path" : chance.toFixed(2) + "%" }}</p>

      <div class="mt-3 flex w-full flex-col items-center justify-center gap-2">
        <button
          :disabled="isBestPath"
          class="fo-btn w-full border-yellow-300 bg-yellow-300 text-black transition duration-500 hover:border-yellow-200 hover:bg-yellow-200 dark:border-yellow-600 dark:bg-yellow-600 dark:text-white dark:hover:border-yellow-500 dark:hover:bg-yellow-500"
          @click="emit('bestPath', ship)"
        >
          {{ isBestPath ? "This is the best path!" : "Find best path" }}
        </button>
        <NuxtLink
          v-if="'modules' in ship"
          :to="`/modules/module-library?s=${ship.name}`"
          class="fo-btn w-full border-neutral-200 bg-neutral-200 text-black transition duration-500 hover:border-neutral-100 hover:bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-600 dark:text-white dark:hover:border-neutral-500 dark:hover:bg-neutral-500"
        >
          View in Module Library
        </NuxtLink>
      </div>
    </div>
    <div class="flex h-56 w-full items-center justify-center text-xl font-medium transition duration-500" v-else>Select a ship to view more details!</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  manufacturer: ManufacturerOption;
  direction: DirectionOption;
  scope: ScopeOption;
  rawData: AllShip[] | undefined;
  ship: AllShip | undefined;
  chance: number;
}>();
const emit = defineEmits<{
  bestPath: [AllShip];
}>();

const isBestPath = computed(() => {
  if (!props.rawData || !props.ship) return;
  const ship = props.ship;
  return props.manufacturer === ship.manufacturer && props.direction === findBestDirection(props.rawData, ship) && props.scope === ship.scope;
});
</script>

<style scoped></style>
