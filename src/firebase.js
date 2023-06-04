// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApPi2CJHuL6a268MUXar0QYWHK4ZXmES8",
  authDomain: "react-disney-plus-app-a3910.firebaseapp.com",
  projectId: "react-disney-plus-app-a3910",
  storageBucket: "react-disney-plus-app-a3910.appspot.com",
  messagingSenderId: "988162073420",
  appId: "1:988162073420:web:6e3629959b75d00fcf25e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;