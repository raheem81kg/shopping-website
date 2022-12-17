import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "shopping-website-55ff4.firebaseapp.com",
    projectId: "shopping-website-55ff4",
    storageBucket: "shopping-website-55ff4.appspot.com",
    messagingSenderId: "968333992752",
    appId: "1:968333992752:web:4e1ca359d7cc8e10575ef5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
