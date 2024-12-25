import { TruncatedOp, UserData } from "~/utils/types";
import { untruncateOps } from "~/utils/functions";
import admin from "firebase-admin";

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

    userData.lastLoggedIn = new Date().toISOString().slice(0, 10);
    await db.collection("users").doc(body.uid).update(userData);

    userData.savedMails.forEach((mail) => (mail.ops = untruncateOps(mail.ops as TruncatedOp[])));
    returnData = userData;
  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong. Try again later.", content: null };
  }

  return { success: true, error: null, content: returnData };
});
