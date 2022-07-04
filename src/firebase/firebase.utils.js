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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef  = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  // console.log(snapShot);

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch (error){
      console.log("Error creating user",error.message)
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
