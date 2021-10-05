import React from 'react'
import Typewriter from 'typewriter-effect'

const LandingTypewriter = () => {
  const phrases = [
    'genuine friend',
    'coffee fanatic',
    'killer communicator',
    'cycling nerd'
  ]

  return (
    <Typewriter 
      options={{
      wrapperClassName: 'typewriter',
      loop: true,
      autoStart: true, 
      strings: phrases 
      }}
      onInit={typewriter => {
      typewriter
        .pauseFor(200)
        .deleteAll()
        .start()
    }}/>
  )
}

export default LandingTypewriter
