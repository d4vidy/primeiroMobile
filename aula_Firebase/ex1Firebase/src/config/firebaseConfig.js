import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA3KmM6PtzQY4LulliaFW4Tp4MihRrhcUk",
  authDomain: "unipam-david.firebaseapp.com",
  projectId: "unipam-david",
  storageBucket: "unipam-david.firebasestorage.app",
  messagingSenderId: "34922208624",
  appId: "1:34922208624:web:efd1449e9796bd3b4a03b5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);