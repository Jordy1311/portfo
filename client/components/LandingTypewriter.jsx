import React from 'react'
import Typewriter from 'typewriter-effect'

const LandingTypewriter = () => {
  const phrases = [
    'developer of software',
    'enthusiastic engineer',
    'brew install --dev jordan',
    'enthusiastic collaborator',
    'energetic learner',
    'natural team-player',
    'straight-up hardworker',
    'inject --filter-coffee',
    'cycle nerd',
    'juggler --badly',
    'boardgame lover',
    'curious creature',
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
