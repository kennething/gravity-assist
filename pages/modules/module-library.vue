<template>
  <div class="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start p-8">
    <div class="flex w-full flex-col items-center justify-center md:w-[25rem] lg:w-[30rem]">
      <h1 class="text-3xl font-bold transition duration-500">Module Library</h1>
      <div class="fo-divider my-2 before:transition before:duration-500 after:transition after:duration-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        <span class="flex items-center justify-center"><img class="size-12 transition duration-500 dark:invert" src="/ui/moduleLibrary.svg" aria-hidden="true" /></span>
      </div>
    </div>

    <div class="mt-4 flex w-full items-center justify-center gap-4">
      <div class="flex w-72 flex-col items-center justify-start gap-1 rounded-xl bg-neutral-100 p-2">
        <button v-for="ship in data" class="flex w-full items-center justify-between gap-2 rounded-xl px-2 py-1 transition hover:bg-neutral-200" type="button">
          <img class="h-10" :src="ship.img" :alt="ship.name" />
          <p class="text-medium grow text-left">{{ ship.name }}</p>
        </button>
      </div>

      <div class="h-96 grow bg-blue-500"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const userStore = useUserStore();

const data = computed(() => userStore.shipData?.filter((ship) => "modules" in ship));

onMounted(() => {});
</script>

<style scoped></style>
