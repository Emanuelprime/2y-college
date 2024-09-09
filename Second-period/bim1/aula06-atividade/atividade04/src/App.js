import {useState, useEffect} from 'react';
import {db, auth} from './firebaseConnection';
import './App.css';

import{
doc,
collection,
addDoc,
updateDoc,
deleteDoc,
onSnapshot,

} from 'firebase/firestore'

import{
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from 'firebase/auth'

export default function App(){
const[titulo, setTitulo] = useState ('');
const[idTarefa, setIdTarefa] = useState ('');
const[status, setStatus] = useState ('');
const[email, setEmail] = useState ('');
const[senha, setSenha] = useState ('');
const[usuario, setUsuario] = useState (false);
const[tarefa, setTarefa] = useState ([]);
}

useEffect(() => {
    async function carregarTarefa(){
        const dados = onSnapshot(collection(db,"tarefas"),(snapshot)=>{
            let listaTarefa = [];

            snapshot.forEach((doc)=>{
                listaTarefa.push(
                    {
                        id: doc.id,
                        titulo: doc.data().titulo,
                        status: doc.data().status
                    }
                );
            })
            setTarefa(listaTarefa);
        })
    }
    carregarTarefa();
}, [])

useEffect(()=>{
    async function verificarLogin(){
        onAuthStateChanged(auth, (user)=>{
            if (user){
                setUsuario(true);
            } else{
                setUsuario(false);
            }
        })
    }
    verificarLogin();
}, [])

async function novoUsuario(){
  await createUserWithEmailAndPassword(auth, email, senha)
  .then(()=>{
    alert("Usuario cadastrado com sucesso!")
    setEmail("");
    setSenha("");
  }).catch((error)=>{
    if(error.code === 'auth/weak-password'){
        alert("Senha muito fraca!")
    }else if(error.code === 'auth/email-already-in-use'){
        alert("Email já cadastrado!")
    }
  })  
}

async function logarUsuario(){
    await signInWithEmailAndPassword(auth, email, senha)
    .then((value)=>{
        alert("Usuario logado com sucesso!")
        
        setUsuario(true);
        setEmail("");
        setSenha("");
    }).catch((error)=>{
        if(error.code === 'auth/invalid-email'){
          alert("Email incorreto!")
        }else if(error.code === 'auth/invalid-password'){
          alert("Senha incorreta!")
        }
       })
}

async function fazerLogout(){
    await signOut(auth)
    setUsuario(false)
}

async function adicionarTarefas(){
    await addDoc(collection(db,"tarefas"),{
        titulo: titulo,
        status: status,
    }).then(()=>{
        alert("Cadastro realizado com sucesso!")
        setAutor('');
        setTitulo('');
      }).catch((error)=>{
        console.log(error);
      })
}

async function editarTarefa(){
    const postEditado = doc(db,"tarefas", idTarefa);

    await updateDoc(postEditado, {
      titulo: titulo,
      staus: status,
    }).then(()=>{
      alert("Tarefa editado com sucesso!")
      setIdPost('');
      setTitulo('');
      setStatus('');
    }).catch((error)=>{
      console.log(error);
    })
  }