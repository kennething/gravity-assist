<template>
  <div class="relative">
    <button
      type="button"
      class="du-btn flex select-none items-center justify-center gap-2 rounded-xl border-blue-300 bg-blue-100 transition duration-500 hover:scale-105 hover:border-blue-400 hover:bg-blue-200 dark:border-blue-500 dark:bg-blue-800 dark:hover:bg-blue-700"
      :class="{ 'scale-105 border-blue-400 bg-blue-200 dark:bg-blue-700': showDialog, 'dark:bg-blue-800': !showDialog }"
      @click="emit('toggleDialog', !showDialog)"
    >
      <span class="hidden transition duration-500 sm:inline-flex md:hidden lg:inline-flex">{{ !userQuery || userQuery === userStore.user?.uid ? "Save" : "Clone" }}</span>
      <img class="size-5 transition duration-500 dark:invert" src="/ui/save.svg" aria-hidden="true" />
    </button>
    <Transition name="fade">
      <div v-if="showDialog" class="fo-tooltip-content visible -right-24 bottom-12 opacity-100 sm:right-1/2 sm:translate-x-1/2" role="popover">
        <div
          v-if="userStore.user"
          class="fo-tooltip-body flex w-64 flex-col items-center justify-center gap-3 rounded-lg border-2 border-blue-300 bg-blue-100 p-4 text-start shadow transition duration-500 dark:border-blue-500 dark:bg-blue-800"
        >
          <div class="max-w-sm">
            <span class="fo-label justify-end">
              <span class="fo-label-text-alt transition duration-500" :class="{ 'text-red-700 dark:text-red-200': error }">{{ templateName.length }}/50</span>
            </span>
            <div class="relative">
              <input
                v-model="templateName"
                type="text"
                :placeholder="'Name your ' + (!userQuery || userQuery === userStore.user?.uid ? 'new mail' : 'clone') + '!'"
                class="fo-input border-neutral-300 bg-white text-black"
                :class="{ 'text-red-700': error }"
                maxlength="100"
              />
            </div>
            <span class="fo-label">
              <span class="fo-label-text-alt text-red-700 transition duration-500 dark:text-red-200">{{ error }}</span>
            </span>
          </div>
          <div class="flex w-full items-center justify-between gap-2">
            <button
              type="button"
              class="group du-btn du-btn-outline h-10 min-h-10 grow rounded-xl border-black py-0 text-base hover:border-neutral-900 hover:bg-neutral-900 dark:border-neutral-200 dark:hover:border-neutral-200 dark:hover:bg-neutral-200"
              :class="{ 'pointer-events-none cursor-default border-neutral-900 bg-neutral-900 opacity-25 dark:border-neutral-200 dark:bg-neutral-200': !templateName }"
              @click="saveText"
            >
              <span v-if="loading" class="du-loading du-loading-spinner du-loading-md transition duration-500 group-hover:text-white group-hover:duration-200 dark:group-hover:text-black"></span>
              <span
                v-if="!userQuery || userQuery === userStore.user?.uid"
                class="text-black transition duration-500 group-hover:text-white group-hover:duration-200 dark:text-white dark:group-hover:text-black"
                :class="{ 'text-white dark:text-black': !templateName }"
              >
                {{ loading ? "Saving..." : success ? "Saved!" : "Save" }}
              </span>
              <span
                v-else
                class="text-black transition duration-500 group-hover:text-white group-hover:duration-200 dark:text-white dark:group-hover:text-black"
                :class="{ 'text-white dark:text-black': !templateName }"
              >
                {{ loading ? "Cloning..." : success ? "Cloned!" : "Clone" }}
              </span>
            </button>
          </div>
        </div>

        <div
          v-else
          class="fo-tooltip-body flex w-64 flex-col items-center justify-center gap-3 rounded-lg border-2 border-blue-300 bg-blue-100 p-4 text-start shadow transition duration-500 dark:border-blue-500 dark:bg-blue-800"
        >
          <p class="text-center text-lg font-medium text-black transition duration-500 dark:text-white">Something went wrong. Please try again later.</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { Op } from "quill";

const route = useRoute();
const router = useRouter();

const userStore = useUserStore();
const userQuery = route.query.u;

const props = defineProps<{
  showDialog: boolean;
  outputOps: Op[];
  savedMail: SaveTemplate | undefined;
}>();

const templateName = ref("");
async function getOwnership() {
  let tries = 0;
  while (tries < 10) {
    const ownership = !userQuery || userQuery === userStore.user?.uid ? "" : "Clone of ";
    if (props.savedMail) templateName.value = (ownership + props.savedMail.name).slice(0, 100);
    tries++;
    await delay(50);
  }
}

watch(() => props.savedMail, getOwnership);

const emit = defineEmits<{
  toggleDialog: [boolean];
  newQuery: [string, string];
}>();

const user = computed(() => userStore.user);
watch(user, getOwnership);

const error = ref("");
watch(templateName, () => (error.value = ""));
watch(
  () => props.showDialog,
  (val) => {
    if (val) return;
    templateName.value = "";
    error.value = "";
  }
);
const loading = ref(false);
const success = ref(false);

async function saveText() {
  if (!props.showDialog || !userStore.user || !templateName.value || error.value) return;
  loading.value = true;

  let template = { name: templateName.value, ops: props.outputOps };
  const {
    success: fetchSuccess,
    error: fetchError,
    content,
    outcomeMails
  } = await $fetch("/api/saveMail", {
    method: "POST",
    body: {
      uid: userStore.user.uid,
      accessToken: userStore.user.accessToken,
      template
    }
  });
  loading.value = false;
  if (!fetchSuccess && fetchError) return (error.value = fetchError);
  if (fetchSuccess && content && outcomeMails) {
    success.value = true;
    (template as SaveTemplate) = content;
    userStore.user.savedMails = outcomeMails;
    setTimeout(() => {
      success.value = false;
      emit("toggleDialog", false);
    }, 1000);
    void router.push({ query: { u: userStore.user.uid, id: content.id } });
    emit("newQuery", userStore.user.uid, content.id);
  }
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
