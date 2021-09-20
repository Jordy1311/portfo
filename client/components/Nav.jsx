import React from 'react'

const Nav = () => {
  return (
    <div className='Nav'>
      <img src="/images/logo-color.png" alt="Jordan's cool logo is <j.cooper> with colored in o's'" className="nav--logo" />
      <div className="nav--linkgroup">
        <a href="#about" className="nav--link">about</a>
        <a href="#projects" className="nav--link">projects</a>
        <a href="#contact" className="nav--link">contact</a>
      </div>
    </div>
  )
}

export default Nav
