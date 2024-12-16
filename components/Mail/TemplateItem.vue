<template>
  <div class="flex w-2/5 grow cursor-pointer flex-col items-center justify-center rounded-xl p-6 transition hover:bg-neutral-100" :class="{ 'bg-neutral-100': selected }">
    <h3 class="text-2xl font-medium">{{ name }}</h3>
    <p>{{ selected ? "Selected" : "Click to select" }}</p>
    <div class="editor-bg mt-2 w-full rounded-2xl">
      <MailQuill :underline="false" :clear-text="false" :color="'#ffffff'" readonly :start-text="template" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Op } from "quill";

const props = defineProps<{
  name: string;
  template: Op[];
  selected: boolean;
}>();
</script>

<style scoped>
.editor-bg {
  background: radial-gradient(#1e232a, #080a0c);
}
</style>
