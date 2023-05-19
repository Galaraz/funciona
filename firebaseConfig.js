import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
 import {getFirestore} from "firebase/firestore";

 import { getAnalytics } from "firebase/analytics";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDyUU6EcjTObZFax3CGdKm8uPpxKA1cF7w",
   authDomain: "gamebook-d812c.firebaseapp.com",
   projectId: "gamebook-d812c",
   storageBucket: "gamebook-d812c.appspot.com",
   messagingSenderId: "60212389996",
   appId: "1:60212389996:web:5fe3b8d61b77055da61049",
   measurementId: "G-WQQ2WV008Q"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const DB = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
