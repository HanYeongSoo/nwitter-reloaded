// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY6QghlSYogZmtTTSoUr1jvtKx9mRDRVk",
  authDomain: "nwitter-reloaded-573fe.firebaseapp.com",
  projectId: "nwitter-reloaded-573fe",
  storageBucket: "nwitter-reloaded-573fe.appspot.com",
  messagingSenderId: "563504223716",
  appId: "1:563504223716:web:c034e0ce9a364e848563f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
