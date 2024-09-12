import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA4rEWfZrTFfm5nG31iPeJK8SNS9R4vm4o",
  authDomain: "portfolio-b4bba.firebaseapp.com",
  projectId: "portfolio-b4bba",
  storageBucket: "portfolio-b4bba.appspot.com",
  messagingSenderId: "425237313382",
  appId: "1:425237313382:web:5c00ec332fc1304b657aa7",
  measurementId: "G-NPFHB6B9YV",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
