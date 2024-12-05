<template>
  <div id="menu" class="flex w-[50rem] flex-col items-start justify-center gap-2 rounded-2xl bg-white p-10 dark:bg-neutral-800" @click.stop>
    <h2 class="text-2xl font-bold dark:text-white">Contributors</h2>
    <div class="h-96 w-full overflow-y-scroll p-4">
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li class="mb-10 ms-6" v-for="change in loadedChangelog" :key="change.version">
          <span class="absolute -start-3 flex size-7 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
            <img class="size-5 dark:invert" :src="change.type === 'bugfix' ? '/ui/bugFix.svg' : change.type === 'release' ? '/ui/majorRelease.svg' : '/ui/minorRelease.svg'" aria-hidden="true" />
          </span>
          <h3 class="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            v{{ change.version }}
            <span
              class="me-2 ms-3 rounded px-2.5 py-0.5 text-sm font-medium"
              :class="{
                'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300': change.type === 'release',
                'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300': change.type === 'minor release',
                'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300': change.type === 'bugfix'
              }"
              >{{ change.type === "release" ? "Release" : change.type === "minor release" ? "Feature" : "Bugfix" }}</span
            >
            <span
              v-if="change.version === changelog[changelog.length - 1].version"
              class="me-1 ms-1 rounded bg-yellow-100 px-2.5 py-0.5 text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
              >Latest</span
            >
          </h3>
          <time class="mb-2 block text-sm font-normal leading-none text-gray-400">Released on {{ new Intl.DateTimeFormat(undefined, { dateStyle: "long" }).format(new Date(change.release)) }}</time>
          <ul class="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
            <li v-for="(note, index) in change.notes">→ {{ note }}{{ index === change.notes.length - 1 ? "" : "," }}</li>
          </ul>
        </li>
      </ol>
      <button
        v-if="!endOfChangelog"
        class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-blue-300 dark:focus:ring-gray-700"
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
  console.log("a");
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
