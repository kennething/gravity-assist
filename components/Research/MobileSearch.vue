<template>
  <div class="flex flex-col items-center justify-center">
    <div id="menu" class="flex w-[80vw] flex-col items-start justify-center gap-2 rounded-2xl bg-white p-4 md:w-[40rem] md:p-10 lg:w-[50rem] xl:w-[60rem] dark:bg-neutral-800" @click.stop>
      <h2 class="text-2xl font-bold">Search</h2>
      <div class="fo-input-group relative z-[2] flex grow rounded-xl border-neutral-300 bg-white transition duration-500 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
        <span class="fo-input-group-text">
          <img class="size-5 select-none transition duration-500 dark:invert" src="/ui/search.svg" aria-hidden="true" />
        </span>
        <input
          v-model="search"
          type="text"
          class="fo-input grow rounded-e-xl text-left text-black transition duration-500 placeholder:transition placeholder:duration-500 dark:text-white dark:placeholder:text-neutral-300"
          placeholder="Search"
        />
        <div class="du-tooltip fo-input-group-text p-0" data-tip="Clear" :class="search ? 'visible' : 'invisible'">
          <button tabindex="-1" class="fo-btn fo-btn-circle fo-btn-text rounded-xl" type="button" @click="search = ''">
            <img class="size-5 select-none dark:invert" src="/ui/close.svg" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div class="h-[20rem] w-full overflow-y-scroll p-1">
        <div v-if="!search && recentlySearched.length > 0" class="flex w-full flex-col items-start justify-center gap-1">
          <p class="mb-2">Recently searched</p>
          <div class="flex w-full flex-col items-start justify-center gap-1" role="listbox">
            <button
              v-for="(ship, index) in recentlySearched.slice(0, 4)"
              type="button"
              class="flex w-full items-center justify-start gap-3 rounded-xl py-0.5 hover:bg-neutral-100/50 focus:bg-neutral-100/50"
              :data-ship-name="ship.name"
              :data-ship-variant="ship.variant"
              @click="selectShip(ship)"
              @focus="emit('focusButton', index)"
            >
              <img class="w-16" :src="ship.img" :alt="ship.name" />
              <p class="text-left">
                {{ ship.name }} <span v-if="ship.hasVariants">({{ ship.variant }})</span>
              </p>
            </button>
          </div>
        </div>

        <div v-else class="flex w-full flex-col items-start justify-center gap-1">
          <p v-if="filteredData.length === 0" class="text-sm italic text-neutral-700/75 dark:text-neutral-300">No results. Maybe search for something else?</p>
          <button
            v-else
            v-for="(ship, index) in filteredData.slice(0, 4)"
            type="button"
            class="flex w-full items-center justify-start gap-3 rounded-xl py-0.5 hover:bg-neutral-100/50 focus:bg-neutral-100/50"
            :data-ship-name="ship.name"
            :data-ship-variant="ship.variant"
            @click="selectShip(ship)"
            @focus="emit('focusButton', index)"
          >
            <img class="w-16" :src="ship.img" :alt="ship.name" />
            <p class="text-left">
              {{ ship.name }} <span v-if="ship.hasVariants">({{ ship.variant }})</span>
            </p>
          </button>
          <p v-if="filteredData.length > 4" class="mt-2 text-sm italic text-neutral-700/75 dark:text-neutral-300">...and {{ filteredData.length - 4 }} more</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  recentlySearched: AllShip[];
  filteredData: AllShip[];
}>();
const emit = defineEmits<{
  search: [string];
  select: [AllShip];
  focusButton: [number];
}>();

const search = ref("");
watch(search, (value) => emit("search", value));

function selectShip(ship: AllShip) {
  search.value = "";
  emit("select", ship);
}
</script>

<style scoped></style>
