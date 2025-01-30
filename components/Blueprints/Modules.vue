<template>
  <div id="menu" class="flex w-[80vw] flex-col items-center justify-center rounded-2xl bg-white p-4 md:w-[40rem] md:p-10 lg:w-[50rem] xl:w-[60rem] dark:bg-neutral-800" @click.stop>
    <h2 class="text-2xl font-bold">{{ ship.name }} ({{ ship.modules.filter((mod) => mod.unlocked).length }}/{{ ship.modules.length }})</h2>
    <p>{{ ship.variantName }}</p>
    <div class="my-4 flex h-80 w-full flex-col items-center justify-start gap-2 overflow-y-scroll p-4 sm:h-[30rem]">
      <div v-for="category in categories" class="w-full">
        <div v-if="ship.modules.some((mod) => mod.system.includes(category))" class="flex w-full flex-col items-center justify-center">
          <h4 class="my-2 text-xl font-bold">{{ category }} Modules</h4>
          <div class="flex w-full flex-wrap items-stretch justify-center gap-3">
            <LazyBlueprintsModuleCard v-for="mod in ship.modules.filter((mod) => mod.system.includes(category))" :key="mod.system" :owner="owner" :ship="ship" :mod="mod" @change="emit('change')" />
          </div>
        </div>
      </div>
    </div>
    <button
      class="fo-btn w-full grow border-green-100 bg-green-100 text-black transition duration-500 hover:border-green-300 hover:bg-green-300 dark:border-green-600 dark:bg-green-600 dark:text-white dark:hover:border-green-700 dark:hover:bg-green-700"
      type="button"
      @click="emit('done')"
    >
      Done
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  ship: BlueprintSuperCapitalShip;
  owner: boolean | undefined;
}>();
const emit = defineEmits<{
  done: [void];
  change: [void];
}>();

const categories = ["M", "A", "B", "C", "D", "E", "F", "G", "H"];
</script>

<style scoped></style>
