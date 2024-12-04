<template>
    <div class="flex flex-col items-center justify-center">
        <nav class="fo-navbar rounded-box justify-between gap-4 shadow">
            <div class="fo-navbar-start">
                <button type="button" class="fo-dropdown-toggle fo-btn fo-btn-text fo-btn-circle">
                    <span class="icon-[tabler--menu-2] size-5"></span>
                </button>
            </div>
            <div class="fo-navbar-center flex items-center">
                <a class="fo-link text-base-content/90 fo-link-neutral text-xl font-semibold no-underline" href="#"> FlyonUI </a>
            </div>
            <div class="fo-navbar-end items-center gap-4">
                <button class="fo-btn fo-btn-sm fo-btn-text fo-btn-circle size-[2.125rem] sm:hidden">
                    <span class="icon-[tabler--search] size-[1.375rem]"></span>
                </button>
                <label class="fo-input-group hidden max-w-56 rounded-full sm:flex">
                    <span class="fo-input-group-text">
                        <span class="icon-[tabler--search] text-base-content/80 size-5"></span>
                    </span>
                    <input type="search" class="fo-input grow rounded-e-full" placeholder="Search" />
                </label>
                <label class="du-swap du-swap-rotate">
                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox" class="theme-controller hidden" value="synthwave" />
                    <img class="du-swap-off size-10" src="/ui/sun.svg" aria-hidden="true" />
                    <img class="du-swap-on size-10" src="/ui/moon.svg" aria-hidden="true" />
                </label>
            </div>
        </nav>

        <slot class="min-h-screen"></slot>

        <footer class="mt-4 fo-footer w-screen bg-base-200/60 px-10 py-4">
            <div class="flex w-full items-center justify-center">
                <div class="flex items-center justify-start gap-1 text-xl font-bold w-1/3">
                    <img class="size-8" src="/logo/logo.svg" aria-hidden="true" />
                    <img class="h-8" src="/logo/gravityAssist.svg" aria-hidden="true" />
                </div>
                <aside class="flex items-center justify-center w-1/3">
                    <p>Gravity Assist v1.5.0 by DubNubz</p>
                </aside>
                <div class="flex h-5 gap-4 w-1/3 justify-end">
                    <a href="https://github.com/DubNubz/gravity-assist" target="_blank" class="fo-link" aria-label="Github Link">
                        <img class="size-6 dark:invert" src="/logo/github.svg" aria-hidden="true" />
                    </a>
                    <a href="https://discord.com/invite/9mJ9b2Bbzx" target="_blank" class="fo-link" aria-label="Discord Link">
                        <img class="size-6 dark:invert" src="/logo/discord.svg" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

onMounted(() => {});
</script>

<style scoped></style>
