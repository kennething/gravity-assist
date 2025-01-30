<template>
  <div
    ref="toolbar"
    class="sticky top-20 z-[2] mt-4 flex flex-wrap items-center justify-center gap-4 rounded-full border-transparent bg-body px-5 py-2 transition duration-500 xl:flex-nowrap"
    :class="{ 'shadow dark:border dark:border-neutral-700': isSticky }"
  >
    <BlueprintsSettings
      :close="closeSettings"
      :account-index="accountIndex"
      :data="data"
      :is-owner="isOwner"
      @edit-name="(acc) => (editName = acc)"
      @delete="(acc) => (deleteModal = acc)"
      @list="emit('list')"
      @variants="emit('variants')"
      @click.stop="closeOptions(false)"
      @create-new="createNewAccount"
    />
    <BlueprintsSort :close="closeSorters" @sort="(sorter) => emit('sort', sorter)" @click.stop="closeOptions(true, true, false)" />
    <BlueprintsFilter :close="closeFilters" @filter="(filter) => emit('filter', filter)" @click.stop="closeOptions(true, false, true)" />
    <BlueprintsSearch @search="(term) => emit('search', term)" />
    <button
      v-if="isOwner"
      type="button"
      class="du-btn flex h-9 min-h-9 items-center justify-center gap-2 rounded-full border-blue-300 bg-blue-100 py-2 transition duration-500 hover:scale-105 hover:border-blue-400 hover:bg-blue-200 dark:border-blue-500 dark:bg-blue-800 dark:hover:bg-blue-700"
      :class="{ 'pointer-events-none opacity-50 brightness-50': !userStore.hasUnsavedChanges }"
      @click="saveBlueprints"
    >
      <span class="hidden transition duration-500 sm:inline-flex md:hidden lg:inline-flex">{{ success ? "Saved!" : loading ? "Saving" : "Save" }}</span>
      <img v-if="!loading" class="size-5 transition duration-500 dark:invert" src="/ui/save.svg" aria-hidden="true" />
      <span v-else class="fo-loading fo-loading-spinner fo-loading-sm"></span>
    </button>
    <p
      class="absolute -bottom-7 text-nowrap rounded-full bg-body px-3 py-1 opacity-0 transition duration-500"
      :class="{ 'opacity-100': userStore.hasUnsavedChanges || !isOwner, 'shadow dark:border dark:border-neutral-700 dark:shadow-none': isSticky }"
    >
      {{ !isOwner ? "You are viewing someone else's blueprints" : "You have unsaved changes" }}
    </p>

    <Teleport to="body">
      <Transition name="menu">
        <div v-if="editName !== undefined && userStore.user" class="fixed left-0 top-0 z-30 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" @click="editName = undefined">
          <form id="menu" class="flex w-[80vw] flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 md:w-[30rem] md:p-10 dark:bg-neutral-800" @submit.prevent="rename" @click.stop>
            <!-- prettier-ignore -->
            <label for="new-name" class="text-xl font-semibold">Rename <span class="text-xl font-bold">{{ getObjectKey(userStore.user.blueprints[editName]) }}</span>?</label>
            <input
              id="new-name"
              v-model="newName"
              type="text"
              class="search-input fo-input grow rounded-full text-left text-black transition duration-500 placeholder:transition placeholder:duration-500 dark:text-white dark:placeholder:text-neutral-300"
              placeholder="Enter new account name"
              required
              minlength="1"
              maxlength="20"
            />
            <button
              type="submit"
              class="du-btn flex h-9 min-h-9 items-center justify-center gap-2 rounded-full border-blue-300 bg-blue-100 py-2 transition duration-500 hover:scale-105 hover:border-blue-400 hover:bg-blue-200 dark:border-blue-500 dark:bg-blue-800 dark:hover:bg-blue-700"
              :class="{ 'pointer-events-none opacity-50 brightness-50': newName.length < 1 || newName.length > 20 }"
            >
              <span class="hidden transition duration-500 sm:inline-flex md:hidden lg:inline-flex">{{ renameSuccess ? "Saved!" : renameLoading ? "Saving" : "Save" }}</span>
              <img v-if="!renameLoading" class="size-5 transition duration-500 dark:invert" src="/ui/save.svg" aria-hidden="true" />
              <span v-else class="fo-loading fo-loading-spinner fo-loading-sm"></span>
            </button>
          </form>
        </div>
      </Transition>

      <Transition name="menu">
        <div v-if="deleteModal !== undefined && userStore.user" class="fixed left-0 top-0 z-30 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" @click="deleteModal = undefined">
          <form
            id="menu"
            class="flex w-[80vw] flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 md:w-[30rem] md:p-10 dark:bg-neutral-800"
            @submit.prevent="deleteAccount"
            @click.stop
          >
            <!-- prettier-ignore -->
            <h3 for="new-name" class="text-xl font-semibold">Delete <span class="text-xl font-bold">{{ getObjectKey(userStore.user.blueprints[deleteModal]) }}</span>?</h3>
            <button
              type="submit"
              class="du-btn flex h-9 min-h-9 items-center justify-center gap-2 rounded-full border-blue-300 bg-blue-100 py-2 transition duration-500 hover:scale-105 hover:border-blue-400 hover:bg-blue-200 dark:border-blue-500 dark:bg-blue-800 dark:hover:bg-blue-700"
            >
              <span class="hidden transition duration-500 sm:inline-flex md:hidden lg:inline-flex">{{ deleteSuccess ? "Deleted!" : deleteLoading ? "Deleting" : "Delete" }}</span>
              <img v-if="!deleteLoading" class="size-5 transition duration-500 dark:invert" src="/ui/trash.svg" aria-hidden="true" />
              <span v-else class="fo-loading fo-loading-spinner fo-loading-sm"></span>
            </button>
          </form>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  closeToolbar: boolean;
  data: BlueprintAllShip[] | undefined;
  isOwner: boolean | undefined;
  accountIndex: number;
}>();

const emit = defineEmits<{
  list: [void];
  variants: [void];
  sort: [ShipSorter | undefined];
  filter: [ShipFilter];
  search: [string];
}>();

const closeFilters = ref(false);
const closeSorters = ref(false);
const closeSettings = ref(false);

async function closeOptions(settings = true, filters = true, sorters = true) {
  if (settings) closeSettings.value = true;
  if (filters) closeFilters.value = true;
  if (sorters) closeSorters.value = true;

  await nextTick();
  if (settings) closeSettings.value = false;
  if (filters) closeFilters.value = false;
  if (sorters) closeSorters.value = false;
}

watch(
  () => props.closeToolbar,
  (val) => {
    if (val) void closeOptions();
  }
);

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const toolbar = useTemplateRef("toolbar");
const isSticky = ref(false);
const loading = ref(false);
const success = ref(false);

const renameLoading = ref(false);
const renameSuccess = ref(false);

const deleteLoading = ref(false);
const deleteSuccess = ref(false);

const deleteModal = ref<number>();
const editName = ref<number>();
const newName = ref("");

function warnForUnsavedChanges(event: BeforeUnloadEvent) {
  event.preventDefault();
}

watch(
  () => userStore.hasUnsavedChanges,
  (val) => {
    if (val && props.isOwner) window.addEventListener("beforeunload", warnForUnsavedChanges);
    else window.removeEventListener("beforeunload", warnForUnsavedChanges);
  }
);

let previousPosition = 0;
function detectSticky() {
  if (!toolbar.value) return;
  const newPosition = toolbar.value.getBoundingClientRect().top;

  if (newPosition === previousPosition) return (isSticky.value = true);

  previousPosition = newPosition;
  isSticky.value = false;
}

onMounted(() => window.addEventListener("scroll", detectSticky));
onBeforeUnmount(() => window.removeEventListener("scroll", detectSticky));

function createNewAccount() {
  void router.push({ query: { ...route.query, a: props.accountIndex + 1 } });
}

async function saveBlueprints() {
  if (!userStore.user || !userStore.hasUnsavedChanges) return;

  loading.value = true;
  const {
    success: fetchSuccess,
    error,
    newBlueprints
  } = await $fetch("/api/saveBlueprints", {
    method: "POST",
    body: {
      uid: route.query.u,
      accessToken: userStore.user.accessToken,
      blueprints: props.data,
      accountIndex: props.accountIndex,
      accountName: getObjectKey(userStore.user.blueprints[props.accountIndex]) ?? "Unnamed"
    }
  });

  loading.value = false;
  if (!fetchSuccess && error) return console.error(error);

  if (fetchSuccess) {
    success.value = true;
    setTimeout(() => {
      userStore.hasUnsavedChanges = false;
      if (newBlueprints && userStore.user) userStore.user.blueprints = newBlueprints;
      success.value = false;
    }, 1000);
  }
}

async function rename() {
  if (!userStore.user) return;

  renameLoading.value = true;
  const {
    success: fetchSuccess,
    error,
    newBlueprints
  } = await $fetch("/api/saveBlueprints", {
    method: "POST",
    body: { uid: route.query.u, accessToken: userStore.user.accessToken, blueprints: null, accountIndex: props.accountIndex, accountName: newName.value }
  });

  renameLoading.value = false;
  if (!fetchSuccess && error && error !== "Account not saved.") return console.error(error);

  renameSuccess.value = true;
  if (error === "Account not saved.") userStore.user.blueprints[props.accountIndex] = { [newName.value]: getObjectValue(userStore.user.blueprints[props.accountIndex]) };

  setTimeout(() => {
    editName.value = undefined;
    newName.value = "";
    if (newBlueprints && userStore.user) userStore.user.blueprints = newBlueprints;
    renameSuccess.value = false;
  }, 1000);
}

async function deleteAccount() {
  if (!userStore.user) return;

  deleteLoading.value = true;
  const {
    success: fetchSuccess,
    error,
    newBlueprints
  } = await $fetch("/api/deleteBlueprint", {
    method: "POST",
    body: { uid: route.query.u, accessToken: userStore.user.accessToken, accountIndex: deleteModal.value }
  });

  deleteLoading.value = false;
  if (!fetchSuccess && error) return console.error(error);

  deleteSuccess.value = true;

  setTimeout(() => {
    deleteModal.value = undefined;
    if (newBlueprints && userStore.user) userStore.user.blueprints = newBlueprints;
    deleteSuccess.value = false;
  }, 1000);
}
</script>

<style lang="scss" scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s ease-in-out;

  #menu {
    transition: all 0.35s ease-in-out;
  }
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;

  #menu {
    transform: scale(0);
  }
}
</style>
