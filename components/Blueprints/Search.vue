<template>
  <div
    class="fo-input-group flex h-9 w-36 items-center justify-center rounded-full border-neutral-300 bg-white transition duration-500 lg:w-72 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600"
  >
    <span class="fo-input-group-text">
      <img class="size-5 shrink-0 transition duration-500 dark:invert" src="/ui/search.svg" aria-hidden="true" />
    </span>
    <input
      ref="searchInput"
      type="text"
      class="search-input fo-input grow rounded-e-full text-left text-black transition duration-500 placeholder:transition placeholder:duration-500 dark:text-white dark:placeholder:text-neutral-300"
      placeholder="Search"
      v-model="search"
    />
    <div class="du-tooltip fo-input-group-text p-0" data-tip="Clear" :class="search ? 'visible' : 'invisible'">
      <button tabindex="-1" class="fo-btn fo-btn-circle fo-btn-text rounded-full" type="button" @click="search = ''">
        <img class="size-5 dark:invert" src="/ui/close.svg" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  search: [string];
}>();

const search = ref("");
watch(search, (value) => emit("search", value));
</script>

<style scoped></style>
