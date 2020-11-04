import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resume } from '../actions';

// Displays a message
export default function MessagePopup(props) {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.game.isRunning)
  const gameOver = useSelector((state) => state.game.gameOver)

  let message = ''
  let isHidden = 'hidden'

  if (gameOver) {
    message = 'Game Over'
    isHidden = ''
  } else if (!isRunning) {
    message = 'Paused'
    isHidden = ''
  }

  return (
    <div className={`message-popup ${isHidden}`}>
      <h1>{message}</h1>
      <button onClick={(e) => {
        dispatch(resume())
      }}>Resume</button>
      
      <button>How To Play</button>
    </div>
  )
}