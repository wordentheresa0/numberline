import React, { useState, useEffect } from 'react';
import './Square.css';

const Square = ({ text, isCurrent, onClick }) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    let backgroundImageUrl;
  
    if (text === 30) {
      backgroundImageUrl = "https://wallpapers.com/images/high/sad-spongebob-n06og83jcwiics4r.webp";
    } else if (isCurrent) {
      backgroundImageUrl = "'https://i.pinimg.com/564x/33/16/c2/3316c2cb0b978dadfa1fb391fc454e48.jpg'";
    } else {
      backgroundImageUrl = 'https://www.americanoceans.org/wp-content/uploads/2023/06/spongebob-squarepants-1024x671.jpeg';
    }
  
    setBackgroundImage(backgroundImageUrl);
    // eslint-disable-next-line
  }, [isCurrent]);


  const squareStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="square" style={squareStyle} onClick={onClick}>
      <h1 style={{textAlign: 'center'}}>{text}</h1>
    </div>
  );
};

export default Square;
