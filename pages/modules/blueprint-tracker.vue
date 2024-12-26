<template>
  <div class="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start p-8">
    <div class="flex w-full flex-col items-center justify-center md:w-[25rem] lg:w-[30rem]">
      <h1 class="text-3xl font-bold transition duration-500">Blueprint Tracker</h1>
      <div class="fo-divider my-2 before:transition before:duration-500 after:transition after:duration-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        <span class="flex items-center justify-center"><img class="size-12 transition duration-500 dark:invert" src="/ui/bpTracker.svg" aria-hidden="true" /></span>
      </div>
    </div>

    <div class="mt-4 flex w-full items-center justify-center"></div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const store = useUserStore();
const data = computed(() => store.shipData);

onMounted(() => {});
</script>

<style scoped></style>
