import { BlueprintAllShip } from "~/utils/blueprints";
import { MinifiedUserData } from "~/utils/types";
import admin from "firebase-admin";
import { getObjectValue } from "~/utils/functions";

type Body = {
  uid: string;
  accessToken: string;
  accountIndex: number;
};

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as Body;
  const db = admin.firestore();

  let newBlueprints: Record<string, Record<number, (string | number)[]>[]>[] | null = null;

  try {
    const docData = await db.collection("users").doc(body.uid).get();
    const userData = docData.data() as MinifiedUserData | undefined;

    if (!userData) throw new Error("User not found.");
    if (userData.uid !== body.uid || userData.accessToken !== body.accessToken) throw new Error("Invalid credentials.");

    const existingBlueprints = userData.blueprints as Record<string, Record<number, (string | number)[]>[]>[];
    existingBlueprints.splice(body.accountIndex, 1);

    newBlueprints = existingBlueprints;

    await db
      .collection("users")
      .doc(body.uid)
      .update({ blueprints: existingBlueprints, bpLastSaved: new Date().toISOString().slice(0, 10) });
  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong. Try again later.", newBlueprints: null };
  }

  return { success: true, error: null, newBlueprints };
});
