<template>
  <div class="flex w-full grow flex-col items-center justify-center gap-3 rounded-2xl transition" :class="readOnly ? 'p-4' : 'p-6 hover:bg-neutral-100 lg:flex-row lg:gap-0 dark:hover:bg-neutral-900'">
    <div class="flex w-64 shrink-0 flex-col items-center justify-center">
      <h3 class="mb-1 w-60 overflow-hidden overflow-ellipsis text-nowrap text-center text-xl font-medium transition duration-500">{{ mail.name }}</h3>
      <ClientOnly>
        <p class="transition duration-500">Created {{ formatDate(mail.createdAt, "numeric", true) }}</p>
        <p class="transition duration-500">Last modified {{ formatDate(mail.lastSaved, "numeric", true) }}</p>
      </ClientOnly>
      <div v-if="!readOnly" class="mt-3 flex items-center justify-center gap-2">
        <div v-if="link === baseUrl" class="fo-btn grow-[3] border-neutral-100 bg-neutral-100">Edit <img class="size-5" src="/ui/pencil.svg" aria-hidden="true" /></div>
        <NuxtLink v-else :to="link" class="fo-btn grow-[3] select-none border-neutral-100 bg-neutral-100 hover:border-neutral-300 hover:bg-neutral-300">
          Edit <img class="size-5" src="/ui/pencil.svg" aria-hidden="true" />
        </NuxtLink>
        <button
          :disabled="!userStore.user"
          class="fo-btn select-none border-red-400 bg-red-400 px-3 hover:border-red-300 hover:bg-red-300 dark:hover:border-red-500 dark:hover:bg-red-500"
          type="button"
          @click="emit('delete', mail)"
        >
          <img class="size-5" src="/ui/trash.svg" aria-hidden="true" />
        </button>
        <button
          :disabled="!userStore.user"
          class="fo-btn select-none border-blue-400 bg-blue-400 px-3 hover:border-blue-300 hover:bg-blue-300 dark:hover:border-blue-500 dark:hover:bg-blue-500"
          type="button"
          @click="share"
        >
          <img class="size-5" src="/ui/share.svg" aria-hidden="true" />
        </button>
      </div>
    </div>
    <div class="editor-bg h-44 w-full select-none rounded-2xl border border-transparent transition duration-500 dark:border-neutral-700">
      <LazyMailQuill :underline="false" :clear-text="false" color="#ffffff" read-only :start-text="mail.ops" />
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const props = defineProps<{
  mail: SaveTemplate;
  readOnly?: boolean;
}>();

const emit = defineEmits<{ delete: [SaveTemplate] }>();

const userStore = useUserStore();

const baseUrl = "/modules/mail-editor/edit";
const link = computed(() => {
  if (!userStore.user) return baseUrl;
  return `${baseUrl}?u=${userStore.user?.uid}&id=${props.mail.id}`;
});

function share() {
  void navigator.clipboard.writeText(config.public.baseUrl + link.value);
  alert("Link copied to clipboard!");
}
</script>

<style scoped></style>
