<template>
  <button class="group/card relative flex h-40 grow flex-col items-center justify-center rounded-xl bg-neutral-100 pb-3 transition hover:bg-neutral-200">
    <img class="absolute left-0 top-0 size-8 rounded-br-lg rounded-tl-xl" :src="mod.img" :alt="mod.system" loading="lazy" />
    <h3 class="text-xl font-semibold">{{ mod.system }}</h3>

    <p class="w-5/6" v-if="mod.type === 'known'">
      <span v-for="part in italicize(mod.name)" :class="{ italic: part[1] }">{{ part[0] }}</span>
    </p>
    <p class="w-5/6" v-else>Unknown Module</p>

    <p class="info absolute bottom-1 right-2 hidden text-xs transition duration-300 group-hover/card:opacity-100">Click to view stats</p>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  mod: AllModule;
}>();
</script>

<style lang="scss" scoped>
.info {
  @apply block opacity-0;
}

@media (hover: none) and (pointer: coarse) {
  .info {
    @apply block;
  }
}
</style>
