// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbgAVxFDE8Atfjr2TWYrjtU9qz-KlmWLM",
  authDomain: "cinema-fbed5.firebaseapp.com",
  projectId: "cinema-fbed5",
  storageBucket: "cinema-fbed5.appspot.com",
  messagingSenderId: "769740140256",
  appId: "1:769740140256:web:a6811d63fe7aa033d52a85",
  measurementId: "G-8EE9R7WYF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);