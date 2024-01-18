import React, { useState } from 'react';
import './Card.css';

const Card = ( {position, setPosition, isGameWon, setIsGameWon} ) => {
  const commonStyles = {
    fontSize: '25px',
    color: '#5f2ec9',
    fontFamily: 'cursive',
    margin: 'auto',
    backgroundColor: '#4fbbdb',
    display: 'flex',
    justifyContent: 'center'
  };

  const [drawnCard, setDrawnCard] = useState(null);
  const [mathProb, setMathProb] = useState('');
  //const [isGameWon, setIsGameWon] = useState(false);

  const handleButtonClick = () => {
    if (isGameWon) {
      return;
    }
    
    while (true) {
      const randomCard = Math.floor(Math.random() * 19) - 9;
      const filter = Math.floor(Math.random() * 2);
  
      if (
        randomCard + position > 0 &&
        randomCard + position <= 30 &&
        randomCard !== 0
      ) {
        setDrawnCard(randomCard);
  
        const problem = `${position} + ${randomCard} = ???`;
        setMathProb(problem);
        const answer = position + randomCard;
        setPosition(answer);
  
        if (answer === 30) {
          setIsGameWon(true);
          setMathProb(null);
        }
  
        break;
      }
    }
  };

  return (
    <div style={{ margin: `0px`, display: `flex`, flexDirection: `row`, justifyContent: `center`, marginTop: '-400px' }}>
      <div className="e-card e-card-horizontal" style={{ width: `200px` }}>
        <div style={{ height: '175px' }}>
          <img
            src="https://static.wikia.nocookie.net/spongebob/images/9/98/Blue_Jellyfish.png"
            alt="Sample"
            style={{ height: `100%`, width: 'auto', paddingLeft: '30px' }}
          />
        </div>
        <div className="e-card">
          <div className="e-card-actions e-card-vertical">
            <button className="e-card-btn" style={{ ...commonStyles }} onClick={handleButtonClick}>
              Draw!!!
            </button>
          </div>
        </div>
        {drawnCard !== null && (
          <div className="e-card" style={{ ...commonStyles, backgroundColor: 'white', margin: '10px', textAlign: 'center', width: '60px', height: '80px', marginTop: '-200px', marginLeft: '200px' }}>
            <p>{drawnCard}</p>
          </div>
        )}
        {mathProb && (
          <div className="e-card" style={{ ...commonStyles, backgroundColor: 'white', margin: '10px', padding: '10px', textAlign: 'center', width: '110px', marginLeft: '200px', fontSize: '20px' }}>
            <p>{mathProb}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;