<template>
  <HomeHeader @toggle="showSidebar = !showSidebar" />

  <div class="flex h-[calc(100svh-4rem)] w-full items-start justify-between">
    <Transition name="sidebar">
      <HomeSideBar v-show="showSidebar" @contributors="showContributors = true" @changelog="showChangelog = true" @contact="showContact = true" />
    </Transition>

    <div class="h-full shrink-0 transition-all duration-[0.75s]" :class="showSidebar ? 'w-72' : 'w-0'" aria-hidden="true"></div>

    <div class="flex w-full flex-col items-center justify-center">
      <slot></slot>
      <HomeFooter />
    </div>
  </div>

  <Transition name="menu">
    <div class="fixed left-0 top-0 z-20 flex h-svh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" v-if="showContributors" @click="showContributors = false">
      <HomeContributors />
    </div>
  </Transition>

  <Transition name="menu">
    <div class="fixed left-0 top-0 z-20 flex h-svh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" v-if="showChangelog" @click="showChangelog = false">
      <HomeChangelog />
    </div>
  </Transition>

  <Transition name="menu">
    <div class="fixed left-0 top-0 z-20 flex h-svh w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]" v-if="showContact" @click="showContact = false">
      <div id="menu" class="h-96 w-96 bg-white p-10" @click.stop>
        <p>menu</p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { LocationQuery } from "vue-router";

const route = useRoute();
const router = useRouter();

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

onMounted(() => {
  handleQueries(route.query);
});

function handleQueries(query: LocationQuery) {
  const changelog = query.v;
  const contributors = query.ct;
  const contact = query.c;

  if (contact) showContact.value = true;
  else if (changelog) {
    showChangelog.value = true;
    console.log(changelog);
  } else if (contributors) {
    showContributors.value = true;
  }
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
