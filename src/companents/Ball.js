import React from 'react'
import pokeBall from '../images/poke_ball.png'
import './Ball.css'

const Ball = ({clickedBall}) => {
  return (
    <div>
        <img className='pokeball' alt='poke-ball' onClick={clickedBall} src={pokeBall}></img>
    </div>
  )
}

export default Ball