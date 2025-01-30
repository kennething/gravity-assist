<template>
  <div class="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start p-8">
    <img class="w-[40rem]" src="/ships/solar_whale_a.png" alt="Solar Whale" />
    <h1 class="text-5xl font-bold transition duration-500">Uh oh!</h1>
    <p class="mt-1 text-2xl transition duration-500">A v14 whale is blocking your path!</p>
    <p class="mt-5 text-xl transition duration-500">You'll have to find your page somewhere else.</p>
    <NuxtLink to="/home" class="fo-btn mt-6 border-neutral-100 bg-neutral-100 text-black hover:border-neutral-300 hover:bg-neutral-300">Go Home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

useSeoMeta({
  title: "404 Not Found | Gravity Assist",
  ogTitle: "404 Not Found - Gravity Assist",
  description: "Uh oh! A v14 whale is blocking your path! We'll stay here and hold him off, but you'll have to find your page somewhere else!",
  ogDescription: "Uh oh! A v14 whale is blocking your path! We'll stay here and hold him off, but you'll have to find your page somewhere else!",
  ogImage: () => `${config.public.baseUrl}/ships/solar_whale.png`,
  twitterImage: () => `${config.public.baseUrl}/ships/solar_whale.png`,
  twitterDescription: "Uh oh! A v14 whale is blocking your path! We'll stay here and hold him off, but you'll have to find your page somewhere else!"
});
</script>

<style scoped></style>
