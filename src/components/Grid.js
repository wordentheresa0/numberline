import React, { useState } from 'react';
import Square from './Square';
import './Grid.css';

const Grid = ( {isGameWon, setIsGameWon} ) => {
  const ix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  const [position, setPosition] = useState(1);
  //const [isGameWon, setIsGameWon] = useState(false);

  const handleSquareClick = (index) => {
    if (index >= 1 && index <= 30) {
      setPosition(index);

      if (index === 30) {
        handleWin();
      }
    }
  };

  const handleWin = () => {
    setIsGameWon(true);

  };

  return (
    <div className="grid">
      {ix.map((index) => (
        <Square
          key={index}
          text={index}
          isCurrent={position === index}
          onClick={() => handleSquareClick(index)}
        />
      ))}
       {isGameWon && <div className="win-message">
       <img
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/SpongeBob-and-Patrick-Featured-Image.jpg"
            alt="Sample"
            style={{ height: '35%', width: '35%', marginLeft: '700px', marginBottom: '200px' }}
          />
        </div>}
    </div>
  );
};

export default Grid;
