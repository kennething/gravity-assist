<template>
  <div class="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start p-8" @click="closeOptions()">
    <div class="flex w-full flex-col items-center justify-center md:w-[25rem] lg:w-[30rem]">
      <h1 class="text-3xl font-bold transition duration-500">Blueprint Tracker</h1>
      <div class="fo-divider my-2 before:transition before:duration-500 after:transition after:duration-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        <span class="flex items-center justify-center"><img class="size-12 transition duration-500 dark:invert" src="/ui/bpTracker.svg" aria-hidden="true" /></span>
      </div>
    </div>

    <div
      ref="toolbar"
      class="sticky top-20 z-[2] mt-4 flex flex-wrap items-center justify-center gap-4 rounded-full bg-body px-5 py-2 transition duration-500 xl:flex-nowrap"
      :class="{ 'shadow dark:border dark:border-neutral-700 dark:shadow-none': isSticky }"
    >
      <BlueprintsSettings :close="closeSettings" @list="isListLayout = !isListLayout" @variants="showVariants = !showVariants" @click.stop="closeOptions(false)" />
      <BlueprintsSort :close="closeSorters" @sort="(sorter) => (currentSorter = sorter)" @click.stop="closeOptions(true, true, false)" />
      <BlueprintsFilter :close="closeFilters" @filter="(filter) => (currentFilters = filter)" @click.stop="closeOptions(true, false, true)" />
      <BlueprintsSearch @search="(term) => (currentSearch = term)" />
      <button
        v-if="isOwner"
        type="button"
        @click="saveBlueprints"
        class="du-btn flex h-9 min-h-9 items-center justify-center gap-2 rounded-full border-blue-300 bg-blue-100 py-2 transition duration-500 hover:scale-105 hover:border-blue-400 hover:bg-blue-200 dark:border-blue-500 dark:bg-blue-800 dark:hover:bg-blue-700"
        :class="{ 'pointer-events-none opacity-50 brightness-50': !userStore.hasUnsavedChanges }"
      >
        <span class="hidden transition duration-500 sm:inline-flex md:hidden lg:inline-flex">{{ success ? "Saved!" : loading ? "Saving" : "Save" }}</span>
        <img class="size-5 transition duration-500 dark:invert" src="/ui/save.svg" aria-hidden="true" v-if="!loading" />
        <span class="fo-loading fo-loading-spinner fo-loading-sm" v-else></span>
      </button>
      <p
        class="absolute -bottom-7 rounded-full bg-body px-3 py-1 opacity-0 transition duration-500"
        :class="{ 'opacity-100': userStore.hasUnsavedChanges || !isOwner, 'shadow dark:border dark:border-neutral-700 dark:shadow-none': isSticky }"
      >
        {{ !isOwner ? "You are viewing someone else's blueprints" : "You have unsaved changes" }}
      </p>
    </div>

    <p class="mt-8 transition duration-500" v-if="lastSaved">Last updated: {{ formatDate(lastSaved, "full", true) }}</p>

    <div class="mt-4 flex w-full flex-col items-center justify-center" v-if="displayedData">
      <div v-for="type in shipTypes" class="w-full">
        <div class="flex w-full flex-col items-center justify-center" v-if="displayedData.filter((ship) => ship.type === type).length > 0">
          <h2 class="mt-4 text-2xl font-bold transition duration-500">{{ type }}s</h2>
          <p class="transition duration-500">
            {{ displayedData.filter((ship) => ship.type === type && ship.unlocked).length }}/{{ displayedData.filter((ship) => ship.type === type).length }} unlocked
          </p>
          <p class="mb-4 transition duration-500">
            {{ getTotalTP(displayedData.filter((ship) => ship.type === type)).toLocaleString() }}
            total Tech Points
          </p>
          <div class="flex flex-wrap items-stretch justify-center gap-3">
            <LazyBlueprintsCard
              v-for="ship in displayedData.filter((ship) => ship.type === type)"
              :ship="ship"
              :mirror="ship.mirrorTechPoints"
              :layout="currentLayout"
              :variants="showVariants"
              :allVariants="displayedData.filter((s) => ship.name === s.name)"
              :tp="ship.techPoints"
              :owner="isOwner"
              @tp="(tp) => handleTp(ship, tp)"
              @mirror="toggleMirror(ship)"
              @modules="(ship) => (currentShip = ship)"
              @change="userStore.hasUnsavedChanges = true"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 flex w-full flex-wrap items-stretch justify-center gap-3" v-else>
      <div class="fo-skeleton fo-skeleton-animated h-56 w-full grow rounded-2xl bg-neutral-100 p-6 transition duration-500 dark:bg-neutral-900" v-for="i in 20"></div>
    </div>

    <Transition name="menu">
      <div class="fixed left-0 top-0 z-20 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" v-if="currentShip" @click="currentShip = undefined">
        <BlueprintsModules :ship="currentShip" :owner="isOwner" @done="currentShip = undefined" @change="userStore.hasUnsavedChanges = true" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
// this is such shit code

const lastSaved = ref("");
const data = ref<BlueprintAllShip[]>();
watch(
  data,
  (val) => {
    if (userStore.user?.uid === route.query.u && val) userStore.blueprintsAutosave = val;
  },
  { deep: true }
);

onMounted(() => {
  data.value = userStore.blueprintsAutosave;
});

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const isOwner = computed(() => {
  if (!userStore.user || !userStore.shipData) return;
  if (!route.query.u) {
    router.replace({ query: { u: userStore.user.uid } });
    return true;
  }

  return route.query.u === userStore.user.uid;
});
watch(isOwner, async (val) => {
  if (!userStore.shipData || !userStore.user) return;

  if (val) return (data.value = userStore.blueprintsAutosave ?? (await getBlueprints(userStore.shipData)));
  data.value = await getBlueprints(userStore.shipData);
});

useSeoMeta({
  title: () => `${isOwner.value ? "Your" : "Someone else's"} Blueprint Tracker | Gravity Assist`,
  ogTitle: "Blueprint Tracker - Gravity Assist",
  description:
    "Easily track your blueprint collection and share it with others! View your collection, add new blueprints, and save your changes. Never open Excel ever again to share your blueprints with others!",
  ogDescription:
    "Easily track your blueprint collection and share it with others! View your collection, add new blueprints, and save your changes. Never open Excel ever again to share your blueprints with others!"
});

watch(
  () => route.query,
  async (val) => {
    console.log(val, userStore.shipData);
    if (!userStore.shipData || !userStore.user) return;

    if (userStore.user.uid === val.u) return (data.value = userStore.blueprintsAutosave ?? (await getBlueprints(userStore.shipData)));
    data.value = await getBlueprints(userStore.shipData);
  }
);

const shipTypes = ["Fighter", "Corvette", "Frigate", "Destroyer", "Cruiser", "Battlecruiser", "Auxiliary Ship", "Carrier", "Battleship"];

const closeFilters = ref(false);
const closeSorters = ref(false);
const closeSettings = ref(false);

const isListLayout = ref(false);
watch(isListLayout, (val) => {
  localStorage.setItem("layout", val ? "list" : "grid");
});
const currentLayout = computed(() => (isListLayout.value ? "list" : "grid"));
const showVariants = ref(false);
watch(showVariants, (val) => {
  localStorage.setItem("variants", JSON.stringify(val));
});

const toolbar = useTemplateRef("toolbar");
const isSticky = ref(false);
const loading = ref(false);
const success = ref(false);

const currentShip = ref<BlueprintSuperCapitalShip>();

const currentFilters = ref<ShipFilter>();
const currentSorter = ref<ShipSorter>();
const currentSearch = ref("");

const filteredData = computed(() => {
  if (!currentFilters.value || !currentSorter.value) return;
  const filters = currentFilters.value;
  const sorter = currentSorter.value;
  const search = currentSearch.value;

  return data.value
    ?.filter(filters)
    .filter((ship) => ship.name.toLowerCase().includes(search.toLowerCase()) || ship.variantName.toLowerCase().includes(search.toLowerCase()))
    .sort(sorter);
});
const displayedData = ref<BlueprintAllShip[]>();
watch(filteredData, (data) => (displayedData.value = data));

onMounted(() => {
  isListLayout.value = localStorage.getItem("layout") === "list";
  showVariants.value = localStorage.getItem("variants") === "true";
});

onMounted(() => {
  window.addEventListener("scroll", detectSticky);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", detectSticky);
});

watch(
  () => userStore.hasUnsavedChanges,
  (val) => {
    if (val && isOwner.value) window.addEventListener("beforeunload", warnForUnsavedChanges);
    else window.removeEventListener("beforeunload", warnForUnsavedChanges);
  }
);

function warnForUnsavedChanges(event: BeforeUnloadEvent) {
  event.preventDefault();
}

let previousPosition = 0;
function detectSticky(event: Event) {
  if (!toolbar.value) return;
  const newPosition = toolbar.value.getBoundingClientRect().top;

  if (newPosition === previousPosition) return (isSticky.value = true);

  previousPosition = newPosition;
  isSticky.value = false;
}

function handleTp(targetShip: BlueprintAllShip, tp: number) {
  if (!data.value) return;
  userStore.hasUnsavedChanges = true;

  targetShip.techPoints = tp;
  if (!targetShip.hasVariants || !targetShip.mirrorTechPoints) return;

  const mirrorShips = data.value.filter((ship) => ship.name === targetShip.name && ship.variant !== targetShip.variant);

  for (const ship of mirrorShips) {
    ship.techPoints = tp;
  }
}

function toggleMirror(targetShip: BlueprintAllShip) {
  if (!targetShip.hasVariants || !data.value) return;
  userStore.hasUnsavedChanges = true;

  const newValue = !targetShip.mirrorTechPoints;
  targetShip.mirrorTechPoints = newValue;
  const mirrorShips = data.value.filter((ship) => ship.name === targetShip.name && ship.variant !== targetShip.variant);

  for (const ship of mirrorShips) {
    ship.mirrorTechPoints = newValue;
  }
}

function closeOptions(settings = true, filters = true, sorters = true) {
  if (settings) closeSettings.value = true;
  if (filters) closeFilters.value = true;
  if (sorters) closeSorters.value = true;
  setTimeout(() => {
    if (settings) closeSettings.value = false;
    if (filters) closeFilters.value = false;
    if (sorters) closeSorters.value = false;
  }, 1);
}

function getTotalTP(ships: BlueprintAllShip[]) {
  const usedShips: string[] = [];

  return ships.reduce((total, ship) => {
    if (ship.hasVariants) {
      if (usedShips.includes(ship.name)) return total;
      usedShips.push(ship.name);
    }
    return total + ship.techPoints;
  }, 0);
}

async function getBlueprints(data: AllShip[]) {
  const { success, error, content, lastSaved: bpLastSaved } = await $fetch("/api/getBlueprints", { method: "POST", body: { uid: route.query.u ?? userStore.user?.uid } });

  if (!success && error) console.error(error);

  if (success && content && bpLastSaved) {
    console.log(bpLastSaved);
    lastSaved.value = bpLastSaved;
    return data.map((ship) => {
      const ownedBlueprint = content.find(([name, variant]) => ship.name === name && ship.variant === variant);

      const result: Record<any, any> = {
        ...ship,
        unlocked: Boolean(ownedBlueprint),
        techPoints: ownedBlueprint ? ownedBlueprint[2] : 0,
        mirrorTechPoints: ship.hasVariants
      };

      if ("modules" in ship) result.modules = ship.modules.map((module) => ({ ...module, unlocked: Boolean(ownedBlueprint && ownedBlueprint.slice(3).includes(module.system)) }));

      return result as BlueprintAllShip;
    });
  }

  lastSaved.value = new Date().toISOString().slice(0, 10);
  return data.map((ship) => {
    const result: Record<any, any> = {
      ...ship,
      unlocked: false,
      techPoints: 0,
      mirrorTechPoints: ship.hasVariants
    };

    if ("modules" in ship) result.modules = ship.modules.map((module) => ({ ...module, unlocked: Boolean(module.default) }));

    return result as BlueprintAllShip;
  });
}

async function saveBlueprints() {
  if (!userStore.user || !userStore.hasUnsavedChanges) return;

  loading.value = true;
  const { success: fetchSuccess, error } = await $fetch("/api/saveBlueprints", { method: "POST", body: { uid: route.query.u, accessToken: userStore.user.accessToken, blueprints: data.value } });
  loading.value = false;
  if (!fetchSuccess && error) console.error(error);
  success.value = true;
  setTimeout(() => {
    userStore.hasUnsavedChanges = false;
    success.value = false;
  }, 1000);
}
</script>

<style lang="scss" scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s ease-in-out;

  #menu {
    transition: all 0.35s ease-in-out;
  }
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;

  #menu {
    transform: scale(0);
  }
}
</style>
