import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
      .then((r) => r.json())
      .then((json) => setNutri(json));
  }, []);

  return (
    <div>
      <header>
        React Nutri
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className={`article article-${item.id}`}>
            <strong>{item.titulo}</strong><br />
            <img src={item.capa} alt={item.titulo} /><br />
            <p>{item.subtitulo}</p><br />
            <button>Acessar</button>
          </article>
        );
      })}
    </div>
  );
}

export default App;