import React, { useState, useEffect } from 'react';
import Square from './Square';
import './Grid.css';

const Grid = ( {isGameWon, setIsGameWon, onSquareClick, correctSquare, setCorrectSquare, drawnCard, setDrawnCard, position, setPosition} ) => {
  const ix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const [currentSquare, setCurrentSquare] = useState(1);


  const handleSquareClick = (index) => {
    setCurrentSquare(index);
    if (index && drawnCard) {
      setCorrectSquare(index + drawnCard);
    }
    
    console.log('position:', position, 'index:', index, 'currentSquare:', currentSquare, 'correctSquare:', correctSquare);

    if (index === correctSquare) {
      setPosition(index);
      
      if (30 === index) {
        setIsGameWon(true);
      }

      setDrawnCard(null);   
    }
    else {
      console.log('Incorrect!')
    }
  }
  

  return (
    <div className="grid">
      {ix.map((index) => (
        <Square
          key={index}
          text={index}
          isCurrent={ (position === index) }
          currentSquare={currentSquare}
          onClick={() => handleSquareClick(index)}
        />
      ))}
       {isGameWon && <div className="win-message">
       <img
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/SpongeBob-and-Patrick-Featured-Image.jpg"
            alt="Sample"
            style={{ height: '35%', width: '35%', marginLeft: '700px', marginBottom: '300px' }}
          />
        </div>}
    </div>
  );
};

export default Grid;
