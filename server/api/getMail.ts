import { SaveTemplate, TruncatedOp, UserData } from "~/utils/types";
import { untruncateOps } from "~/utils/functions";
import admin from "firebase-admin";

type Body = {
  uid: string;
  mailId: string;
};

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as Body;
  const db = admin.firestore();

  let mail: SaveTemplate | null = null;

  try {
    const docData = await db.collection("users").doc(body.uid).get();
    const userData = docData.data() as UserData | undefined;

    if (!userData) throw new Error("User not found.");

    const foundMail = userData.savedMails.find((mail) => mail.id === body.mailId);
    if (!foundMail) throw new Error("Mail not found.");

    foundMail.ops = untruncateOps(foundMail.ops as TruncatedOp[]);
    mail = foundMail;
  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong. Try again later.", content: null };
  }

  return { success: true, error: null, content: mail };
});
