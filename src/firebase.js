import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
