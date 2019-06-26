import React from 'react';
import './MemoryCard.css';


class MemoryCardBack extends React.Component {
    render() {
      return (
        <div className='MemoryCard'>
          <div className='MemoryCardInner flipped'>
            <div idName='MemoryCardBack'>
              <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt="card"/>
            <div className='MemoryCardFront'>∆</div> 
            </div>
          </div>
        </div>
      );
    }
}

export default MemoryCardBack;