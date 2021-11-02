import React, { useState } from 'react'

const Nav = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false)

  const toggleShowResponsive = () => setShowResponsiveMenu(!showResponsiveMenu)

  return (
    <nav>
      <a href="https//:jcoop.co">
        <img src='/images/logo-color.png' alt="j.cooper logo" className='nav--logo' />
      </a>
      <div className='nav--linkgroup'>
        <ul className={showResponsiveMenu ? "nav--menu active" : "nav--menu"}>
          <li className='nav--item'>
            <a onClick={showResponsiveMenu && toggleShowResponsive} href="#home" className='nav--link'>home</a>
          </li>
          <li className='nav--item'>
            <a onClick={showResponsiveMenu && toggleShowResponsive} href='#about' className='nav--link'>about</a>
          </li>
          <li className='nav--item'>
            <a onClick={showResponsiveMenu && toggleShowResponsive} href='#projects' className='nav--link'>projects</a>
          </li>
          <li className='nav--item'>
            <a onClick={showResponsiveMenu && toggleShowResponsive} href='#contact' className='nav--link'>contact</a>
          </li>
        </ul>
        <div onClick={toggleShowResponsive} className={showResponsiveMenu ? "hamburger active" : "hamburger"}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Nav
