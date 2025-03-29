import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQOOUh6eTQXBXlWxuQb0BUqUAGU69Q9k4",
  authDomain: "prepwise-5962b.firebaseapp.com",
  projectId: "prepwise-5962b",
  storageBucket: "prepwise-5962b.firebasestorage.app",
  messagingSenderId: "431187055472",
  appId: "1:431187055472:web:d9f8db1f080723381a35b5",
  measurementId: "G-NTRMKYWT2R"
};


const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);