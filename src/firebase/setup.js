// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth , GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKjMcFTz21NvuJCniel8o6TmNwyJjFjJE",
  authDomain: "clone-5e413.firebaseapp.com",
  projectId: "clone-5e413",
  storageBucket: "clone-5e413.appspot.com",
  messagingSenderId: "990263586183",
  appId: "1:990263586183:web:74d66701dcd3e5dd343722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider(app)
export const database=getFirestore(app)