import admin from "firebase-admin";

type Body = {
  uid: string;
};

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as Body;
  const db = admin.firestore();

  let blueprints: (string | number)[][] = [];
  let lastSaved: string | null = null;

  try {
    const docData = await db.collection("users").doc(body.uid).get();
    const userData = docData.data();

    if (!userData) throw new Error("User not found.");

    if (!userData.bpLastSaved || userData.blueprints.length === 0) throw new Error("No blueprints found.");

    const ships = userData.blueprints as Record<number, (string | number)[]>[];
    blueprints = ships.map((ship) => [Number(Object.keys(ship)[0]), Object.values(ship)[0]].flat());
    lastSaved = userData.bpLastSaved;
  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong. Try again later.", content: null, lastSaved: null };
  }

  return { success: true, error: null, content: blueprints, lastSaved };
});
