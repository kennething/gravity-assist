<template>
  <div class="flex h-full min-h-[calc(100svh-8rem)] w-full flex-col items-center justify-start p-8">
    <div class="flex w-full flex-col items-center justify-center md:w-[25rem] lg:w-[30rem]">
      <h1 class="text-3xl font-bold transition duration-500">Mail Editor</h1>
      <div class="fo-divider my-2 before:transition before:duration-500 after:transition after:duration-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        <span class="flex items-center justify-center"><img class="size-12 transition duration-500 dark:invert" src="/ui/mailEditor.svg" aria-hidden="true" /></span>
      </div>
      <nav class="fo-tabs-bordered fo-tabs overflow-x-auto" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
        <button
          v-for="(tab, index) in tabs"
          @click="currentTab = index"
          type="button"
          class="fo-tab flex items-center justify-center gap-2"
          :class="{ 'fo-active fo-tab-active': currentTab === index }"
          :aria-selected="currentTab === index"
          role="tab"
        >
          <img class="size-5 transition duration-500 dark:invert" :src="tab.src" aria-hidden="true" />
          {{ tab.name }}
        </button>
      </nav>
    </div>

    <div class="mt-8 w-full">
      <div class="flex w-full flex-col items-center justify-center" role="tabpanel" :class="{ hidden: currentTab !== 0 }">
        <MailEditor @output="(text) => (outputText = text)" :clear-text="isClearText" />
        <div class="mt-4 flex items-center justify-center gap-5">
          <div class="relative">
            <button
              @click="showClearDialog = !showClearDialog"
              class="du-btn flex items-center justify-center gap-2 rounded-xl border-red-300 bg-red-100 transition duration-500 hover:scale-105 hover:border-red-400 hover:bg-red-200 dark:border-red-500 dark:hover:bg-red-700"
              :class="{ 'scale-105 border-red-400 bg-red-200 dark:bg-red-700': showClearDialog, 'dark:bg-red-800': !showClearDialog }"
            >
              <span class="hidden transition duration-500 sm:inline-flex md:hidden lg:inline-flex">Clear</span>
              <img class="size-5 transition duration-500 dark:invert" src="/ui/trash.svg" aria-hidden="true" />
            </button>
            <Transition name="fade">
              <div class="fo-tooltip-content visible -left-4 bottom-12 opacity-100 sm:left-1/2 sm:-translate-x-1/2" role="popover" v-if="showClearDialog">
                <div
                  class="fo-tooltip-body flex w-64 flex-col items-center justify-center gap-3 rounded-lg border-2 border-red-300 bg-red-100 p-4 text-start shadow transition duration-500 dark:border-red-500 dark:bg-red-800"
                >
                  <p class="text-center text-lg font-medium text-black transition duration-500">Are you sure you want to clear the editor?</p>
                  <div class="flex w-full items-center justify-between gap-2">
                    <button
                      @click="clearText"
                      class="du-btn du-btn-outline grow rounded-xl border-black py-1 text-base text-black hover:border-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-neutral-200 dark:hover:border-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-black"
                    >
                      Yes
                    </button>
                    <button
                      @click="showClearDialog = false"
                      class="du-btn du-btn-outline grow rounded-xl border-black py-1 text-base text-black hover:border-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-neutral-200 dark:hover:border-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-black"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
          <div class="relative">
            <button
              @click="copyText"
              class="du-btn flex items-center justify-center gap-2 rounded-xl border-green-300 bg-green-100 transition duration-500 hover:scale-105 hover:border-green-400 hover:bg-green-200 dark:border-green-500 dark:hover:bg-green-700"
              :class="{ 'scale-105 border-green-400 bg-green-200 dark:bg-green-700': showCopyDialog, 'dark:bg-green-800': !showCopyDialog }"
            >
              <span class="hidden transition duration-500 sm:inline-flex md:hidden lg:inline-flex">Copy</span>
              <img class="size-5 transition duration-500 dark:invert" src="/ui/copy.svg" aria-hidden="true" />
            </button>
            <Transition name="fade">
              <div class="fo-tooltip-content visible bottom-12 left-1/2 -translate-x-1/2 opacity-100" role="popover" v-if="showCopyDialog">
                <div
                  class="fo-tooltip-body flex w-52 flex-col items-center justify-center gap-3 rounded-lg border-2 border-green-300 bg-green-100 p-4 text-start shadow transition duration-500 dark:border-green-500 dark:bg-green-800"
                >
                  <p class="text-center text-lg font-medium text-black transition duration-500">Copied to clipboard!</p>
                  <img class="spin size-10 dark:invert" src="/ui/checkmarkCircle.svg" aria-hidden="true" />
                </div>
              </div>
            </Transition>
          </div>
          <button
            class="du-btn flex items-center justify-center gap-2 rounded-xl border-blue-300 bg-blue-100 transition duration-500 hover:scale-105 hover:border-blue-400 hover:bg-blue-200 dark:border-blue-500 dark:bg-blue-800 dark:hover:bg-blue-700"
          >
            <span class="hidden transition duration-500 sm:inline-flex md:hidden lg:inline-flex">Save</span>
            <img class="size-5 transition duration-500 dark:invert" src="/ui/save.svg" aria-hidden="true" />
          </button>
          <button
            class="du-btn flex items-center justify-center gap-2 rounded-xl border-blue-300 bg-blue-100 transition duration-500 hover:scale-105 hover:border-blue-400 hover:bg-blue-200 dark:border-blue-500 dark:bg-blue-800 dark:hover:bg-blue-700"
          >
            <span class="hidden transition duration-500 sm:inline-flex md:hidden lg:inline-flex">Share</span>
            <img class="size-5 transition duration-500 dark:invert" src="/ui/share.svg" aria-hidden="true" />
          </button>
        </div>

        <div
          class="profanity-tooltip-mobile mt-4 hidden items-center justify-center gap-1 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-800 transition duration-500 dark:bg-neutral-800 dark:text-neutral-200"
          role="alert"
        >
          <img class="mr-1 size-9 transition duration-500 dark:invert" src="/ui/question.svg" aria-hidden="true" />
          <div class="flex flex-col items-start justify-center">
            <p><span class="font-medium">Profanity filter:</span> The editor uses a basic profanity filter that does not reflect Infinite Lagrange's actual profanity filter.</p>
            <p>Gives a general idea if your mail will be blocked or not.</p>
          </div>
        </div>
      </div>

      <div role="tabpanel" :class="{ hidden: currentTab !== 1 }">
        <p>saved mail tab</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const isClearText = ref(false);
watch(isClearText, async (val) => {
  if (!val) return;
  await nextTick();
  isClearText.value = false;
});

const outputText = ref("");
const currentTab = ref(0);
const tabs = [
  {
    name: "Create",
    src: "/ui/pencil.svg"
  },
  {
    name: "Saved Mails",
    src: "/ui/saved.svg"
  }
];

const showClearDialog = ref(false);
const showCopyDialog = ref(false);

function copyText() {
  if (showCopyDialog.value) return;

  navigator.clipboard.writeText(outputText.value);

  showCopyDialog.value = true;
  setTimeout(() => {
    showCopyDialog.value = false;
  }, 1500);
}

function clearText() {
  if (!showClearDialog.value) return;
  isClearText.value = true;
  showClearDialog.value = false;
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

@media (hover: none) and (pointer: coarse) {
  .profanity-tooltip-mobile {
    @apply flex;
  }
}
</style>
