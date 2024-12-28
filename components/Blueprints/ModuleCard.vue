<template>
  <div
    class="relative flex w-full flex-col items-center justify-center rounded-2xl border-neutral-300 bg-neutral-100/75 p-4 transition duration-500 sm:w-56 dark:border-neutral-700 dark:bg-neutral-900"
    :class="{ 'overflow-hidden hover:bg-neutral-200/75 dark:hover:bg-neutral-800': mod.unlocked }"
  >
    <Transition name="unlock">
      <button
        class="overlay group absolute left-1/2 top-1/2 z-[1] h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-black/50 transition duration-200 hover:bg-black/60"
        :class="{ 'dark:border dark:border-neutral-600': !mod.unlocked }"
        v-if="!mod.unlocked"
        @click="unlock"
      >
        <div class="message flex w-full flex-col items-center justify-center gap-3 transition group-hover:brightness-110">
          <p class="font-medium text-white">{{ owner ? "Click to mark as unlocked" : "Not unlocked" }}</p>
          <img class="size-12" src="/ui/lock.svg" aria-hidden="true" />
        </div>
      </button>
    </Transition>

    <h5 class="text-lg font-medium">{{ mod.system }}</h5>
    <p class="text-sm">{{ mod.type === "known" ? mod.name : "Unknown Module" }}</p>

    <img class="my-3 size-16" :src="mod.img" :alt="mod.system" loading="lazy" />

    <div class="flex w-full flex-col gap-2 transition duration-500" :class="{ 'pointer-events-none opacity-50 brightness-50': !mod.unlocked }">
      <button
        v-if="owner"
        class="fo-btn grow border-red-300 bg-red-300 text-sm text-black transition duration-500 hover:border-red-500 hover:bg-red-500 dark:border-red-600 dark:bg-red-600 dark:text-white dark:hover:border-red-700 dark:hover:bg-red-700"
        @click="remove"
      >
        Remove
      </button>
      <NuxtLink
        class="fo-btn grow border-blue-300 bg-blue-300 text-sm text-black transition duration-500 hover:border-blue-400 hover:bg-blue-400 dark:border-blue-600 dark:bg-blue-600 dark:text-white dark:hover:border-blue-700 dark:hover:bg-blue-700"
        :to="`/modules/module-library?s=${ship.name}&m=${mod.system}`"
        target="_blank"
      >
        View in Module Library
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  ship: BlueprintSuperCapitalShip;
  mod: BlueprintUnknownModule | BlueprintWeaponModule | BlueprintPropulsionModule | BlueprintMiscModule;
  owner: boolean | undefined;
}>();
const emit = defineEmits<{
  change: [void];
}>();

function unlock() {
  if (!props.owner) return;
  props.mod.unlocked = true;
  emit("change");
}

function remove() {
  if (!props.owner) return;
  props.mod.unlocked = false;
  emit("change");
}
</script>

<style lang="scss" scoped>
.unlock-leave-active {
  transition: opacity 0.5s ease;

  .message {
    transition: transform 0.5s ease;
  }
}

.unlock-leave-to {
  opacity: 0;

  .message {
    transform: translateY(5rem);
  }
}
</style>
