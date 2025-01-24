<template>
  <div class="mt-2 flex w-full flex-col items-center justify-center gap-2">
    <div class="flex w-full items-center justify-around">
      <div class="flex flex-col items-center justify-center px-10">
        <ClientOnly>
          <p class="text-lg">
            <span class="font-medium">{{ mod.stats.hp.toLocaleString() }}</span> System HP
          </p>
        </ClientOnly>
        <div class="du-label flex w-full select-auto items-center justify-start gap-2">
          <span class="text-left transition duration-500">{{ mod.default ? "Default module" : "Not a default module" }}</span>
          <input
            type="checkbox"
            class="du-checkbox disabled:cursor-auto disabled:border disabled:opacity-100"
            style="background-size: cover"
            :style="{ backgroundColor: mod.default ? 'inherit' : '' }"
            :checked="mod.default"
            :indeterminate="!mod.default"
            disabled
          />
        </div>
      </div>

      <div class="flex grow items-center justify-center gap-2 pr-10">
        <div class="flex grow flex-col items-center justify-center" v-for="(stat, name) in stats">
          <div class="relative h-40 w-6 overflow-hidden rounded-full bg-neutral-300">
            <aside class="absolute bottom-0 left-0 w-full rounded-t-lg bg-neutral-500 transition-all duration-1000" :style="{ height: calculateBarFill(stat) + '%' }"></aside>
          </div>
          <p class="mt-2 text-sm">{{ statNames[name] }}</p>
          <ClientOnly>
            <h5 class="inline-flex items-center justify-center gap-1 font-semibold">
              {{ ((stat as string)?.toLocaleString() ?? 0) + (name === "energyShield" ? "%" : "") }}
              <img class="size-4 invert dark:invert-0" :src="`/weapons/stats/${name}.svg`" aria-hidden="true" />
            </h5>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  mod: WeaponModule | PropulsionModule | MiscModule;
}>();

const stats = computed(() => {
  const { type, hp, ...otherStats } = props.mod.stats;
  return otherStats;
});

const statNames = {
  antiship: "Anti-Ship",
  antiair: "Anti-Air",
  siege: "Siege",
  extraHP: "HP",
  armor: "Armor",
  energyShield: "Energy Shield",
  hpRecovery: "Repair",
  storage: "Storage"
} as const;

/** @returns a percentage from 0 to 100 */
function calculateBarFill(value: number) {
  /** [`upperBound`, `returnValue`]
   *
   * If `value` <= `upperBound`, return `returnValue`
   */
  const thresholds = [
    [900, 1000],
    [2300, 2500],
    [4500, 5000],
    [9000, 10000],
    [14000, 15000],
    [21500, 22500],
    [28000, 30000],
    [47000, 50000],
    [96000, 100000],
    [190000, 200000]
  ];

  const limit = thresholds.find(([threshold]) => value <= threshold)?.[1] ?? 400000;

  return Math.min(1, Math.max(0, value / limit)) * 100;
}
</script>

<style scoped></style>
