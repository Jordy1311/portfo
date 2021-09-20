import React from 'react'

const Nav = () => {
  return (
    <div className='Nav'>
      <img src="/images/logo-color.png" alt="Jordan's cool logo is <j.cooper> with colored in o's'" className="logo-main" />
      <div className="nav_linkgroup">
        <a href="#about" className="nav_link">about</a>
        <a href="#projects" className="nav_link">projects</a>
        <a href="#contact" className="nav_link">contact</a>
      </div>
    </div>
  )
}

export default Nav
