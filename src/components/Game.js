import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import Card from './Card';
import Popup from './Popup'
import './Game.css';

const Game = () => {
  const [drawnCard, setDrawnCard] = useState(null);
  const [position, setPosition] = useState(1);
  const [isGameWon, setIsGameWon] = useState(false);
  const [correctSquare, setCorrectSquare] = useState(1);


  useEffect(() => {
    if (drawnCard !== null) {
      setCorrectSquare(position + drawnCard);
      console.log('correctSquare:', position + drawnCard);

    }
  }, [drawnCard, position]);

  return (
    <div>
      <Popup />
      <Grid 
        position={position} 
        setPosition = {setPosition} 
        isGameWon={isGameWon} 
        setIsGameWon={setIsGameWon} 
        correctSquare={correctSquare}
        setCorrectSquare={setCorrectSquare}
        setDrawnCard={setDrawnCard}
      />
      <Card
        position={position} 
        setPosition={setPosition} 
        isGameWon={isGameWon} 
        setIsGameWon={setIsGameWon}
        setDrawnCard={setDrawnCard}
        drawnCard={drawnCard}
      />
    </div>
  );
};

export default Game;
