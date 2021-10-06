import React from 'react'

import LandingTypewriter from './LandingTypewriter'
import Nav from './Nav'

const Landing = () => {

  return (
    <>
      <Nav />
      <div id="home">
        <div className='landing--group'>
          <img src='/images/me-mug.jpeg' alt="Me grinning after having just mountain biked up a big hill in Rotorua" className='landing--group--photo' />
          <div className="landing--group--text">
            <h2>Hi, I'm Jordan 👋</h2>

            <LandingTypewriter />

            <h3>Full-stack Software Developer who's keen to make waves not splashes. </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
