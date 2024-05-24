// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt9eWeI9fUVtb2L3hHOJAybwZfuX1jQdo",
  authDomain: "dashboard-95295.firebaseapp.com",
  projectId: "dashboard-95295",
  storageBucket: "dashboard-95295.appspot.com",
  messagingSenderId: "281385987309",
  appId: "1:281385987309:web:1749128412e0b4fefc70e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// USE A VERSÃO MODULAR DO FIREBASE!!!
export const auth = getAuth(app);

