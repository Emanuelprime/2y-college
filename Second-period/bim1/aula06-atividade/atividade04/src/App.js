import {useState, useEffect} from 'react';
import {db, auth} from './firebaseConnection';
import './App.css';

import{
doc,
collection,
addDoc,
updateDoc,
deleteDoc,

} from 'firebase/firestore'

import{
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from 'firebase/auth'

export default function(){
const[titulo, setTitulo] = useState ('');
const[idTarefa, setIdTarefa] = useState ('');
const[status, setStatus] = useState ('');
const[email, setEmail] = useState ('');
const[senha, setSenha] = useState ('');
}