<template>
  <div class="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start p-8">
    <div class="flex w-full flex-col items-center justify-center md:w-[25rem] lg:w-[30rem]">
      <h1 class="text-3xl font-bold transition duration-500">Research Agreement Helper</h1>
      <div class="fo-divider my-2 before:transition before:duration-500 after:transition after:duration-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        <span class="flex items-center justify-center"><img class="size-12 transition duration-500 dark:invert" src="/ui/researchAgreement.svg" aria-hidden="true" /></span>
      </div>
    </div>

    <div class="mt-4 flex w-full items-start justify-center gap-10">
      <div class="flex flex-col items-center justify-center gap-4">
        <ResearchPathBrowser :manufacturer="selectedManufacturer" :direction="selectedDirection" :scope="selectedScope" @change="(type, next) => handleOptionChange(type, next)" />
      </div>
      <div class="flex flex-col items-center justify-center gap-2">
        <ResearchSelection :ships="filteredData" :selected="selectedShip" @select="(ship) => (selectedShip = ship)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedManufacturer = ref(0);
const selectedDirection = ref(0);
const selectedScope = ref(0);

useSeoMeta({
  title: () =>
    `${manufacturers[selectedManufacturer.value].split(" ")[0]}/${directions[selectedDirection.value].split(" ")[0]}/${scopes[selectedScope.value].split(" ")[0]} - RA Helper | Gravity Assist`,
  ogTitle: "Research Agreement Helper - Gravity Assist",
  description: "A tool to help you find the best ship for your research agreement.",
  ogDescription: "A tool to help you find the best ship for your research agreement."
});

const route = useRoute();
const router = useRouter();

const userStore = useUserStore();
const data = computed(() => userStore.shipData);
const filteredData = computed(() => filterResults(data.value));

const selectedShip = ref<AllShip>();

function handleOptionChange(type: "manufacturer" | "direction" | "scope", next: number) {
  const options: Record<string, Ref<number>> = {
    manufacturer: selectedManufacturer,
    direction: selectedDirection,
    scope: selectedScope
  };
  options[type].value = next;
}

function filterResults(ships: AllShip[] | undefined) {
  if (!ships) return [];

  const manufacturer = manufacturers[selectedManufacturer.value];
  const direction = directions[selectedDirection.value];
  const scope = scopes[selectedScope.value];

  return ships.filter((ship) => {
    const manufacturerCheck = manufacturer === "Empty" ? true : ship.manufacturer === manufacturer;
    const directionCheck = direction === "Empty" ? true : ship.direction.includes(direction);
    const scopeCheck = scope === "Empty" ? true : ship.scope === scope;

    return manufacturerCheck && directionCheck && scopeCheck;
  });
}
</script>

<style scoped></style>
