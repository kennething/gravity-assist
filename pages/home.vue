<template>
  <div class="flex h-full min-h-[calc(100svh-8rem)] w-full flex-col items-center justify-start p-8">
    <div class="flex items-center justify-center gap-2" aria-label="Gravity Assist">
      <img class="size-16 sm:size-20 md:size-24 lg:size-32 xl:size-40" src="/logo/logo.svg" aria-hidden="true" />
      <img class="h-16 transition duration-500 sm:h-20 md:h-24 lg:h-32 xl:h-40 dark:invert" src="/logo/gravityAssist.svg" aria-hidden="true" />
    </div>

    <div class="mt-8 flex flex-col items-center justify-center gap-2">
      <HomeCarousel />
    </div>

    <div class="mt-16 flex w-[80vw] flex-col items-center justify-center gap-2 md:w-[25rem] lg:w-[40rem]">
      <h2 class="text-3xl font-bold transition duration-500 dark:text-white">What's New?</h2>
      <div class="fo-divider my-2 before:transition before:duration-500 after:transition after:duration-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        <span class="flex items-center justify-center"><img class="size-12 transition duration-500 dark:invert" src="/ui/hourglass.svg" aria-hidden="true" /></span>
      </div>
      <div class="min-w-[25rem] rounded-2xl bg-neutral-100/50 p-4 transition duration-500 dark:bg-neutral-900">
        <div class="w-full p-4">
          <ol class="relative border-s border-neutral-200 transition duration-500 dark:border-neutral-700">
            <HomeChangelogItem class="ms-6" :change="latestChange" />
          </ol>
        </div>
      </div>
      <button class="flex w-full items-center justify-end gap-2" @click="router.push({ query: { v: 'latest' } })">
        <p class="transition duration-500 hover:underline dark:text-white">View full changelog</p>
        <div class="du-tooltip" data-tip="View">
          <div class="fo-btn fo-btn-circle fo-btn-text dark:hover:bg-neutral-700">
            <img class="size-4 transition duration-500 dark:invert" src="/ui/arrowRight.svg" aria-hidden="true" />
          </div>
        </div>
      </button>
    </div>

    <div class="mt-16 flex w-[80vw] flex-col items-center justify-center gap-2 md:w-[25rem] lg:w-[40rem]">
      <h2 class="text-3xl font-bold transition duration-500 dark:text-white">Top Contributors</h2>
      <div class="fo-divider my-2 before:transition before:duration-500 after:transition after:duration-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        <span class="flex items-center justify-center"><img class="size-12 transition duration-500 dark:invert" src="/ui/trophy.svg" aria-hidden="true" /></span>
      </div>
      <div class="flex w-[80vw] flex-col gap-2 md:w-[25rem] lg:w-[35rem] xl:w-[40rem]">
        <HomeContributorsItem v-for="(contributor, index) in credits.slice(0, 5)" :key="contributor.name" :contributor="contributor" :index="index" />
        <button type="button" class="flex w-full items-center justify-end gap-2" @click="router.push({ query: { ct: 'true' } })">
          <p class="transition duration-500 hover:underline dark:text-white">View all contributors</p>
          <div class="du-tooltip" data-tip="View">
            <div class="fo-btn fo-btn-circle fo-btn-text dark:hover:bg-neutral-700">
              <img class="size-4 transition duration-500 dark:invert" src="/ui/arrowRight.svg" aria-hidden="true" />
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Home | Gravity Assist"
});

const route = useRoute();
const router = useRouter();

const latestChange = changelog[changelog.length - 1];
</script>

<style scoped></style>
