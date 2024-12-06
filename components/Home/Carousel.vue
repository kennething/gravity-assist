<template>
  <div class="relative w-[50rem] overflow-hidden rounded-2xl bg-neutral-100 shadow">
    <div class="flex w-full transition duration-500" :style="{ transform: `translateX(-${currentCarouselIndex * 100}%)` }">
      <div class="relative h-full w-[50rem] shrink-0" v-for="showcase in carouselShowcases" :key="showcase.title">
        <img class="w-full" :src="showcase.src" aria-hidden="true" />
        <div class="absolute inset-y-4 left-4 h-72 w-60 rounded-2xl bg-white/75 p-4 shadow backdrop-blur transition hover:bg-white">
          <h4 class="text-2xl font-bold">{{ showcase.title }}</h4>
          <p class="mt-2">{{ showcase.description }}</p>
          <NuxtLink :to="showcase.route" class="fo-btn absolute bottom-4 w-52">Go <img class="size-5" src="/ui/arrowRight.svg" aria-hidden="true" /></NuxtLink>
        </div>
      </div>
    </div>
    <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
      <button
        v-for="(showcase, index) in carouselShowcases"
        class="h-3 w-16 rounded-full shadow"
        :class="{ 'bg-white': currentCarouselIndex === index, 'bg-neutral-300': currentCarouselIndex !== index }"
        @click="goToCarousel(index)"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(startCarousel);
onUnmounted(stopCarousel);

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

const currentCarouselIndex = ref(0);
const carouselInterval = ref<NodeJS.Timeout>();
const carouselShowcases: Showcase[] = [
  {
    title: "Module Library",
    description: "Browse through a collection of modules and stats for Super Capital Ships",
    route: "/",
    src: "/carousel/moduleLibrary.png"
  },
  {
    title: "RA Helper",
    description: "Plan out your research agreements in advance and track your progress to blueprint completion",
    route: "/",
    src: "/carousel/researchAgreement.png"
  },
  {
    title: "Equipment Library",
    description: "Browse through a collection of equipment and technical blueprints",
    route: "/",
    src: "/carousel/equipment.png"
  },
  {
    title: "Color Generator",
    description: "Easily create and copy colored text to flex on the haters",
    route: "/",
    src: "/carousel/color.png"
  }
];

function startCarousel() {
  carouselInterval.value = setInterval(() => {
    currentCarouselIndex.value = (currentCarouselIndex.value + 1) % carouselShowcases.length;
  }, 5000);
}

function stopCarousel() {
  clearInterval(carouselInterval.value);
}

function goToCarousel(index: number) {
  stopCarousel();
  currentCarouselIndex.value = index;
  startCarousel();
}
</script>

<style scoped></style>
