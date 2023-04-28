// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6vxcN3jIikMzmWVwQ_HvjfSgds1v20Ps",
  authDomain: "imgstock-b8120.firebaseapp.com",
  projectId: "imgstock-b8120",
  storageBucket: "imgstock-b8120.appspot.com",
  messagingSenderId: "841381674140",
  appId: "1:841381674140:web:2f77c20e99900268e54159",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
