import admin from "firebase-admin";
import { UserData } from "~/stores/user";

type Body = {
  uid: string;
  accessToken: string;
};

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as Body;
  const db = admin.firestore();

  let returnData: UserData | null = null;

  try {
    const docData = await db.collection("users").doc(body.uid).get();
    const userData = docData.data() as UserData | undefined;

    if (!userData) throw new Error("User not found.");
    if (userData.uid !== body.uid || userData.accessToken !== body.accessToken) throw new Error("Invalid credentials.");

    returnData = userData;
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong. Try again later.", content: null };
  }

  return { success: true, error: null, content: returnData };
});
