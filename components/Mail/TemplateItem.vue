<template>
  <button
    class="flex w-full cursor-pointer select-none flex-col items-center justify-center rounded-xl p-6 transition hover:bg-neutral-100 xl:w-2/5 xl:grow dark:hover:bg-neutral-900"
    :class="{ 'bg-neutral-100 dark:bg-neutral-900': selected }"
    type="button"
  >
    <h3 class="text-2xl font-medium">{{ name }}</h3>
    <p>{{ selected ? "Selected" : "Click to select" }}</p>
    <div class="editor-bg mt-2 h-96 w-full rounded-2xl">
      <LazyMailQuill :underline="false" :clear-text="false" color="#ffffff" read-only :start-text="template" />
    </div>
  </button>
</template>

<script setup lang="ts">
import { Op } from "quill";

defineProps<{
  name: string;
  template: Op[];
  selected: boolean;
}>();
</script>

<style scoped></style>
