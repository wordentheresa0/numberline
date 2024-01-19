import React, { useState } from 'react';
import Grid from './Grid';
import Card from './Card';
import Popup from './Popup'
import './Game.css';

const Game = () => {

 // const UserContext = createContext();

  const [drawnCard, setDrawnCard] = useState(null);
  const [position, setPosition] = useState(1);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isQuizActive, setIsQuizActive] = useState(false);
  
  // const [quizQuestion, setQuizQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');

  const handleCardDraw = () => {
    while (true) {
      const randomCard = Math.floor(Math.random() * 19) - 9;
      const filter = Math.floor(Math.random() * 2);
      
      if (randomCard > 0 || (randomCard <= 0 && filter)) {
        setDrawnCard(randomCard);
        break;
      }
    }

    setIsQuizActive(true);
  };

  const handleQuizSubmit = () => {
    const correctAnswer = position + drawnCard;
    if (parseInt(userAnswer, 10) === correctAnswer) {
      setPosition(correctAnswer);
    }
    setIsQuizActive(false);
  };

  const showQuiz = () => {
    


    // THIS IS WHERE WE NEED TO IMPLEMENT QUIZ



    setIsQuizActive(true);
  };

  return (
    <div>
      <Popup />
      <Grid 
        position={position} setPosition = {setPosition} showQuiz={showQuiz} isGameWon={isGameWon} setIsGameWon={setIsGameWon}
      />
      <Card
        position={position} setPosition={setPosition} isGameWon={isGameWon} setIsGameWon={setIsGameWon}//drawnCard={drawnCard} onCardDraw={handleCardDraw} isQuizActive={isQuizActive} onQuizSubmit={handleQuizSubmit} setDrawnCard={setDrawnCard} showQuiz={showQuiz} position={position} setPosition={setPosition}
      />
      {/* {isGameWon && <div className="win-message">Congratulations! You've won! You've saved SpongeBob!!!</div>} */}
    </div>
  );
};

export default Game;
