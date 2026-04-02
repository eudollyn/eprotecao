import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbn6a9JX0sY0XA0IQpQNSKWTXXvDpABNI",
  authDomain: "eprotecao-e1437.firebaseapp.com",
  projectId: "eprotecao-e1437",
  storageBucket: "eprotecao-e1437.firebasestorage.app",
  messagingSenderId: "731123059348",
  appId: "1:731123059348:web:a01a2b274e144a4a248281"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);