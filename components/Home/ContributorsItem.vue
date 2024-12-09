<template>
  <div class="item du-collapse du-collapse-plus shrink-0 bg-neutral-100/50 dark:bg-neutral-900">
    <input class="h-full w-full" type="radio" name="contributors-list" :checked="index === 0" />
    <div class="du-collapse-title text-xl font-medium transition duration-500">
      {{ contributor.name }}
      <time class="mt-px block text-sm font-normal leading-none text-neutral-500 transition duration-500 dark:text-neutral-400">
        {{ new Intl.DateTimeFormat(undefined, { dateStyle: "long", timeZone: "UTC" }).format(new Date(contributor.dateAdded)) }}
      </time>
    </div>
    <div class="du-collapse-content">
      <ul class="text-base font-normal text-neutral-600 transition duration-500 dark:text-neutral-300">
        <li v-for="(note, index) in contributor.specific">→ {{ note }}{{ index === contributor.specific.length - 1 ? "" : "," }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  contributor: Credit;
  index: number;
}>();
</script>

<style scoped>
.item {
  transition:
    grid-template-rows 0.2s,
    background-color 0.5s;
}
</style>
