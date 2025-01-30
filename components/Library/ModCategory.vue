<template>
  <div class="group flex w-full items-center justify-center gap-3 xl:gap-6">
    <div
      class="hidden h-40 w-12 shrink-0 select-none items-center justify-center rounded-xl bg-neutral-100 text-4xl transition duration-500 group-hover:bg-neutral-200 group-hover:duration-150 lg:flex xl:h-36 dark:bg-neutral-900 dark:group-hover:bg-neutral-800"
    >
      {{ category }}
    </div>
    <div v-auto-animate class="flex w-full grid-cols-3 grid-rows-1 flex-col items-center justify-center gap-2 sm:grid">
      <LibraryModCard v-for="mod in modules" :key="mod.system" :mod="mod" @click="emit('select', mod)" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modules: AllModule[];
  category: string;
}>();
const emit = defineEmits<{ select: [AllModule] }>();
</script>

<style scoped></style>
