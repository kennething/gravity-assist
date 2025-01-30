<template>
  <button
    class="group/card relative flex h-40 w-full grow-0 flex-col items-center justify-center rounded-xl bg-neutral-100 pb-3 transition duration-500 hover:bg-neutral-200 hover:duration-150 sm:w-auto sm:grow xl:h-36 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    type="button"
  >
    <img class="absolute left-0 top-0 size-8 select-none rounded-br-lg rounded-tl-xl" :src="mod.img" :alt="mod.system" loading="lazy" />
    <h3 class="text-xl font-semibold transition duration-500">{{ mod.system }}</h3>

    <p v-if="mod.type === 'known'" class="w-5/6">
      <span v-for="part in italicize(mod.name)" class="transition duration-500" :class="{ italic: part[1] }">{{ part[0] }}</span>
    </p>
    <p v-else class="w-5/6 transition duration-500">Unknown Module</p>
  </button>
</template>

<script setup lang="ts">
defineProps<{ mod: AllModule }>();
</script>

<style scoped></style>
