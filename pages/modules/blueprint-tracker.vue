<template>
  <div class="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start p-8" @click="closeToolbar = true">
    <div class="flex w-full flex-col items-center justify-center md:w-[25rem] lg:w-[30rem]">
      <h1 class="text-3xl font-bold transition duration-500">Blueprint Tracker</h1>
      <div class="fo-divider my-2 before:transition before:duration-500 after:transition after:duration-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        <span class="flex items-center justify-center"><img class="size-12 transition duration-500 dark:invert" src="/ui/bpTracker.svg" aria-hidden="true" /></span>
      </div>
    </div>

    <BlueprintsToolbar
      :close-toolbar="closeToolbar"
      :data="data"
      :is-owner="isOwner"
      :account-index="accountIndex"
      @list="isListLayout = !isListLayout"
      @variants="showVariants = !showVariants"
      @sort="(sorter) => (currentSorter = sorter)"
      @filter="(filter) => (currentFilters = filter)"
      @search="(term) => (currentSearch = term)"
    />

    <ClientOnly>
      <p class="mt-8 transition duration-500" v-if="lastSaved">Last updated: {{ formatDate(lastSaved, "full", true) }}</p>
    </ClientOnly>

    <div class="mt-4 flex w-full flex-col items-center justify-center" v-if="displayedData">
      <BlueprintsCategory
        v-for="type in shipTypes"
        :type="type"
        :is-owner="isOwner"
        :current-layout="currentLayout"
        :show-variants="showVariants"
        :data="data"
        :displayed-data="displayedData"
        :key="type"
        @modules="(ship) => (currentShip = ship)"
      />
    </div>

    <div class="mt-4 flex w-full flex-wrap items-stretch justify-center gap-3" v-else>
      <div class="fo-skeleton fo-skeleton-animated h-56 w-full grow rounded-2xl bg-neutral-100 p-6 transition duration-500 dark:bg-neutral-900" v-for="i in 5"></div>
    </div>

    <Transition name="menu">
      <div class="fixed left-0 top-0 z-20 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" v-if="currentShip" @click="currentShip = undefined">
        <BlueprintsModules :ship="currentShip" :owner="isOwner" @done="currentShip = undefined" @change="userStore.hasUnsavedChanges = true" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const lastSaved = ref("");
const data = ref<BlueprintAllShip[]>();
watch(
  data,
  (val) => {
    if (userStore.user?.uid === route.query.u && val) userStore.blueprintsAutosave = val;
  },
  { deep: true }
);

onBeforeMount(() => {
  const accountQuery = Number(route.query.a);
  accountIndex.value = accountQuery < 10 ? accountQuery : 0;
});

onMounted(() => {
  data.value = userStore.blueprintsAutosave;
});

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const isOwner = computed(() => {
  if (!userStore.user || !userStore.shipData) return;
  if (!route.query.u) {
    router.replace({ query: { ...route.query, u: userStore.user.uid } });
    return true;
  }
  if (!route.query.a) {
    router.replace({ query: { ...route.query, a: 0 } });
    return true;
  }

  return route.query.u === userStore.user.uid;
});
watch(isOwner, async (val) => {
  if (!userStore.shipData || !userStore.user) return;

  if (val) return (data.value = userStore.blueprintsAutosave ?? (await getBlueprints(userStore.shipData)));
  data.value = await getBlueprints(userStore.shipData);
});

const accountIndex = ref(0);

useSeoMeta({
  title: () => `${isOwner.value ? "Your" : "Someone else's"} Blueprint Tracker | Gravity Assist`,
  ogTitle: "Blueprint Tracker - Gravity Assist",
  description: () =>
    `${route.query.u ? "Someone saved their blueprint collection and shared it with you! You, too, can e" : "E"}asily track your blueprint collection and share it with others! View your collection, add new blueprints, and save your changes. Never open Excel ever again to share your blueprints with others!`,
  ogDescription: () =>
    `${route.query.u ? "Someone saved their blueprint collection and shared it with you! You, too, can e" : "E"}asily track your blueprint collection and share it with others! View your collection, add new blueprints, and save your changes. Never open Excel ever again to share your blueprints with others!`,
  twitterDescription:
    "Easily track your blueprint collection and share it with others! View your collection, add new blueprints, and save your changes. Never open Excel ever again to share your blueprints with others!"
});

watch(
  () => route.query,
  async (val) => {
    if (!userStore.shipData || !userStore.user) return;

    accountIndex.value = Number(val.a) ?? 0;

    if (userStore.user.uid === val.u) return (data.value = userStore.blueprintsAutosave ?? (await getBlueprints(userStore.shipData)));
    data.value = await getBlueprints(userStore.shipData);
  }
);

const shipTypes = ["Fighter", "Corvette", "Frigate", "Destroyer", "Cruiser", "Battlecruiser", "Auxiliary Ship", "Carrier", "Battleship"];

const isListLayout = ref(false);
watch(isListLayout, (val) => {
  localStorage.setItem("layout", val ? "list" : "grid");
});
const currentLayout = computed(() => (isListLayout.value ? "list" : "grid"));
const showVariants = ref(false);
watch(showVariants, (val) => {
  localStorage.setItem("variants", JSON.stringify(val));
});

const currentShip = ref<BlueprintSuperCapitalShip>();

const currentFilters = ref<ShipFilter>();
const currentSorter = ref<ShipSorter>();
const currentSearch = ref("");
const closeToolbar = ref(false);
watch(closeToolbar, async (val) => {
  if (!val) return;
  await nextTick();
  closeToolbar.value = false;
});

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

async function getBlueprints(data: AllShip[]) {
  const {
    success,
    error,
    content,
    lastSaved: bpLastSaved,
    accountName: bpAccountName
  } = await $fetch("/api/getBlueprints", { method: "POST", body: { uid: route.query.u ?? userStore.user?.uid, accountIndex: accountIndex.value } });

  if (!success && error) console.error(error);

  if (success && content && bpLastSaved) {
    lastSaved.value = bpLastSaved;
    return data.map((ship) => {
      const ownedBlueprint = content.find(([id, variant]) => ship.id === id && ship.variant === variant);

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
