<template>
  <div class="flex w-full flex-col items-center justify-center" role="tabpanel">
    <p class="transition duration-500">
      You have <span class="font-medium transition duration-500">{{ savedMails?.length ?? 0 }}/30</span> saved mails
    </p>
    <p class="transition duration-500">Mails unused for more than 6 months may be automatically deleted</p>

    <div v-if="loadedMails" class="mt-4 flex w-full flex-col items-center justify-center gap-3 md:w-[25rem] lg:w-[40rem] xl:w-[50rem]">
      <LazyMailSavedItem v-if="loadedMails.length > 0" v-for="mail in loadedMails" :key="mail.id" :mail="mail" @delete="(mail) => (deleteMail = mail)" />
      <p v-else class="text-2xl transition duration-500">You have no saved mail! Try drafting a mail and saving it.</p>
    </div>
    <div v-else class="mt-4 flex w-full flex-col items-center justify-center gap-3 md:w-[25rem] lg:w-[40rem] xl:w-[50rem]">
      <div v-for="i in 3" :key="i" class="fo-skeleton fo-skeleton-animated h-56 w-full grow rounded-2xl bg-neutral-100 p-6 transition duration-500 dark:bg-neutral-900"></div>
    </div>
    <Transition name="menu">
      <div v-if="deleteMail" class="fixed left-0 top-0 z-20 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" @click="deleteMail = undefined">
        <div id="menu" class="flex w-[80vw] flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 md:w-[40rem] md:p-10 dark:bg-neutral-800" @click.stop>
          <h3 class="text-xl font-bold">Are you sure you want to delete this mail?</h3>
          <p>This action is irreversible!</p>
          <MailSavedItem :mail="deleteMail" read-only />
          <div class="mt-3 flex w-full items-center justify-center gap-2">
            <button
              :disabled="!userStore.user"
              class="fo-btn grow border-red-400 bg-red-400 hover:border-red-300 hover:bg-red-300 dark:hover:border-red-500 dark:hover:bg-red-500"
              type="button"
              @click="removeMail"
            >
              <span v-if="loading" class="du-loading du-loading-spinner du-loading-md transition duration-500 group-hover:text-white group-hover:duration-200 dark:group-hover:text-black"></span>
              <span class="text-black transition duration-500 group-hover:text-white group-hover:duration-200 dark:text-white dark:group-hover:text-black">{{
                loading ? "Deleting..." : deleteSuccess ? "Deleted!" : "Yes"
              }}</span>
            </button>
            <button class="fo-btn grow border-neutral-100 bg-neutral-100 hover:border-neutral-300 hover:bg-neutral-300" type="button" @click="deleteMail = undefined">Cancel</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "mail-editor"
});

useSeoMeta({
  title: "Saves - Mail Editor | Gravity Assist",
  ogTitle: "Mail Editor - Saved Mails",
  description:
    "Easily write, edit, save, and share mails for your community! Featuring a built-in mail template editor, profanity detector, and formatting options, you'll be able to harness the full power of the Infinite Lagrange mail menu!",
  ogDescription:
    "Easily write, edit, save, and share mails for your community! Featuring a built-in mail template editor, profanity detector, and formatting options, you'll be able to harness the full power of the Infinite Lagrange mail menu!",
  twitterDescription:
    "Easily write, edit, save, and share mails for your community! Featuring a built-in mail template editor, profanity detector, and formatting options, you'll be able to harness the full power of the Infinite Lagrange mail menu!"
});

const userStore = useUserStore();
const savedMails = computed(() => userStore.user?.savedMails);

const currentIndex = ref(5);

const loadedMails = computed(() => savedMails.value?.slice(0, currentIndex.value));

const deleteMail = ref<SaveTemplate>();
const loading = ref(false);
const deleteSuccess = ref(false);

function loadMailsOnScroll() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const scrollPosition = scrollTop + windowHeight;
  const threshold = documentHeight * 0.9;

  if (scrollPosition >= threshold) currentIndex.value += 5;
}
watch(currentIndex, (index) => {
  if (savedMails.value && index > savedMails.value.length) window.removeEventListener("scroll", loadMailsOnScroll);
});
onMounted(() => window.addEventListener("scroll", loadMailsOnScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", loadMailsOnScroll));

async function removeMail() {
  if (!deleteMail.value || !userStore.user) return;
  loading.value = true;
  const { success, error, content } = await $fetch("/api/deleteMail", { method: "POST", body: { uid: userStore.user.uid, accessToken: userStore.user.accessToken, mailId: deleteMail.value.id } });
  loading.value = false;
  if (!success && error) return console.error(error);
  if (success && content) {
    deleteSuccess.value = true;
    userStore.user.savedMails = content;
    setTimeout(() => {
      deleteMail.value = undefined;
    }, 1000);
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
