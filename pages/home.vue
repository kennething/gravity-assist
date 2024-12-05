<template>
  <div class="flex min-h-[calc(100svh-8rem)] w-full flex-col items-center justify-start p-8">
    <h1>Home</h1>
    <input class="du-input" type="text" />
    <div class="relative">
      <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
        <img class="h-4 w-4" src="/ui/sun.svg" alt="" />
      </div>
      <input
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="sagsagsag"
        type="text"
      />
    </div>
    <label class="fo-input-group max-w-sm">
      <span class="fo-input-group-text">
        <img class="h-4 w-4" src="/ui/sun.svg" alt="" />
      </span>
      <input type="text" class="fo-input grow" placeholder="John Doe" />
    </label>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

onMounted(() => {});
</script>

<style scoped></style>
