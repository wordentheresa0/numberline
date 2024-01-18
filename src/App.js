import React from 'react';
import Grid from './components/Grid';
import './App.css';
import Card from './components/Card';
import Game from './components/Game'

const App = () => {
  return (
    <div className="app" style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Bikini Bottom Number Line</h1>
      <Game />
    </div>
  );
};

export default App;
