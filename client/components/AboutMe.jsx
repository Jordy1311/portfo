import React from 'react'

const AboutMe = () => {
  return (
    <div className='AboutMe'>
      <div className="aboutme--group">
        <div className="aboutme--text">
          <h1>about me</h1>
          <p>
            This is a big fuck off paragraph that talks about me. Maybe something super interesting at first, that could be my big jump to get into this game?
            <br /><br />
            Then maybe how I got here which could include how I learnt for a long while by myself and then was able to do a lot more collaborative work and continue learning through Enspiral Dev Academy.
            <br /><br />
            I could then start talking about what drives me to keep doing this and maybe what I would hope to get from a potential job and the things that are really important to me in that.
          </p>
        </div>
        <img src="/images/me-bush.jpeg" alt="Me waving to you from the middle of a raspberry bush" className='aboutme--photo' />
      </div>
    </div>
  )
}

export default AboutMe
