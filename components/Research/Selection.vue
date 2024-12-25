<template>
  <button
    class="flex w-[35rem] items-center justify-between rounded-xl bg-neutral-100/50 p-2 px-10 transition duration-500 hover:bg-neutral-200/75 hover:duration-200 dark:hover:bg-neutral-800"
    :class="ship.name === selected?.name && ship.variant === selected?.variant ? 'bg-neutral-200/75 dark:bg-neutral-800' : 'dark:bg-neutral-900'"
    v-for="(ship, index) in ships"
    :key="index"
    @click="emit('select', ship.name === selected?.name && ship.variant === selected?.variant ? undefined : ship)"
  >
    <div class="flex w-1/3 items-start">
      <img class="h-20" loading="lazy" :src="ship.img" :alt="ship.name" />
    </div>
    <div class="flex grow flex-col items-center justify-center">
      <p class="font-medium transition duration-500">{{ ship.name }}</p>
      <p class="text-sm transition duration-500">
        {{ ship.variantName }} <span class="text-sm transition duration-500" v-if="!('modules' in ship)">({{ ship.variant }})</span>
      </p>
    </div>
    <p class="w-1/5 text-right transition duration-500">{{ ((ship.weight / ships.reduce((total, ship) => total + ship.weight, 0)) * 100).toFixed(2) }}%</p>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  ships: AllShip[];
  selected: AllShip | undefined;
}>();
const emit = defineEmits<{
  select: [AllShip | undefined];
}>();
</script>

<style scoped></style>
