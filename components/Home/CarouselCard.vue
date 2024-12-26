<template>
  <div class="inset-y-4 left-4 h-[calc(17rem-8vw)] w-[70vw] rounded-2xl bg-white/75 p-4 text-left shadow backdrop-blur transition hover:bg-white md:h-56 md:w-[25rem] lg:h-64 lg:w-60 xl:h-72">
    <h4 class="text-left text-2xl font-bold text-black">{{ showcase.title }}</h4>
    <span class="me-2 rounded px-2.5 py-0.5 text-left text-sm font-semibold text-black" :class="showcase.tag.color" v-if="showcase.tag">{{ showcase.tag.name }}</span>
    <p class="mt-2 text-left text-black">{{ showcase.description }}</p>
    <NuxtLink :to="showcase.route" class="fo-btn absolute bottom-4 w-52 border-neutral-100 bg-neutral-100 hover:border-neutral-300 hover:bg-neutral-300"
      >Go <img class="size-5" src="/ui/arrowRight.svg" aria-hidden="true"
    /></NuxtLink>
  </div>
</template>

<script setup lang="ts">
type Showcase = {
  title: string;
  description: string;
  route: string;
  src: string;
  tag?: {
    name: string;
    /** Provided as a Tailwind class.
     * @example bg-blue-100
     */
    color: string;
  };
};

const props = defineProps<{
  showcase: Showcase;
}>();
</script>

<style scoped></style>
