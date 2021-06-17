import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCcIdOWGrD-1GUIGzhHbHTqgWCONzIAco8",
    authDomain: "crwn-db-a7e28.firebaseapp.com",
    projectId: "crwn-db-a7e28",
    storageBucket: "crwn-db-a7e28.appspot.com",
    messagingSenderId: "726028566248",
    appId: "1:726028566248:web:994099858295982444d35d",
    measurementId: "G-PG1EWV4EBN"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;