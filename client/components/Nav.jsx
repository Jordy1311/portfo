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
            <a onClick={showResponsiveMenu ? toggleShowResponsive : undefined} href="#home" className='nav--link'>Home</a>
          </li>
          <li className='nav--item'>
            <a onClick={showResponsiveMenu ? toggleShowResponsive : undefined} href='#story' className='nav--link'>Story</a>
          </li>
          <li className='nav--item'>
            <a onClick={showResponsiveMenu ? toggleShowResponsive : undefined} href='#projects' className='nav--link'>Projects</a>
          </li>

          {showResponsiveMenu && <li className='nav--item'>
            <a onClick={showResponsiveMenu ? toggleShowResponsive : undefined} href='#projects' className='nav--link'>Proficiencies</a>
          </li>}

          <li className='nav--item'>
            <a onClick={showResponsiveMenu ? toggleShowResponsive : undefined} href='#contact' className='nav--link'>Contact</a>
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
