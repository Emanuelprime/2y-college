
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDrBsjUpeZBrK79bDvN8G13oDH5_Cb1_Ls",
  authDomain: "ticketsb-14457.firebaseapp.com",
  projectId: "ticketsb-14457",
  storageBucket: "ticketsb-14457.appspot.com",
  messagingSenderId: "26877392172",
  appId: "1:26877392172:web:e3242b7e6f2e7d3d5b6889"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };