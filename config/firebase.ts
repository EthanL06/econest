// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2DfWlonE-w-1w8vq3vrs2kyfQbxdO2mM",
  authDomain: "eco-nest-5d6a1.firebaseapp.com",
  projectId: "eco-nest-5d6a1",
  storageBucket: "eco-nest-5d6a1.appspot.com",
  messagingSenderId: "419078073556",
  appId: "1:419078073556:web:36115891d0973deacf9f41",
  measurementId: "G-7T1HVQEDKY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

export default app;
