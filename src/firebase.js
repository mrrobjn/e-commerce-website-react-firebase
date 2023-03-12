import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

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
      authProvider: "local",
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
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    alert(err.message);
  }
};
export const logout = (auth) => {
  signOut(auth);
};
