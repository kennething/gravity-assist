<template>
  <div class="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start p-8" @click="closeToolbar = true">
    <div class="flex w-full flex-col items-center justify-center md:w-[25rem] lg:w-[30rem]">
      <h1 class="text-3xl font-bold transition duration-500">Blueprint Tracker</h1>
      <div class="fo-divider my-2 before:transition before:duration-500 after:transition after:duration-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        <span class="flex items-center justify-center"><img class="size-12 select-none transition duration-500 dark:invert" src="/ui/bpTracker.svg" aria-hidden="true" /></span>
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
      <p v-if="lastSaved" class="mt-8 transition duration-500">Last updated: {{ formatDate(lastSaved, "full", true) }}</p>
      <p v-if="data" class="text-sm transition duration-500">{{ getTotalTP(data).toLocaleString() }} total Tech Points</p>
    </ClientOnly>

    <div v-if="displayedData" class="mt-4 flex w-full flex-col items-center justify-center">
      <BlueprintsCategory
        v-for="type in shipTypes"
        :key="type"
        :ship-type="type"
        :is-owner="isOwner"
        :current-layout="currentLayout"
        :show-variants="showVariants"
        :data="data"
        :displayed-data="displayedData"
        @modules="(ship) => (currentShip = ship)"
      />
    </div>

    <div v-else class="mt-4 flex w-full flex-wrap items-stretch justify-center gap-3">
      <div v-for="i in 5" :key="i" class="fo-skeleton fo-skeleton-animated h-56 w-full grow rounded-2xl bg-neutral-100 p-6 transition duration-500 dark:bg-neutral-900"></div>
    </div>

    <Transition name="menu">
      <div v-if="currentShip" class="fixed left-0 top-0 z-20 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" @click="currentShip = undefined">
        <BlueprintsModules :ship="currentShip" :owner="isOwner" @done="currentShip = undefined" @change="userStore.hasUnsavedChanges = true" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const lastSaved = ref("");
const data = ref<BlueprintAllShip[]>();

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const accountIndex = ref(0);

watch(
  data,
  (val) => {
    if (val && userStore.user?.uid === route.query.u) userStore.blueprintsAutosave = val;
  },
  { deep: true }
);

onBeforeMount(() => {
  const accountQuery = Number(route.query.a);
  accountIndex.value = accountQuery < 10 ? accountQuery : 0;
});

onMounted(() => (data.value = userStore.blueprintsAutosave));

const isOwner = computed(() => {
  if (!userStore.shipData) return;
  if (!route.query.u && userStore.user) {
    void router.replace({ query: { ...route.query, u: userStore.user.uid } });
    return true;
  }
  if (!route.query.a) {
    void router.replace({ query: { ...route.query, a: 0 } });
    return true;
  }

  return route.query.u === userStore.user?.uid;
});

useSeoMeta({
  title: () => `${isOwner.value ? "Your" : "Someone's"} Blueprint Tracker | Gravity Assist`,
  ogTitle: "Blueprint Tracker",
  description:
    "Easily track your blueprint collection and share it with others! View your collection, add new blueprints, and save your changes. Never open Excel ever again to share your blueprints with others!",
  ogDescription:
    "Easily track your blueprint collection and share it with others! View your collection, add new blueprints, and save your changes. Never open Excel ever again to share your blueprints with others!",
  twitterDescription:
    "Easily track your blueprint collection and share it with others! View your collection, add new blueprints, and save your changes. Never open Excel ever again to share your blueprints with others!"
});

const shipTypes = ["Fighter", "Corvette", "Frigate", "Destroyer", "Cruiser", "Battlecruiser", "Auxiliary Ship", "Carrier", "Battleship"];

const isListLayout = ref(false);
watch(isListLayout, (val) => localStorage.setItem("layout", val ? "list" : "grid"));

const currentLayout = computed(() => (isListLayout.value ? "list" : "grid"));
const showVariants = ref(false);
watch(showVariants, (val) => localStorage.setItem("variants", JSON.stringify(val)));

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

async function getAccount(data: AllShip[]): Promise<BlueprintAllShip[] | undefined> {
  // prettier-ignore
  const { success, error, content, lastSaved: bpLastSaved } = 
  await $fetch("/api/getBlueprints", { method: "POST", body: { uid: route.query.u ?? userStore.user?.uid, accountIndex: accountIndex.value } });

  if (!success && error) {
    console.error(error);
    if (route.query.a !== "0") {
      await router.replace({ query: { ...route.query, a: 0 } });
      return getAccount(data);
    }
  }

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

      if ("modules" in ship) result.modules = ship.modules.map((module) => ({ ...module, unlocked: Boolean(ownedBlueprint?.slice(3).includes(module.system)) }));

      return result as BlueprintAllShip;
    });
  }
}

function createAccount(data: AllShip[]): BlueprintAllShip[] {
  if (!userStore.user || userStore.user.blueprints.some((account) => getObjectKey(account) === "Unnamed" && getObjectValue(account).length === 0))
    throw new Error("Cannot have more than 1 unsaved account.");

  userStore.user.blueprints.push({ Unnamed: [] });

  lastSaved.value = new Date().toISOString().slice(0, 10);
  userStore.createNewAccount = false;
  userStore.isUnsavedAccount = true;
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

async function getBlueprints(data: AllShip[]): Promise<BlueprintAllShip[]> {
  if (route.query.u === undefined && !userStore.user)
    return await waitUntil(
      () => Boolean(route.query.u ?? userStore.user),
      () => getBlueprints(data),
      new Promise((resolve) => resolve([])),
      2000
    );

  if (!userStore.createNewAccount) {
    const account = await getAccount(data);
    if (account) return account;
  }

  return createAccount(data);
}

watch(
  () => route.query,
  async (val) => {
    if (!userStore.shipData || !userStore.user || !val.u || !val.a) return;

    const account = Number(val.a);
    if (userStore.user.uid === val.u && accountIndex.value === account) return (data.value = userStore.blueprintsAutosave ?? (await getBlueprints(userStore.shipData)));

    accountIndex.value = account;
    data.value = await getBlueprints(userStore.shipData);
  }
);

watch(isOwner, async (val) => {
  if (!userStore.shipData) return;

  if (val) return (data.value = userStore.blueprintsAutosave ?? (await getBlueprints(userStore.shipData)));
  data.value = await getBlueprints(userStore.shipData);
});

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
