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