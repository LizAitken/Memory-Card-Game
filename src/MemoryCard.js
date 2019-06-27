import React from 'react';
import './MemoryCard.css';

class MemoryCardBack extends React.Component {
    constructor() {
      super();
        this.state = {
          isFlipped: false
      };     
    }

    clickHandler() {
      this.setState({
        isFlipped: !this.state.isFlipped     
      });
      console.log(this.state);
    };

    render() {
      let MemoryCardInnerClass = 'MemoryCardInner';
      if (this.props.isFlipped) {
        MemoryCardInnerClass += ' flipped';
      }

      return (
        <div className='MemoryCard'>
          <div className={MemoryCardInnerClass} onClick={this.props.pickCard}>
            <div className='MemoryCardBack'>
              <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt="card"/>
            </div>
            <div className='MemoryCardFront'>{this.props.symbol}</div> 
          </div>
        </div>
      );
    }
}

export default MemoryCardBack;