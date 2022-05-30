import { useState } from 'react';
import React from 'react';
import './App.scss';

function App() {
  const [quote, setQuote] = useState("Don't let past mistakes make you lose hope of achieving good. Some of those with the worst past have made a great future for themselves.");
  const [author, setAuthor] = useState("Mufti Menk");
  const [randomNumber, setRandomNumber] = useState(0);
  let newQuote = "Obstacles on our path are some of the tests of life. They make us stronger, better people and open up doors we had never imagined.";
  let newAuthor = "Mufti Menk";
  
  const generateRondomNumber = () => {
    let randomInteger = Math.floor(Math.random()*3);
    setRandomNumber(randomInteger);
    switch(randomInteger){
      case 0:
        changeQuoteAndAuthor1();
        break;
      case 1:
        changeQuoteAndAuthor2();
        break;
      case 2:
        changeQuoteAndAuthor3();
        break
      default:
        changeQuoteAndAuthor1()
    }
  }
  const changeQuoteAndAuthor1 = () =>{
    setQuote("Don't let past mistakes make you lose hope of achieving good. Some of those with the worst past have made a great future for themselves.");
    setAuthor("Ibrahim Menk");
  } 

  const changeQuoteAndAuthor2 = () => {
    setQuote(newQuote);
    setAuthor(newAuthor);
  }
  const changeQuoteAndAuthor3 = () => {
    setQuote("Every time things become difficult for you, wait for the relief.");
    setAuthor("Shaykh Ibn Uthaymeen");
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rondom Number: {randomNumber}</h1>
        <button onClick={generateRondomNumber}>Generate a new Number</button>
        <p>
        “{quote}”
        </p>
        <p>- {author}</p>
        <button onClick={changeQuoteAndAuthor1}>Change Quote 1</button>
        <button onClick = {changeQuoteAndAuthor2}>Change Quote 2</button>
        <button onClick = {changeQuoteAndAuthor3}>Change Quote 3</button>
      </header>
    </div>
  );
}

export default App;
