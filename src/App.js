import React from 'react';
import MemoryCardBack from './MemoryCard.js';
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
      pickedCards: [],
      isFlipped: false
    }
  } 

  unflipCards(card1Index, card2Index) { 
    const card1 = {...this.state.deck[card1Index]},
      card2 = {...this.state.deck[card2Index]};

    card1.isFlipped = false;
    card2.isFlipped = false;

    const newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
          return card1;
      } else if (card2Index === index) {
          return card2;
      } else {
          return card;
      }
    });

    console.log("new deck:", newDeck);

    this.setState({
      deck: newDeck
    });

    console.log("deck:", this.state.deck);
  }

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    } else {
        const cardToFlip = {...this.state.deck[cardIndex]};
        cardToFlip.isFlipped = true;
        let newPickedCards = this.state.pickedCards.concat(cardIndex);

        const newDeck = this.state.deck.map((card, index) => {
          if (cardIndex === index) {
              return cardToFlip;
          }
          return card;
        });

      if (newPickedCards.length === 2) {
          let card1Index = newPickedCards[0],
                card2Index = newPickedCards[1];

          if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
            console.log(newDeck[card1Index].symbol);
              setTimeout(
                  this.unflipCards.bind(this, card1Index, card2Index),
                  1000
              );
          }
          newPickedCards = [];
      }

      this.setState({
          deck: newDeck,
          pickedCards: newPickedCards
      });
      console.log(newPickedCards);
    }
  }
   
  
  render() {
    const cardsJSX = this.state.deck.map((card,index) => {
      return (<MemoryCardBack pickCard={this.pickCard.bind(this, index)} symbol={card.symbol} isFlipped={card.isFlipped} key={index}/>);
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
      );
    }
}

export default App;
