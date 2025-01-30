<template>
  <div class="relative flex flex-col items-start justify-start rounded-xl">
    <button
      class="flex h-9 w-9 select-none items-center justify-center rounded-full border bg-white p-0 transition duration-500 lg:w-32 lg:justify-start lg:p-2 lg:px-4 dark:bg-neutral-800"
      :class="
        showFilters
          ? 'border-2 border-[#794dff] shadow-sm shadow-[#794dff38] ring-0 ring-[#794dff]'
          : 'border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-700'
      "
      type="button"
      @click="showFilters = !showFilters"
    >
      <img class="size-5 transition duration-500 dark:invert" src="/ui/filter.svg" aria-hidden="true" />
      <p class="hidden grow transition duration-500 lg:block">Filter</p>
    </button>

    <div
      v-show="showFilters"
      class="absolute top-10 z-[2] flex w-52 flex-col items-start justify-center gap-1 rounded-xl border-2 border-neutral-200 bg-white p-3 shadow-md transition duration-500 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <button v-for="(filter, key) in filters" :key="key" class="du-label flex w-full cursor-pointer items-center justify-start gap-2" type="button" @click="selectFilter(key)">
        <input
          type="checkbox"
          class="du-checkbox pointer-events-none"
          style="background-size: cover"
          :style="{ backgroundColor: currentFilters.includes(key) ? 'inherit' : '' }"
          :checked="currentFilters.includes(key)"
        />
        <span class="text-left capitalize transition duration-500">{{ key }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ close: boolean }>();
const emit = defineEmits<{ filter: [ShipFilter] }>();

const showFilters = ref(false);

watch(
  () => props.close,
  (val) => {
    if (val) showFilters.value = false;
  }
);

const filters: Readonly<Record<string, ShipFilter>> = {
  unlocked: (ship) => ship.unlocked,
  "not unlocked": (ship) => !ship.unlocked,
  "v2+": (ship) => (ship.techPoints ?? 0) >= 100,
  fighters: (ship) => ship.type === "Fighter",
  corvettes: (ship) => ship.type === "Corvette",
  frigates: (ship) => ship.type === "Frigate",
  destroyers: (ship) => ship.type === "Destroyer",
  cruisers: (ship) => ship.type === "Cruiser",
  battlecruisers: (ship) => ship.type === "Battlecruiser",
  "auxiliary ships": (ship) => ship.type === "Auxiliary Ship",
  carriers: (ship) => ship.type === "Carrier",
  battleships: (ship) => ship.type === "Battleship"
};
const currentFilters = ref(["fighters", "corvettes", "frigates", "destroyers", "cruisers", "battlecruisers", "auxiliary ships", "carriers", "battleships"]);

function emitFilter() {
  const shipTypes = ["fighters", "corvettes", "frigates", "destroyers", "cruisers", "battlecruisers", "auxiliary ships", "carriers", "battleships"];
  const nonShipFilters = currentFilters.value.filter((filter) => !shipTypes.includes(filter));
  const shipFilters = currentFilters.value.filter((filter) => shipTypes.includes(filter));
  emit("filter", (ship: BlueprintAllShip) => nonShipFilters.every((filter) => filters[filter](ship)) && shipFilters.some((filter) => filters[filter](ship)));
}

watch(currentFilters, emitFilter);
onMounted(emitFilter);

function selectFilter(name: string) {
  if (!currentFilters.value.includes(name)) currentFilters.value = [...currentFilters.value, name];
  else currentFilters.value = currentFilters.value.filter((filter) => filter !== name);

  if (name === "unlocked") return (currentFilters.value = currentFilters.value.filter((filter) => filter !== "not unlocked"));
  if (name === "not unlocked") return (currentFilters.value = currentFilters.value.filter((filter) => filter !== "unlocked"));
}
</script>

<style scoped></style>
