import admin from "firebase-admin";

export default defineEventHandler(() => {
  const config = useRuntimeConfig();
  const decodedServiceAccount = Buffer.from(config.base64ServiceAccount, "base64").toString("utf-8");
  const credentials = JSON.parse(decodedServiceAccount);

  if (!admin.apps.length)
    admin.initializeApp({
      credential: admin.credential.cert(credentials)
    });
});
