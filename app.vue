<template>
  <HomeHeader @toggle="showSidebar = !showSidebar" />

  <div class="flex h-full min-h-[calc(100dvh-4rem)] w-full items-start justify-between">
    <Transition name="sidebar">
      <HomeSideBar v-show="showSidebar" @contributors="showContributors = true" @changelog="showChangelog = true" @contact="showContact = true" @close="closeSidebarMobile" />
    </Transition>
    <div v-if="showSidebar" class="fixed left-0 top-0 z-10 h-dvh w-screen md:hidden" @click="showSidebar = false"></div>

    <div class="h-full w-0 shrink-0 transition-all duration-[0.75s]" :class="{ 'md:w-72': showSidebar }" aria-hidden="true"></div>

    <div class="flex w-full flex-col items-center justify-center">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <HomeFooter />
    </div>
  </div>

  <Transition name="menu">
    <div v-if="showContributors" class="fixed left-0 top-0 z-20 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" @click="showContributors = false">
      <HomeContributors />
    </div>
  </Transition>

  <Transition name="menu">
    <div v-if="showChangelog" class="fixed left-0 top-0 z-20 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" @click="showChangelog = false">
      <HomeChangelog />
    </div>
  </Transition>

  <Transition name="menu">
    <div v-show="showContact" class="fixed left-0 top-0 z-20 flex h-dvh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" @click="showContact = false">
      <HomeContact />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { LocationQuery } from "vue-router";

const config = useRuntimeConfig();

useSeoMeta({
  ogUrl: () => config.public.baseUrl,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterImage: () => `${config.public.baseUrl}/logo/logo.png`
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
  window.location.href = "https://gravityassist.xyz/home";
})

// sidebar
const showSidebar = ref(true);

onBeforeMount(() => {
  if (window.innerWidth < 768) showSidebar.value = false;
});

// layout
const showContributors = ref(false);
watch(showContributors, (value) => {
  if (!value) return void router.replace({ query: { ...route.query, ct: undefined } });
  if (!route.query.ct) void router.replace({ query: { ...route.query, ct: "true" } });
});
const showChangelog = ref(false);
watch(showChangelog, (value) => {
  if (!value) return void router.replace({ query: { ...route.query, v: undefined } });
  if (!route.query.v) void router.replace({ query: { ...route.query, v: changelog[changelog.length - 1].version } });
});
const showContact = ref(false);
watch(showContact, (value) => {
  if (!value) return void router.replace({ query: { ...route.query, c: undefined } });
  if (!route.query.c) void router.replace({ query: { ...route.query, c: "true" } });
});

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
watch(
  () => route.query,
  (query) => handleQueries(query)
);

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
