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

// eslint-disable-next-line
const App2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1>Bikini Bottom Number Line</h1>
        <Grid />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card />
      </div>
    </div>
  );
};

export default App;
