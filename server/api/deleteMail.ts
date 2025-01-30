import { SaveTemplate, UserData } from "~/utils/types";
import admin from "firebase-admin";

interface Body {
  uid: string;
  accessToken: string;
  mailId: string;
}

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as Body;
  const db = admin.firestore();

  let outcomeMails: SaveTemplate[] | null = null;

  try {
    const docData = await db.collection("users").doc(body.uid).get();
    const userData = docData.data() as UserData | undefined;

    if (!userData) throw new Error("User not found.");
    if (userData.uid !== body.uid || userData.accessToken !== body.accessToken) throw new Error("Invalid credentials.");

    const savedMails = userData.savedMails;
    const mailIndex = savedMails.findIndex((mail) => mail.id === body.mailId);
    if (mailIndex === -1) throw new Error("Mail not found.");

    savedMails.splice(mailIndex, 1);
    outcomeMails = savedMails;
    await db.collection("users").doc(body.uid).update({ savedMails });
  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong. Try again later.", content: null };
  }

  return { success: true, error: null, content: outcomeMails };
});
