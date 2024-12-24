<template>
  <div class="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start p-8">
    <div class="flex w-full flex-col items-center justify-center md:w-[25rem] lg:w-[30rem]">
      <h1 class="text-3xl font-bold transition duration-500">Mail Editor</h1>
      <div class="fo-divider my-2 before:transition before:duration-500 after:transition after:duration-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        <span class="flex items-center justify-center"><img class="size-12 transition duration-500 dark:invert" src="/ui/mailEditor.svg" aria-hidden="true" /></span>
      </div>
      <div role="tablist" class="du-tabs du-tabs-bordered">
        <NuxtLink
          v-for="tab in tabs"
          type="button"
          class="du-tab flex items-center justify-center gap-2 transition duration-500 dark:text-white"
          :class="{ 'du-tab-active': '/modules/mail-editor' + tab.route === route.path }"
          role="tab"
          :to="'/modules/mail-editor' + tab.route"
        >
          <img class="size-5 transition duration-500 dark:invert" :src="tab.src" aria-hidden="true" />
          {{ tab.name }}
        </NuxtLink>
      </div>
    </div>

    <div class="mt-4 w-full">
      <div class="flex w-full flex-col items-center justify-center" role="tabpanel">
        <p class="transition duration-500">
          You have <span class="font-medium transition duration-500">{{ savedMails.length }}/69</span> saved mails
        </p>
        <p class="transition duration-500">Mails unused for more than 6 months will be automatically deleted</p>

        <div class="mt-4 flex w-full flex-col items-center justify-center gap-3 md:w-[25rem] lg:w-[40rem] xl:w-[50rem]" v-if="loadedMails.length">
          <LazyMailSavedItem v-for="mail in loadedMails" :mail="mail" :key="mail.id" @delete="(mail) => (deleteMail = mail)" />
        </div>
        <Transition name="menu">
          <div class="fixed left-0 top-0 z-20 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" v-if="deleteMail" @click="deleteMail = undefined">
            <div id="menu" class="flex w-[80vw] flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 md:w-[40rem] md:p-10 dark:bg-neutral-800" @click.stop>
              <h3 class="text-xl font-bold">Are you sure you want to delete this mail?</h3>
              <p>This action is irreversible!</p>
              <MailSavedItem :mail="deleteMail" readOnly />
              <div class="mt-3 flex w-full items-center justify-center gap-2">
                <button :disabled="!store.user" class="fo-btn grow border-red-400 bg-red-400 hover:border-red-300 hover:bg-red-300 dark:hover:border-red-500 dark:hover:bg-red-500" @click="removeMail">
                  <span class="du-loading du-loading-spinner du-loading-md transition duration-500 group-hover:text-white group-hover:duration-200 dark:group-hover:text-black" v-if="loading"></span>
                  <span class="text-black transition duration-500 group-hover:text-white group-hover:duration-200 dark:text-white dark:group-hover:text-black">{{
                    loading ? "Deleting..." : deleteSuccess ? "Deleted!" : "Yes"
                  }}</span>
                </button>
                <button class="fo-btn grow" @click="deleteMail = undefined">Cancel</button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Saves - Mail Editor | Gravity Assist",
  ogTitle: "Mail Editor - Gravity Assist",
  description:
    "A simple mail/text editor for Infinite Lagrange with a built-in profanity detector, color picker, character counter, and autosave. Compile your mail with the click of a button and paste into IL's mail menu for a quick and easy way to send mails. Send and share mails with others to draft the coolest text!",
  ogDescription:
    "A simple mail/text editor for Infinite Lagrange with a built-in profanity detector, color picker, character counter, and autosave. Compile your mail with the click of a button and paste into IL's mail menu for a quick and easy way to send mails. Send and share mails with others to draft the coolest text!"
});

const route = useRoute();
const router = useRouter();

const tabs = [
  {
    name: "Edit",
    src: "/ui/pencil.svg",
    route: "/edit"
  },
  {
    name: "Saved Mails",
    src: "/ui/saved.svg",
    route: "/saved"
  }
];

const store = useUserStore();
const savedMails = computed(() => store.user?.savedMails ?? []);

const currentIndex = ref(5);
watch(currentIndex, (index) => {
  if (index > savedMails.value.length) {
    window.removeEventListener("scroll", loadMailsOnScroll);
  }
});
const loadedMails = computed(() => savedMails.value.slice(0, currentIndex.value));

const deleteMail = ref<SaveTemplate>();
const loading = ref(false);
const deleteSuccess = ref(false);

onMounted(() => {
  window.addEventListener("scroll", loadMailsOnScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", loadMailsOnScroll);
});

async function removeMail() {
  if (!deleteMail.value || !store.user) return;
  loading.value = true;
  const { success, error, content } = await $fetch("/api/deleteMail", { method: "POST", body: { uid: store.user.uid, accessToken: store.user.accessToken, mailId: deleteMail.value.id } });
  loading.value = false;
  if (!success && error) return console.error(error);
  if (success && content) {
    deleteSuccess.value = true;
    store.user.savedMails = content;
    setTimeout(() => {
      deleteMail.value = undefined;
    }, 1000);
  }
}

function loadMailsOnScroll() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const scrollPosition = scrollTop + windowHeight;
  const threshold = documentHeight * 0.7;

  if (scrollPosition >= threshold) {
    console.log("Reached 70% of the page");
    currentIndex.value += 5;
  }
}
</script>

<style lang="scss" scoped></style>
