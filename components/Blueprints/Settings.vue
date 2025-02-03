<template>
  <div class="relative flex flex-col items-start justify-start rounded-xl">
    <button
      class="flex h-9 w-9 select-none items-center justify-center rounded-full border bg-white p-0 transition duration-500 lg:w-32 lg:justify-start lg:p-2 lg:px-4 dark:bg-neutral-800"
      :class="
        showSettings
          ? 'border-2 border-[#794dff] shadow-sm shadow-[#794dff38] ring-0 ring-[#794dff]'
          : 'border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-700'
      "
      type="button"
      @click="showSettings = !showSettings"
    >
      <img class="size-5 transition duration-500 dark:invert" src="/ui/settings.svg" aria-hidden="true" />
      <p class="hidden grow transition duration-500 lg:block">Options</p>
    </button>

    <div
      v-show="showSettings"
      class="absolute top-10 z-[2] flex w-72 flex-col items-start justify-center gap-3 rounded-xl border-2 border-neutral-200 bg-white p-3 shadow-md transition duration-500 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <div class="flex w-full items-center justify-center gap-2">
        <label class="transition duration-500" for="layoutType">Grid View</label>
        <!-- prettier-ignore -->
        <input
          id="layoutType"
          type="checkbox"
          class="fo-switch fo-switch-primary fo-switch-outline border-neutral-200 bg-neutral-900 transition duration-500 hover:border-neutral-400 hover:duration-200 dark:border-neutral-700 dark:bg-neutral-100 dark:hover:border-neutral-600"
          :checked="listOn"
          style="box-shadow: var(--handleoffsetcalculator) 0 0 4px var(--bg-color) inset, 0 0 0 4px var(--bg-color) inset, var(--switchhandleborder);"
          @change="emit('list')"
        />
        <label class="transition duration-500" for="layoutType">List View</label>
      </div>

      <div class="flex w-full items-center justify-center gap-2">
        <label class="transition duration-500" for="layoutType">Show Variants</label>
        <!-- prettier-ignore -->
        <input
          id="layoutType"
          type="checkbox"
          class="fo-switch fo-switch-primary fo-switch-outline border-neutral-200 bg-neutral-900 transition duration-500 hover:border-neutral-400 hover:duration-200 dark:border-neutral-700 dark:bg-neutral-100 dark:hover:border-neutral-600"
          :checked="variantsOff"
          style="box-shadow: var(--handleoffsetcalculator) 0 0 4px var(--bg-color) inset, 0 0 0 4px var(--bg-color) inset, var(--switchhandleborder);"
          @change="emit('variants')"
        />
        <label class="transition duration-500" for="layoutType">Hide Variants</label>
      </div>

      <div v-if="isOwner && blueprints" class="mt-4 flex w-full flex-col items-center justify-center">
        <h3 class="text-lg font-semibold transition duration-500">Account Switcher</h3>
        <p class="mb-2 text-sm transition duration-500">{{ blueprints.length ?? 0 }}/10 accounts</p>

        <ol class="flex w-full flex-col items-center justify-start gap-1">
          <li
            v-for="(account, index) in blueprints"
            class="w-full"
            :class="{ 'du-tooltip': userStore.isUnsavedAccount && Number(route.query.a) !== index }"
            data-tip="Save your current account first!"
          >
            <button
              class="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg py-1 transition duration-500 hover:duration-300"
              :class="[
                route.query.a === index.toString()
                  ? 'bg-neutral-200 hover:bg-neutral-300/75 dark:bg-neutral-700 dark:hover:bg-neutral-600'
                  : 'bg-neutral-100/25 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700',
                { 'pointer-events-none opacity-50': userStore.isUnsavedAccount && Number(route.query.a) !== index }
              ]"
              type="button"
              @click="goToAccount(index)"
            >
              <h5 v-if="userStore.user" class="justfiy-center inline-flex items-center font-medium transition duration-500">
                {{ getObjectKey(account) }}
                <span class="du-tooltip ms-2" data-tip="Edit Name">
                  <button class="fo-btn fo-btn-circle fo-btn-text size-6 min-h-6" type="button" @click.stop="emit('editName', accountIndex)">
                    <img class="size-4 select-none transition duration-500 dark:invert" src="/ui/pencil.svg" alt="Edit account name" />
                  </button>
                </span>
                <span v-if="userStore.user.blueprints.length > 1" class="du-tooltip" data-tip="Delete">
                  <button class="fo-btn fo-btn-circle fo-btn-text size-6 min-h-6" type="button" @click.stop="emit('delete', accountIndex)">
                    <img class="size-4 select-none transition duration-500 dark:invert" src="/ui/trash.svg" alt="Delete account" />
                  </button>
                </span>
              </h5>
              <ClientOnly>
                <!-- prettier-ignore -->
                <p class="text-sm transition duration-500">{{ getTotalTP(getObjectValue(account)).toLocaleString() }} Tech Points</p>
              </ClientOnly>
            </button>
          </li>
        </ol>
        <button
          v-if="!userStore.isUnsavedAccount && blueprints.length < 10"
          class="mt-1 flex w-full cursor-pointer flex-col items-center justify-center rounded-lg py-2 transition hover:bg-neutral-100 dark:hover:bg-neutral-700"
          type="button"
          @click="emit('createNew')"
        >
          <h5 class="inline-flex items-center justify-center gap-2 font-medium transition duration-500">
            <img class="size-6 select-none transition duration-500 dark:invert" src="/ui/plusCircle.svg" aria-hidden="true" /> Create New
          </h5>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  close: boolean;
  accountIndex: number;
  data: BlueprintAllShip[] | undefined;
  isOwner: boolean | undefined;
}>();

const emit = defineEmits<{
  list: [void];
  variants: [void];
  editName: [accountIndex: number];
  delete: [accountIndex: number];
  createNew: [void];
}>();

const route = useRoute();
const router = useRouter();

const userStore = useUserStore();
const showSettings = ref(false);
watch(
  () => props.close,
  (val) => {
    if (val) showSettings.value = false;
  }
);

const blueprints = computed(() => {
  return userStore.user?.blueprints;
});

const listOn = ref<boolean>();
const variantsOff = ref<boolean>();

onMounted(() => {
  listOn.value = localStorage.getItem("layout") === "list";
  variantsOff.value = localStorage.getItem("variants") !== "true";
});

function getTotalTP(ships: Record<string, (string | number)[]>[]) {
  const usedShips: string[] = [];

  return ships.reduce((total, ship) => {
    const id = getObjectKey(ship);
    const [variant, tp] = getObjectValue(ship);

    const shipInData = props.data?.find((s) => s.id.toString() === id && s.variant === variant);
    if (shipInData?.hasVariants) {
      if (usedShips.includes(shipInData.name)) return total;
      usedShips.push(shipInData.name);
    }
    return total + Number(tp);
  }, 0);
}

function goToAccount(index: number) {
  if (userStore.isUnsavedAccount) return;
  void router.push(`/modules/blueprint-tracker?a=${index}`);
}
</script>

<style scoped></style>
