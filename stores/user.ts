export const useUserStore = defineStore("userStore", () => {
  const isDarkMode = ref(false);
  const alert = ref<Alert>();
  const user = ref<UserData>();
  const shipData = ref<AllShip[]>();
  const shipDifficulties = ref<Record<string, number>>();

  // blueprint tracker
  const blueprintsAutosave = ref<BlueprintAllShip[]>();
  const hasUnsavedChanges = ref(false);

  async function init() {
    getUser();
    fetchLatestAlert();
    fetchShipData();

    async function getUser() {
      const uid = localStorage.getItem("uid");
      const accessToken = localStorage.getItem("token");

      if (uid && accessToken) {
        const { success, error, content } = await $fetch("/api/getUser", { method: "POST", body: { uid, accessToken } });
        if (!success && error !== "User not found.") return console.error(error);
        if (success && content) {
          user.value = content;
          localStorage.setItem("uid", content.uid);
          localStorage.setItem("token", content.accessToken);
          return;
        }
      }

      const { success, error, content } = await $fetch("/api/createUser");
      if (!success && error) return console.error(error);
      if (success && content) {
        user.value = content;
        localStorage.setItem("uid", content.uid);
        localStorage.setItem("token", content.accessToken);
        return;
      }
    }

    async function fetchShipData() {
      const { data, difficulty } = await $fetch("/api/data/ships");
      shipData.value = data;
      shipDifficulties.value = difficulty;
    }

    async function fetchLatestAlert() {
      const { success, error, content } = await $fetch("/api/getAlert");
      if (!success && error) return console.error(error);

      if (success && content) {
        alert.value = content;

        const latestClosedAlert = localStorage.getItem("alert");
        if (!latestClosedAlert) return (alert.value.show = true);
        alert.value.show = latestClosedAlert !== alert.value.id;
      }
    }
  }

  return { isDarkMode, alert, user, shipData, shipDifficulties, blueprintsAutosave, hasUnsavedChanges, init };
});
