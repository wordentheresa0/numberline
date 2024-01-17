import React, { useState } from 'react';
import Square from './Square';
import './Grid.css';

const Grid = () => {
  const ix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  const [position, setPosition] = useState(1);
  const [isGameWon, setIsGameWon] = useState(false);

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
       {isGameWon && <div className="win-message">Congratulations! You've won! You've saved SpongeBob!!!</div>}
    </div>
  );
};

export default Grid;
