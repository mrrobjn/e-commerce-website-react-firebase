import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, query, where } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
const firebaseConfig = {
  apiKey: "AIzaSyA7pFaInlp10pwxR0NDdDxdrjtwQyHOOoQ",
  authDomain: "e-commerce-website-3cb63.firebaseapp.com",
  projectId: "e-commerce-website-3cb63",
  storageBucket: "e-commerce-website-3cb63.appspot.com",
  messagingSenderId: "720615300046",
  appId: "1:720615300046:web:02520632d11194fe91e99f",
  measurementId: "G-MFV28WG5W4"
};

export const signUp = async (name, email, phoneNo, password, age) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email,
      phoneNo,
      name,
      age,
    });
  } catch (err) {
    alert(err.message);
  }
}
export const signIn = async (e, email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err.message);
  }
};
export const logout = (auth) => {
  signOut(auth);
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
