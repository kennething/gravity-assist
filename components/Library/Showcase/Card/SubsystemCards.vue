<template>
  <div class="flex w-full flex-wrap items-stretch justify-center gap-5">
    <LibraryShowcaseCardSubsystemCard v-if="mod?.type === 'known'" v-for="subsystem in mod.subsystems" :key="Symbol(subsystem.name)" :subsystem="subsystem" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ currentModule: AllModule | undefined }>();

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
