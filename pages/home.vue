<template>
    <div class="flex flex-col items-center justify-center">
        <h1>Home</h1>
        <input class="du-input" type="text" />
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <img class="w-4 h-4" src="/ui/credits.svg" alt="" />
            </div>
            <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="sagsagsag"
                type="text"
            />
        </div>
        <label class="fo-input-group max-w-sm">
            <span class="fo-input-group-text">
                <img class="w-4 h-4" src="/ui/credits.svg" alt="" />
            </span>
            <input type="text" class="fo-input grow" placeholder="John Doe" />
        </label>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

onMounted(() => {});
</script>

<style scoped></style>
