import React, { useState, useEffect, useMemo} from "react";

function App(){
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState("");

  const[numero, setNumero] = useState(0);

  const calculo = useMemo(()=>{
    let resultado = 0;
    for(let i = 0; i < numero * 1000; i++){
      resultado += i;
    }
    return resultado;
  }, [numero]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);


  function adicionarTarefa(){
    setTarefas([...tarefas, input]);
    setInput("");
  }

  return(
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button type="button" onClick={adicionarTarefa}>Adicionar</button>

      <p>Número: {numero}</p>
      <p>Resultado do cálculo: {calculo}</p>
      <button onClick={() => setNumero(numero+1)}>Incrimentar</button>
    </div>
  );
}
export default App;