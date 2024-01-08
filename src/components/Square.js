import React, { useState, useEffect } from 'react';
import './Square.css';

const Square = ({ text, isCurrent, onClick }) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    setBackgroundImage(isCurrent
      ? 'https://i.pinimg.com/564x/33/16/c2/3316c2cb0b978dadfa1fb391fc454e48.jpg'
      : 'https://www.americanoceans.org/wp-content/uploads/2023/06/spongebob-squarepants-1024x671.jpeg'
    );
  }, [isCurrent]);

  const squareStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="square" style={squareStyle} onClick={onClick}>
      <h1>{text}</h1>
    </div>
  );
};

export default Square;
