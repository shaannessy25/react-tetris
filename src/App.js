import React from 'react';
import GridBoard from './components/GridBoard'
import NextBlock from './components/NextBlock'
import ScoreBoard from './components/ScoreBoard'
import Controls from './components/Controls'
import MessagePopUp from './components/MessagePopup'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header> 
      <GridBoard /> 
      <NextBlock /> 
      <ScoreBoard />
      <Controls />
      <MessagePopUp />
    </div>
  );
}

export default App;
