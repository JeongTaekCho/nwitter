import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSeMs50SDZ_JDAzfTXQSCdcH_j2Lj7hzw",
  authDomain: "nwitter-67f43.firebaseapp.com",
  projectId: "nwitter-67f43",
  storageBucket: "nwitter-67f43.appspot.com",
  messagingSenderId: "592176942700",
  appId: "1:592176942700:web:f1ff5b00617c74fc425249",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();

export const dbService = firebase.firestore();
