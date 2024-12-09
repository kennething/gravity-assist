<template>
  <div id="menu" class="flex w-[80vw] flex-col items-start justify-center gap-2 rounded-2xl bg-white p-4 md:w-[40rem] md:p-10 dark:bg-neutral-800" @click.stop>
    <h2 class="text-2xl font-bold dark:text-white">Changelog</h2>
    <div class="h-96 w-full overflow-y-scroll p-4">
      <ol class="relative border-s border-neutral-200 dark:border-neutral-700">
        <HomeChangelogItem class="mb-10 ms-6" v-for="change in loadedChangelog" :key="change.version" :change="change" />
      </ol>
      <button
        v-if="!endOfChangelog"
        class="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-neutral-100 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:text-blue-300 dark:focus:ring-neutral-700"
        @click="loadChangelog().next()"
      >
        <img class="size-5 dark:invert" src="/ui/load.svg" aria-hidden="true" />
        Load more
      </button>
    </div>
    <p class="dark:text-white">
      Current version: <span class="text-lg font-medium">v{{ changelog[changelog.length - 1].version }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
const loadedChangelog = ref<Changelog[]>([...changelog].reverse().slice(0, 5));
const changelogIndex = ref(5);
const endOfChangelog = ref(false);

function* loadChangelog() {
  while (true) {
    changelogIndex.value++;
    if (changelogIndex.value >= changelog.length) return (endOfChangelog.value = true);

    const change = [...changelog].reverse()[changelogIndex.value];
    loadedChangelog.value.push(change);

    if (changelogIndex.value % 5 === 0) yield;
  }
}
</script>

<style scoped></style>
