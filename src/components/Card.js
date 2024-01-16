import React, { useState } from 'react';
import './Card.css';

const Card = () => {
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

  const handleButtonClick = () => {
    // Generate a random number between -9 and 9
    const randomCard = Math.floor(Math.random() * 19) - 9;
    
    // Update the state with the drawn card value
    setDrawnCard(randomCard);
  };

  return (
    <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
      <div className="e-card e-card-horizontal" style={{ width: `200px` }}>
        <div style={{ height: '175px' }}>
          <img
            src="https://static.wikia.nocookie.net/spongebob/images/9/98/Blue_Jellyfish.png"
            alt="Sample"
            style={{ height: `100%`, width: 'auto' }}
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
          <div className="e-card" style={{ backgroundColor: 'white', margin: '10px', padding: '10px', textAlign: 'center' }}>
            <p>{drawnCard}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
