// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app"; 
import { Firestore, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkYgzyNbyKQrLnO1k7cceK90igVXplyME",
  authDomain: "drustvena-mreza-46029.firebaseapp.com",
  projectId: "drustvena-mreza-46029",
  storageBucket: "drustvena-mreza-46029.appspot.com",
  messagingSenderId: "253763129147",
  appId: "1:253763129147:web:a3c25edc1f67fcbe3a711e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const provider= new GoogleAuthProvider();
export const db = getFirestore(app)