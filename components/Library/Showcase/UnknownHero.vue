<template>
  <div class="flex flex-col items-center justify-center gap-2">
    <p>Have this module unlocked? Contact me!</p>

    <div class="du-tooltip mt-4" data-tip="Contact">
      <button type="button" class="fo-btn fo-btn-circle fo-btn-text" @click="router.push({ query: { ...route.query, c: 'true' } })">
        <img class="size-6" src="/ui/contact.svg" alt="Contact me" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
</script>

<style scoped></style>
