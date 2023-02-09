
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCQjlSYK8Xis1foo53OvI6bchKDFVxRKsA",
  authDomain: "chat-app-a6a8d.firebaseapp.com",
  projectId: "chat-app-a6a8d",
  storageBucket: "chat-app-a6a8d.appspot.com",
  messagingSenderId: "60376242735",
  appId: "1:60376242735:web:421bee05c49488c5e184da"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db = getFirestore();

 export const provider = new GoogleAuthProvider();