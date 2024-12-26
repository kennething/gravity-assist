<template>
  <div class="flex w-full flex-col items-center justify-center" role="tabpanel">
    <p class="transition duration-500">
      You have <span class="font-medium transition duration-500">{{ savedMails.length }}/30</span> saved mails
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
            <button :disabled="!userStore.user" class="fo-btn grow border-red-400 bg-red-400 hover:border-red-300 hover:bg-red-300 dark:hover:border-red-500 dark:hover:bg-red-500" @click="removeMail">
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
</template>

<script setup lang="ts">
definePageMeta({
  layout: "mail-editor"
});

useSeoMeta({
  title: "Saves - Mail Editor | Gravity Assist",
  ogTitle: "Mail Editor - Gravity Assist"
});

const userStore = useUserStore();
const savedMails = computed(() => userStore.user?.savedMails ?? []);

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

function loadMailsOnScroll() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const scrollPosition = scrollTop + windowHeight;
  const threshold = documentHeight * 0.9;

  if (scrollPosition >= threshold) currentIndex.value += 5;
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
