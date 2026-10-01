// Loads admin-uploaded certs from Firestore and hands them to the page script.
import { firebaseConfig, FIREBASE_SDK } from "./firebase-config.js";

const add = window.ucgAddCards || (() => {});
try {
  if (!firebaseConfig) throw new Error("Firebase not configured");
  const { initializeApp } = await import(`${FIREBASE_SDK}/firebase-app.js`);
  const { getFirestore, collection, getDocs, doc, getDoc } = await import(`${FIREBASE_SDK}/firebase-firestore.js`);
  const db = getFirestore(initializeApp(firebaseConfig));
  window.ucgFullImage = async cert => {
    const snap = await getDoc(doc(db, "images", String(cert)));
    return snap.exists() ? snap.data().img : null;
  };
  const snap = await getDocs(collection(db, "certs"));
  add(snap.docs.map(d => d.data()));
} catch (e) {
  console.warn("UCG database:", e.message);
  add([]);
}
