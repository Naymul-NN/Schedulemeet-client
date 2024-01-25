// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBKMIb2oncKAPE7a5r6ytSyB-CMbXijdYo",
  authDomain: "schedulemeet-b49e7.firebaseapp.com",
  projectId: "schedulemeet-b49e7",
  storageBucket: "schedulemeet-b49e7.appspot.com",
  messagingSenderId: "297162276419",
  appId: "1:297162276419:web:f79a95fa51f69510e25ef6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;