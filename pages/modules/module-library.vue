<template>
  <div class="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start p-8">
    <div class="flex w-full flex-col items-center justify-center md:w-[25rem] lg:w-[30rem]">
      <h1 class="text-3xl font-bold transition duration-500">Module Library</h1>
      <div class="fo-divider my-2 before:transition before:duration-500 after:transition after:duration-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        <span class="flex items-center justify-center"><img class="size-12 transition duration-500 dark:invert" src="/ui/moduleLibrary.svg" aria-hidden="true" /></span>
      </div>
    </div>

    <div class="mt-4 flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:items-start xl:gap-8">
      <!-- prettier-ignore -->
      <div class="flex w-[90vw] shrink-0 flex-col items-center justify-start gap-1 rounded-xl bg-neutral-100/25 p-2 transition duration-500 sm:w-80 lg:sticky lg:top-20 lg:w-64 xl:w-72 dark:bg-neutral-900">
        <LibrarySelection v-for="ship in data" v-if="data" :key="Symbol(ship.name + ship.variant)" :ship="ship" :current-ship="currentShip" @click="currentShip = ship" />
        <div v-for="i in 10" v-else :key="i" class="fo-skeleton fo-skeleton-animated h-12 w-full rounded-xl bg-neutral-100/50 px-2 py-1 transition duration-500 dark:bg-neutral-700"></div>
      </div>

      <div class="w-[90vw] max-w-[50rem] grow-0 sm:w-auto sm:grow">
        <LibraryHero v-if="data && currentShip" :current-ship="currentShip" />
        <div v-else class="fo-skeleton fo-skeleton-animated flex h-44 rounded-2xl bg-neutral-100/50 p-4 transition duration-500"></div>

        <div class="mt-8 w-full overflow-x-hidden">
          <div class="flex w-[200%] items-start justify-center">
            <div class="flex w-1/2 flex-col items-center justify-center gap-2 transition-transform duration-700" :class="{ '-translate-x-full': currentModule }">
              <LazyLibraryModCategory v-for="(mods, category) in moduleCategories" :key="category" :modules="mods" :category="category" @select="(mod) => (currentModule = mod)" />
            </div>

            <div class="relative flex w-1/2 flex-col items-center justify-center gap-5 px-8 transition-transform duration-700" :class="{ '-translate-x-full': currentModule }">
              <LibraryShowcaseBackButton @click="currentModule = undefined" />

              <LibraryShowcaseHero v-if="data && loaded" class="mt-16" :current-module="currentModule" />
              <div v-else class="fo-skeleton fo-skeleton-animated mt-16 h-72 w-full rounded-xl bg-neutral-100/25 p-4 transition duration-500 dark:bg-neutral-900"></div>
              <LibraryShowcaseSourceBanner v-if="data && loaded" :current-module="currentModule" />
              <div v-else class="fo-skeleton fo-skeleton-animated h-24 w-full rounded-xl bg-neutral-100/25 p-4 transition duration-500 dark:bg-neutral-900"></div>
              <LibraryShowcaseCardSubsystemCards v-if="data && loaded" :current-module="currentModule" />
              <div v-else class="fo-skeleton fo-skeleton-animated h-72 w-full rounded-xl bg-neutral-100/25 p-4 transition duration-500 dark:bg-neutral-900"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const route = useRoute();
const router = useRouter();

const currentShip = ref<SuperCapitalShip>();
watch(currentShip, () => router.push({ query: { s: currentShip.value?.name } }));

const currentModule = ref<AllModule>();
watch(currentModule, () => router.push({ query: { ...route.query, m: currentModule.value?.system } }));

useSeoMeta({
  title: () => `${currentModule.value?.system ? `${currentModule.value?.system} / ` : ""}${currentShip.value?.name ?? "Constantine the Great"} - Module Library | Gravity Assist`,
  ogTitle: () => `Module Library -  ${route.query.m ? `${route.query.m} / ` : ""}${route.query.s ?? "Constantine the Great"}`,
  description:
    "Looking for a module? We've got it! (probably) Dig through stats, stats, and more stats for any module you can imagine. All information is crowdsourced, so do your patriotic duty and share your modules!",
  ogDescription:
    "Looking for a module? We've got it! (probably) Dig through stats, stats, and more stats for any module you can imagine. All information is crowdsourced, so do your patriotic duty and share your modules!",
  twitterDescription:
    "Looking for a module? We've got it! (probably) Dig through stats, stats, and more stats for any module you can imagine. All information is crowdsourced, so do your patriotic duty and share your modules!",
  twitterImage: () => config.public.baseUrl + (route.query.s ? `/ships/${shipNameToImage(route.query.s as string)}_a.png` : "/ships/constantine_the_great_a.png")
});

const userStore = useUserStore();

const loaded = ref(false);

const moduleCategories = computed(() => {
  if (!currentShip.value) return;
  return currentShip.value.modules.reduce((mods: Record<string, AllModule[]>, currentMod) => {
    const key = currentMod.system[0];
    if (!mods[key]) mods[key] = [];

    mods[key].push(currentMod);
    return mods;
  }, {});
});

const data = computed(() => userStore.shipData?.filter((ship) => "modules" in ship));

function handleQueries() {
  if (!data.value) return void delay(10).then(() => handleQueries());

  if (!route.query.s) currentShip.value = data.value[0];
  else currentShip.value = data.value.find((ship) => ship.name.toLowerCase() === String(route.query.s).toLowerCase());

  if (route.query.m) currentModule.value = currentShip.value?.modules.find((mod) => mod.system.toLowerCase() === String(route.query.m).toLowerCase());
  else currentModule.value = undefined;
}

watch(() => route.query, handleQueries);

onMounted(async () => {
  if (!route.query.s) await router.replace({ query: { ...route.query, s: "Constantine the Great" } });
  handleQueries();
  loaded.value = true;
});
</script>

<style lang="scss" scoped></style>
