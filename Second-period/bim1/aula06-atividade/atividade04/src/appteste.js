import { useState, useEffect} from 'react';
import {db, auth} from './firebaseConnection';
import './App.css';

import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore'

import{
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from 'firebase/auth'
export default function App(){
  const[titulo, setTitulo] = useState('');
  const[status, setStatus] = useState('');
  const[idTarefa, setIdTarefa] = useState('');
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');
  const[usuario, setUsuario] = useState(false);

  

  const[tarefa, setTarefa] = useState([]);
  useEffect(()=>{
    async function carregarTarefa(){  
      const dados = onSnapshot(collection(db,"tarefas"),(snapshot)=>{   //Collection pega a coleção, a fonte dos dados e o seu nome.
        let listaTarefa =[];

        snapshot.forEach((doc)=>{
          listaTarefa.push(
            {
              id: doc.id,
              titulo: doc.data().titulo, //.data(). para string
              status: doc.data().status
            }
          );
        })
        setTarefa(listaTarefa);
      })
    }
    carregarTarefa();
  }, [])
  useEffect(() =>{
    async function verificarLogin(){
      
      onAuthStateChanged(auth, (user) => {
        if(user){
          //tem usuario logado
          setUsuario(true);
          
        } else{
          //não possui usuario logado
          setUsuario(false);
          
        }
      })

    }
    verificarLogin();
  },[])

  async function novoUsuario(){
  await createUserWithEmailAndPassword(auth, email, senha)
  .then(() =>{
    alert("Usuario cadastrado com sucesso!")
    setEmail("");
    setSenha("");
  }).catch((error)=>{
    if(error.code === 'auth/weak-password'){
      alert("Senha muito fraca!")
    }else if(error.code === 'auth/email-already-in-use'){
      alert("Email já utilizado!")
    }
  })
  }

  async function logarUsuario(){
    await signInWithEmailAndPassword(auth,email,senha)
    .then((value) =>{
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
  //C - create
  async function adicionarTarefa(){   //.catch pega os erros, .then executa quando(apos) o addDoc
    await addDoc(collection(db,"tarefas"),{
      titulo: titulo,
      autor: autor,
    }).then(()=>{
      alert("Cadastro realizado com sucesso!")
      setAutor('');
      setTitulo('');
    }).catch((error)=>{
      console.log(error);
    })
  }

  //U - update
  async function editarTarefa(){
    const tarefaEditada = doc(db,"Tarefas", idTarefa);

    await updateDoc(tarefaEditada, {
      titulo: titulo,
      status: status
    }).then(()=>{
      alert("Tarefa editado com sucesso!")
      setIdTarefa('');
      setTitulo('');
      setStatus('');
    }).catch((error)=>{
      console.log(error);
    })
  }

  //D - delete
  async function excluirTarefa(id){
    const tarefaDeletada = doc(db, "tarefas", id);
    await deleteDoc(tarefaDeletada).then(()=>{
      alert("Tarefa deletada com sucesso")
    }).catch((error)=>{
      console.log(error);
    })
  }


return(
  <div>
    <h1>ReactJS + Firebase</h1>

    {usuario && (
      <div>
        <strong>Seja bem-vindo(a)</strong>
        <br/>
        <button onClick={fazerLogout}>Sair</button>
      </div>
    )}

    {!usuario &&(
      <div>
        <h2>Usuários</h2>

        <label>Email:</label>
        <input type="email"
        placeholder="Digite seu email"
        value={email} onChange={ (e) => setEmail(e.target.value)}/>

        <label>Senha:</label>
        <input type="password"
        placeholder="Digite uma senha"
        value={senha} onChange={ (e) => setSenha(e.target.value)}/>

        <button onClick={novoUsuario}>Cadastrar</button>
        <button onClick={logarUsuario}>Login</button>
        </div>
    )}

    <hr></hr>


    <h2>Tarefas</h2>
    <label>ID da Tarefa</label>
    <input placehold="ID da tarefa"
    value={idTarefa} onChange={ (e) => setIdTarefa(e.target.value)}/>

    <label>Título:</label>
    <textarea
    type="text" placholder="Titulo"
    value={titulo} onChange={ (e) => setTitulo(e.target.value)}/>

    <label>Status:</label>
    <input type="text"
    placeholder="Status da tarefa"
    value={autor} onChange={ (e) => setStatus(e.target.value)}/>

    <button onClick={adicionarTarefa}>Inserir</button>
    <button onClick={editarTarefa}>Editar</button>

    <ul>
      {tarefa.map(
        (value) => (
          <li key={tarefa.id}>
            <strong>ID: {value.id}</strong>
            <span>Titulo: {value.titulo}</span>
            <span>Status: {value.status}</span>
            <button onClick={() => excluirTarefa(value.id)}>Apagar</button>
          </li>
        )
      )}
    </ul>

    </div>
);
}
