// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-f8UB7swiY9O-LDGUDJOg6SmKsuLK6Xc",
  authDomain: "pm-login-c3ff4.firebaseapp.com",
  projectId: "pm-login-c3ff4",
  storageBucket: "pm-login-c3ff4.appspot.com",
  messagingSenderId: "482616062117",
  appId: "1:482616062117:web:71ed6d08d482f316759d4c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };