<template>
  <div class="relative flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-neutral-100/25 p-4 transition duration-500 dark:bg-neutral-900">
    <img class="absolute left-0 top-0 size-8 rounded-br-lg rounded-tl-xl" v-if="mod" :src="mod.img" :alt="mod.system" loading="lazy" />
    <h3 class="text-xl transition duration-500">
      <span class="text-2xl font-semibold transition duration-500">{{ mod?.system ?? "404" }}</span
      >: <span class="transition duration-500" v-if="mod?.type === 'known'" v-for="part in italicize(mod.name)" :class="{ italic: part[1] }">{{ part[0] }}</span>
      <span class="transition duration-500" v-else>Unknown Module</span>
    </h3>

    <LibraryShowcaseKnownHero v-if="mod?.type === 'known'" :mod="mod" />
    <LibraryShowcaseUnknownHero v-else />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentModule: AllModule | undefined;
}>();

let lastModule: symbol | undefined;
watch(
  () => props.currentModule,
  (newModule) => {
    if (newModule) {
      lastModule = Symbol(newModule?.system);
      return (mod.value = newModule);
    }

    // i love naming variables
    const thisModule = lastModule;
    setTimeout(() => {
      if (thisModule === lastModule) mod.value = undefined;
    }, 700);
  }
);

const route = useRoute();
const router = useRouter();

const mod = ref<AllModule>();

onMounted(() => {
  if (!props.currentModule) return;
  lastModule = Symbol(props.currentModule.system);
  mod.value = props.currentModule;
});
</script>

<style scoped></style>
