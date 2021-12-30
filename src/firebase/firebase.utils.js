import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBIDrDZVuLK5mQRcisM_j-W8HI5jIr7aPI",
  authDomain: "crwn-db-afcf6.firebaseapp.com",
  projectId: "crwn-db-afcf6",
  storageBucket: "crwn-db-afcf6.appspot.com",
  messagingSenderId: "258359729297",
  appId: "1:258359729297:web:a16213fa12fc399bc27330",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
