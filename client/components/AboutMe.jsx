import React from 'react'

const AboutMe = () => {
  return (
    <div id='about'>
      <div className="aboutme--group">
        <div className="aboutme--text">
          <h1>about me</h1>
          <p>
            I have taken a jump into the world of tech from an almost 5 year career in Administration and leadership. This was something I was good at but, ultimately, it didn't scratch the itch I had for making an impact that counted.
            <br /><br />
            With the mentorship of a great friend in the industry, I went head-first into self-directed learning following freecodecamp and Udemy courses. I started a couple of personal projects but wanted to really round off my collaboration skills that would make me a full-package. Enter Dev Academy, a 15 week software development course focusing intensely at making developers who are incredible team-players and have all the tools to pick up anything and run with it.
            <br /><br />
            I am now feeling well rounded in both technical and people skills and ready to dive into the industry. I love playing with code and can't wait to work really hard with a group of awesome and like-minded people. I am passionate about working in cohesive and safe teams - effective teamwork is the secret to success.
         </p>
        </div>
        <img src="/images/me-bush.jpeg" alt="Me waving to you from the middle of a raspberry bush" className='aboutme--photo' />
      </div>
    </div>
  )
}

export default AboutMe
