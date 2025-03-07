<template>
  <div class="relative w-[80vw] overflow-hidden rounded-2xl bg-neutral-100 shadow md:w-[25rem] lg:w-[40rem] xl:w-[50rem]">
    <div class="flex w-full transition duration-500" :style="{ transform: `translateX(-${currentCarouselIndex * 100}%)` }">
      <div v-for="showcase in carouselShowcases" :key="showcase.title" class="relative h-full w-[80vw] shrink-0 md:w-[25rem] lg:w-[40rem] xl:w-[50rem]">
        <img class="w-full" :src="showcase.src" aria-hidden="true" />
        <HomeCarouselCard :showcase="showcase" class="absolute hidden lg:block" />
      </div>
    </div>
    <div class="absolute bottom-4 left-1/2 flex w-full -translate-x-1/2 items-center justify-center gap-2">
      <button
        v-for="(showcase, index) in carouselShowcases"
        :key="index"
        class="h-6 w-1/6 rounded-full shadow md:h-3 md:w-16"
        :class="{ 'bg-white': currentCarouselIndex === index, 'bg-neutral-300': currentCarouselIndex !== index }"
        type="button"
        @click="goToCarousel(index)"
      ></button>
    </div>
  </div>
  <HomeCarouselCard :showcase="carouselShowcases[currentCarouselIndex]" class="relative mt-4 transition duration-500 lg:hidden dark:bg-neutral-900 dark:hover:bg-neutral-800" />
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

const currentCarouselIndex = ref(0);
const carouselInterval = ref<NodeJS.Timeout>();
const carouselShowcases: Showcase[] = [
  {
    title: "Blueprint Tracker",
    description: "Track your blueprint collection and share it with others",
    route: "/modules/blueprint-tracker",
    src: "/carousel/bpTracker.png",
    tag: {
      name: "New",
      color: "bg-purple-300"
    }
  },
  {
    title: "Module Library",
    description: "Browse through a collection of Super Capital modules and stats",
    route: "/modules/module-library",
    src: "/carousel/moduleLibrary.png",
    tag: {
      name: "Updated",
      color: "bg-green-300"
    }
  },
  {
    title: "Mail Editor",
    description: "Easily write, edit, save, and share mails for your community",
    route: "/modules/mail-editor/edit",
    src: "/carousel/mailEditor.png",
    tag: {
      name: "New",
      color: "bg-orange-200"
    }
  },
  {
    title: "RA Helper",
    description: "Plan out your research agreements in advance",
    route: "/modules/research-agreement-helper",
    src: "/carousel/researchAgreement.png"
  }
];

function startCarousel() {
  carouselInterval.value = setInterval(() => {
    currentCarouselIndex.value = (currentCarouselIndex.value + 1) % carouselShowcases.length;
  }, 7000);
}

function stopCarousel() {
  clearInterval(carouselInterval.value);
}

function goToCarousel(index: number) {
  stopCarousel();
  currentCarouselIndex.value = index;
  startCarousel();
}

onMounted(startCarousel);
onBeforeUnmount(stopCarousel);
</script>

<style scoped></style>
