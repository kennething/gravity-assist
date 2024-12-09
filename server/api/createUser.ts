import admin from "firebase-admin";
import { UserData } from "~/stores/user";
import { getRandomItem } from "~/utils/functions";

async function generateUid() {
  const db = admin.firestore();
  const numbers = "0123456789";
  let uid = "";

  for (let i = 0; i < 12; i++) {
    uid += getRandomItem(numbers);
  }

  const docData = await db.collection("users").doc(uid).get();
  if (docData.exists) return await generateUid();

  return uid;
}

function generateAccessToken() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let accessToken = "";
  for (let i = 0; i < 50; i++) {
    accessToken += getRandomItem(characters);
  }
  return accessToken;
}

export default defineEventHandler(async (event) => {
  const db = admin.firestore();

  let data: UserData | null = null;

  try {
    const uid = await generateUid();
    const accessToken = generateAccessToken();

    data = {
      uid,
      accessToken
    };

    await db.collection("users").doc(uid).create(data);
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong. Try again later.", content: null };
  }

  return { success: true, error: null, content: data };
});
