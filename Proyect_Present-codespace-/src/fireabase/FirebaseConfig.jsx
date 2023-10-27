// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq3gWCW9bsrSlR5pq31JHtLxmxXHjlHow",
  authDomain: "myfirstapp-b7d76.firebaseapp.com",
  projectId: "myfirstapp-b7d76",
  storageBucket: "myfirstapp-b7d76.appspot.com",
  messagingSenderId: "1004658267508",
  appId: "1:1004658267508:web:d175106509e22e88e5c821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}