<template>
  <aside id="default-sidebar" class="fixed left-0 h-[calc(100svh-4rem)] w-72" aria-label="Sidebar">
    <div class="flex h-full w-full flex-col items-center justify-between overflow-y-auto transition duration-500 bg-neutral-50 px-3 py-4 dark:bg-neutral-800">
      <ul class="w-full space-y-2 font-medium">
        <li v-for="button in navButtons" :key="button.displayName">
          <button v-if="button.disabled" disabled class="cursor-not-allowed group flex w-full items-center rounded-lg bg-neutral-200 p-2 text-neutral-900 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600 transition duration-500">
            <img class="dark:invert size-6 transition duration-300" :src="button.src" :alt="'Go to ' + (button.altName ?? button.displayName)" />
            <span class="ms-3" :class="{ 'flex-1 whitespace-nowrap text-left': button.tag }">{{ button.displayName }}</span>
            <span
              v-if="button.tag"
              class="ms-3 inline-flex items-center justify-center rounded-full px-2 text-sm font-medium text-neutral-800"
              :class="button.tag.color"
              >{{ button.tag.name }}</span
            >
          </button>
          <NuxtLink v-else :to="button.route" class="group flex items-center rounded-lg p-2 text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 transition">
            <img class="size-6 dark:invert transition duration-300 group-hover:scale-110" :src="button.src" :alt="'Go to ' + (button.altName ?? button.displayName)" />
            <span class="ms-3" :class="{ 'flex-1 whitespace-nowrap': button.tag }">{{ button.displayName }}</span>
            <span
              v-if="button.tag"
              class="ms-3 inline-flex items-center justify-center rounded-full px-2 text-sm font-medium text-neutral-800"
              :class="button.tag.color"
              >{{ button.tag.name }}</span
            >
          </NuxtLink>
        </li>

        <Transition name="alert">
          <div class="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900 transition duration-500" role="alert" v-if="alert && alert.show">
            <div class="mb-3 flex items-center">
              <span class="me-2 rounded bg-orange-100 px-2.5 py-0.5 text-sm font-semibold text-orange-800 dark:bg-orange-200 dark:text-orange-900">{{ alert.tag }}</span>
              <button
                type="button"
                class="-mx-1.5 -my-1.5 ms-auto inline-flex h-6 w-6 items-center justify-center rounded-lg p-0.5 transition hover:bg-blue-200 dark:hover:bg-blue-800"
                aria-label="Close"
                @click="alert.show = false"
              >
                <img class="size-6 dark:invert" src="/ui/close.svg" aria-hidden="true" />
              </button>
            </div>
            <p class="mb-3 text-sm text-blue-800 dark:text-blue-200">{{ alert.description }}</p>
            <p class="text-xs text-blue-900 dark:text-blue-300">{{ new Intl.DateTimeFormat(undefined, { dateStyle: "short" }).format(new Date(alert.date)) }}</p>
          </div>
        </Transition>
      </ul>
      <div class="flex w-full items-center justify-center font-medium">
        <div class="du-tooltip" data-tip="Contributors">
          <button type="button" class="fo-btn fo-btn-circle fo-btn-text" @click="emit('contributors')">
            <img class="size-7 dark:invert" src="/ui/contributors.svg" alt="Toggle side menu" />
          </button>
        </div>

        <div class="du-divider du-divider-horizontal dark:before:bg-neutral-600 dark:after:bg-neutral-600 before:transition before:duration-500 after:transition after:duration-500"></div>

        <div class="du-tooltip" data-tip="Info">
          <button type="button" class="fo-btn fo-btn-circle fo-btn-text" @click="emit('changelog')">
            <img class="size-7 dark:invert" src="/ui/info.svg" alt="Toggle side menu" />
          </button>
        </div>

        <div class="du-divider du-divider-horizontal dark:before:bg-neutral-600 dark:after:bg-neutral-600 before:transition before:duration-500 after:transition after:duration-500"></div>

        <div class="du-tooltip" data-tip="Contact">
          <button type="button" class="fo-btn fo-btn-circle fo-btn-text" @click="emit('contact')">
            <img class="size-6 dark:invert" src="/ui/contact.svg" alt="Toggle side menu" />
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
}>();

type Alert = {
  show: boolean;
  tag: string;
  description: string;
  /** YYYY-MM-DD */
  date: string;
};

const alert = ref<Alert>({
  show: true,
  tag: "New",
  description: "Brand new UI! Contact me if you have any feedback or encounter any bugs :)",
  date: "2024-12-04"
});

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
    route: "/",
    tag: {
      name: "New",
      color: "bg-blue-100"
    }
  },
  {
    displayName: "RA Helper",
    altName: "Research Agreement Helper",
    src: "/ui/researchAgreement.svg",
    route: "/"
  },
  {
    displayName: "Color Generator",
    src: "/ui/colorGenerator.svg",
    route: "/"
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
