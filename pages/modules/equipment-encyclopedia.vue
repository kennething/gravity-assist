<template>
  <div class="flex min-h-[calc(100svh-8rem)] w-full flex-col items-center justify-start p-8"></div>
</template>

<script setup lang="ts">
const router = useRouter();

onMounted(() => {
  router.push("/modules/encyclopedia#equipment");
});
</script>

<style lang="scss" scoped></style>
