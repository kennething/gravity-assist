<template>
  <div class="flex w-full flex-col items-center justify-center" v-if="displayedData && displayedData.filter((ship) => ship.type === type).length > 0">
    <h2 class="mt-4 text-2xl font-bold transition duration-500">{{ type }}s</h2>
    <p class="transition duration-500">{{ displayedData.filter((ship) => ship.type === type && ship.unlocked).length }}/{{ displayedData.filter((ship) => ship.type === type).length }} unlocked</p>
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
        @modules="(ship) => emit('modules', ship)"
        @change="userStore.hasUnsavedChanges = true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string;
  isOwner: boolean | undefined;
  currentLayout: "list" | "grid";
  showVariants: boolean;
  data: BlueprintAllShip[] | undefined;
  displayedData: BlueprintAllShip[] | undefined;
}>();
const emit = defineEmits<{
  modules: [BlueprintSuperCapitalShip];
}>();

const userStore = useUserStore();

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

<style scoped></style>
