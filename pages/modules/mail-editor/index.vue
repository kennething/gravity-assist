<template>
  <div></div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "mail-editor"
});

const route = useRoute();
const router = useRouter();

onMounted(() => {
  router.replace("/modules/mail-editor/edit");
});
</script>

<style lang="scss" scoped></style>
