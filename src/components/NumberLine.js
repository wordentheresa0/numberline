// NumberLine.js
import React from 'react';
import './NumberLine.css';

const NumberLine = () => {

  return (
    <div className="number-line">
        <div className='rect'>
            <div className='text'>
                <div className='tic'></div>
                <div>1</div>
            </div>
        </div>
        <div className='rect'>
            <div className='text'>
                <div className='tic'></div>
                <div>2</div>
            </div>
        </div>
        <div className='rect'>
            <div className='text'>
                <div className='tic'></div>
                <div>3</div>
            </div>
        </div>
        
    </div>
  );
};

export default NumberLine;
