<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
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
});
</script>

<style scoped></style>
