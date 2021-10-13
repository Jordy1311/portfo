import React from 'react'
import Typewriter from 'typewriter-effect'

const LandingTypewriter = () => {
  const phrases = [
    'infectiously curious',
    'coffee fanatic',
    'straight-up communicator',
    'cycling nerd',
    'dependable friend',
    'enthusiastic problem solver',
    'dope human',
    'authentic to the bone',
    'natural collaborator',
    'all-round great guy',
    'uses === instead of ==',
    'juggler!'
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
        .pauseFor(150)
        .deleteAll()
        .start()
    }}/>
  )
}

export default LandingTypewriter
