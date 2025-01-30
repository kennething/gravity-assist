<template>
  <div class="relative flex flex-col items-start justify-start rounded-xl">
    <button
      class="flex h-9 w-9 select-none items-center justify-center rounded-full border bg-white p-0 transition duration-500 lg:w-32 lg:justify-start lg:p-2 lg:px-4 dark:bg-neutral-800"
      :class="
        showSorters
          ? 'border-2 border-[#794dff] shadow-sm shadow-[#794dff38] ring-0 ring-[#794dff]'
          : 'border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-700'
      "
      type="button"
      @click="showSorters = !showSorters"
    >
      <img class="size-5 transition duration-500 dark:invert" src="/ui/sort.svg" aria-hidden="true" />
      <p class="hidden grow transition duration-500 lg:block">Sort</p>
    </button>

    <div
      v-show="showSorters"
      class="absolute top-10 z-[2] flex w-44 flex-col items-start justify-center gap-1 rounded-xl border-2 border-neutral-200 bg-white p-3 shadow-md transition duration-500 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <button v-for="(sorter, key) in sorters" :key="key" class="du-label flex w-full cursor-pointer items-center justify-start gap-2" type="button" @click="selectSorter(key)">
        <input
          type="checkbox"
          class="du-checkbox pointer-events-none"
          style="background-size: cover"
          :style="{ backgroundColor: currentSorter === key ? 'inherit' : '' }"
          :checked="currentSorter === key"
        />
        <span class="text-left capitalize transition duration-500">{{ key }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ close: boolean }>();
const emit = defineEmits<{ sort: [ShipSorter | undefined] }>();

const showSorters = ref(false);
watch(
  () => props.close,
  (val) => {
    if (val) showSorters.value = false;
  }
);

const enCollator = new Intl.Collator(undefined, { sensitivity: "base" });
const sorters: Record<string, ShipSorter> = {
  "a-z": (a, b) => enCollator.compare(a.name, b.name),
  "z-a": (a, b) => enCollator.compare(b.name, a.name),
  // if not unlocked, put them at the bottom
  "most TP": (a, b) => (a.unlocked ? 0 : 1) - (b.unlocked ? 0 : 1) || b.techPoints - a.techPoints,
  "least TP": (a, b) => (a.unlocked ? 0 : 1) - (b.unlocked ? 0 : 1) || a.techPoints - b.techPoints
};

const currentSorter = ref("a-z");
watch(currentSorter, (sorter) => emit("sort", sorters[sorter]));

onMounted(() => emit("sort", sorters[currentSorter.value]));

function selectSorter(name: string) {
  if (currentSorter.value === name) return;
  currentSorter.value = name;
}
</script>

<style scoped></style>
