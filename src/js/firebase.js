
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyC2xz1cxssgKXHa9dxuuAbcbJOM6gcgtXY',
  authDomain: 'note-app-cb2d8.firebaseapp.com',
  projectId: 'note-app-cb2d8',
  storageBucket: 'note-app-cb2d8.appspot.com',
  messagingSenderId: '1071723401857',
  appId: '1:1071723401857:web:f981236f1796fac1053380'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth
}