import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'

export default function Controls(props) {
	const dispatch = useDispatch()
	const { isRunning, gameOver } = useSelector((state) => state.game)
	useEffect(() => {
		document.addEventListener('keydown', (e) => {
		  console.log(e)
		  switch(e.keyCode) {
			case 37: // LEFT
			  dispatch(moveLeft())
			  break
			case 38: // ROTATE/UP
			  dispatch(rotate())
			  break
			case 39: // RIGHT
			  dispatch(moveRight())
			  break
			case 40: // DOWN
			  dispatch(moveDown())
			  break
			default: 
			  // 
		  }
		})
	  }, [])
	return (
		<div className="controls">
	
			<button className="control-button" onClick={(e) => {
				if (!isRunning || gameOver) { return }
				dispatch(moveLeft())
			}}>⬅</button>

			<button className="right-button" onClick={(e) => {
				if (!isRunning || gameOver) { return }
				dispatch(moveRight())
			}}>⬅</button>
			{/* rotate */}
			<button className="control-button" onClick={(e) => {
				if (!isRunning || gameOver) { return }
				dispatch(rotate())
			}}>⬆</button>
			{/* down */}
			<button className="control-button" onClick={(e) => {
				if (!isRunning || gameOver) { return }
				dispatch(moveDown())
			}}>⬇</button>
		</div>
	)
}