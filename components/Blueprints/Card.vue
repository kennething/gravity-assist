<template>
  <div
    class="relative flex items-center justify-center rounded-2xl p-4 transition duration-500"
    :class="{
      'border-yellow-100 bg-yellow-100/75 dark:border-yellow-700 dark:bg-yellow-900': isGolden,
      'border-neutral-300 bg-neutral-100/75 dark:border-neutral-700 dark:bg-neutral-900': !isGolden,
      'overflow-hidden hover:bg-yellow-200/75 dark:hover:bg-yellow-800': ship.unlocked && isGolden,
      'overflow-hidden hover:bg-neutral-200/75 dark:hover:bg-neutral-800': ship.unlocked && !isGolden,
      'w-[90vw] flex-col sm:w-72': !isListLayout,
      'h-auto w-[90vw] flex-col gap-2 sm:w-72 lg:h-36 lg:w-[35rem] lg:flex-row xl:w-[45rem]': isListLayout
    }"
    v-if="variants || (!variants && showVariant)"
  >
    <Transition name="unlock">
      <button
        class="overlay group absolute left-1/2 top-1/2 z-[1] h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-black/50 transition duration-200 hover:bg-black/60"
        :class="{ 'dark:border dark:border-neutral-600': !ship.unlocked, 'cursor-auto': !owner }"
        v-if="!ship.unlocked"
        @click="unlock"
      >
        <div class="message flex w-full items-center justify-center gap-3 transition group-hover:brightness-110" :class="{ 'flex-col': !isListLayout, 'flex-col lg:flex-row': isListLayout }">
          <p class="font-medium text-white">{{ owner ? "Click to mark as unlocked" : "Not unlocked" }}</p>
          <img class="size-12" src="/ui/lock.svg" aria-hidden="true" />
        </div>
      </button>
    </Transition>

    <div class="flex flex-col items-center justify-center" :class="{ 'w-auto lg:w-96': isListLayout }">
      <h4 class="text-xl font-bold transition duration-500">{{ ship.name }}</h4>
      <p class="text-sm transition duration-500" v-if="variants">
        {{ ship.variantName }} <span class="text-sm transition duration-500" v-if="ship.hasVariants">({{ ship.variant }})</span>
      </p>
      <p class="text-sm transition duration-500" v-else-if="!variants && ship.hasVariants">
        {{ ship.variant }}
      </p>
    </div>
    <img class="my-2 h-20 xl:h-32" :src="ship.img" :alt="ship.name" loading="lazy" />

    <div class="flex w-full flex-col gap-2 transition duration-500" :class="{ 'pointer-events-none opacity-50 brightness-50': !ship.unlocked }" v-if="owner">
      <div class="flex w-full items-center justify-center gap-2">
        <div class="fo-input-group max-w-sm">
          <label class="fo-input-group-text" :for="'techPoints' + ship.name + ship.variant">TP</label>
          <div class="relative grow">
            <input
              type="text"
              class="peer fo-input grow text-left text-black opacity-0 focus:opacity-100"
              placeholder="Tech Points"
              :id="'techPoints' + ship.name + ship.variant"
              v-model="techPoints"
            />
            <div class="pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-hidden peer-focus:invisible">
              <p class="w-full px-3 text-left text-black">
                v{{
                  Number(
                    String(Number(tp) + 100)
                      .padStart(5, "0")
                      .slice(0, 3)
                  )
                }}.{{ String(tp).padStart(5, "0").slice(3) }}
              </p>
            </div>
          </div>
        </div>
        <button
          class="fo-btn grow border-red-300 bg-red-300 text-black transition duration-500 hover:border-red-500 hover:bg-red-500 dark:border-red-600 dark:bg-red-600 dark:text-white dark:hover:border-red-700 dark:hover:bg-red-700"
          @click="remove"
        >
          Remove
        </button>
      </div>

      <div class="flex w-full items-center justify-center gap-2" v-if="!variants && showVariantUnique">
        <button
          v-for="variant in allVariants.slice(1)"
          @click="removeVariant(variant)"
          class="fo-btn relative w-1/4 grow overflow-hidden border-red-300 bg-red-300 text-black transition duration-500 dark:border-red-600 dark:bg-red-600 dark:text-white"
          :class="{ 'hover:border-red-500 hover:bg-red-500 dark:hover:border-red-700 dark:hover:bg-red-700': variant.unlocked }"
        >
          <Transition name="unlock">
            <button
              class="overlay group absolute left-1/2 top-1/2 z-[1] flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-start bg-black/50 transition duration-200 hover:bg-black/60"
              :class="{ 'dark:border dark:border-neutral-600': !variant.unlocked, 'cursor-auto': !owner }"
              v-if="!variant.unlocked"
              @click.stop="unlockVariant(variant)"
            >
              <img class="message size-8 transition group-hover:brightness-110" src="/ui/lock.svg" aria-hidden="true" />
            </button>
          </Transition>
          {{ variant.variant }}
        </button>
      </div>

      <div class="flex items-center gap-2" v-if="variants && ship.hasVariants">
        <!-- prettier-ignore -->
        <input
          type="checkbox"
          class="fo-switch fo-switch-primary fo-switch-outline border-neutral-200 bg-neutral-900 transition duration-500 hover:border-neutral-400 hover:duration-200 dark:border-neutral-700 dark:bg-neutral-100 dark:hover:border-neutral-600"
          :id="ship.name + ship.variant"
          :checked="mirror"
          @change="emit('mirror')"
          style="box-shadow: var(--handleoffsetcalculator) 0 0 4px var(--bg-color) inset, 0 0 0 4px var(--bg-color) inset, var(--switchhandleborder);"
        />
        <label class="text-left transition duration-500" :for="ship.name + ship.variant">Match TP with variants</label>
      </div>
      <button
        v-if="'modules' in ship"
        class="fo-btn grow border-blue-300 bg-blue-300 text-black transition duration-500 hover:border-blue-400 hover:bg-blue-400 dark:border-blue-600 dark:bg-blue-600 dark:text-white dark:hover:border-blue-700 dark:hover:bg-blue-700"
        @click="emit('modules', ship)"
      >
        Edit Modules ({{ ship.modules.filter((mod) => mod.unlocked).length }}/{{ ship.modules.length }})
      </button>
    </div>

    <div class="flex w-full flex-col gap-2 transition duration-500" :class="{ 'pointer-events-none opacity-50 brightness-50': !ship.unlocked }" v-else>
      <p class="px-3 text-xl font-semibold text-black">
        v{{
          Number(
            String(Number(tp) + 100)
              .padStart(5, "0")
              .slice(0, 3)
          )
        }}.{{ String(tp).padStart(5, "0").slice(3) }}
      </p>
      <div class="flex w-full items-center justify-center gap-2" v-if="!variants && showVariantUnique">
        <div
          v-for="variant in allVariants.slice(1)"
          class="fo-btn relative w-1/4 grow overflow-hidden border-green-300 bg-green-300 text-black transition duration-500 hover:border-green-300 hover:bg-green-300 dark:border-green-600 dark:bg-green-600 dark:text-white hover:dark:border-green-600 hover:dark:bg-green-600"
        >
          <Transition name="unlock">
            <div
              class="overlay group absolute left-1/2 top-1/2 z-[1] flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-start bg-black/50 transition duration-200 hover:bg-black/60"
              :class="{ 'dark:border dark:border-neutral-600': !variant.unlocked, 'cursor-auto': !owner }"
              v-if="!variant.unlocked"
            >
              <img class="message size-8 transition group-hover:brightness-110" src="/ui/lock.svg" aria-hidden="true" />
            </div>
          </Transition>
          {{ variant.variant }}
        </div>
      </div>
      <button
        v-if="'modules' in ship"
        class="fo-btn grow border-blue-300 bg-blue-300 text-black transition duration-500 hover:border-blue-400 hover:bg-blue-400 dark:border-blue-600 dark:bg-blue-600 dark:text-white dark:hover:border-blue-700 dark:hover:bg-blue-700"
        @click="emit('modules', ship)"
      >
        View Modules ({{ ship.modules.filter((mod) => mod.unlocked).length }}/{{ ship.modules.length }})
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  ship: BlueprintAllShip;
  layout: "list" | "grid";
  variants: boolean;
  allVariants: BlueprintAllShip[];
  tp: number;
  mirror: boolean;
  owner: boolean | undefined;
}>();
watch(
  () => props.tp,
  (tp) => (techPoints.value = tp)
);

const emit = defineEmits<{
  tp: [number];
  mirror: [void];
  modules: [BlueprintSuperCapitalShip];
  change: [void];
}>();

const showVariant = computed(() => !props.ship.hasVariants || (props.ship.hasVariants && props.ship.variant === "A"));
const showVariantUnique = computed(() => props.ship.hasVariants && props.ship.variant === "A");
const isListLayout = computed(() => props.layout === "list");

const isGolden = computed(() => props.ship.techPoints >= ("modules" in props.ship ? 200 : 100));

const techPoints = ref(props.tp);
watch(techPoints, (tp) => {
  if (!props.ship.unlocked) return;

  const str = String(tp);
  if (str.length > 4) return (techPoints.value = Number(str.slice(0, 4)));

  emit("tp", Number(tp));
});

function unlock() {
  if (!props.owner) return;
  props.ship.unlocked = true;
  emit("change");
}

function remove() {
  if (!props.owner) return;
  props.ship.unlocked = false;
  emit("change");
}

function unlockVariant(variant: BlueprintAllShip) {
  if (!props.owner) return;
  variant.unlocked = true;
  emit("change");
}

function removeVariant(variant: BlueprintAllShip) {
  if (!props.owner) return;
  variant.unlocked = false;
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
