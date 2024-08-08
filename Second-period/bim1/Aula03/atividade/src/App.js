import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const generateQyote = () => {
    fetch ('https://api.kanye.rest/')
    .then( res => res.json())
    .then(data =>dailyQuote(data))
  }

  const dailyQuote = (quote) => {
    const blockQuote = document.getElementById('daily-quote');
    blockQuote.classList.add('text-style');
    blockQuote.innerHTML = quote.quote;
  }

  return(
    <div>
      <header>
        Kayne Rest Gerador de Frases
      </header>
      <p id="dailyQuote">

      </p>

      <button onclick="generateQuote()">Veja Mais</button>
    </div>
  );

}