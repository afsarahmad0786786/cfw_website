
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
    apiKey: "AIzaSyD_vGWCVaxXA_hBYkC_nveOIpNDSXzZAWw",
    authDomain: "filemanufacturing.firebaseapp.com",
    databaseURL: "https://filemanufacturing-default-rtdb.firebaseio.com",
    projectId: "filemanufacturing",
    storageBucket: "filemanufacturing.appspot.com",
    messagingSenderId: "1097093661123",
    appId: "1:1097093661123:web:0e6aecf82be2041151fd76",
    measurementId: "G-10W83ZJVS6"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider('abcdefghijklmnopqrstuvwxy-1234567890abcd'),

//   // Optional argument. If true, the SDK automatically refreshes App Check
//   // tokens as needed.
//   isTokenAutoRefreshEnabled: true
// });

export {
    db,
    auth,

}