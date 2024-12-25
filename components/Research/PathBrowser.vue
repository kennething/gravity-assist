<template>
  <div class="flex w-96 flex-col items-center justify-center gap-2 rounded-xl bg-neutral-100/50 p-4 transition duration-500 dark:bg-neutral-900">
    <h3 class="mb-2 text-2xl font-bold transition duration-500">Path Browser</h3>

    <div class="flex w-full items-center justify-between gap-3">
      <div class="du-tooltip" data-tip="Previous">
        <button type="button" class="group fo-btn fo-btn-circle fo-btn-text" @click="changeOption('manufacturer', 'previous')">
          <img class="size-6 transition duration-500 group-hover:-translate-x-1 dark:invert" src="/ui/arrowLeft.svg" alt="Move to the previous manufacturer" />
        </button>
      </div>
      <h3 class="grow rounded-xl bg-neutral-200/50 py-2 text-xl font-medium transition duration-500 dark:bg-neutral-800">{{ manufacturers[manufacturer] }}</h3>
      <div class="du-tooltip" data-tip="Next">
        <button type="button" class="group fo-btn fo-btn-circle fo-btn-text" @click="changeOption('manufacturer', 'next')">
          <img class="size-6 transition duration-500 group-hover:translate-x-1 dark:invert" src="/ui/arrowRight.svg" alt="Move to the next manufacturer" />
        </button>
      </div>
    </div>

    <div class="flex w-full items-center justify-between gap-3">
      <div class="du-tooltip" data-tip="Previous">
        <button type="button" class="group fo-btn fo-btn-circle fo-btn-text" @click="changeOption('direction', 'previous')">
          <img class="size-6 transition duration-500 group-hover:-translate-x-1 dark:invert" src="/ui/arrowLeft.svg" alt="Move to the previous direction" />
        </button>
      </div>
      <h3 class="grow rounded-xl bg-neutral-200/50 py-2 text-xl font-medium transition duration-500 dark:bg-neutral-800">{{ directions[direction] }}</h3>
      <div class="du-tooltip" data-tip="Next">
        <button type="button" class="group fo-btn fo-btn-circle fo-btn-text" @click="changeOption('direction', 'next')">
          <img class="size-6 transition duration-500 group-hover:translate-x-1 dark:invert" src="/ui/arrowRight.svg" alt="Move to the next direction" />
        </button>
      </div>
    </div>

    <div class="flex w-full items-center justify-between gap-3">
      <div class="du-tooltip" data-tip="Previous">
        <button type="button" class="group fo-btn fo-btn-circle fo-btn-text" @click="changeOption('scope', 'previous')">
          <img class="size-6 transition duration-500 group-hover:-translate-x-1 dark:invert" src="/ui/arrowLeft.svg" alt="Move to the previous scope" />
        </button>
      </div>
      <h3 class="grow rounded-xl bg-neutral-200/50 py-2 text-xl font-medium transition duration-500 dark:bg-neutral-800">{{ scopes[scope] }}</h3>
      <div class="du-tooltip" data-tip="Next">
        <button type="button" class="group fo-btn fo-btn-circle fo-btn-text" @click="changeOption('scope', 'next')">
          <img class="size-6 transition duration-500 group-hover:translate-x-1 dark:invert" src="/ui/arrowRight.svg" alt="Move to the next scope" />
        </button>
      </div>
    </div>

    <p
      class="mt-2 text-lg font-medium transition duration-500"
      :class="{
        'text-yellow-400 dark:text-yellow-300': totalTime.time > 280 && totalTime.time <= 380,
        'text-orange-500': totalTime.time > 380 && totalTime.time <= 480,
        'text-red-600': totalTime.time > 480
      }"
    >
      Time to complete: {{ totalTime.formattedString }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  manufacturer: number;
  direction: number;
  scope: number;
}>();
const emit = defineEmits<{
  change: ["manufacturer" | "direction" | "scope", number];
}>();

const userStore = useUserStore();
const difficulty = computed(() => userStore.shipDifficulties);

const options: Record<string, (ManufacturerOption | DirectionOption | ScopeOption)[]> = {
  manufacturer: manufacturers,
  direction: directions,
  scope: scopes
};
function changeOption(type: "manufacturer" | "direction" | "scope", direction: "previous" | "next") {
  const diff = direction === "previous" ? -1 : 1;
  let target = props[type] + diff;
  const targetArr = options[type];

  if (target < 0) target = targetArr.length - 1;
  if (target > targetArr.length - 1) target = 0;

  emit("change", type, target);
}

/** Time to complete the RA in hours
 * @example { 25.45, "{days}d, {hours}h, {minutes}m" }
 */
const totalTime = computed(() => {
  if (!difficulty.value) return { time: 0, formattedString: "0d" };
  const allPointers: number[] = [];

  const manufacturer = manufacturers[props.manufacturer];
  const direction = directions[props.direction];
  const scope = scopes[props.scope];

  if (manufacturer !== "Empty") allPointers.push(difficulty.value[manufacturer]);
  if (direction !== "Empty") allPointers.push(difficulty.value[direction]);
  if (scope !== "Empty") allPointers.push(difficulty.value[scope]);

  let time = 0;
  if (allPointers.length >= 1) time += allPointers[0] * 10;
  if (allPointers.length >= 2) time += (allPointers[0] + allPointers[1]) * 10;
  if (allPointers.length >= 3) time += allPointers[0] * allPointers[1] * allPointers[2] * 0.4 * 10;

  const days = Math.floor(time / 24);
  const hours = Math.floor(time % 24);
  const minutes = Math.floor(((time % 24) % 1) * 60);

  let formattedString = "";
  if (days > 0) formattedString += `${days}d`;
  if (hours > 0) formattedString += `, ${hours}h`;
  if (minutes > 0) formattedString += `, ${minutes}m`;

  return { time, formattedString: formattedString || "nice try pal" };
});
</script>

<style scoped></style>
