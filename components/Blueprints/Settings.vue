<template>
  <div class="relative flex flex-col items-start justify-start rounded-xl">
    <button
      @click="showSettings = !showSettings"
      class="flex h-9 w-9 items-center justify-center rounded-full border bg-white p-0 transition duration-500 lg:w-32 lg:justify-start lg:p-2 lg:px-4 dark:bg-neutral-800"
      :class="
        showSettings
          ? 'border-2 border-[#794dff] shadow-sm shadow-[#794dff38] ring-0 ring-[#794dff]'
          : 'border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-700'
      "
    >
      <img class="size-5 transition duration-500 dark:invert" src="/ui/settings.svg" aria-hidden="true" />
      <p class="hidden grow transition duration-500 lg:block">Options</p>
    </button>

    <div
      v-show="showSettings"
      class="absolute top-10 z-[2] flex w-72 flex-col items-start justify-center gap-3 rounded-xl border-2 border-neutral-200 bg-white p-3 shadow-md transition duration-500 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <div class="flex w-full items-center justify-center gap-2">
        <label class="transition duration-500" for="layoutType">Grid View</label>
        <!-- prettier-ignore -->
        <input
            type="checkbox"
            class="fo-switch fo-switch-primary fo-switch-outline border-neutral-200 bg-neutral-900 transition duration-500 hover:border-neutral-400 hover:duration-200 dark:border-neutral-700 dark:bg-neutral-100 dark:hover:border-neutral-600"
            id="layoutType"
            :checked="listOn"
            @change="emit('list')"
            style="box-shadow: var(--handleoffsetcalculator) 0 0 4px var(--bg-color) inset, 0 0 0 4px var(--bg-color) inset, var(--switchhandleborder);"
          />
        <label class="transition duration-500" for="layoutType">List View</label>
      </div>

      <div class="flex w-full items-center justify-center gap-2">
        <label class="transition duration-500" for="layoutType">Show Variants</label>
        <!-- prettier-ignore -->
        <input
            type="checkbox"
            class="fo-switch fo-switch-primary fo-switch-outline border-neutral-200 bg-neutral-900 transition duration-500 hover:border-neutral-400 hover:duration-200 dark:border-neutral-700 dark:bg-neutral-100 dark:hover:border-neutral-600"
            id="layoutType"
            :checked="variantsOff"
            @change="emit('variants')"
            style="box-shadow: var(--handleoffsetcalculator) 0 0 4px var(--bg-color) inset, 0 0 0 4px var(--bg-color) inset, var(--switchhandleborder);"
          />
        <label class="transition duration-500" for="layoutType">Hide Variants</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  close: boolean;
}>();
watch(
  () => props.close,
  (val) => {
    if (val) showSettings.value = false;
  }
);
const emit = defineEmits<{
  list: [void];
  variants: [void];
}>();

const showSettings = ref(false);

const listOn = ref<boolean>();
const variantsOff = ref<boolean>();

onMounted(() => {
  listOn.value = localStorage.getItem("layout") === "list";
  variantsOff.value = localStorage.getItem("variants") !== "true";
});
</script>

<style scoped></style>
