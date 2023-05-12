// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8j2cH2lS4z8hvIRlN1Tm73nbvQ6ldQxk",
    authDomain: "momley-project.firebaseapp.com",
    projectId: "momley-project",
    storageBucket: "momley-project.appspot.com",
    messagingSenderId: "551155575181",
    appId: "1:551155575181:web:de666dc986826ee99635c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;