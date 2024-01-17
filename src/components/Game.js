import React, { useState } from 'react';
import Grid from './Grid';
import Card from './Card';
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
    // setIsQuizActive(false);
  };

  const showQuiz = () => {
    console.log('Showing quiz!');
    setIsQuizActive(true);
  };

  return (
    <div>
      <Card
        drawnCard={drawnCard} onCardDraw={handleCardDraw} isQuizActive={isQuizActive} onQuizSubmit={handleQuizSubmit} setDrawnCard={setDrawnCard} showQuiz={showQuiz}
      />
      <Grid 
        position={position} setPosition = {setPosition} showQuiz={showQuiz} 
      />
      {isGameWon && <div className="win-message">Congratulations! You've won! You've saved SpongeBob!!!</div>}
    </div>
  );
};

export default Game;
