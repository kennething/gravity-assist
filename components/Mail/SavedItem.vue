<template>
  <div class="flex w-full grow flex-col items-center justify-center gap-3 rounded-2xl transition" :class="readOnly ? 'p-4' : 'p-6 hover:bg-neutral-100 lg:flex-row lg:gap-0 dark:hover:bg-neutral-900'">
    <div class="flex w-64 shrink-0 flex-col items-center justify-center">
      <h3 class="mb-1 w-60 overflow-hidden overflow-ellipsis text-nowrap text-center text-xl font-medium transition duration-500">{{ mail.name }}</h3>
      <p class="transition duration-500">Created {{ formatDate(mail.createdAt, "numeric", true) }}</p>
      <p class="transition duration-500">Last modified {{ formatDate(mail.lastSaved, "numeric", true) }}</p>
      <div class="mt-3 flex items-center justify-center gap-2" v-if="!readOnly">
        <button v-if="link === baseUrl" class="fo-btn grow-[3]" disabled>Edit <img class="size-5" src="/ui/pencil.svg" aria-hidden="true" /></button>
        <NuxtLink v-else :to="link" class="fo-btn grow-[3]">Edit <img class="size-5" src="/ui/pencil.svg" aria-hidden="true" /></NuxtLink>
        <button
          :disabled="!store.user"
          class="fo-btn border-red-400 bg-red-400 px-3 hover:border-red-300 hover:bg-red-300 dark:hover:border-red-500 dark:hover:bg-red-500"
          @click="emit('delete', mail)"
        >
          <img class="size-5" src="/ui/trash.svg" aria-hidden="true" />
        </button>
        <button :disabled="!store.user" class="fo-btn border-blue-400 bg-blue-400 px-3 hover:border-blue-300 hover:bg-blue-300 dark:hover:border-blue-500 dark:hover:bg-blue-500" @click="share">
          <img class="size-5" src="/ui/share.svg" aria-hidden="true" />
        </button>
      </div>
    </div>
    <div class="editor-bg h-44 w-full rounded-2xl border border-transparent transition duration-500 dark:border-neutral-700">
      <LazyMailQuill :underline="false" :clear-text="false" color="#ffffff" readOnly :start-text="mail.ops" />
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const props = defineProps<{
  mail: SaveTemplate;
  readOnly?: boolean;
}>();

const emit = defineEmits<{
  delete: [SaveTemplate];
}>();

const store = useUserStore();

const baseUrl = "/modules/mail-editor/edit";
const link = computed(() => {
  if (!store.user) return baseUrl;
  return `${baseUrl}?u=${store.user?.uid}&id=${props.mail.id}`;
});

function share() {
  navigator.clipboard.writeText(config.public.baseUrl + link.value);
  alert("Link copied to clipboard!");
}
</script>

<style scoped></style>
