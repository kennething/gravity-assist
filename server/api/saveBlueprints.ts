import { BlueprintAllShip } from "~/utils/blueprints";
import { getObjectValue } from "~/utils/functions";
import { MinifiedUserData } from "~/utils/types";
import admin from "firebase-admin";

interface Body {
  uid: string;
  accessToken: string;
  blueprints: BlueprintAllShip[] | null;
  unassignedTp: [fighter: number, corvette: number, frigate: number, destroyer: number, cruiser: number, battlecruiser: number, auxiliaryShip: number, carrier: number, battleship: number];
  accountIndex: number;
  accountName: string;
}

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as Body;
  const db = admin.firestore();

  let newBlueprints: Record<string, Record<number, (string | number)[]>[]>[] | null = null;

  try {
    if (body.accountIndex > 9) throw new Error("You can only have 10 saved accounts at the moment. Sorry!");
    const docData = await db.collection("users").doc(body.uid).get();
    const userData = docData.data() as MinifiedUserData | undefined;

    if (!userData) throw new Error("User not found.");
    if (userData.uid !== body.uid || userData.accessToken !== body.accessToken) throw new Error("Invalid credentials.");

    const existingBlueprints = userData.blueprints as Record<string, Record<number, (string | number)[]>[]>[];
    if (!body.blueprints && !existingBlueprints[body.accountIndex]) throw new Error("Account not saved.");

    const blueprints = !body.blueprints
      ? null
      : (body.blueprints
          .map((ship) => {
            // @ts-expect-error Importing `BlueprintAllShip` doesnt get all parameters for some reason
            if (!ship.unlocked) return { [ship.id]: [] };
            // @ts-expect-error Importing `BlueprintAllShip` doesnt get all parameters for some reason
            if (!("modules" in ship)) return { [ship.id]: [ship.variant, ship.techPoints] };
            // @ts-expect-error Importing `BlueprintAllShip` doesnt get all parameters for some reason
            return { [ship.id]: [ship.variant, ship.techPoints, ship.modules.filter((mod) => mod.unlocked).map((mod) => mod.system)].flat() };
          })
          .filter((obj) => getObjectValue(obj).length > 0) as Record<number, (string | number)[]>[]);

    if (blueprints) blueprints.unshift({ "999": body.unassignedTp });

    existingBlueprints[body.accountIndex] = {
      [body.accountName]: blueprints ? blueprints : getObjectValue(existingBlueprints[body.accountIndex])
    };

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
