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
    while (true) {
      const randomCard = Math.floor(Math.random() * 19) - 9;
      const filter = Math.floor(Math.random() * 2); // Generate filter inside the loop
      
      if (randomCard > 0 || (randomCard <= 0 && filter)) {
        setDrawnCard(randomCard);
        break; // Exit the loop if a valid card is drawn
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <div className="e-card e-card-horizontal" style={{ width: '200px' }}>
        <div style={{ height: '175px' }}>
          <img
            src="https://static.wikia.nocookie.net/spongebob/images/9/98/Blue_Jellyfish.png"
            alt="Sample"
            style={{ height: '100%', width: 'auto', paddingLeft: '30px' }}
          />
        </div>
        <div className="e-card">
          <div className="e-card-actions e-card-vertical">
            <button className="e-card-btn" style={{ ...commonStyles }} onClick={handleButtonClick}>
              Draw!!!
            </button>
          </div>
        </div>
      </div>
      {drawnCard !== null && (
        <div className="e-card" style={{ backgroundColor: 'white', width: '100px', height: '100px', fontSize: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>{drawnCard}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
