import React from 'react'

const Nav = () => {
  return (
    <div className='Nav'>
      <a href="#">
        <img src='/images/logo-color.png' alt="My cool logo is <j.cooper> with colored in o's" className='nav--logo' />
      </a>
      <div className='nav--linkgroup'>
        <a href="#Landing">home</a>
        <a href='#AboutMe' className='nav--link'>about</a>
        <a href='#Projects' className='nav--link'>projects</a>
        <a href='#ContactMe' className='nav--link'>contact</a>
      </div>
    </div>
  )
}

export default Nav
