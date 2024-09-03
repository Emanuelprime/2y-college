
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyOWJZPP_eeoP_Wxf37resbikWK8geAhM",
  authDomain: "lista-tarefas-atividade04.firebaseapp.com",
  projectId: "lista-tarefas-atividade04",
  storageBucket: "lista-tarefas-atividade04.appspot.com",
  messagingSenderId: "94398838246",
  appId: "1:94398838246:web:a11790ed62c28fcaa75227"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};
