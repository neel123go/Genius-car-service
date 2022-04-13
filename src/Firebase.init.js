// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBp31TDyoCsgfAUD6yfRdFyXPP9C4lKv1E",
    authDomain: "genius-car-service-dd112.firebaseapp.com",
    projectId: "genius-car-service-dd112",
    storageBucket: "genius-car-service-dd112.appspot.com",
    messagingSenderId: "1080196200104",
    appId: "1:1080196200104:web:80e5a2d314b6eba59bf49d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;