import React, { useEffect , useState} from 'react';
import './App.css';

function App(){
  const [nutri, setNutri] = useState([]);

  useEffect(()=>{
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch (url) //envia requisição por url
    .then((r)=> r.json())//recebe a resposta em json
    .then((json) => setNutri(json))//salva na const nutri pelo metodo SetNutri
  }, []);

  return(
    <div
    >
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item)=>{
        return(
          <article key={item.id}>
            <strong>{item.titulo}</strong><br/>
            <img src={item.capa} alt={item.titulo}/><br/>
            <p>{item.subtitulo}</p><br/>
            <button>Acessar</button>
          </article>
        );
      })}
    </div>
  );
}

export default App;