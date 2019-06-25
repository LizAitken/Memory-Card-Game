import React from 'react';
import './App.css';

const headerStyle = {
  background: 'black',
  color: 'white'
}

function App() {
  return (
    <div className="App">
      <header className="App-header" style={headerStyle}>
        <title>Memory Game</title>
        <h2 class="title-name">Memory Game</h2>
        <p class="sub-title">Match cards to win</p>
      </header>
    </div>
  );
}

export default App;
