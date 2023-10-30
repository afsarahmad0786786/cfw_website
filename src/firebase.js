// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_vGWCVaxXA_hBYkC_nveOIpNDSXzZAWw",
  authDomain: "filemanufacturing.firebaseapp.com",
  projectId: "filemanufacturing",
  storageBucket: "filemanufacturing.appspot.com",
  messagingSenderId: "1097093661123",
  appId: "1:1097093661123:web:0e6aecf82be2041151fd76",
  measurementId: "G-10W83ZJVS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);