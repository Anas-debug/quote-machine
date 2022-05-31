import { useState } from 'react';
import React from 'react';
import './App.scss';

function App() {
  const [quote, setQuote] = useState("Don't let past mistakes make you lose hope of achieving good. Some of those with the worst past have made a great future for themselves.");
  const [author, setAuthor] = useState("Mufti Menk");
  const [randomNumber, setRandomNumber] = useState(0);
  
  const generateRondomNumber = () => {
    let randomInteger = Math.floor(Math.random()*3);
    setRandomNumber(randomInteger);
    setQuote(quotesObjectArr[randomInteger].quote);
    setAuthor(quotesObjectArr[randomInteger].author);
  }

  const quotesObjectArr = [
    {
      quote: "Don't let past mistakes make you lose hope of achieving good. Some of those with the worst past have made a great future for themselves.",
      author:"Ibrahim Menk"
     },
    {
      quote: "Obstacles on our path are some of the tests of life. They make us stronger, better people and open up doors we had never imagined.",
       author: "Mufti Menk"
    },
    {
      quote: "Every time things become difficult for you, wait for the relief.",
       author: "Shaykh Ibn Uthaymeen"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Number: {randomNumber}</h1>
        <button onClick={generateRondomNumber}>Generate a new Number</button>
        <p>
        “{quote}”
        </p>
        <p>- {author}</p>
      </header>
    </div>
  );
}

export default App;
