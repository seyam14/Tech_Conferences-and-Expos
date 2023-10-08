// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfA9aSy5H1y3l58uZC8uhIDDdeFU2re1M",
  authDomain: "tech-conferences-and-expos.firebaseapp.com",
  projectId: "tech-conferences-and-expos",
  storageBucket: "tech-conferences-and-expos.appspot.com",
  messagingSenderId: "192069422678",
  appId: "1:192069422678:web:00cd169abc0ed2035935f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default(app);