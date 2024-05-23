// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA43YjTMcqk-vM5Dr9DQfvBPOEVjy01TU8",
  authDomain: "ecommerce-1ad6a.firebaseapp.com",
  projectId: "ecommerce-1ad6a",
  storageBucket: "ecommerce-1ad6a.appspot.com",
  messagingSenderId: "734542866150",
  appId: "1:734542866150:web:fe09f589a6aee6e0aafd27",
  measurementId: "G-EEB0L8BSKS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);