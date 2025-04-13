<template>
  <div v-if="data && displayedData && displayedData.filter((ship) => ship.type === shipType).length > 0" class="flex w-full flex-col items-center justify-center">
    <Teleport to="body">
      <Transition name="menu">
        <div v-if="showTPModal && isOwner" class="fixed left-0 top-0 z-20 flex h-dvh w-dvw items-center justify-center bg-black/50" @click="showTPModal = false">
          <div id="menu" class="flex flex-col items-center justify-center gap-6 rounded-xl bg-body px-20 py-7" @click.stop>
            <h2 class="text-xl font-medium">
              How many unassigned <span class="text-2xl font-bold">{{ shipType }}</span> Tech Points do you have?
            </h2>
            <div class="fo-input-group max-w-sm">
              <label class="fo-input-group-text" :for="'unassignedTechPoints' + shipType">TP</label>
              <div class="relative grow">
                <input
                  :id="'unassignedTechPoints' + shipType"
                  v-model.number="unassignedTp"
                  type="number"
                  class="peer fo-input grow border-neutral-300 bg-white text-left text-black hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600"
                  placeholder="Tech Points"
                />
              </div>
            </div>
            <button
              class="du-btn flex h-9 min-h-9 items-center justify-center gap-2 rounded-full border-green-300 bg-green-100 py-2 transition duration-500 hover:scale-105 hover:border-green-400 hover:bg-green-200 dark:border-green-500 dark:bg-green-800 dark:text-white dark:hover:bg-green-700"
              type="button"
              @click="showTPModal = false"
            >
              Done
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>

    <div class="mt-4 flex items-center justify-center gap-2">
      <h3 class="text-2xl font-bold transition duration-500">{{ shipType }}s</h3>
      <ClientOnly>
        <button
          class="du-tooltip z-[1] translate-y-0.5"
          :class="{ 'unassigned-tp-hover cursor-help': !isOwner }"
          :data-tip="`${unassignedTp?.toLocaleString()} unassigned ${shipType} Tech Points`"
          type="button"
          :disabled="!isOwner"
          @click="showTPModal = true"
        >
          <img
            class="size-7 transition duration-500 dark:invert"
            :src="isOwner ? '/ui/plusCircle.svg' : `/ships/classes/${shipType.toLowerCase()}.svg`"
            :alt="isOwner ? `Declare unassigned ${shipType} Tech Points` : ''"
          />
        </button>
      </ClientOnly>
    </div>
    <p class="transition duration-500">{{ data.filter((ship) => ship.type === shipType && ship.unlocked).length }}/{{ data.filter((ship) => ship.type === shipType).length }} unlocked</p>
    <ClientOnly>
      <p class="unassigned-tp-nohover hidden transition duration-500">{{ unassignedTp?.toLocaleString() }} unassigned TP</p>
      <p class="mb-4 transition duration-500">
        {{ (getTotalTP(displayedData.filter((ship) => ship.type === shipType)) + (unassignedTp ?? 0)).toLocaleString() }}
        total Tech Points
      </p>
    </ClientOnly>
    <div class="flex flex-wrap items-stretch justify-center gap-3">
      <LazyBlueprintsCard
        v-for="ship in displayedData.filter((ship) => ship.type === shipType)"
        :key="ship.id"
        :ship="ship"
        :mirror="ship.mirrorTechPoints"
        :layout="currentLayout"
        :variants="showVariants"
        :all-variants="displayedData.filter((s) => ship.name === s.name)"
        :tp="ship.techPoints"
        :owner="isOwner"
        @tp="(tp) => handleTp(ship, tp)"
        @mirror="toggleMirror(ship)"
        @modules="(ship) => emit('modules', ship)"
        @change="userStore.hasUnsavedChanges = true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  shipType: string;
  isOwner: boolean | undefined;
  currentLayout: "list" | "grid";
  showVariants: boolean;
  data: BlueprintAllShip[] | undefined;
  displayedData: BlueprintAllShip[] | undefined;
}>();
const emit = defineEmits<{ modules: [BlueprintSuperCapitalShip] }>();

const userStore = useUserStore();

const unassignedTp = defineModel<number>();
const showTPModal = ref(false);

function handleTp(targetShip: BlueprintAllShip, tp: number) {
  if (!props.data) return;
  userStore.hasUnsavedChanges = true;

  targetShip.techPoints = tp;
  if (!targetShip.hasVariants || !targetShip.mirrorTechPoints) return;

  const mirrorShips = props.data.filter((ship) => ship.name === targetShip.name && ship.variant !== targetShip.variant);

  for (const ship of mirrorShips) {
    ship.techPoints = tp;
  }
}

function toggleMirror(targetShip: BlueprintAllShip) {
  if (!targetShip.hasVariants || !props.data) return;
  userStore.hasUnsavedChanges = true;

  const newValue = !targetShip.mirrorTechPoints;
  targetShip.mirrorTechPoints = newValue;
  const mirrorShips = props.data.filter((ship) => ship.name === targetShip.name && ship.variant !== targetShip.variant);

  for (const ship of mirrorShips) {
    ship.mirrorTechPoints = newValue;
  }
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
</script>

<style scoped>
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

@media (hover: none) and (pointer: coarse) {
  .unassigned-tp-hover {
    @apply hidden;
  }
  .unassigned-tp-nohover {
    @apply block;
  }
}
</style>
