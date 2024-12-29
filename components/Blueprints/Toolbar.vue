<template>
  <div
    ref="toolbar"
    class="sticky top-20 z-[2] mt-4 flex flex-wrap items-center justify-center gap-4 rounded-full border-transparent bg-body px-5 py-2 transition duration-500 xl:flex-nowrap"
    :class="{ 'shadow dark:border dark:border-neutral-700': isSticky }"
  >
    <BlueprintsSettings :close="closeSettings" @list="emit('list')" @variants="emit('variants')" @click.stop="closeOptions(false)" />
    <BlueprintsSort :close="closeSorters" @sort="(sorter) => emit('sort', sorter)" @click.stop="closeOptions(true, true, false)" />
    <BlueprintsFilter :close="closeFilters" @filter="(filter) => emit('filter', filter)" @click.stop="closeOptions(true, false, true)" />
    <BlueprintsSearch @search="(term) => emit('search', term)" />
    <button
      v-if="isOwner"
      type="button"
      @click="saveBlueprints"
      class="du-btn flex h-9 min-h-9 items-center justify-center gap-2 rounded-full border-blue-300 bg-blue-100 py-2 transition duration-500 hover:scale-105 hover:border-blue-400 hover:bg-blue-200 dark:border-blue-500 dark:bg-blue-800 dark:hover:bg-blue-700"
      :class="{ 'pointer-events-none opacity-50 brightness-50': !userStore.hasUnsavedChanges }"
    >
      <span class="hidden transition duration-500 sm:inline-flex md:hidden lg:inline-flex">{{ success ? "Saved!" : loading ? "Saving" : "Save" }}</span>
      <img class="size-5 transition duration-500 dark:invert" src="/ui/save.svg" aria-hidden="true" v-if="!loading" />
      <span class="fo-loading fo-loading-spinner fo-loading-sm" v-else></span>
    </button>
    <p
      class="absolute -bottom-7 rounded-full bg-body px-3 py-1 opacity-0 transition duration-500"
      :class="{ 'opacity-100': userStore.hasUnsavedChanges || !isOwner, 'shadow dark:border dark:border-neutral-700 dark:shadow-none': isSticky }"
    >
      {{ !isOwner ? "You are viewing someone else's blueprints" : "You have unsaved changes" }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  closeToolbar: boolean;
  data: BlueprintAllShip[] | undefined;
  isOwner: boolean | undefined;
}>();
watch(
  () => props.closeToolbar,
  (val) => {
    if (val) closeOptions();
  }
);

const emit = defineEmits<{
  list: [void];
  variants: [void];
  sort: [ShipSorter | undefined];
  filter: [ShipFilter];
  search: [string];
}>();

const route = useRoute();
const userStore = useUserStore();

const toolbar = useTemplateRef("toolbar");
const isSticky = ref(false);
const loading = ref(false);
const success = ref(false);

const closeFilters = ref(false);
const closeSorters = ref(false);
const closeSettings = ref(false);

watch(
  () => userStore.hasUnsavedChanges,
  (val) => {
    if (val && props.isOwner) window.addEventListener("beforeunload", warnForUnsavedChanges);
    else window.removeEventListener("beforeunload", warnForUnsavedChanges);
  }
);

function warnForUnsavedChanges(event: BeforeUnloadEvent) {
  event.preventDefault();
}

onMounted(() => {
  window.addEventListener("scroll", detectSticky);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", detectSticky);
});

let previousPosition = 0;
function detectSticky(event: Event) {
  if (!toolbar.value) return;
  const newPosition = toolbar.value.getBoundingClientRect().top;

  if (newPosition === previousPosition) return (isSticky.value = true);

  previousPosition = newPosition;
  isSticky.value = false;
}

function closeOptions(settings = true, filters = true, sorters = true) {
  if (settings) closeSettings.value = true;
  if (filters) closeFilters.value = true;
  if (sorters) closeSorters.value = true;
  setTimeout(() => {
    if (settings) closeSettings.value = false;
    if (filters) closeFilters.value = false;
    if (sorters) closeSorters.value = false;
  }, 1);
}

async function saveBlueprints() {
  if (!userStore.user || !userStore.hasUnsavedChanges) return;

  loading.value = true;
  const { success: fetchSuccess, error } = await $fetch("/api/saveBlueprints", { method: "POST", body: { uid: route.query.u, accessToken: userStore.user.accessToken, blueprints: props.data } });
  loading.value = false;
  if (!fetchSuccess && error) console.error(error);
  success.value = true;
  setTimeout(() => {
    userStore.hasUnsavedChanges = false;
    success.value = false;
  }, 1000);
}
</script>

<style scoped></style>
