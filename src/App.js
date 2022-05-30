import './App.scss';

function App() {
  let quote = "Don't let past mistakes make you lose hope of achieving good. Some of those with the worst past have made a great future for themselves.";
  let author = "Mufti Menk";
  return (
    
    <div className="App">
      <header className="App-header">
        <p>
          "{quote}"
        </p>
        <p>- {author}</p>
      </header>
    </div>
  );
}

export default App;
