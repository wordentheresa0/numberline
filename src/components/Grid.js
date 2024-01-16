import React, { useState } from 'react';
import Square from './Square';
import './Grid.css';

const Grid = () => {
  const ix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

  const [position, setPosition] = useState(1);

  const handleSquareClick = (index) => {
    setPosition(index);
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
    </div>
  );
};

export default Grid;
