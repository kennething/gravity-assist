<template>
  <div class="flex flex-col items-center justify-center gap-2">
    <p class="transition duration-500">Have this module unlocked? Contact me!</p>

    <div class="du-tooltip mt-4" data-tip="Contact">
      <button type="button" class="fo-btn fo-btn-circle fo-btn-text" @click="changeRouteQuery({ c: 'true' }, 'push')">
        <img class="size-6 transition duration-500 dark:invert" src="/ui/contact.svg" alt="Contact me" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
