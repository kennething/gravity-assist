<template>
  <div class="relative">
    <button
      type="button"
      @click="emit('toggleDialog', !showDialog)"
      class="du-btn flex items-center justify-center gap-2 rounded-xl border-red-300 bg-red-100 transition duration-500 hover:scale-105 hover:border-red-400 hover:bg-red-200 dark:border-red-500 dark:hover:bg-red-700"
      :class="{ 'scale-105 border-red-400 bg-red-200 dark:bg-red-700': showDialog, 'dark:bg-red-800': !showDialog }"
    >
      <span class="hidden transition duration-500 sm:inline-flex md:hidden lg:inline-flex">Clear</span>
      <img class="size-5 transition duration-500 dark:invert" src="/ui/trash.svg" aria-hidden="true" />
    </button>
    <Transition name="fade">
      <div class="fo-tooltip-content visible -left-4 bottom-12 opacity-100 sm:left-1/2 sm:-translate-x-1/2" role="popover" v-if="showDialog">
        <div
          class="fo-tooltip-body flex w-64 flex-col items-center justify-center gap-3 rounded-lg border-2 border-red-300 bg-red-100 p-4 text-start shadow transition duration-500 dark:border-red-500 dark:bg-red-800"
        >
          <p class="text-center text-lg font-medium text-black transition duration-500 dark:text-white">Are you sure you want to clear the editor?</p>
          <div class="flex w-full items-center justify-between gap-2">
            <button
              type="button"
              @click="clearText"
              class="du-btn du-btn-outline grow rounded-xl border-black py-1 text-base text-black hover:border-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-neutral-200 dark:text-white dark:hover:border-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-black"
            >
              Yes
            </button>
            <button
              type="button"
              @click="emit('toggleDialog', false)"
              class="du-btn du-btn-outline grow rounded-xl border-black py-1 text-base text-black hover:border-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-neutral-200 dark:text-white dark:hover:border-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-black"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  showDialog: boolean;
}>();

const emit = defineEmits<{
  toggleDialog: [boolean];
  clearText: [void];
}>();

function clearText() {
  if (!props.showDialog) return;
  emit("clearText");
  emit("toggleDialog", false);
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
