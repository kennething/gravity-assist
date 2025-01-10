<template>
  <div class="relative flex flex-col items-start justify-start rounded-xl">
    <button
      @click="showSettings = !showSettings"
      class="flex h-9 w-9 items-center justify-center rounded-full border bg-white p-0 transition duration-500 lg:w-32 lg:justify-start lg:p-2 lg:px-4 dark:bg-neutral-800"
      :class="
        showSettings
          ? 'border-2 border-[#794dff] shadow-sm shadow-[#794dff38] ring-0 ring-[#794dff]'
          : 'border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-700'
      "
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
            type="checkbox"
            class="fo-switch fo-switch-primary fo-switch-outline border-neutral-200 bg-neutral-900 transition duration-500 hover:border-neutral-400 hover:duration-200 dark:border-neutral-700 dark:bg-neutral-100 dark:hover:border-neutral-600"
            id="layoutType"
            :checked="listOn"
            @change="emit('list')"
            style="box-shadow: var(--handleoffsetcalculator) 0 0 4px var(--bg-color) inset, 0 0 0 4px var(--bg-color) inset, var(--switchhandleborder);"
          />
        <label class="transition duration-500" for="layoutType">List View</label>
      </div>

      <div class="flex w-full items-center justify-center gap-2">
        <label class="transition duration-500" for="layoutType">Show Variants</label>
        <!-- prettier-ignore -->
        <input
            type="checkbox"
            class="fo-switch fo-switch-primary fo-switch-outline border-neutral-200 bg-neutral-900 transition duration-500 hover:border-neutral-400 hover:duration-200 dark:border-neutral-700 dark:bg-neutral-100 dark:hover:border-neutral-600"
            id="layoutType"
            :checked="variantsOff"
            @change="emit('variants')"
            style="box-shadow: var(--handleoffsetcalculator) 0 0 4px var(--bg-color) inset, 0 0 0 4px var(--bg-color) inset, var(--switchhandleborder);"
          />
        <label class="transition duration-500" for="layoutType">Hide Variants</label>
      </div>

      <div class="mt-4 flex w-full flex-col items-center justify-center" v-if="userStore.user">
        <h3 class="text-lg font-semibold transition duration-500">Account Switcher</h3>
        <p class="mb-2 text-sm transition duration-500">{{ userStore.user.blueprints.length ?? 0 }}/10 accounts</p>

        <ol class="flex w-full flex-col items-center justify-start gap-1">
          <li v-for="account in userStore.user.blueprints" class="w-full">
            <div class="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-neutral-100/25 py-1 transition duration-500 hover:bg-neutral-100 hover:duration-300">
              <h5 class="justfiy-center inline-flex items-center gap-2 font-medium transition duration-500">
                {{ Object.keys(account)[0] }}
                <div class="du-tooltip" data-tip="Edit Name">
                  <button @click="emit('editName', accountIndex)" class="fo-btn fo-btn-circle fo-btn-text size-6 min-h-6"><img class="size-4" src="/ui/pencil.svg" alt="Edit account name" /></button>
                </div>
              </h5>
              <ClientOnly>
                <!-- prettier-ignore -->
                <p class="text-sm transition duration-500">{{ Object.values(account)[0].reduce((total, ship) => total + Number(Object.values(ship)[0][1]), 0).toLocaleString() }} Tech Points</p>
              </ClientOnly>
            </div>
          </li>
        </ol>
        <button
          @click="emit('createNew')"
          v-if="userStore.user.blueprints.length < 10"
          class="mt-1 flex w-full cursor-pointer flex-col items-center justify-center rounded-lg py-2 transition hover:bg-neutral-100"
        >
          <h5 class="inline-flex items-center justify-center gap-2 font-medium transition duration-500"><img class="size-6" src="/ui/plusCircle.svg" aria-hidden="true" /> Create New</h5>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  close: boolean;
  accountIndex: number;
}>();
watch(
  () => props.close,
  (val) => {
    if (val) showSettings.value = false;
  }
);
const emit = defineEmits<{
  list: [void];
  variants: [void];
  editName: [accountIndex: number];
  createNew: [void];
}>();

const userStore = useUserStore();
const showSettings = ref(false);

const listOn = ref<boolean>();
const variantsOff = ref<boolean>();

onMounted(() => {
  listOn.value = localStorage.getItem("layout") === "list";
  variantsOff.value = localStorage.getItem("variants") !== "true";
});
</script>

<style scoped></style>
