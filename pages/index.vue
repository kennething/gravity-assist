<template>
  <div class="flex w-full flex-col items-center justify-center"></div>
</template>

<script setup lang="ts">
const router = useRouter();

onMounted(() => {
  router.push("/home");
});
</script>

<style lang="scss" scoped></style>
