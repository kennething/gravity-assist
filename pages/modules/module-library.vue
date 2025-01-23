<template>
  <div class="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start p-8">
    <div class="flex w-full flex-col items-center justify-center md:w-[25rem] lg:w-[30rem]">
      <h1 class="text-3xl font-bold transition duration-500">Module Library</h1>
      <div class="fo-divider my-2 before:transition before:duration-500 after:transition after:duration-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        <span class="flex items-center justify-center"><img class="size-12 transition duration-500 dark:invert" src="/ui/moduleLibrary.svg" aria-hidden="true" /></span>
      </div>
    </div>

    <div class="mt-4 flex w-full items-start justify-center gap-8">
      <div class="sticky top-20 flex w-72 flex-col items-center justify-start gap-1 rounded-xl bg-neutral-100/25 p-2">
        <LibrarySelection v-for="ship in data" :ship="ship" :currentShip="currentShip" @click="currentShip = ship" />
      </div>

      <div class="max-w-[50rem] grow" v-if="data && currentShip">
        <LibraryHero :currentShip="currentShip" />

        <div class="relative mt-8 w-full overflow-x-hidden">
          <div class="flex w-full flex-col items-center justify-center gap-2 transition-transform duration-700" :class="{ '-translate-x-full': currentModule }">
            <LazyLibraryModCategory v-for="(mods, category) in moduleCategories" :modules="mods" :category="category" @select="(mod) => (currentModule = mod)" />
          </div>
          <div class="absolute left-full top-0 flex w-full flex-col items-center justify-center gap-2 px-8 transition-transform duration-700" :class="{ '-translate-x-full': currentModule }">
            <button
              class="absolute left-8 top-0 flex items-center justify-center gap-2 rounded-xl bg-neutral-100 p-2 px-8 transition duration-500 hover:bg-neutral-200 hover:duration-150"
              @click="currentModule = undefined"
            >
              <img class="size-5 transition duration-500 dark:invert" src="/ui/arrowLeft.svg" alt="Go back to the module list" />
              <p class="font-medium">Back</p>
            </button>

            <LibraryShowcaseHero v-if="loaded" :currentModule="currentModule" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const userStore = useUserStore();

const loaded = ref(false);

const currentShip = ref<SuperCapitalShip>();
watch(currentShip, () => router.push({ query: { s: currentShip.value?.name } }));

const currentModule = ref<AllModule>();
watch(currentModule, () => router.push({ query: { ...route.query, m: currentModule.value?.system } }));

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

watch(
  () => route.query,
  () => handleQueries()
);

onMounted(() => {
  handleQueries();
  loaded.value = true;
});

function handleQueries() {
  if (!data.value) return void delay(10).then(() => handleQueries());

  if (!route.query.s) currentShip.value = data.value[0];
  else currentShip.value = data.value.find((ship) => ship.name.toLowerCase() === String(route.query.s).toLowerCase());

  if (route.query.m) currentModule.value = currentShip.value?.modules.find((mod) => mod.system.toLowerCase() === String(route.query.m).toLowerCase());
  else currentModule.value = undefined;

  console.log(currentModule.value);
}
</script>

<style lang="scss" scoped></style>
