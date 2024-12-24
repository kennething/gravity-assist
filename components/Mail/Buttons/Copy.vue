<template>
  <div class="relative">
    <button
      type="button"
      @click="copyText"
      class="du-btn flex items-center justify-center gap-2 rounded-xl border-green-300 bg-green-100 transition duration-500 hover:scale-105 hover:border-green-400 hover:bg-green-200 dark:border-green-500 dark:hover:bg-green-700"
      :class="{ 'scale-105 border-green-400 bg-green-200 dark:bg-green-700': showDialog, 'dark:bg-green-800': !showDialog }"
    >
      <span class="hidden transition duration-500 sm:inline-flex md:hidden lg:inline-flex">Copy</span>
      <img class="size-5 transition duration-500 dark:invert" src="/ui/copy.svg" aria-hidden="true" />
    </button>
    <Transition name="fade">
      <div class="fo-tooltip-content visible bottom-12 left-1/2 -translate-x-1/2 opacity-100" role="popover" v-if="showDialog">
        <div
          class="fo-tooltip-body flex w-52 flex-col items-center justify-center gap-3 rounded-lg border-2 border-green-300 bg-green-100 p-4 text-start shadow transition duration-500 dark:border-green-500 dark:bg-green-800"
        >
          <p class="text-center text-lg font-medium text-black transition duration-500 dark:text-white">Copied to clipboard!</p>
          <img class="spin size-10 dark:invert" src="/ui/checkmarkCircle.svg" aria-hidden="true" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  showDialog: boolean;
  outputText: string;
}>();

const emit = defineEmits<{
  toggleDialog: [boolean];
}>();

function copyText() {
  if (props.showDialog) return;

  navigator.clipboard.writeText(props.outputText);

  emit("toggleDialog", true);
  setTimeout(() => {
    emit("toggleDialog", false);
  }, 1500);
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

@keyframes spin {
  from {
    transform: rotate(-180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.spin {
  animation: spin 1s ease-out;
}
</style>
