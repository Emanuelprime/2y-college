// Importando bibliotecas e estilos
import React, { useEffect, useState } from 'react'; // Importa a biblioteca React e dois hooks específicos
import './App.css'; // Importa o arquivo de estilos CSS para o componente

// Definindo o componente App
function App() {
  // Função generateQuote: faz uma requisição GET para a API Kanye Rest e chama a função dailyQuote com a citação obtida
  const generateQuote = () => {
    // Faz uma requisição GET para a API Kanye Rest
    fetch('https://api.kanye.rest/')
      // Converte a resposta da API para JSON
      .then(res => res.json())
      // Chama a função dailyQuote com a citação obtida como argumento
      .then(data => dailyQuote(data))
  }

  // Função dailyQuote: exibe a citação no elemento com o ID "daily-quote"
  const dailyQuote = (quote) => {
    // Obtém o elemento HTML com o ID "daily-quote"
    const blockQuote = document.getElementById('daily-quote');
    // Verifica se o elemento foi encontrado
    if (blockQuote) {
      // Adiciona a classe "text-style" ao elemento
      blockQuote.classList.add('text-style');
      // Define o conteúdo do elemento como a citação obtida
      blockQuote.innerHTML = quote.quote;
    }
  }

  // Retornando o JSX
  return (
    // Define um elemento div que contém os demais elementos
    <div>
      // Define um elemento header com o título da página
      <header>
        Kayne Rest Gerador de Frases
      </header>
      // Define um elemento parágrafo com o ID "daily-quote" que será usado para exibir a citação
      <p id="daily-quote">

      </p>

      // Define um botão que, ao ser clicado, chama a função generateQuote
      <button onClick={() => generateQuote()}>Veja Mais</button>
    </div>
  );
}

// Exportando o componente
export default App; // Exporta o componente App como o padrão para ser usado em outras partes da aplicação