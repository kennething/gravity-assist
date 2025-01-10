<template>
  <div
    ref="toolbar"
    class="sticky top-20 z-[2] mt-4 flex flex-wrap items-center justify-center gap-4 rounded-full border-transparent bg-body px-5 py-2 transition duration-500 xl:flex-nowrap"
    :class="{ 'shadow dark:border dark:border-neutral-700': isSticky }"
  >
    <BlueprintsSettings
      :close="closeSettings"
      :account-index="accountIndex"
      @edit-name="(acc) => (editName = acc)"
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

    <Teleport to="body">
      <Transition name="menu">
        <div class="fixed left-0 top-0 z-30 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" v-if="editName !== undefined && userStore.user" @click="editName = undefined">
          <form @submit.prevent="rename" id="menu" class="flex w-[80vw] flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 md:w-[30rem] md:p-10 dark:bg-neutral-800" @click.stop>
            <!-- prettier-ignore -->
            <label for="new-name" class="text-xl font-semibold">Rename <span class="text-xl font-bold">{{ Object.keys(userStore.user.blueprints[editName])[0] }}</span>?</label>
            <input
              id="new-name"
              type="text"
              class="search-input fo-input grow rounded-full text-left text-black transition duration-500 placeholder:transition placeholder:duration-500 dark:text-white dark:placeholder:text-neutral-300"
              placeholder="Enter new account name"
              v-model="newName"
              required
              minlength="3"
              maxlength="16"
            />
            <button type="submit">Save</button>
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
const router = useRouter();
const userStore = useUserStore();

const toolbar = useTemplateRef("toolbar");
const isSticky = ref(false);
const loading = ref(false);
const success = ref(false);

const closeFilters = ref(false);
const closeSorters = ref(false);
const closeSettings = ref(false);

const editName = ref<number>();
const newName = ref("");

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

function createNewAccount() {
  router.push({ query: { ...route.query, a: props.accountIndex + 1 } });
}

async function saveBlueprints() {
  if (!userStore.user || !userStore.hasUnsavedChanges) return;

  loading.value = true;
  console.log(props.data);
  const { success: fetchSuccess, error } = await $fetch("/api/saveBlueprints", {
    method: "POST",
    body: { uid: route.query.u, accessToken: userStore.user.accessToken, blueprints: props.data, accountIndex: props.accountIndex, accountName: newName.value }
  });
  loading.value = false;
  if (!fetchSuccess && error) console.error(error);
  success.value = true;
  setTimeout(() => {
    userStore.hasUnsavedChanges = false;
    success.value = false;
  }, 1000);
}

async function rename() {
  if (!userStore.user) return;

  const { success: fetchSuccess, error } = await $fetch("/api/saveBlueprints", {
    method: "POST",
    body: { uid: route.query.u, accessToken: userStore.user.accessToken, blueprints: null, accountIndex: props.accountIndex, accountName: newName.value }
  });
  if (!fetchSuccess && error) console.error(error);
  editName.value = undefined;
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
