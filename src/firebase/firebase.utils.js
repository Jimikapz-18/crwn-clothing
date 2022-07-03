import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyA80yphUf9YDrykKRX6X6vrkjCvnXfJSAQ",
  authDomain: "crown-db-60cd7.firebaseapp.com",
  projectId: "crown-db-60cd7",
  storageBucket: "crown-db-60cd7.appspot.com",
  messagingSenderId: "725130187056",
  appId: "1:725130187056:web:4472488f7bb75ee708f8f5",
  measurementId: "G-350CHT2L6Z",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
