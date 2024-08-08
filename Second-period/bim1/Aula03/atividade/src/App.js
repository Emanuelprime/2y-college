import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const generateQuote = () => {
    fetch('https://api.kanye.rest/')
      .then(res => res.json())
      .then(data => dailyQuote(data))
  }

  const dailyQuote = (quote) => {
    const blockQuote = document.getElementById('daily-quote');
    if (blockQuote) {
      blockQuote.classList.add('text-style');
      blockQuote.innerHTML = quote.quote;
    }
  }

  return (
    <div>
      <header>
        Kayne Rest Gerador de Frases
      </header>
      <p id="daily-quote">

      </p>

      <button onClick={() => generateQuote()}>Veja Mais</button>
    </div>
  );
}

export default App;