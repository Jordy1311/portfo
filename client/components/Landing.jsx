import React from 'react'

import LandingTypewriter from './LandingTypewriter'
import Nav from './Nav'

const Landing = () => {

  return (
    <>
      <Nav />
      <div id="home">
        <div className='landing--group'>
          <img src='/images/me-cartoon-sitting.svg' alt="Cartoon me sitting on the ground" className='landing--group--photo' />
          <div className="landing--group--text">
            <h1 className="landing--welcome">Hi, I'm Jordan 👋</h1>

            <LandingTypewriter />

            <h2>Full-stack Software Developer keen to make waves not splashes. </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
