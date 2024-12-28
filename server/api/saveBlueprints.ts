import { BlueprintAllShip } from "~/utils/blueprints";
import { UserData } from "~/utils/types";
import admin from "firebase-admin";

type Body = {
  uid: string;
  accessToken: string;
  blueprints: BlueprintAllShip[];
};

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as Body;
  const db = admin.firestore();

  try {
    const docData = await db.collection("users").doc(body.uid).get();
    const userData = docData.data() as UserData | undefined;

    if (!userData) throw new Error("User not found.");
    if (userData.uid !== body.uid || userData.accessToken !== body.accessToken) throw new Error("Invalid credentials.");

    const blueprints = body.blueprints
      .map((ship, index) => {
        if (!ship.unlocked) return { [index]: [] };
        // @ts-expect-error
        if (!("modules" in ship)) return { [index]: [ship.name, ship.variant, ship.techPoints] };
        // @ts-expect-error
        return { [index]: [ship.name, ship.variant, ship.techPoints, ship.modules.filter((mod) => mod.unlocked).map((mod) => mod.system)].flat() };
      })
      .filter((obj) => Object.values(obj)[0].length > 0) as Record<number, (string | number)[]>[];

    await db
      .collection("users")
      .doc(body.uid)
      .update({ blueprints, bpLastSaved: new Date().toISOString().slice(0, 10) });
  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong. Try again later." };
  }

  return { success: true, error: null };
});
