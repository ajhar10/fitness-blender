// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaBF242-p3Nkf_eKjub5g53PmVgE-qhC8",
    authDomain: "fitness-blender-d10c8.firebaseapp.com",
    projectId: "fitness-blender-d10c8",
    storageBucket: "fitness-blender-d10c8.appspot.com",
    messagingSenderId: "38491699677",
    appId: "1:38491699677:web:9c006f105ad0606efa1e34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;