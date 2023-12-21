// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ8uefz075nYah7_JasG5tam8lke79ZBM",
  authDomain: "taskflow-73471.firebaseapp.com",
  projectId: "taskflow-73471",
  storageBucket: "taskflow-73471.appspot.com",
  messagingSenderId: "883847248754",
  appId: "1:883847248754:web:73b2e64b1e4afe7db87beb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth