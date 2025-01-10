import { BlueprintAllShip } from "~/utils/blueprints";
import { MinifiedUserData } from "~/utils/types";
import admin from "firebase-admin";

type Body = {
  uid: string;
  accessToken: string;
  blueprints: BlueprintAllShip[] | null;
  accountIndex: number;
  accountName: string;
};

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as Body;
  const db = admin.firestore();

  try {
    if (body.accountIndex > 9) throw new Error("You can only have 10 saved accounts at the moment. Sorry!");
    const docData = await db.collection("users").doc(body.uid).get();
    const userData = docData.data() as MinifiedUserData | undefined;

    if (!userData) throw new Error("User not found.");
    if (userData.uid !== body.uid || userData.accessToken !== body.accessToken) throw new Error("Invalid credentials.");

    const existingBlueprints = userData.blueprints as Record<string, Record<number, (string | number)[]>[]>[];

    const blueprints = !body.blueprints
      ? null
      : (body.blueprints
          .map((ship) => {
            // @ts-expect-error
            if (!ship.unlocked) return { [ship.id]: [] };
            // @ts-expect-error
            if (!("modules" in ship)) return { [ship.id]: [ship.variant, ship.techPoints] };
            // @ts-expect-error
            return { [ship.id]: [ship.variant, ship.techPoints, ship.modules.filter((mod) => mod.unlocked).map((mod) => mod.system)].flat() };
          })
          .filter((obj) => Object.values(obj)[0].length > 0) as Record<number, (string | number)[]>[]);

    existingBlueprints[body.accountIndex] = {
      [body.accountName]: blueprints ? blueprints : Object.values(existingBlueprints[body.accountIndex])[0]
    };

    await db
      .collection("users")
      .doc(body.uid)
      .update({ blueprints: existingBlueprints, bpLastSaved: new Date().toISOString().slice(0, 10) });
  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong. Try again later." };
  }

  return { success: true, error: null };
});
