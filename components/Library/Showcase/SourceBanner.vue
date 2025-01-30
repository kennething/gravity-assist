<template>
  <div v-if="mod?.type === 'known' && mod.sourcedFrom" class="flex w-full items-center justify-center gap-4 rounded-xl bg-neutral-100/25 p-4 transition duration-500 dark:bg-neutral-900">
    <img class="size-12 select-none transition duration-500 dark:invert" src="/ui/info.svg" aria-hidden="true" />

    <div class="flex flex-col items-center justify-center gap-3 xl:gap-1">
      <h5 class="text-lg">
        This module's data was sourced from <span class="text-lg font-medium">{{ mod.sourcedFrom.join(" & ") }}!</span>
      </h5>
      <span class="inline-flex flex-col items-center justify-center text-sm xl:flex-row xl:gap-1">
        Want to contribute? Check out
        <button class="flex items-center justify-center gap-1 font-medium hover:underline" type="button" @click="router.push({ query: { ...route.query, c: 'true' } })">
          how to contribute
          <span class="du-tooltip" data-tip="Contact">
            <span class="fo-btn fo-btn-circle fo-btn-text size-6 min-h-6">
              <img class="size-4 transition duration-500 dark:invert" src="/ui/contact.svg" alt="Contact me" />
            </span>
          </span>
        </button>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ currentModule: AllModule | undefined }>();

const route = useRoute();
const router = useRouter();

const mod = ref<AllModule>();

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

onMounted(() => {
  if (!props.currentModule) return;
  lastModule = Symbol(props.currentModule.system);
  mod.value = props.currentModule;
});
</script>

<style scoped></style>
