import React from 'react';
import MemoryCard from './MemoryCard.js';
import './App.css';

function generateDeck() {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  let deck = [];
  for (let i=1; i <=16; i++) {
    deck.push({isFlipped: false, symbol: symbols[i%8]});
  };
  shuffle(deck);
  return deck;
}

function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

const headerStyle = {
  background: 'black',
  color: 'white'
}

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    }
  } 

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex] === this.state.isFlipped) {
      return;
    }
    
    let cardToFlip = {...this.state.deck[cardIndex] = true};
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card,index) => {
      if (this.cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });

    this.setState({deck: newDeck, pickedCards: newPickedCards});    
  }
  
  render() {
    const cardsJSX = this.state.deck.map((card,index) => {
      return (<MemoryCard pickCard={this.pickCard.bind(this, index)} symbol={card.symbol} isFlipped={card.isFlipped} key={index}/>);
    });

    return (
      <div className="App">
        <header className="App-header" style={headerStyle}>
          <title>Memory Game</title>
          <h2 className="title-name">Memory Game</h2>
          <p className="sub-title">Match cards to win</p>
        </header>
        <div className="card-group">
          {cardsJSX.slice(0,4)}
        </div>
        <div className="card-group">
          {cardsJSX.slice(4,8)}
        </div>
        <div className="card-group">
          {cardsJSX.slice(8,12)}
        </div>
        <div className="card-group">
          {cardsJSX.slice(12,16)}
        </div>
      </div>
      )
    }
}

export default App;
