import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJmyTzH-J2KI9mWxDzxw0dQEyE_euqRYU",
  authDomain: "challenge-5a06f.firebaseapp.com",
  projectId: "challenge-5a06f",
  storageBucket: "challenge-5a06f.appspot.com",
  messagingSenderId: "860036324566",
  appId: "1:860036324566:web:b713fc89098f4f90ea3d77",
  measurementId: "G-6HR78FKVV4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
