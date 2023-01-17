import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "robinhood-clone-368cc.firebaseapp.com",
  projectId: "robinhood-clone-368cc",
  storageBucket: "robinhood-clone-368cc.appspot.com",
  messagingSenderId: "226823457214",
  appId: "1:226823457214:web:1b492d6bc53046f54711ef"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
