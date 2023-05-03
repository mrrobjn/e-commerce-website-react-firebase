import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from 'firebase/storage'
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API,
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
export const storage = getStorage(app)
const googleProvider = new GoogleAuthProvider();
const errorToast = (text) => toast.error(`${text}`);
const successToast = (text) => toast.success(`${text}`);

export const signUp = async (name, email, phoneNumber, password, dayOfBirth) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email,
      phoneNumber,
      name,
      dayOfBirth,
      authProvider: "local",
      role: "user"
    });
    successToast("Đăng ký thành công")
  } catch (err) {
    errorToast(err.message);
  }
}
export const signIn = async (auth,email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    errorToast(err.message);
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
    errorToast(err.message);
  }
};
export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    successToast("Password reset link sent!");
  } catch (err) {
    console.error(err);
    errorToast(err.message);
  }
};
export const logout = (auth) => {
  signOut(auth);
};