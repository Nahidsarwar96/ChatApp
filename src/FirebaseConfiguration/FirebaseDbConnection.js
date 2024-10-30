// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOPLTihEZt9D_hBAnexXmG9cz3tlDgPrA",
    authDomain: "chatapp-47e4e.firebaseapp.com",
    projectId: "chatapp-47e4e",
    storageBucket: "chatapp-47e4e.appspot.com",
    messagingSenderId: "973115067812",
    appId: "1:973115067812:web:d60a15af615b7203c74531"
};

// Initialize Firebase
const dbapp = initializeApp(firebaseConfig);
console.log("firebase done");


export default dbapp;