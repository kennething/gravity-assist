<template>
  <p class="text-sm transition duration-500">Gravity Assist data (blueprints, mails, etc.) isn't shared between different devices or browsers.</p>
  <h5 class="font-medium transition duration-500">To link your data, paste the below information from the device/browser you want to link.</h5>

  <form class="flex w-full flex-col items-center justify-center gap-2" @submit.prevent="link">
    <div class="mt-4 flex w-full flex-col items-start justify-center gap-1 md:flex-row md:items-center md:gap-4">
      <p class="w-40 text-nowrap text-left transition duration-500">User ID</p>
      <div class="fo-input-group flex grow rounded-full transition duration-500 dark:border-neutral-400 dark:bg-neutral-800 dark:hover:border-neutral-400">
        <span class="fo-input-group-text shrink-0">
          <img class="size-5 transition duration-500 dark:invert" src="/ui/person.svg" aria-hidden="true" />
        </span>
        <input
          v-model="userId"
          type="text"
          placeholder="Enter the User ID from the other device/browser"
          class="fo-input grow rounded-e-full text-left text-black transition duration-500 placeholder:transition placeholder:duration-500 dark:text-white dark:placeholder:text-neutral-400"
        />
      </div>
    </div>
    <div class="flex w-full flex-col items-start justify-center gap-1 md:flex-row md:items-center md:gap-4">
      <p class="w-40 text-nowrap text-left transition duration-500">Unique Token</p>
      <div class="fo-input-group flex grow rounded-full transition duration-500 dark:border-neutral-400 dark:bg-neutral-800 dark:hover:border-neutral-400">
        <span class="fo-input-group-text shrink-0">
          <img class="size-5 transition duration-500 dark:invert" src="/ui/key.svg" aria-hidden="true" />
        </span>
        <input
          v-model="accessToken"
          type="text"
          placeholder="Enter the Unique Token from the other device/browser"
          class="fo-input grow rounded-e-full text-left text-black transition duration-500 placeholder:transition placeholder:duration-500 dark:text-white dark:placeholder:text-neutral-400"
        />
      </div>
    </div>

    <button
      type="submit"
      :disabled="!userId || !accessToken"
      class="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 p-0 transition duration-500 lg:w-36 lg:justify-start lg:p-2 lg:px-4 dark:border-neutral-700"
      :class="!userId || !accessToken ? 'bg-neutral-400 dark:bg-neutral-950' : 'bg-white hover:border-neutral-400 dark:bg-neutral-700 dark:hover:border-neutral-700'"
    >
      <img v-if="!linkLoading" class="size-5 transition duration-500 dark:invert" src="/ui/link.svg" aria-hidden="true" />
      <span v-else class="fo-loading fo-loading-spinner fo-loading-sm"></span>

      <span v-if="sillyBilly" class="hidden grow transition duration-500 lg:block">That's you!</span>
      <span v-else-if="linkFailure" class="hidden grow transition duration-500 lg:block">Failed</span>
      <span v-else-if="linkSuccess" class="hidden grow transition duration-500 lg:block">Linked!</span>
      <span v-else-if="linkLoading" class="hidden grow transition duration-500 lg:block">Linking</span>
      <span v-else class="hidden grow transition duration-500 lg:block">Link</span>
    </button>
  </form>

  <div class="mt-8 flex w-full flex-col items-start justify-center gap-1 md:flex-row md:items-center md:gap-4">
    <p class="w-44 text-nowrap text-left transition duration-500">Your User ID</p>
    <div class="fo-input-group flex grow rounded-full transition duration-500 dark:border-neutral-400 dark:bg-neutral-800 dark:hover:border-neutral-400">
      <span class="fo-input-group-text shrink-0">
        <img class="size-5 transition duration-500 dark:invert" src="/ui/person.svg" aria-hidden="true" />
      </span>
      <div type="search" class="fo-input grow rounded-e-full">
        <p class="w-32 overflow-hidden overflow-ellipsis text-nowrap text-left transition duration-500 lg:w-52">{{ userStore.user?.uid }}</p>
      </div>
      <div class="du-tooltip fo-input-group-text p-0" :data-tip="userStore.user?.accessToken ? 'Copy' : 'Unavailable'">
        <button class="fo-btn fo-btn-circle fo-btn-text" type="button" :disabled="!userStore.user?.accessToken" @click="copyText(userStore.user?.uid)">
          <img class="size-5 transition duration-500 dark:invert" src="/ui/copy.svg" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
  <div class="flex w-full flex-col items-start justify-center gap-1 md:flex-row md:items-center md:gap-4">
    <p class="w-44 text-nowrap text-left transition duration-500">Your Unique Token</p>
    <div class="fo-input-group flex grow rounded-full transition duration-500 dark:border-neutral-400 dark:bg-neutral-800 dark:hover:border-neutral-400">
      <span class="fo-input-group-text shrink-0">
        <img class="size-5 transition duration-500 dark:invert" src="/ui/key.svg" aria-hidden="true" />
      </span>
      <div type="search" class="fo-input grow rounded-e-full">
        <p class="w-32 overflow-hidden overflow-ellipsis text-nowrap text-left transition duration-500 lg:w-52">{{ userStore.user?.accessToken }}</p>
      </div>
      <div class="du-tooltip fo-input-group-text p-0" :data-tip="userStore.user?.accessToken ? 'Copy' : 'Unavailable'">
        <button class="fo-btn fo-btn-circle fo-btn-text" type="button" :disabled="!userStore.user?.accessToken" @click="copyText(userStore.user?.accessToken)">
          <img class="size-5 transition duration-500 dark:invert" src="/ui/copy.svg" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore();

const userId = ref("");
const accessToken = ref("");

const linkLoading = ref(false);
const linkSuccess = ref(false);
const linkFailure = ref(false);
const sillyBilly = ref(false);

async function link() {
  if (!userStore.user || !userId.value || !accessToken.value) return;

  if (userId.value === userStore.user.uid && accessToken.value === userStore.user.accessToken) {
    sillyBilly.value = true;
    setTimeout(() => (sillyBilly.value = false), 1500);
    return;
  }

  linkLoading.value = true;
  const { success, error } = await $fetch("/api/getUser", {
    method: "POST",
    body: { uid: userId.value, accessToken: accessToken.value, updateOrigin: true }
  });

  linkLoading.value = false;
  if (!success && error) {
    linkFailure.value = true;
    setTimeout(() => (linkFailure.value = false), 1500);
    return console.error(error);
  }

  localStorage.setItem("token", accessToken.value);
  localStorage.setItem("uid", userId.value);
  linkSuccess.value = true;
  setTimeout(() => {
    linkSuccess.value = false;
    window.location.reload();
  }, 1500);
}

function copyText(text: string | undefined) {
  if (!text) return;
  void navigator.clipboard.writeText(text);
}
</script>

<style scoped></style>
