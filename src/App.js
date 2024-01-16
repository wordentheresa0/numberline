import React from 'react';
import Grid from './components/Grid';
import './App.css';
import Card from './components/Card';

const App = () => {
  return (
    <div className="app">
      <h1>Bikini Bottom Number Line</h1>
      <Grid />
      <Card />
    </div>
  );
};

export default App;
