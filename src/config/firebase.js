// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkvxu-gj4f5GUJt2gRMDlNoJqaTEUWFbA",
  authDomain: "todo-14e26.firebaseapp.com",
  projectId: "todo-14e26",
  storageBucket: "todo-14e26.appspot.com",
  messagingSenderId: "25293401483",
  appId: "1:25293401483:web:84a7aeb6142ae6e79d538e",
  measurementId: "G-HPQMRXTEGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { analytics, auth,firestore }