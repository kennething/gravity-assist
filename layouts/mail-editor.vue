<template>
  <div class="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start p-8">
    <div class="flex w-full flex-col items-center justify-center md:w-[25rem] lg:w-[30rem]">
      <h1 class="text-3xl font-bold transition duration-500">Mail Editor</h1>
      <div class="fo-divider my-2 before:transition before:duration-500 after:transition after:duration-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        <span class="flex items-center justify-center"><img class="size-12 select-none transition duration-500 dark:invert" src="/ui/mailEditor.svg" aria-hidden="true" /></span>
      </div>
      <div role="tablist" class="du-tabs du-tabs-bordered">
        <NuxtLink
          v-for="tab in tabs"
          :key="Symbol(tab.name)"
          type="button"
          class="du-tab flex items-center justify-center gap-2 transition duration-500 dark:text-white"
          :class="{ 'du-tab-active': '/modules/mail-editor' + tab.route === route.path }"
          role="tab"
          :to="'/modules/mail-editor' + tab.route"
        >
          <img class="size-5 select-none transition duration-500 dark:invert" :src="tab.src" aria-hidden="true" />
          {{ tab.name }}
        </NuxtLink>
      </div>
    </div>

    <div class="mt-4 w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  description:
    "A simple mail/text editor for Infinite Lagrange with a built-in profanity detector, color picker, character counter, and autosave. Compile your mail with the click of a button and paste into IL's mail menu for a quick and easy way to send mails. Send and share mails with others to draft the coolest text!",
  ogDescription:
    "A simple mail/text editor for Infinite Lagrange with a built-in profanity detector, color picker, character counter, and autosave. Compile your mail with the click of a button and paste into IL's mail menu for a quick and easy way to send mails. Send and share mails with others to draft the coolest text!"
});

const route = useRoute();

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
</script>

<style scoped></style>
