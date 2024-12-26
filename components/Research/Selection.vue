<template>
  <button
    v-if="ships.length > 0"
    class="flex w-[90vw] items-center justify-between rounded-xl bg-neutral-100/50 p-2 px-10 transition duration-500 hover:bg-neutral-200/75 hover:duration-200 sm:w-96 lg:w-[35rem] xl:w-[31rem] min-[1338px]:w-[35rem] dark:hover:bg-neutral-800"
    :class="{
      'bg-neutral-200/75 dark:bg-neutral-800': isSelected(ship),
      'dark:bg-neutral-900': !isSelected(ship),
      'border border-yellow-300/40 hover:border-yellow-300 dark:border-yellow-300/25': isBestPath(ship) && !isSelected(ship),
      'border border-yellow-300': isBestPath(ship) && isSelected(ship)
    }"
    v-for="(ship, index) in ships"
    :key="index"
    @click="emit('select', ship.name === selected?.name && ship.variant === selected?.variant ? undefined : ship)"
  >
    <div class="hidden w-1/3 items-start sm:flex">
      <img class="h-10 md:h-14 lg:h-20" loading="lazy" :src="ship.img" :alt="ship.name" />
    </div>
    <div class="flex grow flex-col items-start justify-center sm:items-center">
      <p class="font-medium transition duration-500">{{ ship.name }}</p>
      <p class="text-sm transition duration-500">
        {{ ship.variantName }} <span class="text-sm transition duration-500" v-if="!('modules' in ship)">({{ ship.variant }})</span>
      </p>
    </div>
    <p class="w-1/5 text-right transition duration-500">{{ ((ship.weight / ships.reduce((total, ship) => total + ship.weight, 0)) * 100).toFixed(2) }}%</p>
  </button>

  <div
    v-else
    class="fo-skeleton fo-skeleton-animated flex h-16 w-[90vw] items-center justify-between rounded-xl bg-neutral-100/50 p-2 px-10 transition duration-500 sm:h-24 sm:w-96 lg:w-[35rem] xl:w-[31rem] min-[1338px]:w-[35rem]"
    v-for="i in 5"
    :key="i"
  ></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  manufacturer: ManufacturerOption;
  direction: DirectionOption;
  scope: ScopeOption;
  rawData: AllShip[] | undefined;
  ships: AllShip[];
  selected: AllShip | undefined;
}>();
const emit = defineEmits<{
  select: [AllShip | undefined];
}>();

function isBestPath(ship: AllShip) {
  if (!props.rawData) return;
  return props.manufacturer === ship.manufacturer && props.direction === findBestDirection(props.rawData, ship) && props.scope === ship.scope;
}

function isSelected(ship: AllShip) {
  return ship.name === props.selected?.name && ship.variant === props.selected?.variant;
}
</script>

<style scoped></style>
