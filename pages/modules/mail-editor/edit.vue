<template>
  <div class="flex w-full flex-col items-center justify-center gap-4" role="tabpanel">
    <div class="flex items-center justify-center gap-2">
      <p class="transition duration-500">
        Need some inspiration? Try a <span class="cursor-pointer font-medium transition duration-500 hover:underline" @click="showMailTemplates = true">mail template</span>
      </p>
      <div class="du-tooltip fo-input-group-text p-0" data-tip="View templates">
        <button type="button" class="fo-btn fo-btn-circle fo-btn-text" @click="showMailTemplates = true">
          <img class="size-5 select-none transition duration-500 dark:invert" src="/ui/arrowRight.svg" aria-hidden="true" />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <div v-show="showMailTemplates" class="fixed left-0 top-0 z-20 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" @click="showMailTemplates = false">
        <MailTemplates @template="(template) => (selectedMailTemplate = template)" />
      </div>
    </Transition>

    <div v-if="loading" class="fo-skeleton fo-skeleton-animated h-96 w-full rounded-2xl shadow transition duration-500 md:w-[25rem] lg:w-[40rem] xl:w-[50rem]"></div>
    <MailEditor v-else :clear-text="isClearText" :template="selectedMailTemplate" @output="(text) => (outputText = text)" @output-ops="(ops) => (outputOps = ops)" />

    <div class="flex items-center justify-center gap-5">
      <MailButtonsClear :show-dialog="showClearDialog" @toggle-dialog="(val) => (showClearDialog = val)" @clear-text="isClearText = true" @click="deselectOthers('clear')" />
      <MailButtonsCopy :show-dialog="showCopyDialog" :output-text="outputText" @toggle-dialog="(val) => (showCopyDialog = val)" @click="deselectOthers('copy')" />
      <MailButtonsSave
        :show-dialog="showSaveDialog"
        :output-ops="outputOps"
        :saved-mail="savedMail"
        @toggle-dialog="(val) => (showSaveDialog = val)"
        @new-query="(uid, id) => getMail(uid, id)"
        @click="deselectOthers('save')"
      />
      <MailButtonsShare :show-dialog="showShareDialog" :saved-mail="savedMail" @toggle-dialog="(val) => (showShareDialog = val)" @click="deselectOthers('share')" />
    </div>

    <div
      class="profanity-tooltip-mobile mt-4 hidden items-center justify-center gap-1 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-800 transition duration-500 dark:bg-neutral-800 dark:text-neutral-200"
      role="alert"
    >
      <img class="mr-1 size-9 select-none transition duration-500 dark:invert" src="/ui/question.svg" aria-hidden="true" />
      <div class="flex flex-col items-start justify-center">
        <p class="transition duration-500">
          <span class="font-medium transition duration-500">Profanity filter:</span> The editor uses a basic profanity filter that does not reflect Infinite Lagrange's actual profanity filter.
        </p>
        <p class="transition duration-500">Gives a general idea if your mail will be blocked or not.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Op } from "quill";

definePageMeta({ layout: "mail-editor" });

const route = useRoute();

useSeoMeta({
  title: "Editor - Mail Editor | Gravity Assist",
  ogTitle: "Mail Editor",
  description:
    "Easily write, edit, save, and share mails for your community! Featuring a built-in mail template editor, profanity detector, and formatting options, you'll be able to harness the full power of the Infinite Lagrange mail menu!",
  ogDescription:
    "Easily write, edit, save, and share mails for your community! Featuring a built-in mail template editor, profanity detector, and formatting options, you'll be able to harness the full power of the Infinite Lagrange mail menu!",
  twitterDescription:
    "Easily write, edit, save, and share mails for your community! Featuring a built-in mail template editor, profanity detector, and formatting options, you'll be able to harness the full power of the Infinite Lagrange mail menu!"
});

const isClearText = ref(false);
watch(isClearText, async (val) => {
  if (!val) return;
  await nextTick();
  isClearText.value = false;
});

const savedMail = ref<SaveTemplate>();

const outputText = ref("");
const outputOps = ref<Op[]>([]);

const loading = ref(false);
const showClearDialog = ref(false);
const showCopyDialog = ref(false);
const showSaveDialog = ref(false);
const showShareDialog = ref(false);
const showMailTemplates = ref(false);

const selectedMailTemplate = ref<Op[]>();
watch(selectedMailTemplate, async (val) => {
  if (!val) return;
  showMailTemplates.value = false;
  await nextTick();
  selectedMailTemplate.value = undefined;
});

async function getMail(uid?: string, id?: string) {
  const userQuery = uid ?? route.query.u;
  const idQuery = id ?? route.query.id;
  if (userQuery && idQuery) {
    loading.value = true;
    const { success, error, content } = await $fetch("/api/getMail", { method: "POST", body: { uid: userQuery, mailId: idQuery } });
    loading.value = false;
    if (!success && error) return console.error(error);
    if (success && content) {
      await nextTick();
      selectedMailTemplate.value = content.ops;
      savedMail.value = content;
    }
  }
}
onMounted(getMail);

const dialogButtons: Readonly<Record<string, Ref<boolean>>> = {
  clear: showClearDialog,
  save: showSaveDialog
};
function deselectOthers(current: string) {
  for (const option of Object.keys(dialogButtons).filter((key) => key !== current)) {
    dialogButtons[option].value = false;
  }
}
</script>

<style lang="scss" scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s ease-in-out;

  #menu {
    transition: all 0.35s ease-in-out;
  }
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;

  #menu {
    transform: scale(0);
  }
}

@media (hover: none) and (pointer: coarse) {
  .profanity-tooltip-mobile {
    @apply flex;
  }
}
</style>
