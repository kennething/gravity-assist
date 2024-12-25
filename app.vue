<template>
  <HomeHeader @toggle="showSidebar = !showSidebar" />

  <div class="flex h-full min-h-[calc(100dvh-4rem)] w-full items-start justify-between">
    <Transition name="sidebar">
      <HomeSideBar v-show="showSidebar" @contributors="showContributors = true" @changelog="showChangelog = true" @contact="showContact = true" @close="closeSidebarMobile" />
    </Transition>
    <div class="fixed left-0 top-0 z-10 h-dvh w-screen md:hidden" v-if="showSidebar" @click="showSidebar = false"></div>

    <div class="h-full w-0 shrink-0 transition-all duration-[0.75s]" :class="{ 'md:w-72': showSidebar }" aria-hidden="true"></div>

    <div class="flex w-full flex-col items-center justify-center">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <HomeFooter />
    </div>
  </div>

  <Transition name="menu">
    <div class="fixed left-0 top-0 z-20 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" v-if="showContributors" @click="showContributors = false">
      <HomeContributors />
    </div>
  </Transition>

  <Transition name="menu">
    <div class="fixed left-0 top-0 z-20 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" v-if="showChangelog" @click="showChangelog = false">
      <HomeChangelog />
    </div>
  </Transition>

  <Transition name="menu">
    <div class="fixed left-0 top-0 z-20 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" v-show="showContact" @click="showContact = false">
      <HomeContact />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { LocationQuery } from "vue-router";

const config = useRuntimeConfig();

const title = "Gravity Assist";
const description = "Create colored text, search modules and research paths, design custom fleets, and more. Gravity Assist is an all-in-one tool for anything you may need in Infinite Lagrange.";
useSeoMeta({
  author: "DubNubz",
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogSiteName: title,
  ogUrl: () => config.public.baseUrl,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterImage: () => config.public.baseUrl + "/logo/logo.png",
  twitterDescription: description
});

const route = useRoute();
const router = useRouter();

const userStore = useUserStore();
const { isDarkMode } = storeToRefs(userStore);
watch(isDarkMode, () => {
  document.body.classList.toggle("dark", isDarkMode.value);
  localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
});

// app init
onMounted(() => {
  if (localStorage.getItem("theme") === "dark") isDarkMode.value = true;
  document.body.style.display = "block";
  userStore.init();
});

onBeforeMount(() => {
  if (window.innerWidth < 768) showSidebar.value = false;
});

// sidebar
onMounted(() => {
  handleQueries(route.query);

  let previousWidth = window.innerWidth;
  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    if (previousWidth === newWidth) return;

    showSidebar.value = window.innerWidth >= 768;
    previousWidth = newWidth;
  });
});

// layout

const showSidebar = ref(true);
const showContributors = ref(false);
watch(showContributors, (value) => {
  if (!value) return router.push({ query: undefined });
  if (!route.query.ct) router.push({ query: { ct: "true" } });
});
const showChangelog = ref(false);
watch(showChangelog, (value) => {
  if (!value) return router.push({ query: undefined });
  if (!route.query.v) router.push({ query: { v: changelog[changelog.length - 1].version } });
});
const showContact = ref(false);
watch(showContact, (value) => {
  if (!value) return router.push({ query: undefined });
  if (!route.query.c) router.push({ query: { c: "true" } });
});

watch(
  () => route.query,
  (query) => {
    handleQueries(query);
  }
);

function handleQueries(query: LocationQuery) {
  const changelog = query.v;
  const contributors = query.ct;
  const contact = query.c;

  if (changelog || contributors || contact) {
    showContact.value = false;
    showChangelog.value = false;
    showContributors.value = false;
  }

  if (contact) showContact.value = true;
  else if (changelog) showChangelog.value = true;
  else if (contributors) showContributors.value = true;
}

function closeSidebarMobile() {
  if (window.innerWidth < 768) showSidebar.value = false;
}
</script>

<style lang="scss" scoped>
.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.5s ease-in-out;
}

.sidebar-enter-from,
.sidebar-leave-to {
  transform: translateX(-20rem);
}

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
