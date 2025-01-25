import { db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const saveUserData = async (userId: string, data: any) => {
  const userRef = doc(db, "users", userId);
  return setDoc(userRef, data);
};

export const getUserData = async (userId: string) => {
  const userRef = doc(db, "users", userId);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
};
