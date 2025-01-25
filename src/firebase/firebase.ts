import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJCU2uGMY9Z09XQLbnp6dwp0thnZSo6AE",
  authDomain: "linksync-project.firebaseapp.com",
  projectId: "linksync-project",
  storageBucket: "linksync-project.firebasestorage.app",
  messagingSenderId: "16768135921",
  appId: "1:16768135921:web:18e5fafdab467fd69daf50",
  measurementId: "G-6CP1W5BWNH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
