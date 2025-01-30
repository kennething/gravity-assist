<template>
  <div class="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start p-8"></div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "mail-editor" });

const router = useRouter();

onMounted(() => {
  void router.replace("/modules/mail-editor/edit");
});
</script>

<style lang="scss" scoped></style>
