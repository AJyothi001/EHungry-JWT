// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0wc3ZsVpbwqtNDDTFHwwmzyoq2ZLPmMI",
  authDomain: "ehungry-71404.firebaseapp.com",
  databaseURL: "https://ehungry-71404-default-rtdb.firebaseio.com",
  projectId: "ehungry-71404",
  storageBucket: "ehungry-71404.appspot.com",
  messagingSenderId: "342252515327",
  appId: "1:342252515327:web:3cd4a481a28d0b5b0201ca",
  measurementId: "G-JDLF0PVQJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;