<template>
  <button
    class="group/card relative flex h-40 w-full grow-0 flex-col items-center justify-center rounded-xl bg-neutral-100 pb-3 transition duration-500 hover:bg-neutral-200 hover:duration-150 sm:w-auto sm:grow dark:bg-neutral-900 dark:hover:bg-neutral-800"
  >
    <img class="absolute left-0 top-0 size-8 rounded-br-lg rounded-tl-xl" :src="mod.img" :alt="mod.system" loading="lazy" />
    <h3 class="text-xl font-semibold transition duration-500">{{ mod.system }}</h3>

    <p class="w-5/6" v-if="mod.type === 'known'">
      <span class="transition duration-500" v-for="part in italicize(mod.name)" :class="{ italic: part[1] }">{{ part[0] }}</span>
    </p>
    <p class="w-5/6 transition duration-500" v-else>Unknown Module</p>

    <p class="info absolute bottom-1 right-2 text-xs transition duration-300 group-hover/card:opacity-100">Click to view stats</p>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  mod: AllModule;
}>();
</script>

<style lang="scss" scoped>
.info {
  @apply opacity-0;
}

@media (hover: none) and (pointer: coarse) {
  .info {
    @apply opacity-100;
  }
}
</style>
