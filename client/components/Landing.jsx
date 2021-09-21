import React from 'react'
import Typewriter from 'typewriter-effect'

import Nav from './Nav'

const Landing = () => {
  const phrases = [
    'Junior developer',
    'Amazing friend',
    'Redux smasher',
    'Javascript jazz artist',
    'React racedriver',
    'Coffee fanatic'
  ]

  return (
    <>
      <Nav />
      <div id="Landing">
        <div className='landing--group'>
          <img src='/images/me-mug.jpeg' alt="Me grinning after having just mountain biked up a big hill in Rotorua" className='landing--group--photo' />
          <div className="landing--group--text">
            <h2>Hi, I'm Jordan 👋</h2>

            <Typewriter 
              options={{
                wrapperClassName: 'typewriter',
                cursorClassName: 'typewriter--cursor',
                loop: true,
                autoStart: true, 
                strings: phrases 
              }}
              onInit={typewriter => {
                typewriter
                  .pauseFor(500)
                  .deleteAll()
                  .start()
              }}/>

            <h3>I am a person who is cool, has interests and loves great collaboration. Work fucking hard and love to know how things tick to get out the best.</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
