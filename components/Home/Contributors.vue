<template>
  <div id="menu" class="flex w-[80vw] flex-col items-start justify-center gap-2 rounded-2xl bg-white p-4 md:w-[40rem] md:p-10 dark:bg-neutral-800" @click.stop>
    <h2 class="text-2xl font-bold dark:text-white">Contributors</h2>
    <p class="dark:text-white">Thank you to everyone who has contributed to Gravity Assist!</p>
    <div class="flex h-96 w-full flex-col gap-2 overflow-y-scroll p-4">
      <HomeContributorsItem v-for="(contributor, index) in credits" :key="contributor.name" :contributor="contributor" :index="index" />
    </div>
    <p class="dark:text-white">Got something to share? <button class="font-medium hover:underline" @click="router.push({ query: { c: 'true' } })">Reach out!</button></p>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<style scoped></style>
