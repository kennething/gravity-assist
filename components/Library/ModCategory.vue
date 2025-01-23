<template>
  <div class="group flex w-full items-center justify-center gap-6">
    <div class="flex h-40 w-12 shrink-0 select-none items-center justify-center rounded-xl bg-neutral-100 text-4xl transition group-hover:bg-neutral-200">{{ category }}</div>
    <div class="grid w-full grid-cols-3 grid-rows-1 gap-2">
      <LibraryModCard v-for="mod in modules" :mod="mod" @click="emit('select', mod)" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modules: AllModule[];
  category: string;
}>();
const emit = defineEmits<{
  select: [AllModule];
}>();
</script>

<style scoped></style>
