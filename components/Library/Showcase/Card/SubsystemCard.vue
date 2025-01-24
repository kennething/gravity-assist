<template>
  <div class="flex items-stretch justify-between rounded-xl bg-neutral-100/25 p-4" :class="priority ? 'w-full' : 'grow'">
    <div class="flex flex-col items-start justify-start" :class="priority ? 'w-[45%]' : 'w-full'">
      <p class="text-neutral-800">{{ subsystem.name }}</p>
      <h5 class="text-lg font-medium">
        <span class="text-sm font-normal text-yellow-600">x{{ subsystem.count }}</span>
        {{ subsystem.title }}
      </h5>

      <h4 class="mt-2 inline-flex items-center justify-center gap-1" v-if="priority && priority[0][0]">
        <img class="size-4 invert dark:invert-0" :src="`/weapons/stats/${priority[0][0]}.svg`" aria-hidden="true" />
        <ClientOnly>
          <span>
            <span class="text-lg font-medium text-yellow-600">{{ priority[0][2]?.toLocaleString() }}</span
            ><span class="text-sm text-yellow-600">/min</span>
            <span class="ms-1 text-sm">({{ categoryNames[priority[0][0]] }})</span>
          </span>
        </ClientOnly>
      </h4>

      <div class="mt-3 flex w-full flex-col items-center justify-center gap-1">
        <div class="flex w-full items-center justify-between" v-for="(property, name) in properties">
          <h5 class="inline-flex items-center justify-center gap-1 font-medium">
            <img class="size-6 invert dark:invert-0" :src="`/weapons/types/${propertyNames[name][1]}.svg`" aria-hidden="true" />
            {{ propertyNames[name][0] }}
          </h5>
          <ClientOnly>
            <p>{{ ((property ?? 0) as number).toLocaleString() + (name === "lockonEfficiency" ? "%" : "") }}</p>
          </ClientOnly>
        </div>
      </div>

      <div class="mt-3 flex w-full flex-col items-center justify-center gap-1" v-if="stats">
        <div class="flex w-full items-center justify-between" v-for="(property, name) in stats">
          <h5 class="inline-flex items-center justify-center gap-1 font-medium">
            <!-- TODO: add icons -->
            <img class="size-6 invert dark:invert-0" :src="`/weapons/types/${propertyNames[name][1]}.svg`" aria-hidden="true" />
            {{ propertyNames[name][0] }}
          </h5>
          <p v-if="Array.isArray(property)">{{ property[0] }} x {{ property[1] }}</p>
          <p v-else>{{ (property ?? 0) + ((name as string) === "damageFrequency" ? " time(s)" : "s") }}</p>
        </div>
      </div>
    </div>

    <aside class="w-1.5 rounded-full bg-neutral-100" v-if="priority"></aside>

    <div class="flex w-[45%] flex-col items-end justify-start" v-if="priority">
      <h5 class="text-lg font-medium">{{ priority[0][0] ? "Attack" : "System" }} Priority</h5>

      <div class="mt-3 flex w-full flex-col items-center justify-center gap-2">
        <div class="flex w-full flex-col items-center justify-center" v-for="[name, priorities, damage] in priority">
          <div class="flex w-full items-center justify-between rounded-t-xl bg-neutral-200 px-3 py-1 last:rounded-xl" v-if="name">
            <h6 class="inline-flex items-center justify-center gap-1">
              <img class="size-4 invert dark:invert-0" :src="`/weapons/stats/${name}.svg`" aria-hidden="true" />
              {{ categoryNames[name] }} Fire
            </h6>
            <ClientOnly>
              <p>{{ damage?.toLocaleString() }}/min</p>
            </ClientOnly>
          </div>
          <div class="flex w-full items-center justify-center gap-1 bg-neutral-200/25 px-3 last:rounded-b-xl last:pb-1" v-for="target in priorities">
            <h5 class="select-none">{{ String(target[0]).padStart(2, "0") }}</h5>
            <!-- TODO: add ship type icons -->
            <img class="size-4" src="" alt="" />
            <p class="grow text-left">{{ target[1] }}</p>
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
  // @ts-expect-error
  const { attributes, count, name, title, type, stats, ...subsystemProperties } = props.subsystem;
  return subsystemProperties;
});

const stats = computed(() => {
  if (!("stats" in props.subsystem)) return;
  const { targetPriority, ...otherStats } = props.subsystem.stats;
  return otherStats;
});

const categoryNames: Readonly<Record<string, string>> = {
  antiship: "Anti-Ship",
  antiair: "Anti-Air",
  siege: "Siege"
};

/** 2d array of [`name`, `priorities`, `damage`] */
const priority = computed<[string | null, [number, string][], number | null][] | undefined>(() => {
  if (!("stats" in props.subsystem)) return;
  const { targetPriority, ..._ } = props.subsystem.stats;

  if (Array.isArray(targetPriority)) return [[null, targetPriority, null]];

  return Object.entries(targetPriority)
    .toSorted((a, b) => a[1].position - b[1].position)
    .map(([name, data]) => [name, "priorities" in data ? data.priorities : [], data.damage]);
});
</script>

<style scoped></style>
