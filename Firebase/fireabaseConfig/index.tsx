// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function startFirebase() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCVPrMgM8S27trCNzkCzNF0ddhG3Ocdgxw",
    authDomain: "pric-firebase-app.firebaseapp.com",
    databaseURL: "https://pric-firebase-app-default-rtdb.firebaseio.com",
    projectId: "pric-firebase-app",
    storageBucket: "pric-firebase-app.appspot.com",
    messagingSenderId: "571097870668",
    appId: "1:571097870668:web:7ce8991580cfa8d7ac5fe9",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default startFirebase;