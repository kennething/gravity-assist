<template>
  <div class="flex min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start p-8"></div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

onMounted(() => {
  router.push("/modules/mail-editor/create");
});
</script>

<style lang="scss" scoped></style>
