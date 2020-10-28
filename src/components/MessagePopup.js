import React from 'react'
import { useSelector } from 'react-redux'
// Displays a message
export default function MessagePopup(props) {
  return (
    <div className='message-popup'>
      <h1>Message Title</h1>
      <p>Message info...</p>
    </div>
  )
}
