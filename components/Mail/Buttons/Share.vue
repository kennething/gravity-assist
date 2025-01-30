<template>
  <div class="relative">
    <button
      type="button"
      class="du-btn flex select-none items-center justify-center gap-2 rounded-xl border-blue-300 bg-blue-100 transition duration-500 hover:scale-105 hover:border-blue-400 hover:bg-blue-200 dark:border-blue-500 dark:hover:bg-blue-700"
      :class="{ 'scale-105 border-blue-400 bg-blue-200 dark:bg-blue-700': showDialog, 'dark:bg-blue-800': !showDialog, 'cursor-not-allowed': !savedMail }"
      :disabled="!savedMail"
      @click="shareText"
    >
      <span class="hidden transition duration-500 sm:inline-flex md:hidden lg:inline-flex">Share</span>
      <img class="size-5 transition duration-500 dark:invert" src="/ui/share.svg" aria-hidden="true" />
    </button>
    <Transition name="fade">
      <div v-if="showDialog" class="fo-tooltip-content visible bottom-12 left-1/2 -translate-x-1/2 opacity-100" role="popover">
        <div
          class="fo-tooltip-body flex w-52 flex-col items-center justify-center gap-3 rounded-lg border-2 border-blue-300 bg-blue-100 p-4 text-start shadow transition duration-500 dark:border-blue-500 dark:bg-blue-800"
        >
          <p class="text-center text-lg font-medium text-black transition duration-500 dark:text-white">Link copied to clipboard!</p>
          <img class="spin size-10 dark:invert" src="/ui/checkmarkCircle.svg" aria-hidden="true" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const route = useRoute();

const props = defineProps<{
  showDialog: boolean;
  savedMail: SaveTemplate | undefined;
}>();

const emit = defineEmits<{ toggleDialog: [boolean] }>();

function shareText() {
  if (props.showDialog) return;

  void navigator.clipboard.writeText(`${config.public.baseUrl}/modules/mail-editor/edit?u=${route.query.u}&id=${route.query.id}`);

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
