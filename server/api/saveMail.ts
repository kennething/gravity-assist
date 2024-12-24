import { getRandomCharacters } from "~/utils/functions";
import { SaveTemplate, UserData } from "~/utils/types";
import admin from "firebase-admin";

type Body = {
  uid: string;
  accessToken: string;
  template: SaveTemplate;
};

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as Body;
  const db = admin.firestore();

  let id: string | null = null;
  let outcomeMails: SaveTemplate[] | null = null;

  try {
    const docData = await db.collection("users").doc(body.uid).get();
    const userData = docData.data() as UserData | undefined;

    if (!userData) throw new Error("User not found.");
    if (userData.uid !== body.uid || userData.accessToken !== body.accessToken) throw new Error("Invalid credentials.");

    const template = body.template;
    // Check if dates follow YYYY-MM-DD format
    if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(template.createdAt)) throw new Error("Invalid createdAt date.");
    if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(template.lastSaved)) throw new Error("Invalid lastSaved date.");
    if (!template.ops.every((op) => "insert" in op)) throw new Error("Invalid ops.");
    if (template.name.length > 100) throw new Error("Names can only be 100 characters long.");

    const savedMails = userData.savedMails;
    if (savedMails.length >= 69) throw new Error("You can only have 69 saved mails. Try deleting some.");

    id = getRandomCharacters(10);
    template.id = id;

    const namespaceCollision = savedMails.findIndex((mail) => mail.name === template.name);
    if (namespaceCollision !== -1) savedMails.splice(namespaceCollision, 1);

    savedMails.splice(0, 0, template);
    outcomeMails = savedMails;
    await db.collection("users").doc(body.uid).update({ savedMails });
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong. Try again later.", content: null, outcomeMails: null };
  }

  return { success: true, error: null, content: id, outcomeMails };
});
