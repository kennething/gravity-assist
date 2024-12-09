<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const title = "Gravity Assist";
const description = "Create colored text, search modules and research paths, design custom fleets, and more. Gravity Assist is an all-in-one tool for anything you may need in Infinite Lagrange.";
useSeoMeta({
  author: "DubNubz",
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogSiteName: title,
  ogUrl: () => config.public.baseUrl,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterImage: () => config.public.baseUrl + "/logo/logo.png",
  twitterDescription: description
});

const route = useRoute();
const router = useRouter();

const userStore = useUserStore();
const { isDarkMode } = storeToRefs(userStore);
watch(isDarkMode, () => {
  document.body.classList.toggle("dark", isDarkMode.value);
  localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
});

onMounted(() => {
  if (localStorage.getItem("theme") === "dark") isDarkMode.value = true;
  document.body.style.display = "block";
  userStore.init();
});
</script>

<style scoped></style>
