import { getRandomCharacters, truncateOps, untruncateOps } from "~/utils/functions";
import { SaveTemplate, TruncatedOp, UserData } from "~/utils/types";
import admin from "firebase-admin";

type Body = {
  uid: string;
  accessToken: string;
  template: SaveTemplate;
};

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as Body;
  const db = admin.firestore();

  let newMail: SaveTemplate | null = null;
  let outcomeMails: SaveTemplate[] | null = null;

  try {
    const docData = await db.collection("users").doc(body.uid).get();
    const userData = docData.data() as UserData | undefined;

    if (!userData) throw new Error("User not found.");
    if (userData.uid !== body.uid || userData.accessToken !== body.accessToken) throw new Error("Invalid credentials.");

    const template = body.template;
    if (!template.ops.every((op) => "insert" in op)) throw new Error("Invalid ops.");
    if (template.name.length > 50) throw new Error("Names can only be 50 characters long.");

    const savedMails = userData.savedMails;
    if (savedMails.length >= 30) throw new Error("You can only have 30 saved mails. Try deleting some.");

    const namespaceCollision = savedMails.findIndex((mail) => mail.name === template.name);
    const isSame = namespaceCollision !== -1;

    const id = isSame ? savedMails[namespaceCollision].id : getRandomCharacters(10);
    template.id = id;
    template.createdAt = isSame ? savedMails[namespaceCollision].createdAt : new Date().toISOString().slice(0, 10);
    template.lastSaved = new Date().toISOString().slice(0, 10);

    if (isSame) savedMails.splice(namespaceCollision, 1);

    const savedMailsCopy = JSON.parse(JSON.stringify(savedMails)) as SaveTemplate[];
    savedMailsCopy.forEach((mail) => (mail.ops = untruncateOps(mail.ops as TruncatedOp[])));
    newMail = JSON.parse(JSON.stringify(template));
    savedMailsCopy.unshift(newMail as SaveTemplate);
    outcomeMails = savedMailsCopy;

    // Condense for storage saving
    template.ops = truncateOps(template.ops);
    savedMails.unshift(template);

    await db.collection("users").doc(body.uid).update({ savedMails });
  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong. Try again later.", content: null, outcomeMails: null };
  }

  return { success: true, error: null, content: newMail, outcomeMails };
});
