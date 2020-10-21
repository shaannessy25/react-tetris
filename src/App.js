import React from 'react';
import GridBoard from './components/GridBoard'
import NextBlock from './components/NextBlock'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header> 
      <GridBoard /> 
      <NextBlock /> 
    </div>
  );
}

export default App;
