<template>
    <div class="flex flex-col items-center justify-center">
        <img src="/logo.svg" alt="" />
        <img src="/gravityAssist.svg" alt="" />
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

onMounted(() => {});
</script>

<style scoped></style>
