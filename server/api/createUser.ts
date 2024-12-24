import { getRandomCharacters } from "~/utils/functions";
import { UserData } from "~/utils/types";
import admin from "firebase-admin";

async function generateUid() {
  const db = admin.firestore();
  const uid = getRandomCharacters(12, "numeric");

  const docData = await db.collection("users").doc(uid).get();
  if (docData.exists) return await generateUid();

  return uid;
}

export default defineEventHandler(async (event) => {
  const db = admin.firestore();

  let data: UserData | null = null;

  try {
    const uid = await generateUid();
    const accessToken = getRandomCharacters(50);

    data = {
      uid,
      accessToken,
      savedMails: [],
      blueprints: []
    };

    await db.collection("users").doc(uid).create(data);
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong. Try again later.", content: null };
  }

  return { success: true, error: null, content: data };
});
