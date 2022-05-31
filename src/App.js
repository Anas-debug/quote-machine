import { useState } from 'react';
import React from 'react';
import './App.scss';

function App() {
  const [quote, setQuote] = useState("Don't let past mistakes make you lose hope of achieving good. Some of those with the worst past have made a great future for themselves.");
  const [author, setAuthor] = useState("Mufti Menk");
  //const [randomNumber, setRandomNumber] = useState(0);
  
  const getRandomQuote = () => {
    let randomInteger = Math.floor(Math.random()* quotesObjectArr.length);
    //setRandomNumber(randomInteger);
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
    },
    {
      quote: "What really counts are good endings, not flawed beginnings",
      author: "Ibn Taymiyyah"
    },
    {
      quote:"The worst colonization is not the colonization of your lands, it is the colonization of your minds",
      author: "Abdu Raheem Green"
    },
    {
      quote:"I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.",
      author:"Mohammed Ali"
    },
    {
      quote:"Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance next time",
      author: "Malcolm X"
    },
    {
      quote:"It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe.",
      author:"Mohammed Ali"
    },
    {
      quote: "Everyone has a plan until they get punched in the mouth",
      author: "Mike Tyson"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/*<h1>Random Number: {randomNumber}</h1>*/}
        <button onClick={getRandomQuote}>Generate a new Quote</button>
        <p>
        “{quote}”
        </p>
        <p>- {author}</p>
      </header>
    </div>
  );
}

export default App;