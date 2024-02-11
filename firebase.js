import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkV3t8D9id4AH9p-GLfLHys-cPUDtzhnA",
  authDomain: "jayas-1db92.firebaseapp.com",
  projectId: "jayas-1db92",
  storageBucket: "jayas-1db92.appspot.com",
  messagingSenderId: "695257723268",
  appId: "1:695257723268:web:3cf02d01db5dca110bedd1",
  measurementId: "G-KZNBP5PPCQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
