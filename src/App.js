import { useState } from 'react';
import React from 'react';
import './App.scss';

function App() {
  const [quote, setQuote] = useState("Don't let past mistakes make you lose hope of achieving good. Some of those with the worst past have made a great future for themselves.");
  const [author, setAuthor] = useState("Mufti Menk");
  let newQuote = "Obstacles on our path are some of the tests of life. They make us stronger, better people and open up doors we had never imagined.";
  let newAuthor = "Ibrahim Menk";

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
