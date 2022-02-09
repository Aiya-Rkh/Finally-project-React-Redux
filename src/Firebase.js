// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKi3hLfQwl67HO4yciQMf0FfwXwQfSmgE",
  authDomain: "marketplace-asos.firebaseapp.com",
  projectId: "marketplace-asos",
  storageBucket: "marketplace-asos.appspot.com",
  messagingSenderId: "370446365206",
  appId: "1:370446365206:web:0258a3924d621c60373b37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
