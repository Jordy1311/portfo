import React from 'react'

import Nav from './Nav'

const Landing = () => {
  return (
    <div className="Landing">
      <Nav />
      <div className='landing--group'>
        <img src='/images/me-mug.jpeg' alt="Photo of me grinning after having just mountain biked up a big hill in Rotorua" className='landing--group--photo' />
        <h2>Hi, I'm Jordan 👋</h2>
        <h1>Something witty |</h1>
        <h3>I am a person who is cool, has interests and loves great collaboration. Work fucking hard and love to know how things tick to get out the best.</h3>
      </div>
    </div>
  )
}

export default Landing
