// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC55T8tsIIvJgu05zu11pgPR_XSKmdOvmY",
  authDomain: "avengers-travel.firebaseapp.com",
  projectId: "avengers-travel",
  storageBucket: "avengers-travel.appspot.com",
  messagingSenderId: "1024807582974",
  appId: "1:1024807582974:web:a1ed4c0aa7cab3d216f9af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app