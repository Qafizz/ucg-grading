// Firebase web config for the UCG site. These values are public by design;
// what protects the data is firestore.rules (only the admin email can write).
export const firebaseConfig = {
  apiKey: "AIzaSyDAmrKQj8EogmvcBOFC2Z7VcD40GKX9hq0",
  authDomain: "ucg-card.firebaseapp.com",
  projectId: "ucg-card",
  storageBucket: "ucg-card.firebasestorage.app",
  messagingSenderId: "31449082114",
  appId: "1:31449082114:web:f4a6a73d1b3d78f4aa3a1b"
};

export const ADMIN_EMAIL = "qafizz@qafizz.com";
export const FIREBASE_SDK = "https://www.gstatic.com/firebasejs/10.12.2";
