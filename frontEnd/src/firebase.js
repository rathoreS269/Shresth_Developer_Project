// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shresth-developer.firebaseapp.com",
  projectId: "shresth-developer",
  storageBucket: "shresth-developer.appspot.com",
  messagingSenderId: "174942974790",
  appId: "1:174942974790:web:ce8356b80e513fadaaab47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);