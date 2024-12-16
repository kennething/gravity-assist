<template>
  <aside id="default-sidebar" class="fixed left-0 z-20 h-[calc(100dvh-4rem)] w-72" aria-label="Sidebar" @click.stop>
    <div class="flex h-full w-full flex-col items-center justify-between overflow-y-auto bg-neutral-50 px-3 py-4 transition duration-500 dark:bg-neutral-900">
      <ul class="w-full space-y-2 font-medium">
        <li v-for="button in navButtons" :key="button.displayName">
          <button
            type="button"
            v-if="button.disabled"
            disabled
            class="group flex w-full cursor-not-allowed items-center rounded-lg bg-neutral-200 p-2 text-neutral-900 transition duration-500 dark:bg-neutral-700"
          >
            <img class="size-6 transition duration-300 dark:invert" :src="button.src" :alt="'Go to ' + (button.altName ?? button.displayName)" />
            <span class="ms-3" :class="{ 'flex-1 whitespace-nowrap text-left': button.tag }">{{ button.displayName }}</span>
            <span v-if="button.tag" class="ms-3 inline-flex items-center justify-center rounded-full px-2 text-sm font-medium text-neutral-800" :class="button.tag.color">{{ button.tag.name }}</span>
          </button>
          <NuxtLink
            v-else
            :to="button.route"
            class="group flex items-center rounded-lg p-2 text-neutral-900 transition duration-500 hover:bg-neutral-200/50 hover:duration-150 dark:hover:bg-neutral-800"
            :class="{ 'bg-neutral-200/50 dark:bg-neutral-800': route.path === button.route }"
            @click="emit('close')"
          >
            <img
              class="size-6 transition duration-300 group-hover:scale-110 dark:invert"
              :class="{ 'scale-110': route.path === button.route }"
              :src="button.src"
              :alt="'Go to ' + (button.altName ?? button.displayName)"
            />
            <span class="ms-3" :class="{ 'flex-1 whitespace-nowrap': button.tag, 'font-bold': route.path === button.route }">{{ button.displayName }}</span>
            <span v-if="button.tag" class="ms-3 inline-flex items-center justify-center rounded-full px-2 text-sm font-medium text-neutral-800" :class="button.tag.color">{{ button.tag.name }}</span>
          </NuxtLink>
        </li>

        <Transition name="alert">
          <div class="mt-6 rounded-lg bg-blue-50 p-4 transition duration-500 dark:bg-blue-900" role="alert" v-if="alert && alert.show">
            <div class="mb-3 flex items-center">
              <span class="me-2 rounded bg-orange-100 px-2.5 py-0.5 text-sm font-semibold text-orange-800 transition duration-500 dark:bg-orange-200 dark:text-orange-900">{{ alert.tag }}</span>
              <button
                type="button"
                class="-mx-1.5 -my-1.5 ms-auto inline-flex h-6 w-6 items-center justify-center rounded-lg p-0.5 transition duration-500 hover:bg-blue-200 dark:hover:bg-blue-800"
                aria-label="Close"
                @click="closeAlert"
              >
                <img class="size-6 transition duration-500 dark:invert" src="/ui/close.svg" aria-hidden="true" />
              </button>
            </div>
            <p class="mb-3 text-sm text-blue-800 transition duration-500 dark:text-blue-200">{{ alert.description }}</p>
            <p class="text-xs text-blue-900 transition duration-500 dark:text-blue-300">
              {{ new Intl.DateTimeFormat(undefined, { dateStyle: "short", timeZone: "UTC" }).format(new Date(alert.date)) }}
            </p>
          </div>
        </Transition>
      </ul>
      <div class="flex w-full items-center justify-center font-medium">
        <div class="du-tooltip" data-tip="Contributors">
          <button type="button" class="fo-btn fo-btn-circle fo-btn-text dark:hover:bg-neutral-700" @click="emit('contributors')">
            <img class="size-7 transition duration-500 dark:invert" src="/ui/contributors.svg" alt="Toggle side menu" />
          </button>
        </div>

        <div class="du-divider du-divider-horizontal before:transition before:duration-500 after:transition after:duration-500 dark:before:bg-neutral-600 dark:after:bg-neutral-600"></div>

        <div class="du-tooltip" data-tip="Info">
          <button type="button" class="fo-btn fo-btn-circle fo-btn-text dark:hover:bg-neutral-700" @click="emit('changelog')">
            <img class="size-7 transition duration-500 dark:invert" src="/ui/info.svg" alt="Toggle side menu" />
          </button>
        </div>

        <div class="du-divider du-divider-horizontal before:transition before:duration-500 after:transition after:duration-500 dark:before:bg-neutral-600 dark:after:bg-neutral-600"></div>

        <div class="du-tooltip" data-tip="Contact">
          <button type="button" class="fo-btn fo-btn-circle fo-btn-text dark:hover:bg-neutral-700" @click="emit('contact')">
            <img class="size-6 transition duration-500 dark:invert" src="/ui/contact.svg" alt="Toggle side menu" />
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  contributors: [void];
  changelog: [void];
  contact: [void];
  close: [void];
}>();

const route = useRoute();
const userStore = useUserStore();
const { alert } = storeToRefs(userStore);

function closeAlert() {
  if (!alert.value) return;
  alert.value.show = false;
  localStorage.setItem("alert", alert.value.id);
}

type NavButton = {
  displayName: string;
  altName?: string;
  src: string;
  route: string;
  disabled?: true;
  tag?: {
    name: string;
    /** Provided as a Tailwind class.
     * @example bg-blue-100
     */
    color: string;
  };
};

const navButtons: NavButton[] = [
  {
    displayName: "Home",
    src: "/ui/home.svg",
    route: "/home"
  },
  {
    displayName: "Encyclopedia",
    src: "/ui/moduleLibrary.svg",
    route: "/modules/encyclopedia",
    tag: {
      name: "Updated",
      color: "bg-blue-100"
    }
  },
  {
    displayName: "Blueprint Tracker",
    src: "/ui/bpTracker.svg",
    route: "/modules/blueprint-tracker",
    tag: {
      name: "New",
      color: "bg-orange-100"
    }
  },
  {
    displayName: "Mail Editor",
    src: "/ui/mailEditor.svg",
    route: "/modules/mail-editor",
    tag: {
      name: "New",
      color: "bg-orange-100"
    }
  },
  {
    displayName: "RA Helper",
    altName: "Research Agreement Helper",
    src: "/ui/researchAgreement.svg",
    route: "/modules/research-agreement-helper"
  },
  {
    displayName: "Color Generator",
    src: "/ui/colorGenerator.svg",
    route: "/modules/color-generator",
    tag: {
      name: "Updated",
      color: "bg-green-100"
    }
  },
  {
    displayName: "Fleet Builder",
    src: "/ui/fleetBuilder.svg",
    route: "/",
    disabled: true,
    tag: {
      name: "Soon!",
      color: "bg-neutral-100"
    }
  }
];
</script>

<style scoped>
.alert-enter-active,
.alert-leave-active {
  transition: all 0.5s ease-in-out;
}

.alert-enter-from,
.alert-leave-to {
  opacity: 0;
  transform: translateX(-20rem);
}
</style>
