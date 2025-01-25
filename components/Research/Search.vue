<template>
  <Transition name="menu">
    <div v-show="isSearching" class="mobile-search fixed left-0 top-0 z-20 h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" @click="isSearching = false">
      <ResearchMobileSearch
        :recently-searched="recentlySearched"
        :filtered-data="filteredData"
        @search="(term) => (search = term)"
        @select="(ship) => selectShip(ship)"
        @focus-button="(index) => (focusedButton = index)"
      />
    </div>
  </Transition>

  <div class="w-[90vw] rounded-xl bg-neutral-100/50 p-4 transition duration-500 sm:w-96 dark:bg-neutral-900">
    <div v-if="ships" class="group relative flex w-full flex-col items-start justify-start rounded-xl" @click="isSearching = true">
      <div class="fo-input-group relative z-[2] flex grow rounded-xl border-neutral-300 bg-white transition duration-500 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
        <span class="fo-input-group-text">
          <img class="size-5 transition duration-500 dark:invert" src="/ui/search.svg" aria-hidden="true" />
        </span>
        <div class="fake-search-input fo-input grow content-center rounded-e-xl transition duration-500">
          <p class="text-left text-neutral-700/50 transition duration-500 dark:text-neutral-300">Search</p>
        </div>
        <input
          v-model="search"
          type="text"
          class="search-input fo-input grow rounded-e-xl text-left text-black transition duration-500 placeholder:transition placeholder:duration-500 dark:text-white dark:placeholder:text-neutral-300"
          placeholder="Search"
          @focus="focusedButton = -1"
        />
        <div class="du-tooltip fo-input-group-text p-0" data-tip="Clear" :class="search ? 'visible' : 'invisible'">
          <button tabindex="-1" class="fo-btn fo-btn-circle fo-btn-text rounded-xl" type="button" @click="search = ''">
            <img class="size-5 dark:invert" src="/ui/close.svg" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        class="absolute top-5 z-[1] hidden h-fit w-full flex-col items-start justify-center gap-1 rounded-b-xl border-2 border-neutral-200 bg-white px-3 pb-2 pt-7 shadow-md group-focus-within:flex dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div v-if="!search && recentlySearched.length > 0" class="flex w-full flex-col items-start justify-center gap-1">
          <p class="mb-2 px-3">Recently searched</p>
          <div class="flex w-full flex-col items-start justify-center gap-1" role="listbox">
            <button
              v-for="(ship, index) in recentlySearched.slice(0, 4)"
              :key="index"
              ref="searchButton"
              type="button"
              class="flex w-full items-center justify-start gap-3 rounded-xl px-3 py-0.5 hover:bg-neutral-100/50 focus:bg-neutral-100/50"
              :data-ship-name="ship.name"
              :data-ship-variant="ship.variant"
              @click="selectShip(ship)"
              @focus="focusedButton = index"
            >
              <img class="w-16" :src="ship.img" :alt="ship.name" />
              <p>
                {{ ship.name }} <span v-if="ship.hasVariants">({{ ship.variant }})</span>
              </p>
            </button>
          </div>
        </div>

        <div v-else class="flex w-full flex-col items-start justify-center gap-1">
          <p v-if="filteredData.length === 0" class="px-3 text-sm italic text-neutral-700/75 dark:text-neutral-300">No results. Maybe search for something else?</p>
          <button
            v-for="(ship, index) in filteredData.slice(0, 4)"
            v-else
            ref="searchButton"
            type="button"
            class="flex w-full items-center justify-start gap-3 rounded-xl px-3 py-0.5 hover:bg-neutral-100/50 focus:bg-neutral-100/50"
            :data-ship-name="ship.name"
            :data-ship-variant="ship.variant"
            @click="selectShip(ship)"
            @focus="focusedButton = index"
          >
            <img class="w-16" :src="ship.img" :alt="ship.name" />
            <p>
              {{ ship.name }} <span v-if="ship.hasVariants">({{ ship.variant }})</span>
            </p>
          </button>
          <p v-if="filteredData.length > 4" class="mt-2 px-3 text-sm italic text-neutral-700/75 dark:text-neutral-300">...and {{ filteredData.length - 4 }} more</p>
        </div>
      </div>
    </div>

    <div v-else class="fo-skeleton fo-skeleton-animated h-10 w-full justify-start rounded-xl transition duration-500"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ ships: AllShip[] | undefined }>();
const emit = defineEmits<{ select: [AllShip] }>();

const isSearching = ref(false);
const searchButtons = useTemplateRef("searchButton");
const focusedButton = ref(-1);
const search = ref("");

const filteredData = computed(() => {
  if (!props.ships || !search.value) return [];

  const searchTerm = search.value.toLowerCase();
  return props.ships.filter((ship) => ship.name.toLowerCase().includes(searchTerm) || ship.variantName.toLowerCase().includes(searchTerm));
});

/** @example ["shipName", "shipVariant"] */
const recentlySearchedData = ref<[string, string][]>([]);
const recentlySearched = computed(() => recentlySearchedData.value.map(([name, variant]) => findShip(props.ships, undefined, name, variant)).filter((ship) => ship !== undefined));

onMounted(() => {
  try {
    const searches = localStorage.getItem("searches");
    if (searches) {
      const parsedSearches = JSON.parse(searches) as [string, string][];
      if (!Array.isArray(parsedSearches)) throw new Error(`Array expected, received ${typeof parsedSearches}.`);
      if (!parsedSearches.every((item) => Array.isArray(item) && item.length === 2 && typeof item[0] === "string" && typeof item[1] === "string")) throw new Error("Invalid array elements.");

      recentlySearchedData.value = parsedSearches.slice(0, 4);
    }
  } catch (error) {
    console.group();
    console.warn("Failed to load recent searches. Please refrain from touching localStorage :)");
    console.error(error);
    console.groupEnd();
  }
});

function arrowKeys(event: KeyboardEvent) {
  if (!searchButtons.value) return;
  const buttons = searchButtons.value;

  if (event.key === "ArrowUp") {
    event.preventDefault();
    focusedButton.value--;
    if (focusedButton.value <= -1) return (focusedButton.value = 0);

    buttons[focusedButton.value].focus();
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    focusedButton.value++;
    if (focusedButton.value > buttons.length - 1) return (focusedButton.value = buttons.length - 1);

    buttons[focusedButton.value].focus();
  }
}
onMounted(() => document.addEventListener("keydown", arrowKeys));
onBeforeUnmount(() => document.removeEventListener("keydown", arrowKeys));

function selectShip(ship: AllShip) {
  const shipInRecents = recentlySearchedData.value.findIndex((item) => item[0] === ship.name && item[1] === ship.variant);
  if (shipInRecents !== -1) recentlySearchedData.value.splice(shipInRecents, 1);
  else if (recentlySearchedData.value.length >= 4) recentlySearchedData.value.pop();

  recentlySearchedData.value.unshift([ship.name, ship.variant]);
  localStorage.setItem("searches", JSON.stringify(recentlySearchedData.value));

  search.value = "";
  isSearching.value = false;
  searchButtons.value?.find((button) => ship.name === button.getAttribute("data-ship-name") && ship.variant === button.getAttribute("data-ship-variant"))?.blur();
  emit("select", ship);
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

.mobile-search {
  @apply hidden;
}
.search-input {
  @apply block;
}
.fake-search-input {
  @apply hidden;
}

@media (hover: none) and (pointer: coarse) {
  .mobile-search {
    @apply flex;
  }
  .search-input {
    @apply hidden;
  }
  .fake-search-input {
    @apply block;
  }
}
</style>
