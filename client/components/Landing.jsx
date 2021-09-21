import React from 'react'

import Nav from './Nav'

const Landing = () => {
  return (
    <>
      <Nav />
      <div className="Landing">
        <div className='landing--group'>
          <img src='/images/me-mug.jpeg' alt="Me grinning after having just mountain biked up a big hill in Rotorua" className='landing--group--photo' />
          <div className="landing--group--text">
            <h2>Hi, I'm Jordan 👋</h2>
            <h1>Typewriter writin |</h1>
            <h3>I am a person who is cool, has interests and loves great collaboration. Work fucking hard and love to know how things tick to get out the best.</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
