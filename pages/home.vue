<template>
  <div class="flex min-h-[calc(100svh-8rem)] w-full flex-col items-center justify-start p-8">
    <div class="flex items-center justify-center gap-2" aria-label="Gravity Assist">
      <img class="size-40" src="/logo/logo.svg" aria-hidden="true" />
      <img class="h-40 dark:invert" src="/logo/gravityAssist.svg" aria-hidden="true" />
    </div>

    <div class="mt-10 flex flex-col items-center justify-center gap-2">
      <h2 class="text-3xl font-bold">Get Started</h2>
      <div class="relative w-[50rem] overflow-hidden rounded-2xl bg-neutral-100">
        <div class="flex w-full transition duration-500" :style="{ transform: `translateX(-${currentCarouselIndex * 100}%)` }">
          <div class="relative h-full w-[50rem] shrink-0" v-for="showcase in carouselShowcases" :key="showcase.title">
            <img class="w-full" :src="showcase.src" aria-hidden="true" />
            <div class="absolute inset-y-4 left-4 h-72 w-60 rounded-2xl bg-white/75 p-4 shadow backdrop-blur transition hover:bg-white">
              <h4 class="text-2xl font-bold">{{ showcase.title }}</h4>
              <p class="mt-2">{{ showcase.description }}</p>
              <NuxtLink :to="showcase.route" class="fo-btn absolute bottom-4">Go</NuxtLink>
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
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

onMounted(() => {
  startCarousel();
});

onUnmounted(() => {
  stopCarousel();
});

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
    description: "The module library is a collection of modules that you can use to build your own modules.",
    route: "/",
    src: "/carousel/moduleLibrary.png"
  },
  {
    title: "RA Helper",
    description: "The RA Helper is a tool that helps you create research agreements for your modules.",
    route: "/",
    src: "/carousel/researchAgreement.png"
  },
  {
    title: "Equipment Library",
    description: "The equipment library is a collection of equipment that you can use to build your own equipment.",
    route: "/",
    src: "/carousel/equipment.png"
  },
  {
    title: "Color Generator",
    description: "The color generator is a tool that helps you generate colors for your modules.",
    route: "/",
    src: "/carousel/color.png"
  }
];

function startCarousel() {
  // carouselInterval.value = setInterval(() => {
  //   currentCarouselIndex.value = (currentCarouselIndex.value + 1) % carouselShowcases.length;
  // }, 5000);
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
