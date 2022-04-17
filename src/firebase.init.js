// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpjNIitzWSpixVpYiBV7iP6hL6rRLFpEg",
  authDomain: "react-firebase-assignment-09.firebaseapp.com",
  projectId: "react-firebase-assignment-09",
  storageBucket: "react-firebase-assignment-09.appspot.com",
  messagingSenderId: "259844802630",
  appId: "1:259844802630:web:b16e209796c36d3288e247"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);