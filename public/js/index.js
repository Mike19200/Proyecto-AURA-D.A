// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArWiFsqGyS33TKL8hpfbQ3l3GiWL6hVQQ",
  authDomain: "the-aura-project.firebaseapp.com",
  projectId: "the-aura-project",
  storageBucket: "the-aura-project.appspot.com",
  messagingSenderId: "985735375310",
  appId: "1:985735375310:web:0ca7642ddefe20a5ed239f",
  measurementId: "G-CDGM229CFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);