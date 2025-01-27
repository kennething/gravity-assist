<template>
  <div class="flex h-full min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-start p-8">
    <div class="flex w-full flex-col items-center justify-center md:w-[25rem] lg:w-[30rem]">
      <h1 class="text-3xl font-bold transition duration-500">Research Agreement Helper</h1>
      <div class="fo-divider my-2 before:transition before:duration-500 after:transition after:duration-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        <span class="flex items-center justify-center"><img class="size-12 transition duration-500 dark:invert" src="/ui/researchAgreement.svg" aria-hidden="true" /></span>
      </div>
    </div>

    <div class="mt-4 flex w-full flex-col items-center justify-center gap-10 xl:flex-row xl:items-start">
      <div class="static top-20 flex flex-col items-center justify-center gap-4 xl:sticky">
        <ResearchSearch :ships="data" @select="(ship) => selectShip(ship, true)" />
        <ResearchPathBrowser :manufacturer="selectedManufacturer" :direction="selectedDirection" :scope="selectedScope" @change="(type, next) => handleOptionChange(type, next)" />
        <ResearchSelected
          :manufacturer="selectedManufacturerValue"
          :direction="selectedDirectionValue"
          :scope="selectedScopeValue"
          :raw-data="data"
          :ship="selectedShip"
          :chance="selectedShipChance"
          @best-path="(ship) => selectShip(ship, true)"
        />
      </div>
      <div class="flex flex-col items-center justify-center gap-2">
        <ResearchSelection
          :manufacturer="selectedManufacturerValue"
          :direction="selectedDirectionValue"
          :scope="selectedScopeValue"
          :raw-data="data"
          :ships="filteredData"
          :selected="selectedShip"
          @select="(ship) => selectShip(ship)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedManufacturer = ref(0);
const selectedManufacturerValue = computed(() => manufacturers[selectedManufacturer.value]);
const selectedDirection = ref(0);
const selectedDirectionValue = computed(() => directions[selectedDirection.value]);
const selectedScope = ref(0);
const selectedScopeValue = computed(() => scopes[selectedScope.value]);

const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();

useSeoMeta({
  title: () =>
    `${manufacturers[selectedManufacturer.value].split(" ")[0]}/${directions[selectedDirection.value].split(" ")[0]}/${scopes[selectedScope.value].split(" ")[0]} - RA Helper | Gravity Assist`,
  ogTitle: () =>
    `Research Agreement Helper - ${route.query.shn && route.query.shv ? `${route.query.shn} (${route.query.shv})` : `${manufacturers[Number(route.query.m)].split(" ")[0]}/${directions[Number(route.query.d)].split(" ")[0]}/${scopes[Number(route.query.s)].split(" ")[0]}`}`,

  description:
    "The best Research Agreement tool on the market! Browse through any category and find the ship that best fits your needs. Or, search for a specific ship by name and we'll find the path that gives you the best chance to find it!",
  ogDescription:
    "The best Research Agreement tool on the market! Browse through any category and find the ship that best fits your needs. Or, search for a specific ship by name and we'll find the path that gives you the best chance to find it!",
  twitterDescription:
    "The best Research Agreement tool on the market! Browse through any category and find the ship that best fits your needs. Or, search for a specific ship by name and we'll find the path that gives you the best chance to find it!",
  twitterImage: () =>
    config.public.baseUrl +
    (route.query.shn && route.query.shv
      ? `/ships/${(route.query.shn as string).toLowerCase().replaceAll("-", "").replaceAll("'", "").replaceAll(".", "").split(" ").join("_")}_${(route.query.shv as string).toLowerCase()}.png`
      : "/ships/solar_whale.png")
});

const selectedShip = ref<AllShip>();

const userStore = useUserStore();
const data = computed(() => {
  const shipData = userStore.shipData;
  if (!shipData) return;

  const shipName = route.query.shn as string;
  const shipVariant = route.query.shv as string;
  if (shipName && shipVariant) selectedShip.value = findShip(shipData, undefined, shipName, shipVariant);
  else {
    const autosave = localStorage.getItem("rahelper");
    if (autosave) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [x, y, z, name, variant] = JSON.parse(autosave) as [number, number, number, string | null, string | null];
      if (name && variant) selectedShip.value = findShip(shipData, undefined, name, variant);
    }
  }
  return shipData.filter((ship) => ship.weight);
});
const filteredData = computed(() => {
  if (!data.value) return [];

  const manufacturer = selectedManufacturerValue.value;
  const direction = selectedDirectionValue.value;
  const scope = selectedScopeValue.value;

  return data.value.filter((ship) => {
    const manufacturerCheck = manufacturer === "Empty" ? true : ship.manufacturer === manufacturer;
    const directionCheck = direction === "Empty" ? true : ship.direction.includes(direction);
    const scopeCheck = scope === "Empty" ? true : ship.scope === scope;

    return manufacturerCheck && directionCheck && scopeCheck;
  });
});

const selectedShipChance = computed(() => {
  if (!selectedShip.value) return 0;
  if (!findShip(filteredData.value, selectedShip.value)) return -1;
  return ((selectedShip.value?.weight ?? 0) / filteredData.value.reduce((total, ship) => total + ship.weight, 0)) * 100;
});

let isReplacing = false;
function selectShip(ship: AllShip | undefined, setPath = false, manualData?: AllShip[]) {
  if (!data.value && !manualData) return;

  selectedShip.value = ship;

  if (setPath && ship) {
    selectedManufacturer.value = manufacturers.indexOf(ship.manufacturer);
    selectedDirection.value = directions.indexOf(findBestDirection(data.value ?? manualData ?? [], ship));
    selectedScope.value = scopes.indexOf(ship.scope);
  }

  localStorage.setItem("rahelper", JSON.stringify([selectedManufacturer.value, selectedDirection.value, selectedScope.value, selectedShip.value?.name, selectedShip.value?.variant]));

  if (isReplacing)
    return void router.replace({ query: { m: selectedManufacturer.value, d: selectedDirection.value, s: selectedScope.value, shn: selectedShip.value?.name, shv: selectedShip.value?.variant } });
  void router.push({ query: { m: selectedManufacturer.value, d: selectedDirection.value, s: selectedScope.value, shn: selectedShip.value?.name, shv: selectedShip.value?.variant } });
}

function handleQueries() {
  const manufacturer = Number(route.query.m);
  const direction = Number(route.query.d);
  const scope = Number(route.query.s);
  const shipName = route.query.shn as string;
  const shipVariant = route.query.shv as string;

  if (Number.isNaN(manufacturer) && Number.isNaN(direction) && Number.isNaN(scope) && !shipName && !shipVariant) return false;
  if ((shipName && !shipVariant) || (!shipName && shipVariant)) return false;

  if (manufacturer) selectedManufacturer.value = manufacturer;
  if (direction) selectedDirection.value = direction;
  if (scope) selectedScope.value = scope;

  if (Number.isNaN(manufacturer) && Number.isNaN(direction) && Number.isNaN(scope) && shipName && shipVariant) selectShip(findShip(data.value, undefined, shipName, shipVariant), true);

  return true;
}

watch(
  () => route.query,
  () => {
    const shipName = route.query.shn as string;
    const shipVariant = route.query.shv as string;
    if (shipName && shipVariant) selectedShip.value = findShip(data.value, undefined, shipName, shipVariant);
    handleQueries();
  }
);

onMounted(() => {
  isReplacing = true;
  if (handleQueries()) return;
  const autosave = localStorage.getItem("rahelper");
  if (autosave) {
    const [manufacturer, direction, scope] = JSON.parse(autosave) as [number, number, number, string | null, string | null];
    if (manufacturer >= 0 && manufacturer < manufacturers.length) selectedManufacturer.value = manufacturer;
    if (direction >= 0 && direction < directions.length) selectedDirection.value = direction;
    if (scope >= 0 && scope < scopes.length) selectedScope.value = scope;
  }
  isReplacing = false;
});

function handleOptionChange(type: "manufacturer" | "direction" | "scope", next: number) {
  const options: Record<string, Ref<number>> = {
    manufacturer: selectedManufacturer,
    direction: selectedDirection,
    scope: selectedScope
  };
  options[type].value = next;
  localStorage.setItem("rahelper", JSON.stringify([selectedManufacturer.value, selectedDirection.value, selectedScope.value, selectedShip.value?.name, selectedShip.value?.variant]));
  void router.push({ query: { m: selectedManufacturer.value, d: selectedDirection.value, s: selectedScope.value, shn: selectedShip.value?.name, shv: selectedShip.value?.variant } });
}
</script>

<style scoped></style>
