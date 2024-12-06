<template>
  <div id="menu" class="flex w-[50rem] flex-col items-start justify-center gap-2 rounded-2xl bg-white p-10 dark:bg-neutral-800" @click.stop>
    <h2 class="text-2xl font-bold dark:text-white">Contributors</h2>
    <p class="dark:text-white">Thank you to everyone who has contributed to Gravity Assist!</p>
    <div class="flex h-96 w-full flex-col gap-2 overflow-y-scroll p-4">
      <div class="du-collapse du-collapse-plus shrink-0 bg-neutral-100 dark:bg-neutral-900" v-for="(contributor, index) in credits" :key="contributor.name">
        <input class="h-full w-full" type="radio" name="contributors-list" :checked="index === 0" />
        <div class="du-collapse-title text-xl font-medium dark:text-white">
          {{ contributor.name }}
          <time class="mt-px block text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
            {{ new Intl.DateTimeFormat(undefined, { dateStyle: "long" }).format(new Date(contributor.dateAdded)) }}
          </time>
        </div>
        <div class="du-collapse-content">
          <ul class="text-base font-normal text-gray-600 dark:text-gray-300">
            <li v-for="(note, index) in contributor.specific">→ {{ note }}{{ index === contributor.specific.length - 1 ? "" : "," }}</li>
          </ul>
        </div>
      </div>
    </div>
    <p class="dark:text-white">Got something to share? <button class="font-medium hover:underline" @click="router.push({ query: { c: 'true' } })">Reach out!</button></p>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<style scoped></style>
