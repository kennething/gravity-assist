<template>
  <div class="flex min-h-[calc(100svh-8rem)] w-full flex-col items-center justify-start p-8">
    <div class="flex items-center justify-center gap-2" aria-label="Gravity Assist">
      <img class="size-40" src="/logo/logo.svg" aria-hidden="true" />
      <img class="h-40 dark:invert" src="/logo/gravityAssist.svg" aria-hidden="true" />
    </div>

    <div class="mt-10 flex flex-col items-center justify-center gap-2">
      <HomeCarousel />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
</script>

<style scoped></style>
