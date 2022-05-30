import { useState } from 'react';
import React from 'react';
import './App.scss';

function App() {
  const [quote, setQuote] = useState("Don't let past mistakes make you lose hope of achieving good. Some of those with the worst past have made a great future for themselves.");
  const [author, setAuthor] = useState("Mufti Menk");
  let newQuote = "Obstacles on our path are some of the tests of life. They make us stronger, better people and open up doors we had never imagined.";
  let newAuthor = "Ibrahim Menk";

  const changeQuoteAndAuthor = () => {
    setQuote(newQuote);
    setAuthor(newAuthor);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
        “{quote}”
        </p>
        <p>- {author}</p>
        <button onClick = {changeQuoteAndAuthor}>Change Quote</button>
      </header>
    </div>
  );
}

export default App;
