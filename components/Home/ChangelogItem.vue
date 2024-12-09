<template>
  <li :key="change.version">
    <span class="absolute -start-3 flex size-7 items-center justify-center rounded-full bg-blue-100 transition duration-500 dark:bg-blue-900">
      <img
        class="size-5 transition duration-500 dark:invert"
        :src="change.type === 'bugfix' ? '/ui/bugFix.svg' : change.type === 'release' ? '/ui/majorRelease.svg' : '/ui/minorRelease.svg'"
        aria-hidden="true"
      />
    </span>
    <h3 class="mb-1 flex items-center text-lg font-semibold text-neutral-900 transition duration-500 dark:text-white">
      v{{ change.version }}
      <span
        class="me-2 ms-3 rounded px-2.5 py-0.5 text-sm font-medium transition duration-500"
        :class="{
          'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300': change.type === 'release',
          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300': change.type === 'minor release',
          'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300': change.type === 'bugfix'
        }"
        >{{ change.type === "release" ? "Release" : change.type === "minor release" ? "Feature" : "Bugfix" }}</span
      >
      <span
        v-if="change.version === changelog[changelog.length - 1].version"
        class="me-1 ms-1 rounded bg-yellow-100 px-2.5 py-0.5 text-sm font-medium text-yellow-800 transition duration-500 dark:bg-yellow-900 dark:text-yellow-300"
        >Latest</span
      >
    </h3>
    <time class="mb-2 block text-sm font-normal leading-none text-neutral-400"
      >Released on {{ new Intl.DateTimeFormat(undefined, { dateStyle: "long", timeZone: "UTC" }).format(new Date(change.release)) }}</time
    >
    <ul class="mb-4 text-base font-normal text-neutral-500 transition duration-500 dark:text-neutral-300">
      <li v-for="(note, index) in change.notes">→ {{ note }}{{ index === change.notes.length - 1 ? "" : "," }}</li>
    </ul>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  change: Changelog;
}>();
</script>

<style scoped></style>
