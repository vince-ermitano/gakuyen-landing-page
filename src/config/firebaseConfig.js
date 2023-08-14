import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfigString = process.env.REACT_APP_FIREBASE_CONFIG;
console.log(firebaseConfigString);
const firebaseConfig = JSON.parse(firebaseConfigString);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);