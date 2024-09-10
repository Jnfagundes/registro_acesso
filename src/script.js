// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6e6Zzpog362wMKfA-NDDgidGoxJqj8Zc",
  authDomain: "controle-de-estoque-dom-joao.firebaseapp.com",
  databaseURL: "https://controle-de-estoque-dom-joao-default-rtdb.firebaseio.com",
  projectId: "controle-de-estoque-dom-joao",
  storageBucket: "controle-de-estoque-dom-joao.appspot.com",
  messagingSenderId: "546470259315",
  appId: "1:546470259315:web:cfc40b32c5a055b6e19806",
  measurementId: "G-RB3V7BR280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);