import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7Wog87hJN-qizgMfx4Rh2X9gvcMq4P4c",
  authDomain: "atividadepratica-david.firebaseapp.com",
  projectId: "atividadepratica-david",
  storageBucket: "atividadepratica-david.firebasestorage.app",
  messagingSenderId: "846225030352",
  appId: "1:846225030352:web:149bff70dee9b3010072d5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);