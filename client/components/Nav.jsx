import React from 'react'

const Nav = () => {
  return (
    <div className='Nav'>
      <a href="#">
        <img src='/images/logo-color.png' alt="My cool logo is <j.cooper> with colored in o's" className='nav--logo' />
      </a>
      <div className='nav--linkgroup'>
        <a href="#home" className='nav--link'>home</a>
        <a href='#about' className='nav--link'>about</a>
        <a href='#projects' className='nav--link'>projects</a>
        <a href='#contact' className='nav--link'>contact</a>
      </div>
    </div>
  )
}

export default Nav
