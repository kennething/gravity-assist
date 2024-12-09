<template>
  <div class="flex h-full min-h-[calc(100svh-8rem)] w-full flex-col items-center justify-start p-8">
    <img class="w-[40rem]" src="/ships/solarWhale.png" alt="Solar Whale" />
    <h1 class="text-5xl font-bold transition duration-500 dark:text-white">Uh oh!</h1>
    <p class="mt-1 text-2xl transition duration-500 dark:text-white">A v4 whale is blocking your path!</p>
    <p class="mt-5 text-xl transition duration-500 dark:text-white">You'll have to find your page somewhere else.</p>
    <NuxtLink to="/home" class="fo-btn mt-6">Go Home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const description = "A v4 whale is blocking your path! You'll have to find your page somewhere else.";
useSeoMeta({
  title: "404 Not Found | Gravity Assist",
  ogTitle: "404 Not Found",
  description,
  ogDescription: description,
  twitterImage: () => config.public.baseUrl + "/ships/solarWhale.png",
  twitterDescription: description
});

const route = useRoute();
const router = useRouter();

onMounted(() => {});
</script>

<style scoped></style>
