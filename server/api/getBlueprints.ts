import { getObjectKey, getObjectValue } from "~/utils/functions";
import admin from "firebase-admin";

interface Body {
  uid: string;
  accountIndex: number;
}

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as Body;
  const db = admin.firestore();

  let blueprints: (string | number)[][] = [];
  let lastSaved: string | null = null;
  let accountName: string | null = null;
  let unassignedTp: number[] | null = null;

  try {
    const docData = await db.collection("users").doc(body.uid).get();
    const userData = docData.data();

    if (!userData) throw new Error("User not found.");

    if (!userData.bpLastSaved || userData.blueprints[body.accountIndex] === undefined || (getObjectValue(userData.blueprints[body.accountIndex]) as Record<number, (string | number)[]>[]).length === 0)
      throw new Error("No blueprints found.");

    accountName = getObjectKey(userData.blueprints[body.accountIndex]);
    const ships = getObjectValue(userData.blueprints[body.accountIndex]) as Record<number, (string | number)[]>[];

    if (Number(getObjectKey(ships[0])) === 999) {
      const [unassignedTp2] = ships.splice(0, 1);
      unassignedTp = getObjectValue(unassignedTp2) as number[];
    }

    blueprints = ships.map((ship) => [Number(getObjectKey(ship)), getObjectValue(ship)].flat());
    lastSaved = userData.bpLastSaved;
  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong. Try again later.", content: null, lastSaved: null, accountName: null, unassignedTp: null };
  }

  return { success: true, error: null, content: blueprints, lastSaved, accountName, unassignedTp };
});
