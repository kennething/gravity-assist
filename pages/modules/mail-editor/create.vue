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
      <MailPanelsCreate />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const tabs = [
  {
    name: "Create",
    src: "/ui/pencil.svg",
    route: "/create"
  },
  {
    name: "Saved Mails",
    src: "/ui/saved.svg",
    route: "/saved"
  }
];
</script>

<style lang="scss" scoped></style>
