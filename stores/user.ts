export type UserData = {
  uid: string;
  accessToken: string;
};

export type Alert = {
  id: string;
  show: boolean;
  tag: string;
  description: string;
  /** YYYY-MM-DD */
  date: string;
};

export const useUserStore = defineStore("userStore", () => {
  const isDarkMode = ref(false);
  const alert = ref<Alert>();
  const user = ref<UserData>();

  async function init() {
    fetchLatestAlert();
    fetchData();

    const uid = localStorage.getItem("uid");
    const accessToken = localStorage.getItem("token");

    if (uid && accessToken) {
      const { success, error, content } = await $fetch("/api/getUser", { method: "POST", body: { uid, accessToken } });
      if (!success && error) return console.error(error);
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

  async function fetchData() {}

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

  return { isDarkMode, alert, user, init };
});
