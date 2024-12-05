export const useUserStore = defineStore("userStore", () => {
  const isDarkMode = ref(false);

  return { isDarkMode };
});
