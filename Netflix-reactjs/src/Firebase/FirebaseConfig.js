import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgd763vJMtsomOjTqgGQn2SEnG_FC99i8",
  authDomain: "clone-netflix2.firebaseapp.com",
  projectId: "clone-netflix2",
  storageBucket: "clone-netflix2.firebasestorage.app",
  messagingSenderId: "703218947284",
  appId: "1:703218947284:web:accaf68122361aff085741",
  measurementId: "G-E2TJ2ELE9Z",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
