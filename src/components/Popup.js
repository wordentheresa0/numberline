import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupGfg() {
	return (
		<div>
			<Popup trigger=
				{<button style={{fontWeight:'bold', position: 'absolute', top: 0, right: 0}}> ? </button>} 
				modal nested>
				{
					close => (
						<div className='modal'>
							<div className='content'>
                <h1 style={{fontWeight: 'bold', color: 'black'}}>
                  How to Play Bikini Bottom Number Line
                </h1>
                <h3 style={{fontWeight:'normal'}}>Purpose: Learning how to add and subtract while using a numberline.</h3>
                <h3 style={{fontWeight:'normal'}}>Goal: Help Patrick reunite with SpongeBob!</h3>
                <h3 style={{fontWeight:'normal'}}>Playing the Game:</h3>
                <ol>
                  <li>Patrick, your character, begins on number one.</li>
                  <li>Click on the DRAW!!! Button to generate a card</li>
                  <li>Each card has a number. You must add your current position number to the number on the card using your number line.</li>
                  <li>The sum of the two numbers is your next position for Patrick. Click on the number you want Patrick to move to.</li>
                  <li>Repeat this process until you reach SpongeBob at tile 30.</li>
                  <li>A picture of Patrick and SpongeBob hugging will appear when you reach the end successfully.</li>
                </ol>
                <h2 style={{fontWeight:'bold'}}>Happy Playing!!</h2>
							</div>
							<div>
								<button onClick=
									{() => close()}>
										Close
								</button>
							</div>
						</div>
					)
				}
			</Popup>
		</div>
	)
};
