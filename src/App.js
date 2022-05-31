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
    switch(randomInteger){
      case 0:
        setQuote(quotes[0]);
        setAuthor(authors[0]);
        break;
      case 1:
        setQuote(quotes[1]);
        setAuthor(authors[1]);
        break;
      case 2:
        setQuote(quotes[2]);
        setAuthor(authors[2]);
        break
      default:
        setQuote(quotes[0]);
        setQuote(authors[0]);
    }
  }


  const quotes = [
    "Don't let past mistakes make you lose hope of achieving good. Some of those with the worst past have made a great future for themselves.",
    "Obstacles on our path are some of the tests of life. They make us stronger, better people and open up doors we had never imagined.",
    "Every time things become difficult for you, wait for the relief."
];
  const authors = ["Ibrahim Menk", "Mufti Menk", "Shaykh Ibn Uthaymeen"];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rondom Number: {randomNumber}</h1>
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
