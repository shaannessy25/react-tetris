import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { howTo, resume } from '../actions';

// Displays a message
export default function Instructions(props) {
  const dispatch = useDispatch();
  const isPaused = useSelector((state) => state.game.isPaused)
  let message = ''
  let isHidden = 'hidden'

  if (isPaused == true){
    message = 'Not Working'
  }
  return (
    <div className={`message-popup ${isHidden}`}>
      <h1>{message}</h1>
    </div>
  )
}