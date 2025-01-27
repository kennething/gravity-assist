<template>
  <div class="flex flex-col items-stretch justify-between rounded-xl bg-neutral-100/25 p-4 transition duration-500 xl:flex-row dark:bg-neutral-900" :class="priority ? 'w-full' : 'grow'">
    <div class="flex w-full flex-col items-start justify-start" :class="{ 'xl:w-[45%]': priority }">
      <p class="text-left text-neutral-800 transition duration-500 dark:text-neutral-300">{{ subsystem.name }}</p>
      <h5 class="text-lg font-medium transition duration-500">
        <span class="text-sm font-normal text-yellow-600 transition duration-500 dark:text-yellow-400">x{{ subsystem.count }}</span>
        {{ subsystem.title }}
      </h5>

      <h4 v-if="priority && priority[0][0]" class="mt-2 inline-flex items-center justify-center gap-1">
        <img class="size-4 transition duration-500 dark:invert" :src="`/weapons/stats/${priority[0][0]}.svg`" aria-hidden="true" />
        <ClientOnly>
          <span>
            <span class="text-lg font-medium text-yellow-600 transition duration-500 dark:text-yellow-400">{{ priority[0][2]?.toLocaleString() }}</span>
            <span class="text-sm text-yellow-600 transition duration-500 dark:text-yellow-400">/min</span>
            <span class="ms-1 text-sm transition duration-500">({{ categoryNames[priority[0][0]] }})</span>
          </span>
        </ClientOnly>
      </h4>

      <div class="mt-3 flex w-full flex-col items-center justify-center gap-1">
        <div v-for="(property, name) in properties" class="flex w-full items-center justify-between">
          <h5 class="inline-flex items-center justify-center gap-1 text-left font-medium transition duration-500">
            <img class="size-6 transition duration-500 dark:invert" :src="`/weapons/types/${propertyNames[name][1]}.svg`" aria-hidden="true" />
            {{ propertyNames[name][0] }}
          </h5>
          <ClientOnly>
            <p class="text-right transition duration-500">{{ ((property ?? 0) as number).toLocaleString() + (name === "lockonEfficiency" ? "%" : "") }}</p>
          </ClientOnly>
        </div>
      </div>

      <div v-if="stats" class="mt-3 flex w-full flex-col items-center justify-center gap-1">
        <div v-for="(property, name) in stats" class="flex w-full items-center justify-between">
          <h5 class="inline-flex items-center justify-center gap-1 text-left font-medium transition duration-500">
            <img class="size-6 transition duration-500 dark:invert" :src="`/weapons/types/${propertyNames[name][1]}.svg`" aria-hidden="true" />
            {{ propertyNames[name][0] }}
          </h5>
          <p v-if="Array.isArray(property)" class="text-right transition duration-500">{{ property[0] }} x {{ property[1] }}</p>
          <p v-else class="text-right transition duration-500">{{ (property ?? 0) + ((name as string) === "damageFrequency" ? " time(s)" : "s") }}</p>
        </div>
      </div>

      <div v-if="subsystem.attributes" class="mt-4 flex w-full flex-col items-start justify-center gap-1">
        <h4 class="text-lg font-medium transition duration-500">Attributes</h4>
        <div v-for="attribute in subsystem.attributes" class="tooltip-container flex items-start justify-center gap-1">
          <p class="transition duration-500">{{ attribute }}</p>
          <span class="tooltip-nohover text-left text-xs text-neutral-800 transition duration-500 dark:text-neutral-300">{{ attributes[attribute] }}</span>
          <div class="tooltip du-tooltip cursor-help" :data-tip="attributes[attribute]">
            <img class="size-4 transition duration-500 dark:invert" src="/ui/info.svg" alt="Hover for attribute description" />
          </div>
        </div>
      </div>
    </div>

    <aside v-if="priority" class="my-3 min-h-1.5 w-full rounded-full bg-neutral-100 transition duration-500 xl:my-0 xl:w-1.5 dark:bg-neutral-800"></aside>

    <div v-if="priority" class="flex w-full flex-col items-start justify-start xl:w-[45%] xl:items-end">
      <h5 class="text-lg font-medium transition duration-500">{{ priority[0][0] ? "Attack" : "System" }} Priority</h5>

      <div class="mt-3 flex w-full flex-col items-center justify-center gap-3">
        <div v-for="[name, priorities, damage] in priority" class="flex w-full flex-col items-center justify-center rounded-xl shadow">
          <div v-if="name" class="flex w-full items-center justify-between rounded-t-xl bg-neutral-200 px-3 py-1 transition duration-500 last:rounded-xl dark:bg-neutral-700">
            <h6 class="inline-flex items-center justify-center gap-1 transition duration-500">
              <img class="size-4 transition duration-500 dark:invert" :src="`/weapons/stats/${name}.svg`" aria-hidden="true" />
              {{ categoryNames[name] }}
            </h6>
            <ClientOnly>
              <p class="transition duration-500">{{ damage?.toLocaleString() }}/min</p>
            </ClientOnly>
          </div>
          <div v-for="target in priorities" class="flex w-full items-center justify-center gap-1 bg-neutral-200/25 px-3 transition duration-500 last:rounded-b-xl last:pb-1 dark:bg-neutral-700/50">
            <h5 class="w-5 select-none text-neutral-700 transition duration-500 dark:text-neutral-300">{{ String(target[0]).padStart(2, "0") }}</h5>
            <img class="size-4 transition duration-500 dark:invert" :src="`/ships/classes/${target[1].toLowerCase()}.svg`" :alt="target[1]" />
            <p class="grow text-left transition duration-500">{{ target[1] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  subsystem: WeaponSubsystem | AircraftSubsystem | AttackUAVSubsystem | RepairUAVSubsystem | MiscSubsytem | MiscUAVSubsystem;
}>();

/** [`displayed name`, `path to icon`] */
const propertyNames: Readonly<Record<string, [string, string]>> = {
  hanger: ["Hanger Type", "damageType"],
  capacity: ["Capacity", "alpha"],
  damageType: ["Damage Type", "damageType"],
  target: ["Prioritized Target", "target"],
  lockonEfficiency: ["Lock-on Efficiency", "lockonEfficiency"],
  alpha: ["Damage Per Hit", "alpha"],
  repair: ["HP Recovery", "hpRecovery"],
  attacksPerRound: ["Attacks Per Round", "attacksPerRound"],
  damageFrequency: ["Damage Frequency", "attacksPerRound"],
  cooldown: ["Cooldown", "lockonEfficiency"],
  lockOnTime: ["Lock-on Time", "lockonTime"],
  duration: ["Duration", "duration"],
  operationCount: ["Operation Count", "operationCount"]
};

const properties = computed(() => {
  // @ts-expect-error `stats` does not exist in every subsystem but `stats` is never used here so it's fine
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { attributes, count, name, title, type, stats, ...subsystemProperties } = props.subsystem;
  return subsystemProperties;
});

const stats = computed(() => {
  if (!("stats" in props.subsystem)) return;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { targetPriority, ...otherStats } = props.subsystem.stats;
  return otherStats;
});

const categoryNames: Readonly<Record<string, string>> = {
  antiship: "Anti-Ship Fire",
  antiair: "Air Defense",
  siege: "Siege Fire"
};

/** 2d array of [`name`, `priorities`, `damage`] */
const priority = computed<[string | null, [number, string][], number | null][] | undefined>(() => {
  if (!("stats" in props.subsystem)) return;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { targetPriority, ...unusedVar } = props.subsystem.stats;

  if (Array.isArray(targetPriority)) return [[null, targetPriority, null]];

  return Object.entries(targetPriority)
    .sort((a, b) => a[1].position - b[1].position)
    .map(([name, data]) => [name, "priorities" in data ? data.priorities : [], data.damage]);
});
</script>

<style lang="scss" scoped>
.tooltip {
  @apply inline-block;
}

.tooltip-nohover {
  @apply hidden;
}

@media (hover: none) and (pointer: coarse) {
  .tooltip-container {
    @apply flex-col;
  }
  .tooltip {
    @apply hidden;
  }
  .tooltip-nohover {
    @apply block;
  }
}
</style>
