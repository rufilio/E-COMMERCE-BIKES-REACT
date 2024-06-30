// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJQ3vLji2avbzjx1Q6oArt2qa-DrtlifY",
  authDomain: "e-co-d484b.firebaseapp.com",
  projectId: "e-co-d484b",
  storageBucket: "e-co-d484b.appspot.com",
  messagingSenderId: "781122287097",
  appId: "1:781122287097:web:52887cc358770b27c67928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);