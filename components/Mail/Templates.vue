<template>
  <div id="menu" class="flex w-[80vw] flex-col items-start justify-center gap-2 rounded-2xl bg-white p-4 md:w-[40rem] md:p-10 lg:w-[50rem] xl:w-[60rem] dark:bg-neutral-800" @click.stop>
    <h2 class="text-2xl font-bold">Templates</h2>
    <div class="h-[30rem] w-full overflow-y-scroll p-4">
      <ul class="relative flex flex-wrap items-center justify-center gap-1">
        <MailTemplateItem
          v-for="(template, name, index) in mailTemplates"
          :key="name"
          :name="name"
          :template="template"
          @click="selectedTemplateIndex = index"
          :selected="index === selectedTemplateIndex"
        />
      </ul>
    </div>
    <div class="flex w-full items-center justify-between">
      <p>
        Selected: <span class="text-lg font-medium">{{ templateNames[selectedTemplateIndex] }}</span>
      </p>
      <button
        type="button"
        @click="emit('template', templates[selectedTemplateIndex])"
        class="du-btn flex items-center justify-center gap-2 rounded-xl border-green-300 bg-green-100 transition duration-500 hover:scale-105 hover:border-green-400 hover:bg-green-200 dark:border-green-500 dark:bg-green-800 dark:hover:bg-green-700"
      >
        <span class="hidden transition duration-500 sm:inline-flex md:hidden lg:inline-flex">Use this template</span>
        <img class="size-5 transition duration-500 dark:invert" src="/ui/arrowRight.svg" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Op } from "quill";

const emit = defineEmits<{
  template: [Op[]];
}>();

const templateNames = Object.keys(mailTemplates);
const templates = Object.values(mailTemplates);
const selectedTemplateIndex = ref(0);
</script>

<style scoped></style>
