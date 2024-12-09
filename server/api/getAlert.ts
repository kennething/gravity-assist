import admin from "firebase-admin";
import { Alert } from "~/stores/user";

export default defineEventHandler(async (event) => {
  const db = admin.firestore();

  let returnData: Alert | null = null;

  try {
    const querySnapshot = await db.collection("alerts").orderBy("date", "desc").limit(1).get();
    if (querySnapshot.empty) throw new Error("No alerts found.");

    returnData = querySnapshot.docs[0].data() as Alert;
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong. Try again later.", content: null };
  }

  return { success: true, error: null, content: returnData };
});
